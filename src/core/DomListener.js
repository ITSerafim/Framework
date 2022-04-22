import { capitalize } from "@core/utils";

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener`);
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      if (!this[method]) {
        const name = this.name || "";
        throw new Error(
            // eslint-disable-next-line indent
          `Method ${method} doesn't implemented in ${name} Component`
        );
      }
      // addEventListener
      this[method] = this[method].bind(this); // Решение проблемы утечки памяти
      this.$root.on(listener, this[method]);
    });
  }

  removeDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      // removeEventListener
      this.$root.remove(listener, this[method]);
    });
  }
}

// input => onInput
function getMethodName(eventName) {
  return "on" + capitalize(eventName);
}
