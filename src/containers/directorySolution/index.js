import React from 'react'
import {Grid,  Image} from 'semantic-ui-react'



export default function DirectorySolution(props){
  console.log('desc length');
  console.log(props.description.length);
  window.scrollTo(0,0);

  return(
        <div className="solutionContainer" href={props.website}>

            <h2 style={{fontSize:'.6rem'}}>{props.title}</h2>

          <Grid columns={2} className='solutionContent' style={{height:'100%', position:'relative'}}>

            <Grid.Column  className='solutionImage' style={{padding:'20px 0 0 20px', width:'30%', height:100}}>
                <Image centered small src={props.imageURL} style={{width:'100%', height:'100%', background:'grey', borderRadius:20}} />
            </Grid.Column>

            <Grid.Column className='solutionText' style={{padding:'20px 0 0 10px', color:'black', width:'70%', paddingRight:0, paddingBottom:0}}>
                <Grid.Row style={{position:'absolute', color:'black', width:'100%', height:'50%'}}>
                  <p className='solutionDescription'>{props.description}</p>
                </Grid.Row>
                <Grid columns={2} style={{bottom:0, color:'black',width:'100%', height:'50%', position:'absolute', bottom:20, right:20}}>
                    <Grid.Column  style={{bottom:0, color:'black',width:'50%',  height:'100%', paddingLeft:10}}>
                      <p className='solutionCateg'>{props.categ}</p>
                    </Grid.Column>
                    <Grid.Column   style={{bottom:0, color:'black',width:'50%', height:'100%', paddingRight:5, textAlign:'right'}}>
                      <p className='solutionPrice'>{props.price}</p>
                    </Grid.Column>
                </Grid>
            </Grid.Column>
            <a href={props.website} style={{position:'absolute', width:350, height:100, top:0, left: 0,  zIndex: 1}} target='_blank' />
          </Grid>
        </div>


  )
}
