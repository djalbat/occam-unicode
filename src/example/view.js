"use strict";

import { Element } from "easy";

import MainHeader from "./view/header/main";
import GlyphsTable from "./view/table/glyphs";
import SecondaryHeading from "./view/heading/secondary"

import { shapeCharacterMap,
         angleCharacterMap,
         arrowCharacterMap,
         harpoonCharacterMap,
         equalityCharacterMap,
         greekLetterCharacterMap,
         headedArrowCharacterMap,
         circleCircledCharacterMap,
         classTheoreticCharacterMap,
         logicalOperatorCharacterMap,
         doubleTripleArrowCharacterMap,
         isomorphismSymbolCharacterMap,
         relationalOperatorCharacterMap,
         mathematicalScriptCharacterMap,
         arithmeticOperatorCharacterMap,
         derivativeIntegralCharacterMap,
         parenthesisBracketCharacterMap,
         mathematicalFrakturCharacterMap,
         superscriptSubscriptCharacterMap,
         miscellaneousOperatorCharacterMap,
         mathematicalDoubleStruckCharacterMap } from "../unicodeCharacterMap";

export default class View extends Element {
  childElements() {
    return ([

      <MainHeader/>,
      <SecondaryHeading>
        Miscellaneous Operator
      </SecondaryHeading>,
      <GlyphsTable characterMap={miscellaneousOperatorCharacterMap} />,
      <SecondaryHeading>
        Class Theoretic
      </SecondaryHeading>,
      <GlyphsTable characterMap={classTheoreticCharacterMap} />,
      <SecondaryHeading>
        Angle
      </SecondaryHeading>,
      <GlyphsTable characterMap={angleCharacterMap} />,
      <SecondaryHeading>
        Logical Operator
      </SecondaryHeading>,
      <GlyphsTable characterMap={logicalOperatorCharacterMap} />,
      <SecondaryHeading>
        Shape
      </SecondaryHeading>,
      <GlyphsTable characterMap={shapeCharacterMap} />,
      <SecondaryHeading>
        Parenthesis Bracket
      </SecondaryHeading>,
      <GlyphsTable characterMap={parenthesisBracketCharacterMap} />,
      <SecondaryHeading>
        Equality
      </SecondaryHeading>,
      <GlyphsTable characterMap={equalityCharacterMap} />,
      <SecondaryHeading>
        Arithmetic Operator
      </SecondaryHeading>,
      <GlyphsTable characterMap={arithmeticOperatorCharacterMap} />,
      <SecondaryHeading>
        Derivative Integral
      </SecondaryHeading>,
      <GlyphsTable characterMap={derivativeIntegralCharacterMap} />,
      <SecondaryHeading>
        Circle Circled
      </SecondaryHeading>,
      <GlyphsTable characterMap={circleCircledCharacterMap} />,
      <SecondaryHeading>
        Arrow
      </SecondaryHeading>,
      <GlyphsTable characterMap={arrowCharacterMap} />,
      <SecondaryHeading>
        Relational Operator
      </SecondaryHeading>,
      <GlyphsTable characterMap={relationalOperatorCharacterMap} />,
      <SecondaryHeading>
        Harpoon
      </SecondaryHeading>,
      <GlyphsTable characterMap={harpoonCharacterMap} />,
      <SecondaryHeading>
        Double Triple Arrow
      </SecondaryHeading>,
      <GlyphsTable characterMap={doubleTripleArrowCharacterMap} />,
      <SecondaryHeading>
        Headed Arrow
      </SecondaryHeading>,
      <GlyphsTable characterMap={headedArrowCharacterMap} />,
      <SecondaryHeading>
        Superscript Subscript
      </SecondaryHeading>,
      <GlyphsTable characterMap={superscriptSubscriptCharacterMap} />,
      <SecondaryHeading>
        Isomorphism
      </SecondaryHeading>,
      <GlyphsTable characterMap={isomorphismSymbolCharacterMap} />,
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
