import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addFavori } from './Store';
import { Button } from '@mui/material';

const Card = ({ pokemon }) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(pokemon.url)
            .then((res) => setData(res.data))
    }, [])
    const dispatch = useDispatch();
    return (
        <div>
            {data.sprites && data.types && data.sprites.front_default  &&
                    <li className='card'>
                    <img src={data.sprites.front_default} alt={pokemon.name} />
                    <div className='infos'>
                        <Button variant="contained" onClick= {() => {dispatch(addFavori(pokemon))}}>ADD Favori</Button>
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