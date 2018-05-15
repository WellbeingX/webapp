import React, { Component } from 'react'


export default class Landing extends Component {
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

          <div style={{margin:'auto',  textAlign:'center', fontSize:'2rem', position:'relative', lineHeight:'2.5rem' ,opacity:this.state.opacity, transition: 'opacity 0.5s ease-in-out 0.3s'}}>
            Making a healthy mind accessible to everyone. Coming soon...
            <br />
          </div>

    )
  }
}
