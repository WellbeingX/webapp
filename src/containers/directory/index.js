import React from 'react';
import { Container} from 'semantic-ui-react';
import { connect } from 'react-redux'
import DirectorySolution from '../directorySolution';
import { bindActionCreators } from 'redux'
import Result from '../result'
import resources from '../../api/resources.js'
function Directory(props){
  // 1/ Retrieve the data


  // 2/ Rank priorities
  // 3/ Choose the right solution

  function solutionMatching(){
    console.log(props.counter.answersArray);
    var priorities = props.counter.answersArray;
    if ( !!(priorities) ) priorities= [[1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], ];
    var results = Result(priorities);

    return [
      resources.filter(data=>data.label===results[0][0]),
      resources.filter(data=>data.label===results[1][0]),
      resources.filter(data=>data.label===results[2][0]),
    ];
  }

  const renderSolutions = (key) => (
      <DirectorySolution title={key[0].title} price={key[0].price} categ={key[0].categ} description={key[0].description} imageURL={key[0].imgURL} website={key[0].website}/>
    )



  return(
    <div className='directoryContainer'>
      <Container>
      <div className='logoReplacementWrapper'>
        <p className= 'logoReplacement'>BetterSpace</p>
      </div>
        <div className='directoryCommentWrapper'>
          <p className='directoryComment'>
          <h2 className='directoryCommentTitle'>Solutions</h2>
            Choose one per category.</p>
        </div>

        {solutionMatching().map(renderSolutions)}


        </Container>


      </div>


  )
}

//
// <div className='directoryTitleWrapper'>
//   <h2 className='directoryTitle'>Exercise</h2>
// </div>
//
// <div className="solutionWrapper">
//   <div className="solutionContainer">
//     <DirectorySolution />
//   </div>
//   <div className="solutionContainer">
//   <DirectorySolution />
//
//   </div>
//   <div className="solutionContainer">
//   <DirectorySolution />
//
//   </div>
// </div>


const mapStateToProps = state => ({
  counter: state.counter,
  email: state.email
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directory)
