import React, { Component } from "react";
//old school import
// import githubImagePng from "./resources/Images/github.png";
// import githubImageJpg from "./resources/Images/github.jpg";
import githubImagePng from "./resources/Images/github.png"
import githubImageSvg , {ReactComponent as GitSvgComponent} from "./resources/Images/github.svg";
class Koti extends Component {
  render() {
    return (
      <div className="homeView">
        <h2>Hello</h2>
        <div className="imageCards">
        <p>SVG: Old System: Import image file from resources folder. </p>
        <img className="imageKoti" alt="Svg from resource" src={githubImageSvg} />
        </div>
        <div className="imageCards">
        <p>SVG: New System: Always Import as component.</p>
        <GitSvgComponent className="imageKoti"/>
        </div>
        <div className="imageCards">
        <p>PNG: New System: Always Import as component.</p>
        <img className="imageKoti" alt="Png componet" src={githubImagePng}/>
        </div>
      </div>
    );
  }
}

export default Koti;
