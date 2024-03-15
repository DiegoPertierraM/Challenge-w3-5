/* eslint-disable no-new */
import './styles.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Main } from './components/main';
import { Menu } from './components/menu';
import { Pokemon } from './components/pokemon';

new Header('body');
new Menu('header');
new Main('body');
new Pokemon('main');
new Footer('body');
