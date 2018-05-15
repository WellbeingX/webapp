import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class About extends Component {
  constructor(props){
    super(props);
    this.state = {
      opacity:0
    }
  }
  componentWillMount(){
    setTimeout(() => this.setState({opacity:1}), 350);
  }
  componentWillUnmount(){
    this.setState({opacity:0})
  }

render() {

    return (

          <div style={{margin:'auto', textAlign:'left', paddingTop:'1rem',  fontSize:'1.8rem', position:'relative', lineHeight:'1rem', opacity:this.state.opacity, transition: 'opacity 0.5s ease-in-out 0.3s'}}>
          <ReactCSSTransitionGroup
           component="div"
           transitionName="dialog"
           transitionEnterTimeout={0}
           transitionLeaveTimeout={500}
           transitionAppear
           transitionAppearTimeout={1200}
          >
            <p style={{fontSize:'1rem',color:'white'}}>
        BetterSpace was founded when three entrepreneurs, Alfredo, Filipa and Jim, asked “What would the Tesla for mental health look like?"
        </p>
        <p style={{color:'white'}}>We are now a growing team of the leading minds mental wellbeing and digital, based in Kings Cross, London.
        </p>
        <p style={{color:'white'}}>We’re inspired by Margaret Mead’s words “Never doubt a small group of committed individuals can change the world. Indeed it’s all that ever does".
      </p>
      </ReactCSSTransitionGroup>
            <br />
          </div>

    )
  }
}
