import React from 'react';
import {Grid, Image} from 'semantic-ui-react'
import ImageMatch from '../../assets/images/home/match.png';
import ImageBook from '../../assets/images/home/book.png';
import ImageGo from '../../assets/images/home/go.png';


export default function FooterHome(){
  return(
  <div className = "footerHome" >
      <Grid style={{background:'white', padding:20, textAlign:'center', paddingBottom:50}}>


        <h3 style={{fontSize:'1rem', width:'100%'}}>Everyone should have access to personalised wellbeing.</h3>
        <p style={{width:'100%'}}> Better Space is your compass through an ever- expanding and sometimes confusing world of solutions.</p>

        <p style={{margin:'auto'}}>
        <Grid  columns='equal' style={{height:60, padding:20, paddingTop:100, margin:'auto'}}>
            <Grid.Column>
              <Image src={ImageMatch} centered style={{ width:65, height:85}}/>
            </Grid.Column>
            <Grid.Column>
              <Image src={ImageBook} centered style={{ width:65, height:85}}/>
            </Grid.Column>
            <Grid.Column>
              <Image src={ImageGo} centered style={{width:65, height:85}}/>
            </Grid.Column>
        </Grid>
        </p>

        <p style={{paddingTop:150, width:'100%'}}>
        <h3 style={{fontSize:'1rem', textAlign:'center', margin:'auto'}}>The perfect fit</h3></p>
        <p>
        Whether its a proven mindfulness app, an energising social activity or a conversation with a top therapist, we’ve got a personalised directory for you. By answering some confidential questions, we can draw up a short list for you to chose from.
           </p>
        <h3 style={{fontSize:'1rem', width:'100%'}}>Trust is everything</h3>
        <p>
        Your confidence is our top priority. You can access your recommendations in anonymity. We’ll only ask you to share information for your benefit, we exercise the highest levels of data privacy.</p>
        <h3 style={{fontSize:'1rem', width:'100%'}}>Our business model</h3>
        <p>
        Wondering how we pay our bills? We’re like the App Store, making money if you buy paid for services. Better Space is free to use, and you’ll find many things that are free - that’s a big part of our social mission.
        </p>
      </Grid>
      <Grid.Row  style={{marginTop: 20,height:80, background:'#249ECD', textAlign:'left'}}>
        <h2 style={{zIndex:100, color:'white', padding:20}}>BetterSpace</h2>
      </Grid.Row>
    </div>
  )
}
