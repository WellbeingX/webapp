import React from 'react'
import DirectorySolution from '../directorySolution';

import {SLEEP, EXERCISE, DIET, SOCIAL, PURPOSE, STRESS} from '../../api/labels'


export default function SolutionRow(props){



  function orderAndRenderSolutions() {
    let array = props.solutions;

    // In this version only randomly shuffling
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.map(renderSolutions);
  }

  const renderSolutions = (key) => (
      <DirectorySolution title={key.title} price={key.price} categ={key.categ} description={key.description} imageURL={key.imgURL} website={key.website} textColor='black'/>
    )

  return(
    <div style={{width:'100%'}}>
    <div style={{paddingLeft:0, color:'black', fontWeight:900}}>
      <div style={{paddingLeft:20, color:'black', fontSize:'1rem', textTransform:'uppercase', whiteSpace:'nowrap', textOverflow:'ellipsis'}}>{props.title}</div>
      <div style={{overflow:'hidden',background:'white', height:135, width:'100%', color:'black',paddingBottom:0, display: 'inline-block', marginTop:10}} >
        <div style={{fontSize: 0, whiteSpace: 'nowrap', height:'100%', overflow:'auto', overflowY:'hidden'}} >
        {orderAndRenderSolutions()}
        </div>
      </div>
      </div>
      <div style={{height:1, width:'90%', margin:20, marginTop:10, marginRight:20, background:'rgba(0,0,0,.2)'}} />

    </div>
  )
}
