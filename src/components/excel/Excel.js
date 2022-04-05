import { $ } from "@core/dom";

export class Excel {
  constructor(selector, options) {
    this.$element = $(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = $.create("div", "excel");

    this.components = this.components.map(Component => {
      const $element = $.create("div", Component.className);
      const component = new Component($element);
      // DEBUG
      if (component.name) {
        window["c" + component.name] = component;
      }
      $element.html(component.toHTML());
      $root.append($element);
      return component;
    });

    return $root;
  }

  render() {
    this.$element.append(this.getRoot());
    this.components.forEach(component => component.init());
  }
}
