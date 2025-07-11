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
var _characterMap = /*#__PURE__*/ _interop_require_default(require("../../../characterMap"));
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
                var unicodeCharacter = this.properties.unicodeCharacter, codePoint = _characterMap.default[unicodeCharacter];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGFibGVSb3cvZ2x5cGhzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEp1bGlhTW9ub0dseXBoVGFibGVDZWxsIGZyb20gXCIuLi90YWJsZUNlbGwvZ2x5cGgvanVsaWFNb25vXCI7XG5pbXBvcnQgVW5pY29kZUNoYXJhY3RlclRhYmxlQ2VsbCBmcm9tIFwiLi4vdGFibGVDZWxsL3VuaWNvZGVDaGFyYWN0ZXJcIjtcbmltcG9ydCBDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGZyb20gXCIuLi90YWJsZUNlbGwvZ2x5cGgvY29tcHV0ZXJNb2Rlcm5cIjtcblxuaW1wb3J0IHVuaWNvZGVDaGFyYWN0ZXJNYXAgZnJvbSBcIi4uLy4uLy4uL2NoYXJhY3Rlck1hcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbHlwaHNUYWJsZVJvdyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgdW5pY29kZUNoYXJhY3RlciB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvZGVQb2ludCA9IHVuaWNvZGVDaGFyYWN0ZXJNYXBbdW5pY29kZUNoYXJhY3Rlcl07XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFVuaWNvZGVDaGFyYWN0ZXJUYWJsZUNlbGwgdW5pY29kZUNoYXJhY3Rlcj17dW5pY29kZUNoYXJhY3Rlcn0gLz4sXG4gICAgICA8SnVsaWFNb25vR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IC8+LFxuXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gc2FucyAvPixcbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSBzYW5zIGJvbGQgLz4sXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gc2FucyBpdGFsaWMgLz4sXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gc2FucyBib2xkIGl0YWxpYyAvPixcblxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IHNlcmlmIC8+LFxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IHNlcmlmIGJvbGQgLz4sXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gc2VyaWYgaXRhbGljIC8+LFxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IHNlcmlmIGJvbGQgaXRhbGljIC8+LFxuXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gYnJpZ2h0IC8+LFxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IGJyaWdodCBib2xkIC8+LFxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IGJyaWdodCBpdGFsaWMgLz4sXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gYnJpZ2h0IGJvbGQgaXRhbGljIC8+LFxuXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gY29uY3JldGUgLz4sXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gY29uY3JldGUgYm9sZCAvPixcbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSBjb25jcmV0ZSBpdGFsaWMgLz4sXG4gICAgICA8Q29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gY29uY3JldGUgYm9sZCBpdGFsaWMgLz4sXG5cbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSB0eXBld3JpdGVyIC8+LFxuICAgICAgPENvbXB1dGVyTW9kZXJuR2x5cGhUYWJsZUNlbGwgY29kZVBvaW50PXtjb2RlUG9pbnR9IHR5cGV3cml0ZXIgYm9sZCAvPixcbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSB0eXBld3JpdGVyIGl0YWxpYyAvPixcbiAgICAgIDxDb21wdXRlck1vZGVybkdseXBoVGFibGVDZWxsIGNvZGVQb2ludD17Y29kZVBvaW50fSB0eXBld3JpdGVyIGJvbGQgaXRhbGljIC8+LFxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInRyXCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwidW5pY29kZUNoYXJhY3RlclwiXG4gIF1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImdseXBoc1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiR2x5cGhzVGFibGVSb3ciLCJjaGlsZEVsZW1lbnRzIiwidW5pY29kZUNoYXJhY3RlciIsInByb3BlcnRpZXMiLCJjb2RlUG9pbnQiLCJ1bmljb2RlQ2hhcmFjdGVyTWFwIiwiVW5pY29kZUNoYXJhY3RlclRhYmxlQ2VsbCIsIkp1bGlhTW9ub0dseXBoVGFibGVDZWxsIiwiQ29tcHV0ZXJNb2Rlcm5HbHlwaFRhYmxlQ2VsbCIsInNhbnMiLCJib2xkIiwiaXRhbGljIiwic2VyaWYiLCJicmlnaHQiLCJjb25jcmV0ZSIsInR5cGV3cml0ZXIiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O29CQVJHO2dFQUVZO3VFQUNFO3FFQUNHO21FQUVUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakIsSUFBQSxBQUFNQSwrQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUMsbUJBQXFCLElBQUksQ0FBQ0MsVUFBVSxDQUFwQ0Qsa0JBQ0ZFLFlBQVlDLHFCQUFtQixDQUFDSCxpQkFBaUI7Z0JBRXZELE9BQVE7a0NBRU4sb0JBQUNJLHlCQUF5Qjt3QkFBQ0osa0JBQWtCQTs7a0NBQzdDLG9CQUFDSyxrQkFBdUI7d0JBQUNILFdBQVdBOztrQ0FFcEMsb0JBQUNJLHVCQUE0Qjt3QkFBQ0osV0FBV0E7d0JBQVdLLE1BQUFBOztrQ0FDcEQsb0JBQUNELHVCQUE0Qjt3QkFBQ0osV0FBV0E7d0JBQVdLLE1BQUFBO3dCQUFLQyxNQUFBQTs7a0NBQ3pELG9CQUFDRix1QkFBNEI7d0JBQUNKLFdBQVdBO3dCQUFXSyxNQUFBQTt3QkFBS0UsUUFBQUE7O2tDQUN6RCxvQkFBQ0gsdUJBQTRCO3dCQUFDSixXQUFXQTt3QkFBV0ssTUFBQUE7d0JBQUtDLE1BQUFBO3dCQUFLQyxRQUFBQTs7a0NBRTlELG9CQUFDSCx1QkFBNEI7d0JBQUNKLFdBQVdBO3dCQUFXUSxPQUFBQTs7a0NBQ3BELG9CQUFDSix1QkFBNEI7d0JBQUNKLFdBQVdBO3dCQUFXUSxPQUFBQTt3QkFBTUYsTUFBQUE7O2tDQUMxRCxvQkFBQ0YsdUJBQTRCO3dCQUFDSixXQUFXQTt3QkFBV1EsT0FBQUE7d0JBQU1ELFFBQUFBOztrQ0FDMUQsb0JBQUNILHVCQUE0Qjt3QkFBQ0osV0FBV0E7d0JBQVdRLE9BQUFBO3dCQUFNRixNQUFBQTt3QkFBS0MsUUFBQUE7O2tDQUUvRCxvQkFBQ0gsdUJBQTRCO3dCQUFDSixXQUFXQTt3QkFBV1MsUUFBQUE7O2tDQUNwRCxvQkFBQ0wsdUJBQTRCO3dCQUFDSixXQUFXQTt3QkFBV1MsUUFBQUE7d0JBQU9ILE1BQUFBOztrQ0FDM0Qsb0JBQUNGLHVCQUE0Qjt3QkFBQ0osV0FBV0E7d0JBQVdTLFFBQUFBO3dCQUFPRixRQUFBQTs7a0NBQzNELG9CQUFDSCx1QkFBNEI7d0JBQUNKLFdBQVdBO3dCQUFXUyxRQUFBQTt3QkFBT0gsTUFBQUE7d0JBQUtDLFFBQUFBOztrQ0FFaEUsb0JBQUNILHVCQUE0Qjt3QkFBQ0osV0FBV0E7d0JBQVdVLFVBQUFBOztrQ0FDcEQsb0JBQUNOLHVCQUE0Qjt3QkFBQ0osV0FBV0E7d0JBQVdVLFVBQUFBO3dCQUFTSixNQUFBQTs7a0NBQzdELG9CQUFDRix1QkFBNEI7d0JBQUNKLFdBQVdBO3dCQUFXVSxVQUFBQTt3QkFBU0gsUUFBQUE7O2tDQUM3RCxvQkFBQ0gsdUJBQTRCO3dCQUFDSixXQUFXQTt3QkFBV1UsVUFBQUE7d0JBQVNKLE1BQUFBO3dCQUFLQyxRQUFBQTs7a0NBRWxFLG9CQUFDSCx1QkFBNEI7d0JBQUNKLFdBQVdBO3dCQUFXVyxZQUFBQTs7a0NBQ3BELG9CQUFDUCx1QkFBNEI7d0JBQUNKLFdBQVdBO3dCQUFXVyxZQUFBQTt3QkFBV0wsTUFBQUE7O2tDQUMvRCxvQkFBQ0YsdUJBQTRCO3dCQUFDSixXQUFXQTt3QkFBV1csWUFBQUE7d0JBQVdKLFFBQUFBOztrQ0FDL0Qsb0JBQUNILHVCQUE0Qjt3QkFBQ0osV0FBV0E7d0JBQVdXLFlBQUFBO3dCQUFXTCxNQUFBQTt3QkFBS0MsUUFBQUE7O2lCQUNyRTtZQUNIOzs7V0FuQ21CWDtxQkFBdUJnQixhQUFPO0FBcUNqRCxpQkFyQ21CaEIsZ0JBcUNaaUIsV0FBVTtBQUVqQixpQkF2Q21CakIsZ0JBdUNaa0IscUJBQW9CO0lBQ3pCO0NBQ0Q7QUFFRCxpQkEzQ21CbEIsZ0JBMkNabUIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==