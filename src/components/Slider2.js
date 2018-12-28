import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import {Icon} from 'react-ionicons';
import IosArrowDropleft from 'react-ionicons/lib/IosArrowDropleft';
import IosArrowDropright from 'react-ionicons/lib/IosArrowDropright';
import './slider2.css';

export default class Slider2 extends Component {

  constructor(){
    super();

    this.state = {
      images: [
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
      ],
      imageCount: 0,
      currentImage:undefined
    }

    this.previousImage = this.previousImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
  }

  componentDidMount(){
    var count = this.state.imageCount;
    var image = this.state.images[count];
    this.setState({imageCount: 0, currentImage: image});
  }

  nextImage(){
    if(this.state.imageCount < 7){
      var count = this.state.imageCount;
      var image = this.state.images[count+1];
      this.setState({imageCount: count+1, currentImage: image});
    }else{
      var count = -1;
      var image = this.state.images[count+1];
      this.setState({imageCount: count+1, currentImage: image});
    }
  }

  previousImage(){
    if(this.state.imageCount > 0){
      var count = this.state.imageCount;
      var image = this.state.images[count-1];
      this.setState({imageCount: count-1, currentImage: image});
    }else{
      var count = 8;
      var image = this.state.images[count-1];
      this.setState({imageCount: count-1, currentImage: image});
    }
  }


  render() {
    return (
      <div>
          <h1> this is slider 2</h1>
          <div>
            <div className="leftBtn">
              <IosArrowDropleft  onClick={this.previousImage} fontSize="60px" color="#43853d" />
            </div>
            <div className="rightBtn">
              <IosArrowDropright  onClick={this.nextImage} fontSize="60px" color="#43853d" />
            </div>
          </div>
          <img className="slide" id="slideImage" name="slide" height="500" width="1000" alt="" src={this.state.currentImage}/>
      </div>
    );
  }
}

// export default App;
