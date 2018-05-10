import React from 'react';

const cls1 = {
  fill:'#f05256'
}
const cls2 = {
  fill:'#ee3136'
}
const cls3 = {
  fill:'#fff'
}

export default function Location(props){

  return(

    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.26 118">
      <path style={cls1} d="M297.53,362l-.09,118s-3.24-.77-4.52-2.3-31.69-60.83-32.55-63.64-6.82-25.82,6.3-38.42S297.53,362,297.53,362Z" transform="translate(-258.29 -362)"/>
      <path style={cls2} d="M297.31,362l.09,118s3.24-.77,4.52-2.3,31.69-60.83,32.55-63.64,6.82-25.82-6.3-38.42S297.31,362,297.31,362Z" transform="translate(-258.29 -362)"/>
      <circle style={cls3} cx="39.13" cy="38.98" r="20.66"/>
    </svg>

  )
}
