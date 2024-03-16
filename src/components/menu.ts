import './menu.css';
import { Component } from './component';

export class Menu extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    const menuOptions = [
      {
        path: 'index.html',
        label: 'Home',
      },
      {
        path: 'pokedex.html',
        label: 'Pokedex',
      },
      {
        path: 'my-pokemon.html',
        label: 'My pokemon',
      },
    ];

    return `
    <nav>
      <ul>
        ${menuOptions
          .map(
            (option) => `<li><a href="${option.path}">${option.label}</a></li>`
          )
          .join('')}
      </ul>
    </nav>
    `;
  }
}
