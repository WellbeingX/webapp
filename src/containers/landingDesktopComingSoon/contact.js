import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      opacity:0
    }
  }
  componentDidMount(){
    setTimeout(() => this.setState({opacity:1}), 350);
  }
  componentWillUnmount(){
    this.setState({opacity:0})
  }
render() {

    return (

          <div style={{margin:'auto',  textAlign:'left', paddingTop:'1rem', fontSize:'1.8rem', position:'relative', lineHeight:'2rem', opacity:this.state.opacity, transition: 'opacity 1s ease-in-out .3s'}}>
          <ReactCSSTransitionGroup
           component="p"
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
            </div>
        </ReactCSSTransitionGroup>
          </div>

    )
  }
}
