import React, { Component } from 'react'
import Landing from './landing'
import About from './about'
import Contact from './contact'


const LANDING =1
const ABOUT =2
const CONTACT =3

export default class HomeDesktop extends Component {
    constructor(props){
      super(props)
      this.state = {
        height:0,
        render:LANDING,
        opacity:1,
        buttonClicked:false
      }

      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      this.renderContent = this.renderContent.bind(this);
      this.aboutClick = this.aboutClick.bind(this);
      this.contactClick = this.contactClick.bind(this);
      this.logoClick = this.logoClick.bind(this);
    }

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight })
      console.log(window.innerHeight);
    }


    renderContent(){
        switch(this.state.render){
          case LANDING:
              return (<Landing opacity={this.state.opacity}/>)
          break;
          case ABOUT:
              return (<About opacity={this.state.opacity}/>)

          break;
          case CONTACT:
              return (<Contact opacity={this.state.opacity}/>)
          break;
          default:

              return (<Landing opacity={this.state.opacity}/>)
          break;
        }



    }

    aboutClick(){
      this.setState({
        render:ABOUT
        }
      )
    }

    logoClick(){
      this.setState({
        render:LANDING
        }
      )
    }

    contactClick(){
      this.setState({
        render:CONTACT
        }
      )
    }


render() {

    return (
      <div style={{height:this.state.height}}>
        <div style={{height:this.state.height, backgroundSize:'cover', background: 'url(/static/media/desktopBkg.fc7c195b.jpg)', backgroundRepeat:'no-repeat'}}>
          <div className = 'desktopHeaderHeader' style={{position:'absolute', height:'2.8rem', top:0 }} >
            <span onClick={this.logoClick}>BetterSpace</span>
            <span className='desktopHeaderHeaderRight'>
              <a href='#whatwedo'>
              <span className='desktopHeaderHeaderRightElement' onClick={this.aboutClick}>
                  About
              </span>
              </a>
              <a href='#contact'>
              <span className='desktopHeaderHeaderRightElement' onClick={this.contactClick}>Mission</span>
              </a>
            </span>
          </div>

          <div style={{margin:'auto', top:'35%', width:'50%', textAlign:'center', fontSize:'2rem', position:'relative', lineHeight:'2.5rem'}}>
            <span style={{fontWeight:900, fontSize:'3rem', fontFamily:'QuickSand'}}> BetterSpace</span> <br />
            {this.renderContent()}
          </div>

          <div style={{bottom:50, width:'75%', textAlign:'center', fontSize:'1rem', position:'absolute', lineHeight:'1.2rem', width:'100%'}}>
             View <span style={{textDecoration:'underline'}}>betterspace.uk  </span>on a mobile device to see how we can help you
          </div>

        </div>

      </div>
    )
  }
}
