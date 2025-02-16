"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return View;
    }
});
var _easy = require("easy");
var _main = /*#__PURE__*/ _interop_require_default(require("./view/header/main"));
var _glyphs = /*#__PURE__*/ _interop_require_default(require("./view/table/glyphs"));
var _secondary = /*#__PURE__*/ _interop_require_default(require("./view/heading/secondary"));
var _unicodeCharacterMap = require("../unicodeCharacterMap");
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
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        return _call_super(this, View, arguments);
    }
    _create_class(View, [
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_main.default, null),
                    /*#__PURE__*/ React.createElement(_secondary.default, null, "Harpoon"),
                    /*#__PURE__*/ React.createElement(_glyphs.default, {
                        characterMap: _unicodeCharacterMap.harpoonCharacterMap
                    }),
                    /*#__PURE__*/ React.createElement(_secondary.default, null, "Arrow"),
                    /*#__PURE__*/ React.createElement(_glyphs.default, {
                        characterMap: _unicodeCharacterMap.arrowCharacterMap
                    }),
                    /*#__PURE__*/ React.createElement(_secondary.default, null, "Double Triple Arrow"),
                    /*#__PURE__*/ React.createElement(_glyphs.default, {
                        characterMap: _unicodeCharacterMap.doubleTripleArrowCharacterMap
                    }),
                    /*#__PURE__*/ React.createElement(_secondary.default, null, "Headed Arrow"),
                    /*#__PURE__*/ React.createElement(_glyphs.default, {
                        characterMap: _unicodeCharacterMap.headedArrowCharacterMap
                    }),
                    /*#__PURE__*/ React.createElement(_secondary.default, null, "Circle Circled"),
                    /*#__PURE__*/ React.createElement(_glyphs.default, {
                        characterMap: _unicodeCharacterMap.circleCircledCharacterMap
                    }),
                    /*#__PURE__*/ React.createElement(_secondary.default, null, "Superscript Subscript"),
                    /*#__PURE__*/ React.createElement(_glyphs.default, {
                        characterMap: _unicodeCharacterMap.superscriptSubscriptCharacterMap
                    }),
                    /*#__PURE__*/ React.createElement(_secondary.default, null, "Relational Operator"),
                    /*#__PURE__*/ React.createElement(_glyphs.default, {
                        characterMap: _unicodeCharacterMap.relationalOperatorCharacterMap
                    }),
                    /*#__PURE__*/ React.createElement(_secondary.default, null, "Class Theoretic"),
                    /*#__PURE__*/ React.createElement(_glyphs.default, {
                        characterMap: _unicodeCharacterMap.classTheoreticCharacterMap
                    }),
                    /*#__PURE__*/ React.createElement(_secondary.default, null, "Isomorphism"),
                    /*#__PURE__*/ React.createElement(_glyphs.default, {
                        characterMap: _unicodeCharacterMap.isomorphismSymbolCharacterMap
                    }),
                    /*#__PURE__*/ React.createElement(_secondary.default, null, "Logical Operator"),
                    /*#__PURE__*/ React.createElement(_glyphs.default, {
                        characterMap: _unicodeCharacterMap.logicalOperatorCharacterMap
                    }),
                    /*#__PURE__*/ React.createElement(_secondary.default, null, "Arithmetic Operator"),
                    /*#__PURE__*/ React.createElement(_glyphs.default, {
                        characterMap: _unicodeCharacterMap.arithmeticOperatorCharacterMap
                    }),
                    /*#__PURE__*/ React.createElement(_secondary.default, null, "Greek Letter"),
                    /*#__PURE__*/ React.createElement(_glyphs.default, {
                        characterMap: _unicodeCharacterMap.greekLetterCharacterMap
                    }),
                    /*#__PURE__*/ React.createElement(_secondary.default, null, "Mathematical Script"),
                    /*#__PURE__*/ React.createElement(_glyphs.default, {
                        characterMap: _unicodeCharacterMap.mathematicalScriptCharacterMap
                    }),
                    /*#__PURE__*/ React.createElement(_secondary.default, null, "Mathematical Fraktur"),
                    /*#__PURE__*/ React.createElement(_glyphs.default, {
                        characterMap: _unicodeCharacterMap.mathematicalFrakturCharacterMap
                    }),
                    /*#__PURE__*/ React.createElement(_secondary.default, null, "Mathematical Double Struck"),
                    /*#__PURE__*/ React.createElement(_glyphs.default, {
                        characterMap: _unicodeCharacterMap.mathematicalDoubleStruckCharacterMap
                    })
                ];
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgTWFpbkhlYWRlciBmcm9tIFwiLi92aWV3L2hlYWRlci9tYWluXCI7XG5pbXBvcnQgR2x5cGhzVGFibGUgZnJvbSBcIi4vdmlldy90YWJsZS9nbHlwaHNcIjtcbmltcG9ydCBTZWNvbmRhcnlIZWFkaW5nIGZyb20gXCIuL3ZpZXcvaGVhZGluZy9zZWNvbmRhcnlcIlxuXG5pbXBvcnQgeyBhcnJvd0NoYXJhY3Rlck1hcCxcbiAgICAgICAgIGhhcnBvb25DaGFyYWN0ZXJNYXAsXG4gICAgICAgICBncmVla0xldHRlckNoYXJhY3Rlck1hcCxcbiAgICAgICAgIGhlYWRlZEFycm93Q2hhcmFjdGVyTWFwLFxuICAgICAgICAgY2lyY2xlQ2lyY2xlZENoYXJhY3Rlck1hcCxcbiAgICAgICAgIGNsYXNzVGhlb3JldGljQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgbG9naWNhbE9wZXJhdG9yQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgaXNvbW9ycGhpc21TeW1ib2xDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBkb3VibGVUcmlwbGVBcnJvd0NoYXJhY3Rlck1hcCxcbiAgICAgICAgIHJlbGF0aW9uYWxPcGVyYXRvckNoYXJhY3Rlck1hcCxcbiAgICAgICAgIGFyaXRobWV0aWNPcGVyYXRvckNoYXJhY3Rlck1hcCxcbiAgICAgICAgIG1hdGhlbWF0aWNhbFNjcmlwdENoYXJhY3Rlck1hcCxcbiAgICAgICAgIG1hdGhlbWF0aWNhbEZyYWt0dXJDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBzdXBlcnNjcmlwdFN1YnNjcmlwdENoYXJhY3Rlck1hcCxcbiAgICAgICAgIG1hdGhlbWF0aWNhbERvdWJsZVN0cnVja0NoYXJhY3Rlck1hcCB9IGZyb20gXCIuLi91bmljb2RlQ2hhcmFjdGVyTWFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPE1haW5IZWFkZXIvPixcbiAgICAgIDxTZWNvbmRhcnlIZWFkaW5nPlxuICAgICAgICBIYXJwb29uXG4gICAgICA8L1NlY29uZGFyeUhlYWRpbmc+LFxuICAgICAgPEdseXBoc1RhYmxlIGNoYXJhY3Rlck1hcD17aGFycG9vbkNoYXJhY3Rlck1hcH0gLz4sXG4gICAgICA8U2Vjb25kYXJ5SGVhZGluZz5cbiAgICAgICAgQXJyb3dcbiAgICAgIDwvU2Vjb25kYXJ5SGVhZGluZz4sXG4gICAgICA8R2x5cGhzVGFibGUgY2hhcmFjdGVyTWFwPXthcnJvd0NoYXJhY3Rlck1hcH0gLz4sXG4gICAgICA8U2Vjb25kYXJ5SGVhZGluZz5cbiAgICAgICAgRG91YmxlIFRyaXBsZSBBcnJvd1xuICAgICAgPC9TZWNvbmRhcnlIZWFkaW5nPixcbiAgICAgIDxHbHlwaHNUYWJsZSBjaGFyYWN0ZXJNYXA9e2RvdWJsZVRyaXBsZUFycm93Q2hhcmFjdGVyTWFwfSAvPixcbiAgICAgIDxTZWNvbmRhcnlIZWFkaW5nPlxuICAgICAgICBIZWFkZWQgQXJyb3dcbiAgICAgIDwvU2Vjb25kYXJ5SGVhZGluZz4sXG4gICAgICA8R2x5cGhzVGFibGUgY2hhcmFjdGVyTWFwPXtoZWFkZWRBcnJvd0NoYXJhY3Rlck1hcH0gLz4sXG4gICAgICA8U2Vjb25kYXJ5SGVhZGluZz5cbiAgICAgICAgQ2lyY2xlIENpcmNsZWRcbiAgICAgIDwvU2Vjb25kYXJ5SGVhZGluZz4sXG4gICAgICA8R2x5cGhzVGFibGUgY2hhcmFjdGVyTWFwPXtjaXJjbGVDaXJjbGVkQ2hhcmFjdGVyTWFwfSAvPixcbiAgICAgIDxTZWNvbmRhcnlIZWFkaW5nPlxuICAgICAgICBTdXBlcnNjcmlwdCBTdWJzY3JpcHRcbiAgICAgIDwvU2Vjb25kYXJ5SGVhZGluZz4sXG4gICAgICA8R2x5cGhzVGFibGUgY2hhcmFjdGVyTWFwPXtzdXBlcnNjcmlwdFN1YnNjcmlwdENoYXJhY3Rlck1hcH0gLz4sXG4gICAgICA8U2Vjb25kYXJ5SGVhZGluZz5cbiAgICAgICAgUmVsYXRpb25hbCBPcGVyYXRvclxuICAgICAgPC9TZWNvbmRhcnlIZWFkaW5nPixcbiAgICAgIDxHbHlwaHNUYWJsZSBjaGFyYWN0ZXJNYXA9e3JlbGF0aW9uYWxPcGVyYXRvckNoYXJhY3Rlck1hcH0gLz4sXG4gICAgICA8U2Vjb25kYXJ5SGVhZGluZz5cbiAgICAgICAgQ2xhc3MgVGhlb3JldGljXG4gICAgICA8L1NlY29uZGFyeUhlYWRpbmc+LFxuICAgICAgPEdseXBoc1RhYmxlIGNoYXJhY3Rlck1hcD17Y2xhc3NUaGVvcmV0aWNDaGFyYWN0ZXJNYXB9IC8+LFxuICAgICAgPFNlY29uZGFyeUhlYWRpbmc+XG4gICAgICAgIElzb21vcnBoaXNtXG4gICAgICA8L1NlY29uZGFyeUhlYWRpbmc+LFxuICAgICAgPEdseXBoc1RhYmxlIGNoYXJhY3Rlck1hcD17aXNvbW9ycGhpc21TeW1ib2xDaGFyYWN0ZXJNYXB9IC8+LFxuICAgICAgPFNlY29uZGFyeUhlYWRpbmc+XG4gICAgICAgIExvZ2ljYWwgT3BlcmF0b3JcbiAgICAgIDwvU2Vjb25kYXJ5SGVhZGluZz4sXG4gICAgICA8R2x5cGhzVGFibGUgY2hhcmFjdGVyTWFwPXtsb2dpY2FsT3BlcmF0b3JDaGFyYWN0ZXJNYXB9IC8+LFxuICAgICAgPFNlY29uZGFyeUhlYWRpbmc+XG4gICAgICAgIEFyaXRobWV0aWMgT3BlcmF0b3JcbiAgICAgIDwvU2Vjb25kYXJ5SGVhZGluZz4sXG4gICAgICA8R2x5cGhzVGFibGUgY2hhcmFjdGVyTWFwPXthcml0aG1ldGljT3BlcmF0b3JDaGFyYWN0ZXJNYXB9IC8+LFxuICAgICAgPFNlY29uZGFyeUhlYWRpbmc+XG4gICAgICAgIEdyZWVrIExldHRlclxuICAgICAgPC9TZWNvbmRhcnlIZWFkaW5nPixcbiAgICAgIDxHbHlwaHNUYWJsZSBjaGFyYWN0ZXJNYXA9e2dyZWVrTGV0dGVyQ2hhcmFjdGVyTWFwfSAvPixcbiAgICAgIDxTZWNvbmRhcnlIZWFkaW5nPlxuICAgICAgICBNYXRoZW1hdGljYWwgU2NyaXB0XG4gICAgICA8L1NlY29uZGFyeUhlYWRpbmc+LFxuICAgICAgPEdseXBoc1RhYmxlIGNoYXJhY3Rlck1hcD17bWF0aGVtYXRpY2FsU2NyaXB0Q2hhcmFjdGVyTWFwfSAvPixcbiAgICAgIDxTZWNvbmRhcnlIZWFkaW5nPlxuICAgICAgICBNYXRoZW1hdGljYWwgRnJha3R1clxuICAgICAgPC9TZWNvbmRhcnlIZWFkaW5nPixcbiAgICAgIDxHbHlwaHNUYWJsZSBjaGFyYWN0ZXJNYXA9e21hdGhlbWF0aWNhbEZyYWt0dXJDaGFyYWN0ZXJNYXB9IC8+LFxuICAgICAgPFNlY29uZGFyeUhlYWRpbmc+XG4gICAgICAgIE1hdGhlbWF0aWNhbCBEb3VibGUgU3RydWNrXG4gICAgICA8L1NlY29uZGFyeUhlYWRpbmc+LFxuICAgICAgPEdseXBoc1RhYmxlIGNoYXJhY3Rlck1hcD17bWF0aGVtYXRpY2FsRG91YmxlU3RydWNrQ2hhcmFjdGVyTWFwfSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJWaWV3IiwiY2hpbGRFbGVtZW50cyIsIk1haW5IZWFkZXIiLCJTZWNvbmRhcnlIZWFkaW5nIiwiR2x5cGhzVGFibGUiLCJjaGFyYWN0ZXJNYXAiLCJoYXJwb29uQ2hhcmFjdGVyTWFwIiwiYXJyb3dDaGFyYWN0ZXJNYXAiLCJkb3VibGVUcmlwbGVBcnJvd0NoYXJhY3Rlck1hcCIsImhlYWRlZEFycm93Q2hhcmFjdGVyTWFwIiwiY2lyY2xlQ2lyY2xlZENoYXJhY3Rlck1hcCIsInN1cGVyc2NyaXB0U3Vic2NyaXB0Q2hhcmFjdGVyTWFwIiwicmVsYXRpb25hbE9wZXJhdG9yQ2hhcmFjdGVyTWFwIiwiY2xhc3NUaGVvcmV0aWNDaGFyYWN0ZXJNYXAiLCJpc29tb3JwaGlzbVN5bWJvbENoYXJhY3Rlck1hcCIsImxvZ2ljYWxPcGVyYXRvckNoYXJhY3Rlck1hcCIsImFyaXRobWV0aWNPcGVyYXRvckNoYXJhY3Rlck1hcCIsImdyZWVrTGV0dGVyQ2hhcmFjdGVyTWFwIiwibWF0aGVtYXRpY2FsU2NyaXB0Q2hhcmFjdGVyTWFwIiwibWF0aGVtYXRpY2FsRnJha3R1ckNoYXJhY3Rlck1hcCIsIm1hdGhlbWF0aWNhbERvdWJsZVN0cnVja0NoYXJhY3Rlck1hcCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBd0JxQkE7OztvQkF0Qkc7MkRBRUQ7NkRBQ0M7Z0VBQ0s7bUNBZ0J3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQUEsQUFBTUEscUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBUTtrQ0FFTixvQkFBQ0MsYUFBVTtrQ0FDWCxvQkFBQ0Msa0JBQWdCLFFBQUM7a0NBR2xCLG9CQUFDQyxlQUFXO3dCQUFDQyxjQUFjQyx3Q0FBbUI7O2tDQUM5QyxvQkFBQ0gsa0JBQWdCLFFBQUM7a0NBR2xCLG9CQUFDQyxlQUFXO3dCQUFDQyxjQUFjRSxzQ0FBaUI7O2tDQUM1QyxvQkFBQ0osa0JBQWdCLFFBQUM7a0NBR2xCLG9CQUFDQyxlQUFXO3dCQUFDQyxjQUFjRyxrREFBNkI7O2tDQUN4RCxvQkFBQ0wsa0JBQWdCLFFBQUM7a0NBR2xCLG9CQUFDQyxlQUFXO3dCQUFDQyxjQUFjSSw0Q0FBdUI7O2tDQUNsRCxvQkFBQ04sa0JBQWdCLFFBQUM7a0NBR2xCLG9CQUFDQyxlQUFXO3dCQUFDQyxjQUFjSyw4Q0FBeUI7O2tDQUNwRCxvQkFBQ1Asa0JBQWdCLFFBQUM7a0NBR2xCLG9CQUFDQyxlQUFXO3dCQUFDQyxjQUFjTSxxREFBZ0M7O2tDQUMzRCxvQkFBQ1Isa0JBQWdCLFFBQUM7a0NBR2xCLG9CQUFDQyxlQUFXO3dCQUFDQyxjQUFjTyxtREFBOEI7O2tDQUN6RCxvQkFBQ1Qsa0JBQWdCLFFBQUM7a0NBR2xCLG9CQUFDQyxlQUFXO3dCQUFDQyxjQUFjUSwrQ0FBMEI7O2tDQUNyRCxvQkFBQ1Ysa0JBQWdCLFFBQUM7a0NBR2xCLG9CQUFDQyxlQUFXO3dCQUFDQyxjQUFjUyxrREFBNkI7O2tDQUN4RCxvQkFBQ1gsa0JBQWdCLFFBQUM7a0NBR2xCLG9CQUFDQyxlQUFXO3dCQUFDQyxjQUFjVSxnREFBMkI7O2tDQUN0RCxvQkFBQ1osa0JBQWdCLFFBQUM7a0NBR2xCLG9CQUFDQyxlQUFXO3dCQUFDQyxjQUFjVyxtREFBOEI7O2tDQUN6RCxvQkFBQ2Isa0JBQWdCLFFBQUM7a0NBR2xCLG9CQUFDQyxlQUFXO3dCQUFDQyxjQUFjWSw0Q0FBdUI7O2tDQUNsRCxvQkFBQ2Qsa0JBQWdCLFFBQUM7a0NBR2xCLG9CQUFDQyxlQUFXO3dCQUFDQyxjQUFjYSxtREFBOEI7O2tDQUN6RCxvQkFBQ2Ysa0JBQWdCLFFBQUM7a0NBR2xCLG9CQUFDQyxlQUFXO3dCQUFDQyxjQUFjYyxvREFBK0I7O2tDQUMxRCxvQkFBQ2hCLGtCQUFnQixRQUFDO2tDQUdsQixvQkFBQ0MsZUFBVzt3QkFBQ0MsY0FBY2UseURBQW9DOztpQkFFaEU7WUFDSDs7O1dBbkVtQnBCO3FCQUFhcUIsYUFBTztBQXFFdkMsaUJBckVtQnJCLE1BcUVac0IsV0FBVTtBQUVqQixpQkF2RW1CdEIsTUF1RVp1QixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9