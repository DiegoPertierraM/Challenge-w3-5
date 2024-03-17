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
      <h1 class="header__title"><a href="index.html"><img src="img/pokemon-logo.svg"></a></h1>
    </header>
    `;
  }
}
