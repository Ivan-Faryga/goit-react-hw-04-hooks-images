import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, onClick }) => {
  // console.log(images);
  return (
    <ul className="ImageGallery">
      {images.map((image) => (
        <ImageGalleryItem image={image} key={image.id} onClick={onClick} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  // image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
