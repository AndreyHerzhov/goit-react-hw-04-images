import { ListItem, ListItemImage } from "./ImageGalleryItem.styled"
import PropTypes from "prop-types"

export const ImageGaleryItem = ( {picture, desciption, id, showLargeImg}) => {
    return (
        <ListItem> 
            <ListItemImage id={id} src={picture} alt={desciption} onClick={showLargeImg}/>
        </ListItem>
    );
  };
  
  ImageGaleryItem.propTypes = {
        picture: PropTypes.string.isRequired,
        desciption: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        showLargeImg: PropTypes.func,
 };
 


