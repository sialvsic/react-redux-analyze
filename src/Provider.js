import React from 'react';

class Provider extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        { this.props.children }
      </React.Fragment>
    );
  }

}

export default Provider;
