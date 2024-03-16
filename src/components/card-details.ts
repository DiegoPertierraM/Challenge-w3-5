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

  selectPokemonData = (pokemon: Poke) => `
    <li><img src="${pokemon.sprites}" width="150" alt="Imagen de ${this.pokemon.sprites}"></li>
    <li><strong>Id</strong>: ${pokemon.id}</li>
    <li><strong>Name</strong>: ${pokemon.name}</li>
    <li><strong>Types</strong>: ${pokemon.types}</li>
    <li><strong>Abilities</strong>: ${pokemon.abilities}</li>
    <li><strong>Height</strong>: ${pokemon.height}</li>
    <li><strong>Weight</strong>: ${pokemon.weight}</li>
    <li><strong>Stats</strong>:
      <ul>
        <li><strong>Hp</strong>: ${pokemon.stats.hp}</li>
        <li><strong>Attack</strong>: ${pokemon.stats.attack}</li>
        <li><strong>Defense</strong>: ${pokemon.stats.defense}</li>
        <li><strong>Sp.Attack</strong>: ${pokemon.stats.specialAttack}</li>
        <li><strong>Sp.Defense</strong>: ${pokemon.stats.specialDefense}</li>
        <li><strong>Speed</strong>: ${pokemon.stats.speed}</li>
      </ul>
    </li>
    `;

  createTemplate() {
    const item = this.pokemon;
    return `
    <div class="card">
      <ul class="pokemon">
        ${this.selectPokemonData(item)}
      </ul>
    </div>
    `;
  }
}
