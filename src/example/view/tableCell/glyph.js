"use strict";

import TableCell from "../tableCell";
import GlyphSpan from "../span/glyph";

export default class GlyphTableCell extends TableCell {
  static ignoredProperties = [
    "codePoint"
  ];

  static defaultProperties = {
    className: "glyph"
  };
}

