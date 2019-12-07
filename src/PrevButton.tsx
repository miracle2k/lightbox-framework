import * as React from 'react';
import {Button} from './Button';
import { useContext } from 'react'
import { CarouselContext } from './Carousel'


const ArrowPrevIcon = props => (
  <svg viewBox={`0 0 20 34`} {...props}>
    <path d="M19 3l-2-2L1 17l16 16 1-1L3 17 18 2z" fill="#FFF" />
  </svg>
)


export function PrevButton(props: {}) {
  const context = useContext(CarouselContext);

  if (!context.isPrevActionable) {
    return null;
  }

  const handleClick = (e) => {
    e.stopPropagation();
    context.previous()
  };

  return <Button
    className={'LBFPreviousButton'}
    onClick={handleClick}
  >
    <ArrowPrevIcon />
  </Button>
}
