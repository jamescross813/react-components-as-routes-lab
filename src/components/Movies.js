import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
       <h1>Movies Page</h1>
       {movies.map((movie)=>(
         <div>
           <h2>{movie.title}</h2>
           <p>{movie.time}</p>
           {movie.genres.map((genre)=>(
             <ul>{genre}</ul>
           )
           )}
         </div>
       ))}
    </div>
  );
};

export default Movies;
