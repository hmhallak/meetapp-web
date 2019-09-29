import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaChevronRight } from 'react-icons/fa';
import api from '~/services/api';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizer');

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = response.data.map(meetup => {
        const date = utcToZonedTime(parseISO(meetup.date), timezone);
        return {
          ...meetup,
          dateFormatted: format(date, "d 'de' MMMM, 'às' H'h'", {
            locale: pt,
          }),
        };
      });

      setMeetups(data);
    }

    loadMeetups();
  }, []);

  console.tron.log(meetups);
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
        {meetups.map(meetup => (
          <Meetup key={meetup.id}>
            <Link to="/meetup">
              <strong>{meetup.title}</strong>
            </Link>

            <Link to="/meetup">
              <span>{meetup.dateFormatted}</span>
              <FaChevronRight color="#fff" size={14} />
            </Link>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
