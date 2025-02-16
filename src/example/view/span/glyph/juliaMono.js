"use strict";

import withStyle from "easy-with-style";  ///

import { colours } from "occam-styles";
import { juliaMonoFontMixin } from "occam-styles";

import GlyphSpan from "../../span/glyph";

const { woodsmoke, gainsborough } = colours;

class JuliaMonoGlyphSpan extends GlyphSpan {
  static defaultProperties = {
    className: "julia-mono"
  };
}

export default withStyle(JuliaMonoGlyphSpan)`

  color: ${gainsborough};
  padding: 1rem;
  font-size: 4rem;
  background-color: ${woodsmoke};

  ${juliaMonoFontMixin};
  
`;
