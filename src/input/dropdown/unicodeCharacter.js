"use strict";

import withStyle from "easy-with-style";  ///

import DropdownInput from "../../input/dropdown";

class UnicodeCharacterDropdownInput extends DropdownInput {
  getUnicodeCharacter() {
    const value = this.getValue(),
          unicodeCharacter = value;  ///

    return unicodeCharacter;
  }

  parentContext() {
    const getUnicodeCharacter = this.getUnicodeCharacter.bind(this),
          focusUnicodeCharacterDropdownInput = this.focus.bind(this);  ///

    return ({
      getUnicodeCharacter,
      focusUnicodeCharacterDropdownInput
    });
  }

  static defaultProperties = {
    className: "unicode-character"
  };
}

export default  withStyle(UnicodeCharacterDropdownInput)`

  text-transform: uppercase;
  
`;
