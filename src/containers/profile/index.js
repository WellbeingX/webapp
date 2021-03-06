import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Picture from './picture'
import Recommendation from './recommendation'
import PillarTab from './pillarTab'
import RadarChart from './radar'

var arrayAnsers =
[{
  title:'Mindfulness',
  score:'4',
  suggestion:'Meditation is a very important method to keep your mind clear and safe. You mght want to look at difference way of improving your skills.'
},
{
  title:'Sleep',
  score:'2',
  suggestion:'Somewhere between 7 and 9 hours a night are a good guideline to regulate mood and cognitive functions; deep sleep is key to rest and recovery.'
},
{
  title:'Work',
  score:'4',
  suggestion:'Work is where we spent most of our waking time, can be a main culprit of stress, and it often directs how and when we do everything else.'
},
{
  title:'Social',
  score:'6',
  suggestion:'Social connectedness is perhaps the most powerful predictor of life outcomes, and anything you can do here to interact with others can help'
},
{
  title:'Exercise',
  score:'3',
  suggestion:'Regular exercise can help prevent depression, reduce stress, and strengthen the mind just as much as it strengthens the body'
},
{
  title:'Nutrition',
  score:'7',
  suggestion:'Clean food is a good rule, additionally there is tremendous healing, rebalancing and revitalising power in fruits, vegetables and superfoods'
}]

class Profile extends React.Component {


  constructor(props){
    super(props);
    this.state={
      status:'loading...',
      key:19519167226,
      profileStatus:''
    }
    this.dataControl = this.dataControl.bind(this);

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
  render(){
    return(

      <div >
        <div>
          <Picture name={this.state.name} email={this.state.email} age={this.state.age} gender={this.state.gender}/>
        </div>
        <div style={{background:'white', paddingTop:0, marginTop:-1}}>
        <h2 style={{color:'grey', fontSize:'.8rem', paddingTop:10, marginLeft:50}}>Dashboard </h2>

          <RadarChart />
          <Recommendation suggestion='You should do this, this and that...'/>
          <br />
          {arrayAnsers.map(this.renderPillarTab)}
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
  )(Profile)
