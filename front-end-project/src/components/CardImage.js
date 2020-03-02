import React from 'react'

class CardImage extends React.Component {
    render() { 
        const {img} = this.props
        return ( 
            <div>
                <img alt="" src={img}/>
            </div>
         );
    }
}
 
export default CardImage;