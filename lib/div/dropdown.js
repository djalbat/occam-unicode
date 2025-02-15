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
var _easy = require("easy");
var _necessary = require("necessary");
var _customEvent = /*#__PURE__*/ _interop_require_default(require("../mixins/customEvent"));
var _time = require("../utilities/time");
var _sizes = require("../sizes");
var _constants = require("../constants");
var _customEventTypes = require("../customEventTypes");
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  height: ",
        ";\n  display: grid;\n  overflow: visible;\n  grid-template-rows: ",
        " auto;\n  grid-template-columns: 1fr ;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ENTER_KEY_CODE = _necessary.keyCodes.ENTER_KEY_CODE, ESCAPE_KEY_CODE = _necessary.keyCodes.ESCAPE_KEY_CODE, ARROW_UP_KEY_CODE = _necessary.keyCodes.ARROW_UP_KEY_CODE, ARROW_DOWN_KEY_CODE = _necessary.keyCodes.ARROW_DOWN_KEY_CODE;
var DropdownDiv = /*#__PURE__*/ function(Element) {
    _inherits(DropdownDiv, Element);
    function DropdownDiv() {
        _class_call_check(this, DropdownDiv);
        var _this;
        _this = _call_super(this, DropdownDiv, arguments), _define_property(_this, "dropdownInputKeyDownHandler", function(event, element) {
            var keyCode = event.keyCode;
            switch(keyCode){
                case ENTER_KEY_CODE:
                    {
                        _this.enterKeyDown(event, element);
                        break;
                    }
                case ESCAPE_KEY_CODE:
                    {
                        _this.escapeKeyDown(event, element);
                        break;
                    }
                case ARROW_UP_KEY_CODE:
                    {
                        _this.arrowUpKeyDown(event, element);
                        break;
                    }
                case ARROW_DOWN_KEY_CODE:
                    {
                        _this.arrowDownKeyDown(event, element);
                        break;
                    }
            }
        }), _define_property(_this, "dropdownInputKeyUpHandler", function(event, element) {
            var keyCode = event.keyCode;
            switch(keyCode){
                case ENTER_KEY_CODE:
                case ESCAPE_KEY_CODE:
                case ARROW_UP_KEY_CODE:
                case ARROW_DOWN_KEY_CODE:
                    {
                        event.preventDefault();
                        break;
                    }
                default:
                    {
                        _this.defaultKeyUp(event, element);
                        break;
                    }
            }
        }), _define_property(_this, "dropdownInputBlurHandler", function(event, element) {
            var delay = _constants.BLUR_DELAY;
            (0, _time.defer)(function() {
                _this.hideDropdownList();
            }, delay);
        }), _define_property(_this, "dropdownListClickHandler", function(event, element) {
            _this.hideDropdownList();
            var selectedDropdownItem = _this.getSelectedDropdownItem();
            if (selectedDropdownItem === null) {
                return;
            }
            var customEventType = _customEventTypes.SELECT_CUSTOM_EVENT_TYPE;
            _this.callCustomHandlers(customEventType, event, element);
        }), _define_property(_this, "dropdownInputClickHandler", function(event, element) {
            var dropdownListHidden = _this.isDropdownListHidden();
            if (dropdownListHidden) {
                var dropdownListEmpty = _this.isDropdownListEmpty();
                if (!dropdownListEmpty) {
                    _this.showDropdownList();
                }
            } else {
                _this.hideDropdownList();
            }
        });
        return _this;
    }
    _create_class(DropdownDiv, [
        {
            key: "enterKeyDown",
            value: function enterKeyDown(event, element) {
                var dropdownListHidden = this.isDropdownListHidden();
                if (dropdownListHidden) {
                    var customEventType = _customEventTypes.CHANGE_CUSTOM_EVENT_TYPE;
                    this.callCustomHandlers(customEventType, event, element);
                    return;
                }
                this.hideDropdownList();
                var selectedDropdownItem = this.getSelectedDropdownItem();
                if (selectedDropdownItem === null) {
                    return;
                }
                var customEventType1 = _customEventTypes.SELECT_CUSTOM_EVENT_TYPE;
                this.callCustomHandlers(customEventType1, event, element);
            }
        },
        {
            key: "escapeKeyDown",
            value: function escapeKeyDown(event, element) {
                this.hideDropdownList();
            }
        },
        {
            key: "arrowUpKeyDown",
            value: function arrowUpKeyDown(event, element) {
                var dropdownListEmpty = this.isDropdownListEmpty();
                if (dropdownListEmpty) {
                    return;
                }
                var dropdownListHidden = this.isDropdownListHidden();
                if (dropdownListHidden) {
                    this.showDropdownList();
                }
                this.selectPreviousDisplayedDropdownItem();
            }
        },
        {
            key: "arrowDownKeyDown",
            value: function arrowDownKeyDown(event, element) {
                var dropdownListEmpty = this.isDropdownListEmpty();
                if (dropdownListEmpty) {
                    return;
                }
                var dropdownListHidden = this.isDropdownListHidden();
                if (dropdownListHidden) {
                    this.showDropdownList();
                }
                this.selectNextDisplayedDropdownItem();
            }
        },
        {
            key: "defaultKeyUp",
            value: function defaultKeyUp(event, element) {
                var customEventType = _customEventTypes.UPDATE_CUSTOM_EVENT_TYPE;
                this.callCustomHandlers(customEventType, event, element);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _this_constructor = this.constructor, DropdownList = _this_constructor.DropdownList, DropdownInput = _this_constructor.DropdownInput;
                return [
                    /*#__PURE__*/ React.createElement(DropdownInput, {
                        onClick: this.dropdownInputClickHandler,
                        onBlur: this.dropdownInputBlurHandler,
                        onKeyUp: this.dropdownInputKeyUpHandler,
                        onKeyDown: this.dropdownInputKeyDownHandler
                    }),
                    /*#__PURE__*/ React.createElement(DropdownList, {
                        onClick: this.dropdownListClickHandler
                    })
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
            }
        }
    ]);
    return DropdownDiv;
}(_wrap_native_super(_easy.Element));
_define_property(DropdownDiv, "tagName", "div");
_define_property(DropdownDiv, "defaultProperties", {
    className: "dropdown"
});
Object.assign(DropdownDiv.prototype, _customEvent.default);
var _default = (0, _easywithstyle.default)(DropdownDiv)(_templateObject(), _sizes.largeSize, _sizes.largeSize);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvZHJvcGRvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBjdXN0b21FdmVudE1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2N1c3RvbUV2ZW50XCI7XG5cbmltcG9ydCB7IGRlZmVyIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90aW1lXCI7XG5pbXBvcnQgeyBsYXJnZVNpemUgfSBmcm9tIFwiLi4vc2l6ZXNcIjtcbmltcG9ydCB7IEJMVVJfREVMQVkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBVUERBVEVfQ1VTVE9NX0VWRU5UX1RZUEUsIENIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSwgU0VMRUNUX0NVU1RPTV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2N1c3RvbUV2ZW50VHlwZXNcIjtcblxuY29uc3QgeyBFTlRFUl9LRVlfQ09ERSxcbiAgICAgICAgRVNDQVBFX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19VUF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfRE9XTl9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmNsYXNzIERyb3Bkb3duRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGRyb3Bkb3duSW5wdXRLZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5lbnRlcktleURvd24oZXZlbnQsIGVsZW1lbnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEVTQ0FQRV9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLmVzY2FwZUtleURvd24oZXZlbnQsIGVsZW1lbnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX1VQX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuYXJyb3dVcEtleURvd24oZXZlbnQsIGVsZW1lbnQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX0RPV05fS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5hcnJvd0Rvd25LZXlEb3duKGV2ZW50LCBlbGVtZW50KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcm9wZG93bklucHV0S2V5VXBIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBFTlRFUl9LRVlfQ09ERTpcbiAgICAgIGNhc2UgRVNDQVBFX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19VUF9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfRE9XTl9LRVlfQ09ERToge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRoaXMuZGVmYXVsdEtleVVwKGV2ZW50LCBlbGVtZW50KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcm9wZG93bklucHV0Qmx1ckhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBkZWxheSA9IEJMVVJfREVMQVk7XG5cbiAgICBkZWZlcigoKSA9PiB7XG4gICAgICB0aGlzLmhpZGVEcm9wZG93bkxpc3QoKTtcbiAgICB9LCBkZWxheSk7XG4gIH1cblxuICBkcm9wZG93bkxpc3RDbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmhpZGVEcm9wZG93bkxpc3QoKTtcblxuICAgIGNvbnN0IHNlbGVjdGVkRHJvcGRvd25JdGVtID0gdGhpcy5nZXRTZWxlY3RlZERyb3Bkb3duSXRlbSgpO1xuXG4gICAgaWYgKHNlbGVjdGVkRHJvcGRvd25JdGVtID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU0VMRUNUX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG4gIH1cblxuICBkcm9wZG93bklucHV0Q2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25MaXN0SGlkZGVuID0gdGhpcy5pc0Ryb3Bkb3duTGlzdEhpZGRlbigpO1xuXG4gICAgaWYgKGRyb3Bkb3duTGlzdEhpZGRlbikge1xuICAgICAgY29uc3QgZHJvcGRvd25MaXN0RW1wdHkgPSB0aGlzLmlzRHJvcGRvd25MaXN0RW1wdHkoKTtcblxuICAgICAgaWYgKCFkcm9wZG93bkxpc3RFbXB0eSkge1xuICAgICAgICB0aGlzLnNob3dEcm9wZG93bkxpc3QoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlRHJvcGRvd25MaXN0KCk7XG4gICAgfVxuICB9XG5cbiAgZW50ZXJLZXlEb3duKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZHJvcGRvd25MaXN0SGlkZGVuID0gdGhpcy5pc0Ryb3Bkb3duTGlzdEhpZGRlbigpO1xuXG4gICAgaWYgKGRyb3Bkb3duTGlzdEhpZGRlbikge1xuICAgICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaGlkZURyb3Bkb3duTGlzdCgpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWREcm9wZG93bkl0ZW0gPSB0aGlzLmdldFNlbGVjdGVkRHJvcGRvd25JdGVtKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWREcm9wZG93bkl0ZW0gPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTRUxFQ1RfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIGVzY2FwZUtleURvd24oZXZlbnQsIGVsZW1lbnQpIHtcbiAgICB0aGlzLmhpZGVEcm9wZG93bkxpc3QoKTtcbiAgfVxuXG4gIGFycm93VXBLZXlEb3duKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZHJvcGRvd25MaXN0RW1wdHkgPSB0aGlzLmlzRHJvcGRvd25MaXN0RW1wdHkoKTtcblxuICAgIGlmIChkcm9wZG93bkxpc3RFbXB0eSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyb3Bkb3duTGlzdEhpZGRlbiA9IHRoaXMuaXNEcm9wZG93bkxpc3RIaWRkZW4oKTtcblxuICAgIGlmIChkcm9wZG93bkxpc3RIaWRkZW4pIHtcbiAgICAgIHRoaXMuc2hvd0Ryb3Bkb3duTGlzdCgpO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0UHJldmlvdXNEaXNwbGF5ZWREcm9wZG93bkl0ZW0oKTtcbiAgfVxuXG4gIGFycm93RG93bktleURvd24oZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBkcm9wZG93bkxpc3RFbXB0eSA9IHRoaXMuaXNEcm9wZG93bkxpc3RFbXB0eSgpO1xuXG4gICAgaWYgKGRyb3Bkb3duTGlzdEVtcHR5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJvcGRvd25MaXN0SGlkZGVuID0gdGhpcy5pc0Ryb3Bkb3duTGlzdEhpZGRlbigpO1xuXG4gICAgaWYgKGRyb3Bkb3duTGlzdEhpZGRlbikge1xuICAgICAgdGhpcy5zaG93RHJvcGRvd25MaXN0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3ROZXh0RGlzcGxheWVkRHJvcGRvd25JdGVtKCk7XG4gIH1cblxuICBkZWZhdWx0S2V5VXAoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBVUERBVEVfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBEcm9wZG93bkxpc3QsIERyb3Bkb3duSW5wdXQgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPERyb3Bkb3duSW5wdXQgb25DbGljaz17dGhpcy5kcm9wZG93bklucHV0Q2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmRyb3Bkb3duSW5wdXRCbHVySGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9e3RoaXMuZHJvcGRvd25JbnB1dEtleVVwSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5kcm9wZG93bklucHV0S2V5RG93bkhhbmRsZXJ9XG4gICAgICAvPixcbiAgICAgIDxEcm9wZG93bkxpc3Qgb25DbGljaz17dGhpcy5kcm9wZG93bkxpc3RDbGlja0hhbmRsZXJ9IC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkcm9wZG93blwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oRHJvcGRvd25EaXYucHJvdG90eXBlLCBjdXN0b21FdmVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEcm9wZG93bkRpdilgXG5cbiAgaGVpZ2h0OiAke2xhcmdlU2l6ZX07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6ICR7bGFyZ2VTaXplfSBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJFTlRFUl9LRVlfQ09ERSIsImtleUNvZGVzIiwiRVNDQVBFX0tFWV9DT0RFIiwiQVJST1dfVVBfS0VZX0NPREUiLCJBUlJPV19ET1dOX0tFWV9DT0RFIiwiRHJvcGRvd25EaXYiLCJkcm9wZG93bklucHV0S2V5RG93bkhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJrZXlDb2RlIiwiZW50ZXJLZXlEb3duIiwiZXNjYXBlS2V5RG93biIsImFycm93VXBLZXlEb3duIiwiYXJyb3dEb3duS2V5RG93biIsImRyb3Bkb3duSW5wdXRLZXlVcEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImRlZmF1bHRLZXlVcCIsImRyb3Bkb3duSW5wdXRCbHVySGFuZGxlciIsImRlbGF5IiwiQkxVUl9ERUxBWSIsImRlZmVyIiwiaGlkZURyb3Bkb3duTGlzdCIsImRyb3Bkb3duTGlzdENsaWNrSGFuZGxlciIsInNlbGVjdGVkRHJvcGRvd25JdGVtIiwiZ2V0U2VsZWN0ZWREcm9wZG93bkl0ZW0iLCJjdXN0b21FdmVudFR5cGUiLCJTRUxFQ1RfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJkcm9wZG93bklucHV0Q2xpY2tIYW5kbGVyIiwiZHJvcGRvd25MaXN0SGlkZGVuIiwiaXNEcm9wZG93bkxpc3RIaWRkZW4iLCJkcm9wZG93bkxpc3RFbXB0eSIsImlzRHJvcGRvd25MaXN0RW1wdHkiLCJzaG93RHJvcGRvd25MaXN0IiwiQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFIiwic2VsZWN0UHJldmlvdXNEaXNwbGF5ZWREcm9wZG93bkl0ZW0iLCJzZWxlY3ROZXh0RGlzcGxheWVkRHJvcGRvd25JdGVtIiwiVVBEQVRFX0NVU1RPTV9FVkVOVF9UWVBFIiwiY2hpbGRFbGVtZW50cyIsImNvbnN0cnVjdG9yIiwiRHJvcGRvd25MaXN0IiwiRHJvcGRvd25JbnB1dCIsIm9uQ2xpY2siLCJvbkJsdXIiLCJvbktleVVwIiwib25LZXlEb3duIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiY3VzdG9tRXZlbnRNaXhpbnMiLCJ3aXRoU3R5bGUiLCJsYXJnZVNpemUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlNQTs7O2VBQUE7OztvRUF2TXNCO29CQUVFO3lCQUNDO2tFQUVLO29CQUVSO3FCQUNJO3lCQUNDO2dDQUNrRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdGLElBQVFBLGlCQUd3QkMsbUJBQVEsQ0FIaENELGdCQUNBRSxrQkFFd0JELG1CQUFRLENBRmhDQyxpQkFDQUMsb0JBQ3dCRixtQkFBUSxDQURoQ0UsbUJBQ0FDLHNCQUF3QkgsbUJBQVEsQ0FBaENHO0FBRVIsSUFBQSxBQUFNQyw0QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSx5QkFDSkMsd0JBQUFB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