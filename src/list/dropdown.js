"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { commonScheme } from "occam-styles";

import { dropdownItemHeight } from "../styles";
import { GRID, DROPDOWN_ITEM_HEIGHT } from "../constants";

const { commonBorderColour, commonInputBackgroundColour } = commonScheme;

class DropdownList extends Element {
  dropdownItemMouseOverHandler = (event, element) => {
    let selectedDropdownItem;

    const dropdownItem = element;  ///

    selectedDropdownItem = this.getSelectedDropdownItem();

    if (selectedDropdownItem !== null) {
      selectedDropdownItem.deselect();
    }

    selectedDropdownItem = dropdownItem;  ///

    selectedDropdownItem.select();
  }

  scrollToIndex(index) {
    const innerHeight = this.getInnerHeight(),
          offset = ((innerHeight / DROPDOWN_ITEM_HEIGHT) - 1) / 2,
          scrollTop = (index - offset) * DROPDOWN_ITEM_HEIGHT,
          scrollLeft = 0;

    this.scrollTo(scrollTop, scrollLeft);
  }

  getDropdownItems() {
    const childElements = this.getChildElements(),
          dropdownItems = childElements;  ///

    return dropdownItems;
  }

  getSelectedDropdownItem(dropdownItems = null) {
    let selectedDropdownItem = null;

    if (dropdownItems === null) {
      dropdownItems = this.getDropdownItems();
    }

    dropdownItems.some((dropdownItem) => {
      const dropdownItemSelected = dropdownItem.isSelected();

      if (dropdownItemSelected) {
        selectedDropdownItem = dropdownItem;  ///

        return true;
      }
    });


    return selectedDropdownItem;
  }

  getDisplayedDropdownItems(dropdownItems = null) {
    if (dropdownItems === null) {
      dropdownItems = this.getDropdownItems();
    }

    const displayedDropdownItems = dropdownItems.filter((dropdownItem) => {
            const dropdownItemDisplayed = dropdownItem.isDisplayed();

            if (dropdownItemDisplayed) {
              return true;
            }
          });

    return displayedDropdownItems;
  }

  selectNextDisplayedDropdownItem() {
    let index,
        selectedDropdownItem;

    selectedDropdownItem = this.getSelectedDropdownItem();

    const displayedDropdownItems = this.getDisplayedDropdownItems(),
          displayedDropdownItemsLength = displayedDropdownItems.length,
          firstIndex = 0,
          lastIndex = displayedDropdownItemsLength - 1;

    if (selectedDropdownItem !== null) {
      selectedDropdownItem.deselect();
    }

    if (selectedDropdownItem === null) {
      index = firstIndex; ///
    } else {
      index = displayedDropdownItems.indexOf(selectedDropdownItem);

      index = (index < lastIndex) ?
                index + 1 :
                  firstIndex;
    }

    selectedDropdownItem = displayedDropdownItems[index] || null; ///

    if (selectedDropdownItem !== null) {
      selectedDropdownItem.select();

      this.scrollToIndex(index);
    }
  }

  selectPreviousDisplayedDropdownItem() {
    let index,
        selectedDropdownItem;

    selectedDropdownItem = this.getSelectedDropdownItem();

    const displayedDropdownItems = this.getDisplayedDropdownItems(),
          displayedDropdownItemsLength = displayedDropdownItems.length,
          firstIndex = 0,
          lastIndex = displayedDropdownItemsLength - 1;

    if (selectedDropdownItem !== null) {
      selectedDropdownItem.deselect();
    }

    if (selectedDropdownItem === null) {
      index = lastIndex; ///
    } else {
      index = displayedDropdownItems.indexOf(selectedDropdownItem);

      index = (index > firstIndex) ?
                index - 1 :
                  lastIndex;
    }

    selectedDropdownItem = displayedDropdownItems[index] || null; ///

    if (selectedDropdownItem !== null) {
      selectedDropdownItem.select();

      this.scrollToIndex(index);
    }
  }

  show() {
    const display = GRID;

    this.display(display);
  }

  isEmpty() {
    const displayedDropdownItems = this.getDisplayedDropdownItems(),
          displayedDropdownItemsLength = displayedDropdownItems.length,
          empty = (displayedDropdownItemsLength === 0);

    return empty;
  }

  didMount() {
    this.hide();
  }

  willUnmount() {
    ///
  }

  parentContext() {
    const showDropdownList = this.show.bind(this),  ///
          hideDropdownList = this.hide.bind(this),  ///
          isDropdownListEmpty = this.isEmpty.bind(this),  ///
          isDropdownListHidden = this.isHidden.bind(this), ///
          getSelectedDropdownItem = this.getSelectedDropdownItem.bind(this),
          selectNextDisplayedDropdownItem = this.selectNextDisplayedDropdownItem.bind(this),
          selectPreviousDisplayedDropdownItem = this.selectPreviousDisplayedDropdownItem.bind(this);

    return ({
      showDropdownList,
      hideDropdownList,
      isDropdownListEmpty,
      isDropdownListHidden,
      getSelectedDropdownItem,
      selectNextDisplayedDropdownItem,
      selectPreviousDisplayedDropdownItem
    });
  }

  static tagName = "ul";

  static defaultProperties = {
    className: "dropdown"
  };
}

export default withStyle(DropdownList)`

  width: 100%;
  height: fit-content;
  border: 1px solid ${commonBorderColour};  
  display: grid;
  z-index: 2;
  overflow: hidden;
  border-top: none;
  grid-auto-rows: ${dropdownItemHeight};
  background-color: ${commonInputBackgroundColour};
  
`;
