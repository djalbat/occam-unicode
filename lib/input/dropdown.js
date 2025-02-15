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
var _easy = require("easy");
var _occamstyles = require("occam-styles");
var _sizes = require("../sizes");
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
        ";\n  height: ",
        ";\n  border: 1px solid ",
        ";\n  padding: ",
        ";\n  outline: none;\n  flex-grow: 1;\n  background-color: ",
        ";\n  \n  :disabled {\n    color: ",
        ";\n  }\n  \n  ::selection {\n    color: ",
        ";\n    background-color: ",
        ";\n  }\n\n  ",
        "\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var commonColour = _occamstyles.commonScheme.commonColour, commonBorderColour = _occamstyles.commonScheme.commonBorderColour, commonInputSelectedColour = _occamstyles.commonScheme.commonInputSelectedColour, commonDisabledInputColour = _occamstyles.commonScheme.commonDisabledInputColour, commonInputBackgroundColour = _occamstyles.commonScheme.commonInputBackgroundColour, commonInputSelectedBackgroundColour = _occamstyles.commonScheme.commonInputSelectedBackgroundColour;
var DropdownInput = /*#__PURE__*/ function(Input) {
    _inherits(DropdownInput, Input);
    function DropdownInput() {
        _class_call_check(this, DropdownInput);
        return _call_super(this, DropdownInput, arguments);
    }
    return DropdownInput;
}(_easy.Input);
_define_property(DropdownInput, "defaultProperties", {
    className: "dropdown",
    spellCheck: "false"
});
var _default = (0, _easywithstyle.default)(DropdownInput)(_templateObject(), commonColour, _sizes.largeSize, commonBorderColour, _sizes.quarterSize, commonInputBackgroundColour, commonDisabledInputColour, commonInputSelectedColour, commonInputSelectedBackgroundColour, _occamstyles.commonFontMixin);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9kcm9wZG93bi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBjb21tb25TY2hlbWUsIGNvbW1vbkZvbnRNaXhpbiB9IGZyb20gXCJvY2NhbS1zdHlsZXNcIjtcblxuaW1wb3J0IHsgbGFyZ2VTaXplLCBxdWFydGVyU2l6ZSB9IGZyb20gXCIuLi9zaXplc1wiO1xuXG5jb25zdCB7IGNvbW1vbkNvbG91ciwgY29tbW9uQm9yZGVyQ29sb3VyLCBjb21tb25JbnB1dFNlbGVjdGVkQ29sb3VyLCBjb21tb25EaXNhYmxlZElucHV0Q29sb3VyLCBjb21tb25JbnB1dEJhY2tncm91bmRDb2xvdXIsIGNvbW1vbklucHV0U2VsZWN0ZWRCYWNrZ3JvdW5kQ29sb3VyIH0gPSBjb21tb25TY2hlbWU7XG5cbmNsYXNzIERyb3Bkb3duSW5wdXQgZXh0ZW5kcyBJbnB1dCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZHJvcGRvd25cIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERyb3Bkb3duSW5wdXQpYFxuXG4gIGNvbG9yOiAke2NvbW1vbkNvbG91cn07XG4gIGhlaWdodDogJHtsYXJnZVNpemV9O1xuICBib3JkZXI6IDFweCBzb2xpZCAke2NvbW1vbkJvcmRlckNvbG91cn07XG4gIHBhZGRpbmc6ICR7cXVhcnRlclNpemV9O1xuICBvdXRsaW5lOiBub25lO1xuICBmbGV4LWdyb3c6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29tbW9uSW5wdXRCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgXG4gIDpkaXNhYmxlZCB7XG4gICAgY29sb3I6ICR7Y29tbW9uRGlzYWJsZWRJbnB1dENvbG91cn07XG4gIH1cbiAgXG4gIDo6c2VsZWN0aW9uIHtcbiAgICBjb2xvcjogJHtjb21tb25JbnB1dFNlbGVjdGVkQ29sb3VyfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbW1vbklucHV0U2VsZWN0ZWRCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgfVxuXG4gICR7Y29tbW9uRm9udE1peGlufVxuXG5gO1xuIl0sIm5hbWVzIjpbImNvbW1vbkNvbG91ciIsImNvbW1vblNjaGVtZSIsImNvbW1vbkJvcmRlckNvbG91ciIsImNvbW1vbklucHV0U2VsZWN0ZWRDb2xvdXIiLCJjb21tb25EaXNhYmxlZElucHV0Q29sb3VyIiwiY29tbW9uSW5wdXRCYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uSW5wdXRTZWxlY3RlZEJhY2tncm91bmRDb2xvdXIiLCJEcm9wZG93bklucHV0IiwiSW5wdXQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJ3aXRoU3R5bGUiLCJsYXJnZVNpemUiLCJxdWFydGVyU2l6ZSIsImNvbW1vbkZvbnRNaXhpbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUJBOzs7ZUFBQTs7O29FQWpCc0I7b0JBRUE7MkJBRXdCO3FCQUVQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZDLElBQVFBLGVBQTZKQyx5QkFBWSxDQUF6S0QsY0FBY0UscUJBQStJRCx5QkFBWSxDQUEzSkMsb0JBQW9CQyw0QkFBMkhGLHlCQUFZLENBQXZJRSwyQkFBMkJDLDRCQUFnR0gseUJBQVksQ0FBNUdHLDJCQUEyQkMsOEJBQXFFSix5QkFBWSxDQUFqRkksNkJBQTZCQyxzQ0FBd0NMLHlCQUFZLENBQXBESztBQUU3SCxJQUFBLEFBQU1DLDhCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7V0FBQUE7RUFBc0JDLFdBQUs7QUFDL0IsaUJBRElELGVBQ0dFLHFCQUFvQjtJQUN6QkMsV0FBVztJQUNYQyxZQUFZO0FBQ2Q7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDTCxrQ0FFZFAsY0FDQ2EsZ0JBQVMsRUFDQ1gsb0JBQ1RZLGtCQUFXLEVBR0ZULDZCQUdURCwyQkFJQUQsMkJBQ1dHLHFDQUdwQlMsNEJBQWUifQ==