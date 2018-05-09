import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Recommendation from './recommendation'
import PillarTab from './pillarTab'
import { Link } from 'react-router-dom'
import {SLEEP, EXERCISE, DIET, SOCIAL, PURPOSE, STRESS,
TITLE_SLEEP, TITLE_EXERCISE, TITLE_DIET, TITLE_SOCIAL, TITLE_PURPOSE, TITLE_STRESS} from '../../api/labels'
import {setResults} from '../../actions/questionnaireActions'


var arrayAnswers =
[{
  key:0,
  label:STRESS,
  title:TITLE_STRESS,
  score:'?',
  suggestion:'Meditation is a very important method to keep your mind clear and safe. You mght want to look at difference way of improving your skills.'
},
{
  key:1,
  label:SLEEP,
  title:TITLE_SLEEP,
  score:'?',
  suggestion:'Somewhere between 7 and 9 hours a night are a good guideline to regulate mood and cognitive functions; deep sleep is key to rest and recovery.'
},
{
  key:2,
  label:PURPOSE,
  title:TITLE_PURPOSE,
  score:'?',
  suggestion:'Work is where we spent most of our waking time, can be a main culprit of stress, and it often directs how and when we do everything else.'
},
{
  key:3,
  label:SOCIAL,
  title:TITLE_SOCIAL,
  score:'?',
  suggestion:'Social connectedness is perhaps the most powerful predictor of life outcomes, and anything you can do here to interact with others can help'
},
{
  key:4,
  label:EXERCISE,
  title:TITLE_EXERCISE,
  score:'?',
  suggestion:'Regular exercise can help prevent depression, reduce stress, and strengthen the mind just as much as it strengthens the body'
},
{
  key:5,
  label:DIET,
  title:TITLE_DIET,
  score:'?',
  suggestion:'Clean food is a good rule, additionally there is tremendous healing, rebalancing and revitalising power in fruits, vegetables and superfoods'
}]

class QuestionnaireResult extends React.Component {


  constructor(props){
    super(props);
    this.state={
      status:'loading...',
      key:19519167226,
      profileStatus:'',
      values:arrayAnswers
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

  }

  componentWillMount(){
    // Listener to the screen size
    window.addEventListener('resize', this.updateWindowDimensions);
    this.updateWindowDimensions();


    // Values update from the updatedAnswersCount
    let i;
    let scores = this.props.scores;
    console.log('Qui gli store');
    console.log(scores);
    if (typeof scores !== 'undefined'){
      for(i in arrayAnswers){
        switch (arrayAnswers[i].label){
          case SLEEP:
          console.log('SLEEP');
          console.log(scores);
              arrayAnswers[i].score =  scores.filter((val) => val[0]===SLEEP)[0][1]
          break;
          case DIET:
              arrayAnswers[i].score =  scores.filter((val) => val[0]===DIET)[0][1]
          break;
          case EXERCISE:
              arrayAnswers[i].score =  scores.filter((val) => val[0]===EXERCISE)[0][1]
          break;
          case STRESS:
              arrayAnswers[i].score =  scores.filter((val) => val[0]===STRESS)[0][1]
          break;
          case SOCIAL:
              arrayAnswers[i].score =  scores.filter((val) => val[0]===SOCIAL)[0][1]
          break;
          case PURPOSE:
              arrayAnswers[i].score =  scores.filter((val) => val[0]===PURPOSE)[0][1]
          break;
          default:

          break;

          }
        }
    }
    arrayAnswers.sort((a,b)=>a.score-b.score);
    console.log('vediamo tutti i props');
    console.log(this.props.counter);
    console.log(arrayAnswers);
    this.props.setResults(arrayAnswers)
    this.setState({values:arrayAnswers})

  }

  componentDidMount(){


  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight});
  }



    renderPillarTab(val){
      console.log(val);
      console.log('PRIMA');
      return(<PillarTab label={val.label} title={val.title} score={val.score} suggestion={val.suggestion} width={this.state.width} key={val.key} id={val.key}/>)
    }
    toDirectoryHandler(){
      console.log("click!");
    }


  render(){
    return(

      <div style={{height:'100%'}}>

        <div style={{marginTop:-1}}>
        <div style={{paddingBottom:50, zIndex:1, background:'linear-gradient(-20deg, #96D0A7, #249ECD)'}} >
          <Recommendation suggestion='Based on what you’ve told me, here’s your wellbeing summary'/>
        </div>
        <div style={{width:'100%', background:'rgba(255,255,255,1)'}}>
              <div style={{display:'inline-block', paddingBottom:0, width:'100%', marginTop:-60}}>
                {this.state.values.map(this.renderPillarTab, this)}
                <Link to='/Directory'>
                  <div className='boxShadow' style={{
                    position:'relative',
                    borderRadius:20,
                    borderWidth:1,
                    fontSize:'1rem',
                    background:'#70CACC',
                    margin:'auto',
                    width:200,
                    textAlign:'center',
                    padding:5,
                    cursor:'pointer',
                    borderColor:'#70CACC',
                    color:'white',
                    borderStyle:'solid',
                    marginTop:20,
                    marginBottom:40 }} onClick={this.toDirectoryHandler}>
                    continue
                  </div>
                </Link>
          </div>
          <br />
          <br />
        </div>



      </div>

    </div>

    )
  };
}

  const mapStateToProps = state => ({
    counter: state.counter,
  })

  const mapDispatchToProps = dispatch => bindActionCreators({
    setResults
  }, dispatch)

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(QuestionnaireResult)


  // <Link to='/directory'>
  //   <div style={{position:'absolute', top:20, right:20, color:'white', zIndex:10, width:150,  borderRadius:20, borderWidth:1, fontSize:'.6rem', background:'orange', textAlign:'center', padding:5, cursor:'pointer'}} onClick={this.toDirectoryHandler}>
  //     Save your profile
  //   </div>
  // </Link>
