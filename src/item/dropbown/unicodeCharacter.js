"use strict";

import DropdownItem from "../../item/dropdown";
import GlyphUnicodeCharacterSpan from "../../span/unicodeCharacter/glyph";
import ASCIIUnicodeCharacterSpan from "../../span/unicodeCharacter/ascii";

export default class UnicodeCharacterDropdownItem extends DropdownItem {
  isSelected() {
    const asciiUnicodeCharacterSpanSelected = this.isASCIIUnicodeCharacterSpanSelected();

    return asciiUnicodeCharacterSpanSelected;
  }

  deselect() {
    this.deselectGlyphUnicodeCharacterSpan();
    this.deselectASCIIUnicodeCharacterSpan();
  }

  select() {
    this.selectGlyphUnicodeCharacterSpan();
    this.selectASCIIUnicodeCharacterSpan();
  }

  filter(characterFragments) {
    const character = this.getCharacter(),
          displayed = characterFragments.every((characterFragment) => {
            const characterIncludesCharacterFragment = character.includes(characterFragment);

            if (characterIncludesCharacterFragment) {
              return true;
            }
          });

    displayed ?
      this.show() :
        this.hide();
  }

  getCodePoint() {
    const { codePoint } = this.properties;

    return codePoint;
  }

  getCharacter() {
    const { character } = this.properties;

    return character;
  }

  childElements() {
    const character = this.getCharacter(),
          codePoint = this.getCodePoint(),
          childElements = [

            <GlyphUnicodeCharacterSpan codePoint={codePoint} />,
            <ASCIIUnicodeCharacterSpan character={character} />

          ];

    return childElements;
  }

  initialise() {
    this.assignContext();
  }

  static ignoredProperties = [
    "character",
    "codePoint"
  ];

  static defaultProperties = {
    className: "unicode-character"
  };
}
