import React from 'react'
import DirectorySolution from '../directorySolution';



export default function SolutionRow(props){


  const renderSolutions = (key) => (
      <DirectorySolution title={key[0].title} price={key[0].price} categ={key[0].categ} description={key[0].description} imageURL={key[0].imgURL} website={key[0].website} textColor='black'/>
    )

  return(
    <div style={{width:'100%'}}>
    <div style={{height:1, width:'90%', margin:20, marginTop:10, marginRight:20, background:'#ddd'}} />
    <div style={{paddingLeft:20, color:'black'}}>
      {props.title}
      <div style={{overflow:'hidden',background:'white', height:135, width:'100%', color:'black',paddingBottom:0, display: 'inline-block', marginTop:10}} >
        <div style={{fontSize: 0, whiteSpace: 'nowrap', height:'100%', overflow:'auto', overflowY:'hidden'}} >
        {props.solutions.map(renderSolutions)}
        </div>
      </div>
      </div>
    </div>
  )
}
