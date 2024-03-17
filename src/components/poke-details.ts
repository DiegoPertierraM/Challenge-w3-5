import './poke-details.css';
import { RepoPoke } from '../repo.api';
import { Poke } from '../model/poke';
import { Component } from './component';

export class Details extends Component {
  pokemon: Poke[] = [];

  repo: RepoPoke;

  constructor(selector: string) {
    super(selector);
    this.repo = new RepoPoke();
    this.template = this.createTemplate();
    this.render();
  }

  async render() {
    this.template = this.createTemplate();
    super.render();
  }

  createTemplate() {
    return `
      <div class="poke-details">f</div>
    `;
  }
}
