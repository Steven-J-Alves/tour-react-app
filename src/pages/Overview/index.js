import React from 'react';
import api from '../../services/api';

// import { Container } from './styles';

import DefaultLayout from '../_layouts/default';

function Overview() {
  api.get('users/me');

  return (
    <DefaultLayout>
      <h1>Overview</h1>;
    </DefaultLayout>
  );
}

export default Overview;
