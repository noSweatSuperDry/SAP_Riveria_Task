import React, { Component } from "react";
import githubImageSvg , {ReactComponent as GitSvgComponent} from "./resources/Images/zahid.jpg";

class Koti extends Component {
  render() {
    return (
      <div className="homeView">
        <h2>Introduction</h2>
        <img className="imageKoti" alt="Svg from resource" src={githubImageSvg} />
        <p>Currently working as a Software Developer in Ecoaims oy. I am doing my apprenticeship by taking a degree in Information and Communication Technology in Riveria school, Joensuu and working in Ecoaims oy.
        I have been working with JavaScript, Node JS, React-native when working in the company. 
        In my early life, I have an extensive background in Physics. I have two M.Sc. in Physics and Photonics. In M.Sc. Photonics I have designed and analyzed a Micro-grid polarizer as my Thesis work. I have 6 months of working experience in Optical laboratory and clean-room laboratory.
        After graduation, I have also worked in Warehouses inbound and outbound systems of Posti (Post of Finland). I have 2 years of warehouse management experience by hand.</p>
        <div className="imageCards">
        </div>

        <div className="imageCards">
        <p>SVG: New System: Always Import as component.</p>
        
        </div>
        <div className="imageCards">
        <p>PNG: New System: Always Import as component.</p>
        
        </div>
      </div>
    );
  }
}

export default Koti;
