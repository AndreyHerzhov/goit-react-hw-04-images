import { ImageGalleryList } from "./ImageGallery.styled";
import { ImageGaleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types"
 

export const ImageGalery = ({pictures, onClick, showLargeImg}) => {
    return (
        <ImageGalleryList onClick={onClick}> 
           {pictures.map(el => {
            return (
            <ImageGaleryItem 
                      id={el.id}
                      picture={el.webformatURL} 
                      desciption={el.tags} 
                      key={el.id}
                      showLargeImg={showLargeImg}
                      />

          )})}
        </ImageGalleryList>
    );
  };
  
 
  ImageGalery.propTypes = {
    pictures: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        tags: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired
      })
    ),
     showLargeImg: PropTypes.func.isRequired,
  };
  