import {$} from "@core/dom";
import {Emitter} from "@core/Emitter";

export class Excel {
  constructor(selector, options) {
    this.$element = $(selector);
    this.components = options.components || [];
    this.emitter = new Emitter();
  }

  getRoot() {
    const $root = $.create("div", "excel");
    const comoponentOptions = {
      emitter: this.emitter
    }
    this.components = this.components.map(Component => {
      const $element = $.create("div", Component.className);
      const component = new Component($element, comoponentOptions);
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

  destroy(){
    this.components.forEach(component => component.destroy());
  }
}
