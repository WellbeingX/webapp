import React from 'react'
import {Image} from 'semantic-ui-react'



  export default class DirectorySolution extends React.Component {


  renderTag(val){

    return(
        <span  style={{ color:'#70CACC' , fontSize:'.7rem', margin:0, fontFamily:'Roboto', textTransform:'uppercase',  textAlign:'left', position:'relative', borderRadius:'40px', padding:4, border:'#70CACC thin solid', marginRight:5}}>{val}</span>
    )
  }
  render(){
  return(
        <div href={this.props.website}  className='' style={{color:this.props.textColor, display:'inline-block', width:280, height:130, background:'white', borderRadius:20, position:'relative', marginLeft:10, fontFamily:'Roboto'}}>
          <div style={{position:'absolute', width:280, height:130}}>
                <h2 style={{fontSize:'1rem', left:100, top:10, color:'#555', fontSize:'1rem', position: 'absolute', fontFamily:'Roboto', fontWeight:600}}>{this.props.title}</h2>

                <div className='boxShadow' style={{width:80, height:80, display:'inline-block', verticalAlign:'middle', background:'rgba(0,0,0,0)', left:10, borderRadius:20, bottom:25, position: 'absolute', overflow:'hidden'}}>
                  <Image src={this.props.imageURL} style={{width:'auto', height:'auto', maxWidth:'100%', top:'50%',transform: 'translateY(-50%)', maxHeight:'100%', display:'inline-block', verticalAlign:'middle'}} />
                </div>
                <div style={{ width:170, right:10, top:35 ,  color:'grey', fontSize:'.52rem', position:'absolute'}}>
                  <div style={{position:'relative',  width:'100%',   whiteSpace: 'normal', textOverflow:'ellipsis',fontFamily:'Roboto' }}>
                  <p style={{width:170, lineHeight:'.9rem', color:'#999', fontSize:'.9rem', maxHeight:27,  whiteSpace: 'normal', textOverflow:'ellipsis',fontFamily:'Roboto', overflow:'hidden', display:'block', fontWeight:100}}> {this.props.description}
                   </p>
                  </div>
                  <div style={{position:'relative', marginTop:5}}>
                  {this.props.categ.map(this.renderTag)}
                  </div>
                </div>



                <p   style={{position:'absolute',bottom:20, right:10, color:'#555' , fontSize:'.7rem', margin:0, fontFamily:'Roboto', textTransform:'uppercase', width:150, whiteSpace: 'normal', textAlign:'right'}}>{this.props.price}</p>
                <div style={{height:0, width:'53%', margin:0, background:'#ddd', right:10, bottom:98, position:'absolute'}} />

            </div>
            <a href={this.props.website} style={{position:'absolute', width:'100%', height:100, top:0, left: 0, zIndex: 1}} target='_blank' > </a>
        </div>


  )
  }
}
