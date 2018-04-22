import React, { Component } from 'react';
import { Button} from 'semantic-ui-react'




export default class HomeButton extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 , active:true};
    this.handleClick = this.handleClick.bind(this);

  }


  handleClick(event){
      this.setState({active:!this.state.active});
          this.props.click(this.props.type, this.state.active);
  }

  render() {
    let className = this.state.active ? 'landingButton':'landingButtonActive' ;

      return(
        <div style={{margin:'auto', padding:0}}>
          <Button className={className} onClick={this.handleClick}>{this.props.label}</Button>
        </div>
        )

  }
}





// <Grid.Row  centered style={inputBarb} >
//     <Grid.Row centered>
//     <Image src={ImageGuard} centered style={{padding:10,opacity:.8, width:150, height:60, paddingRight:30}}/>
//     </Grid.Row>
//     <Grid.Row centered bottom>
//     <Image src={ImageZinc} centered style={{padding:10, opacity:1, width:100, height:70, marginTop:7}}/>
//     </Grid.Row>
// </Grid.Row>
