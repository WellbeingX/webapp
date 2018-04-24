import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../reducers/counter'



class DebuggingBar extends React.Component {


  render(){
    return(
        <div style={{background:'red', fontSize:10}}>
        DebugginBar
        {this.props.counter.count}--
        {console.log("Qui la bar")}
        {console.log(this.props)}
        {this.props.counter.answersArray}--
        {this.props.counter.email}
        </div>
      )
}
}




const mapStateToProps = state => ({
  counter: state.counter,
  email: state.email
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DebuggingBar)
