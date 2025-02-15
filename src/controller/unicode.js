"use strict";

export default function createUnicodeMethods(scheduler, model, view) {
  function focusUnicodeCharacterDropdownInput() {
    view.focusUnicodeCharacterDropdownInput();
  }

  return ({
    focusUnicodeCharacterDropdownInput
  });
}
