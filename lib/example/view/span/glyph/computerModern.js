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
var _constants = require("../../../constants");
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
        ';\n  padding: 1rem;\n  font-size: 3rem;\n  font-style: normal;\n  font-weight: normal;\n\n  .italic {\n    font-style: italic;\n  }\n\n  .bold {\n    font-weight: bold;\n  }\n\n  .sans {\n    font-family: "Computer Modern Sans";\n  }\n  \n  .serif {\n    font-family: "Computer Modern Serif";\n  }\n  \n  .bright {\n    font-family: "Computer Modern Bright";\n  }\n  \n  .concrete {\n    font-family: "Computer Modern Concrete";\n  }\n  \n  .typewriter {\n    font-family: "Computer Modern Typewriter";\n  }\n  \n'
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var woodsmoke = _occamstyles.colours.woodsmoke;
var ComputerModernGlyphSpan = /*#__PURE__*/ function(GlyphSpan) {
    _inherits(ComputerModernGlyphSpan, GlyphSpan);
    function ComputerModernGlyphSpan() {
        _class_call_check(this, ComputerModernGlyphSpan);
        return _call_super(this, ComputerModernGlyphSpan, arguments);
    }
    _create_class(ComputerModernGlyphSpan, [
        {
            key: "didMount",
            value: function didMount() {
                for(var propertyName in this.properties){
                    if (propertyName !== _constants.CLASS_NAME && propertyName !== _constants.CHILD_ELEMENTS) {
                        var className = propertyName; ///
                        this.addClass(className);
                    }
                }
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        }
    ]);
    return ComputerModernGlyphSpan;
}(_glyph.default);
_define_property(ComputerModernGlyphSpan, "ignoredAttributes", [
    "italic",
    "bold",
    "sans",
    "serif",
    "bright",
    "concrete",
    "typewriter"
]);
_define_property(ComputerModernGlyphSpan, "defaultProperties", {
    className: "computer-modern"
});
var _default = (0, _easywithstyle.default)(ComputerModernGlyphSpan)(_templateObject(), woodsmoke);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvc3Bhbi9nbHlwaC9jb21wdXRlck1vZGVybi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgY29sb3VycyB9IGZyb20gXCJvY2NhbS1zdHlsZXNcIjtcblxuaW1wb3J0IEdseXBoU3BhbiBmcm9tIFwiLi4vLi4vc3Bhbi9nbHlwaFwiO1xuXG5pbXBvcnQgeyBDTEFTU19OQU1FLCBDSElMRF9FTEVNRU5UUyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyB3b29kc21va2UgfSA9IGNvbG91cnM7XG5cbmNsYXNzIENvbXB1dGVyTW9kZXJuR2x5cGhTcGFuIGV4dGVuZHMgR2x5cGhTcGFuIHtcbiAgZGlkTW91bnQoKSB7XG4gICAgZm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHRoaXMucHJvcGVydGllcykge1xuICAgICAgaWYgKChwcm9wZXJ0eU5hbWUgIT09IENMQVNTX05BTUUpICYmIChwcm9wZXJ0eU5hbWUgIT09IENISUxEX0VMRU1FTlRTKSkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBwcm9wZXJ0eU5hbWU7IC8vL1xuXG4gICAgICAgIHRoaXMuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBpZ25vcmVkQXR0cmlidXRlcyA9IFtcbiAgICBcIml0YWxpY1wiLFxuICAgIFwiYm9sZFwiLFxuICAgIFwic2Fuc1wiLFxuICAgIFwic2VyaWZcIixcbiAgICBcImJyaWdodFwiLFxuICAgIFwiY29uY3JldGVcIixcbiAgICBcInR5cGV3cml0ZXJcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiY29tcHV0ZXItbW9kZXJuXCJcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQ29tcHV0ZXJNb2Rlcm5HbHlwaFNwYW4pYFxuXG4gIGNvbG9yOiAke3dvb2RzbW9rZX07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuXG4gIC5pdGFsaWMge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgfVxuXG4gIC5ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5zYW5zIHtcbiAgICBmb250LWZhbWlseTogXCJDb21wdXRlciBNb2Rlcm4gU2Fuc1wiO1xuICB9XG4gIFxuICAuc2VyaWYge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNvbXB1dGVyIE1vZGVybiBTZXJpZlwiO1xuICB9XG4gIFxuICAuYnJpZ2h0IHtcbiAgICBmb250LWZhbWlseTogXCJDb21wdXRlciBNb2Rlcm4gQnJpZ2h0XCI7XG4gIH1cbiAgXG4gIC5jb25jcmV0ZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29tcHV0ZXIgTW9kZXJuIENvbmNyZXRlXCI7XG4gIH1cbiAgXG4gIC50eXBld3JpdGVyIHtcbiAgICBmb250LWZhbWlseTogXCJDb21wdXRlciBNb2Rlcm4gVHlwZXdyaXRlclwiO1xuICB9XG4gIFxuYDsiXSwibmFtZXMiOlsid29vZHNtb2tlIiwiY29sb3VycyIsIkNvbXB1dGVyTW9kZXJuR2x5cGhTcGFuIiwiZGlkTW91bnQiLCJwcm9wZXJ0eU5hbWUiLCJwcm9wZXJ0aWVzIiwiQ0xBU1NfTkFNRSIsIkNISUxEX0VMRU1FTlRTIiwiY2xhc3NOYW1lIiwiYWRkQ2xhc3MiLCJ3aWxsVW5tb3VudCIsIkdseXBoU3BhbiIsImlnbm9yZWRBdHRyaWJ1dGVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBDQTs7O2VBQUE7OztvRUF4Q3NCOzJCQUVFOzREQUVGO3lCQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxJQUFNLEFBQUVBLFlBQWNDLG9CQUFPLENBQXJCRDtBQUVSLElBQUEsQUFBTUUsd0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFLLElBQUlDLGdCQUFnQixJQUFJLENBQUNDLFVBQVUsQ0FBRTtvQkFDeEMsSUFBSSxBQUFDRCxpQkFBaUJFLHFCQUFVLElBQU1GLGlCQUFpQkcseUJBQWMsRUFBRzt3QkFDdEUsSUFBTUMsWUFBWUosY0FBYyxHQUFHO3dCQUVuQyxJQUFJLENBQUNLLFFBQVEsQ0FBQ0Q7b0JBQ2hCO2dCQUNGO1lBQ0Y7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7WUFDRSxHQUFHO1lBQ0w7OztXQWJJUjtFQUFnQ1MsY0FBUztBQWU3QyxpQkFmSVQseUJBZUdVLHFCQUFvQjtJQUN6QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBRUQsaUJBekJJVix5QkF5QkdXLHFCQUFvQjtJQUN6QkwsV0FBVztBQUNiO0lBR0YsV0FBZU0sSUFBQUEsc0JBQVMsRUFBQ1osNENBRWRGIn0=