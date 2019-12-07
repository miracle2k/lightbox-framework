import * as React from 'react'
import { useState } from 'react'


type Props = {
  items: any[],
  defaultIndex?: number,
  children: any
};


export const CarouselContext = React.createContext(null);
export type CarouselContextType = any;


/**
 * This basically takes the items given as props, and exposes them via a
 * shared context interface, so that the other components such as buttons
 * can be used and re-arranged by you but have access to the images,
 * current image and so on.
 */
export function Carousel(props: Props) {
  const [currentIndex, setCurrentIndex] = useState(props.defaultIndex || 0)

  let contextValue = {
    items: props.items,
    currentItem: props.items[currentIndex],

    isNextActionable: props.items.length > 1,
    isPrevActionable: props.items.length > 1,

    next: () => {
      if (currentIndex+1 >= props.items.length) {
        setCurrentIndex(0);
      }
      else {
        setCurrentIndex(currentIndex+1);
      }
    },

    previous: () => {
      if (currentIndex-1 < 0) {
        setCurrentIndex(props.items.length - 1);
      }
      else {
        setCurrentIndex(currentIndex-1);
      }
    }
  };

  return <div>
    <CarouselContext.Provider value={contextValue}>
      {props.children}
    </CarouselContext.Provider>
  </div>;
}