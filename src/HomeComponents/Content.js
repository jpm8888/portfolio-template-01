import React, {Component} from 'react';
import image2 from "../assets/home/img2.jpg";

class Content extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={image2} height='300px' width='280px'></img> <label>Designed associated with creativity and grapgics</label></div>
                        <div className="col"><img src={image2} height='300px' width='280px'></img><label>Branding is associated with creativity and graphics</label></div>
                        <div className="col"><img src={image2} height='300px' width='280px'></img><label>Natural is associated with creativity and graphics</label></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;