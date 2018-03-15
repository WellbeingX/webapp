import React from 'react';
import { Container, Grid} from 'semantic-ui-react';
import digitalSVG from '../../assets/svg/digital.js';





function DirectoryHeader(props){
  var styleSVG = {marginRight:0, height:80, float:'right', width:1000, marginTop:-100, marginRight:-30}
  var r = 80;
  var cX = 1000;
  var cY = 0;

  function solutionMatching(){

  }





  return(
      <div className='logoReplacementWrapper'>
      <Container>
          <p className= 'logoReplacement'>BetterSpace</p>
          <svg style={styleSVG}>

              <circle cx={cX} cy={cY} r={r} fill="white" />

          </svg>

          <Grid columns={3} style={{paddingTop:10}}>
            <Grid.Column center style={{textAlign:'center', padding:'1rem 0'}} >
                <div className='directoryIcon'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69 115.49" style={{height:40, marginTop:3, fill:'none', stroke:'#70c9cb', strokeMiterlimit:10, strokeWidth:4}}>
                          <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                              <path class="cls-1" d="M3.23,113.35c18.66-1.57,37.44-2.24,56.2-2C64.5,101.61,62,90.53,61.19,80c-1.31-17,2-33.95,5.24-50.76a16,16,0,0,0,.35-6.51,36.22,36.22,0,0,0-2.22-5.39,15.55,15.55,0,0,1,.54-12.85C44.56,5.93,24.52-.64,4.44,3.24,6.17,21.6,7.91,40,6.68,58.41,6.16,66.2,5.12,74,4.23,81.72,3.42,88.85,2.75,96,2.08,103.12,1.76,106.55,2.49,110,3.23,113.35Z"/>
                              <path class="cls-1" d="M28.35,98.9a3.56,3.56,0,0,0-.74,4.13,4.35,4.35,0,0,0,1.28,1.29,6.46,6.46,0,0,0,3.61,1.31A3.92,3.92,0,0,0,35.85,104a6,6,0,0,0,.63-3.43,2.23,2.23,0,0,0-.16-.91,2,2,0,0,0-.66-.7C33.34,97.19,30.59,96.64,28.35,98.9Z"/>
                              <path class="cls-1" d="M12.3,12.37a214.74,214.74,0,0,1,43.64-1.67c-6.73,25.44-2.08,51.75-2.81,77.72C42.87,89.5,32.27,90.4,22,89.66a22.83,22.83,0,0,0-7,.13C13.67,75.63,13,61.48,14.34,47.33,15.48,35.29,17.65,23.7,12.3,12.37Z"/>
                            </g>
                          </g>
                        </svg>
                  </div>
                  <p className="directoryCategory">Digital</p>
            </Grid.Column>

            <Grid.Column style={{textAlign:'center', padding:'1rem 0'}} >
            <div className='directoryIcon directoryNotSelected'>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.93 90.76" style={{margin:'auto', height:35, marginTop:7, fill:'none', stroke:'white', strokeMiterlimit:10, strokeWidth:4}}>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                  <path class="cls-1" d="M19.18,25.36a27,27,0,0,0,4.7.52,5.29,5.29,0,0,0,3.54-.81,5,5,0,0,0,1.24-1.78C31.76,16.9,33.17,6.67,25.41,3,19-.07,9.82,4.37,8.28,11.21a11.18,11.18,0,0,0,2.11,9.27c2.12,2.67,5.53,2.65,7.65,4.68C20.39,27.38,20.4,32.3,21,35.45a228.25,228.25,0,0,1,3.2,27.4"/>
                  <path class="cls-1" d="M8.88,53.25A134.63,134.63,0,0,1,21,38.45,36.26,36.26,0,0,1,35.56,48.77"/>
                  <path class="cls-1" d="M1.48,82A143.69,143.69,0,0,1,23.62,62.2C30.69,66.55,36.32,74,43.28,78.51"/>
                  <path class="cls-1" d="M66.85,30.94c3.39,0,6.76-1.4,8.33-4.33,4.45-8.32-.82-21-11.27-16.23-8.43,3.81-11.72,15-2.07,19.47,3.26,1.52,3.89.69,5.19,4s.78,8.48,1.17,12c.78,6.93.41,17.72,3.63,23.95,3,5.78,9.17,11.06,13,16.49"/>
                  <path class="cls-1" d="M87.74,58A110,110,0,0,1,72,43.79c-1-1.1-2.12-2.3-3.6-2.46a5.9,5.9,0,0,0-3.34,1A94.07,94.07,0,0,0,49.78,52.62a1.55,1.55,0,0,1,.77,2"/><path class="cls-1" d="M50.68,89.61A308.79,308.79,0,0,1,69.86,64.85"/>
                  </g>
                </g>
              </svg>
            </div>
            <p className="directoryCategory">Around you</p>

            </Grid.Column>


            <Grid.Column style={{textAlign:'center', padding:'1rem 0'}} >
            <div className='directoryIcon directoryNotSelected'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.5 106.75" style={{height:45}}>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path style={{fill:'none', stroke:'white', strokeMiterlimit:10, strokeWidth:4}} d="M2.28,84.16c13.15,3.65,24.44,12,35.39,20.1A301.56,301.56,0,0,1,79.45,78.54L78,39.27Q64.75,48.12,50.83,55.9a14.57,14.57,0,0,1-6.15,2.28c-2.34.12-4.57-.86-6.72-1.78q-8.7-3.74-17.7-6.72C16.9,48.57,7.1,43.78,3.82,45.93c-3.09,2-1.3,14-1.34,17.46Z"/>
                      <path style={{fill:'none', stroke:'white', strokeMiterlimit:10, strokeWidth:4}} d="M43,62.07c-2.88,12.49.56,26.06-3.84,38.1"/>

                      <path style={{fill:'none', stroke:'white', strokeMiterlimit:10, strokeWidth:7}} d="M33.61,41.77c2.59,1.16,5.68.41,8.12-1s4.44-3.51,6.67-5.26c4.83-3.78,10.71-6.06,15.43-10a6.86,6.86,0,0,0,2.2-2.7,7.26,7.26,0,0,0,.19-3.36,51.47,51.47,0,0,0-2.14-10c-.56-1.75-1.3-3.58-2.81-4.63a8.38,8.38,0,0,0-4-1.16c-3.84-.37-7.94-.19-11.2,1.88s-5.27,5.88-6.7,9.58C36.67,22,36.56,29,34.83,36c-1.55,6.26-6,3.34-11.22,2.06a30.57,30.57,0,0,1-8.55-3c-2.6-1.56-4.8-4.09-5.21-7.1-.37-2.72,1.18-5.85,3.88-6.4,2.34-.48,4.58,1,6.48,2.46C24.48,27.2,28.68,30.7,31.92,35c1.85,2.46,2.3,3.83,1.87,4.5"/>

                      <path style={{fill:'none', stroke:'white', strokeMiterlimit:10, strokeWidth:4}} d="M6.92,44.31A55.53,55.53,0,0,0,14.7,39"/>
                      <path style={{fill:'none', stroke:'white', strokeMiterlimit:10, strokeWidth:4}} d="M78.18,37.6c-4.75-3.47-11.21-2.84-17-3.85"/>

                      <path style={{fill:'none', stroke:'white', strokeMiterlimit:10, strokeWidth:7}} d="M19,90.55q1.09-17.71.51-35.48a6.23,6.23,0,0,1,.22-2.32A6,6,0,0,1,22.2,50.1a91.64,91.64,0,0,1,11.72-6.92c6.37,3,15.24,6,20.81,10.33a5.14,5.14,0,0,1,1.59,1.69,5.22,5.22,0,0,1,.4,1.7A295.73,295.73,0,0,1,58.65,89"/>
                      </g>
                    </g>
                </svg>
            </div>
            <p className="directoryCategory">Products</p>
            </Grid.Column>
          </Grid>
        </Container>
      </div>



  )
}



export default DirectoryHeader;
