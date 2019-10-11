import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import pt from 'date-fns/locale/pt';

import { useField } from '@rocketseat/unform';

import { Container } from './styles';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name, placeholder, time }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  console.tron.log(time);
  return (
    <Container>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        placeholderText={placeholder}
        showTimeSelect
        timeFormat="HH:mm"
        timeCaption="Horário"
        dateFormat="MMMM d, yyyy h:mm aa"
        locale={pt}
      />
      {error && <span>{error}</span>}
    </Container>
  );
}
