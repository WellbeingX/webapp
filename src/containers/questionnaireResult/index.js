import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Recommendation from '../profile/recommendation'
import PillarTab from '../profile/pillarTab'
import { Link } from 'react-router-dom'

var arrayAnswers =
[{
  title:'Mindfulness',
  score:'?',
  suggestion:'Meditation is a very important method to keep your mind clear and safe. You mght want to look at difference way of improving your skills.'
},
{
  title:'Sleep',
  score:'?',
  suggestion:'Somewhere between 7 and 9 hours a night are a good guideline to regulate mood and cognitive functions; deep sleep is key to rest and recovery.'
},
{
  title:'Work',
  score:'?',
  suggestion:'Work is where we spent most of our waking time, can be a main culprit of stress, and it often directs how and when we do everything else.'
},
{
  title:'Social',
  score:'?',
  suggestion:'Social connectedness is perhaps the most powerful predictor of life outcomes, and anything you can do here to interact with others can help'
},
{
  title:'Exercise',
  score:'?',
  suggestion:'Regular exercise can help prevent depression, reduce stress, and strengthen the mind just as much as it strengthens the body'
},
{
  title:'Nutrition',
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
    this.dataControl = this.dataControl.bind(this);

  }
  componentWillMount(){
    // Values update from the updatedAnswersCount
    for(let i=0; i<arrayAnswers.length; i++){
      if(typeof this.props.scores !== 'undefined')
      {
        arrayAnswers[i].score = this.props.scores[i];
      }
      else
      {
        arrayAnswers[i].score = i;
      }
    }
    this.setState({values:arrayAnswers})
    console.log(this.state.values);

  }

  componentDidMount(){
    //Retrieve the data from the database, given the key in the store, now 19519167226
    fetch('https://website-973e0.firebaseio.com/messages/' + this.state.key + '/latest.json',this).then(response=>{
      JSON.stringify(response, null, 2);
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    }).then(data=>{
        this.setState({ status:'done',
                        name:data.name.entry.answerId,
                        email:data.email.entry.answerId,
                        age:data.age.entry.answerId,
                        gender:data.gender.entry.answer[data.gender.entry.answerId].text,
                      });
        this.dataControl(data);
      }).catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        });
    // this.setState({data:retrievedData});


  }

  dataControl(data){
    //Control that the profile has any information, in case it has not it should suggest to login or take the questionnaire
    console.log('Data Control');
    console.log(data);
    if(data.length<10)this.setState({profileStatus:'incomplete'});
    else {
      this.setState({profileStatus:'complete'});
      }
    }

    renderPillarTab(val){
      return(<PillarTab title={val.title} score={val.score} suggestion={val.suggestion}/>)
    }
    toDirectoryHandler(){
      console.log("click!");
    }
  render(){
    return(

      <div >
        <Link to='/directory'>
          <div style={{position:'fixed', top:20, right:20, color:'white', zIndex:10, width:100,  borderRadius:20, borderWidth:1, fontSize:'.6rem', background:'orange', textAlign:'center', padding:5, cursor:'pointer'}} onClick={this.toDirectoryHandler}>
            What to do >
          </div>
        </Link>

        <div style={{background:'white', paddingTop:80, marginTop:-1}}>

          {this.state.values.map(this.renderPillarTab)}
          <Recommendation />

          <div style={{
            position:'relative',
            borderRadius:20,
            borderWidth:1,
            fontSize:'.6rem',
            background:'white',
            margin:'auto',
            width:120,
            textAlign:'center',
            padding:5,
            cursor:'pointer',
            borderColor:'#70CACC',
            color:'#70CACC',
            borderStyle:'solid',
            marginTop:20,
            marginBottom:20 }} onClick={this.toDirectoryHandler}>
            Create a profile
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

  }, dispatch)

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(QuestionnaireResult)
