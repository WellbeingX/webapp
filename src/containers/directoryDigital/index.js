import React from 'react';
import { Container, Grid} from 'semantic-ui-react';
import { connect } from 'react-redux'
import DirectorySolution from '../directorySolution';
import { bindActionCreators } from 'redux'
import Result from '../result'
import Resources from '../../api/resources'
import DirectoryHeader from '../directoryHeader'
import Suggestions from './suggestions'
import SolutionRow from './solutionRow'
import FilterBar from './filterBar'

import {SLEEP, EXERCISE, DIET, SOCIAL, PURPOSE, STRESS, AGE,
TITLE_SLEEP, TITLE_EXERCISE, TITLE_DIET, TITLE_SOCIAL, TITLE_PURPOSE, TITLE_STRESS} from '../../api/labels'


var priorities
var stateSolutions = [
            {label: "Sleep", title: "Better sleep", score: 4, suggestion: "Somewhere between 7 and 9 hours a night are a good…unctions; deep sleep is key to rest and recovery."},
            {label: "Stress management", title: "Stress management", score: 2, suggestion: "Meditation is a very important method to keep your… look at difference way of improving your skills."},
            {label: "Diet", title: "Healthier nutrition", score: 1, suggestion: "Clean food is a good rule, additionally there is t…lising power in fruits, vegetables and superfoods"},
            {label: "Purpose", title: "Find purpose", score: 2, suggestion: "Work is where we spent most of our waking time, ca…often directs how and when we do everything else."},
            {label: "Social", title: "Nourished social life", score: 2, suggestion: "Social connectedness is perhaps the most powerful … you can do here to interact with others can help"},
            {label: "Exercise", title: "More exercise", score: 4, suggestion: "Regular exercise can help prevent depression, redu… the mind just as much as it strengthens the body"}
          ]
var landingSolutions = {label:"Landing", score:-1, title: "", suggestion: ""}

class DirectoryDigital extends React.Component {

  constructor(props){
    super(props);
    this.state={
      solutions: stateSolutions
    }
    }

  componentDidMount(){

    if ( this.props.counter.resultsOrder.length > 0 ) this.setState({solutions:this.props.counter.resultsOrder})

    // Now I want to add the landing page solution if exists so it gets represented as a Row
    if (this.props.counter.answersArray.length > 0 ){
      if (this.props.counter.answersArray[0].questionLabel === 'Landing') {
        // Creating the title aligning the various button texts one after the other
        this.props.counter.answersArray[0].entry.answer.map((val)=>{landingSolutions.title = landingSolutions.title + val + ', ';})
        // Trim the last comma
        landingSolutions.title = landingSolutions.title.substring(0, landingSolutions.title.length-2);
        //In case it is too bif for the screen width
        if(landingSolutions.title.length>32){landingSolutions.title = landingSolutions.title.substring(0, 32)+'...'}

        // Put the labels of the landing in the right place
        landingSolutions.label = this.props.counter.answersArray[0].entry.answer;
        // landingSolutions.label.push(this.props.counter.answersArray[0].entry.answer)
        let temp = this.props.counter.resultsOrder
        temp.push(landingSolutions);
        console.log(temp);
        temp.sort((a,b)=>a.score-b.score);
        console.log(temp);
        this.setState({solutions: temp})
      }
    }
  }


  solutionMatching(labels){

    let arraySolutions =[];

    // LABEL FILTERING
    // If there are more than one labels per row (first row, presented row)
    if(typeof labels !== 'string'){
      for(let label in labels){
        let resources = Resources.filter(data=>{
          let result=false;
          for(let resourceLabel of data.labels) result = result || resourceLabel===labels[label];
          return result
          })
        for(let val in resources) arraySolutions.push(resources[val])
      }
    }
    // Otherwise, for each pillar page
    else arraySolutions = Resources.filter(data=>{
      let result=false;
      for(let resourceLabel of data.labels) result = result || resourceLabel===labels;
      return result
    })

    // Addiotional filtering based on the answers
    let answers = this.props.counter.answersArray
    if (answers.length > 0 ){
      // AGE FILTERING
      console.log('AGE FILTERING');
      console.log(arraySolutions.length);
      for(let indexAnswer in answers){
        if(answers[indexAnswer].entry.questionLabel === AGE){
          arraySolutions = arraySolutions.filter(data=>{
            let result=false;
            for(let ageTag of data.ageTag) {
              result = result || ageTag===answers[indexAnswer].entry.answerId;}
            return result
            })
        }
      }
      console.log(arraySolutions.length);

      // GENDER FILTERING


      // PREFERENCES SORTING
    }

    return arraySolutions;
  }

  renderSolutions = (key) => (
      <DirectorySolution title={key[0].title} price={key[0].price} categ={key[0].categ} description={key[0].description} imageURL={key[0].imgURL} website={key[0].website} textColor='black'/>
    )
    renderSolutionsRec = (key) => (

        <DirectorySolution title={key[0].title} price={key[0].price} categ={key[0].categ} description={key[0].comments} imageURL={key[0].imgURL} website={key[0].website} textColor='white'/>
      )

   renderRow = (key) =>(
      <SolutionRow title={key.title} solutions={this.solutionMatching(key.label)} label={key.label} />
    )


  render(){
    return(
          <div >
            <div id='top'> </div>
            <div style={{paddingTop:10}}>

                  {this.state.solutions.map(this.renderRow)}

            </div>
          </div>



    )
  }
}


const mapStateToProps = state => ({
  counter: state.counter,
  email: state.email
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectoryDigital)
