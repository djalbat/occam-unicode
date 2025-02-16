"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import MainHeader from "./view/header/main";
import ComputerModernDiv from "./view/div/computerModern";

class View extends Element {
  childElements() {
    return ([

      <MainHeader/>,
      <ComputerModernDiv/>

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 2rem;
  
`;
