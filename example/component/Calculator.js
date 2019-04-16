import React from 'react'
import connect from '../../src/connect'
import { add, minus } from '../action'

class Calculator extends React.Component {
  constructor() {
    super()
    this.add = this.add.bind(this)
    this.minus = this.minus.bind(this)
  }

  add() {
    this.props.add(3)
  }

  minus() {
    this.props.minus(4)
  }

  render() {

    return <div>
      <p>this is a calculator</p>
      <button onClick={ this.add }>ADD</button>
      <button onClick={ this.minus }>Minus</button>
      <p>Result:</p>
      <div>{ this.props.result }</div>
    </div>
  }
}

const mapStateToProps = (state) => {
  console.log('state')
  console.log(state)
  return {
    result: state.calculate.result,
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('dispatch')
  console.log(dispatch)

  return {
    add: (count) => {
      dispatch(add(count))
    },
    minus: (count) => {
      dispatch(minus(count))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
