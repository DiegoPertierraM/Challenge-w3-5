import { Component } from './component';
import { Poke } from '../model/poke';

export class Card extends Component {
  pokemon: Poke;
  constructor(selector: string, pokemon: Poke) {
    super(selector);
    this.pokemon = pokemon;
    this.render();
  }

  render(): void {
    this.template = this.createTemplate();
    super.render();
  }

  selectPokemonData = (pokemon: Poke) => {
    const spritesUrl = pokemon.sprites?.front_default || '';
    const id = pokemon.id || '';
    const name = pokemon.name || '';
    const type1 = pokemon.types[0]?.type?.name.toUpperCase() || '';
    const type2 = pokemon.types[1]?.type?.name.toUpperCase() || '';
    return `
      <li><img src="${spritesUrl}" width="150" alt="Imagen de ${name}"></li>
      <li class="poke-id">${id}</li>
      <li class="poke-name">${name}</li>
      <li class="poke-type">${type1} | ${type2}</li>
    `;
  };

  createTemplate() {
    const item = this.pokemon;
    return `
    <a class="poke-link">
      <div class="card">
          <ul class="pokemon">
          ${this.selectPokemonData(item)}
          </ul>
      </div>
    </a>
    `;
  }
}
