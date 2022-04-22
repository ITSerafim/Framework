export class TableSelection {
  static className = 'selected'

  constructor() {
    this.group = [];
    this.current = null;
  }

  select($element) {
    this.clear();
    $element.focus().addClass(TableSelection.className);
    this.group.push($element);
    this.current = $element;
  }

  clear() {
    this.group
        .forEach($element => $element.removeClass(TableSelection.className));
    this.group = [];
  }

  selectGroup($group) {
    this.clear();
    this.group = $group;
    this.group.forEach($element => $element.addClass(TableSelection.className));
  }
}