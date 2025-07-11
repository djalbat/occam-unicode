"use strict";

import { Element } from "easy";

import MainHeader from "./view/header/main";

export default class View extends Element {
  childElements() {
    return (

      <MainHeader/>

    );
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}
