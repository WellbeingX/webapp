import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import InputB from '../inputBody';
import { Container, Button, Grid, Header, List, Segment } from 'semantic-ui-react'
import HeaderUs from '../header'
import DebuggingBar from '../debuggingBar'
import QuestionHome from '../questionHome'
import Directory from '../directory'
import EmailRequest from '../emailRequest'
import FooterHome from '../footerHome'
import FooterInfo from '../footerInfo'


const App = () => (
  <div >

    <div style={{backgroundImage: 'linear-gradient(-20deg, #96D0A7, #249ECD)'}}>
    <HeaderUs/>

      <div className="body">
            <main>
              <Route exact path="/" component={Home} />
              <Route exact path="/information/recover" component={QuestionHome} />
              <Route exact path="/information/improve" component={QuestionHome} />
              <Route exact path="/information/beta/recover" component={QuestionHome} />
              <Route exact path="/information/beta/improve" component={QuestionHome} />
              <Route exact path="/directory" component={Directory}  />
              <Route exact path="/idk" component={QuestionHome} />
              <Route exact path="/about-us" component={About} />
              <Route exact path="/report" component={EmailRequest} />
            </main>



        </div>

      </div>
      <main>
        <Route exact path="/" component={FooterHome} />
        <Route exact path="/information" component={FooterInfo} />
      </main>
  </div>
)
export default App
