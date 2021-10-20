import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={image.webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        onClick={onClick}
        data-img={image.largeImageURL}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
