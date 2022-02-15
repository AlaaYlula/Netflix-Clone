import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import '../ModalMovie/ModalMovie'

function ModalMovie({movieInfo, show, handleClose}){
    return(
        <>
        
        <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title className="add">Add To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <h3>{movieInfo.title} Movie</h3>
                    {/* <h4> vote count : {movieInfo.vote_count}</h4> */}

                    <div>
                        <label htmlFor="op">Write Your Opinion</label>
                        <input placeholder="Write Your Opinion" type="text" id="op" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"> Add To Favorite </Button>
                </Modal.Footer>
            </Modal>
        
        </>
    );
}

export default ModalMovie;