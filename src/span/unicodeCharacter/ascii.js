"use strict";

import withStyle from "easy-with-style";  ///

import { commonScheme, commonFontMixin } from "occam-styles";

import UnicodeCharacterSpan from "../../span/unicodeCharacter";

import { halfSize } from "../../sizes";

const { commonColour } = commonScheme;

class ASCIIUnicodeCharacterSpan extends UnicodeCharacterSpan {
  childElements() {
    const { character } = this.properties,
          childElements = character;  ///

    return childElements;
  }

  parentContext() {
    const selectASCIIUnicodeCharacterSpan = this.select.bind(this),  ///
          deselectASCIIUnicodeCharacterSpan = this.deselect.bind(this),  ///
          isASCIIUnicodeCharacterSpanSelected = this.isSelected.bind(this); ///

    return ({
      selectASCIIUnicodeCharacterSpan,
      deselectASCIIUnicodeCharacterSpan,
      isASCIIUnicodeCharacterSpanSelected
    });
  }

  static ignoredProperties = [
    "character"
  ];

  static defaultProperties = {
    className: "ascii"
  };
}

export default withStyle(ASCIIUnicodeCharacterSpan)`

  color: ${commonColour};
  display: flex;
  white-space: nowrap;
  align-items: center;
  padding-left: ${halfSize};
  text-transform: uppercase;
  justify-content: flex-start;
  
  font-weight: normal;
  
  .selected {
    font-weight: bold;
  }

  ${commonFontMixin}
      
`;
