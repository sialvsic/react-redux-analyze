const React = require('react');

class Provider extends React.component {

  getChildContext() {
    return {store: this.props.store};
  }

  render() {
    return (
      <React.Fragment>
        { this.props.children }
      </React.Fragment>
    );
  }

}

module.exports = Provider;
