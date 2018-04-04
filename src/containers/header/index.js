import React from 'react'
import { Container, Button, Grid, Header, List, Segment } from 'semantic-ui-react'
import { Route, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../reducers/counter'


  class HeaderUs extends React.Component {




    constructor(props) {
      super(props);
      this.state = { width: 0, height: 0, props };
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
      this.setState({ width: window.innerWidth, height: window.innerHeight });

    }



    logoSet(){
      if (true){
        return(
        <Grid.Column floated='left' width={5}>
          <h2 className="logo" style={{  fontWeight:'900', zIndex:100, color:'white', padding:20}}>BetterSpace</h2>
        </Grid.Column>)
      }else{
        return(
        <Grid.Column floated='left' width={5} className="headerLogo">
          <h2 className="logo" style={{ fontWeight:'900', zIndex:100, color:'#249ECD', padding:20}}>BetterSpace</h2>
        </Grid.Column>)
      }
    }


    render() {

        var styleWrapper={marginTop:0, paddingTop:0}
        var styleSVG = {float:'right', marginRight:this.state.width>415 ? -this.state.width*.25 : -this.state.width*.55, height: this.state.width*.25};
        var cX = this.state.width>325 ? this.state.width*.2 : this.state.width*.35;
        var cY = this.state.width*.05;
        var r = this.state.width*.2;
        if (this.state.width<350){
          if(this.props.counter.path==='/information') styleWrapper = { ...styleWrapper, height:150};
        }
        // MIN WIDTH 980
        if (this.state.width>980){
          styleSVG = {float:'right', marginRight:this.state.width>1415 ? -this.state.width*.1 : -this.state.width*.15, height: this.state.width*.25};
        }
        // MIN WIDTH 1400
        if (this.state.width>1400){
          styleSVG = {marginRight:0, height:250, float:'right', width:1000}
          r = 300;
          cX = 1000;
          cY = -50;
        }

        return(
                <div style={styleWrapper}>
                  <Grid className="headerBar" style={{paddingTop:10}}>
                      {this.logoSet()}
                      <Grid.Column floated='right' width={10}>

                        <div style={{position:'relative', marginTop:-10}}>
                          <svg style={styleSVG}>

                              <circle cx={cX} cy={cY} r={r} fill="white" />

                          </svg>
                        </div>
                      </Grid.Column>
                  </Grid>
                </div>
              )
}
}
const mapStateToProps = state => ({
  counter: state.counter,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync
}, dispatch)



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderUs)

// <Link to="/">Home</Link>
// <Link to="/about-us">About </Link>
