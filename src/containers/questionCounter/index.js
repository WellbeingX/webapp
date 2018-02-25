import React from 'react';
import PropTypes from 'prop-types';

  function QuestionCount(props) {
    const questionStart = 2;
    function renderCounter () {
      if(props.counter>questionStart){
        return(
              <div>
                Question <span>{props.counter-questionStart}</span> of <span>{props.total-questionStart}</span>
              </div>
            )
      }

    }

    return (

      <div className="questionCount">
      {renderCounter()}

      </div>
    );
  }

  QuestionCount.propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  };

  export default QuestionCount;
