import React, { Component } from 'react'


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

          <div style={{margin:'auto',  textAlign:'center', fontSize:'2rem', position:'relative', lineHeight:'2.5rem', opacity:this.state.opacity, transition: 'opacity 1s ease-in-out .3s'}}>
            Contact
            <br />
          </div>

    )
  }
}
