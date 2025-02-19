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
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
                var parameters = parametersFromNothing(), name = parameters.name, title = parameters.title, characterMap = characterMapFromName(name);
                return [
                    /*#__PURE__*/ React.createElement(_main.default, null),
                    /*#__PURE__*/ React.createElement(_secondary.default, null, title),
                    /*#__PURE__*/ React.createElement(_glyphs.default, {
                        characterMap: characterMap
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
function parametersFromNothing() {
    var search = location.search, start = 1, queryString = search.substring(start), nameValueStrings = queryString.split("&"), parameters = nameValueStrings.reduce(function(parameters, nameValueString) {
        var _nameValueString_split = _sliced_to_array(nameValueString.split("="), 2), name = _nameValueString_split[0], encodedValue = _nameValueString_split[1], value = encodedValue.replace(/\+/g, " ");
        parameters[name] = value;
        return parameters;
    }, {});
    return parameters;
}
function characterMapFromName(name) {
    var characterMap;
    switch(name){
        case "shape":
            characterMap = _unicodeCharacterMap.shapeCharacterMap;
            break;
        case "angle":
            characterMap = _unicodeCharacterMap.angleCharacterMap;
            break;
        case "arrow":
            characterMap = _unicodeCharacterMap.arrowCharacterMap;
            break;
        case "harpoon":
            characterMap = _unicodeCharacterMap.harpoonCharacterMap;
            break;
        case "equality":
            characterMap = _unicodeCharacterMap.equalityCharacterMap;
            break;
        case "ordering":
            characterMap = _unicodeCharacterMap.orderingCharacterMap;
            break;
        case "calculus":
            characterMap = _unicodeCharacterMap.calculusCharacterMap;
            break;
        case "relational":
            characterMap = _unicodeCharacterMap.relationalCharacterMap;
            break;
        case "arithmetic":
            characterMap = _unicodeCharacterMap.arithmeticCharacterMap;
            break;
        case "greekLetter":
            characterMap = _unicodeCharacterMap.greekLetterCharacterMap;
            break;
        case "headedArrow":
            characterMap = _unicodeCharacterMap.headedArrowCharacterMap;
            break;
        case "scriptLetters":
            characterMap = _unicodeCharacterMap.scriptLettersCharacterMap;
            break;
        case "circleCircled":
            characterMap = _unicodeCharacterMap.circleCircledCharacterMap;
            break;
        case "tackTurnstile":
            characterMap = _unicodeCharacterMap.tackTurnstileCharacterMap;
            break;
        case "classTheoretic":
            characterMap = _unicodeCharacterMap.classTheoreticCharacterMap;
            break;
        case "frakturLetters":
            characterMap = _unicodeCharacterMap.frakturLettersCharacterMap;
            break;
        case "logicalOperator":
            characterMap = _unicodeCharacterMap.logicalOperatorCharacterMap;
            break;
        case "doubleTripleArrow":
            characterMap = _unicodeCharacterMap.doubleTripleArrowCharacterMap;
            break;
        case "parenthesisBracket":
            characterMap = _unicodeCharacterMap.parenthesisBracketCharacterMap;
            break;
        case "doubleStruckLetters":
            characterMap = _unicodeCharacterMap.doubleStruckLettersCharacterMap;
            break;
        case "superscriptSubscript":
            characterMap = _unicodeCharacterMap.superscriptSubscriptCharacterMap;
            break;
        case "miscellaneous":
            characterMap = _unicodeCharacterMap.miscellaneousCharacterMap;
            break;
    }
    return characterMap;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgTWFpbkhlYWRlciBmcm9tIFwiLi92aWV3L2hlYWRlci9tYWluXCI7XG5pbXBvcnQgR2x5cGhzVGFibGUgZnJvbSBcIi4vdmlldy90YWJsZS9nbHlwaHNcIjtcbmltcG9ydCBTZWNvbmRhcnlIZWFkaW5nIGZyb20gXCIuL3ZpZXcvaGVhZGluZy9zZWNvbmRhcnlcIlxuXG5pbXBvcnQgeyBzaGFwZUNoYXJhY3Rlck1hcCxcbiAgICAgICAgIGFuZ2xlQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgYXJyb3dDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBoYXJwb29uQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgZXF1YWxpdHlDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBvcmRlcmluZ0NoYXJhY3Rlck1hcCxcbiAgICAgICAgIGNhbGN1bHVzQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgcmVsYXRpb25hbENoYXJhY3Rlck1hcCxcbiAgICAgICAgIGFyaXRobWV0aWNDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBncmVla0xldHRlckNoYXJhY3Rlck1hcCxcbiAgICAgICAgIGhlYWRlZEFycm93Q2hhcmFjdGVyTWFwLFxuICAgICAgICAgc2NyaXB0TGV0dGVyc0NoYXJhY3Rlck1hcCxcbiAgICAgICAgIGNpcmNsZUNpcmNsZWRDaGFyYWN0ZXJNYXAsXG4gICAgICAgICB0YWNrVHVybnN0aWxlQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgY2xhc3NUaGVvcmV0aWNDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBmcmFrdHVyTGV0dGVyc0NoYXJhY3Rlck1hcCxcbiAgICAgICAgIGxvZ2ljYWxPcGVyYXRvckNoYXJhY3Rlck1hcCxcbiAgICAgICAgIGRvdWJsZVRyaXBsZUFycm93Q2hhcmFjdGVyTWFwLFxuICAgICAgICAgcGFyZW50aGVzaXNCcmFja2V0Q2hhcmFjdGVyTWFwLFxuICAgICAgICAgZG91YmxlU3RydWNrTGV0dGVyc0NoYXJhY3Rlck1hcCxcbiAgICAgICAgIHN1cGVyc2NyaXB0U3Vic2NyaXB0Q2hhcmFjdGVyTWFwLFxuICAgICAgICAgbWlzY2VsbGFuZW91c0NoYXJhY3Rlck1hcCB9IGZyb20gXCIuLi91bmljb2RlQ2hhcmFjdGVyTWFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Ob3RoaW5nKCksXG4gICAgICAgICAgeyBuYW1lLCB0aXRsZSB9ID0gcGFyYW1ldGVycyxcbiAgICAgICAgICBjaGFyYWN0ZXJNYXAgPSBjaGFyYWN0ZXJNYXBGcm9tTmFtZShuYW1lKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8TWFpbkhlYWRlci8+LFxuICAgICAgPFNlY29uZGFyeUhlYWRpbmc+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvU2Vjb25kYXJ5SGVhZGluZz4sXG4gICAgICA8R2x5cGhzVGFibGUgY2hhcmFjdGVyTWFwPXtjaGFyYWN0ZXJNYXB9IC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IHsgc2VhcmNoIH0gPSBsb2NhdGlvbixcbiAgICAgICAgc3RhcnQgPSAxLFxuICAgICAgICBxdWVyeVN0cmluZyA9IHNlYXJjaC5zdWJzdHJpbmcoc3RhcnQpLFxuICAgICAgICBuYW1lVmFsdWVTdHJpbmdzID0gcXVlcnlTdHJpbmcuc3BsaXQoXCImXCIpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gbmFtZVZhbHVlU3RyaW5ncy5yZWR1Y2UoKHBhcmFtZXRlcnMsIG5hbWVWYWx1ZVN0cmluZykgPT4ge1xuICAgICAgICAgIGNvbnN0IFsgbmFtZSwgZW5jb2RlZFZhbHVlIF0gPSBuYW1lVmFsdWVTdHJpbmcuc3BsaXQoXCI9XCIpLFxuICAgICAgICAgICAgICAgIHZhbHVlID0gZW5jb2RlZFZhbHVlLnJlcGxhY2UoL1xcKy9nLCBcIiBcIik7XG5cbiAgICAgICAgICBwYXJhbWV0ZXJzW25hbWVdID0gdmFsdWU7XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVycztcbiAgICAgICAgfSwge30pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5mdW5jdGlvbiBjaGFyYWN0ZXJNYXBGcm9tTmFtZShuYW1lKSB7XG4gIGxldCBjaGFyYWN0ZXJNYXA7XG5cbiAgc3dpdGNoIChuYW1lKSB7XG4gICAgY2FzZSBcInNoYXBlXCI6IGNoYXJhY3Rlck1hcCA9IHNoYXBlQ2hhcmFjdGVyTWFwOyBicmVhaztcbiAgICBjYXNlIFwiYW5nbGVcIjogY2hhcmFjdGVyTWFwID0gYW5nbGVDaGFyYWN0ZXJNYXA7IGJyZWFrO1xuICAgIGNhc2UgXCJhcnJvd1wiOiBjaGFyYWN0ZXJNYXAgPSBhcnJvd0NoYXJhY3Rlck1hcDsgYnJlYWs7XG4gICAgY2FzZSBcImhhcnBvb25cIjogY2hhcmFjdGVyTWFwID0gaGFycG9vbkNoYXJhY3Rlck1hcDsgYnJlYWs7XG4gICAgY2FzZSBcImVxdWFsaXR5XCI6IGNoYXJhY3Rlck1hcCA9IGVxdWFsaXR5Q2hhcmFjdGVyTWFwOyBicmVhaztcbiAgICBjYXNlIFwib3JkZXJpbmdcIjogY2hhcmFjdGVyTWFwID0gb3JkZXJpbmdDaGFyYWN0ZXJNYXA7IGJyZWFrO1xuICAgIGNhc2UgXCJjYWxjdWx1c1wiOiBjaGFyYWN0ZXJNYXAgPSBjYWxjdWx1c0NoYXJhY3Rlck1hcDsgYnJlYWs7XG4gICAgY2FzZSBcInJlbGF0aW9uYWxcIjogY2hhcmFjdGVyTWFwID0gcmVsYXRpb25hbENoYXJhY3Rlck1hcDsgYnJlYWs7XG4gICAgY2FzZSBcImFyaXRobWV0aWNcIjogY2hhcmFjdGVyTWFwID0gYXJpdGhtZXRpY0NoYXJhY3Rlck1hcDsgYnJlYWs7XG4gICAgY2FzZSBcImdyZWVrTGV0dGVyXCI6IGNoYXJhY3Rlck1hcCA9IGdyZWVrTGV0dGVyQ2hhcmFjdGVyTWFwOyBicmVhaztcbiAgICBjYXNlIFwiaGVhZGVkQXJyb3dcIjogY2hhcmFjdGVyTWFwID0gaGVhZGVkQXJyb3dDaGFyYWN0ZXJNYXA7IGJyZWFrO1xuICAgIGNhc2UgXCJzY3JpcHRMZXR0ZXJzXCI6IGNoYXJhY3Rlck1hcCA9IHNjcmlwdExldHRlcnNDaGFyYWN0ZXJNYXA7IGJyZWFrO1xuICAgIGNhc2UgXCJjaXJjbGVDaXJjbGVkXCI6IGNoYXJhY3Rlck1hcCA9IGNpcmNsZUNpcmNsZWRDaGFyYWN0ZXJNYXA7IGJyZWFrO1xuICAgIGNhc2UgXCJ0YWNrVHVybnN0aWxlXCI6IGNoYXJhY3Rlck1hcCA9IHRhY2tUdXJuc3RpbGVDaGFyYWN0ZXJNYXA7IGJyZWFrO1xuICAgIGNhc2UgXCJjbGFzc1RoZW9yZXRpY1wiOiBjaGFyYWN0ZXJNYXAgPSBjbGFzc1RoZW9yZXRpY0NoYXJhY3Rlck1hcDsgYnJlYWs7XG4gICAgY2FzZSBcImZyYWt0dXJMZXR0ZXJzXCI6IGNoYXJhY3Rlck1hcCA9IGZyYWt0dXJMZXR0ZXJzQ2hhcmFjdGVyTWFwOyBicmVhaztcbiAgICBjYXNlIFwibG9naWNhbE9wZXJhdG9yXCI6IGNoYXJhY3Rlck1hcCA9IGxvZ2ljYWxPcGVyYXRvckNoYXJhY3Rlck1hcDsgYnJlYWs7XG4gICAgY2FzZSBcImRvdWJsZVRyaXBsZUFycm93XCI6IGNoYXJhY3Rlck1hcCA9IGRvdWJsZVRyaXBsZUFycm93Q2hhcmFjdGVyTWFwOyBicmVhaztcbiAgICBjYXNlIFwicGFyZW50aGVzaXNCcmFja2V0XCI6IGNoYXJhY3Rlck1hcCA9IHBhcmVudGhlc2lzQnJhY2tldENoYXJhY3Rlck1hcDsgYnJlYWs7XG4gICAgY2FzZSBcImRvdWJsZVN0cnVja0xldHRlcnNcIjogY2hhcmFjdGVyTWFwID0gZG91YmxlU3RydWNrTGV0dGVyc0NoYXJhY3Rlck1hcDsgYnJlYWs7XG4gICAgY2FzZSBcInN1cGVyc2NyaXB0U3Vic2NyaXB0XCI6IGNoYXJhY3Rlck1hcCA9IHN1cGVyc2NyaXB0U3Vic2NyaXB0Q2hhcmFjdGVyTWFwOyBicmVhaztcbiAgICBjYXNlIFwibWlzY2VsbGFuZW91c1wiOiBjaGFyYWN0ZXJNYXAgPSBtaXNjZWxsYW5lb3VzQ2hhcmFjdGVyTWFwOyBicmVhaztcbiAgfVxuXG4gIHJldHVybiBjaGFyYWN0ZXJNYXA7XG59XG4iXSwibmFtZXMiOlsiVmlldyIsImNoaWxkRWxlbWVudHMiLCJwYXJhbWV0ZXJzIiwicGFyYW1ldGVyc0Zyb21Ob3RoaW5nIiwibmFtZSIsInRpdGxlIiwiY2hhcmFjdGVyTWFwIiwiY2hhcmFjdGVyTWFwRnJvbU5hbWUiLCJNYWluSGVhZGVyIiwiU2Vjb25kYXJ5SGVhZGluZyIsIkdseXBoc1RhYmxlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNlYXJjaCIsImxvY2F0aW9uIiwic3RhcnQiLCJxdWVyeVN0cmluZyIsInN1YnN0cmluZyIsIm5hbWVWYWx1ZVN0cmluZ3MiLCJzcGxpdCIsInJlZHVjZSIsIm5hbWVWYWx1ZVN0cmluZyIsImVuY29kZWRWYWx1ZSIsInZhbHVlIiwicmVwbGFjZSIsInNoYXBlQ2hhcmFjdGVyTWFwIiwiYW5nbGVDaGFyYWN0ZXJNYXAiLCJhcnJvd0NoYXJhY3Rlck1hcCIsImhhcnBvb25DaGFyYWN0ZXJNYXAiLCJlcXVhbGl0eUNoYXJhY3Rlck1hcCIsIm9yZGVyaW5nQ2hhcmFjdGVyTWFwIiwiY2FsY3VsdXNDaGFyYWN0ZXJNYXAiLCJyZWxhdGlvbmFsQ2hhcmFjdGVyTWFwIiwiYXJpdGhtZXRpY0NoYXJhY3Rlck1hcCIsImdyZWVrTGV0dGVyQ2hhcmFjdGVyTWFwIiwiaGVhZGVkQXJyb3dDaGFyYWN0ZXJNYXAiLCJzY3JpcHRMZXR0ZXJzQ2hhcmFjdGVyTWFwIiwiY2lyY2xlQ2lyY2xlZENoYXJhY3Rlck1hcCIsInRhY2tUdXJuc3RpbGVDaGFyYWN0ZXJNYXAiLCJjbGFzc1RoZW9yZXRpY0NoYXJhY3Rlck1hcCIsImZyYWt0dXJMZXR0ZXJzQ2hhcmFjdGVyTWFwIiwibG9naWNhbE9wZXJhdG9yQ2hhcmFjdGVyTWFwIiwiZG91YmxlVHJpcGxlQXJyb3dDaGFyYWN0ZXJNYXAiLCJwYXJlbnRoZXNpc0JyYWNrZXRDaGFyYWN0ZXJNYXAiLCJkb3VibGVTdHJ1Y2tMZXR0ZXJzQ2hhcmFjdGVyTWFwIiwic3VwZXJzY3JpcHRTdWJzY3JpcHRDaGFyYWN0ZXJNYXAiLCJtaXNjZWxsYW5lb3VzQ2hhcmFjdGVyTWFwIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQStCcUJBOzs7b0JBN0JHOzJEQUVEOzZEQUNDO2dFQUNLO21DQXVCYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFBLEFBQU1BLHFCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWFDLHlCQUNYQyxPQUFnQkYsV0FBaEJFLE1BQU1DLFFBQVVILFdBQVZHLE9BQ1JDLGVBQWVDLHFCQUFxQkg7Z0JBRTFDLE9BQVE7a0NBRU4sb0JBQUNJLGFBQVU7a0NBQ1gsb0JBQUNDLGtCQUFnQixRQUNkSjtrQ0FFSCxvQkFBQ0ssZUFBVzt3QkFBQ0osY0FBY0E7O2lCQUU1QjtZQUNIOzs7V0FmbUJOO3FCQUFhVyxhQUFPO0FBaUJ2QyxpQkFqQm1CWCxNQWlCWlksV0FBVTtBQUVqQixpQkFuQm1CWixNQW1CWmEscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7QUFHRixTQUFTWDtJQUNQLElBQU0sQUFBRVksU0FBV0MsU0FBWEQsUUFDRkUsUUFBUSxHQUNSQyxjQUFjSCxPQUFPSSxTQUFTLENBQUNGLFFBQy9CRyxtQkFBbUJGLFlBQVlHLEtBQUssQ0FBQyxNQUNyQ25CLGFBQWFrQixpQkFBaUJFLE1BQU0sQ0FBQyxTQUFDcEIsWUFBWXFCO1FBQ2hELElBQStCQSwwQ0FBQUEsZ0JBQWdCRixLQUFLLENBQUMsVUFBN0NqQixPQUF1Qm1CLDJCQUFqQkMsZUFBaUJELDJCQUN6QkUsUUFBUUQsYUFBYUUsT0FBTyxDQUFDLE9BQU87UUFFMUN4QixVQUFVLENBQUNFLEtBQUssR0FBR3FCO1FBRW5CLE9BQU92QjtJQUNULEdBQUcsQ0FBQztJQUVWLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTSyxxQkFBcUJILElBQUk7SUFDaEMsSUFBSUU7SUFFSixPQUFRRjtRQUNOLEtBQUs7WUFBU0UsZUFBZXFCLHNDQUFpQjtZQUFFO1FBQ2hELEtBQUs7WUFBU3JCLGVBQWVzQixzQ0FBaUI7WUFBRTtRQUNoRCxLQUFLO1lBQVN0QixlQUFldUIsc0NBQWlCO1lBQUU7UUFDaEQsS0FBSztZQUFXdkIsZUFBZXdCLHdDQUFtQjtZQUFFO1FBQ3BELEtBQUs7WUFBWXhCLGVBQWV5Qix5Q0FBb0I7WUFBRTtRQUN0RCxLQUFLO1lBQVl6QixlQUFlMEIseUNBQW9CO1lBQUU7UUFDdEQsS0FBSztZQUFZMUIsZUFBZTJCLHlDQUFvQjtZQUFFO1FBQ3RELEtBQUs7WUFBYzNCLGVBQWU0QiwyQ0FBc0I7WUFBRTtRQUMxRCxLQUFLO1lBQWM1QixlQUFlNkIsMkNBQXNCO1lBQUU7UUFDMUQsS0FBSztZQUFlN0IsZUFBZThCLDRDQUF1QjtZQUFFO1FBQzVELEtBQUs7WUFBZTlCLGVBQWUrQiw0Q0FBdUI7WUFBRTtRQUM1RCxLQUFLO1lBQWlCL0IsZUFBZWdDLDhDQUF5QjtZQUFFO1FBQ2hFLEtBQUs7WUFBaUJoQyxlQUFlaUMsOENBQXlCO1lBQUU7UUFDaEUsS0FBSztZQUFpQmpDLGVBQWVrQyw4Q0FBeUI7WUFBRTtRQUNoRSxLQUFLO1lBQWtCbEMsZUFBZW1DLCtDQUEwQjtZQUFFO1FBQ2xFLEtBQUs7WUFBa0JuQyxlQUFlb0MsK0NBQTBCO1lBQUU7UUFDbEUsS0FBSztZQUFtQnBDLGVBQWVxQyxnREFBMkI7WUFBRTtRQUNwRSxLQUFLO1lBQXFCckMsZUFBZXNDLGtEQUE2QjtZQUFFO1FBQ3hFLEtBQUs7WUFBc0J0QyxlQUFldUMsbURBQThCO1lBQUU7UUFDMUUsS0FBSztZQUF1QnZDLGVBQWV3QyxvREFBK0I7WUFBRTtRQUM1RSxLQUFLO1lBQXdCeEMsZUFBZXlDLHFEQUFnQztZQUFFO1FBQzlFLEtBQUs7WUFBaUJ6QyxlQUFlMEMsOENBQXlCO1lBQUU7SUFDbEU7SUFFQSxPQUFPMUM7QUFDVCJ9