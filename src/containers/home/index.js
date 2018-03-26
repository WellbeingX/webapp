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
import { Container, Button, Grid } from 'semantic-ui-react'
import {setPath} from '../../actions/questionnaireActions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactGA from 'react-ga';
import Carousel from '../carousel';




class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.props.setPath('/')
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    ReactGA.pageview('/');
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
    console.log(window.innerHeight);
  }

  render() {




      return(
          <Container >
          <ReactCSSTransitionGroup
           component="div"
           transitionName="fade"
           transitionEnterTimeout={800}
           transitionLeaveTimeout={500}
           transitionAppear
           transitionAppearTimeout={500}
          >
                <Grid  className='landingWrapper' >

                    <Grid.Row   style={{margin:0, padding:0}}>

                    <p className='landingTitle' style={{paddingBottom:80, paddingTop:50, marginRight:20}}>
                      Find the best ways to improve your state of mind
                    </p>

                    <p className='landingTitle' >
                      I want to...
                    </p>


                    </Grid.Row>

                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.props.changePage("information")} >have clearer thinking</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.props.changePage("information")} >be better at coping</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.props.changePage("information")} >feel inspired</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.props.changePage("information")} >beat depression</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.props.changePage("information")} >beat addiction</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.props.changePage("information")} >beat anxiety</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.props.changePage("information")} >perform better at work</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.props.changePage("information")} >feel less lonely</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.props.changePage("information")} >be more successful</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.props.changePage("information")} >have better sleep</Button>
                    </Grid.Row>
                    <Grid.Row   style={{margin:0, padding:0}}>
                        <Button className='landingButton'  onClick={() => this.props.changePage("information")} >do more exercise</Button>
                    </Grid.Row>




                </Grid>

                </ReactCSSTransitionGroup>


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
  setPath,
  changePage: (textInput) => push('/' + textInput)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)



// <Grid.Row  centered style={inputBarb} >
//     <Grid.Row centered>
//     <Image src={ImageGuard} centered style={{padding:10,opacity:.8, width:150, height:60, paddingRight:30}}/>
//     </Grid.Row>
//     <Grid.Row centered bottom>
//     <Image src={ImageZinc} centered style={{padding:10, opacity:1, width:100, height:70, marginTop:7}}/>
//     </Grid.Row>
// </Grid.Row>
