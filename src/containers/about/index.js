import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const About = props => (
  <div style={{padding:20, paddingTop:60, minHeight:736}}>

        <h1 style={{color:'white'}}>About</h1>
        <ReactCSSTransitionGroup
         component="div"
         transitionName="dialog"
         transitionEnterTimeout={0}
         transitionLeaveTimeout={500}
         transitionAppear
         transitionAppearTimeout={1200}
        >
          <p style={{color:'white'}}>
      BetterSpace was founded when three entrepreneurs, Alfredo, Filipa and Jim, asked “What would the Tesla for mental health look like?""
      </p>
      <p style={{color:'white'}}>We are now a growing team of the leading minds mental wellbeing and digital, based in Kings Cross, London.
      </p>
      <p style={{color:'white'}}>We’re inspired by Margaret Mead’s words “Never doubt a small group of committed individuals can change the world. Indeed it’s all that ever does
    </p>
    </ReactCSSTransitionGroup>

  </div>
)

export default About
