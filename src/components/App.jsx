// import SearchBar from './search.jsx'; 
import SearchBar from './search.js';
import AddMovie from './AddMovie.js';



class App extends React.Component {

constructor(props){
  super(props);
// if you want to play arround with pre-rendered list use this
// uncomment the state below, comment out the state from lines
//24-27
//   this.state =  {
//     movies: [
//             'Mall Rats',
//             'Terminator 2',
//             'Heat',
//             'Mad Max Fury Road'
//             ],
//     hidden: []
// };

this.state =  {
    movies: [],
    hidden: []
};
  this.newMovie = this.newMovie.bind(this);
  this.searchMovie = this.searchMovie.bind(this);
};

newMovie(movie){   
  this.setState(state => ({
    movies: [...state.movies, movie],
    hidden: [...state.hidden, movie]
  }))
}

searchMovie(movie) {
  var list = this.state.movies;
  var hiddenList = this.state.hidden;
  if (list.includes(movie) || hiddenList.includes(movie)) {
    this.setState(state => ({
    movies: [movie]
  }));
  } else {
    alert('You Silly Goose that Movie is not on your list');
    this.setState(state => ({
      movies: hiddenList
    }));
  }

};     

render(){
  return (
    <div>
      <SearchBar searchMovie={this.searchMovie}/>
      <AddMovie newMovie={this.newMovie} />
        <h1>jason...wake..up...(movielist)</h1>   
          <div className="movie-container"> 
            <ul>
              {this.state.movies.map((movie) => 
              <li key={movie}>{movie}</li>)} 
            </ul>
          </div>  
    </div>
  );
  }
}



// window.App = App;

export default App;