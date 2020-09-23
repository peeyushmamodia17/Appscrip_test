import React from "react";
import Navbar from "./Navbar";
import Movielist from "./Movielist";
import Moviedetail from "./Moviedetail";

class App extends React.Component {
  constructor() {
    super();
    //its a state
    this.state={
      movielist:[],
      moviedetail:[],
     
    }
  }

  //this function empty the searchlist if no search element get
  emptysearchlist = () =>{
    this.setState({
      movielist: []
    });
  }

  //this function empty the detail if no id is get
  emptydetail=()=>{
    this.setState({
      moviedetail: []
    });
  }

  //this function handle searchbar
 handleNavbar= () => {
      let searchItem= document.getElementById('search').value;
      console.log(searchItem);
      if(searchItem.length===0){
        this.emptysearchlist();
      }
      this.apirequest(searchItem);
  }

 //this function handle to get individual movie detail
  handlemoviedetail=(e)=>{
  
    let id=e.target.value;
    console.log(id);
    if(id){
      this.apirequestbyid(id);
      return;
    }else{
      this.emptydetail();
    }
  }


//this function fetch api by id for getting individual movie detail
  apirequestbyid(id){
    let url=`
    https://api.themoviedb.org/3/movie/${id}?api_key=c340ce9b56b005a778ba3d8b6eeda525&language=en-US`;
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            moviedetail: result
          });
          console.log(this.state.moviedetail);
        },
        (error) => {
          this.setState({
            moviedetail:[],
            error
          });
        }
      )
  }

  //this function fetch api by search term 
  apirequest(searchItem){
    let url=`https://api.themoviedb.org/3/search/movie?api_key=c340ce9b56b005a778ba3d8b6eeda525&language=en-US&query=${searchItem}&page=1&include_adult=false`;   
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            movielist: result.results
          });
          console.log(this.state.movielist);
        },
        (error) => {
          this.setState({
            movielist:[],
            error
          });
        }
      )
  }

//here render app component
  render () {
    const {movielist,moviedetail}=this.state;
    return (
      <div className="App">
        <Navbar handleNavbar={this.handleNavbar}/>
        <div className="movie-component">
          <div className="movie-list">
          {movielist.map((list) => {
            return (
              <Movielist movie={list} handledetail={this.handlemoviedetail}/>
            )
          })}
            
          </div>
          <div className="movie-detail"> 
          {moviedetail.length!=0 ? <Moviedetail movie={moviedetail}/>
                : console.log('Got someone else') }
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;

