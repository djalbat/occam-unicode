"use strict";

import { Element } from "easy";

import MainHeader from "./view/header/main";
import GlyphsTable from "./view/table/glyphs";
import SecondaryHeading from "./view/heading/secondary"

import { arrowCharacterMap,
         harpoonCharacterMap,
         greekLetterCharacterMap,
         headedArrowCharacterMap,
         circleCircledCharacterMap,
         classTheoreticCharacterMap,
         logicalOperatorCharacterMap,
         isomorphismSymbolCharacterMap,
         doubleTripleArrowCharacterMap,
         relationalOperatorCharacterMap,
         arithmeticOperatorCharacterMap,
         mathematicalScriptCharacterMap,
         mathematicalFrakturCharacterMap,
         superscriptSubscriptCharacterMap,
         mathematicalDoubleStruckCharacterMap } from "../unicodeCharacterMap";

export default class View extends Element {
  childElements() {
    return ([

      <MainHeader/>,
      <SecondaryHeading>
        Harpoon
      </SecondaryHeading>,
      <GlyphsTable characterMap={harpoonCharacterMap} />,
      <SecondaryHeading>
        Arrow
      </SecondaryHeading>,
      <GlyphsTable characterMap={arrowCharacterMap} />,
      <SecondaryHeading>
        Double Triple Arrow
      </SecondaryHeading>,
      <GlyphsTable characterMap={doubleTripleArrowCharacterMap} />,
      <SecondaryHeading>
        Headed Arrow
      </SecondaryHeading>,
      <GlyphsTable characterMap={headedArrowCharacterMap} />,
      <SecondaryHeading>
        Circle Circled
      </SecondaryHeading>,
      <GlyphsTable characterMap={circleCircledCharacterMap} />,
      <SecondaryHeading>
        Superscript Subscript
      </SecondaryHeading>,
      <GlyphsTable characterMap={superscriptSubscriptCharacterMap} />,
      <SecondaryHeading>
        Relational Operator
      </SecondaryHeading>,
      <GlyphsTable characterMap={relationalOperatorCharacterMap} />,
      <SecondaryHeading>
        Class Theoretic
      </SecondaryHeading>,
      <GlyphsTable characterMap={classTheoreticCharacterMap} />,
      <SecondaryHeading>
        Isomorphism
      </SecondaryHeading>,
      <GlyphsTable characterMap={isomorphismSymbolCharacterMap} />,
      <SecondaryHeading>
        Logical Operator
      </SecondaryHeading>,
      <GlyphsTable characterMap={logicalOperatorCharacterMap} />,
      <SecondaryHeading>
        Arithmetic Operator
      </SecondaryHeading>,
      <GlyphsTable characterMap={arithmeticOperatorCharacterMap} />,
      <SecondaryHeading>
        Greek Letter
      </SecondaryHeading>,
      <GlyphsTable characterMap={greekLetterCharacterMap} />,
      <SecondaryHeading>
        Mathematical Script
      </SecondaryHeading>,
      <GlyphsTable characterMap={mathematicalScriptCharacterMap} />,
      <SecondaryHeading>
        Mathematical Fraktur
      </SecondaryHeading>,
      <GlyphsTable characterMap={mathematicalFrakturCharacterMap} />,
      <SecondaryHeading>
        Mathematical Double Struck
      </SecondaryHeading>,
      <GlyphsTable characterMap={mathematicalDoubleStruckCharacterMap} />

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}
