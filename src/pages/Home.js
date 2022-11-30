import React from 'react';
import Favoris from '../components/Favoris';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import PokeApi from '../components/PokeApi';
import { Provider} from 'react-redux';
import { Store } from '../components/Store';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>ACCUEIL</h1>
            <PokeApi />
            <Provider store={Store}>
                <Favoris />
            </Provider>
            
        </div>
    );
};

export default Home;
