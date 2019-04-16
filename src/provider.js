import React from 'react';

export const MyContext = React.createContext({});

class Provider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      store: props.store,
    };
    this.getState = this.getState.bind(this);
  }

  getState(){
    return this.state.store.getState();
  }

  // static getDerivedStateFromProps(props, state){
  //   console.log(props.store);
  //   if(props.store !== state.store){
  //     return {
  //       store: props.store,
  //     };
  //   }
  //
  //   return null;
  // }

  render(){
    return (
      <MyContext.Provider value={ {getState: this.getState} }>
        { this.props.children }
      </MyContext.Provider>
    );
  }

}

export default Provider;
