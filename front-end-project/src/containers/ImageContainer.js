import React, { Fragment } from 'react';
import CardImage from "../components/CardImage";
import '../CardImage.css'


class ImageContainer extends React.Component {


  
    renderAllimages(){
        return this.props.images.map(image => <CardImage key={image.id} img={image.largeImageURL}/>)
    }

    render() {  

        return ( 
            <div className='grid'>
                {this.renderAllimages()}
            </div>
         )
    }
}
 
export default ImageContainer;