import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Input, Menu, Dropdown, Select} from 'semantic-ui-react';
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
        {console.log("Props answer Select")}
        {console.log(this.state.value)}
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
