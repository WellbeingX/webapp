import React from 'react';
// import { Container, Grid} from 'semantic-ui-react';
// import { connect } from 'react-redux'
// import DirectorySolution from '../directorySolution';
// import { bindActionCreators } from 'redux'
// import Result from '../result'
// import Resources from '../../api/resources'
// import DirectoryHeader from '../directoryHeader'
// import Suggestions from './suggestions'
// import SolutionRow from './solutionRow'




function FilterBar(props){


  return(
            <div className='directoryFilterBar'>
              <p className="filterNormal">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 42" style={{height:15, paddingRight:15, fill:'none', stroke:'#525254', strokeMiterlimit:10, strokeWidth:4}}>
                <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><line class="cls-1" y1="2" x2="60" y2="2"/><line class="cls-1" x1="7.25" y1="14.67" x2="52.75" y2="14.67"/><line class="cls-1" x1="15.49" y1="27.33" x2="44.51" y2="27.33"/><line class="cls-1" x1="24.07" y1="40" x2="35.93" y2="40"/></g></g>
              </svg>
              <span className="filterFilter">Filter</span> by <span className="filterHighlight">price</span> and <span className="filterHighlight">category</span> </p>
            </div>



  )
}


export default FilterBar
