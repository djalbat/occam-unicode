"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("juxtapose");
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _occamstyles = require("occam-styles");
var _highmarkfonts = require("highmark-fonts");
var _view = /*#__PURE__*/ _interop_require_default(require("./example/view"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyle = _easywithstyle.default.renderStyle, renderStyles = _easywithstyle.default.renderStyles;
var body = new _easy.Body();
renderStyles();
renderStyle(_highmarkfonts.computerModernStyle);
renderStyle(_occamstyles.juliaMonoStyle);
body.mount(/*#__PURE__*/ React.createElement(_view.default, null));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsganVsaWFNb25vU3R5bGUgfSBmcm9tIFwib2NjYW0tc3R5bGVzXCI7XG5pbXBvcnQgeyBjb21wdXRlck1vZGVyblN0eWxlIH0gZnJvbSBcImhpZ2htYXJrLWZvbnRzXCI7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGUsIHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXdcIjtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbnJlbmRlclN0eWxlcygpO1xuXG5yZW5kZXJTdHlsZShjb21wdXRlck1vZGVyblN0eWxlKTtcblxucmVuZGVyU3R5bGUoanVsaWFNb25vU3R5bGUpO1xuXG5ib2R5Lm1vdW50KFxuXG4gIDxWaWV3Lz5cblxuKTtcbiJdLCJuYW1lcyI6WyJyZW5kZXJTdHlsZSIsIndpdGhTdHlsZSIsInJlbmRlclN0eWxlcyIsImJvZHkiLCJCb2R5IiwiY29tcHV0ZXJNb2Rlcm5TdHlsZSIsImp1bGlhTW9ub1N0eWxlIiwibW91bnQiLCJWaWV3Il0sIm1hcHBpbmdzIjoiQUFBQTs7OztRQUVPO29FQUVlO29CQUVEOzJCQUNVOzZCQUNLOzJEQUluQjs7Ozs7O0FBRmpCLElBQVFBLGNBQThCQyxzQkFBUyxDQUF2Q0QsYUFBYUUsZUFBaUJELHNCQUFTLENBQTFCQztBQUlyQixJQUFNQyxPQUFPLElBQUlDLFVBQUk7QUFFckJGO0FBRUFGLFlBQVlLLGtDQUFtQjtBQUUvQkwsWUFBWU0sMkJBQWM7QUFFMUJILEtBQUtJLEtBQUssZUFFUixvQkFBQ0MsYUFBSSJ9