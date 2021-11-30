import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Ionicon from 'react-ionicons';
import Title from './Title';

import styles from './landingStyle-jss';
import AppRouter from './routers/AppRouter';
          import configureStore from './store/configureStore';
          import { addExpense } from './actions/expenses';
          import { setTextFilter } from './actions/filters';
          import getVisibleExpenses from './selectors/expenses';
        
          import '../styles/styles.scss';


let counter = 0;
function createFeatureData(icon, title, desc) {
  counter += 1;
  return {
    id: counter,
    icon,
    title,
    desc
  };
}

class Feature extends React.Component {
  

  render() {
    const { classes, slideMode } = this.props;
    const store = configureStore();
          
    store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
    store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
    store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));
    
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
    
    const jsx = (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );

    
    return (
      <div className={classNames(classes.feature, slideMode ? classes.mono : classes.color)}>
        <div className={!slideMode ? classes.container : ''}>
      
          <Title title="Expencify" align="center" monocolor={slideMode && true} />
          

          
          
         


        </div>
      </div>
    );
  }
}

Feature.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool
};

Feature.defaultProps = {
  slideMode: false
};

export default withStyles(styles)(Feature);
