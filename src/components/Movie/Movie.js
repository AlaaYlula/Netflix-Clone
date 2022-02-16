import ModalMovie from '../ModalMovie/ModalMovie'
import { Button, Container, Row, Card, Col } from 'react-bootstrap';
import {useState } from 'react'

function Movie({ movie },{key}) {

    const [movieInfo, setMovieInfo] = useState({});
    const [show,setShow] = useState(false);

    const handleClose = ()=>setShow(false);

    return (
        <>
            {
                <Container className='div-container'>
                    <Row md={3}>

                        <Col  key={key} md={4}>
                            <Card className='div-card'>
                                <Card.Img className='div-card-img' variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                                <Card.Body>
                                    <Card.Title className='div-card-title'>{movie.title}</Card.Title>
                                    movie overview : {movie.overview}
                                    <br></br>
                                    {/* vote_count : {movie.vote_count}
                                    <br></br>
                                    vote average : {movie.vote_average}
                                    <br></br> */}
                                    release_date : {movie.release_date}
                                    <br></br>
                                    <div>
                                        <Button className='div-card-button' variant="primary" onClick={()=>{
                                                setMovieInfo(movie)
                                                setShow(true);
                                        }}>Add To Favorite</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            }

            {
                <ModalMovie movieInfo={movieInfo} show={show} handleClose={handleClose} />
            }
        </>
    );
}

export default Movie;