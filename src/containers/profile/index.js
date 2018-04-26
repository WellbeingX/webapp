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
  score:6,
  suggestion:'suga...'
},
{
  title:'Sleep',
  score:'?',
  suggestion:'dormi...'
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
