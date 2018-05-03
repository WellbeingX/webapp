import React from 'react';
import CircularChart from './circular'
import People from '../../assets/svg/people'
import Diet from '../../assets/svg/diet'
import Exercise from '../../assets/svg/exercise'
import Moon from '../../assets/svg/moon'
import Social from '../../assets/svg/social'
import Work from '../../assets/svg/work'



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
            title:'Mindfulness',
            sentence:this.props.suggestion,
            score:this.props.score,
            color:'#70CACC',
            width:60,
            marginTop:75,
            marginLeft:-40
          })
        break;
        case 'Sleep':
          this.setState({
            title:'Sleep',
            sentence:this.props.suggestion,
            score:this.props.score,
            color:'#1C73BB',
            width:45,
            marginTop:90,
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
            marginTop:85,
            marginLeft:-20
          })
        break;
        case 'Exercise':
          this.setState({
            title:'Exercise',
            sentence:this.props.suggestion,
            score:this.props.score,
            color:'#f17300',
            width:40,
            marginTop:80,
            marginLeft:-15
          })
        break;
        case 'Work':
          this.setState({
            title:'Occupation',
            sentence:this.props.suggestion,
            score:this.props.score,
            color:'#d3a588',
            width:45,
            marginTop:90,
            marginLeft:-25
          })
        break;
        case 'Social':
          this.setState({
            title:'Social',
            sentence:this.props.suggestion,
            score:this.props.score,
            color:'#F8AE39',
            width:60,
            marginTop:90,
            marginLeft:-25
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

    }

  }

  render(){
    return(

      <div className='boxShadow' style={{background:this.state.color, position:'relative', padding:20, marginLeft:20, marginRight:20, height:180, borderRadius:20, marginBottom:20, overflow:'hidden'}}>
        <div style={{textAlign:'left'}}>
          <h2 style={{color:'white', fontSize:'.8rem', marginBottom:10}}>{this.state.title} </h2>
        </div>
        <div >
          <div style={{ width:'25%', position:'absolute', left:0, height:'70%', bottom:0, overflow:'hidden',  borderRadius:20}}>
            <div style={{width:'30%', margin:'auto'}}>  </div>
            <div style={{marginTop:10}}> <CircularChart score={this.state.score}/> </div>
          </div>
          <div style={{ width:'75%', position:'absolute', right:0, bottom:0, overflow:'hidden', height:'100%',  borderRadius:20}}>
            <p style={{fontSize:'.6rem', color:'white', paddingTop:45, paddingRight:10}}> {this.state.sentence} </p>
            <div style={{width:140,  borderRadius:20, borderWidth:1, bottom:10, right:20, position:'absolute', color:'white', fontSize:'.6rem', background:'rgba(0,0,0,0)', textAlign:'center', padding:5,  textDecoration: 'underline', cursor:'pointer'}}>
              Further questions
            </div>

          </div>

        </div>
        <div style={{width:this.state.width, marginTop:this.state.marginTop, marginLeft:this.state.marginLeft}}>{this.handleImage()}</div>

      </div>

    )
  };
}

export default PillarTab
