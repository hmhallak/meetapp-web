import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import { FaPlusCircle } from 'react-icons/fa';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { utcToZonedTime } from 'date-fns-tz';
import api from '~/services/api';

import history from '~/services/history';

import { Container } from './styles';
import BannerInput from '~/pages/Meetup/components/BannerInput';
import DatePicker from '~/pages/Meetup/components/DatePicker';

const schema = Yup.object().shape({
  title: Yup.string().required('O título do meetup é obrigatório.'),
  description: Yup.string().required('A descrição do meetup é obrigatória.'),
  date: Yup.date().required('A data do meetup é obrigatória.'),
  location: Yup.string().required('A localização do meetup é obrigatória'),
  banner_id: Yup.number().required('O banner do meetup é obrigatório.'),
});

export default function Edit({ match }) {
  const [meetup, setMeetup] = useState({});

  const meetup_id = match.params.meetup;

  const [description, setDescription] = useState('');

  useEffect(() => {
    setDescription(meetup.description);
  }, [meetup.description]);

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/${meetup_id}`);

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const date = utcToZonedTime(response.data.date, timezone);

      setMeetup({ ...response.data, date });
    }

    loadMeetup();
  }, [meetup_id]);

  async function handleSubmit({
    title,
    description,
    date,
    location,
    banner_id,
  }) {
    try {
      await api.put(`meetups/${meetup_id}`, {
        title,
        description,
        location,
        date,
        banner_id,
      });
      history.push('/dashboard');
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }

  return (
    <Container>
      <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input
          multiline
          name="description"
          placeholder="Descrição completa"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        {meetup.date && <DatePicker name="date" placeholder="Data do meetup" />}
        <Input name="location" placeholder="Localização" />

        <button type="submit">
          <FaPlusCircle />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}

Edit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      meetup: PropTypes.string,
    }),
  }).isRequired,
};
