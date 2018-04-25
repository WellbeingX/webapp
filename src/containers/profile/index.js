import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
  render(){
    return(

      <div >
        {this.state.status}<br /><br />
        {this.state.name}<br />
        {this.state.email}<br />
        {this.state.age}<br />
        {this.state.gender}<br />
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
