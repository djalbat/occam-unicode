"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { CONTENTS } from "../constants";

class DropdownItem extends Element {
  show() {
    const display = CONTENTS;

    this.display(display);
  }

  remove(element = null) {
    super.remove(element);

    if (element === null) {
      this.destroy();
    }
  }

  didMount() {
    const { displayed = false } = this.properties;

    if (displayed) {
      this.show();
    }
  }

  willUnmount() {
    ///
  }

  static tagName = "li";

  static ignoredProperties = [
    "displayed"
  ];

  static defaultProperties = {
    className: "dropdown"
  };
}

export default withStyle(DropdownItem)`

  display: contents;
  list-style-type: none;
  
`;
