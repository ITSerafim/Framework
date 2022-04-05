import { ExcelComponent } from "@core/ExcelComponent";

export class Formula extends ExcelComponent {
  static className = "excel__formula";

  constructor($root) {
    super($root, {
      name: "Formula",
      listeners: ["input", "click"]
    });
  }

  toHTML() {
    return "<h1>Formula</h1>";
  }

  onInput(event) {
    console.log(this.$root);
    console.log("Formula onInput", event);
  }

  onClick(event) {
    console.log(this.$root);
  }
}
