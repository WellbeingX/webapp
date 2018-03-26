import React from 'react';
import HomeDesktop from '../landingDesktop'
import HomeMobile from '../landingMobile'
import ReactGA from 'react-ga'


ReactGA.initialize('UA-114742931-1');


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    ReactGA.pageview('/');
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
    console.log(window.innerHeight);
  }

  render() {
    return(
  <div >

    {this.state.width>768 ? <HomeDesktop /> : <HomeMobile />}
  </div>
)};
}

export default App
// <DebuggingBar/>
