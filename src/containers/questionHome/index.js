import React from 'react';
import questionBetaRecover from '../../api/questions-beta-recover';
import questionBetaImprove from '../../api/questions-beta-improve';
import questionRecover from '../../api/questions-recover';
import questionImprove from '../../api/questions-improve';
import update from 'react-addons-update';
import Questionnaire from '../questionnaire';
import Result from '../result';
import Directory from '../directory';
import { Route, Link } from 'react-router-dom'
import About from '../about'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {setLastAnswer, setName, setPath, setSessionStart, setBackButton, setResetQuestionnaire} from '../../actions/questionnaireActions'
import ReactGA from 'react-ga';
import ScrollToTop from '../scrollToTops'


var quizQuestions =[];

class QuestionHome extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
       counter: 0,
       questionId: props.counter.questionId,
       question: '',
       dialog:'',
       answerOptions: [],
       answer: '',
       answerId:1,
       timeStamp:'',
       beta:false,
       journey:'improvement',
       result: '',
       width: 0,
       height: 0,
       answerType:'',
       label:''
      };
      this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }




    componentWillMount() {
      // The current path is stored in the STORE in order to inform every component in which path we are (to be moved to the ROUTER component)
      this.props.setPath(this.props.location.pathname)


      // Listener to the screen size
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);

      // Here the PATH is sent to the Google Analytics
      ReactGA.pageview(this.props.location.pathname);
      // Depending on the path the user is sent to a different journey, that means different questionnaire JSONs
      if(this.props.location.pathname.includes("/information/beta/recover")){
          quizQuestions = questionBetaRecover;
        }else if(this.props.location.pathname.includes("/information/beta/improve")){
          quizQuestions = questionBetaImprove;
        }else if(this.props.location.pathname.includes("/information/recover")){
          quizQuestions = questionRecover;
        }else if(this.props.location.pathname.includes("/information/improve")){
          quizQuestions = questionImprove;
        }else {
          console.log('Error reading questionnaire questions');
        }
        console.log('Problema?');
        console.log(this.props.counter.questionId);
        let index = this.props.counter.questionId-1;
        if(index<0)index=0;
          this.setState({
          dialog: quizQuestions[index].dialog,
          question: quizQuestions[index].question,
          answerOptions: quizQuestions[index].answers,
          answerType:quizQuestions[index].answerType,
          label: quizQuestions[index].label
        });
     }

     componentDidMount(){
       //Check if the sessionName was stored
       if(this.props.counter.sessionName==''){
         let formattedDay = (new Date()).getDate();
         let formattedMonth = (new Date()).getMonth();
         let formattedYear = (new Date()).getYear();
         let formattedHours = (new Date()).getHours();
         let formattedMin = (new Date()).getMinutes();
         let sessionName = 'session_dmy_' + formattedDay + '_' + formattedMonth + '_' + formattedYear + '_mh_' + formattedMin + '_' + formattedHours;
         this.props.setSessionStart({'sessionName':sessionName});
       }
       // this.setState({questionId:this.props.counter.questionId})
       window.onpopstate = this.onBackButtonEvent;

     }

     componentWillUnmount() {
       window.removeEventListener('resize', this.updateWindowDimensions);
     }

     updateWindowDimensions() {
       this.setState({ width: window.innerWidth, height: window.innerHeight});
     }

     componentDidUpdate() {
     }


     onBackButtonEvent = (e)=>{
       // This is the handler for the back button, a little hack, shhould be fixed properly using the router
      e.preventDefault()
      this.props.setBackButton()
     }


     // This function replaces the placeholder /name with the name saved in the store
     nameCheck (text) {return(text.replace("/name" , this.props.counter.name))}


     handleAnswerSelected(event) {
       // This is the handler that is sent as prop to all the questions, it manages what happens after the user clicks the button that will bring to the next question

       // HERE IT PUTS THE ANSWER IN THE STORE and in FIREBASE
       let data2firebase = {sessionName: this.props.counter.sessionName ,
                            entry:{
                              questionId: this.state.questionId,
                              question: this.state.question,
                              answerId: event.currentTarget.id,
                              answer: this.state.answerOptions,
                              questionLabel:this.state.label}
                            };

       this.props.setLastAnswer(data2firebase)

       // Here stores the Name in the state in case the question has the COMMENT == 'name'
       if((this.state.label === 'name')){this.props.setName(event.currentTarget.id)}

       // Moves to the next question and increases the counter
       if (this.state.questionId < quizQuestions.length-1) {
           setTimeout(() => this.setNextQuestion(), 0);
       } else {
           setTimeout(() => this.setResults(this.getResults()), 0);
       }
     }

     setUserAnswer(answer) {
       const updatedAnswersCount = update(this.state.answersCount, {
         [answer]: {$apply: (currentValue) => currentValue + 1}
       });

       this.setState({
           answersCount: updatedAnswersCount,
           answer: answer
       });
     }



     getResults(){
        return '';
     }

     setNextQuestion() {
       let counter = this.props.counter.questionId-1;
       let questionId = this.props.counter.questionId-1;
       if(counter<0)counter=0;

       // Name replacement in case existed
       // this.nameCheck(counter);

       // Set the next question values, using the index 'counter'
       this.setState({
           counter: counter,
           questionId: questionId,
           dialog: this.nameCheck(quizQuestions[counter].dialog),
           question: this.nameCheck(quizQuestions[counter].question),
           answerOptions: quizQuestions[counter].answers,
           answerType: quizQuestions[counter].answerType,
           label: quizQuestions[counter].label,
           answer: ''
       });
     }



     setResults(result) {
       this.props.setResetQuestionnaire();
         if (result.length === 1) {
           this.setState({ result: result[0] });
         } else {
           this.setState({ result: 'Undetermined' });
         }
     }


  renderQuiz() {

    return (
      <Questionnaire
        scrollUp={this.props.scrollUp}
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        dialog = {this.state.dialog}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        windowHeigth={this.state.height}
        windowWidth={this.state.width}
        answerType = {this.state.answerType}
        key={this.state.counter}
      />
    );
  }

  renderResult() {

    return (
      <Directory quizResult={this.state.result} />
    );
  }



  render(){
    return(

      <div >
            <ScrollToTop>
                <div  />
                {this.state.result ? this.renderResult() : this.renderQuiz()}
              </ScrollToTop>
        </div>

    )
  }
}



const mapStateToProps = state => ({
  counter: state.counter,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setLastAnswer,
  setName,
  setPath,
  setBackButton,
  setSessionStart,
  setResetQuestionnaire,
  changePage: (text) => push('/' + text)
}, dispatch)



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionHome)
