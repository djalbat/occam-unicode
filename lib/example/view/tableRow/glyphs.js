"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return GlyphsTableRow;
    }
});
var _easy = require("easy");
var _juliaMono = /*#__PURE__*/ _interop_require_default(require("../tableCell/glyph/juliaMono"));
var _unicodeCharacter = /*#__PURE__*/ _interop_require_default(require("../tableCell/unicodeCharacter"));
var _computerModern = /*#__PURE__*/ _interop_require_default(require("../tableCell/glyph/computerModern"));
var _unicodeCharacterMap = /*#__PURE__*/ _interop_require_default(require("../../../unicodeCharacterMap"));
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var GlyphsTableRow = /*#__PURE__*/ function(Element) {
    _inherits(GlyphsTableRow, Element);
    function GlyphsTableRow() {
        _class_call_check(this, GlyphsTableRow);
        return _call_super(this, GlyphsTableRow, arguments);
    }
    _create_class(GlyphsTableRow, [
        {
            key: "childElements",
            value: function childElements() {
                var unicodeCharacter = this.properties.unicodeCharacter, codePoint = _unicodeCharacterMap.default[unicodeCharacter];
                return [
                    /*#__PURE__*/ React.createElement(_unicodeCharacter.default, {
                        unicodeCharacter: unicodeCharacter
                    }),
                    /*#__PURE__*/ React.createElement(_juliaMono.default, {
                        codePoint: codePoint
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        sans: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        sans: true,
                        bold: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        sans: true,
                        italic: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        sans: true,
                        bold: true,
                        italic: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        serif: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        serif: true,
                        bold: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        serif: true,
                        italic: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        serif: true,
                        bold: true,
                        italic: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        bright: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        bright: true,
                        bold: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        bright: true,
                        italic: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        bright: true,
                        bold: true,
                        italic: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        concrete: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        concrete: true,
                        bold: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        concrete: true,
                        italic: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        concrete: true,
                        bold: true,
                        italic: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        typewriter: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        typewriter: true,
                        bold: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        typewriter: true,
                        italic: true
                    }),
                    /*#__PURE__*/ React.createElement(_computerModern.default, {
                        codePoint: codePoint,
                        typewriter: true,
                        bold: true,
                        italic: true
                    })
                ];
            }
        }
    ]);
    return GlyphsTableRow;
}(_wrap_native_super(_easy.Element));
_define_property(GlyphsTableRow, "tagName", "tr");
_define_property(GlyphsTableRow, "ignoredProperties", [
    "unicodeCharacter"
]);
_define_property(GlyphsTableRow, "defaultProperties", {
    className: "glyphs"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGFibGVSb3cvZ2x5cGhzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEp1bGlhTW9ub0dseXBoVGFibGVDZWxsIGZyb20gXCIuLi90YWJsZUNlbGwvZ2x5cGgvanVsaWFNb25vXCI7XG5pbXBvcnQgVW5pY29kZUNoYXJhY3RlclRhYmxlQ2VsbCBmcm9tIFwiLi4vdGFibGVDZWxsL3VuaWNvZGVDaGFyYWN0ZXJcIjtcbmltcG9ydCBDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGZyb20gXCIuLi90YWJsZUNlbGwvZ2x5cGgvY29tcHV0ZXJNb2Rlcm5cIjtcblxuaW1wb3J0IHVuaWNvZGVDaGFyYWN0ZXJNYXAgZnJvbSBcIi4uLy4uLy4uL3VuaWNvZGVDaGFyYWN0ZXJNYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2x5cGhzVGFibGVSb3cgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IHVuaWNvZGVDaGFyYWN0ZXIgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBjb2RlUG9pbnQgPSB1bmljb2RlQ2hhcmFjdGVyTWFwW3VuaWNvZGVDaGFyYWN0ZXJdO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxVbmljb2RlQ2hhcmFjdGVyVGFibGVDZWxsIHVuaWNvZGVDaGFyYWN0ZXI9e3VuaWNvZGVDaGFyYWN0ZXJ9IC8+LFxuICAgICAgPEp1bGlhTW9ub0dseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSAvPixcblxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IHNhbnMgLz4sXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gc2FucyBib2xkIC8+LFxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IHNhbnMgaXRhbGljIC8+LFxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IHNhbnMgYm9sZCBpdGFsaWMgLz4sXG5cbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSBzZXJpZiAvPixcbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSBzZXJpZiBib2xkIC8+LFxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IHNlcmlmIGl0YWxpYyAvPixcbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSBzZXJpZiBib2xkIGl0YWxpYyAvPixcblxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IGJyaWdodCAvPixcbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSBicmlnaHQgYm9sZCAvPixcbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSBicmlnaHQgaXRhbGljIC8+LFxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IGJyaWdodCBib2xkIGl0YWxpYyAvPixcblxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IGNvbmNyZXRlIC8+LFxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IGNvbmNyZXRlIGJvbGQgLz4sXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gY29uY3JldGUgaXRhbGljIC8+LFxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IGNvbmNyZXRlIGJvbGQgaXRhbGljIC8+LFxuXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gdHlwZXdyaXRlciAvPixcbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSB0eXBld3JpdGVyIGJvbGQgLz4sXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gdHlwZXdyaXRlciBpdGFsaWMgLz4sXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gdHlwZXdyaXRlciBib2xkIGl0YWxpYyAvPixcbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJ0clwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcInVuaWNvZGVDaGFyYWN0ZXJcIlxuICBdXG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJnbHlwaHNcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkdseXBoc1RhYmxlUm93IiwiY2hpbGRFbGVtZW50cyIsInVuaWNvZGVDaGFyYWN0ZXIiLCJwcm9wZXJ0aWVzIiwiY29kZVBvaW50IiwidW5pY29kZUNoYXJhY3Rlck1hcCIsIlVuaWNvZGVDaGFyYWN0ZXJUYWJsZUNlbGwiLCJKdWxpYU1vbm9HbHlwaFRhYmxlQ2VsbCIsIkNvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwiLCJzYW5zIiwiYm9sZCIsIml0YWxpYyIsInNlcmlmIiwiYnJpZ2h0IiwiY29uY3JldGUiLCJ0eXBld3JpdGVyIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OztvQkFSRztnRUFFWTt1RUFDRTtxRUFDRzswRUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpCLElBQUEsQUFBTUEsK0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVDLG1CQUFxQixJQUFJLENBQUNDLFVBQVUsQ0FBcENELGtCQUNGRSxZQUFZQyw0QkFBbUIsQ0FBQ0gsaUJBQWlCO2dCQUV2RCxPQUFRO2tDQUVOLG9CQUFDSSx5QkFBeUI7d0JBQUNKLGtCQUFrQkE7O2tDQUM3QyxvQkFBQ0ssa0JBQXVCO3dCQUFDSCxXQUFXQTs7a0NBRXBDLG9CQUFDSSx1QkFBNEI7d0JBQUNKLFdBQVdBO3dCQUFXSyxNQUFBQTs7a0NBQ3BELG9CQUFDRCx1QkFBNEI7d0JBQUNKLFdBQVdBO3dCQUFXSyxNQUFBQTt3QkFBS0MsTUFBQUE7O2tDQUN6RCxvQkFBQ0YsdUJBQTRCO3dCQUFDSixXQUFXQTt3QkFBV0ssTUFBQUE7d0JBQUtFLFFBQUFBOztrQ0FDekQsb0JBQUNILHVCQUE0Qjt3QkFBQ0osV0FBV0E7d0JBQVdLLE1BQUFBO3dCQUFLQyxNQUFBQTt3QkFBS0MsUUFBQUE7O2tDQUU5RCxvQkFBQ0gsdUJBQTRCO3dCQUFDSixXQUFXQTt3QkFBV1EsT0FBQUE7O2tDQUNwRCxvQkFBQ0osdUJBQTRCO3dCQUFDSixXQUFXQTt3QkFBV1EsT0FBQUE7d0JBQU1GLE1BQUFBOztrQ0FDMUQsb0JBQUNGLHVCQUE0Qjt3QkFBQ0osV0FBV0E7d0JBQVdRLE9BQUFBO3dCQUFNRCxRQUFBQTs7a0NBQzFELG9CQUFDSCx1QkFBNEI7d0JBQUNKLFdBQVdBO3dCQUFXUSxPQUFBQTt3QkFBTUYsTUFBQUE7d0JBQUtDLFFBQUFBOztrQ0FFL0Qsb0JBQUNILHVCQUE0Qjt3QkFBQ0osV0FBV0E7d0JBQVdTLFFBQUFBOztrQ0FDcEQsb0JBQUNMLHVCQUE0Qjt3QkFBQ0osV0FBV0E7d0JBQVdTLFFBQUFBO3dCQUFPSCxNQUFBQTs7a0NBQzNELG9CQUFDRix1QkFBNEI7d0JBQUNKLFdBQVdBO3dCQUFXUyxRQUFBQTt3QkFBT0YsUUFBQUE7O2tDQUMzRCxvQkFBQ0gsdUJBQTRCO3dCQUFDSixXQUFXQTt3QkFBV1MsUUFBQUE7d0JBQU9ILE1BQUFBO3dCQUFLQyxRQUFBQTs7a0NBRWhFLG9CQUFDSCx1QkFBNEI7d0JBQUNKLFdBQVdBO3dCQUFXVSxVQUFBQTs7a0NBQ3BELG9CQUFDTix1QkFBNEI7d0JBQUNKLFdBQVdBO3dCQUFXVSxVQUFBQTt3QkFBU0osTUFBQUE7O2tDQUM3RCxvQkFBQ0YsdUJBQTRCO3dCQUFDSixXQUFXQTt3QkFBV1UsVUFBQUE7d0JBQVNILFFBQUFBOztrQ0FDN0Qsb0JBQUNILHVCQUE0Qjt3QkFBQ0osV0FBV0E7d0JBQVdVLFVBQUFBO3dCQUFTSixNQUFBQTt3QkFBS0MsUUFBQUE7O2tDQUVsRSxvQkFBQ0gsdUJBQTRCO3dCQUFDSixXQUFXQTt3QkFBV1csWUFBQUE7O2tDQUNwRCxvQkFBQ1AsdUJBQTRCO3dCQUFDSixXQUFXQTt3QkFBV1csWUFBQUE7d0JBQVdMLE1BQUFBOztrQ0FDL0Qsb0JBQUNGLHVCQUE0Qjt3QkFBQ0osV0FBV0E7d0JBQVdXLFlBQUFBO3dCQUFXSixRQUFBQTs7a0NBQy9ELG9CQUFDSCx1QkFBNEI7d0JBQUNKLFdBQVdBO3dCQUFXVyxZQUFBQTt3QkFBV0wsTUFBQUE7d0JBQUtDLFFBQUFBOztpQkFDckU7WUFDSDs7O1dBbkNtQlg7cUJBQXVCZ0IsYUFBTztBQXFDakQsaUJBckNtQmhCLGdCQXFDWmlCLFdBQVU7QUFFakIsaUJBdkNtQmpCLGdCQXVDWmtCLHFCQUFvQjtJQUN6QjtDQUNEO0FBRUQsaUJBM0NtQmxCLGdCQTJDWm1CLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=