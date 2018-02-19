import React from 'react';
import Question from '../question';
import QuestionCount from '../questionCounter';
import AnswerOption from  '../answer';
import PropTypes from 'prop-types';


function Questionnaire(props) {

  function renderAnswerOptions(key) {
      return (
        <AnswerOption
          key={key.content}
          answerContent={key.content}
          answerType={key.type}
          answer={props.answer}
          questionId={props.questionId}
          onAnswerSelected={props.onAnswerSelected}
        />
      );
    }

   return (
      <div className="quiz">
        <QuestionCount
          counter={props.questionId}
          total={props.questionTotal}
        />
        <Question content={props.question} />
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
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
