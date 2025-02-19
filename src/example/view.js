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
         orderingCharacterMap,
         calculusCharacterMap,
         relationalCharacterMap,
         arithmeticCharacterMap,
         greekLetterCharacterMap,
         headedArrowCharacterMap,
         scriptLettersCharacterMap,
         circleCircledCharacterMap,
         tackTurnstileCharacterMap,
         classTheoreticCharacterMap,
         frakturLettersCharacterMap,
         logicalOperatorCharacterMap,
         doubleTripleArrowCharacterMap,
         parenthesisBracketCharacterMap,
         doubleStruckLettersCharacterMap,
         superscriptSubscriptCharacterMap,
         miscellaneousCharacterMap } from "../unicodeCharacterMap";

export default class View extends Element {
  childElements() {
    const parameters = parametersFromNothing(),
          { name, title } = parameters,
          characterMap = characterMapFromName(name);

    return ([

      <MainHeader/>,
      <SecondaryHeading>
        {title}
      </SecondaryHeading>,
      <GlyphsTable characterMap={characterMap} />

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

function parametersFromNothing() {
  const { search } = location,
        start = 1,
        queryString = search.substring(start),
        nameValueStrings = queryString.split("&"),
        parameters = nameValueStrings.reduce((parameters, nameValueString) => {
          const [ name, encodedValue ] = nameValueString.split("="),
                value = encodedValue.replace(/\+/g, " ");

          parameters[name] = value;

          return parameters;
        }, {});

  return parameters;
}

function characterMapFromName(name) {
  let characterMap;

  switch (name) {
    case "shape": characterMap = shapeCharacterMap; break;
    case "angle": characterMap = angleCharacterMap; break;
    case "arrow": characterMap = arrowCharacterMap; break;
    case "harpoon": characterMap = harpoonCharacterMap; break;
    case "equality": characterMap = equalityCharacterMap; break;
    case "ordering": characterMap = orderingCharacterMap; break;
    case "calculus": characterMap = calculusCharacterMap; break;
    case "relational": characterMap = relationalCharacterMap; break;
    case "arithmetic": characterMap = arithmeticCharacterMap; break;
    case "greekLetter": characterMap = greekLetterCharacterMap; break;
    case "headedArrow": characterMap = headedArrowCharacterMap; break;
    case "scriptLetters": characterMap = scriptLettersCharacterMap; break;
    case "circleCircled": characterMap = circleCircledCharacterMap; break;
    case "tackTurnstile": characterMap = tackTurnstileCharacterMap; break;
    case "classTheoretic": characterMap = classTheoreticCharacterMap; break;
    case "frakturLetters": characterMap = frakturLettersCharacterMap; break;
    case "logicalOperator": characterMap = logicalOperatorCharacterMap; break;
    case "doubleTripleArrow": characterMap = doubleTripleArrowCharacterMap; break;
    case "parenthesisBracket": characterMap = parenthesisBracketCharacterMap; break;
    case "doubleStruckLetters": characterMap = doubleStruckLettersCharacterMap; break;
    case "superscriptSubscript": characterMap = superscriptSubscriptCharacterMap; break;
    case "miscellaneous": characterMap = miscellaneousCharacterMap; break;
  }

  return characterMap;
}
