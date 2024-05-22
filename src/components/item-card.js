import React from 'react'

import PropTypes from 'prop-types'

import './item-card.css'

const ItemCard = (props) => {
 
  const handleButtonClick = () => {
  
    window.open('https://wa.me/919030000010/?text=', '_blank');
  };
  return (
    <div className={`item-card-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="item-card-image"
      />
      <div className="item-card-container">
        <h3 className="item-card-text">{props.name}</h3>
        <div className="item-card-container2">
          <div className="home-btn-group">
                  <button className="button_cat btn-slide_cat" onClick={handleButtonClick}>Enquiry</button>
                </div>
        </div>
      </div>
    </div>
  )
}

ItemCard.defaultProps = {
  name: 'Project Title',
  imageSrc:
    'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTYyNjQ0OTIzNQ&ixlib=rb-1.2.1&w=1500',
  imageAlt: 'image',
  currency: '₹',
  value: '429',
  rootClassName: '',
}

ItemCard.propTypes = {
  name: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  currency: PropTypes.string,
  value: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ItemCard
