import React from 'react';
import ImageBarb from '../../assets/images/home/lady.png';

const characterStyle = {
  height: 140,
  width: 100,
  background:'no-repeat',
  backgroundImage: `url(${ImageBarb})`,
  backgroundSize: 65,
  borderRadius:20,
  overflow: 'hidden',
  background: '10px bottom / 60px no-repeat',
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

      <div style={{ position:'relative', padding:20, marginLeft:10, marginRight:20, height:200, borderRadius:20, overflow:'hidden', paddingTop:80}}>
        <div style={{paddingTop:10, textAlign:'left', width:'65%', height:'100%'}}>
          <h2 style={{color:'white', fontSize:'.8rem', marginBottom:0}}>Here your wellbeing summary! </h2>
          <p style={{fontSize:'.6rem'}}> {this.props.suggestion} </p>

        </div>
        <div style={{ width:100, position:'absolute', right:10, height:100, bottom:30, overflow:'hidden',  borderRadius:'100%', background:'white'}}>
          <div style={characterStyle} />
        </div>
      </div>

    )
  };
}

export default Recommendation
