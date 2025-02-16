"use strict";

import { Element } from "easy";

import MainHeader from "./view/header/main";
import GlyphsTable from "./view/table/glyphs";

export default class View extends Element {
  childElements() {
    return ([

      <MainHeader/>,
      <GlyphsTable/>

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}
