import React from "react";

export default ({ open, ...props }) => (
  <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
    <div className="bar1" key="b1" style={{background:props.color}}/>
    <div className="bar2" key="b2" style={{background:props.color}}/>
    <div className="bar3" key="b3" style={{background:props.color}}/>
  </div>
);
