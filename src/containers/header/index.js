import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BurgerIcon from './burger'
import HeaderMenu from './headerMenu'
import Search from '../../assets/svg/search'
import { Link } from 'react-router-dom'
import {setResetQuestionnaire} from '../../actions/questionnaireActions'



  class HeaderUs extends React.Component {




    constructor(props) {
      super(props);
      this.state = { width: 0, height: 0, marginLeft:0, heightCircle:110, widthCircle:110, opacity:0, menu:false, position:'absolute', zIndex:4};
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
        position:'fixed',
        zIndex:6
      })
    }

    burgerClose(){
      this.setState({
        heightCircle:10,
        widthCircle:10,
        opacity:0,
        menu:!this.state.menu,
        position:'absolute',
        zIndex:4
      })
    }


    render() {

        var styleWrapper={marginTop:0, paddingTop:0, position:'relative', zIndex:50}
        var styleCircle = {left:-this.state.widthCircle*.4, top:-this.state.heightCircle*.4, background:'white', zIndex:this.state.zIndex, marginRight:0, height: this.state.heightCircle, width:this.state.widthCircle, borderRadius:'100%',transition:'width 0.5s, height 0.5s,left 0.5s, top 0.5s, opacity 0.8s', opacity:this.state.opacity, position:this.state.position };


        return(
                <div style={styleWrapper}>
                  <div style={{position:'absolute',left:15, top:10, zIndex:5}}>
                    <BurgerIcon onClick={this.burgerHandle} color='rgba(255,255,255,1)'/>
                  </div>
                  <div style={{textAlign:'center', width:'100%', position:'relative'}}>

                      <h2 className="logo" style={{ fontSize:'1.5rem', fontWeight:'900', zIndex:this.state.zIndex, color:'white', padding:20, textAlign:'center'}}>BetterSpace</h2>
                      <div style={{position:'absolute', left:0, width:this.state.widthCircle, height:120, top:0}}>
                        <div style={{position:'relative', width:'100%', height:'100%'}}>
                          <div style={styleCircle}>
                            {this.state.menu ? <HeaderMenu close={this.burgerClose} resetHome={this.props.setResetQuestionnaire}/> : ''}
                          </div>
                        </div>
                      </div>
                      <div style={{position:'absolute', top:27, right:20, width:20, height:20, zIndex:201, cursor:'pointer'}}>

                      </div>
                  </div>

                </div>
              )
}
}
const mapStateToProps = state => ({
  counter: state.counter,

})

const mapDispatchToProps = dispatch => bindActionCreators({
  setResetQuestionnaire,
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
