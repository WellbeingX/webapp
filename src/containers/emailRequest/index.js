import React from 'react';
import { Icon, Input, Button } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {setEmail, setLastAnswer} from "../../actions/questionnaireActions"
import { push } from 'react-router-redux'

class EmailRequest extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name:"",
      email:"",
      printNext:false
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.inputContinue = this.inputContinue.bind(this);

  }
  handleEmailChange(event, data){
    const target = event.target;
    // SET NAME IN THE STATE STORE
    let email = data.value;
    if(email!="" && email.includes("@") && email.slice(email.indexOf("@"),email.length).includes(".")){
      this.setState({
        email: email,

      });
    }
      this.inputContinue();
  }

  handleNameChange(event, data){
    const target = event.target;
    if(data.value!=""){
      this.setState({
        name: data.value,
      });
        // SET EMAIL IN THE STATE STORE
      }
        this. inputContinue();
    }

  inputContinue(){
    if(this.state.name!="" && this.state.email!=""){
      this.setState({
        printNext: true,
      });
    }
  }

  // THE ACTION DOES NOT REALLY GO TO THE REDUCER - PORCOCCIOOO

  onNextClicked(event,data){
    console.log("Button Clicked");
    data.propsUp.setEmail(data.email);
    data.propsUp.changePage("about-us")
    // this.props.setEmail(this.state.email)
  }

  onSecondButtonClicked(event,data){
    console.log(data.propsUp);
  }


  render(){
    return(
      <div>
          <Input iconPosition='left' placeholder='Name' onChange={this.handleNameChange}>
            <input  />
           </Input>

          <Input iconPosition='left' placeholder='Email' onChange={this.handleEmailChange}>
             <Icon name='at' />
             <input />
           </Input>

           {this.state.printNext ? <Button primary propsUp={this.props} email={this.state.email}  onClick={this.onNextClicked}> Next </Button>: <div>Not Next</div>}
           <Button secondary propsUp={this.props} onClick={this.onSecondButtonClicked}>Props</Button>
       </div>
      )
  }
}


const mapStateToProps = state => ({
  counter: state.counter,
  email: state.email
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setEmail,
  changePage: (text) => push('/' + text)
}, dispatch)




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailRequest)
