import React from 'react';
import {useSelector } from 'react-redux';


const Favoris = () => {
    const favorisList = useSelector(state => state.favori)
    return (
        <div>
            {console.log(favorisList)}
            <h1>Tes Favoris: </h1>
            {
                favorisList.map(t=>(
                    <p> - {t.payload.name} </p>
                ))
            }
        </div>
    );
};

export default Favoris;