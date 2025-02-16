"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import GlyphsTableRow from "../tableRow/glyphs";

import { unicodeCharacters } from "../../../unicodeCharacterMap";

class GlyphsTable extends Element {
  childElements() {
    const glyphsTableRows = unicodeCharacters.map((unicodeCharacter, index) => {
            return (

              <GlyphsTableRow index={index} />

            );
          }),
          childElements = glyphsTableRows;  ///

    return childElements;
  }

  static tagName = "table";

  static defaultProperties = {
    className: "glyphs"
  };
}

export default withStyle(GlyphsTable)`

  margin-top: 16rem;
  border-collapse: collapse;
  
`;