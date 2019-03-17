import React, { Component, Fragment } from 'react';
import CharacterCard from './../../../components/CharacterCard/CharacterCard';

class CardPage extends Component {
    state = {
        character: {}
    }

    getCharacterData = () => {
        return fetch(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                character: data
            });
        });
    }

    componentDidMount() {
        this.getCharacterData();
    }

    render() {
        let characterCard = null;
        if(this.state.character.id) {
            characterCard = (
                <CharacterCard
                    id={this.state.character.id}
                    image={this.state.character.image}
                    name={this.state.character.name}
                    species={this.state.character.species}
                    status={this.state.character.status}
                    gender={this.state.character.gender}
                    location={this.state.character.location.name}
                    origin={this.state.character.origin.name}
                ></CharacterCard>
            )
        } else {
            characterCard = <p>Loading...</p>;
        }
        return (
            <Fragment>
                <h4>Selected Character</h4>
                <br/>
                <br/>
                <div className="row">
                    {characterCard}
                </div>
            </Fragment>
        )
    }
}

export default CardPage;