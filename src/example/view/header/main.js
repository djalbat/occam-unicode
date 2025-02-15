"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { UnicodeCharacterDropdownDiv } from "../../../index"; ///

import { mainHeaderHeight, mainHeaderPaddingRight } from "../../styles";

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
  
  
`;
