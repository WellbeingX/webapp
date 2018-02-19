import React from 'react';
import quizQuestions from '../api/questQuestionnaire';
import update from 'react-addons-update';
import Questionnaire from '../questionnaire';
import Result from '../result';
import { Route, Link } from 'react-router-dom'
import About from '../about'


class QuestionHome extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
       counter: 0,
       questionId: 1,
       question: '',
       answerOptions: [],
       answer: '',
       answersCount: {
         nintendo: 0,
         microsoft: 0,
         sony: 0
       },
       result: ''
      };
      this.handleAnswerSelected = this.handleAnswerSelected.bind(this);

    }

    componentWillMount() {
      console.log('Qui il path:');
      console.log(this.props.location.pathname);
      // Select the cases INFORMATION | SOLUTION | IDK
      switch(this.props.location.pathname){
        case "/information":
        this.setState({
          question: quizQuestions[0].question,
          answerOptions: quizQuestions[0].answers
        });
        break;
        case "/solutions":
        this.setState({
          question: quizQuestions[2].question,
          answerOptions: quizQuestions[2].answers
        });
        break;
        case "/idk":
        this.setState({
          question: quizQuestions[4].question,
          answerOptions: quizQuestions[4].answers
        });
        break;
        default:
          console.log('Beccato info');
          this.setState({
            question: quizQuestions[0].question,
            answerOptions: quizQuestions[0].answers
          });
        }


     }

     handleAnswerSelected(event) {
       this.setUserAnswer(event.currentTarget.value);

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

     setNextQuestion() {
       const counter = this.state.counter + 1;
       const questionId = this.state.questionId + 1;

       this.setState({
           counter: counter,
           questionId: questionId,
           question: quizQuestions[counter].question,
           answerOptions: quizQuestions[counter].answers,
           answer: ''
       });
     }

     getResults() {
       const answersCount = this.state.answersCount;
       const answersCountKeys = Object.keys(answersCount);
       const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
       const maxAnswerCount = Math.max.apply(null, answersCountValues);

       return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
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
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
}

  render(){
    return(

      <div className="App">
              <div className="App-header">
                <h2>React Quiz</h2>
                <Link to="/about-us">About </Link>

              </div>
               {console.log(this.state.counter)}
               {this.state.counter==3 ? console.log('Cambia pagina!') : console.log('NO cambia pagina!')}
                 {this.state.result ? this.renderResult() : this.renderQuiz()}
        </div>

    )
  }
}

export default QuestionHome;
