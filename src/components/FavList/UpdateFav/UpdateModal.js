import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';

function UpdateModal( {show,handleClose,movie,getFavMovies,
    commentInput,
    setCommentInput
}){    

    const update = async(id)=>{

        let updated = {title:movie.title,relase_data:movie.relase_data ,vote_count:movie.vote_count,poster_path:movie.poster_path,overview:movie.overview,comments:commentInput}
        
      await axios.put(`${process.env.REACT_APP_BASE_URL}UPDATE/${id}`,updated)
                  .then(()=>{
                    getFavMovies();
                  }).catch(err=>{
                      console.log(err);
                  })
    }
     

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add It To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    
                    <div>
                        <label htmlFor="op">Write Your Opinion</label>
                        <textarea value={commentInput} onChange={(e) => setCommentInput(e.target.value)} placeholder="Write Your Opinion" type="text" id="op" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"
                     onClick={()=>{
                        update(movie.id);
                        handleClose();
                     }}
                    >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateModal;