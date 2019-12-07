import * as React from 'react'
import './Backdrop.css';


export const Backdrop: React.FunctionComponent<any> = function (props) {
  return <div className={"LBFBackdrop"} {...props}>
    {props.children}
  </div>
}