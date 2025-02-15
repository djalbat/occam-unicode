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
var _occamstyles = require("occam-styles");
var _styles = require("../styles");
var _constants = require("../constants");
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
        "\n\n  width: 100%;\n  height: fit-content;\n  border: 1px solid ",
        ";  \n  display: grid;\n  z-index: 2;\n  overflow: hidden;\n  border-top: none;\n  grid-auto-rows: ",
        ";\n  background-color: ",
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var commonBorderColour = _occamstyles.commonScheme.commonBorderColour, commonInputBackgroundColour = _occamstyles.commonScheme.commonInputBackgroundColour;
var DropdownList = /*#__PURE__*/ function(Element) {
    _inherits(DropdownList, Element);
    function DropdownList() {
        _class_call_check(this, DropdownList);
        var _this;
        _this = _call_super(this, DropdownList, arguments), _define_property(_this, "dropdownItemMouseOverHandler", function(event, element) {
            var selectedDropdownItem;
            var dropdownItem = element; ///
            selectedDropdownItem = _this.getSelectedDropdownItem();
            if (selectedDropdownItem !== null) {
                selectedDropdownItem.deselect();
            }
            selectedDropdownItem = dropdownItem; ///
            selectedDropdownItem.select();
        });
        return _this;
    }
    _create_class(DropdownList, [
        {
            key: "scrollToIndex",
            value: function scrollToIndex(index) {
                var innerHeight = this.getInnerHeight(), offset = (innerHeight / _constants.DROPDOWN_ITEM_HEIGHT - 1) / 2, scrollTop = (index - offset) * _constants.DROPDOWN_ITEM_HEIGHT, scrollLeft = 0;
                this.scrollTo(scrollTop, scrollLeft);
            }
        },
        {
            key: "getDropdownItems",
            value: function getDropdownItems() {
                var childElements = this.getChildElements(), dropdownItems = childElements; ///
                return dropdownItems;
            }
        },
        {
            key: "getSelectedDropdownItem",
            value: function getSelectedDropdownItem() {
                var dropdownItems = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                var selectedDropdownItem = null;
                if (dropdownItems === null) {
                    dropdownItems = this.getDropdownItems();
                }
                dropdownItems.some(function(dropdownItem) {
                    var dropdownItemSelected = dropdownItem.isSelected();
                    if (dropdownItemSelected) {
                        selectedDropdownItem = dropdownItem; ///
                        return true;
                    }
                });
                return selectedDropdownItem;
            }
        },
        {
            key: "getDisplayedDropdownItems",
            value: function getDisplayedDropdownItems() {
                var dropdownItems = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                if (dropdownItems === null) {
                    dropdownItems = this.getDropdownItems();
                }
                var displayedDropdownItems = dropdownItems.filter(function(dropdownItem) {
                    var dropdownItemDisplayed = dropdownItem.isDisplayed();
                    if (dropdownItemDisplayed) {
                        return true;
                    }
                });
                return displayedDropdownItems;
            }
        },
        {
            key: "selectNextDisplayedDropdownItem",
            value: function selectNextDisplayedDropdownItem() {
                var index, selectedDropdownItem;
                selectedDropdownItem = this.getSelectedDropdownItem();
                var displayedDropdownItems = this.getDisplayedDropdownItems(), displayedDropdownItemsLength = displayedDropdownItems.length, firstIndex = 0, lastIndex = displayedDropdownItemsLength - 1;
                if (selectedDropdownItem !== null) {
                    selectedDropdownItem.deselect();
                }
                if (selectedDropdownItem === null) {
                    index = firstIndex; ///
                } else {
                    index = displayedDropdownItems.indexOf(selectedDropdownItem);
                    index = index < lastIndex ? index + 1 : firstIndex;
                }
                selectedDropdownItem = displayedDropdownItems[index] || null; ///
                if (selectedDropdownItem !== null) {
                    selectedDropdownItem.select();
                    this.scrollToIndex(index);
                }
            }
        },
        {
            key: "selectPreviousDisplayedDropdownItem",
            value: function selectPreviousDisplayedDropdownItem() {
                var index, selectedDropdownItem;
                selectedDropdownItem = this.getSelectedDropdownItem();
                var displayedDropdownItems = this.getDisplayedDropdownItems(), displayedDropdownItemsLength = displayedDropdownItems.length, firstIndex = 0, lastIndex = displayedDropdownItemsLength - 1;
                if (selectedDropdownItem !== null) {
                    selectedDropdownItem.deselect();
                }
                if (selectedDropdownItem === null) {
                    index = lastIndex; ///
                } else {
                    index = displayedDropdownItems.indexOf(selectedDropdownItem);
                    index = index > firstIndex ? index - 1 : lastIndex;
                }
                selectedDropdownItem = displayedDropdownItems[index] || null; ///
                if (selectedDropdownItem !== null) {
                    selectedDropdownItem.select();
                    this.scrollToIndex(index);
                }
            }
        },
        {
            key: "show",
            value: function show() {
                var display = _constants.GRID;
                this.display(display);
            }
        },
        {
            key: "isEmpty",
            value: function isEmpty() {
                var displayedDropdownItems = this.getDisplayedDropdownItems(), displayedDropdownItemsLength = displayedDropdownItems.length, empty = displayedDropdownItemsLength === 0;
                return empty;
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.hide();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showDropdownList = this.show.bind(this), hideDropdownList = this.hide.bind(this), isDropdownListEmpty = this.isEmpty.bind(this), isDropdownListHidden = this.isHidden.bind(this), getSelectedDropdownItem = this.getSelectedDropdownItem.bind(this), selectNextDisplayedDropdownItem = this.selectNextDisplayedDropdownItem.bind(this), selectPreviousDisplayedDropdownItem = this.selectPreviousDisplayedDropdownItem.bind(this);
                return {
                    showDropdownList: showDropdownList,
                    hideDropdownList: hideDropdownList,
                    isDropdownListEmpty: isDropdownListEmpty,
                    isDropdownListHidden: isDropdownListHidden,
                    getSelectedDropdownItem: getSelectedDropdownItem,
                    selectNextDisplayedDropdownItem: selectNextDisplayedDropdownItem,
                    selectPreviousDisplayedDropdownItem: selectPreviousDisplayedDropdownItem
                };
            }
        }
    ]);
    return DropdownList;
}(_wrap_native_super(_easy.Element));
_define_property(DropdownList, "tagName", "ul");
_define_property(DropdownList, "defaultProperties", {
    className: "dropdown"
});
var _default = (0, _easywithstyle.default)(DropdownList)(_templateObject(), commonBorderColour, _styles.dropdownItemHeight, commonInputBackgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0L2Ryb3Bkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGNvbW1vblNjaGVtZSB9IGZyb20gXCJvY2NhbS1zdHlsZXNcIjtcblxuaW1wb3J0IHsgZHJvcGRvd25JdGVtSGVpZ2h0IH0gZnJvbSBcIi4uL3N0eWxlc1wiO1xuaW1wb3J0IHsgR1JJRCwgRFJPUERPV05fSVRFTV9IRUlHSFQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgY29tbW9uQm9yZGVyQ29sb3VyLCBjb21tb25JbnB1dEJhY2tncm91bmRDb2xvdXIgfSA9IGNvbW1vblNjaGVtZTtcblxuY2xhc3MgRHJvcGRvd25MaXN0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGRyb3Bkb3duSXRlbU1vdXNlT3ZlckhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBsZXQgc2VsZWN0ZWREcm9wZG93bkl0ZW07XG5cbiAgICBjb25zdCBkcm9wZG93bkl0ZW0gPSBlbGVtZW50OyAgLy8vXG5cbiAgICBzZWxlY3RlZERyb3Bkb3duSXRlbSA9IHRoaXMuZ2V0U2VsZWN0ZWREcm9wZG93bkl0ZW0oKTtcblxuICAgIGlmIChzZWxlY3RlZERyb3Bkb3duSXRlbSAhPT0gbnVsbCkge1xuICAgICAgc2VsZWN0ZWREcm9wZG93bkl0ZW0uZGVzZWxlY3QoKTtcbiAgICB9XG5cbiAgICBzZWxlY3RlZERyb3Bkb3duSXRlbSA9IGRyb3Bkb3duSXRlbTsgIC8vL1xuXG4gICAgc2VsZWN0ZWREcm9wZG93bkl0ZW0uc2VsZWN0KCk7XG4gIH1cblxuICBzY3JvbGxUb0luZGV4KGluZGV4KSB7XG4gICAgY29uc3QgaW5uZXJIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KCksXG4gICAgICAgICAgb2Zmc2V0ID0gKChpbm5lckhlaWdodCAvIERST1BET1dOX0lURU1fSEVJR0hUKSAtIDEpIC8gMixcbiAgICAgICAgICBzY3JvbGxUb3AgPSAoaW5kZXggLSBvZmZzZXQpICogRFJPUERPV05fSVRFTV9IRUlHSFQsXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IDA7XG5cbiAgICB0aGlzLnNjcm9sbFRvKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gIH1cblxuICBnZXREcm9wZG93bkl0ZW1zKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBkcm9wZG93bkl0ZW1zID0gY2hpbGRFbGVtZW50czsgIC8vL1xuXG4gICAgcmV0dXJuIGRyb3Bkb3duSXRlbXM7XG4gIH1cblxuICBnZXRTZWxlY3RlZERyb3Bkb3duSXRlbShkcm9wZG93bkl0ZW1zID0gbnVsbCkge1xuICAgIGxldCBzZWxlY3RlZERyb3Bkb3duSXRlbSA9IG51bGw7XG5cbiAgICBpZiAoZHJvcGRvd25JdGVtcyA9PT0gbnVsbCkge1xuICAgICAgZHJvcGRvd25JdGVtcyA9IHRoaXMuZ2V0RHJvcGRvd25JdGVtcygpO1xuICAgIH1cblxuICAgIGRyb3Bkb3duSXRlbXMuc29tZSgoZHJvcGRvd25JdGVtKSA9PiB7XG4gICAgICBjb25zdCBkcm9wZG93bkl0ZW1TZWxlY3RlZCA9IGRyb3Bkb3duSXRlbS5pc1NlbGVjdGVkKCk7XG5cbiAgICAgIGlmIChkcm9wZG93bkl0ZW1TZWxlY3RlZCkge1xuICAgICAgICBzZWxlY3RlZERyb3Bkb3duSXRlbSA9IGRyb3Bkb3duSXRlbTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICByZXR1cm4gc2VsZWN0ZWREcm9wZG93bkl0ZW07XG4gIH1cblxuICBnZXREaXNwbGF5ZWREcm9wZG93bkl0ZW1zKGRyb3Bkb3duSXRlbXMgPSBudWxsKSB7XG4gICAgaWYgKGRyb3Bkb3duSXRlbXMgPT09IG51bGwpIHtcbiAgICAgIGRyb3Bkb3duSXRlbXMgPSB0aGlzLmdldERyb3Bkb3duSXRlbXMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5ZWREcm9wZG93bkl0ZW1zID0gZHJvcGRvd25JdGVtcy5maWx0ZXIoKGRyb3Bkb3duSXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZHJvcGRvd25JdGVtRGlzcGxheWVkID0gZHJvcGRvd25JdGVtLmlzRGlzcGxheWVkKCk7XG5cbiAgICAgICAgICAgIGlmIChkcm9wZG93bkl0ZW1EaXNwbGF5ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gZGlzcGxheWVkRHJvcGRvd25JdGVtcztcbiAgfVxuXG4gIHNlbGVjdE5leHREaXNwbGF5ZWREcm9wZG93bkl0ZW0oKSB7XG4gICAgbGV0IGluZGV4LFxuICAgICAgICBzZWxlY3RlZERyb3Bkb3duSXRlbTtcblxuICAgIHNlbGVjdGVkRHJvcGRvd25JdGVtID0gdGhpcy5nZXRTZWxlY3RlZERyb3Bkb3duSXRlbSgpO1xuXG4gICAgY29uc3QgZGlzcGxheWVkRHJvcGRvd25JdGVtcyA9IHRoaXMuZ2V0RGlzcGxheWVkRHJvcGRvd25JdGVtcygpLFxuICAgICAgICAgIGRpc3BsYXllZERyb3Bkb3duSXRlbXNMZW5ndGggPSBkaXNwbGF5ZWREcm9wZG93bkl0ZW1zLmxlbmd0aCxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcbiAgICAgICAgICBsYXN0SW5kZXggPSBkaXNwbGF5ZWREcm9wZG93bkl0ZW1zTGVuZ3RoIC0gMTtcblxuICAgIGlmIChzZWxlY3RlZERyb3Bkb3duSXRlbSAhPT0gbnVsbCkge1xuICAgICAgc2VsZWN0ZWREcm9wZG93bkl0ZW0uZGVzZWxlY3QoKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0ZWREcm9wZG93bkl0ZW0gPT09IG51bGwpIHtcbiAgICAgIGluZGV4ID0gZmlyc3RJbmRleDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGV4ID0gZGlzcGxheWVkRHJvcGRvd25JdGVtcy5pbmRleE9mKHNlbGVjdGVkRHJvcGRvd25JdGVtKTtcblxuICAgICAgaW5kZXggPSAoaW5kZXggPCBsYXN0SW5kZXgpID9cbiAgICAgICAgICAgICAgICBpbmRleCArIDEgOlxuICAgICAgICAgICAgICAgICAgZmlyc3RJbmRleDtcbiAgICB9XG5cbiAgICBzZWxlY3RlZERyb3Bkb3duSXRlbSA9IGRpc3BsYXllZERyb3Bkb3duSXRlbXNbaW5kZXhdIHx8IG51bGw7IC8vL1xuXG4gICAgaWYgKHNlbGVjdGVkRHJvcGRvd25JdGVtICE9PSBudWxsKSB7XG4gICAgICBzZWxlY3RlZERyb3Bkb3duSXRlbS5zZWxlY3QoKTtcblxuICAgICAgdGhpcy5zY3JvbGxUb0luZGV4KGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RQcmV2aW91c0Rpc3BsYXllZERyb3Bkb3duSXRlbSgpIHtcbiAgICBsZXQgaW5kZXgsXG4gICAgICAgIHNlbGVjdGVkRHJvcGRvd25JdGVtO1xuXG4gICAgc2VsZWN0ZWREcm9wZG93bkl0ZW0gPSB0aGlzLmdldFNlbGVjdGVkRHJvcGRvd25JdGVtKCk7XG5cbiAgICBjb25zdCBkaXNwbGF5ZWREcm9wZG93bkl0ZW1zID0gdGhpcy5nZXREaXNwbGF5ZWREcm9wZG93bkl0ZW1zKCksXG4gICAgICAgICAgZGlzcGxheWVkRHJvcGRvd25JdGVtc0xlbmd0aCA9IGRpc3BsYXllZERyb3Bkb3duSXRlbXMubGVuZ3RoLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSAwLFxuICAgICAgICAgIGxhc3RJbmRleCA9IGRpc3BsYXllZERyb3Bkb3duSXRlbXNMZW5ndGggLSAxO1xuXG4gICAgaWYgKHNlbGVjdGVkRHJvcGRvd25JdGVtICE9PSBudWxsKSB7XG4gICAgICBzZWxlY3RlZERyb3Bkb3duSXRlbS5kZXNlbGVjdCgpO1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RlZERyb3Bkb3duSXRlbSA9PT0gbnVsbCkge1xuICAgICAgaW5kZXggPSBsYXN0SW5kZXg7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmRleCA9IGRpc3BsYXllZERyb3Bkb3duSXRlbXMuaW5kZXhPZihzZWxlY3RlZERyb3Bkb3duSXRlbSk7XG5cbiAgICAgIGluZGV4ID0gKGluZGV4ID4gZmlyc3RJbmRleCkgP1xuICAgICAgICAgICAgICAgIGluZGV4IC0gMSA6XG4gICAgICAgICAgICAgICAgICBsYXN0SW5kZXg7XG4gICAgfVxuXG4gICAgc2VsZWN0ZWREcm9wZG93bkl0ZW0gPSBkaXNwbGF5ZWREcm9wZG93bkl0ZW1zW2luZGV4XSB8fCBudWxsOyAvLy9cblxuICAgIGlmIChzZWxlY3RlZERyb3Bkb3duSXRlbSAhPT0gbnVsbCkge1xuICAgICAgc2VsZWN0ZWREcm9wZG93bkl0ZW0uc2VsZWN0KCk7XG5cbiAgICAgIHRoaXMuc2Nyb2xsVG9JbmRleChpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gR1JJRDtcblxuICAgIHRoaXMuZGlzcGxheShkaXNwbGF5KTtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkRHJvcGRvd25JdGVtcyA9IHRoaXMuZ2V0RGlzcGxheWVkRHJvcGRvd25JdGVtcygpLFxuICAgICAgICAgIGRpc3BsYXllZERyb3Bkb3duSXRlbXNMZW5ndGggPSBkaXNwbGF5ZWREcm9wZG93bkl0ZW1zLmxlbmd0aCxcbiAgICAgICAgICBlbXB0eSA9IChkaXNwbGF5ZWREcm9wZG93bkl0ZW1zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dEcm9wZG93bkxpc3QgPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGhpZGVEcm9wZG93bkxpc3QgPSB0aGlzLmhpZGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGlzRHJvcGRvd25MaXN0RW1wdHkgPSB0aGlzLmlzRW1wdHkuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGlzRHJvcGRvd25MaXN0SGlkZGVuID0gdGhpcy5pc0hpZGRlbi5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBnZXRTZWxlY3RlZERyb3Bkb3duSXRlbSA9IHRoaXMuZ2V0U2VsZWN0ZWREcm9wZG93bkl0ZW0uYmluZCh0aGlzKSxcbiAgICAgICAgICBzZWxlY3ROZXh0RGlzcGxheWVkRHJvcGRvd25JdGVtID0gdGhpcy5zZWxlY3ROZXh0RGlzcGxheWVkRHJvcGRvd25JdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgc2VsZWN0UHJldmlvdXNEaXNwbGF5ZWREcm9wZG93bkl0ZW0gPSB0aGlzLnNlbGVjdFByZXZpb3VzRGlzcGxheWVkRHJvcGRvd25JdGVtLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dEcm9wZG93bkxpc3QsXG4gICAgICBoaWRlRHJvcGRvd25MaXN0LFxuICAgICAgaXNEcm9wZG93bkxpc3RFbXB0eSxcbiAgICAgIGlzRHJvcGRvd25MaXN0SGlkZGVuLFxuICAgICAgZ2V0U2VsZWN0ZWREcm9wZG93bkl0ZW0sXG4gICAgICBzZWxlY3ROZXh0RGlzcGxheWVkRHJvcGRvd25JdGVtLFxuICAgICAgc2VsZWN0UHJldmlvdXNEaXNwbGF5ZWREcm9wZG93bkl0ZW1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJ1bFwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZHJvcGRvd25cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRHJvcGRvd25MaXN0KWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtjb21tb25Cb3JkZXJDb2xvdXJ9OyAgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHotaW5kZXg6IDI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGdyaWQtYXV0by1yb3dzOiAke2Ryb3Bkb3duSXRlbUhlaWdodH07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29tbW9uSW5wdXRCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbImNvbW1vbkJvcmRlckNvbG91ciIsImNvbW1vblNjaGVtZSIsImNvbW1vbklucHV0QmFja2dyb3VuZENvbG91ciIsIkRyb3Bkb3duTGlzdCIsImRyb3Bkb3duSXRlbU1vdXNlT3ZlckhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJzZWxlY3RlZERyb3Bkb3duSXRlbSIsImRyb3Bkb3duSXRlbSIsImdldFNlbGVjdGVkRHJvcGRvd25JdGVtIiwiZGVzZWxlY3QiLCJzZWxlY3QiLCJzY3JvbGxUb0luZGV4IiwiaW5kZXgiLCJpbm5lckhlaWdodCIsImdldElubmVySGVpZ2h0Iiwib2Zmc2V0IiwiRFJPUERPV05fSVRFTV9IRUlHSFQiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG8iLCJnZXREcm9wZG93bkl0ZW1zIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJkcm9wZG93bkl0ZW1zIiwic29tZSIsImRyb3Bkb3duSXRlbVNlbGVjdGVkIiwiaXNTZWxlY3RlZCIsImdldERpc3BsYXllZERyb3Bkb3duSXRlbXMiLCJkaXNwbGF5ZWREcm9wZG93bkl0ZW1zIiwiZmlsdGVyIiwiZHJvcGRvd25JdGVtRGlzcGxheWVkIiwiaXNEaXNwbGF5ZWQiLCJzZWxlY3ROZXh0RGlzcGxheWVkRHJvcGRvd25JdGVtIiwiZGlzcGxheWVkRHJvcGRvd25JdGVtc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0SW5kZXgiLCJsYXN0SW5kZXgiLCJpbmRleE9mIiwic2VsZWN0UHJldmlvdXNEaXNwbGF5ZWREcm9wZG93bkl0ZW0iLCJzaG93IiwiZGlzcGxheSIsIkdSSUQiLCJpc0VtcHR5IiwiZW1wdHkiLCJkaWRNb3VudCIsImhpZGUiLCJ3aWxsVW5tb3VudCIsInBhcmVudENvbnRleHQiLCJzaG93RHJvcGRvd25MaXN0IiwiYmluZCIsImhpZGVEcm9wZG93bkxpc3QiLCJpc0Ryb3Bkb3duTGlzdEVtcHR5IiwiaXNEcm9wZG93bkxpc3RIaWRkZW4iLCJpc0hpZGRlbiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJkcm9wZG93bkl0ZW1IZWlnaHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVNQTs7O2VBQUE7OztvRUFyTXNCO29CQUVFOzJCQUNLO3NCQUVNO3lCQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLElBQVFBLHFCQUFvREMseUJBQVksQ0FBaEVELG9CQUFvQkUsOEJBQWdDRCx5QkFBWSxDQUE1Q0M7QUFFNUIsSUFBQSxBQUFNQyw2QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSwwQkFDSkMsd0JBQUFBLGdDQUErQixTQUFDQyxPQUFPQztZQUNyQyxJQUFJQztZQUVKLElBQU1DLGVBQWVGLFNBQVUsR0FBRztZQUVsQ0MsdUJBQXVCLE1BQUtFLHVCQUF1QjtZQUVuRCxJQUFJRix5QkFBeUIsTUFBTTtnQkFDakNBLHFCQUFxQkcsUUFBUTtZQUMvQjtZQUVBSCx1QkFBdUJDLGNBQWUsR0FBRztZQUV6Q0QscUJBQXFCSSxNQUFNO1FBQzdCOzs7a0JBZklSOztZQWlC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