import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Corporate from '../Templates/Corporate';
import { HomePage, FinTech } from '../pageListAsync';

class Landing extends React.Component {
  render() {
    return (
      <Corporate>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/fintech" component={FinTech} />
        </Switch>
      </Corporate>
    );
  }
}

export default Landing;
