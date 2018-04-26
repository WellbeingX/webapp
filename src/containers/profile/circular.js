import React from 'react';
import {Doughnut} from "react-chartjs-2";




var options = {
  legend: {
      display: false,
  },
  label: {
    display: false,
  },


}

export default class CircularChart extends React.Component {

  constructor(props){
    super(props);
    this.state={
        score:'?',
        data :{
            labels: ["Red", "Blue"],

            datasets: [{
              data: [10, 0],
              borderColor:['rgba(255,255,255,0.2)','rgba(255,255,255,0.2)'],
              backgroundColor: ['rgba(255,255,255,0)','rgba(255,255,255,0.9)']
             }]
           }
    }
    console.log(props.score);
    this.lancio = this.lancio.bind(this);
  };


  componentDidMount(){

  };

  lancio(){
    if(this.props.score!='?'){
      this.state={
          score:this.props.score-0,
          data :{
              labels: ["Red", "Blue"],

              datasets: [{
                data: [10-this.props.score, 0+this.props.score],
                borderColor:['rgba(255,255,255,0.2)','rgba(255,255,255,0.2)'],
                backgroundColor: ['rgba(255,255,255,0)','rgba(255,255,255,0.9)']
               }]
             }
      }
    }
  }
  render(){
    this.lancio();

    return(
      <div style={{textAlign:'center'}}>
        <Doughnut data={this.state.data} options={options} />
        {this.props.score}
      </div>
    );}
}
