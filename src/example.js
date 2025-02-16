"use strict";

import "juxtapose";

import withStyle from "easy-with-style";

import { Body } from "easy";
import { juliaMonoStyle } from "occam-styles";
import { computerModernStyle } from "highmark-fonts";

const { renderStyle, renderStyles } = withStyle;

import View from "./example/view";

const body = new Body();

renderStyles();

renderStyle(computerModernStyle);

renderStyle(juliaMonoStyle);

body.mount(

  <View/>

);
