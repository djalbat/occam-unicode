"use strict";

import { UPDATE_CUSTOM_EVENT_TYPE, CHANGE_CUSTOM_EVENT_TYPE, SELECT_CUSTOM_EVENT_TYPE } from "../customEventTypes";

function onCustomUpdate(updateCustomHandler) {
  const customEVentType = UPDATE_CUSTOM_EVENT_TYPE,
        customHandler = updateCustomHandler;  ///

  this.onCustomEvent(customEVentType, customHandler);
}

function offCustomUpdate(updateCustomHandler) {
  const customEVentType = UPDATE_CUSTOM_EVENT_TYPE,
        customHandler = updateCustomHandler;  ///

  this.offCustomEvent(customEVentType, customHandler);
}

function onCustomChange(changeCustomHandler) {
  const customEVentType = CHANGE_CUSTOM_EVENT_TYPE,
        customHandler = changeCustomHandler;  ///

  this.onCustomEvent(customEVentType, customHandler);
}

function offCustomChange(changeCustomHandler) {
  const customEVentType = CHANGE_CUSTOM_EVENT_TYPE,
        customHandler = changeCustomHandler;  ///

  this.offCustomEvent(customEVentType, customHandler);
}

function onCustomSelect(selectCustomHandler) {
  const customEVentType = SELECT_CUSTOM_EVENT_TYPE,
        customHandler = selectCustomHandler;  ///

  this.onCustomEvent(customEVentType, customHandler);
}

function offCustomSelect(selectCustomHandler) {
  const customEVentType = SELECT_CUSTOM_EVENT_TYPE,
        customHandler = selectCustomHandler;  ///

  this.offCustomEvent(customEVentType, customHandler);
}

const customEventMixins = {
  onCustomUpdate,
  offCustomUpdate,
  onCustomChange,
  offCustomChange,
  onCustomSelect,
  offCustomSelect
};

export default customEventMixins;
