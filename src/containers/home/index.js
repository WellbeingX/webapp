import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Button, Grid , Checkbox} from 'semantic-ui-react'
import {setPath, setSessionStart, setLastAnswer} from '../../actions/questionnaireActions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactGA from 'react-ga';
import HomeButton from '../homeButton'



class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 , address:'information', recover:0, improve:0, selected:[], sessionName:''};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleBeta = this.handleBeta.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount() {
    let formattedDay = (new Date()).getDate();
    let formattedMonth = (new Date()).getMonth();
    let formattedYear = (new Date()).getYear();
    let formattedHours = (new Date()).getHours();
    let formattedMin = (new Date()).getMinutes();
    let sessionName = 'session_dmy_' + formattedDay + '_' + formattedMonth + '_' + formattedYear + '_mh_' + formattedMin + '_' + formattedHours;
    this.props.setSessionStart({'sessionName':sessionName, 'sessionType':'homepage'});
    this.setState({sessionName: sessionName})

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
    this.props.changePage(this.state.address + journey);
  }

  handleButton(id, state, label){
    console.log(id);
    console.log(label);
    let arrayButton=[];
    switch(id){
      case 'recover':
        if(state)
        {
          arrayButton = this.state.selected;
          arrayButton.push(label);
          this.setState({recover:this.state.recover+1, selected:arrayButton});
        }
        else {
          arrayButton = this.state.selected.filter((val)=>val!=label);
          this.setState({recover:this.state.recover-1, selected:arrayButton});
        }
      break;
      case 'improve':
        if(state){
          arrayButton = this.state.selected;
          arrayButton.push(label);
          this.setState({improve:this.state.improve+1, selected:arrayButton});
        }
        else{
          arrayButton = this.state.selected.filter((val)=>val!=label);
          this.setState({improve:this.state.improve-1, selected:arrayButton});
        }

      break;
    }
    console.log(this.state);
    console.log(arrayButton);
  }

  handleButtonNext(){
    let data2firebase = {sessionName: this.state.sessionName ,
                         entry:{
                           questionId: 0,
                           question: 'How can I help you today?',
                           answerId: this.state.recover,
                           answer: this.state.selected}
                         };
    this.props.setLastAnswer(data2firebase)
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
                          There are millions of ways to build a healthy mind. Our job is to help you find what will work best for you.
                        </p>

                        <p className='landingTitle' >
                          How can I help you today?
                        </p>
                    </Grid.Row>

                    <Grid.Row   style={{margin:0, padding:0}}>
                      <HomeButton  label="think more clearly" type="recover" click={this.handleButton}/>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                    <HomeButton  label="sleep better" type="recover" click={this.handleButton}/>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                      <HomeButton  label="beat depression" type="recover" click={this.handleButton}/>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                      <HomeButton  label='feel inspired' type="improve" click={this.handleButton}/>
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

                    <Button className='landingButtonNext'  onClick={this.handleButtonNext.bind(this)} > Next </Button>



                </Grid>

                </ReactCSSTransitionGroup>

                <Checkbox style={{margin:10}} onChange={this.handleBeta} label='Beta' style={{color:'white', fontSize:'.8rem', opacity:.7, paddingBottom:25}} />

          </Container>
        )

  }
}

const mapStateToProps = state => ({
  counter:state
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setPath,
  setSessionStart,
  setLastAnswer,
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
