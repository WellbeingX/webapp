import React from 'react';
import { Container, Grid} from 'semantic-ui-react';
import { connect } from 'react-redux'
import DirectorySolution from '../directorySolution';
import { bindActionCreators } from 'redux'
import Result from '../result'
import resources from '../../api/resources.js'
import DirectoryHeader from '../directoryHeader'
import ImageBarb from '../../assets/images/home/lady.png';

const characterStyle = {
  height: 170,
  width: 100,
  background:'no-repeat',
  backgroundImage: `url(${ImageBarb})`,
  backgroundSize: 100,
  overflow: 'hidden',
  backgroundPosition: 'bottom right',
  position:'absolute',
  marginLeft:-40
}


function DirectoryDigital(props){
  // 1/ Retrieve the data


  // 2/ Rank priorities
  // 3/ Choose the right solution

  function solutionMatching(){
    console.log(props.counter.answersArray);
    var priorities = props.counter.answersArray;
    // console.log('Vediamo se dice giusto');
    // console.log(!(priorities) );
    if ( !!(priorities) ) priorities= [[1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], ];
    var results = Result(priorities);

    return [
      resources.filter(data=>data.label===results[0][0]),
      resources.filter(data=>data.label===results[1][0]),
      resources.filter(data=>data.label===results[2][0]),
    ];
  }

  const renderSolutions = (key) => (
      <DirectorySolution title={key[0].title} price={key[0].price} categ={key[0].categ} description={key[0].description} imageURL={key[0].imgURL} website={key[0].website} textColor='black'/>
    )
    const renderSolutionsRec = (key) => (
        <DirectorySolution title={key[0].title} price={key[0].price} categ={key[0].categ} description={key[0].comments} imageURL={key[0].imgURL} website={key[0].website} textColor='white'/>
      )

    window.scrollTo(0,0);


  return(

      <Container >
        <div id='top'> </div>
        <div style={{paddingTop:30}}>
            <div className='directoryFilterBar'>
              <p className="filterNormal">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 42" style={{height:15, paddingRight:15, fill:'none', stroke:'#525254', strokeMiterlimit:10, strokeWidth:4}}>
                <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><line class="cls-1" y1="2" x2="60" y2="2"/><line class="cls-1" x1="7.25" y1="14.67" x2="52.75" y2="14.67"/><line class="cls-1" x1="15.49" y1="27.33" x2="44.51" y2="27.33"/><line class="cls-1" x1="24.07" y1="40" x2="35.93" y2="40"/></g></g>
              </svg>
              <span className="filterFilter">Filter</span> by <span className="filterHighlight">price</span> and <span className="filterHighlight">category</span> </p>
            </div>
              <div className='recommendationContainer'>
                <div className='directoryBarbaraWrapper'>
                  <div className='directoryBarbaraWrapperInner'>
                  <p className='directoryRecommendationTitle'>PRODUCTS</p>
                  <Grid className='directoryBarbaraDiv'>
                    <Grid.Column width={12} style={{padding:0}}>
                      <p className='directoryHeaderSentence'> I have 3 suggestions and other 237 resources </p>
                    </Grid.Column>
                    <Grid.Column width={4} style={{padding:0}}>
                        <div style={characterStyle}>  </div>
                      </Grid.Column>
                  </Grid>
                  </div>
                  </div>
                <div className='directoryRecommendationSpace' />
                {solutionMatching().map(renderSolutionsRec)}
              </div>
              <p>For a rested mind</p>
              {solutionMatching().map(renderSolutions)}
              <p>For a stronger mind</p>
              {solutionMatching().map(renderSolutions)}
              <p>For a relaxed mind</p>
              {solutionMatching().map(renderSolutions)}
              <p>For a focused mind</p>
              {solutionMatching().map(renderSolutions)}
              <p>For a nourished mind</p>
              {solutionMatching().map(renderSolutions)}

        </div>
      </Container>



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
