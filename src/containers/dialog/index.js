import React from 'react';
import PropTypes from 'prop-types';


  function Dialog(props) {
    return (
      <h2 className="dialog" style={{marginTop:props.windowHeigth/6}}>{props.content}</h2>
    );
  }

  Dialog.propTypes = {
    content: PropTypes.string.isRequired
  };

  export default Dialog;
