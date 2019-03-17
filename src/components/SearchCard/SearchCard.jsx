import React, { Component } from 'react';

class SearchCard extends Component {
    constructor(props) {
        super(props);
        this.searchInput = React.createRef();
    }

    
    handleCharacterSearch = () => {
        const searchValue = this.searchInput.current;
        this.props.onSearchTerm(searchValue.value);
    }

    render() {
        return(
            <div>
                <input type="text"
                    ref={this.searchInput}
                    onChange={this.handleCharacterSearch}
                    className="form-control"
                    placeholder="Search for Rick & Morty character"                
                />
            </div>
        )
    }
}


export default SearchCard;