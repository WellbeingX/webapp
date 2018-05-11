import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Button, Grid , Checkbox} from 'semantic-ui-react'
import {setPath, setSessionStart, setLastAnswer} from '../../actions/questionnaireActions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactGA from 'react-ga';
import HomeButton from '../homeButton'
import {SLEEP, PERFORMANCE, HEALTHIER, STRESS, DEPRESSION, ANXIETY, THINK} from '../../api/labels'


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 , address:'information', depression:0, anxiety:0, improve:0, selected:[], sessionName:''};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleBeta = this.handleBeta.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount() {

    this.handleQuestionnaireBack();
    let formattedDay = (new Date()).getDate();
    let formattedMonth = (new Date()).getMonth();
    let formattedYear = (new Date()).getYear();
    let formattedHours = (new Date()).getHours();
    let formattedMin = (new Date()).getMinutes();
    let sessionName = 'session_dmy_' + formattedDay + '_' + formattedMonth + '_' + formattedYear + '_mh_' + formattedMin + '_' + formattedHours;
    this.props.setSessionStart({'sessionName':sessionName, 'sessionType':'homepage'});
    this.setState({sessionName: sessionName})

    // this.props.setPath('/')
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    ReactGA.pageview('/');
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }
  handleQuestionnaireBack(){
    if(this.props.counter.questionId>0){
      this.props.changePage(this.props.counter.path.substring(1))
    }
  }

  handleBeta(event, data){
    if(data.checked) this.setState({address :'information/beta'});
    else this.setState({address :'information/'});
  }

  handleMainButtons(journey){
    this.props.changePage(this.state.address + journey);
  }

  handleButton(id, state, label){
    console.log(label);
    let arrayButton=[];
    switch(id){
      case 'depression':
        if(state)
        {
          arrayButton = this.state.selected;
          arrayButton.push(label);
          this.setState({depression:this.state.depression+1, selected:arrayButton});
        }
        else {
          arrayButton = this.state.selected.filter((val)=>val!==label);
          this.setState({depression:this.state.depression-1, selected:arrayButton});
        }
      break;
      case 'anxiety':
        if(state)
        {
          arrayButton = this.state.selected;
          arrayButton.push(label);
          this.setState({anxiety:this.state.anxiety+1, selected:arrayButton});
        }
        else {
          arrayButton = this.state.selected.filter((val)=>val!==label);
          this.setState({anxiety:this.state.anxiety-1, selected:arrayButton});
        }
      break;
      case 'improve':
        if(state){
          arrayButton = this.state.selected;
          arrayButton.push(label);
          this.setState({improve:this.state.improve+1, selected:arrayButton});
        }
        else{
          arrayButton = this.state.selected.filter((val)=>val!==label);
          this.setState({improve:this.state.improve-1, selected:arrayButton});
        }

      break;
      default:

      break;
    }
  }

  handleButtonNext(){
    console.log(this.state);
    let data2firebase = {sessionName: this.state.sessionName ,
                         entry:{
                           questionId: 0,
                           question: 'How can I help you today?',
                           answerId: this.state.recover,
                           answer: this.state.selected},
                           questionLabel:'Landing'
                         };
    this.props.setLastAnswer(data2firebase)
    if(this.state.depression>0)
      this.handleMainButtons('/depression');
    else if(this.state.anxiety>0)
      this.handleMainButtons('/anxiety');
    else {
      this.handleMainButtons('/improve');

    }
  }

  render() {




      return(
        <div >
          <ReactCSSTransitionGroup
           component="div"
           transitionName="fade"
           transitionEnterTimeout={800}
           transitionLeaveTimeout={500}
           transitionAppear
           transitionAppearTimeout={500}
          >
                <Grid  className='landingWrapper' style={{margin:0, padding:0}} >
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <p className='landingTitle' style={{ paddingTop:50, marginRight:20}}>
                          There are millions of ways to build a healthy mind. Our job is to help you find what will work best for you.
                        </p>

                        <p className='landingTitle' >
                          What would you like to achieve?
                        </p>
                    </Grid.Row>
                    </Grid>

                    <div style={{textAlign:'center', width:'100%'}}>
                          <HomeButton  label={SLEEP} text="sleep better" type="improve" click={this.handleButton}/>
                          <HomeButton  label={HEALTHIER} text="healthier in body and mind" type="improve" click={this.handleButton}/>
                          <HomeButton  label={PERFORMANCE} text="improve performance" type="improve" click={this.handleButton}/>
                          <HomeButton  label={STRESS} text="manage stress" type="depression" click={this.handleButton}/>
                          <HomeButton  label={DEPRESSION} text='overcome depression' type="depression" click={this.handleButton}/>
                          <HomeButton  label={ANXIETY} text="overcome anxiety" type="anxiety" click={this.handleButton}/>
                          <HomeButton  label={THINK} text="think more clearly" type="improve" click={this.handleButton}/>
                      </div>
                      <div style={{width:'100%', textAlign:'center'}}>
                      <Button className='landingButtonNext'  onClick={this.handleButtonNext.bind(this)} > next </Button>
                      </div>
            </ReactCSSTransitionGroup>

                <Checkbox onChange={this.handleBeta} label='Beta' style={{color:'white', fontSize:'.8rem', opacity:.7, paddingBottom:25, left:10}} />

          </div>
        )

  }
}

const mapStateToProps = state => ({
  counter:state.counter
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
