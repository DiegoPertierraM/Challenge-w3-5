import './main.css';
import { Component } from './component';

export class Main extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <main>

    </main>
    `;
  }
}
