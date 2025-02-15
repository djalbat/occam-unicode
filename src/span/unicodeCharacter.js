"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class UnicodeCharacterSpan extends Element {
  isSelected() {
    const selected = this.hasClass("selected");

    return selected;
  }

  deselect() {
    this.removeClass("selected");
  }

  select() {
    this.addClass("selected");
  }

  static tagName = "span";

  static defaultProperties = {
    className: "unicode-character"
  };
}

export default withStyle(UnicodeCharacterSpan)`

  height: 100%;
  overflow: hidden;
  
`;
