import * as React from 'react';
import {Button} from './Button';


const CloseIcon = props => (
  <svg width={20} height={20} {...props}>
    <path
      d="M1 3l1.25-1.25 7.5 7.5 7.5-7.5L18.5 3 11 10.5l7.5 7.5-1.25 1.25-7.5-7.5-7.5 7.5L1 18l7.5-7.5L1 3z"
      fill="#FFF"
    />
  </svg>
)


export function CloseButton(props: {
  onClick: () => void
}) {
  const {onClick, ...otherProps} = props;
  return <Button
    className={'LBFCloseButton'}
    onClick={onClick}
    {...otherProps}
  >
    <CloseIcon />
  </Button>
}
