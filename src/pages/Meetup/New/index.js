import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { FaPlusCircle, FaCamera } from 'react-icons/fa';
import api from '~/services/api';

// import BannerInput from '~/pages/Meetup/BannerInput';

import { Container, Image } from './styles';

export default function New() {
  async function handleSubmit({ title, description, date, location }) {
    const response = await api.post('meetups', {
      title,
      description,
      location,
      date,
    });
    console.tron.log(response);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Image>
          <FaCamera size={54} />
          <strong>Selecionar imagem</strong>
        </Image>
        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />

        <Input name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />

        <button type="submit">
          <FaPlusCircle />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}
