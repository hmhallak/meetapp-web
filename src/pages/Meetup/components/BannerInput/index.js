import React, { useState, useRef, useEffect } from 'react';
import { FaCamera } from 'react-icons/fa';
import { useField } from '@rocketseat/unform';
import api from '~/services/api';

import { Container, SelectImage } from './styles';

export default function BannerInput({ name }) {
  const { defaultValue, registerField } = useField('banner');

  const [file, setFile] = useState([]);
  const [preview, setPreview] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setFile(defaultValue && defaultValue.id);
    setPreview(defaultValue && defaultValue.url);
    setLoaded(defaultValue && true);
  }, [defaultValue]);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); //eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
    setLoaded(true);
  }

  return (
    <Container>
      <label htmlFor="banner">
        {loaded ? (
          <img src={preview} alt="" />
        ) : (
          <SelectImage>
            <FaCamera size={54} />
            <strong>Selecionar imagem</strong>
          </SelectImage>
        )}

        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
          name="banner_id"
        />
      </label>
    </Container>
  );
}
