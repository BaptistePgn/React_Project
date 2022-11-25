import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Card = ({ pokemon }) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon-form/" + pokemon.name + "/")
            .then((res) => setData(res.data.sprites))
    }, [])
    return (
        <div>
            {data.front_default != null &&
                <li className='card'>
                    <img src={data.front_default} alt={pokemon.name} />
                    <div className='infos'>
                        <h2>{pokemon.name}</h2>
                    </div>
                </li>}
        </div>
    );
};

export default Card;