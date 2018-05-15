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
            Our mission is to improve everybody's mental and emotional health. We believe it is increasingly necessary for each of us to prioritise our state of mind, and by using technology we can help each other to live a happy life.
            </p>
            <p style={{color:'white'}}>Achieving a healthy mind should be as easy as recovering from a cold. Life is full of ups and downs. What's important is to recognize it and know what to do. We are here to help you.
            </p>
          </div>
      </ReactCSSTransitionGroup>
        </div>

    )
  }
}
