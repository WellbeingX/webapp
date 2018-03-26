import React from 'react';

const cls1 = {
  fill:'#70CACC'
}
const cls2 = {
  fill:'#70CACC',
  fontSize:188,
  fontFamily:'Times-Roman, Times'
}
export default function Invoice(props){

  return(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 323 421">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <rect style={cls1} width="27" height="421"/>
            <rect style={cls1} y="394" width="323" height="27"/>
            <rect style={cls1} x="299" y="95" width="24" height="326"/>
            <rect style={cls1} x="14" width="215" height="26"/>
            <rect style={cls1} x="200" y="13" width="23" height="107"/>
            <rect style={cls1} x="212" y="95" width="111" height="25"/>
            <rect style={cls1} x="249.25" y="-9.13" width="30" height="135.76" transform="translate(35.85 204.06) rotate(-45)"/>
            <rect style={cls1} x="52" y="292" width="216" height="23"/>
            <rect style={cls1} x="52" y="341" width="216" height="19"/>
            <text style={cls2} transform="translate(88.6 260.29)">€</text>
          </g>
        </g>
      </svg>

  )
}
