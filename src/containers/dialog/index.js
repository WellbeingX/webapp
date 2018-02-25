import React from 'react';
import PropTypes from 'prop-types';
import ImageBarb from '../../assets/images/home/lady.png';


  class  Dialog extends React.Component {

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





      wH = this.props.windowHeigth;
      wW = this.props.windowWidth>800 ? this.props.windowWidth/2 : this.props.windowWidth;
      marginContainer = this.wH/6;
      textWidth = this.wW/1.5;

      bigBuggleStyle = {
         width:this.wH, height:this.wH,
         marginLeft:-this.marginContainer,
         marginTop:-this.wH,
         background:'white', color:'rgb(36, 158, 205)',
         opacity:1,
         borderRadius:1000,
         overflow: 'hidden'
      }
      bigBuggleStyle2 = {
        position:'relative',height:this.wH
      }

      characterStyle = {
        height:this.wH,
        background:'no-repeat',
        backgroundImage: `url(${ImageBarb})`,
        backgroundSize: this.wH/5,
        overflow: 'hidden',
        backgroundPosition: 'bottom right',
        position:'absolute', bottom:-10, width:this.wW*.95,
        marginLeft:this.marginContainer
      }
      characterStyleMiddle = {
        height:this.wH,
        background:'no-repeat',
        backgroundImage: `url(${ImageBarb})`,
        backgroundSize: this.wH/5,
        overflow: 'hidden',
        backgroundPosition: 'bottom center',
        position:'absolute', bottom:-10, width:this.wW*.95,
        marginLeft:this.marginContainer
      }
      spaceStyle ={
        height:100
      }
      dialogWrapperStyle = {
        position:'absolute', bottom:this.wH/10, width:this.textWidth, marginLeft:this.marginContainer
      }
      dialogStyle = {
        marginTop:this.wH/2
      }

      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight })

        if(window.innerWidth>500 && window.innerWidth<1200){
          console.log("Desktop W:" + window.innerWidth + " H:" + window.innerHeight);

          this.textWidth = this.marginContainer*3;
          this.bigBuggleStyle = {...this.bigBuggleStyle,
            width:this.wH*.7,
            marginLeft:50};

          this.characterStyleMiddle = {...this.characterStyleMiddle,
              marginLeft:0};

          this.characterStyle = { ...this.characterStyle,
              backgroundPosition: 'bottom center',
              marginLeft:this.marginContainer};

        }else if(window.innerWidth>1200 && window.innerHeight<800){

          this.marginContainer = 200;
          this.bigBuggleStyle = {
            ...this.bigBuggleStyle,
            width:window.innerWidth,
            marginLeft:100,
            height:this.wH*.9
          };

          this.bigBuggleStyle2 = {...this.bigBuggleStyle2,
            height:this.wH*.9
          }

          this.dialogStyle = {...this.dialogStyle
          }
          this.dialogWrapperStyle = {...this.dialogWrapperStyle,
          bottom:35
          }
          this.characterStyle = {...this.characterStyle,
              height:this.wH*.9,
              backgroundPosition: 'bottom center',
              marginLeft:300};

        }else if(window.innerHeight>800){
          this.marginContainer = 200;
          var height = 800;
          this.bigBuggleStyle = {
            ...this.bigBuggleStyle,
            width:window.innerWidth,
            marginLeft:100,
            height:height
          };

          this.bigBuggleStyle2 = {...this.bigBuggleStyle2,
            height:height
          }

          this.dialogStyle = {...this.dialogStyle
          }
          this.dialogWrapperStyle = {...this.dialogWrapperStyle,
          bottom:35
          }
          this.characterStyle = {...this.characterStyle,
              height:height,
              backgroundPosition: 'bottom center',
              marginLeft:300};
        }
      }
      middle(){
        return(
          <div style={this.bigBuggleStyle2}>
            <div style={this.dialogWrapperStyle}>
            </div>
            <div style={this.characterStyleMiddle}>
            </div>
          </div>
        )
      }

      side(){
        return(
          <div style={this.bigBuggleStyle2}>
            <div style={this.dialogWrapperStyle}>
                <h2 className="dialog" style={this.dialogStyle}>{this.props.content}</h2>
            </div>
            <div style={this.characterStyle}>
            </div>
          </div>
        )
      }

    render() {


      return (
        <div>
            <div style={this.spaceStyle}></div>
            <div style={this.bigBuggleStyle}>
                {this.props.content===''?  this.middle() : this.side()}
            </div>
        </div>
      );
    }
  }

  Dialog.propTypes = {
    content: PropTypes.string.isRequired
  };

  export default Dialog;
