import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

    console.log(mappedCarouselImages)

    return (

        <div className="carousel-container">
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={handleSelect}>


                {mappedCarouselImages}

                {/* <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={mappedCarouselImages}
                        alt="Second slide"
                    />
                </Carousel.Item> */}

                {/* <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../assets/images/carousel/2.jpeg')}
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}


                {/* <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../assets/images/carousel/4.jpeg')}
                        alt="Third slide"
                    />
                </Carousel.Item> */}

            </Carousel>
        </div>

    )
};

export default ControlledCarousel;