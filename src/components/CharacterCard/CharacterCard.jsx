import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterCard.css'

const characterCard = (props) => {
    let linkButton = null;

    if( props.showLink ) {
        linkButton = <Link to={{ pathname: '/character/' + props.id }} className="btn btn-primary CharacterCard--button">View</Link>;
    }

    return (
        <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="card CharacterCard">
                <img src={props.image} alt={props.name} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title CharacterCard--title">{props.name}</h5>
                    <b>Species: {props.species}</b><br />
                    <b>Status: {props.status}</b><br />
                    <b>Gender: {props.gender}</b><br />
                    <b>Location: {props.location}</b><br />
                    <b>Place of origin: {props.origin}</b><br />
                    {linkButton}
                </div>
            </div>
        </div>
    )
}


export default characterCard;