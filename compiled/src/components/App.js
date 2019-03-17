// import SearchBar from './search.jsx'; 
import SearchBar from './search.js';
import AddMovie from './AddMovie.js';

class App extends React.Component {

  constructor(props) {
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

    this.state = {
      movies: [],
      hidden: []
    };
    this.newMovie = this.newMovie.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
  }

  newMovie(movie) {
    this.setState(state => ({
      movies: [...state.movies, movie],
      hidden: [...state.hidden, movie]
    }));
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
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(SearchBar, { searchMovie: this.searchMovie }),
      React.createElement(AddMovie, { newMovie: this.newMovie }),
      React.createElement(
        'h1',
        null,
        'jason...wake..up...(movielist)'
      ),
      React.createElement(
        'div',
        { className: 'movie-container' },
        React.createElement(
          'ul',
          null,
          this.state.movies.map(movie => React.createElement(
            'li',
            { key: movie },
            movie
          ))
        )
      )
    );
  }
}

// window.App = App;

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwiQWRkTW92aWUiLCJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsImhpZGRlbiIsIm5ld01vdmllIiwiYmluZCIsInNlYXJjaE1vdmllIiwibW92aWUiLCJzZXRTdGF0ZSIsImxpc3QiLCJoaWRkZW5MaXN0IiwiaW5jbHVkZXMiLCJhbGVydCIsInJlbmRlciIsIm1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxPQUFPQSxTQUFQLE1BQXNCLGFBQXRCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixlQUFyQjs7QUFJQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQzs7QUFFbENDLGNBQVlDLEtBQVosRUFBa0I7QUFDaEIsVUFBTUEsS0FBTjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFLQyxLQUFMLEdBQWM7QUFDVkMsY0FBUSxFQURFO0FBRVZDLGNBQVE7QUFGRSxLQUFkO0FBSUUsU0FBS0MsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0Q7O0FBRURELFdBQVNHLEtBQVQsRUFBZTtBQUNiLFNBQUtDLFFBQUwsQ0FBY1AsVUFBVTtBQUN0QkMsY0FBUSxDQUFDLEdBQUdELE1BQU1DLE1BQVYsRUFBa0JLLEtBQWxCLENBRGM7QUFFdEJKLGNBQVEsQ0FBQyxHQUFHRixNQUFNRSxNQUFWLEVBQWtCSSxLQUFsQjtBQUZjLEtBQVYsQ0FBZDtBQUlEOztBQUVERCxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFFBQUlFLE9BQU8sS0FBS1IsS0FBTCxDQUFXQyxNQUF0QjtBQUNBLFFBQUlRLGFBQWEsS0FBS1QsS0FBTCxDQUFXRSxNQUE1QjtBQUNBLFFBQUlNLEtBQUtFLFFBQUwsQ0FBY0osS0FBZCxLQUF3QkcsV0FBV0MsUUFBWCxDQUFvQkosS0FBcEIsQ0FBNUIsRUFBd0Q7QUFDdEQsV0FBS0MsUUFBTCxDQUFjUCxVQUFVO0FBQ3hCQyxnQkFBUSxDQUFDSyxLQUFEO0FBRGdCLE9BQVYsQ0FBZDtBQUdELEtBSkQsTUFJTztBQUNMSyxZQUFNLGdEQUFOO0FBQ0EsV0FBS0osUUFBTCxDQUFjUCxVQUFVO0FBQ3RCQyxnQkFBUVE7QUFEYyxPQUFWLENBQWQ7QUFHRDtBQUVGOztBQUVERyxXQUFRO0FBQ04sV0FDRTtBQUFBO0FBQUE7QUFDRSwwQkFBQyxTQUFELElBQVcsYUFBYSxLQUFLUCxXQUE3QixHQURGO0FBRUUsMEJBQUMsUUFBRCxJQUFVLFVBQVUsS0FBS0YsUUFBekIsR0FGRjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FISjtBQUlNO0FBQUE7QUFBQSxVQUFLLFdBQVUsaUJBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRyxlQUFLSCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JZLEdBQWxCLENBQXVCUCxLQUFELElBQ3ZCO0FBQUE7QUFBQSxjQUFJLEtBQUtBLEtBQVQ7QUFBaUJBO0FBQWpCLFdBREM7QUFESDtBQURGO0FBSk4sS0FERjtBQWFDO0FBOUQrQjs7QUFtRWxDOztBQUVBLGVBQWVYLEdBQWYiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuL3NlYXJjaC5qc3gnOyBcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9zZWFyY2guanMnO1xuaW1wb3J0IEFkZE1vdmllIGZyb20gJy4vQWRkTW92aWUuanMnO1xuXG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuY29uc3RydWN0b3IocHJvcHMpe1xuICBzdXBlcihwcm9wcyk7XG4vLyBpZiB5b3Ugd2FudCB0byBwbGF5IGFycm91bmQgd2l0aCBwcmUtcmVuZGVyZWQgbGlzdCB1c2UgdGhpc1xuLy8gdW5jb21tZW50IHRoZSBzdGF0ZSBiZWxvdywgY29tbWVudCBvdXQgdGhlIHN0YXRlIGZyb20gbGluZXNcbi8vMjQtMjdcbi8vICAgdGhpcy5zdGF0ZSA9ICB7XG4vLyAgICAgbW92aWVzOiBbXG4vLyAgICAgICAgICAgICAnTWFsbCBSYXRzJyxcbi8vICAgICAgICAgICAgICdUZXJtaW5hdG9yIDInLFxuLy8gICAgICAgICAgICAgJ0hlYXQnLFxuLy8gICAgICAgICAgICAgJ01hZCBNYXggRnVyeSBSb2FkJ1xuLy8gICAgICAgICAgICAgXSxcbi8vICAgICBoaWRkZW46IFtdXG4vLyB9O1xuXG50aGlzLnN0YXRlID0gIHtcbiAgICBtb3ZpZXM6IFtdLFxuICAgIGhpZGRlbjogW11cbn07XG4gIHRoaXMubmV3TW92aWUgPSB0aGlzLm5ld01vdmllLmJpbmQodGhpcyk7XG4gIHRoaXMuc2VhcmNoTW92aWUgPSB0aGlzLnNlYXJjaE1vdmllLmJpbmQodGhpcyk7XG59O1xuXG5uZXdNb3ZpZShtb3ZpZSl7ICAgXG4gIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICBtb3ZpZXM6IFsuLi5zdGF0ZS5tb3ZpZXMsIG1vdmllXSxcbiAgICBoaWRkZW46IFsuLi5zdGF0ZS5oaWRkZW4sIG1vdmllXVxuICB9KSlcbn1cblxuc2VhcmNoTW92aWUobW92aWUpIHtcbiAgdmFyIGxpc3QgPSB0aGlzLnN0YXRlLm1vdmllcztcbiAgdmFyIGhpZGRlbkxpc3QgPSB0aGlzLnN0YXRlLmhpZGRlbjtcbiAgaWYgKGxpc3QuaW5jbHVkZXMobW92aWUpIHx8IGhpZGRlbkxpc3QuaW5jbHVkZXMobW92aWUpKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgIG1vdmllczogW21vdmllXVxuICB9KSk7XG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoJ1lvdSBTaWxseSBHb29zZSB0aGF0IE1vdmllIGlzIG5vdCBvbiB5b3VyIGxpc3QnKTtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICBtb3ZpZXM6IGhpZGRlbkxpc3RcbiAgICB9KSk7XG4gIH1cblxufTsgICAgIFxuXG5yZW5kZXIoKXtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFNlYXJjaEJhciBzZWFyY2hNb3ZpZT17dGhpcy5zZWFyY2hNb3ZpZX0vPlxuICAgICAgPEFkZE1vdmllIG5ld01vdmllPXt0aGlzLm5ld01vdmllfSAvPlxuICAgICAgICA8aDE+amFzb24uLi53YWtlLi51cC4uLihtb3ZpZWxpc3QpPC9oMT4gICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWNvbnRhaW5lclwiPiBcbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUubW92aWVzLm1hcCgobW92aWUpID0+IFxuICAgICAgICAgICAgICA8bGkga2V5PXttb3ZpZX0+e21vdmllfTwvbGk+KX0gXG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PiAgXG4gICAgPC9kaXY+XG4gICk7XG4gIH1cbn1cblxuXG5cbi8vIHdpbmRvdy5BcHAgPSBBcHA7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0=