import * as React from 'react'
import ReactDOM from 'react-dom';
import {Backdrop} from './Backdrop'


type Props = {
  isOpen: boolean,
  children: () => any,
  onBackdropClick?: () => void
}

export function Lightbox(props: Props) {
  if (!props.isOpen) {
    return null;
  }

  let backdrop = <Backdrop
    onClick={props.onBackdropClick}
  >
    {props.children()}
  </Backdrop>;

  return ReactDOM.createPortal(
    backdrop,
    document.body
  );
}