import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DirectoryHeader from '../directoryHeader'
import ImageBarb from '../../assets/images/home/lady.png';
import DirectoryDigital from '../directoryDigital'
import DirectoryLocal from '../directoryLocal'
import DirectoryProducts from '../directoryProducts'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


var isActive =true;
  class Directory extends React.Component {
    constructor(props){
      super(props);
      this.state={
        selected:'Digital',
        count: 1,
        timerActive:false
      };
      this.setDigital = this.setDigital.bind(this);
      this.setLocal = this.setLocal.bind(this);
      this.setProducts = this.setProducts.bind(this);
      this.tick = this.tick.bind(this);
      this.startTimer = this.startTimer.bind(this);
      this.stopTimer = this.stopTimer.bind(this);

    }


    startTimer() {
      clearInterval(this.timer);
      this.timer = setInterval(this.tick.bind(this), 1000);
      this.setState({timerActive:true})
    }
    stopTimer() {
      clearInterval(this.timer);
      this.setState({timerActive:false})
    }
    componentWillUnmount() {
      clearInterval(this.timer);
    }
     tick() {
       console.log(this.state.count);
       this.setState({count: (this.state.count + 1)});
       if (this.state.count == 10 ) this.stopTimer();
     }
     componentWillMount () {
       this.startTimer();
     }

    setDigital(selection){
      this.setState({
        selected:'digital'
      })
    }
    setLocal(selection){
      this.setState({
        selected:'Local'
      })
    }
    setProducts(selection){
      this.setState({
        selected:'Products'
      })
    }

    renderSolutions(){
      switch (this.state.selected) {
        case 'Digital':
          return (<DirectoryDigital />)
          break;
        case 'Local':
          return (<DirectoryLocal />)
          break;
        case 'Products':
          return (<DirectoryProducts />)
          break;
        default:
          return (<DirectoryDigital />)
      }

    }
    renderOverlay(){
      return(
        <ReactCSSTransitionGroup transitionName='fade'>
          <div className='classOverlay' >
            <p>Thank you for answering the questions, the website is currently under construction and a placeholder page will appear next</p>

            <div className="loader loader--style2" title="1">
              <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                 width="40px" height="40px" viewBox="0 0 50 50" style={{enableBackground:'new 0 0 50 50'}}>
              <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                <animateTransform attributeType="xml"
                  attributeName="transform"
                  type="rotate"
                  from="0 25 25"
                  to="360 25 25"
                  dur="0.6s"
                  repeatCount="indefinite"/>
                </path>
              </svg>
            </div>
          </div>
        </ReactCSSTransitionGroup>
      )
    }

    renderDirectory(){
      return(
        <div>
            <div >
              <DirectoryHeader setLocal={this.setLocal} setDigital={this.setDigital} setProducts={this.setProducts} />
            </div>
            {this.renderSolutions()}
        </div>
      )
    }
    render(){
      return(
            <div className='directoryContainer'>
              {this.state.timerActive ? this.renderOverlay() : this.renderDirectory()}


            </div>


      )};
}



const mapStateToProps = state => ({
  counter: state.counter,
  email: state.email
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directory)
