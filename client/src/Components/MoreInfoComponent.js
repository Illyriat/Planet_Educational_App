import React from "react";
import Header from "../Components/Header";
import "./CarouselComponent.css";




const MoreInfo = () => {
    return ( 
    <>
    <Header/>
        <div class="container">
            <h1>Saturn</h1>
            
            <iframe src='https://solarsystem.nasa.gov/gltf_embed/2354' width='35%' height='450px' frameborder='0' />
            
            
            <iframe src='https://solarsystem.nasa.gov/gltf_embed/2347' width='35%' height='450px' frameborder='0' />
            
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