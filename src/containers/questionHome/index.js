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
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../reducers/counter'
import {setLastAnswer, setName, setPath} from '../../actions/questionnaireActions'
import ReactGA from 'react-ga';
import ScrollToTop from '../scrollToTops'


var nameQuestion=2;
var quizQuestions =[];

class QuestionHome extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
       counter: 0,
       questionId: 1,
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
       comments:''
      };
      this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }



    componentWillMount() {
      // The current path is stored in the STORE in order to inform every component in which path we are (to be moved to the ROUTER component)
      this.props.setPath(this.props.location.pathname)
      window.scrollTo(0, 0);
      // Listener to the screen size
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);

      // Here the PATH is sent to the Google Analytics
      console.log('[questionHome] componentWillMount: Qui il path:');
      console.log(this.props.location.pathname);
      ReactGA.pageview(this.props.location.pathname);


      // Depending on the path the user is sent to a different journey, that means different questions

      switch(this.props.location.pathname){
        case "/information/beta/recover":
        quizQuestions = questionBetaRecover;
        this.setState({
          dialog: quizQuestions[0].dialog,
          question: quizQuestions[0].question,
          answerOptions: quizQuestions[0].answers,
          answerType:quizQuestions[0].answerType,
          comments: quizQuestions[0].comments

        });
        break;
        case "/information/beta/improve":
        quizQuestions = questionBetaImprove;
        this.setState({
          dialog: quizQuestions[0].dialog,
          question: quizQuestions[0].question,
          answerOptions: quizQuestions[0].answers,
          answerType:quizQuestions[0].answerType,
          comments: quizQuestions[0].comments

        });
        break;
        case "/information/recover":
        quizQuestions = questionRecover;
        nameQuestion=1;
        this.setState({
          dialog: quizQuestions[0].dialog,
          question: quizQuestions[0].question,
          answerOptions: quizQuestions[0].answers,
          answerType:quizQuestions[0].answerType,
          comments: quizQuestions[0].comments

        });
        break;
        case "/information/improve":
        quizQuestions = questionImprove;
        nameQuestion=1;
        this.setState({
          dialog: quizQuestions[0].dialog,
          question: quizQuestions[0].question,
          answerOptions: quizQuestions[0].answers,
          answerType:quizQuestions[0].answerType,
          comments: quizQuestions[0].comments
        });
        break;
        default:
          console.log('Beccato info');
          this.setState({
              counter : 0

          });
        }
     }

     componentWillUnmount() {
       window.removeEventListener('resize', this.updateWindowDimensions);
     }

     updateWindowDimensions() {
       this.setState({ width: window.innerWidth, height: window.innerHeight});
     }

     componentDidUpdate() {
     }

     handleAnswerSelected(event) {
       console.log('AnswerSelected is:');
       console.log(event.currentTarget.id
       );

       // HERE IT PUTS THE ANSWER IN THE STORE
       this.props.setLastAnswer([this.state.questionId,event.currentTarget.id])

       // Here stores the Name in the state in case the question has the comment 'name'
       if((this.state.comments === 'name')){
         this.props.setName(event.currentTarget.id)}

       if (this.state.questionId < quizQuestions.length) {
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

     nameCheck(counter){
       console.log("controllo nome");
       quizQuestions[counter].dialog = quizQuestions[counter].dialog.replace("/name",this.props.counter.name);
       quizQuestions[counter].question = quizQuestions[counter].question.replace("/name",this.props.counter.name);
     }


     setNextQuestion() {
       const counter = this.state.counter + 1;
       const questionId = this.state.questionId + 1;
       increment;
       console.log("Incrementando");
       console.log(this.props);
       console.log(this.state);
       this.props.increment();
       // Name replacement in case was submitted
       this.nameCheck(counter);

       this.setState({
           counter: counter,
           questionId: questionId,
           dialog: quizQuestions[counter].dialog,
           question: quizQuestions[counter].question,
           answerOptions: quizQuestions[counter].answers,
           answerType: quizQuestions[counter].answerType,
           comments: quizQuestions[counter].comments,
           answer: ''
       });
     }


     getResults() {
       return 'Ciao Mamma';
     }

     setResults(result) {
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

      <div className="questionHome" >
            <ScrollToTop>
                <div className="App-header" />
                {this.state.result ? this.renderResult() : this.renderQuiz()}
              </ScrollToTop>
        </div>

    )
  }
}

// {this.state.counter==13 ? this.props.changePage("report") : console.log('No Cambia pagina!') }


const mapStateToProps = state => ({
  counter: state.counter,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setLastAnswer,
  setName,
  increment,
  setPath,
  changePage: (text) => push('/' + text)
}, dispatch)



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionHome)
