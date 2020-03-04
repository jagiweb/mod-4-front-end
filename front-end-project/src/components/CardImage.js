import React from 'react'
import '../CardImage.css'

class CardImage extends React.Component {
  render() {
    const { img } = this.props
    return (
      
        <div className='item'>
          <img alt="" src={img} />
        </div>
    );
  }
}

export default CardImage;