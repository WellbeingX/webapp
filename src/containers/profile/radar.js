import React from 'react';
import {Radar} from "react-chartjs-2";

var data = {
	labels: ["Mindfulness", "Sleep", "Distress", "Ansia", "Exercise", "Purpose", "Nutrition", 'Social'],
	datasets: [
		{
			label: "Goal",
			backgroundColor:"rgba(151,209,168,0.2)",
			fill: true,
			pointBackgroundColor: "rgba(151,209,168,1)",
			pointBorderColor: "rgba(151,209,168,1)",
			borderColor: "rgba(151,209,168,1)",
			borderWidth:1,
			pointBorderWidth:1,
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(151,209,168,1)",
			data: [65, 65, 65, 65, 65, 65, 65, 65]
		},
		{
			label: "Myself",
			backgroundColor:"rgba(38,158,204,0.5)",
			pointBackgroundColor: "rgba(38,158,204,1)",
			pointBorderColor: "rgba(38,158,204,1)",
			borderColor: "rgba(38,158,204,1)",
			borderWidth:1,
			pointBorderWidth:1,
			data: [28, 48, 40, 19, 96, 27, 100, 20]
		}
	]
};


var options = {


	legend: {display: false},

	ticks: { display: false},

	pointLabels: {display: false},
	tooltips: {display:false},
	scale: {
		ticks: {
								display:false,
                min: 0,
                max: 100,
                stepSize: 20
            },

    pointLabels: {
				      fontSize: 12
				    }
		},
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
      <div style={{paddingBottom:20, marginTop:-20, textAlign:'center'}}>
        <Radar data={data} options={options}/>
      </div>
    );}
}
