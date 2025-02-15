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
var _unicodeCharacter = /*#__PURE__*/ _interop_require_default(require("../../span/unicodeCharacter"));
var _sizes = require("../../sizes");
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
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
        "\n\n  left: 0;\n  display: flex;\n  position: sticky;\n  font-size: ",
        ";\n  align-items: center;\n  justify-content: center;\n  background-color: ",
        ";\n\n  color: ",
        ";\n\n  .selected {\n    color: ",
        ";\n  }\n  \n  ",
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var glyphUnicodeCharacterColour = _occamstyles.commonScheme.glyphUnicodeCharacterColour, selectedGlyphUnicodeCharacterColour = _occamstyles.commonScheme.selectedGlyphUnicodeCharacterColour, glyphUnicodeCharacterBackgroundColour = _occamstyles.commonScheme.glyphUnicodeCharacterBackgroundColour;
var GlyphUnicodeCharacterSpan = /*#__PURE__*/ function(UnicodeCharacterSpan) {
    _inherits(GlyphUnicodeCharacterSpan, UnicodeCharacterSpan);
    function GlyphUnicodeCharacterSpan() {
        _class_call_check(this, GlyphUnicodeCharacterSpan);
        return _call_super(this, GlyphUnicodeCharacterSpan, arguments);
    }
    _create_class(GlyphUnicodeCharacterSpan, [
        {
            key: "childElements",
            value: function childElements() {
                var codePoint = this.properties.codePoint, string = String.fromCodePoint(codePoint), childElements = string; ///
                return childElements;
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var selectGlyphUnicodeCharacterSpan = this.select.bind(this), deselectGlyphUnicodeCharacterSpan = this.deselect.bind(this); ///
                return {
                    selectGlyphUnicodeCharacterSpan: selectGlyphUnicodeCharacterSpan,
                    deselectGlyphUnicodeCharacterSpan: deselectGlyphUnicodeCharacterSpan
                };
            }
        }
    ]);
    return GlyphUnicodeCharacterSpan;
}(_unicodeCharacter.default);
_define_property(GlyphUnicodeCharacterSpan, "ignoredProperties", [
    "codePoint"
]);
_define_property(GlyphUnicodeCharacterSpan, "defaultProperties", {
    className: "glyph"
});
var _default = (0, _easywithstyle.default)(GlyphUnicodeCharacterSpan)(_templateObject(), _sizes.largeSize, glyphUnicodeCharacterBackgroundColour, glyphUnicodeCharacterColour, selectedGlyphUnicodeCharacterColour, _occamstyles.juliaMonoFontMixin);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zcGFuL3VuaWNvZGVDaGFyYWN0ZXIvZ2x5cGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGNvbW1vblNjaGVtZSwganVsaWFNb25vRm9udE1peGluIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuXG5pbXBvcnQgVW5pY29kZUNoYXJhY3RlclNwYW4gZnJvbSBcIi4uLy4uL3NwYW4vdW5pY29kZUNoYXJhY3RlclwiO1xuXG5pbXBvcnQgeyBsYXJnZVNpemUgfSBmcm9tIFwiLi4vLi4vc2l6ZXNcIjtcblxuY29uc3QgeyBnbHlwaFVuaWNvZGVDaGFyYWN0ZXJDb2xvdXIsIHNlbGVjdGVkR2x5cGhVbmljb2RlQ2hhcmFjdGVyQ29sb3VyLCBnbHlwaFVuaWNvZGVDaGFyYWN0ZXJCYWNrZ3JvdW5kQ29sb3VyIH0gPSBjb21tb25TY2hlbWU7XG5cbmNsYXNzIEdseXBoVW5pY29kZUNoYXJhY3RlclNwYW4gZXh0ZW5kcyBVbmljb2RlQ2hhcmFjdGVyU3BhbiB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBjb2RlUG9pbnQgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBzdHJpbmcgPSBTdHJpbmcuZnJvbUNvZGVQb2ludChjb2RlUG9pbnQpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBzdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNlbGVjdEdseXBoVW5pY29kZUNoYXJhY3RlclNwYW4gPSB0aGlzLnNlbGVjdC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZGVzZWxlY3RHbHlwaFVuaWNvZGVDaGFyYWN0ZXJTcGFuID0gdGhpcy5kZXNlbGVjdC5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNlbGVjdEdseXBoVW5pY29kZUNoYXJhY3RlclNwYW4sXG4gICAgICBkZXNlbGVjdEdseXBoVW5pY29kZUNoYXJhY3RlclNwYW5cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcImNvZGVQb2ludFwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJnbHlwaFwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShHbHlwaFVuaWNvZGVDaGFyYWN0ZXJTcGFuKWBcblxuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBmb250LXNpemU6ICR7bGFyZ2VTaXplfTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7Z2x5cGhVbmljb2RlQ2hhcmFjdGVyQmFja2dyb3VuZENvbG91cn07XG5cbiAgY29sb3I6ICR7Z2x5cGhVbmljb2RlQ2hhcmFjdGVyQ29sb3VyfTtcblxuICAuc2VsZWN0ZWQge1xuICAgIGNvbG9yOiAke3NlbGVjdGVkR2x5cGhVbmljb2RlQ2hhcmFjdGVyQ29sb3VyfTtcbiAgfVxuICBcbiAgJHtqdWxpYU1vbm9Gb250TWl4aW59O1xuICBcbmA7XG4iXSwibmFtZXMiOlsiZ2x5cGhVbmljb2RlQ2hhcmFjdGVyQ29sb3VyIiwiY29tbW9uU2NoZW1lIiwic2VsZWN0ZWRHbHlwaFVuaWNvZGVDaGFyYWN0ZXJDb2xvdXIiLCJnbHlwaFVuaWNvZGVDaGFyYWN0ZXJCYWNrZ3JvdW5kQ29sb3VyIiwiR2x5cGhVbmljb2RlQ2hhcmFjdGVyU3BhbiIsImNoaWxkRWxlbWVudHMiLCJjb2RlUG9pbnQiLCJwcm9wZXJ0aWVzIiwic3RyaW5nIiwiU3RyaW5nIiwiZnJvbUNvZGVQb2ludCIsInBhcmVudENvbnRleHQiLCJzZWxlY3RHbHlwaFVuaWNvZGVDaGFyYWN0ZXJTcGFuIiwic2VsZWN0IiwiYmluZCIsImRlc2VsZWN0R2x5cGhVbmljb2RlQ2hhcmFjdGVyU3BhbiIsImRlc2VsZWN0IiwiVW5pY29kZUNoYXJhY3RlclNwYW4iLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwibGFyZ2VTaXplIiwianVsaWFNb25vRm9udE1peGluIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3Q0E7OztlQUFBOzs7b0VBdENzQjsyQkFFMkI7dUVBRWhCO3FCQUVQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFRQSw4QkFBNEdDLHlCQUFZLENBQXhIRCw2QkFBNkJFLHNDQUErRUQseUJBQVksQ0FBM0ZDLHFDQUFxQ0Msd0NBQTBDRix5QkFBWSxDQUF0REU7QUFFMUUsSUFBQSxBQUFNQywwQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUMsWUFBYyxJQUFJLENBQUNDLFVBQVUsQ0FBN0JELFdBQ0ZFLFNBQVNDLE9BQU9DLGFBQWEsQ0FBQ0osWUFDOUJELGdCQUFnQkcsUUFBUSxHQUFHO2dCQUVqQyxPQUFPSDtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGtDQUFrQyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDdkRDLG9DQUFvQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO2dCQUV4RSxPQUFRO29CQUNORixpQ0FBQUE7b0JBQ0FHLG1DQUFBQTtnQkFDRjtZQUNGOzs7V0FqQklYO0VBQWtDYSx5QkFBb0I7QUFtQjFELGlCQW5CSWIsMkJBbUJHYyxxQkFBb0I7SUFDekI7Q0FDRDtBQUVELGlCQXZCSWQsMkJBdUJHZSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNqQiw4Q0FLVmtCLGdCQUFTLEVBR0ZuQix1Q0FFWEgsNkJBR0VFLHFDQUdUcUIsK0JBQWtCIn0=