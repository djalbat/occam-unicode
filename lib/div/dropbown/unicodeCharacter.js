"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return UnicodeCharacterDropdownDiv;
    }
});
var _dropdown = /*#__PURE__*/ _interop_require_default(require("../../div/dropdown"));
var _unicodeCharacter = /*#__PURE__*/ _interop_require_default(require("../../list/dropdown/unicodeCharacter"));
var _unicodeCharacter1 = /*#__PURE__*/ _interop_require_default(require("../../input/dropdown/unicodeCharacter"));
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
var UnicodeCharacterDropdownDiv = /*#__PURE__*/ function(DropdownDiv) {
    _inherits(UnicodeCharacterDropdownDiv, DropdownDiv);
    function UnicodeCharacterDropdownDiv() {
        _class_call_check(this, UnicodeCharacterDropdownDiv);
        return _call_super(this, UnicodeCharacterDropdownDiv, arguments);
    }
    return UnicodeCharacterDropdownDiv;
}(_dropdown.default);
_define_property(UnicodeCharacterDropdownDiv, "DropdownList", _unicodeCharacter.default);
_define_property(UnicodeCharacterDropdownDiv, "DropdownInput", _unicodeCharacter1.default);
_define_property(UnicodeCharacterDropdownDiv, "defaultProperties", {
    className: "unicode-character"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvZHJvcGJvd24vdW5pY29kZUNoYXJhY3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERyb3Bkb3duRGl2IGZyb20gXCIuLi8uLi9kaXYvZHJvcGRvd25cIjtcbmltcG9ydCBVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25MaXN0IGZyb20gXCIuLi8uLi9saXN0L2Ryb3Bkb3duL3VuaWNvZGVDaGFyYWN0ZXJcIjtcbmltcG9ydCBVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25JbnB1dCBmcm9tIFwiLi4vLi4vaW5wdXQvZHJvcGRvd24vdW5pY29kZUNoYXJhY3RlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25EaXYgZXh0ZW5kcyBEcm9wZG93bkRpdiB7XG4gIHN0YXRpYyBEcm9wZG93bkxpc3QgPSBVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25MaXN0O1xuXG4gIHN0YXRpYyBEcm9wZG93bklucHV0ID0gVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSW5wdXQ7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ1bmljb2RlLWNoYXJhY3RlclwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duRGl2IiwiRHJvcGRvd25EaXYiLCJEcm9wZG93bkxpc3QiLCJVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25MaXN0IiwiRHJvcGRvd25JbnB1dCIsIlVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bklucHV0IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OytEQUpHO3VFQUNpQjt3RUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQUEsQUFBTUEsNENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztXQUFBQTtFQUFvQ0MsaUJBQVc7QUFDbEUsaUJBRG1CRCw2QkFDWkUsZ0JBQWVDLHlCQUE0QjtBQUVsRCxpQkFIbUJILDZCQUdaSSxpQkFBZ0JDLDBCQUE2QjtBQUVwRCxpQkFMbUJMLDZCQUtaTSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9