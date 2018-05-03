import React from "react";
import { List } from 'semantic-ui-react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom'


export default ({ open, ...props }) => (
  <div style={{color:'black', position:'fixed', top:20 ,left:-10, fontSize:'1rem', zIndex:204}}>
  <ReactCSSTransitionGroup
   component="div"
   transitionName="fade"
   transitionEnterTimeout={0}
   transitionLeaveTimeout={500}
   transitionAppear
   transitionAppearTimeout={1200}
  >
    <div style={{position:'relative' , zIndex:104}} onClick={props.close}>
      X
    </div>
    <div style={{position:'relative', left:100, top:100, textAlign:'left' }} >
    <List link>
    <List.Item as='a'><Link to='/' onClick={()=>this.props.resetHome}>Home</Link></List.Item>
    <List.Item as='a'><Link to='/Directory'>Directory</Link></List.Item>
      <List.Item as='a'>Mission</List.Item>
      <List.Item as='a'>About</List.Item>
    </List>
    </div>
    </ReactCSSTransitionGroup>

  </div>
);
