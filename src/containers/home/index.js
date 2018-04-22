import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Button, Grid , Checkbox} from 'semantic-ui-react'
import {setPath, setSessionStart} from '../../actions/questionnaireActions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactGA from 'react-ga';
import Carousel from '../carousel';




class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 , address:'information'};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleBeta = this.handleBeta.bind(this);
  }

  componentDidMount() {
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

  handleBeta(event, data){
    console.log(event);
    console.log(data);
    if(data.checked) this.setState({address :'information/beta'});
    else this.setState({address :'information/'});
  }

  handleMainButtons(journey){
    let sessionName = 'session_' + Date();
    let sessionType = journey;
    this.props.setSessionStart({'sessionName':sessionName, 'sessionType':sessionType});
    this.props.changePage(this.state.address + journey);
  }

  render() {




      return(
          <Container >
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

                    <p className='landingTitle' style={{paddingBottom:80, paddingTop:50, marginRight:20}}>
                      Welcome to BetterSpace
                    </p>

                    <p className='landingTitle' >
                      I want to...
                    </p>


                    </Grid.Row>

                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.handleMainButtons('/recover') } >have clearer thinking</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.handleMainButtons('/recover')} >be better at coping</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.handleMainButtons('/improve')} >feel inspired</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.handleMainButtons('/recover')} >beat depression</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.handleMainButtons('/recover')} >beat addiction</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.handleMainButtons('/recover')} >beat anxiety</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.handleMainButtons('/improve')} >perform better at work</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.handleMainButtons('/recover')} >feel less lonely</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.handleMainButtons('/improve')} >be more successful</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.handleMainButtons('/recover')} >have better sleep</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.handleMainButtons('/improve')} >do more exercise</Button>
                    </Grid.Row>




                </Grid>

                </ReactCSSTransitionGroup>

                <Checkbox style={{margin:10}} onChange={this.handleBeta} label='Beta' style={{color:'white', fontSize:'.8rem', opacity:.7, paddingBottom:25}} />

          </Container>
        )

  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
  setPath,
  setSessionStart,  
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
