import React from 'react';
import {Grid, Image} from 'semantic-ui-react'
import Paper from '../../assets/svg/paper.js'
import Arrow1 from '../../assets/svg/arrow1.js'
import People from '../../assets/svg/people.js'
import List from '../../assets/svg/list.js'


export default function FooterHome(){
  return(
    <div>
      <div className = "footerHome" >
        <Grid style={{background:'white', margin:20, textAlign:'center', paddingBottom:50, paddingTop:0}}>

          <Grid.Row>
            <h3 style={{fontFamily:'Quicksand', paddingTop:20, color:'#70CACC', fontSize:'1.2rem', width:'100%'}}><span style={{opacity:1}}> How it works </span> </h3>
          </Grid.Row>
          <Grid.Row style={{ padding:0}}>
            <Grid.Column style={{width:'70%', padding:0}}>
                <p className='landingTextFooterHow'>1. Start to build your confidential wellbeing profile by answering 12 questions</p>
            </Grid.Column>
            <Grid.Column style={{width:'27%', padding:20, paddingTop:0, marginTop:10}}>
                <Paper />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row  centered style={{ padding:0}}>
          <Grid.Column  style={{width:'8%', padding:0, paddingTop:0, marginTop:0}}>
              <Arrow1 />
          </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ padding:0}}>
            <Grid.Column style={{width:'70%', padding:0}}>

              <p className='landingTextFooterHow'> 2. See your wellbeing score, and personalised suggestions</p>
            </Grid.Column>
            <Grid.Column style={{width:'28%', padding:10, paddingTop:0, marginTop:20}}>
                  <List />
            </Grid.Column>

          </Grid.Row>
          <Grid.Row  centered style={{ padding:0, paddingTop:0, marginTop:0}}>
          <Grid.Column  style={{width:'8%', padding:0, paddingTop:0, marginTop:0}}>
              <Arrow1 />
          </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ padding:0}}>
            <Grid.Column style={{width:'70%', padding:0}}>

                <p className='landingTextFooterHow'> 3. See availability and experiment as you learn to put your mind first! </p>
                </Grid.Column>
                <Grid.Column style={{width:'30%', padding:20, paddingTop:0, marginTop:20}}>
                  <People />
                </Grid.Column>

          </Grid.Row>
</Grid>



          <Grid.Row style={{background:'#70CACC', marginTop:20, width:'100%'}}>
                  <h3 style={{fontFamily:'Quicksand', paddingTop:20, color:'white', fontSize:'1.2rem', width:'100%', textAlign:'center'}}><span style={{opacity:1}}>
                  Features </span> </h3>

                  <div  className='homeFeatRow' style={{ width:'100%'}}>
                    <div   className='homeFeatIcon' >
                      <div style={{background:'white', borderRadius:'100%', width:80, height:80}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.27 166.5" style={{ fill:'#70CACC', stroke:'#70CACC', strokeMiterlimit:10 , width:50, height:50, marginTop:15}}>
                          <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                              <path class="cls-1" d="M11.75,11.51h0a37.59,37.59,0,0,1,55.39,2.44h0a32.69,32.69,0,0,1,7.2,26.33S37.8,166,37.29,166h0C36.8,166,1,44.92,1,44.92A38.4,38.4,0,0,1,11.75,11.51Z"/>
                              <circle style={{fill:'#f7f9f9'}} cx="37.3" cy="35.5" r="19"/>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div  className='homeFeatText' >
                      <h3 style={{fontFamily:'Quicksand', color:'white', fontSize:'1rem',margin:0, paddingBottom:10}}><span style={{opacity:1}}>
                      Everything in one place</span></h3>
                      <h3 style={{fontFamily:'Quicksand', color:'white', fontSize:'.6rem', margin:0}}> We search the world and your local area for what works, from therapists to apps to exercise clubs.</h3>
                    </div>
                  </div>

                  <div  className='homeFeatRow' style={{ width:'100%'}}>
                    <div   className='homeFeatIcon' >
                      <div style={{background:'white', borderRadius:'100%', width:80, height:80}}>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 168.5" style={{fill:'#70CACC', stroke:'#70CACC', strokeMiterlimit:10, width:50, height:50, marginTop:15}} >
                          <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                              <circle class="cls-1" cx="34" cy="19.5" r="19"/>
                                <path class="cls-1" d="M14.5,168h38V119h15V55L43.3,45.35a30.68,30.68,0,0,0-19.63-.08L.5,55v64h14Z"/>
                              </g>
                            </g>
                          </svg>


                      </div>
                    </div>
                    <div  className='homeFeatText' >
                      <h3 style={{fontFamily:'Quicksand', color:'white', fontSize:'1rem',margin:0, paddingBottom:10}}><span style={{opacity:1}}>
                      Personalised to you</span></h3>
                      <h3 style={{fontFamily:'Quicksand', color:'white', fontSize:'.6rem', margin:0}}> We’re proud of our ability to match, using the minimum questions and location data</h3>
                    </div>
                  </div>

                  <div  className='homeFeatRow' style={{ width:'100%'}}>
                    <div   className='homeFeatIcon' >
                      <div style={{background:'white', borderRadius:'100%', width:80, height:80}}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='AppSVG' viewBox="0 0 166.53 92.71">
                          <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                              <g id="nGBvQl.tif">
                                <path className="cls-1" d="M21.68,78.72H19.81c-.59-.18-1.2-.33-1.77-.56a13,13,0,0,1-5-3.77,49.44,49.44,0,0,1-9.18-15A44.55,44.55,0,0,1,.57,40.53,24.86,24.86,0,0,1,3.72,29.47a19,19,0,0,1,12.41-9.39A12.92,12.92,0,0,1,22.86,20c2.23.65,4.41,1.46,6.61,2.21,1.54.53,3.07,1.15,4.73.61,1.44-.47,2.86-1,4.28-1.55,3.23-1.23,6.49-2.16,10-1.78a18.63,18.63,0,0,1,11.7,5.38c.69.7,1.27,1.5,1.87,2.22-.9.73-1.73,1.33-2.47,2a22.21,22.21,0,0,0-2.1,2.2A16.46,16.46,0,0,0,53.9,44.85a16.2,16.2,0,0,0,3.56,8,18,18,0,0,0,6.08,4.77c.43.21.6.41.4.89-.57,1.38-1,2.81-1.66,4.16A47.58,47.58,0,0,1,54,75a11.09,11.09,0,0,1-4.54,3.1,11,11,0,0,1-7.73-.5,49.31,49.31,0,0,0-4.68-1.67,14.22,14.22,0,0,0-8.81.62c-1.65.61-3.31,1.23-5,1.81A13.61,13.61,0,0,1,21.68,78.72Z"/>
                                  <path className="cls-1" d="M47.8.5a26.24,26.24,0,0,1-.07,3.78,17.16,17.16,0,0,1-6.3,11,12.94,12.94,0,0,1-9.19,3.2,11.29,11.29,0,0,1,.13-4A17.48,17.48,0,0,1,40,3.3,16.54,16.54,0,0,1,46.89.61,1.36,1.36,0,0,0,47.17.5Z"/>
                                  </g>
                                  <path className="cls-1" d="M105.64,34.71H153.3c0,.17,0,.32,0,.48q0,17,0,34.08A5.69,5.69,0,0,1,148.49,75a22.42,22.42,0,0,1-2.88.07h-1.87v.55q0,5.57,0,11.13a5.34,5.34,0,0,1-5.55,5.47,5.24,5.24,0,0,1-5.09-4.9c-.09-3.19,0-6.38-.06-9.57,0-.88,0-1.75,0-2.66h-7.11c0,.22,0,.41,0,.6,0,3.61,0,7.23,0,10.84A5.35,5.35,0,0,1,124,90.93a5.34,5.34,0,0,1-8.76-4.07c0-3.74,0-7.49,0-11.23,0-.18,0-.36,0-.61h-.64c-1.17,0-2.34,0-3.51,0a5.69,5.69,0,0,1-5.43-5.63c0-.93,0-1.86,0-2.78q0-15.62,0-31.25Z"/>
                                  <path className="cls-1" d="M141.21,13.6C148.67,17.87,153,24,153.38,32.79H105.59c.37-8.74,4.7-14.91,12.17-19.18l-1.31-2.39-2.28-4.09L114.08,7a.77.77,0,1,1,1.33-.75c.55,1,1.09,2,1.63,2.94L119.15,13a26,26,0,0,1,20.67,0l1.82-3.28c.65-1.18,1.3-2.36,2-3.54a.75.75,0,0,1,1-.34.76.76,0,0,1,.3,1.05l-.13.26-3.39,6.09Zm-22.76,6.51a2,2,0,0,0-2,2,2,2,0,0,0,2,2,2,2,0,0,0,2-2A2,2,0,0,0,118.46,20.11Zm24,2a2,2,0,0,0-2-2,2,2,0,0,0-2,1.95,2,2,0,0,0,2,2A2,2,0,0,0,142.48,22.11Z"/>
                                  <path className="cls-1" d="M103.64,50.28c0,3.68,0,7.36,0,11A5.33,5.33,0,0,1,93,61.69q0-11.4,0-22.8a5.32,5.32,0,0,1,10.23-1.82,7,7,0,0,1,.41,2.33C103.66,43,103.64,46.65,103.64,50.28Z"/>
                                  <path className="cls-1" d="M166,50.27c0,3.68,0,7.36,0,11a5.34,5.34,0,0,1-10.64.73c0-.27,0-.55,0-.83q0-10.94,0-21.87a5.19,5.19,0,0,1,3.32-5.15A5.31,5.31,0,0,1,166,38.95c0,3.77,0,7.55,0,11.33Z"/>
                                </g>
                              </g>
                            </svg>
                      </div>
                    </div>
                    <div  className='homeFeatText' >
                      <h3 style={{fontFamily:'Quicksand', color:'white', fontSize:'1rem',margin:0, paddingBottom:10}}><span style={{opacity:1}}>
                      Set goals and track progress</span></h3>
                      <h3 style={{fontFamily:'Quicksand', color:'white', fontSize:'.6rem', margin:0}}> Need immediate feedback? Or do you just like seeing your growth on a chart? BetterSpace is the self-improvement hub for you</h3>
                    </div>
                  </div>

                  <div  className='homeFeatRow' style={{ width:'100%'}}>
                    <div   className='homeFeatIcon' >
                      <div style={{background:'white', borderRadius:'100%', width:80, height:80}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.25 92.49" className='starSVG'>
                          <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                              <polygon className="cls-1" points="48.63 76.13 19.24 91.58 24.85 58.85 1.07 35.68 33.93 30.9 48.63 1.13 63.32 30.9 96.18 35.68 72.4 58.85 78.02 91.58 48.63 76.13"/>
                            </g>
                          </g>
                        </svg>
                       </div>
                    </div>
                    <div  className='homeFeatText' >
                      <h3 style={{fontFamily:'Quicksand', color:'white', fontSize:'1rem',margin:0, paddingBottom:10}}><span style={{opacity:1}}>
                      Social mission</span></h3>
                      <h3 style={{fontFamily:'Quicksand', color:'white', fontSize:'.6rem', margin:0}}>By making it easier to have a healthy mind, we want to tackle rising levels or mental illness </h3>
                    </div>
                  </div>

                  <div  className='homeFeatRow' style={{ width:'100%'}}>
                    <div   className='homeFeatIcon' >
                      <div style={{background:'white', borderRadius:'100%', width:80, height:80}}>

                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.61 110.5" className='lockSVG'>
                        <g id="Layer_2" data-name="Layer 2">
                          <g id="Layer_1-2" data-name="Layer 1">
                            <ellipse className="cls-1" cx="35.12" cy="43.08" rx="27.58" ry="42.58"/>
                            <ellipse className="cls-2" cx="35.3" cy="52.71" rx="18.51" ry="42.58"/>
                            <rect className="cls-1" x="0.5" y="47.89" width="69.61" height="62.11"/>
                            <path className="cls-2" d="M27.82,70.25h0c3.77-2.3,10-2.14,13.38.36h0a3.64,3.64,0,0,1,1.74,3.89S34.11,93.06,34,93.06h0c-.12,0-8.76-17.88-8.76-17.88C24.74,73.38,25.7,71.54,27.82,70.25Z"/>
                          </g>
                        </g>
                      </svg>


                       </div>
                    </div>
                    <div  className='homeFeatText' >
                      <h3 style={{fontFamily:'Quicksand', color:'white', fontSize:'1rem',margin:0, paddingBottom:10}}><span style={{opacity:1}}>
                      Protecting your data</span></h3>
                      <h3 style={{fontFamily:'Quicksand', color:'white', fontSize:'.6rem', margin:0}}> We get it. Winning and retaining your trust is everything for us - see our data policy </h3>
                    </div>
                  </div>
          </Grid.Row>


          <Grid.Row style={{paddingBottom:50, textAlign:'center'}}>
            <h3 style={{fontFamily:'Quicksand', paddingTop:50, color:'#70CACC', fontSize:'1.2rem', width:'100%'}}><span style={{opacity:1}}>
            How we work </span> </h3>
            <p className='landingTextFooter'> BetterSpace is free to use, and on our app/site you'll find many solutions that are free - that's a big part of our social mission. Wondering how we pay our bills? We're like the App Store - making a small commission if you buy paid services.</p>
          <p>
          </p>
          </Grid.Row>



          <Grid.Row  >
            <div className='footerFooterHome'>
              <h2 style={{zIndex:100, color:'white', padding:20}}>BetterSpace</h2>
              <p>Copyright WellbeingX Ltd. 2018. All rights reserved.
              <br /><br />WellbeingX is registered and incorporated in England and Wales, company registration number 11053000.</p>
            </div>
        </Grid.Row>
      </div>
    </div>
  )
}
