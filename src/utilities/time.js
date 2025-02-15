"use strict";

export function defer(func, delay = 0) {
  const timeout = setTimeout(func, delay);

  return timeout;
}
