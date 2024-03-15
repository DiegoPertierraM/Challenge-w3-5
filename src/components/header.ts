import './header.css';
import { Component } from './component';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <header class="header" role="heading" aria-level="1">
      <h1 class="header__title"><img src="img/pokemon-logo.svg"></h1>
    </header>
    `;
  }
}
