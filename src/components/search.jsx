class SearchBar extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          value: ''            
      }
      this.handleSearchChange = this.handleSearchChange.bind(this);
      this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    
  }

  handleSearchChange(event) {
      this.setState({value: event.target.value });
      
  }

  handleSearchSubmit(event) {
      event.preventDefault();
      this.props.searchMovie(this.state.value);
  }


  
  render(){
    return (
        <form onSubmit={this.handleSearchSubmit}>
        <label>
            Search:
            <input name="searchMovie" type="text" value={this.state.value} onChange={this.handleSearchChange} />
        </label>
        <input type="Submit"  />
    </form>   
    );
  }
}

export default SearchBar;


