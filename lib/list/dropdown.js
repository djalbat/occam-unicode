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
        "\n\n  height: fit-content;\n  border: 1px solid ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0L2Ryb3Bkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGNvbW1vblNjaGVtZSB9IGZyb20gXCJvY2NhbS1zdHlsZXNcIjtcblxuaW1wb3J0IHsgZHJvcGRvd25JdGVtSGVpZ2h0IH0gZnJvbSBcIi4uL3N0eWxlc1wiO1xuaW1wb3J0IHsgR1JJRCwgRFJPUERPV05fSVRFTV9IRUlHSFQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgY29tbW9uQm9yZGVyQ29sb3VyLCBjb21tb25JbnB1dEJhY2tncm91bmRDb2xvdXIgfSA9IGNvbW1vblNjaGVtZTtcblxuY2xhc3MgRHJvcGRvd25MaXN0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGRyb3Bkb3duSXRlbU1vdXNlT3ZlckhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBsZXQgc2VsZWN0ZWREcm9wZG93bkl0ZW07XG5cbiAgICBjb25zdCBkcm9wZG93bkl0ZW0gPSBlbGVtZW50OyAgLy8vXG5cbiAgICBzZWxlY3RlZERyb3Bkb3duSXRlbSA9IHRoaXMuZ2V0U2VsZWN0ZWREcm9wZG93bkl0ZW0oKTtcblxuICAgIGlmIChzZWxlY3RlZERyb3Bkb3duSXRlbSAhPT0gbnVsbCkge1xuICAgICAgc2VsZWN0ZWREcm9wZG93bkl0ZW0uZGVzZWxlY3QoKTtcbiAgICB9XG5cbiAgICBzZWxlY3RlZERyb3Bkb3duSXRlbSA9IGRyb3Bkb3duSXRlbTsgIC8vL1xuXG4gICAgc2VsZWN0ZWREcm9wZG93bkl0ZW0uc2VsZWN0KCk7XG4gIH1cblxuICBzY3JvbGxUb0luZGV4KGluZGV4KSB7XG4gICAgY29uc3QgaW5uZXJIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KCksXG4gICAgICAgICAgb2Zmc2V0ID0gKChpbm5lckhlaWdodCAvIERST1BET1dOX0lURU1fSEVJR0hUKSAtIDEpIC8gMixcbiAgICAgICAgICBzY3JvbGxUb3AgPSAoaW5kZXggLSBvZmZzZXQpICogRFJPUERPV05fSVRFTV9IRUlHSFQsXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IDA7XG5cbiAgICB0aGlzLnNjcm9sbFRvKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gIH1cblxuICBnZXREcm9wZG93bkl0ZW1zKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBkcm9wZG93bkl0ZW1zID0gY2hpbGRFbGVtZW50czsgIC8vL1xuXG4gICAgcmV0dXJuIGRyb3Bkb3duSXRlbXM7XG4gIH1cblxuICBnZXRTZWxlY3RlZERyb3Bkb3duSXRlbShkcm9wZG93bkl0ZW1zID0gbnVsbCkge1xuICAgIGxldCBzZWxlY3RlZERyb3Bkb3duSXRlbSA9IG51bGw7XG5cbiAgICBpZiAoZHJvcGRvd25JdGVtcyA9PT0gbnVsbCkge1xuICAgICAgZHJvcGRvd25JdGVtcyA9IHRoaXMuZ2V0RHJvcGRvd25JdGVtcygpO1xuICAgIH1cblxuICAgIGRyb3Bkb3duSXRlbXMuc29tZSgoZHJvcGRvd25JdGVtKSA9PiB7XG4gICAgICBjb25zdCBkcm9wZG93bkl0ZW1TZWxlY3RlZCA9IGRyb3Bkb3duSXRlbS5pc1NlbGVjdGVkKCk7XG5cbiAgICAgIGlmIChkcm9wZG93bkl0ZW1TZWxlY3RlZCkge1xuICAgICAgICBzZWxlY3RlZERyb3Bkb3duSXRlbSA9IGRyb3Bkb3duSXRlbTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICByZXR1cm4gc2VsZWN0ZWREcm9wZG93bkl0ZW07XG4gIH1cblxuICBnZXREaXNwbGF5ZWREcm9wZG93bkl0ZW1zKGRyb3Bkb3duSXRlbXMgPSBudWxsKSB7XG4gICAgaWYgKGRyb3Bkb3duSXRlbXMgPT09IG51bGwpIHtcbiAgICAgIGRyb3Bkb3duSXRlbXMgPSB0aGlzLmdldERyb3Bkb3duSXRlbXMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5ZWREcm9wZG93bkl0ZW1zID0gZHJvcGRvd25JdGVtcy5maWx0ZXIoKGRyb3Bkb3duSXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZHJvcGRvd25JdGVtRGlzcGxheWVkID0gZHJvcGRvd25JdGVtLmlzRGlzcGxheWVkKCk7XG5cbiAgICAgICAgICAgIGlmIChkcm9wZG93bkl0ZW1EaXNwbGF5ZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gZGlzcGxheWVkRHJvcGRvd25JdGVtcztcbiAgfVxuXG4gIHNlbGVjdE5leHREaXNwbGF5ZWREcm9wZG93bkl0ZW0oKSB7XG4gICAgbGV0IGluZGV4LFxuICAgICAgICBzZWxlY3RlZERyb3Bkb3duSXRlbTtcblxuICAgIHNlbGVjdGVkRHJvcGRvd25JdGVtID0gdGhpcy5nZXRTZWxlY3RlZERyb3Bkb3duSXRlbSgpO1xuXG4gICAgY29uc3QgZGlzcGxheWVkRHJvcGRvd25JdGVtcyA9IHRoaXMuZ2V0RGlzcGxheWVkRHJvcGRvd25JdGVtcygpLFxuICAgICAgICAgIGRpc3BsYXllZERyb3Bkb3duSXRlbXNMZW5ndGggPSBkaXNwbGF5ZWREcm9wZG93bkl0ZW1zLmxlbmd0aCxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcbiAgICAgICAgICBsYXN0SW5kZXggPSBkaXNwbGF5ZWREcm9wZG93bkl0ZW1zTGVuZ3RoIC0gMTtcblxuICAgIGlmIChzZWxlY3RlZERyb3Bkb3duSXRlbSAhPT0gbnVsbCkge1xuICAgICAgc2VsZWN0ZWREcm9wZG93bkl0ZW0uZGVzZWxlY3QoKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0ZWREcm9wZG93bkl0ZW0gPT09IG51bGwpIHtcbiAgICAgIGluZGV4ID0gZmlyc3RJbmRleDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGV4ID0gZGlzcGxheWVkRHJvcGRvd25JdGVtcy5pbmRleE9mKHNlbGVjdGVkRHJvcGRvd25JdGVtKTtcblxuICAgICAgaW5kZXggPSAoaW5kZXggPCBsYXN0SW5kZXgpID9cbiAgICAgICAgICAgICAgICBpbmRleCArIDEgOlxuICAgICAgICAgICAgICAgICAgZmlyc3RJbmRleDtcbiAgICB9XG5cbiAgICBzZWxlY3RlZERyb3Bkb3duSXRlbSA9IGRpc3BsYXllZERyb3Bkb3duSXRlbXNbaW5kZXhdIHx8IG51bGw7IC8vL1xuXG4gICAgaWYgKHNlbGVjdGVkRHJvcGRvd25JdGVtICE9PSBudWxsKSB7XG4gICAgICBzZWxlY3RlZERyb3Bkb3duSXRlbS5zZWxlY3QoKTtcblxuICAgICAgdGhpcy5zY3JvbGxUb0luZGV4KGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RQcmV2aW91c0Rpc3BsYXllZERyb3Bkb3duSXRlbSgpIHtcbiAgICBsZXQgaW5kZXgsXG4gICAgICAgIHNlbGVjdGVkRHJvcGRvd25JdGVtO1xuXG4gICAgc2VsZWN0ZWREcm9wZG93bkl0ZW0gPSB0aGlzLmdldFNlbGVjdGVkRHJvcGRvd25JdGVtKCk7XG5cbiAgICBjb25zdCBkaXNwbGF5ZWREcm9wZG93bkl0ZW1zID0gdGhpcy5nZXREaXNwbGF5ZWREcm9wZG93bkl0ZW1zKCksXG4gICAgICAgICAgZGlzcGxheWVkRHJvcGRvd25JdGVtc0xlbmd0aCA9IGRpc3BsYXllZERyb3Bkb3duSXRlbXMubGVuZ3RoLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSAwLFxuICAgICAgICAgIGxhc3RJbmRleCA9IGRpc3BsYXllZERyb3Bkb3duSXRlbXNMZW5ndGggLSAxO1xuXG4gICAgaWYgKHNlbGVjdGVkRHJvcGRvd25JdGVtICE9PSBudWxsKSB7XG4gICAgICBzZWxlY3RlZERyb3Bkb3duSXRlbS5kZXNlbGVjdCgpO1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RlZERyb3Bkb3duSXRlbSA9PT0gbnVsbCkge1xuICAgICAgaW5kZXggPSBsYXN0SW5kZXg7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmRleCA9IGRpc3BsYXllZERyb3Bkb3duSXRlbXMuaW5kZXhPZihzZWxlY3RlZERyb3Bkb3duSXRlbSk7XG5cbiAgICAgIGluZGV4ID0gKGluZGV4ID4gZmlyc3RJbmRleCkgP1xuICAgICAgICAgICAgICAgIGluZGV4IC0gMSA6XG4gICAgICAgICAgICAgICAgICBsYXN0SW5kZXg7XG4gICAgfVxuXG4gICAgc2VsZWN0ZWREcm9wZG93bkl0ZW0gPSBkaXNwbGF5ZWREcm9wZG93bkl0ZW1zW2luZGV4XSB8fCBudWxsOyAvLy9cblxuICAgIGlmIChzZWxlY3RlZERyb3Bkb3duSXRlbSAhPT0gbnVsbCkge1xuICAgICAgc2VsZWN0ZWREcm9wZG93bkl0ZW0uc2VsZWN0KCk7XG5cbiAgICAgIHRoaXMuc2Nyb2xsVG9JbmRleChpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gR1JJRDtcblxuICAgIHRoaXMuZGlzcGxheShkaXNwbGF5KTtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkRHJvcGRvd25JdGVtcyA9IHRoaXMuZ2V0RGlzcGxheWVkRHJvcGRvd25JdGVtcygpLFxuICAgICAgICAgIGRpc3BsYXllZERyb3Bkb3duSXRlbXNMZW5ndGggPSBkaXNwbGF5ZWREcm9wZG93bkl0ZW1zLmxlbmd0aCxcbiAgICAgICAgICBlbXB0eSA9IChkaXNwbGF5ZWREcm9wZG93bkl0ZW1zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dEcm9wZG93bkxpc3QgPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGhpZGVEcm9wZG93bkxpc3QgPSB0aGlzLmhpZGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGlzRHJvcGRvd25MaXN0RW1wdHkgPSB0aGlzLmlzRW1wdHkuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGlzRHJvcGRvd25MaXN0SGlkZGVuID0gdGhpcy5pc0hpZGRlbi5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBnZXRTZWxlY3RlZERyb3Bkb3duSXRlbSA9IHRoaXMuZ2V0U2VsZWN0ZWREcm9wZG93bkl0ZW0uYmluZCh0aGlzKSxcbiAgICAgICAgICBzZWxlY3ROZXh0RGlzcGxheWVkRHJvcGRvd25JdGVtID0gdGhpcy5zZWxlY3ROZXh0RGlzcGxheWVkRHJvcGRvd25JdGVtLmJpbmQodGhpcyksXG4gICAgICAgICAgc2VsZWN0UHJldmlvdXNEaXNwbGF5ZWREcm9wZG93bkl0ZW0gPSB0aGlzLnNlbGVjdFByZXZpb3VzRGlzcGxheWVkRHJvcGRvd25JdGVtLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dEcm9wZG93bkxpc3QsXG4gICAgICBoaWRlRHJvcGRvd25MaXN0LFxuICAgICAgaXNEcm9wZG93bkxpc3RFbXB0eSxcbiAgICAgIGlzRHJvcGRvd25MaXN0SGlkZGVuLFxuICAgICAgZ2V0U2VsZWN0ZWREcm9wZG93bkl0ZW0sXG4gICAgICBzZWxlY3ROZXh0RGlzcGxheWVkRHJvcGRvd25JdGVtLFxuICAgICAgc2VsZWN0UHJldmlvdXNEaXNwbGF5ZWREcm9wZG93bkl0ZW1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJ1bFwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZHJvcGRvd25cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRHJvcGRvd25MaXN0KWBcblxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAke2NvbW1vbkJvcmRlckNvbG91cn07ICBcbiAgZGlzcGxheTogZ3JpZDtcbiAgei1pbmRleDogMjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgZ3JpZC1hdXRvLXJvd3M6ICR7ZHJvcGRvd25JdGVtSGVpZ2h0fTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb21tb25JbnB1dEJhY2tncm91bmRDb2xvdXJ9O1xuICBcbmA7XG4iXSwibmFtZXMiOlsiY29tbW9uQm9yZGVyQ29sb3VyIiwiY29tbW9uU2NoZW1lIiwiY29tbW9uSW5wdXRCYWNrZ3JvdW5kQ29sb3VyIiwiRHJvcGRvd25MaXN0IiwiZHJvcGRvd25JdGVtTW91c2VPdmVySGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInNlbGVjdGVkRHJvcGRvd25JdGVtIiwiZHJvcGRvd25JdGVtIiwiZ2V0U2VsZWN0ZWREcm9wZG93bkl0ZW0iLCJkZXNlbGVjdCIsInNlbGVjdCIsInNjcm9sbFRvSW5kZXgiLCJpbmRleCIsImlubmVySGVpZ2h0IiwiZ2V0SW5uZXJIZWlnaHQiLCJvZmZzZXQiLCJEUk9QRE9XTl9JVEVNX0hFSUdIVCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJzY3JvbGxUbyIsImdldERyb3Bkb3duSXRlbXMiLCJjaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImRyb3Bkb3duSXRlbXMiLCJzb21lIiwiZHJvcGRvd25JdGVtU2VsZWN0ZWQiLCJpc1NlbGVjdGVkIiwiZ2V0RGlzcGxheWVkRHJvcGRvd25JdGVtcyIsImRpc3BsYXllZERyb3Bkb3duSXRlbXMiLCJmaWx0ZXIiLCJkcm9wZG93bkl0ZW1EaXNwbGF5ZWQiLCJpc0Rpc3BsYXllZCIsInNlbGVjdE5leHREaXNwbGF5ZWREcm9wZG93bkl0ZW0iLCJkaXNwbGF5ZWREcm9wZG93bkl0ZW1zTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RJbmRleCIsImxhc3RJbmRleCIsImluZGV4T2YiLCJzZWxlY3RQcmV2aW91c0Rpc3BsYXllZERyb3Bkb3duSXRlbSIsInNob3ciLCJkaXNwbGF5IiwiR1JJRCIsImlzRW1wdHkiLCJlbXB0eSIsImRpZE1vdW50IiwiaGlkZSIsIndpbGxVbm1vdW50IiwicGFyZW50Q29udGV4dCIsInNob3dEcm9wZG93bkxpc3QiLCJiaW5kIiwiaGlkZURyb3Bkb3duTGlzdCIsImlzRHJvcGRvd25MaXN0RW1wdHkiLCJpc0Ryb3Bkb3duTGlzdEhpZGRlbiIsImlzSGlkZGVuIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImRyb3Bkb3duSXRlbUhlaWdodCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdU1BOzs7ZUFBQTs7O29FQXJNc0I7b0JBRUU7MkJBQ0s7c0JBRU07eUJBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBUUEscUJBQW9EQyx5QkFBWSxDQUFoRUQsb0JBQW9CRSw4QkFBZ0NELHlCQUFZLENBQTVDQztBQUU1QixJQUFBLEFBQU1DLDZCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTs7Z0JBQU4sa0JBQU1BLDBCQUNKQyx3QkFBQUEsZ0NBQStCLFNBQUNDLE9BQU9DO1lBQ3JDLElBQUlDO1lBRUosSUFBTUMsZUFBZUYsU0FBVSxHQUFHO1lBRWxDQyx1QkFBdUIsTUFBS0UsdUJBQXVCO1lBRW5ELElBQUlGLHlCQUF5QixNQUFNO2dCQUNqQ0EscUJBQXFCRyxRQUFRO1lBQy9CO1lBRUFILHVCQUF1QkMsY0FBZSxHQUFHO1lBRXpDRCxxQkFBcUJJLE1BQU07UUFDN0I7OztrQkFmSVI7O1lBaUJKUyxLQUFBQTttQkFBQUEs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