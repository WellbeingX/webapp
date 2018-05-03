import React from 'react';
import ImageBarb from '../../assets/images/home/lady.png';

const characterStyle = {
  height: 140,
  width: 100,
  background:'no-repeat',
  backgroundImage: `url(${ImageBarb})`,
  backgroundSize: 80,
  borderRadius:20,
  overflow: 'hidden',
  backgroundPosition: 'bottom left',
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

      <div className='boxShadow' style={{background:'white', position:'relative', padding:20, marginLeft:20, marginRight:20, height:180, borderRadius:20, overflow:'hidden'}}>
        <div style={{textAlign:'left', width:'75%', height:'100%',borderRadius:20}}>
          <h2 style={{color:'#70CACC', fontSize:'.8rem', marginBottom:10}}>Recommendation </h2>
          <p style={{fontSize:'.6rem'}}> {this.props.suggestion} </p>
          <div style={{width:90,  borderRadius:20, borderWidth:1, bottom:10, left:20, position:'absolute', color:'white', fontSize:'.6rem', background:'#70CACC', textAlign:'center', padding:5, cursor:'pointer'}}>
            What to do
          </div>
        </div>
        <div style={{ width:'25%', position:'absolute', right:0, height:'100%', top:0, overflow:'hidden',  borderRadius:20}}>
          <div style={characterStyle} />
        </div>
      </div>

    )
  };
}

export default Recommendation
