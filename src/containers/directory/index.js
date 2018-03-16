import React from 'react';
import { Container, Grid} from 'semantic-ui-react';
import { connect } from 'react-redux'
import DirectorySolution from '../directorySolution';
import { bindActionCreators } from 'redux'
import Result from '../result'
import resources from '../../api/resources.js'
import DirectoryHeader from '../directoryHeader'
import ImageBarb from '../../assets/images/home/lady.png';
import DirectoryDigital from '../directoryDigital'
import DirectoryLocal from '../directoryLocal'
import DirectoryProducts from '../directoryProducts'


const characterStyle = {
  height: 170,
  width: 100,
  background:'no-repeat',
  backgroundImage: `url(${ImageBarb})`,
  backgroundSize: 100,
  overflow: 'hidden',
  backgroundPosition: 'bottom right',
  position:'absolute',
  marginLeft:-40
}


  class Directory extends React.Component {
    constructor(props){
      super(props);
      this.state={
        selected:'Digital'
      };
      this.setDigital = this.setDigital.bind(this);
      this.setLocal = this.setLocal.bind(this);
      this.setProducts = this.setProducts.bind(this);

    }

    setDigital(selection){
      this.setState({
        selected:'digital'
      })
    }
    setLocal(selection){
      this.setState({
        selected:'Local'
      })
    }
    setProducts(selection){
      this.setState({
        selected:'Products'
      })
    }

    renderSolutions(){
      switch (this.state.selected) {
        case 'Digital':
          return (<DirectoryDigital />)
          break;
        case 'Local':
          return (<DirectoryLocal />)
          break;
        case 'Products':
          return (<DirectoryProducts />)
          break;
        default:
          return (<DirectoryDigital />)
      }

    }

    render(){
  return(
    <div className='directoryContainer'>
      <div >
        <DirectoryHeader setLocal={this.setLocal} setDigital={this.setDigital} setProducts={this.setProducts} />
      </div>

      {this.renderSolutions()}
    </div>


  )};
}



const mapStateToProps = state => ({
  counter: state.counter,
  email: state.email
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directory)
