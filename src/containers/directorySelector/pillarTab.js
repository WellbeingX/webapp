import React from 'react';
import CircularChart from '../profile/circular'
import People from '../../assets/svg/people'


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
            color:'#70CACC'
          })
        break;
        case 'Sleep':
          this.setState({
            title:'Sleep',
            sentence:this.props.suggestion,
            score:this.props.score,
            color:'#1C73BB'
          })
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
            <div style={{width:140,  borderRadius:20, borderWidth:1, bottom:10, right:20, position:'absolute', color:this.state.color, fontSize:'.6rem', background:'white', textAlign:'center', padding:5}}>
              Further questions
            </div>

          </div>

        </div>
        <div style={{width:60, marginTop:70, marginLeft:-40}}><People /> </div>

      </div>

    )
  };
}

export default PillarTab
