import { useContext } from 'react'
import * as React from 'react'
import { CarouselContext } from './Carousel'


type Props = {
  render: (item: any, context: any) => any
};


export function ItemRenderer(props: Props) {
  const context = useContext(CarouselContext);
  return <div>
    {props.render(context!.currentItem, context)}
  </div>;
}