import React from 'react';
import {Doughnut} from "react-chartjs-2";




var options = {
  legend: {display: false},
  label: {display: false},
  tooltips: {enabled: false},
  hover: {mode: null}
}

export default class CircularChart extends React.Component {

  constructor(props){
    super(props);
    this.state={
        score:'?',
        data :{
            datasets: [{
              data: [10, 0],
              borderColor:['rgba(255,255,255,0.2)','rgba(255,255,255,0.2)'],
              backgroundColor: ['rgba(255,255,255,0)','rgba(255,255,255,1)']
             }]
           }
    }
  };

  componentWillMount(){

  }
  componentDidMount(){

  };


  render(){

    return(
      <div style={{paddingTop:0, textAlign:'center', fontSize:'.6rem', fontFamily:'QuickSand', fontWeight:900}}>
      <Doughnut data={{
          datasets: [{
            data: [10-this.props.score, this.props.score],
            borderColor:['rgba(255,255,255,0.2)','rgba(255,255,255,0.2)'],
            backgroundColor: ['rgba(255,255,255,0)','rgba(255,255,255,1)']
           }]
         }} options={options} />
      <div style={{marginTop:5}}>
        <span style={{ color:'white', fontSize:'1.5rem'}}>{this.props.score}</span><span style={{color:'white'}}>/10</span>
      </div>
      </div>
    );}
}

//
