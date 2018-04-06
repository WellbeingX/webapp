import React from 'react';
import { Route, withRouter } from 'react-router-dom'



class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
      document.querySelector('body').scrollTop = 0;      
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
