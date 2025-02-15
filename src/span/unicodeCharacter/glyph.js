"use strict";

import withStyle from "easy-with-style";  ///

import { commonScheme, juliaMonoFontMixin } from "occam-styles";

import UnicodeCharacterSpan from "../../span/unicodeCharacter";

import { largeSize } from "../../sizes";

const { glyphUnicodeCharacterColour, selectedGlyphUnicodeCharacterColour, glyphUnicodeCharacterBackgroundColour } = commonScheme;

class GlyphUnicodeCharacterSpan extends UnicodeCharacterSpan {
  childElements() {
    const { codePoint } = this.properties,
          string = String.fromCodePoint(codePoint),
          childElements = string; ///

    return childElements;
  }

  parentContext() {
    const selectGlyphUnicodeCharacterSpan = this.select.bind(this),  ///
          deselectGlyphUnicodeCharacterSpan = this.deselect.bind(this);  ///

    return ({
      selectGlyphUnicodeCharacterSpan,
      deselectGlyphUnicodeCharacterSpan
    });
  }

  static ignoredProperties = [
    "codePoint"
  ];

  static defaultProperties = {
    className: "glyph"
  };
}

export default withStyle(GlyphUnicodeCharacterSpan)`

  left: 0;
  display: flex;
  position: sticky;
  font-size: ${largeSize};
  align-items: center;
  justify-content: center;
  background-color: ${glyphUnicodeCharacterBackgroundColour};

  color: ${glyphUnicodeCharacterColour};

  .selected {
    color: ${selectedGlyphUnicodeCharacterColour};
  }
  
  ${juliaMonoFontMixin};
  
`;
