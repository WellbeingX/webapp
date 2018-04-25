import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../home'
import HeaderUs from '../header'
import HeaderWhite from '../headerWhite'
import QuestionHome from '../questionHome'
import Directory from '../directory'
import FooterHome from '../footerHome'
import FooterInfo from '../footerInfo'
import ScrollToTop from '../scrollToTops'
import Profile from '../profile'



  class App extends React.Component {

    render(){
      return(
        <div >

          <div style={{backgroundImage: 'linear-gradient(-20deg, #96D0A7, #249ECD)'}}>
          <main>
            <Route exact path="/" component={HeaderUs} />
            <Route exact path="/directory" component={HeaderUs} />
            <Route exact path="/profile" component={HeaderUs}  />
            <Route path="/information/" component={HeaderWhite} />
          </main>

            <div className="body">
                  <main>
                      <ScrollToTop>
                        <Switch>
                          <Route exact path="/" component={Home} />
                          <Route exact path="/information/recover" render={()=><QuestionHome location={{pathname:'/information/recover'}} /> }  />
                          <Route exact path="/information/improve" component={QuestionHome} />
                          <Route exact path="/information/beta/recover" component={QuestionHome} />
                          <Route exact path="/information/beta/improve" component={QuestionHome} />
                          <Route exact path="/directory" component={Directory}  />
                          <Route exact path="/profile" component={Profile}  />
                          <Redirect to="/" />
                        </Switch>
                      </ScrollToTop>
                  </main>



              </div>

            </div>
            <main>
              <Route exact path="/" component={FooterHome} />
              <Route exact path="/information" component={FooterInfo} />
            </main>
        </div>
      )
    }

}
export default App
