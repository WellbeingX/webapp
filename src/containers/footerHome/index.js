import React from 'react';
import {Grid, Image} from 'semantic-ui-react'
import ImagePic21 from '../../assets/images/home/pic21.png';
import ImagePic22 from '../../assets/images/home/pic22.png';
import ImagePic23 from '../../assets/images/home/pic23.png';
import ImagePic51 from '../../assets/images/home/pic51.png';
import ImagePic52 from '../../assets/images/home/pic52.png';
import Carousel from '../carousel';



export default function FooterHome(){
  return(
    <div>
      <Grid.Row style={{background:'#F6F6F5', padding:'20px 0px'}}>
        <Carousel />
      </Grid.Row>
      <div className = "footerHome" >
        <Grid style={{background:'white', margin:20, textAlign:'center', paddingBottom:50, paddingTop:0}}>

          <Grid.Row>
            <h3 style={{fontFamily:'Quicksand', color:'#70CACC', fontSize:'1.2rem', width:'100%'}}><span style={{opacity:.6}}>Introducing </span> <span style={{opacity:1}}> BetterSpace </span> </h3>
          </Grid.Row>
          <Grid.Row>
            <div className="landingImage landingIntro overlay white">
                <p className='landingTextFooter'> The platform where you can start an improvement journey and find all your mental wellbeing resources</p>
            </div>
          </Grid.Row>
          <Grid.Row>
            <h3 style={{fontFamily:'Quicksand', paddingTop:50, color:'#70CACC', fontSize:'1.2rem', width:'100%'}}><span style={{opacity:1}}> How it works </span> </h3>
          </Grid.Row>
          <Grid.Row>
                <p className='landingTextFooterHow'> 1. Answer a few questions about yourself</p>
          </Grid.Row>
          <Grid.Row>
                <Image src={ImagePic21} centered style={{ width:85, height:105}}/>
          </Grid.Row>
          <Grid.Row>
                <p className='landingTextFooterHow'> 2. Compare therapists, activities, apps and products</p>
          </Grid.Row>
          <Grid.Row>
                <Image src={ImagePic22} centered style={{ width:85, height:105}}/>
          </Grid.Row>
          <Grid.Row>
                <p className='landingTextFooterHow'> 3. Select from the personalized shortlist or choose the one you prefer!</p>
          </Grid.Row>
          <Grid.Row>
                <Image src={ImagePic23} centered style={{ width:105, height:85}}/>
          </Grid.Row>
          <Grid.Row>
          <h3 style={{fontFamily:'Quicksand', paddingTop:50, color:'#70CACC', fontSize:'1.2rem', width:'100%'}}><span style={{opacity:1}}>
          A platform with localised solutions around you</span> </h3>
          </Grid.Row>
          <Grid.Row>
            <div className="landingImage landingLocal overlay white">
                <p className='landingTextFooter'> Whether it’s a proven mindfulness app, an energising social activity or a conversation with a top therapist, we’ve got a personalised directory for you</p>
            </div>
          </Grid.Row>
          <Grid.Row>
          <h3 style={{fontFamily:'Quicksand', paddingTop:50, color:'#70CACC', fontSize:'1.2rem', width:'100%'}}><span style={{opacity:1}}>
          Get a personalised shortlist to choose from. </span> </h3>
          </Grid.Row>
          <Grid.Row>
            <div className="landingImage landingPersonal overlay white">
                <p className='landingTextFooter'> By answering some confidential questions, we can draw up a short list for you to choose from. BetterSpace is your guide through an ever-expanding (and sometimes confusing) world of solutions to any mental health issues you may have</p>
            </div>
          </Grid.Row>
          <Grid.Row>
          <h3 style={{fontFamily:'Quicksand', paddingTop:50, color:'#70CACC', fontSize:'1.2rem', width:'100%'}}><span style={{opacity:1}}> Maintain your mental status. Download the App to keep track!  </span> </h3>
          </Grid.Row>
          <Grid.Row>
            <div className="landingImage landingAPP overlay white">
                <p className='landingTextFooter'> We work with charities (mind etc..) , research groups (unieversity of ...)  to provide the best in class...</p>
            </div>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column style={{paddingLeft: '.2rem', paddingRight: '.2rem', }}>
              <Image src={ImagePic51} centered style={{ width:'100%', height:55}}/>
            </Grid.Column>
            <Grid.Column style={{paddingLeft: '.2rem', paddingRight: '.2rem', }}>
              <Image src={ImagePic52} centered style={{ width:'100%', height:55}}/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
          <h3 style={{fontFamily:'Quicksand', paddingTop:50, color:'#70CACC', fontSize:'1.2rem', width:'100%'}}><span style={{opacity:1}}>
          We work only with the best </span> </h3>
          </Grid.Row>
          <Grid.Row>
            <div className="landingImage landingWork overlay white">
                <p className='landingTextFooter'> We work with charities (mind etc..) , research groups (unieversity of ...)  to provide the best in class...</p>
            </div>
          </Grid.Row>
          <Grid.Row>
          <h3 style={{fontFamily:'Quicksand', paddingTop:50, color:'#70CACC', fontSize:'1.2rem', width:'100%'}}><span style={{opacity:1}}>
          Confidentiality </span> </h3>
          </Grid.Row>
          <Grid.Row>
            <div className="landingImage landingTrust overlay white">
                <p className='landingTextFooter'> Your confidence is our top priority. You can access your recommendations in anonymity. We’ll only ask you to share information for your benefit, we exercise the highest levels of data privacy.</p>
            </div>
          </Grid.Row>
          <Grid.Row>
          <h3 style={{fontFamily:'Quicksand', paddingTop:50, color:'#70CACC', fontSize:'1.2rem', width:'100%'}}><span style={{opacity:1}}>
          How we work </span> </h3>
          </Grid.Row>
          <Grid.Row>
            <div className="landingImage landingBiz overlay white">
                <p className='landingTextFooter'> BetterSpace is free to use, and on our app/site you'll find many solutions that are free - that's a big part of our social mission. Wondering how we pay our bills? We're like the App Store - making a small commission if you buy paid services.</p>
            </div>
          </Grid.Row>

          <p>

          </p>
        </Grid>
        <Grid.Row  style={{marginTop: 20,height:80, background:'#249ECD', textAlign:'left'}}>
          <h2 style={{zIndex:100, color:'white', padding:20}}>BetterSpace</h2>
        </Grid.Row>
      </div>
    </div>
  )
}
