"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return GlyphTableCell;
    }
});
var _tableCell = /*#__PURE__*/ _interop_require_default(require("../tableCell"));
var _glyph = /*#__PURE__*/ _interop_require_default(require("../span/glyph"));
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
var GlyphTableCell = /*#__PURE__*/ function(TableCell) {
    _inherits(GlyphTableCell, TableCell);
    function GlyphTableCell() {
        _class_call_check(this, GlyphTableCell);
        return _call_super(this, GlyphTableCell, arguments);
    }
    _create_class(GlyphTableCell, [
        {
            key: "childElements",
            value: function childElements() {
                var codePoint = this.properties.codePoint;
                return /*#__PURE__*/ React.createElement(_glyph.default, {
                    codePoint: codePoint
                });
            }
        }
    ]);
    return GlyphTableCell;
}(_tableCell.default);
_define_property(GlyphTableCell, "ignoredProperties", [
    "codePoint"
]);
_define_property(GlyphTableCell, "defaultProperties", {
    className: "glyph"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGFibGVDZWxsL2dscHloL2p1bGlhTW9uby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tIFwiLi4vdGFibGVDZWxsXCI7XG5pbXBvcnQgR2x5cGhTcGFuIGZyb20gXCIuLi9zcGFuL2dseXBoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdseXBoVGFibGVDZWxsIGV4dGVuZHMgVGFibGVDZWxsIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IGNvZGVQb2ludCB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPEdseXBoU3BhbiBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gLz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJjb2RlUG9pbnRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZ2x5cGhcIlxuICB9O1xufVxuXG4iXSwibmFtZXMiOlsiR2x5cGhUYWJsZUNlbGwiLCJjaGlsZEVsZW1lbnRzIiwiY29kZVBvaW50IiwicHJvcGVydGllcyIsIkdseXBoU3BhbiIsIlRhYmxlQ2VsbCIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7O2dFQUhDOzREQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQUEsQUFBTUEsK0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFQyxZQUFjLElBQUksQ0FBQ0MsVUFBVSxDQUE3QkQ7Z0JBRVIscUJBRUUsb0JBQUNFLGNBQVM7b0JBQUNGLFdBQVdBOztZQUcxQjs7O1dBVG1CRjtFQUF1Qkssa0JBQVM7QUFXbkQsaUJBWG1CTCxnQkFXWk0scUJBQW9CO0lBQ3pCO0NBQ0Q7QUFFRCxpQkFmbUJOLGdCQWVaTyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9