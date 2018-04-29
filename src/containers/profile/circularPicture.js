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

export default class CircularChartPicture extends React.Component {

  constructor(props){
    super(props);
    this.state={
        score:'?',
        data :{
            labels: ["Red", "Blue"],

            datasets: [{
              data: [10, 0],
              borderColor:['rgba(0,0,0,0.2)','rgba(0,0,0,0.2)'],
              backgroundColor: ['rgba(0,0,0,0)','rgba(0,0,0,0.2)']
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
                borderColor:['rgba(0,0,0,0.2)','rgba(0,0,0,0.2)'],
                backgroundColor: ['rgba(0,0,0,0)','rgba(0,0,0,0.2)']
               }]
             }
      }
    }
  }
  render(){
    this.lancio();

    return(
      <div style={{textAlign:'center', fontSize:'.5rem', color:'grey'}}>
        <Doughnut data={this.state.data} options={options} width={'30%'} height={'10%'}/>
        <span style={{marginTop:-10}}>Profile completion</span>
      </div>
    );}
}
