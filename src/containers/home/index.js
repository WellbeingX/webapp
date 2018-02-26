import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../reducers/counter'
import { Image,Divider,Container, Button, Grid, Header, List, Segment } from 'semantic-ui-react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactGA from 'react-ga';


const mainFormat = {  height:300 };
const backColor = {background: 'green', color:'white' };
const speechBubbleContainer = {paddingTop:0, height:600, textAlign:'bottom', backgroundImage: `linear-gradient(-20deg, #96D0A7, #249ECD)`};
const speechBubble = { textAlign:'left', fontSize:'1rem', fontWeight: 900, color:'white', borderRadius:20, padding:0};
const speechText = {margin:0, color:'white'}
const inputBarb = { paddingTop:15, paddingBottom:0, marginBottom:0}
const buttonStyle = {background:'white', color:'#6FC9CB', borderRadius:40, fontSize:'1rem', fontWeight: 900, marginTop:0, padding:'15 20'}
const triangle = {width: 0, height: 0, marginTop:-15, marginLeft:50, borderLeft:'30px solid transparent', borderRight:'30px solid transparent',borderTop:'40px solid #fff'}



class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    ReactGA.pageview('/');
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
    console.log(window.innerHeight);
  }

  render() {

    // RESPONSIVE MANAGEMENT
    var windowHeight = this.state.height;
    var containerStyle = {paddingTop:0,marginTop:0};
    var titleStyle = {marginTop:windowHeight*.1, height:windowHeight*.1};
    var windowHeightContainer = windowHeight*.6;
    // MOBILE
    if(this.state.width<1200){
      console.log("Mobile");
    if (windowHeight< 800) {

      console.log("Eccolo");

      windowHeight = windowHeight*.7;
      containerStyle = {paddingTop:windowHeight*.2}
      titleStyle = {marginTop:windowHeight*.1, height:windowHeight*.2};
    }else if (windowHeight<1400) {
      windowHeightContainer = 600;
      titleStyle = {marginTop:100, height:50};

    }else{
      windowHeightContainer = 700;
      titleStyle = {marginTop:150, height:50};
    }
  }else{
    // DESKTOP
    console.log("Desktop");
    if (windowHeight< 800) {
      console.log("Eccolo");
      windowHeightContainer = 550;
      containerStyle = {paddingTop:0, marginTop:0}
      titleStyle = {marginTop:0, height:200};
    }else if (windowHeight<1400) {
      windowHeightContainer = 600;
      titleStyle = {marginTop:100, height:50};

    }else{
      windowHeightContainer = 1000;
      titleStyle = {marginTop:150, height:50};
    }
  }


      return(
          <Container style={containerStyle}>
          <ReactCSSTransitionGroup
           component="div"
           transitionName="fade"
           transitionEnterTimeout={800}
           transitionLeaveTimeout={500}
           transitionAppear
           transitionAppearTimeout={500}
          >
                <Grid  style={speechBubbleContainer} style={{height:windowHeightContainer}} >

                    <Grid.Row style={titleStyle}>

                        <Grid.Column style={{flex:0}}/>
                        <Grid.Column style={{flex:15, padding:0}}>

                              <div style={speechBubble} >
                                  <p style={speechText}>
                                  If you’re ready to control stress and negative thoughts, you’re ready for Better Space</p>
                              </div>

                        </Grid.Column>
                        <Grid.Column style={{flex:0}}/>

                    </Grid.Row>

                    <Grid.Row  style={inputBarb} >
                        <Grid.Column  style={{flex:1, padding:0, marginTop:-0, textAlign:'center'}} >
                          <Button style={buttonStyle} onClick={() => this.props.changePage("information")} >Start my journey</Button>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row  style={inputBarb} >
                    </Grid.Row>

                </Grid>

                </ReactCSSTransitionGroup>


          </Container>
        )

  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: (textInput) => push('/' + textInput)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
