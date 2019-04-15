const redux = require('@sialvsic/redux');
import React from 'react';
import ReactDOM from 'react-dom';

const reducers = function() {

};

const store = redux.createStore(reducers);

console.log(store);

const Root = function() {
  return <div>1233344</div>;
};

ReactDOM.render(<Root/>, document.getElementById('root'));
