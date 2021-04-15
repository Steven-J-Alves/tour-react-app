import React from 'react';
import PropTypes from 'prop-types';

import { Container, InputField } from './styles';

export default function Input({ label, name, error, ...rest }) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <InputField name={name} error={error} {...rest} />
    </Container>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.bool,
};

Input.defaultProps = {
  label: '',
  name: '',
  error: false,
};
