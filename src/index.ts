/* eslint-disable no-new */
import './styles.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Main } from './components/main';
import { Menu } from './components/menu';
import { Pokemon } from './components/pokemon';
import { PokeList } from './components/poke-list';
// import { Details } from './components/poke-details';

new Header('body');
new Menu('header');
new Main('body');
new Pokemon('main');
new PokeList('.pokemon');
// new Details('.pokemon');
new Footer('body');
