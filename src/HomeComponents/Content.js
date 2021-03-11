import React, { Component } from 'react';
import image2 from "../assets/home/img2.jpg";
import image6 from '../assets/home/img5.jpg';
import image7 from '../assets/home/img6.jpg';
import './css/Content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

class Content extends Component {

    render() {
        return (
            <div>
                <div className="container ml-5 container_margin">
                    <div className="row">

                        <ImageContainer caption={'Designed is associated with creativity and graphics'} image={image2} bottomText={'UI-UX Design'} font={<FontAwesomeIcon icon={faArrowRight} pull="center" size="1x" className="ml-4" />} />
                        <ImageContainer caption={"Branding is associated with creativity and graphics"} image={image6} bottomText={'Branding Idea'} font={<FontAwesomeIcon icon={faArrowRight} pull="center" size="1x" className="ml-3"  />} />
                        <ImageContainer caption={'Natural is associated with creativity and graphics'} image={image7} bottomText={'Natural Food'} font={<FontAwesomeIcon icon={faArrowRight} pull="center" size="1x" className="ml-4" />} />
                    </div>
                </div>
            </div>

        );
    }
};

   

const ImageContainer = (props) => {
    let { caption, image, bottomText, font } = props;

    return (
        <div className="col-md-4">
            <div className={'image_container'}>
                <img src={image} className="img-fluid" />
                <div className=" figure bottom_left_div">
                        <div className="figure-caption" id="imgTitle">
                        {bottomText}{font}
                        </div>
                      
                </div>
            </div>
           

            <div className="figure mt-2">
            <label className="figure-caption">{caption}</label>
            </div>
        </div>
    )
}


export default Content;