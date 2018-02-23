import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../reducers/counter'
import { Image,Divider,Container, Button, Grid, Header, List, Segment } from 'semantic-ui-react'
import ImageBarb from '../../assets/images/home/Barb.png';

const mainFormat = {  height:300 };
const backColor = {background: 'green', color:'white' };
const speechBubbleContainer = {paddingTop:115, height:600, textAlign:'bottom', backgroundImage: `linear-gradient(-20deg, #96D0A7, #249ECD)`};
const speechBubble = { textAlign:'left', fontSize:22, fontWeight: 900, color:'white', borderRadius:20, padding:25};
const speechText = {margin:0}
const inputBarb = { paddingTop:15, paddingBottom:0, marginBottom:0}
const buttonStyle = {background:'white', color:'#6FC9CB', borderRadius:40, fontSize:22, fontWeight: 900, marginTop:15, padding:'15 20'}
const triangle = {width: 0, height: 0, marginTop:-15, marginLeft:50, borderLeft:'30px solid transparent', borderRight:'30px solid transparent',borderTop:'40px solid #fff'}



class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight/1.2 });
  }

  render() {
      return(
    <Container >
          <Grid  style={speechBubbleContainer} style={{height:this.state.height}} >
              <Grid.Row style={{marginTop:this.state.height/8}}>
                  <Grid.Column style={{flex:0}}/>
                  <Grid.Column style={{flex:15}}>
                        <div style={speechBubble} >
                            <p style={speechText}>
                            If you’re ready to control stress and negative thoughts, you’re ready for Better Space</p>
                        </div>
                  </Grid.Column>
                  <Grid.Column style={{flex:0}}/>
              </Grid.Row>

              <Grid.Row  style={inputBarb} >


                  <Grid.Column  style={{flex:1, padding:0, marginTop:-0, textAlign:'center'}} >
                      <Button style={buttonStyle} onClick={() => this.props.changePage("information")} >Start my journey</Button>
                  </Grid.Column>

              </Grid.Row>
          </Grid>


          <Grid style={{color:'black',background:'white', paddingTop:20}}>
          <h2>More About Nourish.Life </h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
          </Grid>
    </Container>
  )

  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: (textInput) => push('/' + textInput)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
