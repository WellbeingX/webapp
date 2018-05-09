import React from 'react';
import ImageBarb from '../../assets/images/home/lady.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const characterStyle = {
  height: 140,
  width: 100,
  overflow: 'hidden',
  background: '15px bottom / 60px no-repeat',
  backgroundImage: `url(${ImageBarb})`,
  position:'absolute',
  bottom:0,
  marginBottom:-10
}

class Recommendation extends React.Component {


  constructor(props){
    super(props);
    this.state={
    }

  }

  componentDidMount(){

  }


  render(){
    return(

      <div style={{ position:'relative', padding:20, marginLeft:10, marginRight:10, height:200, borderRadius:20, overflow:'hidden', paddingTop:80}}>
        <div style={{paddingTop:10, textAlign:'left', width:'65%', height:'100%'}}>
        <ReactCSSTransitionGroup
         component="h2"
         transitionName="dialog"
         transitionEnterTimeout={10000}
         transitionLeaveTimeout={50000}
         transitionAppear
         transitionAppearTimeout={1200}
        >
        <h2 style={{color:'white',  marginBottom:0}}> {this.props.suggestion} </h2>

        </ReactCSSTransitionGroup>


        </div>
        <div style={{ width:100, position:'absolute', right:10, height:100, bottom:30, overflow:'hidden',  borderRadius:'100%', background:'white'}}>
          <div style={characterStyle} />
        </div>
      </div>

    )
  };
}

export default Recommendation
