import React from 'react';
import {Doughnut} from "react-chartjs-2";
import CircularChartPicture from './circularPicture'

class Picture extends React.Component {


  constructor(props){
    super(props);
    this.state={
    }

  }

  componentDidMount(){

  }


  render(){
    return(

      <div style={{background:'white', position:'relative', paddingLeft:50}}>
        <div style={{textAlign:'center', width:80}}>
          <div style={{width:80, height:80, background:'#CCC', borderStyle:'solid', borderColor:'white', borderWidth:5, borderRadius:'100%', marginTop:-30, position:'absolute', color:'black'}} />
          <div style={{ paddingTop:50, textAlign:'left'}} >
            <h2 style={{margin:0, color:'black'}}> {this.props.name}  </h2>
            <p style={{fontSize:'.5rem', color:'grey'}}>{this.props.email} <br />
              {this.props.gender}<br />
              {this.props.age}<br />
            </p>
          </div>
        </div>
        <div style={{textAlign:'center', width:100, position:'absolute', right:40, top:35}}>
          <div style={{width:90,  border:'#70CACC', borderStyle:'solid', borderRadius:20, borderWidth:1, marginTop:-30, position:'absolute', color:'#70CACC', fontSize:'.6rem', padding:'2.5px 5px'}}>
            Edit profile
          </div>
          <div style={{ width:140, textAlign:'left', paddingTop:0, color:'grey', fontSize:'.5rem'}} >
            Profile completion:30%
          </div>
        </div>
      </div>

    )
  };
}

export default Picture
