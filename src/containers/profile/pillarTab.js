import React from 'react';
import CircularChart from './circular'
import People from '../../assets/svg/people'
import Diet from '../../assets/svg/diet'
import Exercise from '../../assets/svg/exercise'
import Moon from '../../assets/svg/moon'
import Social from '../../assets/svg/social'
import Work from '../../assets/svg/work'
import {Grid} from 'semantic-ui-react'


class PillarTab extends React.Component {


  constructor(props){
    super(props);
    this.state={
      title:'',
      sentence:'',
      score:'',
      color:''

    }

  }

  componentDidMount(){
      switch(this.props.title){
        case 'Mindfulness':
          this.setState({
            title:'Stress management',
            sentence:this.props.suggestion,
            score:this.props.score,
            color:'linear-gradient(-40deg, #60BCCC, #70CACC )',
            width:50,
            marginTop:15,
            marginLeft:-25
          })
        break;
        case 'Sleep':
          this.setState({
            title:'Sleep',
            sentence:this.props.suggestion,
            score:this.props.score,
            color:'#1C73BB',
            color:'linear-gradient(-40deg, #3E9588, #1C73BB )',
            width:45,
            marginTop:20,
            marginLeft:-25
          })
        break;
        case 'Nutrition':
          this.setState({
            title:'Diet',
            sentence:this.props.suggestion,
            score:this.props.score,
            color:'#499167',
            width:40,
            marginTop:25,
            marginLeft:-15
          })
        break;
        case 'Exercise':
          this.setState({
            title:'Exercise',
            sentence:this.props.suggestion,
            score:this.props.score,
            color:'#f17300',
            width:45,
            marginTop:10,
            marginLeft:-20
          })
        break;
        case 'Work':
          this.setState({
            title:'Work satisfaction',
            sentence:this.props.suggestion,
            score:this.props.score,
            color:'#d3a588',
            width:65,
            marginTop:15,
            marginLeft:-40
          })
        break;
        case 'Social':
          this.setState({
            title:'Social life',
            sentence:this.props.suggestion,
            score:this.props.score,
            color:'#F8AE39',
            width:80,
            marginTop:10,
            marginLeft:-50
          })
        break;
      }
  }
  handleImage(){

    switch(this.props.title){
      case 'Mindfulness':
        return(<People />);
        break;
      case 'Sleep':
        return(<Moon />);
        break;
      case 'Nutrition':
        return(<Diet />);
        break;
      case 'Exercise':
        return(<Exercise />);
        break;
      case 'Social':
        return(<Social />);
        break;
      case 'Work':
        return(<Work />);
        break;
      default:
        break;

    }

  }

  render(){
    return(
                  <div className='boxShadow' style={{width:this.props.width-20, background:this.state.color, position:'relative', margin:'auto', height:145, borderRadius:20,   overflow:'hidden', marginBottom:10, padding:15, zIndex:2 }}>

                      <div style={{textAlign:'left'}}>
                        <h2 style={{color:'white', fontSize:'1rem', fontWeight:900, marginBottom:10}}>{this.state.title} </h2>
                      </div>

                      <div >
                        <div style={{ paddingTop:25, width:'25%', position:'absolute', right:0, height:'100%', bottom:0, overflow:'hidden',borderLeft: '1px solid rgba(255,255,255,.2) '}}>
                          <div style={{width:'30%', margin:'auto'}}>  </div>
                          <div style={{marginTop:10}}> <CircularChart score={this.state.score}/> </div>
                        </div>
                        <div style={{ width:'55%', position:'absolute', right:'25%', bottom:0, overflow:'hidden', height:'100%',  borderRadius:20}}>
                          <p style={{fontSize:'.55rem', color:'rgba(255,255,255,.8)', paddingTop:50, paddingRight:10, fontWeight:100, fontFamily:'Roboto',whiteSpace: 'normal',overflow: 'hidden',height: 130, lineHeight:'.7rem'}}> {this.state.sentence} </p>

                        </div>
                      </div>

                      <div style={{width:this.state.width, marginTop:this.state.marginTop, marginLeft:this.state.marginLeft}}>
                        {this.handleImage()}
                      </div>

                  </div>
    )
  };
}

export default PillarTab

//
// <div style={{width:140,  bottom:10, left:0, position:'absolute', color:'white', fontSize:'.6rem', background:'rgba(0,0,0,0)', textAlign:'left', padding:0,  textDecoration: 'underline', cursor:'pointer'}}>
//   Learn more
// </div>
