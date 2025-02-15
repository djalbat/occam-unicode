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
var _necessary = require("necessary");
var _dropdown = /*#__PURE__*/ _interop_require_default(require("../../div/dropdown"));
var _unicodeCharacter = /*#__PURE__*/ _interop_require_default(require("../../list/dropdown/unicodeCharacter"));
var _unicodeCharacter1 = /*#__PURE__*/ _interop_require_default(require("../../input/dropdown/unicodeCharacter"));
var _constants = require("../../constants");
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
var filter = _necessary.arrayUtilities.filter;
var UnicodeCharacterDropdownDiv = /*#__PURE__*/ function(DropdownDiv) {
    _inherits(UnicodeCharacterDropdownDiv, DropdownDiv);
    function UnicodeCharacterDropdownDiv() {
        _class_call_check(this, UnicodeCharacterDropdownDiv);
        var _this;
        _this = _call_super(this, UnicodeCharacterDropdownDiv, arguments), _define_property(_this, "updateCustomHandler", function(event, element) {
            var unicodeCharacter = _this.getUnicodeCharacter(), upperCaseUnicodeCharacter = unicodeCharacter.toUpperCase(), unicodeCharacterFragments = upperCaseUnicodeCharacter.split(/\s+/); ///
            filter(unicodeCharacterFragments, function(unicodeCharacterFragment) {
                if (unicodeCharacterFragment !== _constants.EMPTY_STRING) {
                    return true;
                }
            });
            var unicodeCharacterFragmentsLength = unicodeCharacterFragments.length;
            if (unicodeCharacterFragmentsLength === 0) {
                return;
            }
            _this.filterUnicodeCharacterDropdownList(unicodeCharacterFragments);
            var unicodeCharacterDropdownListEmpty = _this.isUnicodeCharacterDropdownListEmpty();
            unicodeCharacterDropdownListEmpty ? _this.hideUnicodeCharacterDropdownList() : _this.showUnicodeCharacterDropdownList();
        }), _define_property(_this, "selectCustomHandler", function(event, element) {
            var selectedUnicodeCodePoint = _this.getSelectedUnicodeCodePoint();
            if (selectedUnicodeCodePoint !== null) {
                var codePoint = selectedUnicodeCodePoint, string = String.fromCodePoint(codePoint), unicodeCharacter = string; ///
                controller.copyOrPasteUnicodeCharacter(unicodeCharacter);
            }
        });
        return _this;
    }
    _create_class(UnicodeCharacterDropdownDiv, [
        {
            key: "didMount",
            value: function didMount() {
                this.onCustomUpdate(this.updateCustomHandler);
                this.onCustomSelect(this.selectCustomHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offCustomUpdate(this.updateCustomHandler);
                this.offCustomSelect(this.selectCustomHandler);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var focusUnicodeCharacterDropdownInput = this.focusUnicodeCharacterDropdownInput.bind(this);
                return {
                    focusUnicodeCharacterDropdownInput: focusUnicodeCharacterDropdownInput
                };
            }
        }
    ]);
    return UnicodeCharacterDropdownDiv;
}(_dropdown.default);
_define_property(UnicodeCharacterDropdownDiv, "DropdownList", _unicodeCharacter.default);
_define_property(UnicodeCharacterDropdownDiv, "DropdownInput", _unicodeCharacter1.default);
_define_property(UnicodeCharacterDropdownDiv, "defaultProperties", {
    className: "unicode-character"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvZHJvcGJvd24vdW5pY29kZUNoYXJhY3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBEcm9wZG93bkRpdiBmcm9tIFwiLi4vLi4vZGl2L2Ryb3Bkb3duXCI7XG5pbXBvcnQgVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdCBmcm9tIFwiLi4vLi4vbGlzdC9kcm9wZG93bi91bmljb2RlQ2hhcmFjdGVyXCI7XG5pbXBvcnQgVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSW5wdXQgZnJvbSBcIi4uLy4uL2lucHV0L2Ryb3Bkb3duL3VuaWNvZGVDaGFyYWN0ZXJcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkRpdiBleHRlbmRzIERyb3Bkb3duRGl2IHtcbiAgdXBkYXRlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHVuaWNvZGVDaGFyYWN0ZXIgPSB0aGlzLmdldFVuaWNvZGVDaGFyYWN0ZXIoKSxcbiAgICAgICAgICB1cHBlckNhc2VVbmljb2RlQ2hhcmFjdGVyID0gdW5pY29kZUNoYXJhY3Rlci50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgIHVuaWNvZGVDaGFyYWN0ZXJGcmFnbWVudHMgPSB1cHBlckNhc2VVbmljb2RlQ2hhcmFjdGVyLnNwbGl0KC9cXHMrLyk7ICAvLy9cblxuICAgIGZpbHRlcih1bmljb2RlQ2hhcmFjdGVyRnJhZ21lbnRzLCAodW5pY29kZUNoYXJhY3RlckZyYWdtZW50KSA9PiB7XG4gICAgICBpZiAodW5pY29kZUNoYXJhY3RlckZyYWdtZW50ICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB1bmljb2RlQ2hhcmFjdGVyRnJhZ21lbnRzTGVuZ3RoID0gdW5pY29kZUNoYXJhY3RlckZyYWdtZW50cy5sZW5ndGg7XG5cbiAgICBpZiAodW5pY29kZUNoYXJhY3RlckZyYWdtZW50c0xlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZmlsdGVyVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdCh1bmljb2RlQ2hhcmFjdGVyRnJhZ21lbnRzKTtcblxuICAgIGNvbnN0IHVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkxpc3RFbXB0eSA9IHRoaXMuaXNVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25MaXN0RW1wdHkoKTtcblxuICAgIHVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkxpc3RFbXB0eSA/XG4gICAgICB0aGlzLmhpZGVVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25MaXN0KCkgOlxuICAgICAgICB0aGlzLnNob3dVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25MaXN0KCk7XG4gIH1cblxuICBzZWxlY3RDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRVbmljb2RlQ29kZVBvaW50ID0gdGhpcy5nZXRTZWxlY3RlZFVuaWNvZGVDb2RlUG9pbnQoKTtcblxuICAgIGlmIChzZWxlY3RlZFVuaWNvZGVDb2RlUG9pbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvZGVQb2ludCA9IHNlbGVjdGVkVW5pY29kZUNvZGVQb2ludCwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBTdHJpbmcuZnJvbUNvZGVQb2ludChjb2RlUG9pbnQpLFxuICAgICAgICAgICAgdW5pY29kZUNoYXJhY3RlciA9IHN0cmluZzsgIC8vL1xuXG4gICAgICBjb250cm9sbGVyLmNvcHlPclBhc3RlVW5pY29kZUNoYXJhY3Rlcih1bmljb2RlQ2hhcmFjdGVyKTtcbiAgICB9XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uQ3VzdG9tVXBkYXRlKHRoaXMudXBkYXRlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVNlbGVjdCh0aGlzLnNlbGVjdEN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZDdXN0b21VcGRhdGUodGhpcy51cGRhdGVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVNlbGVjdCh0aGlzLnNlbGVjdEN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBmb2N1c1VuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bklucHV0ID0gdGhpcy5mb2N1c1VuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bklucHV0LmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGZvY3VzVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSW5wdXRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBEcm9wZG93bkxpc3QgPSBVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25MaXN0O1xuXG4gIHN0YXRpYyBEcm9wZG93bklucHV0ID0gVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSW5wdXQ7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ1bmljb2RlLWNoYXJhY3RlclwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duRGl2IiwiZmlsdGVyIiwiYXJyYXlVdGlsaXRpZXMiLCJ1cGRhdGVDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidW5pY29kZUNoYXJhY3RlciIsImdldFVuaWNvZGVDaGFyYWN0ZXIiLCJ1cHBlckNhc2VVbmljb2RlQ2hhcmFjdGVyIiwidG9VcHBlckNhc2UiLCJ1bmljb2RlQ2hhcmFjdGVyRnJhZ21lbnRzIiwic3BsaXQiLCJ1bmljb2RlQ2hhcmFjdGVyRnJhZ21lbnQiLCJFTVBUWV9TVFJJTkciLCJ1bmljb2RlQ2hhcmFjdGVyRnJhZ21lbnRzTGVuZ3RoIiwibGVuZ3RoIiwiZmlsdGVyVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdCIsInVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkxpc3RFbXB0eSIsImlzVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdEVtcHR5IiwiaGlkZVVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkxpc3QiLCJzaG93VW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdCIsInNlbGVjdEN1c3RvbUhhbmRsZXIiLCJzZWxlY3RlZFVuaWNvZGVDb2RlUG9pbnQiLCJnZXRTZWxlY3RlZFVuaWNvZGVDb2RlUG9pbnQiLCJjb2RlUG9pbnQiLCJzdHJpbmciLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50IiwiY29udHJvbGxlciIsImNvcHlPclBhc3RlVW5pY29kZUNoYXJhY3RlciIsImRpZE1vdW50Iiwib25DdXN0b21VcGRhdGUiLCJvbkN1c3RvbVNlbGVjdCIsIndpbGxVbm1vdW50Iiwib2ZmQ3VzdG9tVXBkYXRlIiwib2ZmQ3VzdG9tU2VsZWN0IiwicGFyZW50Q29udGV4dCIsImZvY3VzVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSW5wdXQiLCJiaW5kIiwiRHJvcGRvd25EaXYiLCJEcm9wZG93bkxpc3QiLCJVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25MaXN0IiwiRHJvcGRvd25JbnB1dCIsIlVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bklucHV0IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O3lCQVZVOytEQUVQO3VFQUNpQjt3RUFDQzt5QkFFYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFTyxJQUFBLEFBQU1ELDRDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTs7Z0JBQU4sa0JBQU1BLHlDQUNuQkcsd0JBQUFBLHVCQUFzQixTQUFDQyxPQUFPQztZQUM1QixJQUFNQyxtQkFBbUIsTUFBS0MsbUJBQW1CLElBQzNDQyw0QkFBNEJGLGlCQUFpQkcsV0FBVyxJQUN4REMsNEJBQTRCRiwwQkFBMEJHLEtBQUssQ0FBQyxRQUFTLEdBQUc7WUFFOUVWLE9BQU9TLDJCQUEyQixTQUFDRTtnQkFDakMsSUFBSUEsNkJBQTZCQyx1QkFBWSxFQUFFO29CQUM3QyxPQUFPO2dCQUNUO1lBQ0Y7WUFFQSxJQUFNQyxrQ0FBa0NKLDBCQUEwQkssTUFBTTtZQUV4RSxJQUFJRCxvQ0FBb0MsR0FBRztnQkFDekM7WUFDRjtZQUVBLE1BQUtFLGtDQUFrQyxDQUFDTjtZQUV4QyxJQUFNTyxvQ0FBb0MsTUFBS0MsbUNBQW1DO1lBRWxGRCxvQ0FDRSxNQUFLRSxnQ0FBZ0MsS0FDbkMsTUFBS0MsZ0NBQWdDO1FBQzNDLElBRUFDLHdCQUFBQSx1QkFBc0IsU0FBQ2pCLE9BQU9DO1lBQzVCLElBQU1pQiwyQkFBMkIsTUFBS0MsMkJBQTJCO1lBRWpFLElBQUlELDZCQUE2QixNQUFNO2dCQUNyQyxJQUFNRSxZQUFZRiwwQkFDWkcsU0FBU0MsT0FBT0MsYUFBYSxDQUFDSCxZQUM5QmxCLG1CQUFtQm1CLFFBQVMsR0FBRztnQkFFckNHLFdBQVdDLDJCQUEyQixDQUFDdkI7WUFDekM7UUFDRjs7O2tCQXJDbUJOOztZQXVDbkI4QixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxjQUFjLENBQUMsSUFBSSxDQUFDNUIsbUJBQW1CO2dCQUM1QyxJQUFJLENBQUM2QixjQUFjLENBQUMsSUFBSSxDQUFDWCxtQkFBbUI7WUFDOUM7OztZQUVBWSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxlQUFlLENBQUMsSUFBSSxDQUFDL0IsbUJBQW1CO2dCQUM3QyxJQUFJLENBQUNnQyxlQUFlLENBQUMsSUFBSSxDQUFDZCxtQkFBbUI7WUFDL0M7OztZQUVBZSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMscUNBQXFDLElBQUksQ0FBQ0Esa0NBQWtDLENBQUNDLElBQUksQ0FBQyxJQUFJO2dCQUU1RixPQUFRO29CQUNORCxvQ0FBQUE7Z0JBQ0Y7WUFDRjs7O1dBdkRtQnJDO0VBQW9DdUMsaUJBQVc7QUF5RGxFLGlCQXpEbUJ2Qyw2QkF5RFp3QyxnQkFBZUMseUJBQTRCO0FBRWxELGlCQTNEbUJ6Qyw2QkEyRFowQyxpQkFBZ0JDLDBCQUE2QjtBQUVwRCxpQkE3RG1CM0MsNkJBNkRaNEMscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==