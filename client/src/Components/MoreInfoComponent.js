import React from "react";
import Header from "./Header";
import "./CarouselComponent.css";



const MoreInfo = () => {
    return ( 
    <>
    <Header/>
        <div class="container">
            <h1>{}</h1>
            <div class="gallery">
                <img src="" alt="" />
            </div>
            <div class="gallery">
                <img src="" alt="" />
            </div>
            <div>
            <section><iframe src='https://solarsystem.nasa.gov/gltf_embed/2387' width='100%' height='450px' frameborder='0' />Section</section>
            </div>
        </div>
    </>    
        
        
     );
}
 
export default MoreInfo;

// Const Link = React.createClass({
//     getInitialState: function(){
//       return {hover: false}
//     },
//     toggleHover: function(){
//       this.setState({hover: !this.state.hover}
//     },
//     render: function() {
//       var linkStyle;
//       if (this.state.hover) {
//         linkStyle = {backgroundColor: 'red'}
//       } else {
//         linkStyle = {backgroundColor: 'blue'}
//       }
//       return(
//         <div>
//           <a style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>Link</a>
//         </div>
//       )
//   }