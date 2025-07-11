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
                var unicodeCharacterDropdownItems = _characterMap.characters.map(function(character, index) {
                    var codePoint = _characterMap.codePoints[index];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saXN0L2Ryb3Bkb3duL3VuaWNvZGVDaGFyYWN0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGNvbW1vblNjaGVtZSwgc2Nyb2xsYmFyTWl4aW4gfSBmcm9tIFwib2NjYW0tc3R5bGVzXCI7XG5cbmltcG9ydCBEcm9wZG93bkxpc3QgZnJvbSBcIi4uLy4uL2xpc3QvZHJvcGRvd25cIjtcbmltcG9ydCBVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25JdGVtIGZyb20gXCIuLi8uLi9pdGVtL2Ryb3Bib3duL3VuaWNvZGVDaGFyYWN0ZXJcIjtcblxuaW1wb3J0IHsgZ3JlYXRTaXplIH0gZnJvbSBcIi4uLy4uL3NpemVzXCI7XG5pbXBvcnQgeyBjb2RlUG9pbnRzLCBjaGFyYWN0ZXJzIH0gZnJvbSBcIi4uLy4uL2NoYXJhY3Rlck1hcFwiO1xuaW1wb3J0IHsgdW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdE1heEhlaWdodCB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcblxuY29uc3QgeyBjb21tb25TY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIsIGNvbW1vblNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciwgY29tbW9uU2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciB9ID0gY29tbW9uU2NoZW1lO1xuXG5jbGFzcyBVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25MaXN0IGV4dGVuZHMgRHJvcGRvd25MaXN0IHtcbiAgZ2V0U2VsZWN0ZWRVbmljb2RlQ29kZVBvaW50KCkge1xuICAgIGxldCBzZWxlY3RlZFVuaWNvZGVDb2RlUG9pbnQgPSBudWxsO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWREcm9wZG93bkl0ZW0gPSB0aGlzLmdldFNlbGVjdGVkRHJvcGRvd25JdGVtKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWREcm9wZG93bkl0ZW0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSXRlbSA9IHNlbGVjdGVkRHJvcGRvd25JdGVtLCAgLy8vXG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBzZWxlY3RlZFVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW0uZ2V0Q29kZVBvaW50KCk7XG5cbiAgICAgIHNlbGVjdGVkVW5pY29kZUNvZGVQb2ludCA9IGNvZGVQb2ludDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdGVkVW5pY29kZUNvZGVQb2ludDtcbiAgfVxuXG4gIGZpbHRlcih1bmljb2RlQ2hhcmFjdGVyRnJhZ21lbnRzKSB7XG4gICAgY29uc3QgZHJvcGRvd25JdGVtcyA9IHRoaXMuZ2V0RHJvcGRvd25JdGVtcygpLFxuICAgICAgICAgIHVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW1zID0gZHJvcGRvd25JdGVtczsgIC8vL1xuXG4gICAgdW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSXRlbXMuZm9yRWFjaCgodW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSXRlbSkgPT4ge1xuICAgICAgdW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSXRlbS5maWx0ZXIodW5pY29kZUNoYXJhY3RlckZyYWdtZW50cyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzZWxlY3RlZERyb3Bkb3duSXRlbSA9IHRoaXMuZ2V0U2VsZWN0ZWREcm9wZG93bkl0ZW0oZHJvcGRvd25JdGVtcyk7XG5cbiAgICBpZiAoc2VsZWN0ZWREcm9wZG93bkl0ZW0gIT09IG51bGwpIHtcbiAgICAgIGxldCBzZWxlY3RlZFVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW0gPSBzZWxlY3RlZERyb3Bkb3duSXRlbTsgIC8vL1xuXG4gICAgICBjb25zdCBzZWxlY3RlZFVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW1EaXNwbGF5ZWQgPSBzZWxlY3RlZFVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW0uaXNEaXNwbGF5ZWQoKTtcblxuICAgICAgaWYgKCFzZWxlY3RlZFVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW1EaXNwbGF5ZWQpIHtcbiAgICAgICAgc2VsZWN0ZWRVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25JdGVtLmRlc2VsZWN0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB1bmljb2RlQ2hhcmFjdGVyRHJvcGRvd25JdGVtcyA9IGNoYXJhY3RlcnMubWFwKChjaGFyYWN0ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlUG9pbnQgPSBjb2RlUG9pbnRzW2luZGV4XTtcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8VW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSXRlbSBjaGFyYWN0ZXI9e2NoYXJhY3Rlcn0gY29kZVBvaW50PXtjb2RlUG9pbnR9IG9uTW91c2VPdmVyPXt0aGlzLmRyb3Bkb3duSXRlbU1vdXNlT3ZlckhhbmRsZXJ9IC8+XG5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IHVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW1zOyAvLy9cblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBwYXJlbnRDb250ZXh0ID0gc3VwZXIucGFyZW50Q29udGV4dCgpLFxuICAgICAgICAgIGdldFNlbGVjdGVkVW5pY29kZUNvZGVQb2ludCA9IHRoaXMuZ2V0U2VsZWN0ZWRVbmljb2RlQ29kZVBvaW50LmJpbmQodGhpcyksXG4gICAgICAgICAgc2hvd1VuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkxpc3QgPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGhpZGVVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25MaXN0ID0gdGhpcy5oaWRlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBmaWx0ZXJVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25MaXN0ID0gdGhpcy5maWx0ZXIuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGlzVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdEVtcHR5ID0gdGhpcy5pc0VtcHR5LmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgLi4ucGFyZW50Q29udGV4dCxcbiAgICAgIGdldFNlbGVjdGVkVW5pY29kZUNvZGVQb2ludCxcbiAgICAgIHNob3dVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25MaXN0LFxuICAgICAgaGlkZVVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkxpc3QsXG4gICAgICBmaWx0ZXJVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25MaXN0LFxuICAgICAgaXNVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25MaXN0RW1wdHlcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidW5pY29kZS1jaGFyYWN0ZXJcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdClgXG5cbiAgbWF4LWhlaWdodDogJHt1bmljb2RlQ2hhcmFjdGVyRHJvcGRvd25MaXN0TWF4SGVpZ2h0fTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAke2dyZWF0U2l6ZX0gMWZyO1xuICBcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIFxuICAke3Njcm9sbGJhck1peGlufVxuICBcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb21tb25TY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXJ9O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb21tb25TY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXJ9O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29tbW9uU2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91cn07XG4gIH1cblxuYDtcbiJdLCJuYW1lcyI6WyJjb21tb25TY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIiLCJjb21tb25TY2hlbWUiLCJjb21tb25TY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIiLCJjb21tb25TY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyIiwiVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdCIsImdldFNlbGVjdGVkVW5pY29kZUNvZGVQb2ludCIsInNlbGVjdGVkVW5pY29kZUNvZGVQb2ludCIsInNlbGVjdGVkRHJvcGRvd25JdGVtIiwiZ2V0U2VsZWN0ZWREcm9wZG93bkl0ZW0iLCJzZWxlY3RlZFVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW0iLCJjb2RlUG9pbnQiLCJnZXRDb2RlUG9pbnQiLCJmaWx0ZXIiLCJ1bmljb2RlQ2hhcmFjdGVyRnJhZ21lbnRzIiwiZHJvcGRvd25JdGVtcyIsImdldERyb3Bkb3duSXRlbXMiLCJ1bmljb2RlQ2hhcmFjdGVyRHJvcGRvd25JdGVtcyIsImZvckVhY2giLCJ1bmljb2RlQ2hhcmFjdGVyRHJvcGRvd25JdGVtIiwic2VsZWN0ZWRVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25JdGVtRGlzcGxheWVkIiwiaXNEaXNwbGF5ZWQiLCJkZXNlbGVjdCIsImNoaWxkRWxlbWVudHMiLCJjaGFyYWN0ZXJzIiwibWFwIiwiY2hhcmFjdGVyIiwiaW5kZXgiLCJjb2RlUG9pbnRzIiwiVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSXRlbSIsIm9uTW91c2VPdmVyIiwiZHJvcGRvd25JdGVtTW91c2VPdmVySGFuZGxlciIsInBhcmVudENvbnRleHQiLCJiaW5kIiwic2hvd1VuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkxpc3QiLCJzaG93IiwiaGlkZVVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkxpc3QiLCJoaWRlIiwiZmlsdGVyVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdCIsImlzVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdEVtcHR5IiwiaXNFbXB0eSIsIkRyb3Bkb3duTGlzdCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwidW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdE1heEhlaWdodCIsImdyZWF0U2l6ZSIsInNjcm9sbGJhck1peGluIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwRkE7OztlQUFBOzs7b0VBeEZzQjsyQkFFdUI7K0RBRXBCO3VFQUNnQjtxQkFFZjs0QkFDYTtzQkFDZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEQsSUFBUUEsdUNBQXNIQyx5QkFBWSxDQUFsSUQsc0NBQXNDRSx1Q0FBZ0ZELHlCQUFZLENBQTVGQyxzQ0FBc0NDLHdDQUEwQ0YseUJBQVksQ0FBdERFO0FBRXBGLElBQUEsQUFBTUMsNkNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLDJCQUEyQjtnQkFFL0IsSUFBTUMsdUJBQXVCLElBQUksQ0FBQ0MsdUJBQXVCO2dCQUV6RCxJQUFJRCx5QkFBeUIsTUFBTTtvQkFDakMsSUFBTUUsdUNBQXVDRixzQkFDdkNHLFlBQVlELHFDQUFxQ0UsWUFBWTtvQkFFbkVMLDJCQUEyQkksV0FBVyxHQUFHO2dCQUMzQztnQkFFQSxPQUFPSjtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLHlCQUF5QjtnQkFDOUIsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCLElBQ3JDQyxnQ0FBZ0NGLGVBQWdCLEdBQUc7Z0JBRXpERSw4QkFBOEJDLE9BQU8sQ0FBQyxTQUFDQztvQkFDckNBLDZCQUE2Qk4sTUFBTSxDQUFDQztnQkFDdEM7Z0JBRUEsSUFBTU4sdUJBQXVCLElBQUksQ0FBQ0MsdUJBQXVCLENBQUNNO2dCQUUxRCxJQUFJUCx5QkFBeUIsTUFBTTtvQkFDakMsSUFBSUUsdUNBQXVDRixzQkFBdUIsR0FBRztvQkFFckUsSUFBTVksZ0RBQWdEVixxQ0FBcUNXLFdBQVc7b0JBRXRHLElBQUksQ0FBQ0QsK0NBQStDO3dCQUNsRFYscUNBQXFDWSxRQUFRO29CQUMvQztnQkFDRjtZQUNGOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBOztnQkFDRSxJQUFNTixnQ0FBZ0NPLHdCQUFVLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxXQUFXQztvQkFDekQsSUFBTWhCLFlBQVlpQix3QkFBVSxDQUFDRCxNQUFNO29CQUVuQyxxQkFFRSxvQkFBQ0UseUJBQTRCO3dCQUFDSCxXQUFXQTt3QkFBV2YsV0FBV0E7d0JBQVdtQixhQUFhLE1BQUtDLDRCQUE0Qjs7Z0JBRzVILElBQ0FSLGdCQUFnQk4sK0JBQStCLEdBQUc7Z0JBRXhELE9BQU9NO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUEsZ0JBQWdCLHVCQXJEcEIzQix5Q0FxRDBCMkIsaUJBQU4sSUFBSyxjQUNyQjFCLDhCQUE4QixJQUFJLENBQUNBLDJCQUEyQixDQUFDMkIsSUFBSSxDQUFDLElBQUksR0FDeEVDLG1DQUFtQyxJQUFJLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FDdERHLG1DQUFtQyxJQUFJLENBQUNDLElBQUksQ0FBQ0osSUFBSSxDQUFDLElBQUksR0FDdERLLHFDQUFxQyxJQUFJLENBQUN6QixNQUFNLENBQUNvQixJQUFJLENBQUMsSUFBSSxHQUMxRE0sc0NBQXNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDUCxJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7Z0JBRXpFLE9BQVEsd0NBQ0hEO29CQUNIMUIsNkJBQUFBO29CQUNBNEIsa0NBQUFBO29CQUNBRSxrQ0FBQUE7b0JBQ0FFLG9DQUFBQTtvQkFDQUMscUNBQUFBOztZQUVKOzs7V0FwRUlsQztFQUFxQ29DLGlCQUFZO0FBc0VyRCxpQkF0RUlwQyw4QkFzRUdxQyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUN2QyxpREFFVHdDLDZDQUFxQyxFQUMxQkMsZ0JBQVMsRUFLaENDLDJCQUFjLEVBR005QyxzQ0FJQUUsc0NBSUFDIn0=