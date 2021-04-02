import { Switch, Route } from 'react-router-dom';

// import SignIn from '../pages/SignIn';
// import SignUp from '../pages/SignUp';

import Overview from '../pages/Overview';
import Tour from '../pages/Tour';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Account from '../pages/Account';
import MyTours from '../pages/MyTours';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Overview} />
      <Route path="/tour/:id" component={Tour} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/me" component={Account} />
      <Route path="/my-tours" component={MyTours} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
