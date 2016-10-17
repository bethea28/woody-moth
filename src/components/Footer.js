import React from 'react';


var slogan={
     fontFamily:"papyrus",
     fontSize:20,
  // writingMode: "tb-rl",
  position:'relative',
  // right:350,
  // transform: "rotate(270deg)",
  // lineHeight:3,
  color:'hsl(57, 79%, 37%)'

}

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="footer-basic-centered navbar-bottom">

			<p style ={slogan} className="footer-company-motto">if you WOOD...you could!.</p>

			<p className="footer-links">
				<a href="#">Warrenty</a>
				<br/>
				<a href="#">Faq</a>
        <br/>
				<a href="#">Contact</a>
			</p>

			<p className="footer-company-name">The Moth Brand &copy; 2015</p>

		</footer>
    )
  }
})

export default Footer;
