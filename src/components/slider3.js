import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './slider2.css';

export default class Slider3 extends Component {
    render() {
        return (
            <Carousel className="containerCarousel">
                <div>
                    <img src="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}
