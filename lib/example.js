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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBqdWxpYU1vbm9TdHlsZSB9IGZyb20gXCJvY2NhbS1zdHlsZXNcIjtcbmltcG9ydCB7IGNvbXB1dGVyTW9kZXJuU3R5bGUgfSBmcm9tIFwiaGlnaG1hcmstZm9udHNcIjtcblxuY29uc3QgeyByZW5kZXJTdHlsZSwgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlld1wiO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxucmVuZGVyU3R5bGVzKCk7XG5cbnJlbmRlclN0eWxlKGNvbXB1dGVyTW9kZXJuU3R5bGUpO1xuXG5yZW5kZXJTdHlsZShqdWxpYU1vbm9TdHlsZSk7XG5cbmJvZHkubW91bnQoXG5cbiAgPFZpZXcvPlxuXG4pO1xuIl0sIm5hbWVzIjpbInJlbmRlclN0eWxlIiwid2l0aFN0eWxlIiwicmVuZGVyU3R5bGVzIiwiYm9keSIsIkJvZHkiLCJjb21wdXRlck1vZGVyblN0eWxlIiwianVsaWFNb25vU3R5bGUiLCJtb3VudCIsIlZpZXciXSwibWFwcGluZ3MiOiJBQUFBOzs7O1FBRU87b0VBRWU7b0JBRUQ7MkJBQ1U7NkJBQ0s7MkRBSW5COzs7Ozs7QUFGakIsSUFBUUEsY0FBOEJDLHNCQUFTLENBQXZDRCxhQUFhRSxlQUFpQkQsc0JBQVMsQ0FBMUJDO0FBSXJCLElBQU1DLE9BQU8sSUFBSUMsVUFBSTtBQUVyQkY7QUFFQUYsWUFBWUssa0NBQW1CO0FBRS9CTCxZQUFZTSwyQkFBYztBQUUxQkgsS0FBS0ksS0FBSyxlQUVSLG9CQUFDQyxhQUFJIn0=