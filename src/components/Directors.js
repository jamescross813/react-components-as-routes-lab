import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
        {directors.map((director)=>(
          <div className="director">
            <h2>{director.name}</h2>
              {director.movies.map((movie)=>(<ul>{movie}</ul>))}
          </div>
        )
        )}
    </div>
  );
}

export default Directors
