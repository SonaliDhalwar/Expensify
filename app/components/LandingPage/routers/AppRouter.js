import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../ExpenseDashboardPage';
import AddExpensePage from '../AddExpensePage';
import EditExpensePage from '../EditExpensePage';
import HelpPage from '../HelpPage';
import NotFoundPage from '../NotFoundPage';
import Headerr from '../Headerr';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Headerr />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
