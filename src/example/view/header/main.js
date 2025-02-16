"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { colours } from "occam-styles";

import UnicodeCharacterDropdownDiv from "../div/dropdown/unicodeCharacter";

import { mainHeaderHeight, mainHeaderPaddingRight } from "../../styles";

const { woodsmoke } = colours;

class MainHeader extends Element {
  childElements() {
    return (

      <UnicodeCharacterDropdownDiv/>

    );
  }

  static tagName = "header";

  static defaultProperties = {
    className: "main"
  };
}

export default withStyle(MainHeader)`

  top:: 0;
  left: 0;
  width: 100%;
  height: ${mainHeaderHeight};
  display: flex;
  position: fixed;
  align-items: center;
  padding-right: ${mainHeaderPaddingRight};
  flex-direction: row;
  justify-content: flex-end;
  background-color: ${woodsmoke};  
  
`;
