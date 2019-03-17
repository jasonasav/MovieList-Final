class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleSearchChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSearchSubmit(event) {
        event.preventDefault();
        this.props.searchMovie(this.state.value);
    }

    render() {
        return React.createElement(
            "form",
            { onSubmit: this.handleSearchSubmit },
            React.createElement(
                "label",
                null,
                "Search:",
                React.createElement("input", { name: "searchMovie", type: "text", value: this.state.value, onChange: this.handleSearchChange })
            ),
            React.createElement("input", { type: "Submit" })
        );
    }
}

export default SearchBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImhhbmRsZVNlYXJjaENoYW5nZSIsImJpbmQiLCJoYW5kbGVTZWFyY2hTdWJtaXQiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJzZWFyY2hNb3ZpZSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsU0FBTixTQUF3QkMsTUFBTUMsU0FBOUIsQ0FBd0M7QUFDdENDLGdCQUFZQyxLQUFaLEVBQWtCO0FBQ2QsY0FBTUEsS0FBTjtBQUNBLGFBQUtDLEtBQUwsR0FBYTtBQUNUQyxtQkFBTztBQURFLFNBQWI7QUFHQSxhQUFLQyxrQkFBTCxHQUEwQixLQUFLQSxrQkFBTCxDQUF3QkMsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBMUI7QUFDQSxhQUFLQyxrQkFBTCxHQUEwQixLQUFLQSxrQkFBTCxDQUF3QkQsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBMUI7QUFFSDs7QUFFREQsdUJBQW1CRyxLQUFuQixFQUEwQjtBQUN0QixhQUFLQyxRQUFMLENBQWMsRUFBQ0wsT0FBT0ksTUFBTUUsTUFBTixDQUFhTixLQUFyQixFQUFkO0FBRUg7O0FBRURHLHVCQUFtQkMsS0FBbkIsRUFBMEI7QUFDdEJBLGNBQU1HLGNBQU47QUFDQSxhQUFLVCxLQUFMLENBQVdVLFdBQVgsQ0FBdUIsS0FBS1QsS0FBTCxDQUFXQyxLQUFsQztBQUNIOztBQUlEUyxhQUFRO0FBQ04sZUFDSTtBQUFBO0FBQUEsY0FBTSxVQUFVLEtBQUtOLGtCQUFyQjtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUksK0NBQU8sTUFBSyxhQUFaLEVBQTBCLE1BQUssTUFBL0IsRUFBc0MsT0FBTyxLQUFLSixLQUFMLENBQVdDLEtBQXhELEVBQStELFVBQVUsS0FBS0Msa0JBQTlFO0FBRkosYUFEQTtBQUtBLDJDQUFPLE1BQUssUUFBWjtBQUxBLFNBREo7QUFTRDtBQWpDcUM7O0FBb0N4QyxlQUFlUCxTQUFmIiwiZmlsZSI6InNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgdmFsdWU6ICcnICAgICAgICAgICAgXG4gICAgICB9XG4gICAgICB0aGlzLmhhbmRsZVNlYXJjaENoYW5nZSA9IHRoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmhhbmRsZVNlYXJjaFN1Ym1pdCA9IHRoaXMuaGFuZGxlU2VhcmNoU3VibWl0LmJpbmQodGhpcyk7XG4gICAgXG4gIH1cblxuICBoYW5kbGVTZWFyY2hDaGFuZ2UoZXZlbnQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgICBcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaFN1Ym1pdChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMucHJvcHMuc2VhcmNoTW92aWUodGhpcy5zdGF0ZS52YWx1ZSk7XG4gIH1cblxuXG4gIFxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTZWFyY2hTdWJtaXR9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBTZWFyY2g6XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cInNlYXJjaE1vdmllXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cIlN1Ym1pdFwiICAvPlxuICAgIDwvZm9ybT4gICBcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcblxuXG4iXX0=