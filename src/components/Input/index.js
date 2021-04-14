import React from 'react';
import PropTypes from 'prop-types';

import { Container, InputField } from './styles';

export default function Input({ label, name, ...rest }) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <InputField name={name} {...rest} />
    </Container>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  name: '',
};
