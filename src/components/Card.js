import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Card = ({ pokemon }) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(pokemon.url)
            .then((res) => setData(res.data))
    }, [])
    return (
        <div>
            {data.sprites && data.types && data.sprites.front_default  &&
                    <li className='card'>
                    <img src={data.sprites.front_default} alt={pokemon.name} />
                    <div className='infos'>
                        <h3>{pokemon.name} :</h3>
                        {
                            data.types
                            .map((info) => (
                                <p>{info.type.name}</p> 
                            ))
                        }
                       
                    </div>
                </li>
                }
        </div>
    );
};

export default Card;