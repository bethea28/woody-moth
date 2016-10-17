'use strict'
import $ from 'jquery'
import React from 'react'
import {ApSlideshow, ApSpinnerStyle, ApSlideshowStyle} from 'apeman-react-slideshow'
var Carousel = require('nuka-carousel');


var imgStyle = {
	// display:"inline",
	// position:"relative",
	// borderRadius:10,
	// right: -650,
	// top:-15
	maxWidth:750,
	// overflow: 'hidden'
  position:'relative',
	margin: 'auto',
  bottom:30

}
var imgBack={
	
	height: "auto",
  // transform:'rotate(10deg)',
  // borderRadius:5,
  borderColor:"black", 
  backgroundPosition: "left center",
  backgroundRepeat:'repeat-x',
  backgroundRadius:30,
} 

var img ={
  borderRadius:200, 
   borderWidth:5, 
    borderStyle:"groove"
}
 
 var title={
   fontFamily:"newRoman",
   fontSize:80,
   fontSize:80,
   position:'relative',
   


}

var slogan={
     fontFamily:"papyrus",
     fontSize:60,
  // writingMode: "tb-rl",
  position:'relative',
  // right:350,
  // transform: "rotate(270deg)",
  // lineHeight:3,
  color:'hsl(57, 79%, 37%)'

}
var span ={
  color:'black'
}

 
var look ={
   fontFamily:"papyrus",
  color:"black",
  fontSize:50

}

   
  const LookBookPage = React.createClass({
    mixins: [Carousel.ControllerMixin],
   
    shouldComponentUpdate(nextProps, nextState) {
      return shallowCompare(this, nextProps, nextState);
  },

    setHeight: function(){
      slidesToScroll: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.oneOf(['auto'])
  ])
  

  },


  render() {
    return (
      <div >
         <center><h1 style = {title}> Woody Moth</h1></center> 
        <div style={imgBack}>
        </div>
        <br/>
        <br/>
        <br/>

   	<div >
      <Carousel slideWidtht={200}   style={imgStyle}>
        <img style = {img} src="http://i.imgur.com/7p2qzE1.jpg"/>
        <img style={img} src="http://i.imgur.com/4xjionq.jpg"/>
        <img style={img} src="http://i.imgur.com/Wn2RyeC.jpg"/>
        <img style={img} src="http://i.imgur.com/oTinMm5.jpg"/>
        <img style={img} src="http://i.imgur.com/7FggW7n.jpg"/>
        <img style={img} src="http://i.imgur.com/OuweeYh.jpg"/>
        <img style={img} src="http://i.imgur.com/Kc96idf.jpg"/>
      </Carousel>
      <div style= {imgBack}>
       
      
     
       
        

       </div>
    </div>
    <center><h1 style={look}> Look Book! </h1></center>
  </div>
    )
  }
});



  // .carousel-inner > .item > img,
  // .carousel-inner > .item > a > img {
  //     width: 70%;
  //     height:30%;
  //     margin:auto;
  // }

// var LookBookPage = React.createClass({
//   render:function(){
//     return (
//         <div>
//           <div id="myCarousel" className="carousel slide" data-ride="carousel">

//             <ol className="carousel-indicators">
//               <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
//               <li data-target="#myCarousel" data-slide-to="1"></li>
//               <li data-target="#myCarousel" data-slide-to="2"></li>
//               <li data-target="#myCarousel" data-slide-to="3"></li>
//             </ol>


//             <div className="carousel-inner" role="listbox">
//               <div className="item active">
//                 <img src="img_chania.jpg" alt="Chania"/>
//                 <div className="carousel-caption">
//                   <h3>Chania</h3>
//                   <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
//                 </div>
//               </div>

//               <div className="item">
//                 <img src="http://i.imgur.com/LPYCSKC.png" alt="Chania"/>
//                 <div className="carousel-caption">
//                   <h3>Chania</h3>
//                   <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
//                 </div>
//               </div>

//               <div className="item">
//                 <img src="http://i.imgur.com/LPYCSKC.png" alt="Flower"/>
//                 <div className="carousel-caption">
//                   <h3>Flowers</h3>
//                   <p>Beatiful flowers in Kolymbari, Crete.</p>
//                 </div>
//               </div>

//               <div className="item">
//                 <img src="http://i.imgur.com/LPYCSKC.png" alt="Flower"/>
//                 <div className="carousel-caption">
//                   <h3>Flowers</h3>
//                   <p>Beatiful flowers in Kolymbari, Crete.</p>
//                 </div>
//               </div>
//             </div>


//             <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
//               <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
//               <span className="sr-only">Previous</span>
//             </a>
//             <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
//               <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
//               <span className="sr-only">Next</span>
//             </a>
//           </div>
//         </div>

//       )
//     }
// })

export default LookBookPage