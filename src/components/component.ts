export abstract class Component {
  selector: string;
  template: string = '';
  element!: HTMLElement;
  constructor(selector: string) {
    this.selector = selector;
  }

  // eslint-disable-next-line no-undef
  render(position: InsertPosition = 'beforeend') {
    const targetElement = document.querySelector<HTMLElement>(this.selector);
    if (!targetElement) return;
    targetElement.insertAdjacentHTML(position, this.template);
    if (position === 'beforeend') {
      this.element = targetElement.lastElementChild! as HTMLElement;
    }
  }

  unRender() {
    this.element.outerHTML = '';
  }
}
