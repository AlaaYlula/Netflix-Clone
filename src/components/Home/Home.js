import MovieList from '../MovieList/MovieList'
import axios from 'axios';
import {useState , useEffect} from 'react'
function Home(){
    const [data,setData]=useState([])
    
    const getAllMovies = async() =>{

        return await axios.get(`${process.env.REACT_APP_BASE_URL}trending`)
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
        
        <MovieList data={data}/>
      
        </>
    );
}

export default Home;