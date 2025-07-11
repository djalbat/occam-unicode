"use strict";

import { characterMap } from "highmark-fonts";

export default characterMap;

export const characters = Object.keys(characterMap);  ///

export const codePoints = characters.map((character) => {
  const codePoint = characterMap[character];

  return codePoint;
});
