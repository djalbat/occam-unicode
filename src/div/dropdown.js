"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { keyCodes } from "necessary";

import { defer } from "../utilities/time";
import { largeSize } from "../sizes";
import { BLUR_DELAY } from "../constants";
import { UPDATE_CUSTOM_EVENT_TYPE, CHANGE_CUSTOM_EVENT_TYPE, SELECT_CUSTOM_EVENT_TYPE } from "../customEventTypes";

const { ENTER_KEY_CODE,
        ESCAPE_KEY_CODE,
        ARROW_UP_KEY_CODE,
        ARROW_DOWN_KEY_CODE } = keyCodes;

class DropdownDiv extends Element {
  dropdownInputKeyDownHandler = (event, element) => {
    const { keyCode } = event;

    switch (keyCode) {
      case ENTER_KEY_CODE: {
        this.enterKeyDown(event, element);

        break;
      }

      case ESCAPE_KEY_CODE: {
        this.escapeKeyDown(event, element);

        break;
      }

      case ARROW_UP_KEY_CODE: {
        this.arrowUpKeyDown(event, element);

        break;
      }

      case ARROW_DOWN_KEY_CODE: {
        this.arrowDownKeyDown(event, element);

        break;
      }
    }
  }

  dropdownInputKeyUpHandler = (event, element) => {
    const { keyCode } = event;

    switch (keyCode) {
      case ENTER_KEY_CODE:
      case ESCAPE_KEY_CODE:
      case ARROW_UP_KEY_CODE:
      case ARROW_DOWN_KEY_CODE: {
        event.preventDefault();

        break;
      }

      default: {
        this.defaultKeyUp(event, element);

        break;
      }
    }
  }

  dropdownInputBlurHandler = (event, element) => {
    const delay = BLUR_DELAY;

    defer(() => {
      this.hideDropdownList();
    }, delay);
  }

  dropdownListClickHandler = (event, element) => {
    this.hideDropdownList();

    const selectedDropdownItem = this.getSelectedDropdownItem();

    if (selectedDropdownItem === null) {
      return;
    }

    const customEventType = SELECT_CUSTOM_EVENT_TYPE;

    this.callCustomHandlers(customEventType, event, element);
  }

  dropdownInputClickHandler = (event, element) => {
    const dropdownListHidden = this.isDropdownListHidden();

    if (dropdownListHidden) {
      const dropdownListEmpty = this.isDropdownListEmpty();

      if (!dropdownListEmpty) {
        this.showDropdownList();
      }
    } else {
      this.hideDropdownList();
    }
  }

  enterKeyDown(event, element) {
    const dropdownListHidden = this.isDropdownListHidden();

    if (dropdownListHidden) {
      const customEventType = CHANGE_CUSTOM_EVENT_TYPE;

      this.callCustomHandlers(customEventType, event, element);

      return;
    }

    this.hideDropdownList();

    const selectedDropdownItem = this.getSelectedDropdownItem();

    if (selectedDropdownItem === null) {
      return;
    }

    const customEventType = SELECT_CUSTOM_EVENT_TYPE;

    this.callCustomHandlers(customEventType, event, element);
  }

  escapeKeyDown(event, element) {
    this.hideDropdownList();
  }

  arrowUpKeyDown(event, element) {
    const dropdownListEmpty = this.isDropdownListEmpty();

    if (dropdownListEmpty) {
      return;
    }

    const dropdownListHidden = this.isDropdownListHidden();

    if (dropdownListHidden) {
      this.showDropdownList();
    }

    this.selectPreviousDisplayedDropdownItem();
  }

  arrowDownKeyDown(event, element) {
    const dropdownListEmpty = this.isDropdownListEmpty();

    if (dropdownListEmpty) {
      return;
    }

    const dropdownListHidden = this.isDropdownListHidden();

    if (dropdownListHidden) {
      this.showDropdownList();
    }

    this.selectNextDisplayedDropdownItem();
  }

  defaultKeyUp(event, element) {
    const customEventType = UPDATE_CUSTOM_EVENT_TYPE;

    this.callCustomHandlers(customEventType, event, element);
  }

  childElements() {
    const { DropdownList, DropdownInput } = this.constructor;

    return ([

      <DropdownInput onClick={this.dropdownInputClickHandler}
                     onBlur={this.dropdownInputBlurHandler}
                     onKeyUp={this.dropdownInputKeyUpHandler}
                     onKeyDown={this.dropdownInputKeyDownHandler}
      />,
      <DropdownList onClick={this.dropdownListClickHandler} />

    ]);
  }

  initialise() {
    this.assignContext([
      "showDropdownList",
      "hideDropdownList",
      "isDropdownListEmpty",
      "isDropdownListHidden",
      "getSelectedDropdownItem",
      "selectNextDisplayedDropdownItem",
      "selectPreviousDisplayedDropdownItem"
    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "dropdown"
  };
}

export default withStyle(DropdownDiv)`

  height: ${largeSize};
  display: grid;
  overflow: visible;
  position: relative;
  flex-grow: 1;
  grid-template-rows: ${largeSize} auto;
  grid-template-columns: 1fr ;
  
`;
