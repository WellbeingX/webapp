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
import { Container, Button, Grid } from 'semantic-ui-react'
import {setPath} from '../../actions/questionnaireActions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactGA from 'react-ga';
import Carousel from '../carousel';

const mainFormat = {  height:300 };
const backColor = {background: 'green', color:'white' };
const speechText = {margin:0, fontSize:'1rem', color:'white', textAlign:'left'}
var inputBarb = { paddingTop:180, paddingBottom:0, marginBottom:0}
const buttonStyle = {background:'white', color:'#6FC9CB', borderRadius:40, fontSize:'1rem', fontWeight: 900, marginTop:0, padding:'15px 55px'}
const triangle = {width: 0, height: 0, marginTop:-15, marginLeft:50, borderLeft:'30px solid transparent', borderRight:'30px solid transparent',borderTop:'40px solid #fff'}



class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.setPath('/')
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
    var windowHeightContainer = windowHeight*.6;
    // MOBILE
    if(this.state.width<1200){
      console.log("Mobile");
      if (windowHeight< 700) {
        inputBarb = { ...inputBarb,
                      paddingTop:10}
        windowHeight = windowHeight*.4;
        containerStyle = {paddingTop:windowHeight*.1}
      }
    else if (windowHeight< 800) {
      windowHeight = windowHeight*.5;
      containerStyle = {paddingTop:10}
    }else if (windowHeight<1400) {
      windowHeightContainer = 600;

    }else{
      windowHeightContainer = 700;
    }
  }else{
    // DESKTOP
    console.log("Desktop");
    if (windowHeight< 800) {
      console.log("Eccolo");
      windowHeightContainer = 550;
      containerStyle = {paddingTop:0, marginTop:0}
    }else if (windowHeight<1400) {
      windowHeightContainer = 600;

    }else{
      windowHeightContainer = 1000;
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
                <Grid  className='landingWrapper' >

                    <Grid.Row   style={{margin:0, padding:0}}>


                      <p className='landingTitle' >
                        I want to...
                      </p>


                    </Grid.Row>

                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.props.changePage("information")} >have clearer thinking</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.props.changePage("information")} >be better at coping</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.props.changePage("information")} >feel inspired</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.props.changePage("information")} >beat depression</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.props.changePage("information")} >beat addiction</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.props.changePage("information")} >beat anxiety</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.props.changePage("information")} >perform better at work</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.props.changePage("information")} >feel less lonely</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.props.changePage("information")} >be more successful</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.props.changePage("information")} >have better sleep</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.props.changePage("information")} >do more exercise</Button>
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
  setPath,
  changePage: (textInput) => push('/' + textInput)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)



// <Grid.Row  centered style={inputBarb} >
//     <Grid.Row centered>
//     <Image src={ImageGuard} centered style={{padding:10,opacity:.8, width:150, height:60, paddingRight:30}}/>
//     </Grid.Row>
//     <Grid.Row centered bottom>
//     <Image src={ImageZinc} centered style={{padding:10, opacity:1, width:100, height:70, marginTop:7}}/>
//     </Grid.Row>
// </Grid.Row>
