import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Autocomplete, TextField } from '@mui/material';
import Navigation from './Navigation';



const Pokedex = () => {
    const [data, setData] = useState([])
    const [rangeValue, setrangeValue] = useState(36)
    const [nombrePokemon, setnombrePokemon] = useState()
    const [selectedPokemon, setSelectedPokemon] = useState(null)
    useEffect(() => {
        // Récupère le nombre de pokemon
        const asyncFunction = async () => {
            try {
                const nbPokemon = await axios.get("https://pokeapi.co/api/v2/pokemon")
                setnombrePokemon(nbPokemon.data.count)
                const pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/", { params: { limit: nbPokemon.data?.count } })
                setData(pokemon.data.results)

            } catch (e) {
                return e;
            }

        }
        asyncFunction();
    }, [])

    return (
        <div className='pokedex'>
            <ul className="radio-container">
                <Navigation />
                <div>
                    {<Autocomplete
                        options={data}
                        getOptionLabel={(option) => option.name}
                        style={{
                            width: 400
                        }}
                        value={selectedPokemon}
                        onChange={(event, newValue) => setSelectedPokemon(newValue)}
                        renderInput={(params) => (
                            <TextField {...params} label="Pokemon" variant="outlined" />
                        )}
                    />}</div>
                <div>
                    {selectedPokemon == null &&
                        <div>
                            <input id="nbrPokemon" name="nbrPokemon" type="range" min="1" max={nombrePokemon} defaultValue={rangeValue} onChange={(e) => setrangeValue(e.target.value)} />
                            <label forhtml="nbrPokemon">{rangeValue} </label>
                        </div>
                    }
                </div>
            </ul>
            {selectedPokemon == null ? (<ul>

                {
                    data
                        .slice(0, rangeValue)
                        .map((pokemon) => (
                            <Card key={pokemon.name} pokemon={pokemon} />
                        ))
                }
            </ul>) : (<ul>

                {
                    data
                        .slice(0, 1)
                        .map((pokemon) => (
                            <Card key={selectedPokemon.name} pokemon={selectedPokemon} />
                        ))
                }
            </ul>)
            }

        </div>
    );
};

export default Pokedex;