import React from 'react';
import { Provider } from 'react-redux';
import Logo from '../components/Logo';
import Pokedex from '../components/Pokedex';
import { Store } from '../components/Store';
const Pokemon = () => {
    return (
        <div>
            <Logo />
            <Provider store={Store}>
                <Pokedex />
            </Provider>
            
        </div >
    );
};

export default Pokemon;