"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return UnicodeCharacterDropdownItem;
    }
});
var _dropdown = /*#__PURE__*/ _interop_require_default(require("../../item/dropdown"));
var _glyph = /*#__PURE__*/ _interop_require_default(require("../../span/unicodeCharacter/glyph"));
var _ascii = /*#__PURE__*/ _interop_require_default(require("../../span/unicodeCharacter/ascii"));
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
var UnicodeCharacterDropdownItem = /*#__PURE__*/ function(DropdownItem) {
    _inherits(UnicodeCharacterDropdownItem, DropdownItem);
    function UnicodeCharacterDropdownItem() {
        _class_call_check(this, UnicodeCharacterDropdownItem);
        return _call_super(this, UnicodeCharacterDropdownItem, arguments);
    }
    _create_class(UnicodeCharacterDropdownItem, [
        {
            key: "isSelected",
            value: function isSelected() {
                var asciiUnicodeCharacterSpanSelected = this.isASCIIUnicodeCharacterSpanSelected();
                return asciiUnicodeCharacterSpanSelected;
            }
        },
        {
            key: "deselect",
            value: function deselect() {
                this.deselectGlyphUnicodeCharacterSpan();
                this.deselectASCIIUnicodeCharacterSpan();
            }
        },
        {
            key: "select",
            value: function select() {
                this.selectGlyphUnicodeCharacterSpan();
                this.selectASCIIUnicodeCharacterSpan();
            }
        },
        {
            key: "filter",
            value: function filter(characterFragments) {
                var character = this.getCharacter(), displayed = characterFragments.every(function(characterFragment) {
                    var characterIncludesCharacterFragment = character.includes(characterFragment);
                    if (characterIncludesCharacterFragment) {
                        return true;
                    }
                });
                displayed ? this.show() : this.hide();
            }
        },
        {
            key: "getCodePoint",
            value: function getCodePoint() {
                var codePoint = this.properties.codePoint;
                return codePoint;
            }
        },
        {
            key: "getCharacter",
            value: function getCharacter() {
                var character = this.properties.character;
                return character;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var character = this.getCharacter(), codePoint = this.getCodePoint(), childElements = [
                    /*#__PURE__*/ React.createElement(_glyph.default, {
                        codePoint: codePoint
                    }),
                    /*#__PURE__*/ React.createElement(_ascii.default, {
                        character: character
                    })
                ];
                return childElements;
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
            }
        }
    ]);
    return UnicodeCharacterDropdownItem;
}(_dropdown.default);
_define_property(UnicodeCharacterDropdownItem, "ignoredProperties", [
    "character",
    "codePoint"
]);
_define_property(UnicodeCharacterDropdownItem, "defaultProperties", {
    className: "unicode-character"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtL2Ryb3Bib3duL3VuaWNvZGVDaGFyYWN0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEcm9wZG93bkl0ZW0gZnJvbSBcIi4uLy4uL2l0ZW0vZHJvcGRvd25cIjtcbmltcG9ydCBHbHlwaFVuaWNvZGVDaGFyYWN0ZXJTcGFuIGZyb20gXCIuLi8uLi9zcGFuL3VuaWNvZGVDaGFyYWN0ZXIvZ2x5cGhcIjtcbmltcG9ydCBBU0NJSVVuaWNvZGVDaGFyYWN0ZXJTcGFuIGZyb20gXCIuLi8uLi9zcGFuL3VuaWNvZGVDaGFyYWN0ZXIvYXNjaWlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSXRlbSBleHRlbmRzIERyb3Bkb3duSXRlbSB7XG4gIGlzU2VsZWN0ZWQoKSB7XG4gICAgY29uc3QgYXNjaWlVbmljb2RlQ2hhcmFjdGVyU3BhblNlbGVjdGVkID0gdGhpcy5pc0FTQ0lJVW5pY29kZUNoYXJhY3RlclNwYW5TZWxlY3RlZCgpO1xuXG4gICAgcmV0dXJuIGFzY2lpVW5pY29kZUNoYXJhY3RlclNwYW5TZWxlY3RlZDtcbiAgfVxuXG4gIGRlc2VsZWN0KCkge1xuICAgIHRoaXMuZGVzZWxlY3RHbHlwaFVuaWNvZGVDaGFyYWN0ZXJTcGFuKCk7XG4gICAgdGhpcy5kZXNlbGVjdEFTQ0lJVW5pY29kZUNoYXJhY3RlclNwYW4oKTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICB0aGlzLnNlbGVjdEdseXBoVW5pY29kZUNoYXJhY3RlclNwYW4oKTtcbiAgICB0aGlzLnNlbGVjdEFTQ0lJVW5pY29kZUNoYXJhY3RlclNwYW4oKTtcbiAgfVxuXG4gIGZpbHRlcihjaGFyYWN0ZXJGcmFnbWVudHMpIHtcbiAgICBjb25zdCBjaGFyYWN0ZXIgPSB0aGlzLmdldENoYXJhY3RlcigpLFxuICAgICAgICAgIGRpc3BsYXllZCA9IGNoYXJhY3RlckZyYWdtZW50cy5ldmVyeSgoY2hhcmFjdGVyRnJhZ21lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlckluY2x1ZGVzQ2hhcmFjdGVyRnJhZ21lbnQgPSBjaGFyYWN0ZXIuaW5jbHVkZXMoY2hhcmFjdGVyRnJhZ21lbnQpO1xuXG4gICAgICAgICAgICBpZiAoY2hhcmFjdGVySW5jbHVkZXNDaGFyYWN0ZXJGcmFnbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGRpc3BsYXllZCA/XG4gICAgICB0aGlzLnNob3coKSA6XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgZ2V0Q29kZVBvaW50KCkge1xuICAgIGNvbnN0IHsgY29kZVBvaW50IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gY29kZVBvaW50O1xuICB9XG5cbiAgZ2V0Q2hhcmFjdGVyKCkge1xuICAgIGNvbnN0IHsgY2hhcmFjdGVyIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gY2hhcmFjdGVyO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBjaGFyYWN0ZXIgPSB0aGlzLmdldENoYXJhY3RlcigpLFxuICAgICAgICAgIGNvZGVQb2ludCA9IHRoaXMuZ2V0Q29kZVBvaW50KCksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IFtcblxuICAgICAgICAgICAgPEdseXBoVW5pY29kZUNoYXJhY3RlclNwYW4gY29kZVBvaW50PXtjb2RlUG9pbnR9IC8+LFxuICAgICAgICAgICAgPEFTQ0lJVW5pY29kZUNoYXJhY3RlclNwYW4gY2hhcmFjdGVyPXtjaGFyYWN0ZXJ9IC8+XG5cbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiY2hhcmFjdGVyXCIsXG4gICAgXCJjb2RlUG9pbnRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidW5pY29kZS1jaGFyYWN0ZXJcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW0iLCJpc1NlbGVjdGVkIiwiYXNjaWlVbmljb2RlQ2hhcmFjdGVyU3BhblNlbGVjdGVkIiwiaXNBU0NJSVVuaWNvZGVDaGFyYWN0ZXJTcGFuU2VsZWN0ZWQiLCJkZXNlbGVjdCIsImRlc2VsZWN0R2x5cGhVbmljb2RlQ2hhcmFjdGVyU3BhbiIsImRlc2VsZWN0QVNDSUlVbmljb2RlQ2hhcmFjdGVyU3BhbiIsInNlbGVjdCIsInNlbGVjdEdseXBoVW5pY29kZUNoYXJhY3RlclNwYW4iLCJzZWxlY3RBU0NJSVVuaWNvZGVDaGFyYWN0ZXJTcGFuIiwiZmlsdGVyIiwiY2hhcmFjdGVyRnJhZ21lbnRzIiwiY2hhcmFjdGVyIiwiZ2V0Q2hhcmFjdGVyIiwiZGlzcGxheWVkIiwiZXZlcnkiLCJjaGFyYWN0ZXJGcmFnbWVudCIsImNoYXJhY3RlckluY2x1ZGVzQ2hhcmFjdGVyRnJhZ21lbnQiLCJpbmNsdWRlcyIsInNob3ciLCJoaWRlIiwiZ2V0Q29kZVBvaW50IiwiY29kZVBvaW50IiwicHJvcGVydGllcyIsImNoaWxkRWxlbWVudHMiLCJHbHlwaFVuaWNvZGVDaGFyYWN0ZXJTcGFuIiwiQVNDSUlVbmljb2RlQ2hhcmFjdGVyU3BhbiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRHJvcGRvd25JdGVtIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7K0RBSkk7NERBQ2E7NERBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLElBQUEsQUFBTUEsNkNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxvQ0FBb0MsSUFBSSxDQUFDQyxtQ0FBbUM7Z0JBRWxGLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxpQ0FBaUM7Z0JBQ3RDLElBQUksQ0FBQ0MsaUNBQWlDO1lBQ3hDOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsK0JBQStCO2dCQUNwQyxJQUFJLENBQUNDLCtCQUErQjtZQUN0Qzs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxrQkFBa0I7Z0JBQ3ZCLElBQU1DLFlBQVksSUFBSSxDQUFDQyxZQUFZLElBQzdCQyxZQUFZSCxtQkFBbUJJLEtBQUssQ0FBQyxTQUFDQztvQkFDcEMsSUFBTUMscUNBQXFDTCxVQUFVTSxRQUFRLENBQUNGO29CQUU5RCxJQUFJQyxvQ0FBb0M7d0JBQ3RDLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRU5ILFlBQ0UsSUFBSSxDQUFDSyxJQUFJLEtBQ1AsSUFBSSxDQUFDQyxJQUFJO1lBQ2Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFQyxZQUFjLElBQUksQ0FBQ0MsVUFBVSxDQUE3QkQ7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFULEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVELFlBQWMsSUFBSSxDQUFDVyxVQUFVLENBQTdCWDtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1aLFlBQVksSUFBSSxDQUFDQyxZQUFZLElBQzdCUyxZQUFZLElBQUksQ0FBQ0QsWUFBWSxJQUM3QkcsZ0JBQWdCO2tDQUVkLG9CQUFDQyxjQUF5Qjt3QkFBQ0gsV0FBV0E7O2tDQUN0QyxvQkFBQ0ksY0FBeUI7d0JBQUNkLFdBQVdBOztpQkFFdkM7Z0JBRVAsT0FBT1k7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLGFBQWE7WUFDcEI7OztXQTNEbUI1QjtFQUFxQzZCLGlCQUFZO0FBNkRwRSxpQkE3RG1CN0IsOEJBNkRaOEIscUJBQW9CO0lBQ3pCO0lBQ0E7Q0FDRDtBQUVELGlCQWxFbUI5Qiw4QkFrRVorQixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9