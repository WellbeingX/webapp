import React from 'react';

const cls1 = {
  fill:'#47adc3'
}

export default function Arrow1(props){

  return(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.84 50">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
          <rect style={cls1} x="15.42" width="6" height="50" rx="3" ry="3"/>
          <rect style={cls1} x="7.42" y="26" width="6" height="27" rx="3" ry="3" transform="translate(-24.88 18.94) rotate(-45)"/>
          <rect style={cls1} x="23.42" y="26" width="6" height="27" rx="3" ry="3" transform="translate(35.67 -7.11) rotate(45)"/>
        </g>
      </g>
    </svg>

  )
}
