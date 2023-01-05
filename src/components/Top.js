import React from "react";
import Carousel from 'react-bootstrap/Carousel';


//functional component to display energy prices in bootstrap carousel/slider on homepage
//using images stored in images folder
export function Top() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block h- 25 w-100" src={require('../Images/ESBrate.png')}alt="ESBlogo" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-20" src={require('../Images/ENrate.png')}alt="Enlogo" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-20" src={require('../Images/PPrate.png')}alt="PPlogo" />
      </Carousel.Item>
    </Carousel>
  );
}

