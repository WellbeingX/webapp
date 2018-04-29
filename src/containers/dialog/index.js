import React from 'react';
import PropTypes from 'prop-types';
import ImageBarb from '../../assets/images/home/lady.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


  class  Dialog extends React.Component {

      constructor(props) {
        super(props);
        this.state = { width: 0, height: 0, characterWidth:100, characterRightMargin:300, dialogWidth:200, dialogLeftMargin:200, topBubble:-280, bottomDialog:70, bubbleTop:-300, characterRightCenter:380};
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
        this.setState({ width: window.innerWidth, height: window.innerHeight })

        // Big Tablet
        if(window.innerWidth<330){
          //iPhone SE and small screens
          this.setState({ characterWidth:100, characterRightMargin:300, dialogWidth:200, dialogLeftMargin:200, topBubble:-280, bottomDialog:80, characterRightCenter:380 })
        }else if(window.innerWidth<380){
          // iPhone 6 and normale screens
          console.log('iphone 6');
          this.setState({
            characterWidth:130,
            characterRightMargin:250,
            dialogWidth:200,
            dialogLeftMargin:200,
            topBubble:-250,
            bottomDialog:70,
            characterRightCenter:330

          })
        }else if(window.innerWidth>379){
          // iPhone 6 plus
          console.log('iphone 6 plus');
          this.setState({
            characterWidth:130,
            characterRightMargin:250,
            dialogWidth:200,
            dialogLeftMargin:200,
            topBubble:-250,
            bottomDialog:80,
            characterRightCenter:330

          })
        }
      }
      middle(){
        return(
          <div style={{borderRadius:'80%', position:'absolute', width:800, height:500, background:'white', top:this.state.bubbleTop, overflow:'hidden', left:-200, color:'rgb(36, 158, 205)'}}>
            <div style={{position: 'absolute', bottom: this.state.bottomDialog, width:this.state.dialogWidth, left: this.state.dialogLeftMargin}}>
            </div>
            <div style={{height:200, background:'no-repeat', backgroundImage: `url(${ImageBarb})`,backgroundSize: this.state.characterWidth,right:this.state.characterRightCenter,backgroundPosition:'bottom right',position:'absolute', bottom:-6, width:this.state.characterWidth}}>
            </div>
          </div>
        )
      }

      side(){
        return(
          <div  style={{borderRadius:'80%', position:'absolute', width:800, height:500, background:'white', top:this.state.bubbleTop, overflow:'hidden', left:-200, color:'rgb(36, 158, 205)'}}>
            <div style={{height:200, background:'no-repeat', backgroundImage: `url(${ImageBarb})`,backgroundSize: this.state.characterWidth,right:this.state.characterRightMargin,backgroundPosition:'bottom right',position:'absolute', bottom:-6, width:this.state.characterWidth}} />

            <div className='dialogWrapperStyle' style={{position: 'absolute', bottom: this.state.bottomDialog, width:this.state.dialogWidth, left: this.state.dialogLeftMargin}}>
              <ReactCSSTransitionGroup
               component="div"
               transitionName="dialog"
               transitionEnterTimeout={0}
               transitionLeaveTimeout={500}
               transitionAppear
               transitionAppearTimeout={1200}
              >

                      <h2 className="dialog" style={{padding:20}} >
                        {this.props.content}
                      </h2>

              </ReactCSSTransitionGroup>
            </div>
          </div>
        )
      }

    render() {


      return (
        <div>
            <div style={{position:'relative',height:180, background:'rgba(0,0,0,0)'}}>
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
