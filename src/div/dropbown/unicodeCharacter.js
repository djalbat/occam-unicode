"use strict";

import DropdownDiv from "../../div/dropdown";
import UnicodeCharacterDropdownList from "../../list/dropdown/unicodeCharacter";
import UnicodeCharacterDropdownInput from "../../input/dropdown/unicodeCharacter";

export default class UnicodeCharacterDropdownDiv extends DropdownDiv {
  static DropdownList = UnicodeCharacterDropdownList;

  static DropdownInput = UnicodeCharacterDropdownInput;

  static defaultProperties = {
    className: "unicode-character"
  };
}
