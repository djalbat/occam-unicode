"use strict";

import withStyle from "easy-with-style";  ///

import DropdownDiv from "../../div/dropdown";
import UnicodeCharacterDropdownList from "../../list/dropdown/unicodeCharacter";
import UnicodeCharacterDropdownInput from "../../input/dropdown/unicodeCharacter";

import { halfSize } from "../../sizes";

class UnicodeCharacterDropdownDiv extends DropdownDiv {
  static DropdownList = UnicodeCharacterDropdownList;

  static DropdownInput = UnicodeCharacterDropdownInput;

  static defaultProperties = {
    className: "unicode-character"
  };
}

export default withStyle(UnicodeCharacterDropdownDiv)`

  margin-right: ${halfSize};

`;
