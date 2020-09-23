import React from 'react';

const Navbar = (props) => {
    const {handleNavbar}=props;
  return (
    <div className="nav">
        <div className="searchbar">
            <input type="search" id="search" placeholder="search a movie"></input>
            <button id="button" onClick={handleNavbar}>Search</button>
        </div>
    </div>
  );
}

export default Navbar;