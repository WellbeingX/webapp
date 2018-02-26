import React from 'react';
import PropTypes from 'prop-types';

  function Result(props) {
    return (
      <div className="result">
        You will receive now a set of reccomendations directly to your email box.
      </div>
    );
  }

  Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
  };

  export default Result;
