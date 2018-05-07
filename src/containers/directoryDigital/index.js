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



function DirectoryDigital(props){
  // 1/ Retrieve the data


  // 2/ Rank priorities
  // 3/ Choose the right solution

  function solutionMatching(){
    var priorities = props.counter.answersArray;
    // console.log('Vediamo se dice giusto');
    console.log('Counter:');
    console.log(props.counter );
    if ( !!(priorities) ) priorities= [[1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], ];
    var results = Result(priorities);
    return [
      Resources.filter(data=>data.label===results[0][0]),
      Resources.filter(data=>data.label===results[1][0]),
      Resources.filter(data=>data.label===results[2][0]),
    ];
  }

  const renderSolutions = (key) => (
      <DirectorySolution title={key[0].title} price={key[0].price} categ={key[0].categ} description={key[0].description} imageURL={key[0].imgURL} website={key[0].website} textColor='black'/>
    )
  const renderSolutionsRec = (key) => (

        <DirectorySolution title={key[0].title} price={key[0].price} categ={key[0].categ} description={key[0].comments} imageURL={key[0].imgURL} website={key[0].website} textColor='white'/>
      )

  const renderRow = (key) =>(
      <SolutionRow title={key} solutions={solutionMatching()} />
    )

  return(

      <div >
        <div id='top'> </div>
        <div style={{paddingTop:10}}>

              {titles.map(renderRow)}

        </div>
      </div>



  )
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
