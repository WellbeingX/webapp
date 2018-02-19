import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'
import { Image,Divider,Container, Button, Grid, Header, List, Segment } from 'semantic-ui-react'
import ImageBarb from '../../assets/images/home/Barb.png';

const mainFormat = {  height:300, background: 'green' };
const backColor = {background: 'green', color:'white' };
const speechBubbleContainer = {paddingTop:115, height:600, textAlign:'bottom'};
const speechBubble = {background: 'white', textAlign:'left', fontSize:22, fontWeight: 900, color:'#21ba45', borderRadius:20, padding:25};
const speechText = {margin:0}
const inputBarb = { paddingTop:15, paddingBottom:0, marginBottom:0}
const buttonStyle = {background:'#21ba45', color:'white', borderRadius:40, border:1, borderColor:'white', borderStyle:'solid', fontSize:20, fontWeight: 300, marginTop:15, padding:15}
const triangle = {width: 0, height: 0, marginTop:-15, marginLeft:50, borderLeft:'30px solid transparent', borderRight:'30px solid transparent',borderTop:'40px solid #fff'}

const Home = props => (
  <Container>
        <Grid  style={speechBubbleContainer}>
            <Grid.Row>
                <Grid.Column style={{flex:0}}/>
                <Grid.Column style={{flex:15}}>
                      <div style={speechBubble} >
                          <p style={speechText}>Hi, I am Barbara,</p>
                          <p style={speechText}>Thanks for coming here</p>
                          <p/>
                          <p style={speechText}>How can I help you?</p>
                      </div>
                      <div style={triangle}></div>
                </Grid.Column>
                <Grid.Column style={{flex:0}}/>
            </Grid.Row>

            <Grid.Row  style={inputBarb} inverted color='green'>
                <Grid.Column style={{flex:1, padding:0, paddingLeft:25}}>
                      <Grid.Row style={{flex:1}}>
                        <Image src={ImageBarb}/>
                      </Grid.Row>

                </Grid.Column>

                <Grid.Column  style={{flex:1, padding:0, marginTop:-0, textAlign:'left', paddingRight:20 }} >
                    <Button style={buttonStyle} onClick={() => props.changePage("information")} >Information</Button>
                    <Button style={buttonStyle} onClick={() => props.changePage("solutions")} >Solutions</Button>
                    <Button style={buttonStyle} onClick={() => props.changePage("idk")} >I don't know...</Button>
                </Grid.Column>

            </Grid.Row>
        </Grid>


        <Grid style={{color:'black',background:'white', paddingTop:20}}>
        <h2>More About Nourish.Life </h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
        </Grid>
  </Container>
)

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
