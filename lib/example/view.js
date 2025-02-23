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
        case "shapeCharacter":
            characterMap = _unicodeCharacterMap.shapeCharacterMap;
            break;
        case "angleCharacter":
            characterMap = _unicodeCharacterMap.angleCharacterMap;
            break;
        case "arrowCharacter":
            characterMap = _unicodeCharacterMap.arrowCharacterMap;
            break;
        case "harpoonCharacter":
            characterMap = _unicodeCharacterMap.harpoonCharacterMap;
            break;
        case "equalityCharacter":
            characterMap = _unicodeCharacterMap.equalityCharacterMap;
            break;
        case "orderingCharacter":
            characterMap = _unicodeCharacterMap.orderingCharacterMap;
            break;
        case "calculusCharacter":
            characterMap = _unicodeCharacterMap.calculusCharacterMap;
            break;
        case "relationalCharacter":
            characterMap = _unicodeCharacterMap.relationalCharacterMap;
            break;
        case "arithmeticCharacter":
            characterMap = _unicodeCharacterMap.arithmeticCharacterMap;
            break;
        case "headedArrowCharacter":
            characterMap = _unicodeCharacterMap.headedArrowCharacterMap;
            break;
        case "greekLetterCharacter":
            characterMap = _unicodeCharacterMap.greekLetterCharacterMap;
            break;
        case "miscellaneousCharacter":
            characterMap = _unicodeCharacterMap.miscellaneousCharacterMap;
            break;
        case "scriptLettersCharacter":
            characterMap = _unicodeCharacterMap.scriptLettersCharacterMap;
            break;
        case "circleCircledCharacter":
            characterMap = _unicodeCharacterMap.circleCircledCharacterMap;
            break;
        case "tackTurnstileCharacter":
            characterMap = _unicodeCharacterMap.tackTurnstileCharacterMap;
            break;
        case "frakturLettersCharacter":
            characterMap = _unicodeCharacterMap.frakturLettersCharacterMap;
            break;
        case "classTheoreticCharacter":
            characterMap = _unicodeCharacterMap.classTheoreticCharacterMap;
            break;
        case "logicalOperatorCharacter":
            characterMap = _unicodeCharacterMap.logicalOperatorCharacterMap;
            break;
        case "doubleTripleArrowCharacter":
            characterMap = _unicodeCharacterMap.doubleTripleArrowCharacterMap;
            break;
        case "parenthesisBracketCharacter":
            characterMap = _unicodeCharacterMap.parenthesisBracketCharacterMap;
            break;
        case "doubleStruckLettersCharacter":
            characterMap = _unicodeCharacterMap.doubleStruckLettersCharacterMap;
            break;
        case "superscriptSubscriptCharacter":
            characterMap = _unicodeCharacterMap.superscriptSubscriptCharacterMap;
            break;
    }
    return characterMap;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgTWFpbkhlYWRlciBmcm9tIFwiLi92aWV3L2hlYWRlci9tYWluXCI7XG5pbXBvcnQgR2x5cGhzVGFibGUgZnJvbSBcIi4vdmlldy90YWJsZS9nbHlwaHNcIjtcbmltcG9ydCBTZWNvbmRhcnlIZWFkaW5nIGZyb20gXCIuL3ZpZXcvaGVhZGluZy9zZWNvbmRhcnlcIlxuXG5pbXBvcnQgeyBzaGFwZUNoYXJhY3Rlck1hcCxcbiAgICAgICAgIGFuZ2xlQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgYXJyb3dDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBoYXJwb29uQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgZXF1YWxpdHlDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBvcmRlcmluZ0NoYXJhY3Rlck1hcCxcbiAgICAgICAgIGNhbGN1bHVzQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgcmVsYXRpb25hbENoYXJhY3Rlck1hcCxcbiAgICAgICAgIGFyaXRobWV0aWNDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBoZWFkZWRBcnJvd0NoYXJhY3Rlck1hcCxcbiAgICAgICAgIGdyZWVrTGV0dGVyQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgbWlzY2VsbGFuZW91c0NoYXJhY3Rlck1hcCxcbiAgICAgICAgIHNjcmlwdExldHRlcnNDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBjaXJjbGVDaXJjbGVkQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgdGFja1R1cm5zdGlsZUNoYXJhY3Rlck1hcCxcbiAgICAgICAgIGZyYWt0dXJMZXR0ZXJzQ2hhcmFjdGVyTWFwLFxuICAgICAgICAgY2xhc3NUaGVvcmV0aWNDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBsb2dpY2FsT3BlcmF0b3JDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBkb3VibGVUcmlwbGVBcnJvd0NoYXJhY3Rlck1hcCxcbiAgICAgICAgIHBhcmVudGhlc2lzQnJhY2tldENoYXJhY3Rlck1hcCxcbiAgICAgICAgIGRvdWJsZVN0cnVja0xldHRlcnNDaGFyYWN0ZXJNYXAsXG4gICAgICAgICBzdXBlcnNjcmlwdFN1YnNjcmlwdENoYXJhY3Rlck1hcCAgfSBmcm9tIFwiLi4vdW5pY29kZUNoYXJhY3Rlck1hcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tTm90aGluZygpLFxuICAgICAgICAgIHsgbmFtZSwgdGl0bGUgfSA9IHBhcmFtZXRlcnMsXG4gICAgICAgICAgY2hhcmFjdGVyTWFwID0gY2hhcmFjdGVyTWFwRnJvbU5hbWUobmFtZSk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPE1haW5IZWFkZXIvPixcbiAgICAgIDxTZWNvbmRhcnlIZWFkaW5nPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L1NlY29uZGFyeUhlYWRpbmc+LFxuICAgICAgPEdseXBoc1RhYmxlIGNoYXJhY3Rlck1hcD17Y2hhcmFjdGVyTWFwfSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Ob3RoaW5nKCkge1xuICBjb25zdCB7IHNlYXJjaCB9ID0gbG9jYXRpb24sXG4gICAgICAgIHN0YXJ0ID0gMSxcbiAgICAgICAgcXVlcnlTdHJpbmcgPSBzZWFyY2guc3Vic3RyaW5nKHN0YXJ0KSxcbiAgICAgICAgbmFtZVZhbHVlU3RyaW5ncyA9IHF1ZXJ5U3RyaW5nLnNwbGl0KFwiJlwiKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IG5hbWVWYWx1ZVN0cmluZ3MucmVkdWNlKChwYXJhbWV0ZXJzLCBuYW1lVmFsdWVTdHJpbmcpID0+IHtcbiAgICAgICAgICBjb25zdCBbIG5hbWUsIGVuY29kZWRWYWx1ZSBdID0gbmFtZVZhbHVlU3RyaW5nLnNwbGl0KFwiPVwiKSxcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGVuY29kZWRWYWx1ZS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpO1xuXG4gICAgICAgICAgcGFyYW1ldGVyc1tuYW1lXSA9IHZhbHVlO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcnM7XG4gICAgICAgIH0sIHt9KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZnVuY3Rpb24gY2hhcmFjdGVyTWFwRnJvbU5hbWUobmFtZSkge1xuICBsZXQgY2hhcmFjdGVyTWFwO1xuXG4gIHN3aXRjaCAobmFtZSkge1xuICAgIGNhc2UgXCJzaGFwZUNoYXJhY3RlclwiOiBjaGFyYWN0ZXJNYXAgPSBzaGFwZUNoYXJhY3Rlck1hcDsgYnJlYWs7XG4gICAgY2FzZSBcImFuZ2xlQ2hhcmFjdGVyXCI6IGNoYXJhY3Rlck1hcCA9IGFuZ2xlQ2hhcmFjdGVyTWFwOyBicmVhaztcbiAgICBjYXNlIFwiYXJyb3dDaGFyYWN0ZXJcIjogY2hhcmFjdGVyTWFwID0gYXJyb3dDaGFyYWN0ZXJNYXA7IGJyZWFrO1xuICAgIGNhc2UgXCJoYXJwb29uQ2hhcmFjdGVyXCI6IGNoYXJhY3Rlck1hcCA9IGhhcnBvb25DaGFyYWN0ZXJNYXA7IGJyZWFrO1xuICAgIGNhc2UgXCJlcXVhbGl0eUNoYXJhY3RlclwiOiBjaGFyYWN0ZXJNYXAgPSBlcXVhbGl0eUNoYXJhY3Rlck1hcDsgYnJlYWs7XG4gICAgY2FzZSBcIm9yZGVyaW5nQ2hhcmFjdGVyXCI6IGNoYXJhY3Rlck1hcCA9IG9yZGVyaW5nQ2hhcmFjdGVyTWFwOyBicmVhaztcbiAgICBjYXNlIFwiY2FsY3VsdXNDaGFyYWN0ZXJcIjogY2hhcmFjdGVyTWFwID0gY2FsY3VsdXNDaGFyYWN0ZXJNYXA7IGJyZWFrO1xuICAgIGNhc2UgXCJyZWxhdGlvbmFsQ2hhcmFjdGVyXCI6IGNoYXJhY3Rlck1hcCA9IHJlbGF0aW9uYWxDaGFyYWN0ZXJNYXA7IGJyZWFrO1xuICAgIGNhc2UgXCJhcml0aG1ldGljQ2hhcmFjdGVyXCI6IGNoYXJhY3Rlck1hcCA9IGFyaXRobWV0aWNDaGFyYWN0ZXJNYXA7IGJyZWFrO1xuICAgIGNhc2UgXCJoZWFkZWRBcnJvd0NoYXJhY3RlclwiOiBjaGFyYWN0ZXJNYXAgPSBoZWFkZWRBcnJvd0NoYXJhY3Rlck1hcDsgYnJlYWs7XG4gICAgY2FzZSBcImdyZWVrTGV0dGVyQ2hhcmFjdGVyXCI6IGNoYXJhY3Rlck1hcCA9IGdyZWVrTGV0dGVyQ2hhcmFjdGVyTWFwOyBicmVhaztcbiAgICBjYXNlIFwibWlzY2VsbGFuZW91c0NoYXJhY3RlclwiOiBjaGFyYWN0ZXJNYXAgPSBtaXNjZWxsYW5lb3VzQ2hhcmFjdGVyTWFwOyBicmVhaztcbiAgICBjYXNlIFwic2NyaXB0TGV0dGVyc0NoYXJhY3RlclwiOiBjaGFyYWN0ZXJNYXAgPSBzY3JpcHRMZXR0ZXJzQ2hhcmFjdGVyTWFwOyBicmVhaztcbiAgICBjYXNlIFwiY2lyY2xlQ2lyY2xlZENoYXJhY3RlclwiOiBjaGFyYWN0ZXJNYXAgPSBjaXJjbGVDaXJjbGVkQ2hhcmFjdGVyTWFwOyBicmVhaztcbiAgICBjYXNlIFwidGFja1R1cm5zdGlsZUNoYXJhY3RlclwiOiBjaGFyYWN0ZXJNYXAgPSB0YWNrVHVybnN0aWxlQ2hhcmFjdGVyTWFwOyBicmVhaztcbiAgICBjYXNlIFwiZnJha3R1ckxldHRlcnNDaGFyYWN0ZXJcIjogY2hhcmFjdGVyTWFwID0gZnJha3R1ckxldHRlcnNDaGFyYWN0ZXJNYXA7IGJyZWFrO1xuICAgIGNhc2UgXCJjbGFzc1RoZW9yZXRpY0NoYXJhY3RlclwiOiBjaGFyYWN0ZXJNYXAgPSBjbGFzc1RoZW9yZXRpY0NoYXJhY3Rlck1hcDsgYnJlYWs7XG4gICAgY2FzZSBcImxvZ2ljYWxPcGVyYXRvckNoYXJhY3RlclwiOiBjaGFyYWN0ZXJNYXAgPSBsb2dpY2FsT3BlcmF0b3JDaGFyYWN0ZXJNYXA7IGJyZWFrO1xuICAgIGNhc2UgXCJkb3VibGVUcmlwbGVBcnJvd0NoYXJhY3RlclwiOiBjaGFyYWN0ZXJNYXAgPSBkb3VibGVUcmlwbGVBcnJvd0NoYXJhY3Rlck1hcDsgYnJlYWs7XG4gICAgY2FzZSBcInBhcmVudGhlc2lzQnJhY2tldENoYXJhY3RlclwiOiBjaGFyYWN0ZXJNYXAgPSBwYXJlbnRoZXNpc0JyYWNrZXRDaGFyYWN0ZXJNYXA7IGJyZWFrO1xuICAgIGNhc2UgXCJkb3VibGVTdHJ1Y2tMZXR0ZXJzQ2hhcmFjdGVyXCI6IGNoYXJhY3Rlck1hcCA9IGRvdWJsZVN0cnVja0xldHRlcnNDaGFyYWN0ZXJNYXA7IGJyZWFrO1xuICAgIGNhc2UgXCJzdXBlcnNjcmlwdFN1YnNjcmlwdENoYXJhY3RlclwiOiBjaGFyYWN0ZXJNYXAgPSBzdXBlcnNjcmlwdFN1YnNjcmlwdENoYXJhY3Rlck1hcDsgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gY2hhcmFjdGVyTWFwO1xufVxuIl0sIm5hbWVzIjpbIlZpZXciLCJjaGlsZEVsZW1lbnRzIiwicGFyYW1ldGVycyIsInBhcmFtZXRlcnNGcm9tTm90aGluZyIsIm5hbWUiLCJ0aXRsZSIsImNoYXJhY3Rlck1hcCIsImNoYXJhY3Rlck1hcEZyb21OYW1lIiwiTWFpbkhlYWRlciIsIlNlY29uZGFyeUhlYWRpbmciLCJHbHlwaHNUYWJsZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzZWFyY2giLCJsb2NhdGlvbiIsInN0YXJ0IiwicXVlcnlTdHJpbmciLCJzdWJzdHJpbmciLCJuYW1lVmFsdWVTdHJpbmdzIiwic3BsaXQiLCJyZWR1Y2UiLCJuYW1lVmFsdWVTdHJpbmciLCJlbmNvZGVkVmFsdWUiLCJ2YWx1ZSIsInJlcGxhY2UiLCJzaGFwZUNoYXJhY3Rlck1hcCIsImFuZ2xlQ2hhcmFjdGVyTWFwIiwiYXJyb3dDaGFyYWN0ZXJNYXAiLCJoYXJwb29uQ2hhcmFjdGVyTWFwIiwiZXF1YWxpdHlDaGFyYWN0ZXJNYXAiLCJvcmRlcmluZ0NoYXJhY3Rlck1hcCIsImNhbGN1bHVzQ2hhcmFjdGVyTWFwIiwicmVsYXRpb25hbENoYXJhY3Rlck1hcCIsImFyaXRobWV0aWNDaGFyYWN0ZXJNYXAiLCJoZWFkZWRBcnJvd0NoYXJhY3Rlck1hcCIsImdyZWVrTGV0dGVyQ2hhcmFjdGVyTWFwIiwibWlzY2VsbGFuZW91c0NoYXJhY3Rlck1hcCIsInNjcmlwdExldHRlcnNDaGFyYWN0ZXJNYXAiLCJjaXJjbGVDaXJjbGVkQ2hhcmFjdGVyTWFwIiwidGFja1R1cm5zdGlsZUNoYXJhY3Rlck1hcCIsImZyYWt0dXJMZXR0ZXJzQ2hhcmFjdGVyTWFwIiwiY2xhc3NUaGVvcmV0aWNDaGFyYWN0ZXJNYXAiLCJsb2dpY2FsT3BlcmF0b3JDaGFyYWN0ZXJNYXAiLCJkb3VibGVUcmlwbGVBcnJvd0NoYXJhY3Rlck1hcCIsInBhcmVudGhlc2lzQnJhY2tldENoYXJhY3Rlck1hcCIsImRvdWJsZVN0cnVja0xldHRlcnNDaGFyYWN0ZXJNYXAiLCJzdXBlcnNjcmlwdFN1YnNjcmlwdENoYXJhY3Rlck1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUErQnFCQTs7O29CQTdCRzsyREFFRDs2REFDQztnRUFDSzttQ0F1QnFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQUEsQUFBTUEscUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYUMseUJBQ1hDLE9BQWdCRixXQUFoQkUsTUFBTUMsUUFBVUgsV0FBVkcsT0FDUkMsZUFBZUMscUJBQXFCSDtnQkFFMUMsT0FBUTtrQ0FFTixvQkFBQ0ksYUFBVTtrQ0FDWCxvQkFBQ0Msa0JBQWdCLFFBQ2RKO2tDQUVILG9CQUFDSyxlQUFXO3dCQUFDSixjQUFjQTs7aUJBRTVCO1lBQ0g7OztXQWZtQk47cUJBQWFXLGFBQU87QUFpQnZDLGlCQWpCbUJYLE1BaUJaWSxXQUFVO0FBRWpCLGlCQW5CbUJaLE1BbUJaYSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtBQUdGLFNBQVNYO0lBQ1AsSUFBTSxBQUFFWSxTQUFXQyxTQUFYRCxRQUNGRSxRQUFRLEdBQ1JDLGNBQWNILE9BQU9JLFNBQVMsQ0FBQ0YsUUFDL0JHLG1CQUFtQkYsWUFBWUcsS0FBSyxDQUFDLE1BQ3JDbkIsYUFBYWtCLGlCQUFpQkUsTUFBTSxDQUFDLFNBQUNwQixZQUFZcUI7UUFDaEQsSUFBK0JBLDBDQUFBQSxnQkFBZ0JGLEtBQUssQ0FBQyxVQUE3Q2pCLE9BQXVCbUIsMkJBQWpCQyxlQUFpQkQsMkJBQ3pCRSxRQUFRRCxhQUFhRSxPQUFPLENBQUMsT0FBTztRQUUxQ3hCLFVBQVUsQ0FBQ0UsS0FBSyxHQUFHcUI7UUFFbkIsT0FBT3ZCO0lBQ1QsR0FBRyxDQUFDO0lBRVYsT0FBT0E7QUFDVDtBQUVBLFNBQVNLLHFCQUFxQkgsSUFBSTtJQUNoQyxJQUFJRTtJQUVKLE9BQVFGO1FBQ04sS0FBSztZQUFrQkUsZUFBZXFCLHNDQUFpQjtZQUFFO1FBQ3pELEtBQUs7WUFBa0JyQixlQUFlc0Isc0NBQWlCO1lBQUU7UUFDekQsS0FBSztZQUFrQnRCLGVBQWV1QixzQ0FBaUI7WUFBRTtRQUN6RCxLQUFLO1lBQW9CdkIsZUFBZXdCLHdDQUFtQjtZQUFFO1FBQzdELEtBQUs7WUFBcUJ4QixlQUFleUIseUNBQW9CO1lBQUU7UUFDL0QsS0FBSztZQUFxQnpCLGVBQWUwQix5Q0FBb0I7WUFBRTtRQUMvRCxLQUFLO1lBQXFCMUIsZUFBZTJCLHlDQUFvQjtZQUFFO1FBQy9ELEtBQUs7WUFBdUIzQixlQUFlNEIsMkNBQXNCO1lBQUU7UUFDbkUsS0FBSztZQUF1QjVCLGVBQWU2QiwyQ0FBc0I7WUFBRTtRQUNuRSxLQUFLO1lBQXdCN0IsZUFBZThCLDRDQUF1QjtZQUFFO1FBQ3JFLEtBQUs7WUFBd0I5QixlQUFlK0IsNENBQXVCO1lBQUU7UUFDckUsS0FBSztZQUEwQi9CLGVBQWVnQyw4Q0FBeUI7WUFBRTtRQUN6RSxLQUFLO1lBQTBCaEMsZUFBZWlDLDhDQUF5QjtZQUFFO1FBQ3pFLEtBQUs7WUFBMEJqQyxlQUFla0MsOENBQXlCO1lBQUU7UUFDekUsS0FBSztZQUEwQmxDLGVBQWVtQyw4Q0FBeUI7WUFBRTtRQUN6RSxLQUFLO1lBQTJCbkMsZUFBZW9DLCtDQUEwQjtZQUFFO1FBQzNFLEtBQUs7WUFBMkJwQyxlQUFlcUMsK0NBQTBCO1lBQUU7UUFDM0UsS0FBSztZQUE0QnJDLGVBQWVzQyxnREFBMkI7WUFBRTtRQUM3RSxLQUFLO1lBQThCdEMsZUFBZXVDLGtEQUE2QjtZQUFFO1FBQ2pGLEtBQUs7WUFBK0J2QyxlQUFld0MsbURBQThCO1lBQUU7UUFDbkYsS0FBSztZQUFnQ3hDLGVBQWV5QyxvREFBK0I7WUFBRTtRQUNyRixLQUFLO1lBQWlDekMsZUFBZTBDLHFEQUFnQztZQUFFO0lBQ3pGO0lBRUEsT0FBTzFDO0FBQ1QifQ==