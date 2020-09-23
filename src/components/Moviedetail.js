import React from 'react';

const Moviedetail = (props) => {
    let {movie}=props;
    let url=`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`
  return (
    <div className="list-container1">
        
        <div id="image-poster1">
            <img alt="" src={url}></img>
        </div>
        <div id="short-detail">
             <h4>Title : {movie.title}</h4>
             <p>Original Title : {movie.original_title}</p>
             <p>
                 Release date: {movie.release_date}
             </p>
            <p>Status : {movie.status}</p>
            <p>tagline : {movie.tagline}</p>
            <p>Vote count : {movie.vote_count}</p>
            <p>Vote average : {movie.vote_average}</p>
            <p>Revenue : {movie.revenue}</p>
            <p>Popularity : {movie.popularity}</p>
            <p>Budget : {movie.budget}</p>
            <p>Overview : {movie.overview}</p>
            <p>Runtime : {movie.runtime}</p>
        </div>
      
    </div> 
  );
}

export default Moviedetail;