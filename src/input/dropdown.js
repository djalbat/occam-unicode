"use strict";

import withStyle from "easy-with-style";  ///

import { Input } from "easy";

import { commonScheme, commonFontMixin } from "occam-styles";

import { largeSize, quarterSize } from "../sizes";

const { commonColour, commonBorderColour, commonInputSelectedColour, commonDisabledInputColour, commonInputBackgroundColour, commonInputSelectedBackgroundColour } = commonScheme;

class DropdownInput extends Input {
  static defaultProperties = {
    className: "dropdown",
    spellCheck: "false"
  };
}

export default withStyle(DropdownInput)`

  color: ${commonColour};
  height: ${largeSize};
  border: 1px solid ${commonBorderColour};
  padding: ${quarterSize};
  outline: none;
  flex-grow: 1;
  background-color: ${commonInputBackgroundColour};
  
  :disabled {
    color: ${commonDisabledInputColour};
  }
  
  ::selection {
    color: ${commonInputSelectedColour};
    background-color: ${commonInputSelectedBackgroundColour};
  }

  ${commonFontMixin}

`;
