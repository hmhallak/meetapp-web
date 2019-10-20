import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { FaPlusCircle } from 'react-icons/fa';
import * as Yup from 'yup';
import api from '~/services/api';

import history from '~/services/history';

// import BannerInput from '~/pages/Meetup/BannerInput';

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

export default function New() {
  async function handleSubmit({
    title,
    description,
    date,
    location,
    banner_id,
  }) {
    await api.post('meetups', {
      title,
      description,
      location,
      date,
      banner_id,
    });

    history.push('/dashboard');
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />

        {/* <Input name="date" placeholder="Data do meetup" /> */}
        <DatePicker name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />

        <button type="submit">
          <FaPlusCircle />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}
