import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const Mission = props => (
  <div style={{padding:20, paddingTop:60, minHeight:736}}>

        <h1 style={{color:'white'}}>Mission</h1>
        <ReactCSSTransitionGroup
         component="div"
         transitionName="dialog"
         transitionEnterTimeout={0}
         transitionLeaveTimeout={500}
         transitionAppear
         transitionAppearTimeout={1200}
        >
        <div >
          <p style={{color:'white'}}>
          Our mission is to make mental health available to everyone at the lowest cost. We believe it is increasingly necessary for each of us to prioritise our state of mind, and by using technology we can help each other to make the best use of the available resources.

            </p>
            <p style={{color:'white'}}>Achieving a healthy mind shouldn’t be expensive. The BetterSpace app will help you understand where your status factors such as sleep, exercise and social connections. And we’ll go the extra mile to find the free things that will work for you.
            </p>
            <p style={{color:'white'}}>BetterSpace was founded when three entrepreneurs, Alfredo, Filipa and Jim, asked “What would the Tesla for mental health look like?"
          </p>
          </div>
      </ReactCSSTransitionGroup>

  </div>
)

export default Mission
