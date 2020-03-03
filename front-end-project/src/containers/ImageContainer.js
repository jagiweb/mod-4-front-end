import React, { Fragment } from 'react';
import CardImage from "../components/CardImage";

class ImageContainer extends React.Component {

    renderAllimages(){
        return this.props.images.map(image => <CardImage key={image.id} img={image.largeImageURL}/>)
    }
    render() { 

        // console.log(this.props.images)
        return ( 
            <Fragment>
                {this.renderAllimages()}
            </Fragment>
         )
    }
}
 
export default ImageContainer;