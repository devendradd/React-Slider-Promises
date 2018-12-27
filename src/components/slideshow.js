import React, {Component} from 'react';
import $ from 'jquery';

export default class Slider extends Component{
    constructor(){
        super();        
    }

    async loadImages(){

        var images = [];

        //image array
        images[0] = "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg";
        images[1]="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg";
        images[2]="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg";
        images[3]="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg";
        images[4]="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg";
        images[5]="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg";
        images[6]="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg";
        images[7]="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg";
            
            document.slide.src = images[0]; // show first image by default 
            
            for(var n = 1 ; n <= images.length; n++){
                
                //used promise because we want setTimout() to wait till it gets executed before it goes to second one
                let promise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(document.slide.src = images[n]); //directly attach the image to src property of image tag,
                        // we have discovered the image tag src value using document.slide object                                            
                    }, 5000);                                        
                });
                
                $('.slide').fadeIn(2500);// fade in for half of the time i.e. 2500 miliseconds
                $('.slide').fadeOut(2500);// fade out for half of the time i.e. 2500 miliseconds

                let result = await promise; // wait till the promise gets really resolves
                
                console.log("result is : ", result);
                    
                    if(n == images.length-1){ //check if the value of n in for loop has become 7 i.e. images.length-1
                        console.log("here");
                        n =  -1; //assigned -1 because when last element gets executed the value of n becomes 1 instead of 0.
                                 // we want to start it with 0 because the slider should re-initialize to 0 to start all over again with first image. 
                        console.log("value of n is : ", n);
                    }
                    
            }
    }



    render(){
        window.onload = this.loadImages;
        // $("#slideImage").fadeIn();
        return(
            <div className="sliderDiv">
                <img className="slide" id="slideImage" name="slide" height="500" width="1000" alt=""/>                
            </div>
        )
    }
}