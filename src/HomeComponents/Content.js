import React, { Component } from 'react';
import styles from './Content.css';
import image2 from "../assets/home/img2.jpg";
import image5 from "../assets/home/right.svg";
import image6 from '../assets/home/img5.jpg';
import image7 from '../assets/home/img6.jpg';
class Content extends Component {
    render() {
        return (
            <div>
                <div className="container ml-5" id="container">
                <div className="row">
                <div className="col-md-4" id="div1">
                <img src={image2} className="img-fluid"></img> <label className="figure-caption mt-4" >Designed associated with creativity and grapgics</label>
                <div id="ui-ux"><h4 className="mt-4 figure-caption font-weight-bolder text-dark">UI-UX Design <img src={image5} height='30px' width='30px' ></img></h4></div>
                </div>
                <div className="col-md-4" id="div2">
                <img src={image6} className="img-fluid"></img> <label className="figure-caption mt-4" >Designed associated with creativity and grapgics</label>
                <div id="Branding"><h4 className="mt-4 figure-caption font-weight-bolder text-dark">Branding Idea <img src={image5} height='30px' width='30px'></img></h4></div>
                </div>
                <div className="col-md-4" id="div3">
                <img src={image7} className="img-fluid"></img> <label className="figure-caption mt-4" >Designed associated with creativity and grapgics</label>
                <div id="Natural"><h4 className="mt-4 figure-caption font-weight-bolder text-dark">Natural Food <img src={image5} height='30px' width='30px'></img></h4></div>
                </div>
                </div>
                       
                       
                        
                
                </div>
                </div>
            
        );
    }
}

export default Content;