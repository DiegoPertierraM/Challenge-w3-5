import { RepoPoke } from '../repo.api';
import { Poke } from '../model/poke';
import { Component } from './component';
import { Card } from '../components/card';

export class Pokemon extends Component {
  pokemon: Poke[] = [];

  repo: RepoPoke;

  constructor(selector: string) {
    super(selector);
    this.repo = new RepoPoke();
    this.repo
      .getAll()
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
    console.log(this.pokemon);

    await Promise.all(
      this.pokemon.map(async (pokemon: Poke) => {
        new Card('.pokemon__list', pokemon);
      })
    );
  }

  createTemplate() {
    return `
    <section class="pokemon" aria-label="pokemon">
      <div class=btns>
        <button>Previous</button>
        <h2 class="pokemon__title">POKEMON LIST</h2>
        <button>Next</button>
      </div>
      <ul class="pokemon__list">
      </ul>
    </section>
    `;
  }
}
// update(pokemon: Poke) {
//   this.repo
//     .update(pokemon)
//     .then((pokemon) => {
//       this.pokemon = this.pokemon.map((p) =>
//         p.id === pokemon.id ? pokemon : p
//       );
//       console.log(this.pokemon);
//     })
//     .catch((error) => {
//       console.log((error as Error).message);
//     });
// }

// delete(pokemon: Poke) {
//   this.repo
//     .delete(pokemon)
//     .then((pokemon) => {
//       this.pokemon = this.pokemon.filter((p) => p.id !== pokemon.id);
//       console.log(this.pokemon);
//     })
//     .catch((error) => {
//       console.log((error as Error).message);
//     });
// }
