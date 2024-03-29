import { RepoPoke } from '../repo.api';
import { Poke } from '../model/poke';
import { Component } from './component';

export class Pokemon extends Component {
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
  }

  createTemplate() {
    return `
    <section class="pokemon" aria-label="pokemon">
    </section>
    `;
  }
}
