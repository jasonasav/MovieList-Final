class AddMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleMovieChange = this.handleMovieChange.bind(this);
        this.handleMovieSubmit = this.handleMovieSubmit.bind(this);
    }

    handleMovieChange(event) {
        //   this.props.handleSearchChange(event.target.value);
        this.setState({ value: event.target.value });

        console.log(this.props);
    }

    handleMovieSubmit(event) {
        // alert('Added: ' + this.state.value);
        event.preventDefault();
        this.props.newMovie(this.state.value);
        // event.preventDefault();

        //this.props.newMovie(this.state.value);
    }

    render() {
        return React.createElement(
            "form",
            { onSubmit: this.handleMovieSubmit },
            React.createElement(
                "label",
                null,
                "Add Movie:",
                React.createElement("input", { name: "newMovie", type: "text", value: this.state.value, onChange: this.handleMovieChange })
            ),
            React.createElement("input", { type: "submit" })
        );
    }
}

export default AddMovie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FkZE1vdmllLmpzeCJdLCJuYW1lcyI6WyJBZGRNb3ZpZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJoYW5kbGVNb3ZpZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVNb3ZpZVN1Ym1pdCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJuZXdNb3ZpZSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsUUFBTixTQUF1QkMsTUFBTUMsU0FBN0IsQ0FBdUM7QUFDbkNDLGdCQUFZQyxLQUFaLEVBQWtCO0FBQ2QsY0FBTUEsS0FBTjtBQUNBLGFBQUtDLEtBQUwsR0FBYTtBQUNUQyxtQkFBTztBQURFLFNBQWI7O0FBSUEsYUFBS0MsaUJBQUwsR0FBeUIsS0FBS0EsaUJBQUwsQ0FBdUJDLElBQXZCLENBQTRCLElBQTVCLENBQXpCO0FBQ0EsYUFBS0MsaUJBQUwsR0FBeUIsS0FBS0EsaUJBQUwsQ0FBdUJELElBQXZCLENBQTRCLElBQTVCLENBQXpCO0FBQ0Q7O0FBSUxELHNCQUFrQkcsS0FBbEIsRUFBeUI7QUFDdkI7QUFDRSxhQUFLQyxRQUFMLENBQWMsRUFBQ0wsT0FBT0ksTUFBTUUsTUFBTixDQUFhTixLQUFyQixFQUFkOztBQUVBTyxnQkFBUUMsR0FBUixDQUFZLEtBQUtWLEtBQWpCO0FBQ0g7O0FBRURLLHNCQUFrQkMsS0FBbEIsRUFBeUI7QUFDckI7QUFDQUEsY0FBTUssY0FBTjtBQUNBLGFBQUtYLEtBQUwsQ0FBV1ksUUFBWCxDQUFvQixLQUFLWCxLQUFMLENBQVdDLEtBQS9CO0FBQ0E7O0FBRUE7QUFDSDs7QUFHQ1csYUFBUTtBQUNOLGVBQ0k7QUFBQTtBQUFBLGNBQU0sVUFBVSxLQUFLUixpQkFBckI7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVJLCtDQUFPLE1BQUssVUFBWixFQUF1QixNQUFLLE1BQTVCLEVBQW1DLE9BQU8sS0FBS0osS0FBTCxDQUFXQyxLQUFyRCxFQUE0RCxVQUFVLEtBQUtDLGlCQUEzRTtBQUZKLGFBREE7QUFLQSwyQ0FBTyxNQUFLLFFBQVo7QUFMQSxTQURKO0FBU0Q7QUF4Q2tDOztBQTJDckMsZUFBZVAsUUFBZiIsImZpbGUiOiJBZGRNb3ZpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFkZE1vdmllIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVNb3ZpZUNoYW5nZSA9IHRoaXMuaGFuZGxlTW92aWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVNb3ZpZVN1Ym1pdCA9IHRoaXMuaGFuZGxlTW92aWVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgIH07XG5cblxuXG4gIGhhbmRsZU1vdmllQ2hhbmdlKGV2ZW50KSB7XG4gICAgLy8gICB0aGlzLnByb3BzLmhhbmRsZVNlYXJjaENoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICAgIFxuICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XG4gIH1cblxuICBoYW5kbGVNb3ZpZVN1Ym1pdChldmVudCkge1xuICAgICAgLy8gYWxlcnQoJ0FkZGVkOiAnICsgdGhpcy5zdGF0ZS52YWx1ZSk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5wcm9wcy5uZXdNb3ZpZSh0aGlzLnN0YXRlLnZhbHVlKTtcbiAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vdGhpcy5wcm9wcy5uZXdNb3ZpZSh0aGlzLnN0YXRlLnZhbHVlKTtcbiAgfVxuXG4gICAgXG4gICAgcmVuZGVyKCl7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZU1vdmllU3VibWl0fT5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIEFkZCBNb3ZpZTogXG4gICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibmV3TW92aWVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVNb3ZpZUNoYW5nZX0gLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIvPlxuICAgICAgPC9mb3JtPiAgIFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IEFkZE1vdmllOyJdfQ==