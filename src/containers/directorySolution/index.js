import React from 'react'
import {Image} from 'semantic-ui-react'



export default function DirectorySolution(props){

  return(
        <div href={props.website}  className='' style={{color:props.textColor, display:'inline-block', width:280, height:130, background:'white', borderRadius:20, position:'relative', marginRight:20, fontFamily:'Roboto'}}>
          <div style={{position:'absolute', width:280, height:130}}>
                <h2 style={{fontSize:'.6rem', left:110, top:10, color:'black', fontSize:'.8rem', position: 'absolute', fontFamily:'Roboto', fontWeight:400}}>{props.title}</h2>

                <Image src={props.imageURL} style={{width:80, height:80, background:'grey', left:10, borderRadius:20, bottom:25, position: 'absolute'}} />

                <div style={{ width:160, height:55, right:10, top:35 , lineHeight:'.6rem', color:'grey', fontSize:'.52rem', position:'absolute'}}>
                  <div style={{position:'relative', height:55, width:'100%',   whiteSpace: 'normal', textOverflow:'ellipsis',fontFamily:'Roboto' }}>
                  <p style={{width:160, lineHeight:'.6rem', color:'grey', fontSize:'.52rem',height:55,  whiteSpace: 'normal', textOverflow:'ellipsis',fontFamily:'Roboto', overflow:'hidden', display:'block'}}> {props.description} </p>
                  </div>
                </div>

                <p  style={{position:'absolute',bottom:20, left:110, color:'grey' , fontSize:'.6rem', margin:0, fontFamily:'Roboto'}}>{props.categ}</p>

                <p   style={{position:'absolute',bottom:20, right:10, color:'grey' , fontSize:'.6rem', margin:0, fontFamily:'Roboto'}}>{props.price}</p>
                <div style={{height:0, width:'53%', margin:0, background:'#ddd', right:10, bottom:98, position:'absolute'}} />

            </div>
            <a href={props.website} style={{position:'absolute', width:'100%', height:100, top:0, left: 0, zIndex: 1}} target='_blank' > </a>
        </div>


  )
}
