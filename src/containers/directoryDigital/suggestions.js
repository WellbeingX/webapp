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
      <DirectorySolution title={key.title} price={key.price} categ={key.categ} description={key.comments} imageURL={key.imgURL} website={key.website} textColor='white'/>
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
      {props.solutionMatching[0].map(renderSolutionsRec)}
    </div>
  )
}
