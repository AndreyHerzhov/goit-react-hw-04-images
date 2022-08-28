import React, { useState, useEffect } from "react";
import   SearchBar  from "./Searchbar/Searchbar";
import PhotoApiService from "components/services/picture-api";
import { ImageGalery } from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";
import { Button } from "./Button/Button";
import Notiflix from 'notiflix';
 

const photoApiService = new PhotoApiService()

export default function App({id}) {

  const [input, setInput] = useState('')
  const [pictures, setPictures] = useState([])
  const [modal, setModal] = useState(false)
  const [src, setSrc] = useState('')
  const [page, setPage] = useState(1)

  const handleFormSubmit = input => {
    Notiflix.Loading.hourglass({
      cssAnimation: true,
      cssAnimationDuration: 3000,
      svgSize: '150px',
    });
    setInput(input)
    setPage(1)
    setPictures([])
    Notiflix.Loading.remove();
    }

    useEffect(() => {
      console.log(input)
      console.log(page)
      photoApiService.query = input
      photoApiService.page =  page
      photoApiService.fetchPhotos()
      .then(data =>  
         
        setPictures(() => [...pictures,...data.hits.flatMap(el => [
              { id: el.id, webformatURL: el.webformatURL,
                largeImageURL: el.largeImageURL,
                tags: el.tags}])] )
      
      )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ input, page] )
    
    const toggleModal = (e) => {
      setModal(!modal)
    }

   const handleClick = (e) => {
      Notiflix.Loading.hourglass({
        cssAnimation: true,
        cssAnimationDuration: 3000,
        svgSize: '150px',
      });
      const pictureId = Number(e.currentTarget.id)
      const imageToOpen =  pictures 
      const img = imageToOpen.find(option => option.id === pictureId);
      const largeImageUrl = img.largeImageURL
      setModal(!modal)
      setSrc(largeImageUrl)
      Notiflix.Loading.remove();
    }

    const loadMore = (e) => {
      Notiflix.Loading.hourglass({
        cssAnimation: true,
        cssAnimationDuration: 3000,
        svgSize: '150px',
      })
      setPage(page + 1)
      Notiflix.Loading.remove();
    }



  return (
    <div>
      <SearchBar onSubmit={handleFormSubmit}/>
      {pictures.length > 0 && 
      <ImageGalery pictures={pictures}  showLargeImg={handleClick}/> }
      {pictures.length > 1 && <Button title="Load more" loadMore={loadMore}/>}
      {modal && 
      <Modal 
          src={src} 
          alt='Alternative'
          onClose={toggleModal}
          />}
           
      
    </div>
  )
}

// export class App extends Component {
  
//   state = {
//     inputValue: '',
//     pictures: [],
//     showModal: false,
//     src: '',
//     page: 1
//   }
 
//  handleFormSubmit = inputValue => {
//   Notiflix.Loading.hourglass({
//     cssAnimation: true,
//     cssAnimationDuration: 3000,
//     svgSize: '150px',
//   });
//     this.setState({
//       inputValue: inputValue,
//       page: 1,
//       pictures: []
      
//     })
//    Notiflix.Loading.remove();
//   }

//   componentDidUpdate = (prevProps, prevState) => {
//    if(prevState.page !== this.state.page || prevState.inputValue !== this.state.inputValue){
//     photoApiService.query = this.state.inputValue
//     photoApiService.page = this.state.page
//      photoApiService.fetchPhotos()
//     .then(data => 
//       this.setState({
//           pictures: [...this.state.pictures,...data.hits.flatMap(el => [
//             {id: el.id, webformatURL: el.webformatURL,
//                largeImageURL: el.largeImageURL,
//               tags: el.tags}])] 
//         }) 
//       )
//     } 
//   }
  

//   toggleModal = (e) => {
//     this.setState(({showModal}) => ({
//       showModal: !showModal
//     }))
//   }
 
//   handleClick = (e) => {
//     Notiflix.Loading.hourglass({
      
//       cssAnimation: true,
//       cssAnimationDuration: 3000,
//       svgSize: '150px',
//     });
//     const pictureId = Number(e.currentTarget.id)
//     const imageToOpen = this.state.pictures 
//     const img = imageToOpen.find(option => option.id === pictureId);
//     const largeImageUrl = img.largeImageURL
//     this.setState(({showModal}) => ({
//       showModal: !showModal,
//       src: largeImageUrl
//     }))
//     Notiflix.Loading.remove();
//   }
  

//   loadMore = (e) => {
//     Notiflix.Loading.hourglass({
//       cssAnimation: true,
//       cssAnimationDuration: 3000,
//       svgSize: '150px',
//     });
//     this.setState(prevState => ({
//       page: prevState.page + 1
//     }))
    
//     Notiflix.Loading.remove();
//   }

  
 
  
//   render() {
//     const { pictures, src } = this.state
     
//     return (
//       <div>
//         <SearchBar onSubmit={this.handleFormSubmit}/>
//         {this.state.pictures.length > 0 && 
//         <ImageGalery pictures={pictures}  showLargeImg={this.handleClick}/> }
//         {this.state.pictures.length > 1 && <Button title="Load more" loadMore={this.loadMore}/>}
//         {this.state.showModal && 
//         <Modal 
//             src={src} 
//             alt='Alternative'
//             onClose={this.toggleModal}
//             />}
             
        
//       </div>
//     )
//   }
  
// }

 
