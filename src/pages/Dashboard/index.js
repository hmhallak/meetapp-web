import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaChevronRight } from 'react-icons/fa';
import api from '~/services/api';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <button type="button">
          <FaPlusCircle />
          Novo meetup
        </button>
      </header>

      <ul>
        <Meetup>
          <strong>Meetup do React Native</strong>
          <Link to="/meetup">
            <span>30 de Novembro, às 20h</span>
            <FaChevronRight color="#fff" size={14} />
          </Link>
        </Meetup>
      </ul>
    </Container>
  );
}
