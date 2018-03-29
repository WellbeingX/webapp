import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Input, Menu, Dropdown, Select, TextArea} from 'semantic-ui-react';
import Slider, { Range } from 'rc-slider';



export  function AnswerButton(props) {

    return (

        <input
          type="button"
          className="customButton"
          name="radioGroup"
          value={props.answerContent}
          checked={props.answerType === props.answer}
          id={props.answerId}
          disabled={props.answer}
          onChange={props.onAnswerSelected}
          onClick={props.onAnswerSelected}
        />


    );
  }

  AnswerButton.propTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };

export class AnswerText extends React.Component {
    constructor(props){
      super();
      this.state={
        name:'Sir/Madame'
      }
      this.handleName = this.handleName.bind(this);
    }

    handleName(event, data){
      this.setState({
        name: data.value
      });
    }



    render(){
      return (
        <div>
        {console.log("AnswerText PROPS")}
          {console.log(this.props)}
          <Input onChange ={this.handleName} flex  style={{fontSize:'.8rem', paddingBottom:20}} focus placeholder={this.props.answerContent}/>
          <input
            type="button"
            className="customButton"
            name="radioGroup"
            value="Next"
            checked={this.props.answerType === this.props.answer}
            id={this.state.name}
            disabled={this.props.answer}
            onChange={this.props.onAnswerSelected}
            onClick={this.props.onAnswerSelected}
          />

          <a onClick={this.props.onAnswerSelected} id={this.state.name} style={{fontSize:'.8rem', padding:'20px 0', textDecoration:'underline',cursor:'pointer', color:'white'}}>skip</a>

          </div>
      );
    }
}


export class AnswerSpinner extends React.Component {
      constructor(props){
        super();
        this.state={
          value:'Select...'
        }
        this.renderSpinner = this.renderSpinner.bind(this);
}

     renderSpinner(event,data){
       console.log(data.value);
        this.setState({
          value:data.value
        }

      );
    }

    render(){
    return (
      <div>

        <Dropdown style={{ color:'black', borderRadius:50, fontSize:'.8rem', background:'white', padding:15}} placeholder='Select...' onChange={this.renderSpinner} fluid selection options={this.props.answerContent.spinner} />
        <input
          type="button"
          className="customButton"
          name="radioGroup"
          value="Next"
          id={this.state.value}
          disabled={this.props.answer}
          onClick={this.props.onAnswerSelected}
        />
      </div>
    );}
  }
  // <Menu style={{borderRadius:50}}>
  //   {props.answerContent.spinner.map(renderSpinner)}
  //   </Menu>



export class AnswerSlider extends React.Component {
        constructor(props){
          super();
          this.state={
            value:Math.round(props.max/2)
          }
          this.handleValue = this.handleValue.bind(this);
        }


        handleValue(event){
          this.setState({
            value:event.target.value
          });
        }


        render(){
            return (
              <div>
                <Grid.Row>
                  {this.state.value}
                </Grid.Row>
                {this.props.min}
                  <input
                   className="inputRange"
                   type="range"
                   min={this.props.min}
                   max={this.props.max}
                   onChange={this.handleValue}
                   onClick={this.handleValue}
                   />
                   {this.props.max}


                    <input
                      type="button"
                      className="customButton"
                      name="radioGroup"
                      value="Next"
                      id={this.state.value}
                      disabled={this.props.answer}
                      onClick={this.props.onAnswerSelected}
                    />
                </div>

            );}
    }






export class AnswerFeedback extends React.Component {
    constructor(props){
      super();
      this.state={
        name:'Sir/Madame',
        value:3
      }
      this.handleValue = this.handleValue.bind(this);
      this.handleName = this.handleName.bind(this);
    }

    handleName(event, data){
      console.log('handleName');
      console.log(data);
      console.log(data.value);
      this.setState({
        name: data.value
      });
    }

    handleValue(event){
      this.setState({
        value:event.target.value
      });
    }

    render(){
      return (
        <div >



          <TextArea onChange ={this.handleName} flex  style={{fontSize:'.8rem', paddingBottom:20, width:300, height: 100, marginBottom:50, borderStyle:'none', marginTop:-25 }} focus placeholder='Comment'/>
          <br />
          <div style={{textAlign:'left', padding: '0rem 1.5rem 0rem 1.5rem', lineHeight:'1rem' }}>
            <span style={{fontSize: '.8rem', textAlign:'left', fontSize:'.8rem', fontWeight: 700}}>
            How clear was/were the last page/pages?
            </span>
          </div>
          <Grid.Row style={{marginTop:10}}>
          <span style={{fontSize: '.5rem'}}>
            {this.state.value}
            </span>

          </Grid.Row>

            <input
             className="inputRange"
             type="range"
             min={0}
             max={5}
             onChange={this.handleValue}
             onClick={this.handleValue}
             />

             <br />
             <div style={{position:'relative'}}>
             <span style={{fontSize:'.5rem', position:'absolute', left:10, marginTop:-50 }} >
             Not clear
             </span>
             <span style={{fontSize:'.5rem', textAlign:'rigth', position:'absolute', right:10, marginTop:-50 }}>
             Very clear
             </span>
             </div>
          <input
            type="button"
            className="customButton"
            name="radioGroup"
            value="Send"
            checked={this.props.answerType === this.props.answer}
            id={this.state.name + ', clarity:' + this.state.value}
            disabled={this.props.answer}
            onChange={this.props.onAnswerSelected}
            onClick={this.props.onAnswerSelected}
            style={{marginTop:50}}
          />

          <a onClick={this.props.onAnswerSelected} id={this.state.name} style={{fontSize:'.8rem', padding:'20px 0', textDecoration:'underline',cursor:'pointer', color:'white'}}>skip</a>

          </div>
      );
    }
}



export class AnswerMultiple extends React.Component {
    constructor(props){
      super();
      this.state={
        value:3
      }
      this.handleValue = this.handleValue.bind(this);
    }



    handleValue(event){
      console.log(event);
    }

    render(){
      return (
        <div >

          {this.props.answerContent.map(this.handleValue)}




          </div>
      );
    }
}
