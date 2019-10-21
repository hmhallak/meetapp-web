import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';
import { FaEdit, FaTrash, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

import { Container, Meetup } from './styles';

export default function Details({ match }) {
  const [meetup, setMeetup] = useState([]);

  const meetup_id = match.params.meetup;

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/${meetup_id}`);

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const date = utcToZonedTime(response.data.date, timezone);

      const data = {
        ...response.data,
        dateFormatted: format(date, "d 'de' MMMM, 'às' HH:mm'h'", {
          locale: pt,
        }),
      };

      setMeetup(data);
    }

    loadMeetup();
  }, [meetup.date, meetup_id]);

  async function cancelMeetup() {
    console.tron.log(meetup.id);
    try {
      await api.delete(`meetups/${meetup.id}`);
      toast.success('O meetup foi excluído com sucesso!');
      history.push('/dashboard');
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }

  return (
    <Container>
      <header>
        <strong>{meetup.title}</strong>
        <div>
          <Link to={`/edit/${encodeURIComponent(meetup.id)}`}>
            <FaEdit />
            Editar
          </Link>
          <button type="button" onClick={cancelMeetup}>
            <FaTrash />
            Cancelar
          </button>
        </div>
      </header>

      <Meetup>
        <img
          src={
            meetup.banner
              ? meetup.banner.url
              : 'https://picsum.photos/seed/picsum/940/300'
          }
          alt=""
        />

        <p>{meetup.description}</p>

        <footer>
          <span>
            <FaCalendar size={18} />
            {meetup.dateFormatted}
          </span>

          <span>
            <FaMapMarkerAlt size={18} />
            {meetup.location}
          </span>
        </footer>
      </Meetup>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      meetup: PropTypes.string,
    }),
  }).isRequired,
};
