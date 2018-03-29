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
       answersCount: {
         nintendo: 0,
         microsoft: 0,
         sony: 0
       },
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
      this.props.setPath(this.props.location.pathname)

      // Select the cases INFORMATION | SOLUTION | IDK
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);

      // Qui il PAth
      console.log('[questionHome] componentWillMount: Qui il path:');
      console.log(this.props.location.pathname);
      ReactGA.pageview(this.props.location.pathname);


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
        case "/information#":
        this.setState({

              counter : 2

        });
        break;
        case "/beta":
        this.setState({

            counter : 4

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

       this.setUserAnswer(event.currentTarget.value);

       // HERE IT PUTS THE ANSWER IN THE STORE
       this.props.setLastAnswer([this.state.questionId,event.currentTarget.id])

       // NAME CHECK
       if((this.state.comments === 'name')){
         this.props.setName(event.currentTarget.id)}

       if (this.state.questionId < quizQuestions.length) {
           setTimeout(() => this.setNextQuestion(), 300);
       } else {
           setTimeout(() => this.setResults(this.getResults()), 300);
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
              <div className="App-header">

              </div>


                {this.state.result ? this.renderResult() : this.renderQuiz()}

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
