"use strict";

import withStyle from "easy-with-style";  ///

import { commonScheme, scrollbarMixin } from "occam-styles";

import DropdownList from "../../list/dropdown";
import UnicodeCharacterDropdownItem from "../../item/dropbown/unicodeCharacter";

import { greatSize } from "../../sizes";
import { codePoints, unicodeCharacters } from "../../unicodeCharacterMap";
import { unicodeCharacterDropdownListMaxHeight } from "../../styles";

const { commonScrollbarThumbBackgroundColour, commonScrollbarTrackBackgroundColour, commonScrollbarCornerBackgroundColour } = commonScheme;

class UnicodeCharacterDropdownList extends DropdownList {
  getSelectedUnicodeCodePoint() {
    let selectedUnicodeCodePoint = null;

    const selectedDropdownItem = this.getSelectedDropdownItem();

    if (selectedDropdownItem !== null) {
      const selectedUnicodeCharacterDropdownItem = selectedDropdownItem,  ///
            codePoint = selectedUnicodeCharacterDropdownItem.getCodePoint();

      selectedUnicodeCodePoint = codePoint; ///
    }

    return selectedUnicodeCodePoint;
  }

  filter(unicodeCharacterFragments) {
    const dropdownItems = this.getDropdownItems(),
          unicodeCharacterDropdownItems = dropdownItems;  ///

    unicodeCharacterDropdownItems.forEach((unicodeCharacterDropdownItem) => {
      unicodeCharacterDropdownItem.filter(unicodeCharacterFragments);
    });

    const selectedDropdownItem = this.getSelectedDropdownItem(dropdownItems);

    if (selectedDropdownItem !== null) {
      let selectedUnicodeCharacterDropdownItem = selectedDropdownItem;  ///

      const selectedUnicodeCharacterDropdownItemDisplayed = selectedUnicodeCharacterDropdownItem.isDisplayed();

      if (!selectedUnicodeCharacterDropdownItemDisplayed) {
        selectedUnicodeCharacterDropdownItem.deselect();
      }
    }
  }

  childElements() {
    const unicodeCharacterDropdownItems = unicodeCharacters.map((unicodeCharacter, index) => {
            const character = unicodeCharacter, ///
                  codePoint = codePoints[index];

            return (

              <UnicodeCharacterDropdownItem character={character} codePoint={codePoint} onMouseOver={this.dropdownItemMouseOverHandler} />

            );
          }),
          childElements = unicodeCharacterDropdownItems; ///

    return childElements;
  }

  parentContext() {
    const parentContext = super.parentContext(),
          getSelectedUnicodeCodePoint = this.getSelectedUnicodeCodePoint.bind(this),
          showUnicodeCharacterDropdownList = this.show.bind(this),  ///
          hideUnicodeCharacterDropdownList = this.hide.bind(this),  ///
          filterUnicodeCharacterDropdownList = this.filter.bind(this),  ///
          isUnicodeCharacterDropdownListEmpty = this.isEmpty.bind(this);  ///

    return ({
      ...parentContext,
      getSelectedUnicodeCodePoint,
      showUnicodeCharacterDropdownList,
      hideUnicodeCharacterDropdownList,
      filterUnicodeCharacterDropdownList,
      isUnicodeCharacterDropdownListEmpty
    });
  }

  static defaultProperties = {
    className: "unicode-character"
  };
}

export default withStyle(UnicodeCharacterDropdownList)`

  max-height: ${unicodeCharacterDropdownListMaxHeight};
  grid-template-columns: ${greatSize} 1fr;
  
  overflow-x: hidden;
  overflow-y: scroll;
  
  ${scrollbarMixin}
  
  ::-webkit-scrollbar-thumb {
    background-color: ${commonScrollbarThumbBackgroundColour};
  }

  ::-webkit-scrollbar-track {
    background-color: ${commonScrollbarTrackBackgroundColour};
  }

  ::-webkit-scrollbar-corner {
    background-color: ${commonScrollbarCornerBackgroundColour};
  }

`;
