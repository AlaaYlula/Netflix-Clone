import Movie from '../Movie/Movie'

function MovieList({data}){

   
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