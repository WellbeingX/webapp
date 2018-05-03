import React from 'react'
import {Grid} from 'semantic-ui-react';
import DirectorySolution from '../directorySolutionReccomendation';
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

export default function Suggestions(props){

  const renderSolutionsRec = (key) => (
      <DirectorySolution title={key[0].title} price={key[0].price} categ={key[0].categ} description={key[0].comments} imageURL={key[0].imgURL} website={key[0].website} textColor='white'/>
    )

  return(
    <div className='recommendationContainer'>
      <div className='directoryBarbaraWrapper'>
        <div className='directoryBarbaraWrapperInner'>
        <p className='directoryRecommendationTitle'>Suggestions</p>
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
      {props.solutionMatching.map(renderSolutionsRec)}
    </div>
  )
}
