import React from 'react';
import {MyContext} from './provider';

function connect(mapStateToProps, mapDispatchToProps){

  return function(Component){
    console.log(Component);

    return function(){

      return <MyContext.Consumer>
        { value => {
          console.log(value.getState());
          return <Component/>;
        } }
      </MyContext.Consumer>;
    };
  };
}

export default connect;
