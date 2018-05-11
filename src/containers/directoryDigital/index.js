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


var priorities
var stateSolutions = [
            {label: "Sleep", title: "Better sleep", score: 4, suggestion: "Somewhere between 7 and 9 hours a night are a good…unctions; deep sleep is key to rest and recovery."},
            {label: "Stress management", title: "Stress management", score: 2, suggestion: "Meditation is a very important method to keep your… look at difference way of improving your skills."},
            {label: "Diet", title: "Healthier nutrition", score: 1, suggestion: "Clean food is a good rule, additionally there is t…lising power in fruits, vegetables and superfoods"},
            {label: "Purpose", title: "Find purpose", score: 2, suggestion: "Work is where we spent most of our waking time, ca…often directs how and when we do everything else."},
            {label: "Social", title: "Nourished social life", score: 2, suggestion: "Social connectedness is perhaps the most powerful … you can do here to interact with others can help"},
            {label: "Exercise", title: "More exercise", score: 4, suggestion: "Regular exercise can help prevent depression, redu… the mind just as much as it strengthens the body"}
          ]
var landingSolutions = {label: "Landing", score:-1, title: "", suggestion: ""}

class DirectoryDigital extends React.Component {

  constructor(props){
    super(props);
    this.state={
      solutions: stateSolutions
    }
    }

  componentDidMount(){

    if ( this.props.counter.resultsOrder.length > 0 ) this.setState({solutions:this.props.counter.resultsOrder})
    // TODO: Now I want to add the landing page solution if exists so it gets represented as a Row
    console.log('vediamo tutti i props');
    console.log(this.props.counter);

    if (this.props.counter.answersArray.length > 0 ){
      console.log('qui entra');
      if (this.props.counter.answersArray[0].questionLabel === 'Landing') {
        console.log('qui abbiamo qualcosa da mostrare');
        this.props.counter.answersArray[0].entry.answer.map((val)=>{landingSolutions.title = landingSolutions.title + val + ', ';})
        // landingSolutions.label.push(this.props.counter.answersArray[0].entry.answer)
        let temp = this.state.solutions
        temp.push(landingSolutions);
        temp.sort((a,b)=>a.score-b.score);
        this.setState({solutions: temp})
      }
    }
  }


  solutionMatching(label){


    return (Resources.filter(data=>{
      let result=false;
      for(let i of data.labels) result = result || i===label;
      return result
    }))
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
