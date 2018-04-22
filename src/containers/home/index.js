import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Button, Grid , Checkbox} from 'semantic-ui-react'
import {setPath, setSessionStart} from '../../actions/questionnaireActions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactGA from 'react-ga';
import HomeButton from '../homeButton'



class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 , address:'information', recover:0, improve:0};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleBeta = this.handleBeta.bind(this);
    this.handleButton = this.handleButton.bind(this);
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

  handleButton(id, state){
    console.log(id);
    switch(id){
      case 'recover':
        if(state)this.setState({recover:this.state.recover+1});
        else this.setState({recover:this.state.recover-1});
      break;
      case 'improve':
        if(state)this.setState({improve:this.state.recover+1});
        else this.setState({improve:this.state.recover-1});
      break;
    }
    console.log(this.state);
  }

  handleButtonNext(){
    if(this.state.recover>0)
      this.handleMainButtons('/recover');
    else
      this.handleMainButtons('/improve');
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
                        <p className='landingTitle' style={{ paddingTop:50, marginRight:20}}>
                          Welcome to BetterSpace
                        </p>

                        <p className='landingTitle' >
                          I want to:
                        </p>
                    </Grid.Row>

                    <Grid.Row   style={{margin:0, padding:0}}>
                      <HomeButton  label="have clearer thinking" type="recover" click={this.handleButton}/>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                    <HomeButton  label="have better sleep" type="recover" click={this.handleButton}/>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                      <HomeButton  label='feel inspired' type="improve" click={this.handleButton}/>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                      <HomeButton  label="beat depression" type="recover" click={this.handleButton}/>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                      <HomeButton  label="beat addiction" type="recover" click={this.handleButton}/>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                      <HomeButton  label="beat anxiety" type="recover" click={this.handleButton}/>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                      <HomeButton  label='perform better at work' type="improve" click={this.handleButton}/>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <HomeButton  label="be better at coping" type="recover" click={this.handleButton}/>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                      <HomeButton  label="feel less lonely" type="recover" click={this.handleButton}/>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                    <HomeButton  label='be more successful' type="improve" click={this.handleButton}/>
                    </Grid.Row>

                    <Grid.Row   style={{margin:0, padding:0}}>
                    <HomeButton  label='do more exercise' type="improve" click={this.handleButton}/>
                    </Grid.Row>

                    <Button className='landingButton'  onClick={this.handleButtonNext.bind(this)} > Next </Button>



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
