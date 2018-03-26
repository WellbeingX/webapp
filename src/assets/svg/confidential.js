import React from 'react';


const cls1 = {
  fill:'#70CACC'
}

const cls2 = {
  fill:'#FFF'
}
export default function Confidential(props){

  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.61 110.5">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <ellipse style={cls1} cx="35.12" cy="43.08" rx="27.58" ry="42.58"/>
          <ellipse style={cls2} cx="35.3" cy="52.71" rx="18.51" ry="42.58"/>
          <rect style={cls1} x="0.5" y="47.89" width="69.61" height="62.11"/>
          <path style={cls2} d="M27.82,70.25h0c3.77-2.3,10-2.14,13.38.36h0a3.64,3.64,0,0,1,1.74,3.89S34.11,93.06,34,93.06h0c-.12,0-8.76-17.88-8.76-17.88C24.74,73.38,25.7,71.54,27.82,70.25Z"/>
        </g>
      </g>
    </svg>

  )
}
