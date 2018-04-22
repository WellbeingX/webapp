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
import BurgerIcon from './burger'
import HeaderMenu from './headerMenu'



  class HeaderUs extends React.Component {




    constructor(props) {
      super(props);
      this.state = { width: 0, height: 0, marginRight:0, heightCircle:100, widthCircle:100, opacity:1, menu:false, position:'absolute'};
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
      this.burgerHandle = this.burgerHandle.bind(this);
      this.burgerClose = this.burgerClose.bind(this);


    }

    componentDidMount() {

      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);


    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight,
      });
    }



    burgerHandle(){
      this.setState({
        heightCircle:800,
        widthCircle:800,
        opacity:.95,
        menu:!this.state.menu,
        position:'fixed'
      })
    }

    burgerClose(){
      this.setState({
        heightCircle:100,
        widthCircle:100,
        opacity:1,
        menu:!this.state.menu,
        position:'absolute'
      })
    }


    render() {

        var styleWrapper={marginTop:0, paddingTop:0, position:'relative', zIndex:40}
        var styleCircle = {right:-this.state.widthCircle*.4, top:-this.state.heightCircle*.4, background:'white', zIndex:999, marginRight:0, height: this.state.heightCircle, width:this.state.widthCircle, position:'absolute', borderRadius:'100%',transition:'width 0.5s, height 0.5s,right 0.5s, top 0.5s, opacity 0.8s', opacity:this.state.opacity, position:this.state.position };


        return(
                <div style={styleWrapper}>
                  <div style={{position:'absolute',left:20, top:15, zIndex:998}}>
                    <BurgerIcon onClick={this.burgerHandle}/>
                  </div>
                  <div style={{textAlign:'center', width:'100%', position:'relative'}}>

                      <h2 className="logo" style={{ fontSize:'1.2rem', fontWeight:'900', zIndex:100, color:'white', padding:20, textAlign:'center'}}>BetterSpace</h2>
                      <div style={{position:'absolute', right:0, width:this.state.widthCircle, height:100, top:0}}>
                        <div style={{position:'relative', width:'100%', height:'100%'}}>
                          <div style={styleCircle}>
                            {this.state.menu ? <HeaderMenu close={this.burgerClose}/> : ''}
                          </div>
                        </div>
                      </div>
                  </div>

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
// <circle style={{ transition:'cx 0.5, r 0.5, cy 0.5'}}cx={this.state.cX} cy={this.state.cY} r={this.state.r} fill="white" />
// <Grid className="headerBar" style={{paddingTop:10}}>
//     <Grid.Column floated='left' width={5}>
//         <h2 className="logo" style={{  fontWeight:'900', zIndex:100, color:'white', padding:20}}>///</h2>
//     </Grid.Column>
//     <Grid.Column floated='center' width={5}>
//         <h2 className="logo" style={{  fontWeight:'900', zIndex:100, color:'white', padding:20, textAlign:'center'}}>BetterSpace</h2>
//     </Grid.Column>
//
//     <Grid.Column floated='right' width={5}>
//
//       <div style={{position:'relative', marginTop:-10}}>
//         <svg style={styleSVG}>
//
//             <circle cx={cX} cy={cY} r={r} fill="white" />
//
//         </svg>
//       </div>
//     </Grid.Column>
// </Grid>

// <Link to="/">Home</Link>
// <Link to="/about-us">About </Link>
