import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import image2 from "../assets/home/img2.jpg";
import image6 from '../assets/home/img5.jpg';
import image7 from '../assets/home/img6.jpg';
import './css/Content.css';


class Content extends Component {

    render() {
        return (
            <div>
                <div className="container ml-5 container_margin">
                    <div className="row">

                        <ImageContainer caption={'Designed is associated with creativity and graphics'} image={image2} bottomText={'UI-UX Design'} />
                        <ImageContainer caption={"Branding is associated with creativity and graphics"} image={image6} bottomText={'Branding Idea'} />
                        <ImageContainer caption={'Natural is associated with creativity and graphics'} image={image7} bottomText={'Natural Food'} />
                    </div>
                </div>
            </div>

        );
    }
};



const ImageContainer = (props) => {
    let { caption, image, bottomText } = props;

    return (
        <div className="col-md-4">
            <div className={'image_container'}>
                <img src={image} className="img-fluid" />
                <div className=" figure bottom_left_div">
                    <div className="figure-caption" id="imgTitle">
                        {bottomText}
                        <FontAwesomeIcon icon={faArrowRight} pull="center" size="1x" className="ml-4" />
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