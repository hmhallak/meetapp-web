import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { FaPlusCircle } from 'react-icons/fa';
import api from '~/services/api';

import history from '~/services/history';

// import BannerInput from '~/pages/Meetup/BannerInput';

import { Container } from './styles';
import BannerInput from '~/pages/Meetup/components/BannerInput';
import DatePicker from '~/pages/Meetup/components/DatePicker';

export default function New() {
  async function handleSubmit({
    title,
    description,
    date,
    location,
    banner_id,
  }) {
    const response = await api.post('meetups', {
      title,
      description,
      location,
      date,
      banner_id,
    });

    console.tron.log(response);
    history.push('/dashboard');
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />

        {/* <Input name="date" placeholder="Data do meetup" /> */}
        <DatePicker name="date" placeholder="Data do meetup" time />
        <Input name="location" placeholder="Localização" />

        <button type="submit">
          <FaPlusCircle />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}
