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
                        <ImageContainer caption={'Designed associated with creativity and graphics1'} image={image2} bottomText={'Hello1'} />
                        <ImageContainer caption={'Designed associated with creativity and graphics2'} image={image6} bottomText={'Hello2'} />
                        <ImageContainer caption={'Designed associated with creativity and graphics3'} image={image7} bottomText={'Hello3'} />
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
                <div className="bottom_left_div">
                    {bottomText}
                </div>
            </div>
            <label className="figure-caption mt-4">{caption}</label>

            {/* <div id="ui-ux">
                <h4 className="mt-4 figure-caption font-weight-bolder text-dark">UI-UX Design<img src={image} height='30px' width='30px'></img></h4>
            </div> */}
        </div>
    )
}


export default Content;