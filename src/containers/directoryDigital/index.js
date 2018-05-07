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

const titles = [
  'For a rested mind',
  'For a stronger mind',
  'For a relaxed mind',
  'For a focused mind',
  'For a nourished mind'
]

var priorities

class DirectoryDigital extends React.Component {

  constructor(props){
    super(props);
    this.state={
      solutions:[
                  {label: "Diet", title: "Nutrition", score: 1, suggestion: "Clean food is a good rule, additionally there is t…lising power in fruits, vegetables and superfoods"},
                  {label: "Stress management", title: "Stress management", score: 2, suggestion: "Meditation is a very important method to keep your… look at difference way of improving your skills."},
                  {label: "Purpose", title: "Work", score: 2, suggestion: "Work is where we spent most of our waking time, ca…often directs how and when we do everything else."},
                  {label: "Social", title: "Social life", score: 2, suggestion: "Social connectedness is perhaps the most powerful … you can do here to interact with others can help"},
                  {label: "Sleep", title: "Sleep", score: 4, suggestion: "Somewhere between 7 and 9 hours a night are a good…unctions; deep sleep is key to rest and recovery."},
                  {label: "Exercise", title: "Exercise", score: 4, suggestion: "Regular exercise can help prevent depression, redu… the mind just as much as it strengthens the body"}
                ]
    }
    }

  componentDidMount(){console.log(this.props.counter.resultsOrder);
    if ( this.props.counter.resultsOrder > 0 ) this.setState({solutions:this.props.counter.resultsOrder})

  }


  solutionMatching(label){
    console.log(label);
    console.log(Resources);
    console.log(Resources.filter(data=>{
      let result=false;
      for(let i of data.labels) result = result || i===label;
      return result
    }))
    
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
      <SolutionRow title={key.title} solutions={this.solutionMatching(key.label)} />
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
