import React from 'react';
import {Radar} from "react-chartjs-2";

var data = {
	labels: ["Mindfulness", "Sleep", "Distress", "Ansia", "Exercise", "Purpose", "Nutrition", 'Social'],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(220,220,220,0.2)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [65, 59, 90, 81, 56, 55, 40, 40]
		},
		{
			label: "My Second dataset",
			fillColor: "rgba(151,187,205,0.2)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(151,187,205,1)",
			data: [28, 48, 40, 19, 96, 27, 100, 20]
		}
	]
};


var options = {


	legend: {display: false},

	ticks: { display: false},

	pointLabels: {display: false},
	tooltips: {display:false},
	scale: { ticks: {
								display:false,
                min: 0,
                max: 100,
                stepSize: 20
            },

						}
}





export default class RadarChart extends React.Component {

  constructor(props){
    super(props);
    this.state={

    }
  };


  componentDidMount(){

  };
  render(){
    return(
      <div style={{padding:20, margin:'auto', textAlign:'center'}}>
        <Radar data={data} options={options}/>
      </div>
    );}
}
