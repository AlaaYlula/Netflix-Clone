import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import '../ModalMovie/ModalMovie'
import axios from 'axios';
import {useRef} from 'react';

function ModalMovie({movieInfo, show, handleClose}){
    const commentInputRef = useRef("");

   // title, readyInMinutes, summary, vegetarian, instructions, sourceUrl, image, comment

    const addToFav = async ()=>{
        let comment = commentInputRef.current.value;
       let fav = {title:movieInfo.title,release_date:movieInfo.release_date ,vote_count:movieInfo.vote_count,poster_path:movieInfo.poster_path,overview:movieInfo.overview,comments:comment}
      
       await axios.post(`${process.env.REACT_APP_BASE_URL}addMovie`,fav)
                  .then(()=>{
                      console.log("Done :) ");
                  }).catch((err)=>{
                      console.log(err);
                  });
  
   }
    return(
        <>
        
        <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title className="add">Add To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <h3>{movieInfo.title} Movie</h3>
                    <div>
                        <label htmlFor="op">Write Your Opinion</label>
                        <input ref={commentInputRef} placeholder="Write Your Opinion" type="text" id="op" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"
                    onClick={()=>{
                        addToFav();
                        handleClose();
                     }}
                    > Add To Favorite </Button>
                </Modal.Footer>
            </Modal>
        
        </>
    );
}

export default ModalMovie;