import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Calculator from './component/Calculator';
import redux from '@sialvsic/redux';
// import * as redux from 'redux';

const initialState = {
  calculate: {
    result: 0,
  },
};

const reducers = function(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return Object.assign({}, state, {
        calculate: {
          ...state.calculate,
          result: state.calculate.result + action.value,
        },
      });

    case 'MINUS':
      return Object.assign({}, state, {
        calculate: {
          ...state.calculate,
          result: state.calculate.result - action.value,
        },
      });
    default:
      return state;
  }

};

let store = redux.createStore(reducers);

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={ store }>
        <Calculator/>
      </Provider>
    );
  }
}

ReactDOM.render(<Root/>, document.getElementById('root'));