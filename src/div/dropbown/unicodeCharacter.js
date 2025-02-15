"use strict";

import { arrayUtilities } from "necessary";

import DropdownDiv from "../../div/dropdown";
import UnicodeCharacterDropdownList from "../../list/dropdown/unicodeCharacter";
import UnicodeCharacterDropdownInput from "../../input/dropdown/unicodeCharacter";

import { EMPTY_STRING } from "../../constants";

const { filter } = arrayUtilities;

export default class UnicodeCharacterDropdownDiv extends DropdownDiv {
  updateCustomHandler = (event, element) => {
    const unicodeCharacter = this.getUnicodeCharacter(),
          upperCaseUnicodeCharacter = unicodeCharacter.toUpperCase(),
          unicodeCharacterFragments = upperCaseUnicodeCharacter.split(/\s+/);  ///

    filter(unicodeCharacterFragments, (unicodeCharacterFragment) => {
      if (unicodeCharacterFragment !== EMPTY_STRING) {
        return true;
      }
    });

    const unicodeCharacterFragmentsLength = unicodeCharacterFragments.length;

    if (unicodeCharacterFragmentsLength === 0) {
      return;
    }

    this.filterUnicodeCharacterDropdownList(unicodeCharacterFragments);

    const unicodeCharacterDropdownListEmpty = this.isUnicodeCharacterDropdownListEmpty();

    unicodeCharacterDropdownListEmpty ?
      this.hideUnicodeCharacterDropdownList() :
        this.showUnicodeCharacterDropdownList();
  }

  selectCustomHandler = (event, element) => {
    const selectedUnicodeCodePoint = this.getSelectedUnicodeCodePoint();

    if (selectedUnicodeCodePoint !== null) {
      const codePoint = selectedUnicodeCodePoint, ///
            string = String.fromCodePoint(codePoint),
            unicodeCharacter = string;  ///

      controller.copyOrPasteUnicodeCharacter(unicodeCharacter);
    }
  }

  didMount() {
    this.onCustomUpdate(this.updateCustomHandler);
    this.onCustomSelect(this.selectCustomHandler);
  }

  willUnmount() {
    this.offCustomUpdate(this.updateCustomHandler);
    this.offCustomSelect(this.selectCustomHandler);
  }

  parentContext() {
    const focusUnicodeCharacterDropdownInput = this.focusUnicodeCharacterDropdownInput.bind(this);

    return ({
      focusUnicodeCharacterDropdownInput
    });
  }

  static DropdownList = UnicodeCharacterDropdownList;

  static DropdownInput = UnicodeCharacterDropdownInput;

  static defaultProperties = {
    className: "unicode-character"
  };
}
