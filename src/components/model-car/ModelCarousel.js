import React, { useState, useEffect} from "react";

// Components
import CarouselResponsive from './CarouselResponsive';

function ModelCarousel (props) {
    const features = props.features;
    const linkAPI = props.linkAPI;

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      console.log(width)

      /* Remove event useEffect*/
      return () => window.removeEventListener("resize", handleWindowResize);
    });

    const carouselResponsive = () => {
      switch(true){
        case (width >= 992):
          return <CarouselResponsive linkAPI={linkAPI} features={features} size={'lg'} />
        case (width <= 992 && width >= 768):
          return <CarouselResponsive linkAPI={linkAPI} features={features} size={'md'} />
        case (width <= 768):
          return <CarouselResponsive linkAPI={linkAPI} features={features} size={'xs'} />
        default: 
          return 'Carousel not avialable'
      }
    }

  return (
    carouselResponsive()
  );
}

export default ModelCarousel;
