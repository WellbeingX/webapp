import React from 'react';
import Question from '../question';
import QuestionCount from '../questionCounter';
import {AnswerButton,AnswerText, AnswerSpinner,AnswerSlider, AnswerFeedback, AnswerMultiple, FeedbackButton} from  '../answer';
import PropTypes from 'prop-types';
import Dialog from "../dialog";
import {Grid,Container} from 'semantic-ui-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Questionnaire extends React.Component {
  constructor(props) {
      super(props);

    }
    componentWillMount() {

    }

  renderAnswerOptions(key) {
      switch(this.props.answerType) {
          case 'Button':
          return (
                    <AnswerButton
                      key={key.key}
                      answerContent={key.text}
                      answerId={key.key}
                      answerType = {this.props.answerType}
                      answer={this.props.answer}
                      questionId={this.props.questionId}
                      onAnswerSelected={this.props.onAnswerSelected}
                    />
                  );

          break;
          case "List":
          return (
                    <AnswerButton
                      key={key.key}
                      answerContent={key.text}
                      answerId={key.key}
                      answerType = {this.props.answerType}
                      answer={this.props.answerOptions}
                      questionId={this.props.questionId}
                      onAnswerSelected={this.props.onAnswerSelected}
                    />
                  );

              break;
          case "TextInput":
            return (
                      <AnswerText
                        key={key.key}
                        answerContent={key.text}
                        answerId={key.key}
                        answerType = {this.props.answerType}
                        answer={this.props.answer}
                        questionId={this.props.questionId}
                        onAnswerSelected={this.props.onAnswerSelected}
                      />
                    );

          break;

          case "Spinner":
            return (
                  <AnswerSpinner
                    answerContent={key}
                    answerId={key.key}
                    answer={this.props.answer}
                    questionId={this.props.questionId}
                    onAnswerSelected={this.props.onAnswerSelected}
                  />
                );

          break;

          case "Feedback":
            return (
                  <AnswerFeedback
                    answerContent={key}
                    answerId={key.key}
                    answerType = {this.props.answerType}
                    answer={this.props.answer}
                    questionId={this.props.questionId}
                    onAnswerSelected={this.props.onAnswerSelected}
                  />
                );

          break;

          case "Slider":
            return (
                  <AnswerSlider
                    min={key.min}
                    max={key.max}
                    answerType = {this.props.answerType}
                    answer={this.props.answer}
                    questionId={this.props.questionId}
                    onAnswerSelected={this.props.onAnswerSelected}
                  />
                );

          break;
          case "Multiple":
            return (
                  <AnswerMultiple
                    answerContent={key}
                    answerType = {this.props.answerType}
                    answer={this.props.answer}
                    questionId={this.props.questionId}
                    onAnswerSelected={this.props.onAnswerSelected}
                  />
                );

          break;
          case "FeedbackButton":
            return (
                  <FeedbackButton
                    answerContent={key}
                    answerType = {this.props.answerType}
                    answer={this.props.answer}
                    questionId={this.props.questionId}
                    onAnswerSelected={this.props.onAnswerSelected}
                  />
                );

          break;
          default:
              console.log("Incorrect Type: " + this.props.answerType);
      }


    }

    renderBetaOrNotGeneral(){
      switch(this.props.answerType) {
        case 'Feedback':
          return(
                  <div className="quiz" style={{color:'white', textAlign:'center', background:'DimGray',  paddingTop:20}}>
                    BETA-TEST QUESTION
                    <Question content={this.props.question} />

                    <ReactCSSTransitionGroup
                     className="container"
                     component="div"
                     transitionName="fade"
                     transitionEnterTimeout={400}
                     transitionLeaveTimeout={200}
                     transitionAppear
                     transitionAppearTimeout={500}
                    >
                      <Container centered className="answerOptions">
                        {this.props.answerOptions.map(this.renderAnswerOptions, this)}
                      </Container>
                    </ReactCSSTransitionGroup>
                  </div>
                );

          break;
          case 'FeedbackButton':
            return(
                    <div className="quiz" style={{color:'white', textAlign:'center', background:'DimGray', paddingTop:20}}>
                      BETA-TEST QUESTION
                      <Question content={this.props.question} />

                      <ReactCSSTransitionGroup
                       className="container"
                       component="div"
                       transitionName="fade"
                       transitionEnterTimeout={400}
                       transitionLeaveTimeout={200}
                       transitionAppear
                       transitionAppearTimeout={500}
                      >
                        <Container centered className="answerOptions">
                          {this.props.answerOptions.map(this.renderAnswerOptions, this)}
                        </Container>
                      </ReactCSSTransitionGroup>
                    </div>
                  );

            break;

          default:
            return(
                    <div className="quiz">
                      <Dialog
                        windowHeigth = {this.props.windowHeigth}
                        windowWidth = {this.props.windowWidth}
                        content = {this.props.dialog}
                      />
                      <QuestionCount
                        counter={this.props.questionId}
                        total={this.props.questionTotal}
                      />
                      <Question content={this.props.question} />

                      <ReactCSSTransitionGroup
                       className="container"
                       component="div"
                       transitionName="fade"
                       transitionEnterTimeout={400}
                       transitionLeaveTimeout={200}
                       transitionAppear
                       transitionAppearTimeout={500}
                      >
                        <Container centered className="answerOptions">
                          {this.props.answerOptions.map(this.renderAnswerOptions, this)}
                        </Container>
                      </ReactCSSTransitionGroup>
                    </div>
                  );

            break;

        }
      }
      render(){
         return (
           <div>
            {this.renderBetaOrNotGeneral()}
          </div>
         )};

 }



 Questionnaire.propTypes = {
   answer: PropTypes.string.isRequired,
   answerOptions: PropTypes.array.isRequired,
   // counter: PropTypes.number.isRequired,
   question: PropTypes.string.isRequired,
   questionId: PropTypes.number.isRequired,
   questionTotal: PropTypes.number.isRequired,
   onAnswerSelected: PropTypes.func.isRequired
 };

 export default Questionnaire;
