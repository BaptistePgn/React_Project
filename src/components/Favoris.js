import React from 'react';
import {useSelector } from 'react-redux';
import { deleteFavori } from './Store';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';


const Favoris = () => {
    const favorisList = useSelector(state => state.favori)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Tes Favoris: </h1>
            {
                favorisList.map(t=>(
                    <p> - {t.payload.name}  <Button variant="contained" onClick= {() => {dispatch(deleteFavori(t.payload))}}>Supprimer Favori</Button> </p>

                ))
            }
        </div>
    );
};

export default Favoris;