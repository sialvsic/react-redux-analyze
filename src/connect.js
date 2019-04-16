import React from 'react'
import { MyContext } from './provider'

function connect(mapStateToProps, mapDispatchToProps) {

  return function (Component) {
    console.log(Component)

    return class Proxy extends React.Component {
      static contextType = MyContext

      render() {
        return (
          <Component
            { ...mapStateToProps(this.context.store.getState()) }
            { ...mapDispatchToProps(this.context.store.dispatch) }
          />
        )
      }
    }
  }
}

export default connect
