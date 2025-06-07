"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _occamstyles = require("occam-styles");
var _glyph = /*#__PURE__*/ _interop_require_default(require("../../span/glyph"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  color: ",
        ";\n  padding: 1rem;\n  font-size: 4rem;\n  background-color: ",
        ";\n\n  ",
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var woodsmoke = _occamstyles.colours.woodsmoke, gainsborough = _occamstyles.colours.gainsborough;
var JuliaMonoGlyphSpan = /*#__PURE__*/ function(GlyphSpan) {
    _inherits(JuliaMonoGlyphSpan, GlyphSpan);
    function JuliaMonoGlyphSpan() {
        _class_call_check(this, JuliaMonoGlyphSpan);
        return _call_super(this, JuliaMonoGlyphSpan, arguments);
    }
    return JuliaMonoGlyphSpan;
}(_glyph.default);
_define_property(JuliaMonoGlyphSpan, "defaultProperties", {
    className: "julia-mono"
});
var _default = (0, _easywithstyle.default)(JuliaMonoGlyphSpan)(_templateObject(), gainsborough, woodsmoke, _occamstyles.juliaMonoFontMixin);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvc3Bhbi9nbHlwaC9qdWxpYU1vbm8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGNvbG91cnMgfSBmcm9tIFwib2NjYW0tc3R5bGVzXCI7XG5pbXBvcnQgeyBqdWxpYU1vbm9Gb250TWl4aW4gfSBmcm9tIFwib2NjYW0tc3R5bGVzXCI7XG5cbmltcG9ydCBHbHlwaFNwYW4gZnJvbSBcIi4uLy4uL3NwYW4vZ2x5cGhcIjtcblxuY29uc3QgeyB3b29kc21va2UsIGdhaW5zYm9yb3VnaCB9ID0gY29sb3VycztcblxuY2xhc3MgSnVsaWFNb25vR2x5cGhTcGFuIGV4dGVuZHMgR2x5cGhTcGFuIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJqdWxpYS1tb25vXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEp1bGlhTW9ub0dseXBoU3BhbilgXG5cbiAgY29sb3I6ICR7Z2FpbnNib3JvdWdofTtcbiAgcGFkZGluZzogMXJlbTtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3dvb2RzbW9rZX07XG5cbiAgJHtqdWxpYU1vbm9Gb250TWl4aW59O1xuICBcbmA7XG4iXSwibmFtZXMiOlsid29vZHNtb2tlIiwiY29sb3VycyIsImdhaW5zYm9yb3VnaCIsIkp1bGlhTW9ub0dseXBoU3BhbiIsIkdseXBoU3BhbiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwianVsaWFNb25vRm9udE1peGluIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUFBOzs7b0VBZnNCOzJCQUVFOzREQUdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQVFBLFlBQTRCQyxvQkFBTyxDQUFuQ0QsV0FBV0UsZUFBaUJELG9CQUFPLENBQXhCQztBQUVuQixJQUFBLEFBQU1DLG1DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztXQUFBQTtFQUEyQkMsY0FBUztBQUN4QyxpQkFESUQsb0JBQ0dFLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ0osdUNBRWRELGNBR1dGLFdBRWxCUSwrQkFBa0IifQ==