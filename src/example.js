"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";
import { controller } from "sufficient";
import { juliaMonoStyle } from "occam-styles";
import { computerModernStyle } from "highmark-fonts";

import createMethods from "./example/createMethods";

const { renderStyle, renderStyles } = withStyle;

import View from "./example/view";

renderStyles();

renderStyle(computerModernStyle);

renderStyle(juliaMonoStyle);

const body = new Body(),  ///
      view =

        <View/>

      ,
      model = null,
      scheduler = null;

controller.assignMethods(createMethods, scheduler, model, view);

body.mount(view);
