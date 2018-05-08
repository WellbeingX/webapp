import React from 'react'
import {Image} from 'semantic-ui-react'



export default function DirectorySolution(props){


  return(
        <div href={props.website}  className='' style={{color:props.textColor, display:'inline-block', width:280, height:130, background:'white', borderRadius:20, position:'relative', marginRight:20, fontFamily:'Roboto'}}>
          <div style={{position:'absolute', width:280, height:130}}>
                <h2 style={{fontSize:'.6rem', left:110, top:10, color:'black', fontSize:'.8rem', position: 'absolute', fontFamily:'Roboto', fontWeight:400}}>{props.title}</h2>

                <div className='boxShadow' style={{width:80, height:80, display:'inline-block', verticalAlign:'middle', background:'rgba(0,0,0,0)', left:10, borderRadius:20, bottom:25, position: 'absolute', overflow:'hidden'}}>
                  <Image src={props.imageURL} style={{width:'auto', height:'auto', maxWidth:'100%', top:'50%',transform: 'translateY(-50%)', maxHeight:'100%', display:'inline-block', verticalAlign:'middle'}} />
                </div>
                <div style={{ width:160, height:55, right:10, top:35 , lineHeight:'.6rem', color:'grey', fontSize:'.52rem', position:'absolute'}}>
                  <div style={{position:'relative', height:55, width:'100%',   whiteSpace: 'normal', textOverflow:'ellipsis',fontFamily:'Roboto' }}>
                  <p style={{width:160, lineHeight:'.6rem', color:'grey', fontSize:'.52rem',height:55,  whiteSpace: 'normal', textOverflow:'ellipsis',fontFamily:'Roboto', overflow:'hidden', display:'block', fontWeight:100}}> {props.description} </p>
                  </div>
                </div>

                <p  style={{position:'absolute',bottom:20, left:110, color:'black' , fontSize:'.4rem', margin:0, fontFamily:'Roboto', textTransform:'uppercase', width:100, whiteSpace: 'normal', textAlign:'left'}}>{props.categ}</p>

                <p   style={{position:'absolute',bottom:20, right:10, color:'black' , fontSize:'.4rem', margin:0, fontFamily:'Roboto', textTransform:'uppercase', width:100, whiteSpace: 'normal', textAlign:'right'}}>{props.price}</p>
                <div style={{height:0, width:'53%', margin:0, background:'#ddd', right:10, bottom:98, position:'absolute'}} />

            </div>
            <a href={props.website} style={{position:'absolute', width:'100%', height:100, top:0, left: 0, zIndex: 1}} target='_blank' > </a>
        </div>


  )
}
