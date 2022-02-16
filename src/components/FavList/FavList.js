import axios from 'axios';
import { Button, Container, Row, Card, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import UpdateModal from './UpdateFav/UpdateModal'

function FavList() {

    const [data, setData] = useState([]);

    const [show,setShow] = useState(false);
    const [movie,setEle] = useState({});

    const [comment,setCommentInput] = useState("");

    const handleClose = ()=> setShow(false);


    const getFavMovies = async () => {
        // await // here the thing that will happen (fetching from API or getting from database )
        return await axios.get(`${process.env.REACT_APP_BASE_URL}getMovies`)
            .then(result => {
                console.log(result.data);
                setData(result.data);
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(()=>{
        getFavMovies();
   },[]);

   const deleteFromFav = async(id) =>{
    await axios.delete(`${process.env.REACT_APP_BASE_URL}DELETE/${id}`)
               .then(()=>{
                   console.log("deleted :(")
                  getFavMovies();
               }).catch((err)=>{
                   console.log(err);
               })
} 

    return (
        <>


            <Container className='div-container'>
                <Row md={3}>
                    {
                        data.length && data.map((movie) => (
                            <Col key={movie.id} md={4}>
                                <Card className='div-card'>
                                    <Card.Img className='div-card-img' variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                                    <Card.Body>
                                        <Card.Title className='div-card-title'>{movie.title}</Card.Title>
                                        <Card.Text >comment : {movie.comments}</Card.Text>

                                        <div>
                                            {/* <Button className='div-card-button' variant="primary" >Update</Button>
                                    <Button className='div-card-button' variant="danger" >Delete</Button> */}
                                            <Button className='div-card-button' variant="primary"
                                                onClick={() => {
                                                    setShow(true)
                                                    setEle(movie);
                                                    setCommentInput(movie.comments);
                                                }}
                                            >Update</Button>
                                            <Button className='div-card-button' variant="danger"
                                                onClick={() => deleteFromFav(movie.id)}
                                            >Delete</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
     </Container>

     {
        !data.length && <div><h2>No Such Results, Please try again later</h2></div>
    }

    {
      <UpdateModal show={show} handleClose={handleClose} movie={movie} getFavMovies={getFavMovies}
      
      commentInput = {comment}
      setCommentInput ={setCommentInput}
      
      /> 
    }
        </>
    );

}

export default FavList;