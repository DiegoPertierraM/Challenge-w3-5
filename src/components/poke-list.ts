import { RepoPoke } from '../repo.api';
import { Poke } from '../model/poke';
import { Component } from './component';
import { Card } from './card';

export class PokeList extends Component {
  pokemon: Poke[] = [];

  repo: RepoPoke;

  constructor(selector: string) {
    super(selector);
    this.repo = new RepoPoke();
    this.repo
      .getStartingPokemon()
      .then((pokemon) => {
        this.pokemon = pokemon;
        this.render();
      })
      .catch((error) => {
        console.log((error as Error).message);
      });
  }

  async render() {
    this.template = this.createTemplate();
    super.render();

    const pokemonList = document.querySelector('.pokemon__list');
    let pokeCount = document.querySelector('.poke-count');
    if (pokeCount) {
      pokeCount.innerHTML = `${this.repo.offset + 20}`;
    }

    await Promise.all(
      this.pokemon.map(async (pokemon: Poke) => {
        new Card('.pokemon__list', pokemon);
      })
    );

    document.querySelector('.next-btn')?.addEventListener('click', async () => {
      if (this.repo.offset >= 1300) return;

      const newPokemon = await this.repo.getNextPokemon();
      this.pokemon = newPokemon;

      if (pokemonList) {
        pokemonList.innerHTML = '';
        this.pokemon.forEach((pokemon) => {
          new Card('.pokemon__list', pokemon);
        });
      }

      if (pokeCount) {
        if (pokeCount.innerHTML === '1300') {
          pokeCount.innerHTML = '1302';
        } else {
          pokeCount.innerHTML = `${this.repo.offset + 20}`;
        }
      }
    });

    document.querySelector('.prev-btn')?.addEventListener('click', async () => {
      if (this.repo.offset <= 0) return;

      const newPokemon = await this.repo.getPrevPokemon();
      this.pokemon = newPokemon;

      if (pokemonList) {
        this.element.innerHTML = '';
        this.pokemon.forEach((pokemon) => {
          new Card('.pokemon__list', pokemon);
        });
      }

      if (pokeCount) {
        if (pokeCount.innerHTML === '1302') {
          pokeCount.innerHTML = '1300';
        } else {
          pokeCount.innerHTML = `${this.repo.offset + 20}`;
        }
      }
    });
  }

  createTemplate() {
    return `
    <h2 class="pokemon__title">POKEMON: <span class="poke-count">0</span>/1302</h2>
    <div class=btns>
        <button class="prev-btn">Previous</button>
        <button class="next-btn">Next</button>
      </div>
    <ul class="pokemon__list">
    </ul>
    `;
  }
}
