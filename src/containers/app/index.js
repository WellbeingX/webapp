import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import InputB from '../inputBody';
import { Container, Button, Grid, Header, List, Segment } from 'semantic-ui-react'
import HeaderUs from '../header'
import DebuggingBar from '../debuggingBar'
import QuestionHome from '../questionHome'
import EmailRequest from '../emailRequest'

const App = () => (
  <div style={{marginLeft:0}}>
          <DebuggingBar/>
          <HeaderUs />

          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/information" component={QuestionHome} /> What do I have
            <Route exact path="/solutions" component={QuestionHome} />  Wheere cna I found solutions?
            <Route exact path="/idk" component={QuestionHome} /> I don't know
            <Route exact path="/directory" component={QuestionHome} /> Become Provider
            <Route exact path="/about-us" component={About} /> Contact US
            <Route exact path="/report" component={EmailRequest} /> Contact US
          </main>




  </div>
)
export default App
