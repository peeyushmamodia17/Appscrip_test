import React from 'react';

const Movielist = (props) => {
    let {movie,handledetail}=props;
    let url=`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`
  return (
    <div>
    <div onClick={handledetail} className="list-container">
        
        <div id="image-poster">
            <img alt="" src={url}></img>
        </div>
        <div id="short-detail">
            <h4>Title : {movie.title}</h4>
            <p>Vote count : {movie.vote_count}</p>
            <p>Release Date : {movie.release_date}</p>
            <button onClick={handledetail} id="but1" value={movie.id}>GetDetail</button>
        </div>
      
    </div> 
    </div>
  );
}

export default Movielist;