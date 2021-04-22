import React from 'react';
import api from '../../services/api';

// import { Container } from './styles';

function Overview() {
  api.get('users/me');

  return <h1>Overview</h1>;
}

export default Overview;
