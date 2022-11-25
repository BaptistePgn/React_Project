import { TextField } from '@mui/material';
import React from 'react';

const PokeApi = () => {
    return (
        <div>
            <TextField
          id="standard-read-only-input"
          label="Pokemon"
          defaultValue="Bonjour"
          InputProps={{
            readOnly: true,
          }}
        />

            <p> source : <a href='https://pokeapi.co/'> pokeapi.co </a> </p>
        </div>
    );
};

export default PokeApi;