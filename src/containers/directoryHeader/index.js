import React from 'react';
import { Container, Grid} from 'semantic-ui-react';
import Digital from '../../assets/svg/digital.js';
import Location from '../../assets/svg/location.js';
import Cart from '../../assets/svg/cart.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



class DirectoryHeader extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      selected:'Digital',
      digital:'rgba(255,255,255,1)',
      digitalSVG: '#70c9cb',
      local:'rgba(255,255,255,.0)',
      localSVG: 'white',
      products:'rgba(255,255,255,.0)',
      productsSVG: 'white'
    }
    this.state.props=props;
    this.setDigital = this.setDigital.bind(this);
    this.setLocal = this.setLocal.bind(this);
    this.setProducts = this.setProducts.bind(this);
  }



    styleSVG = {marginRight:0, height:80, float:'right', width:1000, marginTop:-100, marginRight:-30}
    r = 80;
    cX = 1000;
    cY = 0;


  solutionMatching(){

  }

  setDigital(selection){
    this.setState({
      digital:'rgba(255,255,255,1)',
      digitalSVG: '#70c9cb',
      local:'rgba(255,255,255,.0)',
      localSVG: 'white',
      products:'rgba(255,255,255,.0)',
      productsSVG: 'white'
    })
  }
  setLocal(selection){
    console.log('Click');
    this.popupUnderConstruction();
    // this.setState({
    //   digital:'rgba(255,255,255,.3)',
    //   digitalSVG: 'white',
    //   local:'rgba(255,255,255,1)',
    //   localSVG: '#70c9cb',
    //   products:'rgba(255,255,255,.3)',
    //   productsSVG: 'white'
    // })
  }
  setProducts(selection){
    this.popupUnderConstruction();

    // this.setState({
    //   digital:'rgba(255,255,255,.3)',
    //   digitalSVG: 'white',
    //   local:'rgba(255,255,255,.3)',
    //   localSVG: 'white',
    //   products:'rgba(255,255,255,1)',
    //   productsSVG: '#70c9cb'
    // })
  }

  popupUnderConstruction(){
    this.setState({
      popup:true
    })
    setTimeout(() => this.setState({ popup:false }), 2000);

  }

  renderPopupUnderConstruction(){return(
    <ReactCSSTransitionGroup
     component="div"
     transitionName="dialog"
     transitionEnterTimeout={10000}
     transitionLeaveTimeout={50000}
     transitionAppear
     transitionAppearTimeout={1200}
    >
    <div style={{zIndex:1000, position:'absolute', top:70, color:'rgba(255,255,255,.6)', right:0, fontSize:'1rem'}}>
      UNDER DEVELOPMENT
    </div>
    </ReactCSSTransitionGroup>
  )}



  render(){
  return(
      <div className='logoReplacementWrapper'>
      <Container>

          {this.state.popup ? this.renderPopupUnderConstruction() : ''}

          <Grid columns={3} style={{paddingTop:75}}>
            <Grid.Column center style={{textAlign:'center', padding:'1rem 0'}} onClick={()=>{this.props.setDigital(); this.setDigital();}}>
                <div className='directoryIcon' style={{ background: this.state.digital}}>
                    <div style={{width:40, margin:'auto', top:10, position:'relative', textAlign:'center'}}>
                        <Digital />
                        </div>
                  </div>
                  <p className="directoryCategory">Digital</p>
            </Grid.Column>

            <Grid.Column style={{textAlign:'center', padding:'1rem 0'}}  onClick={()=>{this.props.setLocal(); this.setLocal();}}>
            <div className='directoryIcon directoryNotSelected' style={{ background: this.state.local}} >
            <div style={{width:25, margin:'auto', top:5, position:'relative'}}>

              <Location />
              </div>

            </div>
            <p className="directoryCategory">Around you</p>

            </Grid.Column>


            <Grid.Column style={{textAlign:'center', padding:'1rem 0'}} onClick={()=>{this.props.setProducts(); this.setProducts();}}>
            <div className='directoryIcon directoryNotSelected' style={{ background: this.state.products}} >
            <div style={{width:35, margin:'auto', top:10, position:'relative'}}>

              <Cart />
              </div>

            </div>
            <p className="directoryCategory">Products</p>
            </Grid.Column>
          </Grid>
        </Container>
      </div>



  )};

}



export default DirectoryHeader;
