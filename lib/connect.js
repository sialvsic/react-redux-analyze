import React from 'react';
import { MyContext } from './provider';

function connect(mapStateToProps, mapDispatchToProps) {

  return function (Component) {

    return class Proxy extends React.Component {
      static contextType = MyContext;

      constructor(props, context) {
        super(props);
        this.state = mapStateToProps(context.store.getState());
      }

      componentDidMount() {
        this.context.store.subscribe(() => {
          this.setState(mapStateToProps(this.context.store.getState()));
        });
      }

      render() {
        return (
          <Component
            { ...mapStateToProps(this.context.store.getState()) }
            { ...mapDispatchToProps(this.context.store.dispatch) }
          />
        );
      }
    };
  };
}

export default connect;
