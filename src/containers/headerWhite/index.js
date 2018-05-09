import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BurgerIcon from '../header/burger'
import HeaderMenu from '../header/headerMenu'



  class HeaderWhite extends React.Component {




    constructor(props) {
      super(props);
      this.state = { width: 0, height: 0, marginLeft:0, heightCircle:0, widthCircle:0, opacity:0, menu:false, position:'fixed'};
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
        position:'absolute'
      })
    }

    burgerClose(){
      this.setState({
        heightCircle:0,
        widthCircle:0,
        opacity:0,
        menu:!this.state.menu,
        position:'absolute'
      })
    }


    render() {

        var styleWrapper={position:'relative', paddingLeft:20, color:'black', zIndex:50, width:'100%', height:0}
        var styleCircle = {overflowX:'hidden', left:-this.state.widthCircle*.4, top:-this.state.heightCircle*.4, background:'white', zIndex:999, marginLeft:0, height: this.state.heightCircle, width:this.state.widthCircle, borderRadius:'100%',transition:'width 0.5s, height 0.5s,left 0.5s, top 0.5s, opacity 0.8s', opacity:this.state.opacity, position:this.state.position };


        return(
          <div style={styleWrapper}>
            <div style={{paddingTop:10}}>
              <BurgerIcon onClick={this.burgerHandle} color='#CCC' />
              </div>
            <div style={{textAlign:'center', width:'100%', position:'relative'}}>
                <div style={{position:'absolute', left:-40, top:-60, width:this.state.widthCircle, height:this.state.heightCircle}}>
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
  counter: state.counter
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderWhite)

// <Link to="/">Home</Link>
// <Link to="/about-us">About </Link>
