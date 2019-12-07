import * as React from 'react';
import {Button} from './Button';
import { useContext } from 'react'
import { CarouselContext } from './Carousel'


const ArrowNextIcon = props => (
  <svg viewBox="0 0 20 34" {...props}>
    <path d="M1 3l2-2 16 16L3 33l-1-1 15-15L2 2z" fill="#FFF" />
  </svg>
)


export function NextButton(props: {}) {
  const context = useContext(CarouselContext);

  if (!context.isNextActionable) {
    return null;
  }

  const handleClick = (e) => {
    e.stopPropagation();
    context.next()
  };

  return <Button
    className={'LBFNextButton'}
    onClick={handleClick}
  >
    <ArrowNextIcon />
  </Button>
}
