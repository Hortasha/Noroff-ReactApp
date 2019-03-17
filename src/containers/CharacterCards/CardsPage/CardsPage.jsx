import React, { Component, Fragment } from 'react';
import CharacterCard from '../../../components/CharacterCard/CharacterCard';
import SearchCard from '../../../components/SearchCard/SearchCard';
import './CardsPage.css'

class CardsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterCards: [],
            allCards: []
        }
    }

    getData = () => {
        return fetch("https://rickandmortyapi.com/api/character/")
        .then(response => response.json())
        .then(data => {
            this.setState({
                characterCards: data.results,
                allCards: data.results
            });

        });
    }

    handleSearchTerm = (value) => {
        this.filterCharacterCards(value);
    }

    filterCharacterCards = (value) => {
        const filtered = this.state.allCards.filter((data) => {
            return data.name.toLowerCase().includes(value.trim().toLowerCase())
        })

        this.setState({
            characterCards: filtered
        })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        let characters = null;
        if(this.state.characterCards.length > 0) {
            characters = this.state.characterCards.map(character => (
                <CharacterCard
                    key={character.id}
                    id={character.id}
                    image={character.image}
                    name={character.name}
                    species={character.species}
                    status={character.status}
                    gender={character.gender}
                    location={character.location.name}
                    origin={character.origin.name}
                    showLink={true}
                ></CharacterCard>
            ));
        } else {
            characters = <p>Loading...</p>
        }

        return(
            <Fragment>
                <h4 className="cardsPage--title">Characters</h4>
                <br/>
                <SearchCard onSearchTerm={this.handleSearchTerm} />
                <br/>
                <div className="row cardsPage--container">
                    {characters}
                </div>
            </Fragment>
        );
    }
}

export default CardsPage;