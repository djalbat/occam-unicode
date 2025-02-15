"use strict";

import "juxtapose";

import withStyle from "easy-with-style";

import { Body } from "easy";
import { juliaMonoStyle } from "occam-styles";

const { renderStyle, renderStyles } = withStyle;

import View from "./example/view";

const body = new Body();

renderStyles();

renderStyle(juliaMonoStyle);

body.mount(

  <View/>

);
