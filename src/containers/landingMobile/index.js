import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../home'
import HeaderUs from '../header'
import HeaderWhite from '../headerWhite'
import QuestionHome from '../questionHome'
import QuestionnaireResult from '../questionnaireResult'
import Directory from '../directory'
import FooterHome from '../footerHome'
import DirectorySelector from '../directorySelector'
import FooterInfo from '../footerInfo'
import ScrollToTop from '../scrollToTops'
import Profile from '../profile'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {setBackButton, setResetQuestionnaire} from '../../actions/questionnaireActions'


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
            <Route path="/result" component={HeaderUs} />
          </main>

            <div className="body">
                  <main>
                      <ScrollToTop>
                        <Switch>
                          <Route exact path="/" component={Home} />
                          <Route  path="/information/improve" render={()=><QuestionHome location={{pathname:'/information/improve'}} /> }  />
                          <Route  path="/information/depression" component={QuestionHome} />
                          <Route  path="/information/anxiety" component={QuestionHome} />
                          <Route exact path="/information/beta/depression" component={QuestionHome} />
                          <Route exact path="/information/beta/anxiety" component={QuestionHome} />
                          <Route exact path="/information/beta/improve" component={QuestionHome} />
                          <Route exact path="/directory" component={Directory}  />
                          <Route exact path="/profile" component={Profile}  />
                          <Route exact path="/result" component={QuestionnaireResult}  />
                          <Route exact path="/directorySelector" component={DirectorySelector}  />
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
            <div style={{position:'fixed', height:30, width:'100%', fontSize:'.6rem', zIndex:999, background:'white', color:'grey', textAlign:'center', bottom:0}}> This website is in beta </div>
        </div>
      )
    }

}

const mapStateToProps = state => ({
  counter:state
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setBackButton,
  changePage: (textInput) => push('/' + textInput)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
