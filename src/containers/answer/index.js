import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Input, Menu} from 'semantic-ui-react';
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
        name:''
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
          <Input onChange ={this.handleName} width='300' style={{width:300, fontSize:20}} focus placeholder='Name...'  />
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

          </div>
      );
    }
}



export  function AnswerSpinner(props) {

    function renderSpinner(key){
      return(
        <Menu.Item
          name={key.content}
          id = {key.type}
          onClick={props.onAnswerSelected}
        />
      );
    }

    // ERRORE
    //
    return (
      <Menu style={{borderRadius:50}}>
        {props.answerContent.spinner.map(renderSpinner)}
        </Menu>

    );
  }




export class AnswerSlider extends React.Component {
        constructor(props){
          super();
          this.state={
            value:''
          }
          this.handleValue = this.handleValue.bind(this);
        }


        handleValue(event){
          console.log("Slider");
          console.log(event.target.value);
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
