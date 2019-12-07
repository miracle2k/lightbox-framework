import * as React from 'react'


export function Button(props) {
  return <button
    type="button"
    className={`LBFButton ${props.className}`}
    onClick={props.onClick}
  >
    {props.children}
  </button>
}

