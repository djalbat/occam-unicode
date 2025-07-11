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
var _occamstyles = require("occam-styles");
var _dropdown = /*#__PURE__*/ _interop_require_default(require("../../list/dropdown"));
var _unicodeCharacter = /*#__PURE__*/ _interop_require_default(require("../../item/dropbown/unicodeCharacter"));
var _sizes = require("../../sizes");
var _characterMap = require("../../characterMap");
var _styles = require("../../styles");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
        "\n\n  max-height: ",
        ";\n  grid-template-columns: ",
        " 1fr;\n  \n  overflow-x: hidden;\n  overflow-y: scroll;\n  \n  ",
        "\n  \n  ::-webkit-scrollbar-thumb {\n    background-color: ",
        ";\n  }\n\n  ::-webkit-scrollbar-track {\n    background-color: ",
        ";\n  }\n\n  ::-webkit-scrollbar-corner {\n    background-color: ",
        ";\n  }\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var commonScrollbarThumbBackgroundColour = _occamstyles.commonScheme.commonScrollbarThumbBackgroundColour, commonScrollbarTrackBackgroundColour = _occamstyles.commonScheme.commonScrollbarTrackBackgroundColour, commonScrollbarCornerBackgroundColour = _occamstyles.commonScheme.commonScrollbarCornerBackgroundColour;
var UnicodeCharacterDropdownList = /*#__PURE__*/ function(DropdownList) {
    _inherits(UnicodeCharacterDropdownList, DropdownList);
    function UnicodeCharacterDropdownList() {
        _class_call_check(this, UnicodeCharacterDropdownList);
        return _call_super(this, UnicodeCharacterDropdownList, arguments);
    }
    _create_class(UnicodeCharacterDropdownList, [
        {
            key: "getSelectedUnicodeCodePoint",
            value: function getSelectedUnicodeCodePoint() {
                var selectedUnicodeCodePoint = null;
                var selectedDropdownItem = this.getSelectedDropdownItem();
                if (selectedDropdownItem !== null) {
                    var selectedUnicodeCharacterDropdownItem = selectedDropdownItem, codePoint = selectedUnicodeCharacterDropdownItem.getCodePoint();
                    selectedUnicodeCodePoint = codePoint; ///
                }
                return selectedUnicodeCodePoint;
            }
        },
        {
            key: "filter",
            value: function filter(unicodeCharacterFragments) {
                var dropdownItems = this.getDropdownItems(), unicodeCharacterDropdownItems = dropdownItems; ///
                unicodeCharacterDropdownItems.forEach(function(unicodeCharacterDropdownItem) {
                    unicodeCharacterDropdownItem.filter(unicodeCharacterFragments);
                });
                var selectedDropdownItem = this.getSelectedDropdownItem(dropdownItems);
                if (selectedDropdownItem !== null) {
                    var selectedUnicodeCharacterDropdownItem = selectedDropdownItem; ///
                    var selectedUnicodeCharacterDropdownItemDisplayed = selectedUnicodeCharacterDropdownItem.isDisplayed();
                    if (!selectedUnicodeCharacterDropdownItemDisplayed) {
                        selectedUnicodeCharacterDropdownItem.deselect();
                    }
                }
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _this = this;
                var unicodeCharacterDropdownItems = _characterMap.unicodeCharacters.map(function(unicodeCharacter, index) {
                    var character = unicodeCharacter, codePoint = _characterMap.codePoints[index];
                    return /*#__PURE__*/ React.createElement(_unicodeCharacter.default, {
                        character: character,
                        codePoint: codePoint,
                        onMouseOver: _this.dropdownItemMouseOverHandler
                    });
                }), childElements = unicodeCharacterDropdownItems; ///
                return childElements;
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var parentContext = _get(_get_prototype_of(UnicodeCharacterDropdownList.prototype), "parentContext", this).call(this), getSelectedUnicodeCodePoint = this.getSelectedUnicodeCodePoint.bind(this), showUnicodeCharacterDropdownList = this.show.bind(this), hideUnicodeCharacterDropdownList = this.hide.bind(this), filterUnicodeCharacterDropdownList = this.filter.bind(this), isUnicodeCharacterDropdownListEmpty = this.isEmpty.bind(this); ///
                return _object_spread_props(_object_spread({}, parentContext), {
                    getSelectedUnicodeCodePoint: getSelectedUnicodeCodePoint,
                    showUnicodeCharacterDropdownList: showUnicodeCharacterDropdownList,
                    hideUnicodeCharacterDropdownList: hideUnicodeCharacterDropdownList,
                    filterUnicodeCharacterDropdownList: filterUnicodeCharacterDropdownList,
                    isUnicodeCharacterDropdownListEmpty: isUnicodeCharacterDropdownListEmpty
                });
            }
        }
    ]);
    return UnicodeCharacterDropdownList;
}(_dropdown.default);
_define_property(UnicodeCharacterDropdownList, "defaultProperties", {
    className: "unicode-character"
});
var _default = (0, _easywithstyle.default)(UnicodeCharacterDropdownList)(_templateObject(), _styles.unicodeCharacterDropdownListMaxHeight, _sizes.greatSize, _occamstyles.scrollbarMixin, commonScrollbarThumbBackgroundColour, commonScrollbarTrackBackgroundColour, commonScrollbarCornerBackgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saXN0L2Ryb3Bkb3duL3VuaWNvZGVDaGFyYWN0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGNvbW1vblNjaGVtZSwgc2Nyb2xsYmFyTWl4aW4gfSBmcm9tIFwib2NjYW0tc3R5bGVzXCI7XG5cbmltcG9ydCBEcm9wZG93bkxpc3QgZnJvbSBcIi4uLy4uL2xpc3QvZHJvcGRvd25cIjtcbmltcG9ydCBVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25JdGVtIGZyb20gXCIuLi8uLi9pdGVtL2Ryb3Bib3duL3VuaWNvZGVDaGFyYWN0ZXJcIjtcblxuaW1wb3J0IHsgZ3JlYXRTaXplIH0gZnJvbSBcIi4uLy4uL3NpemVzXCI7XG5pbXBvcnQgeyBjb2RlUG9pbnRzLCB1bmljb2RlQ2hhcmFjdGVycyB9IGZyb20gXCIuLi8uLi9jaGFyYWN0ZXJNYXBcIjtcbmltcG9ydCB7IHVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkxpc3RNYXhIZWlnaHQgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNvbnN0IHsgY29tbW9uU2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyLCBjb21tb25TY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIsIGNvbW1vblNjcm9sbGJhckNvcm5lckJhY2tncm91bmRDb2xvdXIgfSA9IGNvbW1vblNjaGVtZTtcblxuY2xhc3MgVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdCBleHRlbmRzIERyb3Bkb3duTGlzdCB7XG4gIGdldFNlbGVjdGVkVW5pY29kZUNvZGVQb2ludCgpIHtcbiAgICBsZXQgc2VsZWN0ZWRVbmljb2RlQ29kZVBvaW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHNlbGVjdGVkRHJvcGRvd25JdGVtID0gdGhpcy5nZXRTZWxlY3RlZERyb3Bkb3duSXRlbSgpO1xuXG4gICAgaWYgKHNlbGVjdGVkRHJvcGRvd25JdGVtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW0gPSBzZWxlY3RlZERyb3Bkb3duSXRlbSwgIC8vL1xuICAgICAgICAgICAgY29kZVBvaW50ID0gc2VsZWN0ZWRVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25JdGVtLmdldENvZGVQb2ludCgpO1xuXG4gICAgICBzZWxlY3RlZFVuaWNvZGVDb2RlUG9pbnQgPSBjb2RlUG9pbnQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RlZFVuaWNvZGVDb2RlUG9pbnQ7XG4gIH1cblxuICBmaWx0ZXIodW5pY29kZUNoYXJhY3RlckZyYWdtZW50cykge1xuICAgIGNvbnN0IGRyb3Bkb3duSXRlbXMgPSB0aGlzLmdldERyb3Bkb3duSXRlbXMoKSxcbiAgICAgICAgICB1bmljb2RlQ2hhcmFjdGVyRHJvcGRvd25JdGVtcyA9IGRyb3Bkb3duSXRlbXM7ICAvLy9cblxuICAgIHVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW1zLmZvckVhY2goKHVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW0pID0+IHtcbiAgICAgIHVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW0uZmlsdGVyKHVuaWNvZGVDaGFyYWN0ZXJGcmFnbWVudHMpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWREcm9wZG93bkl0ZW0gPSB0aGlzLmdldFNlbGVjdGVkRHJvcGRvd25JdGVtKGRyb3Bkb3duSXRlbXMpO1xuXG4gICAgaWYgKHNlbGVjdGVkRHJvcGRvd25JdGVtICE9PSBudWxsKSB7XG4gICAgICBsZXQgc2VsZWN0ZWRVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25JdGVtID0gc2VsZWN0ZWREcm9wZG93bkl0ZW07ICAvLy9cblxuICAgICAgY29uc3Qgc2VsZWN0ZWRVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25JdGVtRGlzcGxheWVkID0gc2VsZWN0ZWRVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25JdGVtLmlzRGlzcGxheWVkKCk7XG5cbiAgICAgIGlmICghc2VsZWN0ZWRVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25JdGVtRGlzcGxheWVkKSB7XG4gICAgICAgIHNlbGVjdGVkVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSXRlbS5kZXNlbGVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgdW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSXRlbXMgPSB1bmljb2RlQ2hhcmFjdGVycy5tYXAoKHVuaWNvZGVDaGFyYWN0ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGFyYWN0ZXIgPSB1bmljb2RlQ2hhcmFjdGVyLCAvLy9cbiAgICAgICAgICAgICAgICAgIGNvZGVQb2ludCA9IGNvZGVQb2ludHNbaW5kZXhdO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgIDxVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25JdGVtIGNoYXJhY3Rlcj17Y2hhcmFjdGVyfSBjb2RlUG9pbnQ9e2NvZGVQb2ludH0gb25Nb3VzZU92ZXI9e3RoaXMuZHJvcGRvd25JdGVtTW91c2VPdmVySGFuZGxlcn0gLz5cblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gdW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSXRlbXM7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHBhcmVudENvbnRleHQgPSBzdXBlci5wYXJlbnRDb250ZXh0KCksXG4gICAgICAgICAgZ2V0U2VsZWN0ZWRVbmljb2RlQ29kZVBvaW50ID0gdGhpcy5nZXRTZWxlY3RlZFVuaWNvZGVDb2RlUG9pbnQuYmluZCh0aGlzKSxcbiAgICAgICAgICBzaG93VW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdCA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgaGlkZVVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkxpc3QgPSB0aGlzLmhpZGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGZpbHRlclVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkxpc3QgPSB0aGlzLmZpbHRlci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgaXNVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25MaXN0RW1wdHkgPSB0aGlzLmlzRW1wdHkuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICAuLi5wYXJlbnRDb250ZXh0LFxuICAgICAgZ2V0U2VsZWN0ZWRVbmljb2RlQ29kZVBvaW50LFxuICAgICAgc2hvd1VuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkxpc3QsXG4gICAgICBoaWRlVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdCxcbiAgICAgIGZpbHRlclVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkxpc3QsXG4gICAgICBpc1VuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkxpc3RFbXB0eVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ1bmljb2RlLWNoYXJhY3RlclwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25MaXN0KWBcblxuICBtYXgtaGVpZ2h0OiAke3VuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkxpc3RNYXhIZWlnaHR9O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICR7Z3JlYXRTaXplfSAxZnI7XG4gIFxuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgXG4gICR7c2Nyb2xsYmFyTWl4aW59XG4gIFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbW1vblNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91cn07XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbW1vblNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91cn07XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb21tb25TY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgfVxuXG5gO1xuIl0sIm5hbWVzIjpbImNvbW1vblNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciIsImNvbW1vblNjaGVtZSIsImNvbW1vblNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciIsImNvbW1vblNjcm9sbGJhckNvcm5lckJhY2tncm91bmRDb2xvdXIiLCJVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25MaXN0IiwiZ2V0U2VsZWN0ZWRVbmljb2RlQ29kZVBvaW50Iiwic2VsZWN0ZWRVbmljb2RlQ29kZVBvaW50Iiwic2VsZWN0ZWREcm9wZG93bkl0ZW0iLCJnZXRTZWxlY3RlZERyb3Bkb3duSXRlbSIsInNlbGVjdGVkVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSXRlbSIsImNvZGVQb2ludCIsImdldENvZGVQb2ludCIsImZpbHRlciIsInVuaWNvZGVDaGFyYWN0ZXJGcmFnbWVudHMiLCJkcm9wZG93bkl0ZW1zIiwiZ2V0RHJvcGRvd25JdGVtcyIsInVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW1zIiwiZm9yRWFjaCIsInVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW0iLCJzZWxlY3RlZFVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW1EaXNwbGF5ZWQiLCJpc0Rpc3BsYXllZCIsImRlc2VsZWN0IiwiY2hpbGRFbGVtZW50cyIsInVuaWNvZGVDaGFyYWN0ZXJzIiwibWFwIiwidW5pY29kZUNoYXJhY3RlciIsImluZGV4IiwiY2hhcmFjdGVyIiwiY29kZVBvaW50cyIsIlVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW0iLCJvbk1vdXNlT3ZlciIsImRyb3Bkb3duSXRlbU1vdXNlT3ZlckhhbmRsZXIiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsInNob3dVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25MaXN0Iiwic2hvdyIsImhpZGVVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25MaXN0IiwiaGlkZSIsImZpbHRlclVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkxpc3QiLCJpc1VuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkxpc3RFbXB0eSIsImlzRW1wdHkiLCJEcm9wZG93bkxpc3QiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsInVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkxpc3RNYXhIZWlnaHQiLCJncmVhdFNpemUiLCJzY3JvbGxiYXJNaXhpbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMkZBOzs7ZUFBQTs7O29FQXpGc0I7MkJBRXVCOytEQUVwQjt1RUFDZ0I7cUJBRWY7NEJBQ29CO3NCQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RCxJQUFRQSx1Q0FBc0hDLHlCQUFZLENBQWxJRCxzQ0FBc0NFLHVDQUFnRkQseUJBQVksQ0FBNUZDLHNDQUFzQ0Msd0NBQTBDRix5QkFBWSxDQUF0REU7QUFFcEYsSUFBQSxBQUFNQyw2Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsMkJBQTJCO2dCQUUvQixJQUFNQyx1QkFBdUIsSUFBSSxDQUFDQyx1QkFBdUI7Z0JBRXpELElBQUlELHlCQUF5QixNQUFNO29CQUNqQyxJQUFNRSx1Q0FBdUNGLHNCQUN2Q0csWUFBWUQscUNBQXFDRSxZQUFZO29CQUVuRUwsMkJBQTJCSSxXQUFXLEdBQUc7Z0JBQzNDO2dCQUVBLE9BQU9KO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MseUJBQXlCO2dCQUM5QixJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDQyxnQkFBZ0IsSUFDckNDLGdDQUFnQ0YsZUFBZ0IsR0FBRztnQkFFekRFLDhCQUE4QkMsT0FBTyxDQUFDLFNBQUNDO29CQUNyQ0EsNkJBQTZCTixNQUFNLENBQUNDO2dCQUN0QztnQkFFQSxJQUFNTix1QkFBdUIsSUFBSSxDQUFDQyx1QkFBdUIsQ0FBQ007Z0JBRTFELElBQUlQLHlCQUF5QixNQUFNO29CQUNqQyxJQUFJRSx1Q0FBdUNGLHNCQUF1QixHQUFHO29CQUVyRSxJQUFNWSxnREFBZ0RWLHFDQUFxQ1csV0FBVztvQkFFdEcsSUFBSSxDQUFDRCwrQ0FBK0M7d0JBQ2xEVixxQ0FBcUNZLFFBQVE7b0JBQy9DO2dCQUNGO1lBQ0Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7O2dCQUNFLElBQU1OLGdDQUFnQ08sK0JBQWlCLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxrQkFBa0JDO29CQUN2RSxJQUFNQyxZQUFZRixrQkFDWmYsWUFBWWtCLHdCQUFVLENBQUNGLE1BQU07b0JBRW5DLHFCQUVFLG9CQUFDRyx5QkFBNEI7d0JBQUNGLFdBQVdBO3dCQUFXakIsV0FBV0E7d0JBQVdvQixhQUFhLE1BQUtDLDRCQUE0Qjs7Z0JBRzVILElBQ0FULGdCQUFnQk4sK0JBQStCLEdBQUc7Z0JBRXhELE9BQU9NO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUEsZ0JBQWdCLHVCQXREcEI1Qix5Q0FzRDBCNEIsaUJBQU4sSUFBSyxjQUNyQjNCLDhCQUE4QixJQUFJLENBQUNBLDJCQUEyQixDQUFDNEIsSUFBSSxDQUFDLElBQUksR0FDeEVDLG1DQUFtQyxJQUFJLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FDdERHLG1DQUFtQyxJQUFJLENBQUNDLElBQUksQ0FBQ0osSUFBSSxDQUFDLElBQUksR0FDdERLLHFDQUFxQyxJQUFJLENBQUMxQixNQUFNLENBQUNxQixJQUFJLENBQUMsSUFBSSxHQUMxRE0sc0NBQXNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDUCxJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7Z0JBRXpFLE9BQVEsd0NBQ0hEO29CQUNIM0IsNkJBQUFBO29CQUNBNkIsa0NBQUFBO29CQUNBRSxrQ0FBQUE7b0JBQ0FFLG9DQUFBQTtvQkFDQUMscUNBQUFBOztZQUVKOzs7V0FyRUluQztFQUFxQ3FDLGlCQUFZO0FBdUVyRCxpQkF2RUlyQyw4QkF1RUdzQyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUN4QyxpREFFVHlDLDZDQUFxQyxFQUMxQkMsZ0JBQVMsRUFLaENDLDJCQUFjLEVBR00vQyxzQ0FJQUUsc0NBSUFDIn0=