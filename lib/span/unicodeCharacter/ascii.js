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
        "\n\n  color: ",
        ";\n  display: flex;\n  white-space: nowrap;\n  align-items: center;\n  padding-left: ",
        ";\n  text-transform: uppercase;\n  justify-content: flex-start;\n  \n  font-weight: normal;\n  \n  .selected {\n    font-weight: bold;\n  }\n\n  ",
        "\n      \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var commonColour = _occamstyles.commonScheme.commonColour;
var ASCIIUnicodeCharacterSpan = /*#__PURE__*/ function(UnicodeCharacterSpan) {
    _inherits(ASCIIUnicodeCharacterSpan, UnicodeCharacterSpan);
    function ASCIIUnicodeCharacterSpan() {
        _class_call_check(this, ASCIIUnicodeCharacterSpan);
        return _call_super(this, ASCIIUnicodeCharacterSpan, arguments);
    }
    _create_class(ASCIIUnicodeCharacterSpan, [
        {
            key: "childElements",
            value: function childElements() {
                var character = this.properties.character, childElements = character; ///
                return childElements;
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var selectASCIIUnicodeCharacterSpan = this.select.bind(this), deselectASCIIUnicodeCharacterSpan = this.deselect.bind(this), isASCIIUnicodeCharacterSpanSelected = this.isSelected.bind(this); ///
                return {
                    selectASCIIUnicodeCharacterSpan: selectASCIIUnicodeCharacterSpan,
                    deselectASCIIUnicodeCharacterSpan: deselectASCIIUnicodeCharacterSpan,
                    isASCIIUnicodeCharacterSpanSelected: isASCIIUnicodeCharacterSpanSelected
                };
            }
        }
    ]);
    return ASCIIUnicodeCharacterSpan;
}(_unicodeCharacter.default);
_define_property(ASCIIUnicodeCharacterSpan, "ignoredProperties", [
    "character"
]);
_define_property(ASCIIUnicodeCharacterSpan, "defaultProperties", {
    className: "ascii"
});
var _default = (0, _easywithstyle.default)(ASCIIUnicodeCharacterSpan)(_templateObject(), commonColour, _sizes.halfSize, _occamstyles.commonFontMixin);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zcGFuL3VuaWNvZGVDaGFyYWN0ZXIvYXNjaWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGNvbW1vblNjaGVtZSwgY29tbW9uRm9udE1peGluIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuXG5pbXBvcnQgVW5pY29kZUNoYXJhY3RlclNwYW4gZnJvbSBcIi4uLy4uL3NwYW4vdW5pY29kZUNoYXJhY3RlclwiO1xuXG5pbXBvcnQgeyBoYWxmU2l6ZSB9IGZyb20gXCIuLi8uLi9zaXplc1wiO1xuXG5jb25zdCB7IGNvbW1vbkNvbG91ciB9ID0gY29tbW9uU2NoZW1lO1xuXG5jbGFzcyBBU0NJSVVuaWNvZGVDaGFyYWN0ZXJTcGFuIGV4dGVuZHMgVW5pY29kZUNoYXJhY3RlclNwYW4ge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgY2hhcmFjdGVyIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGNoYXJhY3RlcjsgIC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNlbGVjdEFTQ0lJVW5pY29kZUNoYXJhY3RlclNwYW4gPSB0aGlzLnNlbGVjdC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZGVzZWxlY3RBU0NJSVVuaWNvZGVDaGFyYWN0ZXJTcGFuID0gdGhpcy5kZXNlbGVjdC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgaXNBU0NJSVVuaWNvZGVDaGFyYWN0ZXJTcGFuU2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNlbGVjdEFTQ0lJVW5pY29kZUNoYXJhY3RlclNwYW4sXG4gICAgICBkZXNlbGVjdEFTQ0lJVW5pY29kZUNoYXJhY3RlclNwYW4sXG4gICAgICBpc0FTQ0lJVW5pY29kZUNoYXJhY3RlclNwYW5TZWxlY3RlZFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiY2hhcmFjdGVyXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImFzY2lpXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEFTQ0lJVW5pY29kZUNoYXJhY3RlclNwYW4pYFxuXG4gIGNvbG9yOiAke2NvbW1vbkNvbG91cn07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogJHtoYWxmU2l6ZX07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIFxuICAuc2VsZWN0ZWQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgJHtjb21tb25Gb250TWl4aW59XG4gICAgICBcbmA7XG4iXSwibmFtZXMiOlsiY29tbW9uQ29sb3VyIiwiY29tbW9uU2NoZW1lIiwiQVNDSUlVbmljb2RlQ2hhcmFjdGVyU3BhbiIsImNoaWxkRWxlbWVudHMiLCJjaGFyYWN0ZXIiLCJwcm9wZXJ0aWVzIiwicGFyZW50Q29udGV4dCIsInNlbGVjdEFTQ0lJVW5pY29kZUNoYXJhY3RlclNwYW4iLCJzZWxlY3QiLCJiaW5kIiwiZGVzZWxlY3RBU0NJSVVuaWNvZGVDaGFyYWN0ZXJTcGFuIiwiZGVzZWxlY3QiLCJpc0FTQ0lJVW5pY29kZUNoYXJhY3RlclNwYW5TZWxlY3RlZCIsImlzU2VsZWN0ZWQiLCJVbmljb2RlQ2hhcmFjdGVyU3BhbiIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJoYWxmU2l6ZSIsImNvbW1vbkZvbnRNaXhpbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeUNBOzs7ZUFBQTs7O29FQXZDc0I7MkJBRXdCO3VFQUViO3FCQUVSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBTSxBQUFFQSxlQUFpQkMseUJBQVksQ0FBN0JEO0FBRVIsSUFBQSxBQUFNRSwwQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUMsWUFBYyxJQUFJLENBQUNDLFVBQVUsQ0FBN0JELFdBQ0ZELGdCQUFnQkMsV0FBWSxHQUFHO2dCQUVyQyxPQUFPRDtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGtDQUFrQyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDdkRDLG9DQUFvQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FDM0RHLHNDQUFzQyxJQUFJLENBQUNDLFVBQVUsQ0FBQ0osSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUUzRSxPQUFRO29CQUNORixpQ0FBQUE7b0JBQ0FHLG1DQUFBQTtvQkFDQUUscUNBQUFBO2dCQUNGO1lBQ0Y7OztXQWxCSVY7RUFBa0NZLHlCQUFvQjtBQW9CMUQsaUJBcEJJWiwyQkFvQkdhLHFCQUFvQjtJQUN6QjtDQUNEO0FBRUQsaUJBeEJJYiwyQkF3QkdjLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2hCLDhDQUVkRixjQUlPbUIsZUFBUSxFQVV0QkMsNEJBQWUifQ==