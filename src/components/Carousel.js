import React from "react";

import Carousel from 'react-bootstrap/Carousel'


const ControlledCarousel = (props) => {
    const [index, setIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    }

    let mappedCarouselImages = Object(props.carouselImg)
        .map(image => {
            console.log(image)
            return <Carousel.Item
                key={image}>
                <img
                    className="d-block w-100"
                    src={image}
                />
            </Carousel.Item>

        })


    return (

        <div className="carousel-container">
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={handleSelect}>

                {mappedCarouselImages}

            </Carousel>
        </div>

    )
};

export default ControlledCarousel;