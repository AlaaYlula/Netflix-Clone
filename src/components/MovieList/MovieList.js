import Movie from '../Movie/Movie'
import axios from 'axios';
import {useState , useEffect} from 'react'
function MovieList(){

    const [data,setData]=useState([])
    
    const getAllMovies = async() =>{

        return await axios.get(`${process.env.REACT_APP_BASE_URL}/trending`)
                          .then(result =>{
                                return result.data
                          }).catch((err) =>{
                                console.log(err)
                          });
    }

//  useEffect(() => {
//     void(async()=>{
//         let data = await getAllMovies();
//         setData(data);
//     })();

//   },[]);
 useEffect(() => {
     const getdata = async () => {
        let data = await getAllMovies();
        setData(data);
     }
       getdata();
    },[]);

  

    return(
        <>
        
        {
        data.length && data.map((movie)=>{
            return(
            <Movie movie={movie} key={movie.id} />
            );
        })}
        {
            !data.length && <div><h2>No Such Results, Please try again later</h2></div>
        }
        
        
        </>
    );
}

export default MovieList;