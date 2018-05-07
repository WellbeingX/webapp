import React from 'react'
import DirectorySolution from '../directorySolution';



export default function SolutionRow(props){


  const renderSolutions = (key) => (
      <DirectorySolution title={key.title} price={key.price} categ={key.categ} description={key.description} imageURL={key.imgURL} website={key.website} textColor='black'/>
    )

  return(
    <div style={{width:'100%'}}>
    <div style={{paddingLeft:20, color:'black', fontWeight:900}}>
      {props.title}
      <div style={{overflow:'hidden',background:'white', height:135, width:'100%', color:'black',paddingBottom:0, display: 'inline-block', marginTop:10}} >
        <div style={{fontSize: 0, whiteSpace: 'nowrap', height:'100%', overflow:'auto', overflowY:'hidden'}} >
        {props.solutions.map(renderSolutions)}
        </div>
      </div>
      </div>
      <div style={{height:1, width:'90%', margin:20, marginTop:10, marginRight:20, background:'#ddd'}} />

    </div>
  )
}
