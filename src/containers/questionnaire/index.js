import React from 'react';
import Question from '../question';
import QuestionCount from '../questionCounter';
import {AnswerButton,AnswerText, AnswerSpinner,AnswerSlider} from  '../answer';
import PropTypes from 'prop-types';
import Dialog from "../dialog";
import {Grid,Container} from 'semantic-ui-react';

function Questionnaire(props) {

  function renderAnswerOptions(key) {
      console.log("Render answers");
      console.log(props.answerType);

      switch(props.answerType) {
          case 'Button':
          return (
                    <AnswerButton
                      key={key.content}
                      answerContent={key.content}
                      answerId={key.type}
                      answerType = {props.answerType}
                      answer={props.answer}
                      questionId={props.questionId}
                      onAnswerSelected={props.onAnswerSelected}
                    />
                  );

              break;
              case "List":
              return (
                        <AnswerButton
                          key={key.content}
                          answerContent={key.content}
                          answerId={key.type}
                          answerType = {props.answerType}
                          answer={props.answer}
                          questionId={props.questionId}
                          onAnswerSelected={props.onAnswerSelected}
                        />
                      );

                  break;
                  case "TextInput":
                  return (
                            <AnswerText
                              key={key.content}
                              answerContent={key.content}
                              answerId={key.type}
                              answerType = {props.answerType}
                              answer={props.answer}
                              questionId={props.questionId}
                              onAnswerSelected={props.onAnswerSelected}
                            />
                          );

                      break;

                      case "Spinner":
                      return (
                            <AnswerSpinner
                              answerContent={key}
                              answerId={key.type}
                              answerType = {props.answerType}
                              answer={props.answer}
                              questionId={props.questionId}
                              onAnswerSelected={props.onAnswerSelected}
                            />
                          );

                      break;

                      case "Slider":
                      return (
                            <AnswerSlider
                              min={key.min}
                              max={key.max}
                              answerType = {props.answerType}
                              answer={props.answer}
                              questionId={props.questionId}
                              onAnswerSelected={props.onAnswerSelected}
                            />
                          );

                      break;
          default:
              console.log("Incorrect Type: " + props.answerType);
      }


    }

   return (
      <div className="quiz">
        <Dialog
          windowHeigth = {props.windowHeigth}
          windowWidth = {props.windowWidth}
          content = {props.dialog}
          />
          <QuestionCount
            counter={props.questionId}
            total={props.questionTotal}
          />

          <Question content={props.question} />
          <Container centered className="answerOptions">
            {console.log("Qui le answer options")}
            {console.log(props.answerOptions)}
            {props.answerOptions.map(renderAnswerOptions)}
          </Container>
      </div>
   );
 }



 Questionnaire.propTypes = {
   answer: PropTypes.string.isRequired,
   answerOptions: PropTypes.array.isRequired,
   counter: PropTypes.number.isRequired,
   question: PropTypes.string.isRequired,
   questionId: PropTypes.number.isRequired,
   questionTotal: PropTypes.number.isRequired,
   onAnswerSelected: PropTypes.func.isRequired
 };

 export default Questionnaire;
