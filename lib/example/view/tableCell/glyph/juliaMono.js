"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JuliaMonoGlyphTableCell;
    }
});
var _glyph = /*#__PURE__*/ _interop_require_default(require("../../tableCell/glyph"));
var _juliaMono = /*#__PURE__*/ _interop_require_default(require("../../span/glyph/juliaMono"));
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
var JuliaMonoGlyphTableCell = /*#__PURE__*/ function(GlyphTableCell) {
    _inherits(JuliaMonoGlyphTableCell, GlyphTableCell);
    function JuliaMonoGlyphTableCell() {
        _class_call_check(this, JuliaMonoGlyphTableCell);
        return _call_super(this, JuliaMonoGlyphTableCell, arguments);
    }
    _create_class(JuliaMonoGlyphTableCell, [
        {
            key: "childElements",
            value: function childElements() {
                var codePoint = this.properties.codePoint;
                return /*#__PURE__*/ React.createElement(_juliaMono.default, {
                    codePoint: codePoint
                });
            }
        }
    ]);
    return JuliaMonoGlyphTableCell;
}(_glyph.default);
_define_property(JuliaMonoGlyphTableCell, "defaultProperties", {
    className: "julia-mono"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGFibGVDZWxsL2dseXBoL2p1bGlhTW9uby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEdseXBoVGFibGVDZWxsIGZyb20gXCIuLi8uLi90YWJsZUNlbGwvZ2x5cGhcIjtcbmltcG9ydCBKdWxpYU1vbm9HbHlwaFNwYW4gZnJvbSBcIi4uLy4uL3NwYW4vZ2x5cGgvanVsaWFNb25vXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEp1bGlhTW9ub0dseXBoVGFibGVDZWxsIGV4dGVuZHMgR2x5cGhUYWJsZUNlbGwge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgY29kZVBvaW50IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8SnVsaWFNb25vR2x5cGhTcGFuIGNvZGVQb2ludD17Y29kZVBvaW50fSAvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwianVsaWEtbW9ub1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiSnVsaWFNb25vR2x5cGhUYWJsZUNlbGwiLCJjaGlsZEVsZW1lbnRzIiwiY29kZVBvaW50IiwicHJvcGVydGllcyIsIkp1bGlhTW9ub0dseXBoU3BhbiIsIkdseXBoVGFibGVDZWxsIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7OzREQUhNO2dFQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQixJQUFBLEFBQU1BLHdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFQyxZQUFjLElBQUksQ0FBQ0MsVUFBVSxDQUE3QkQ7Z0JBRVIscUJBRUUsb0JBQUNFLGtCQUFrQjtvQkFBQ0YsV0FBV0E7O1lBR25DOzs7V0FUbUJGO0VBQWdDSyxjQUFjO0FBV2pFLGlCQVhtQkwseUJBV1pNLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=