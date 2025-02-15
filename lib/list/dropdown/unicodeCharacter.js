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
var _ = require("../.");
var _occamstyles = require("occam-styles");
var _unicodeCharacter = /*#__PURE__*/ _interop_require_default(require("../../item/dropbown/unicodeCharacter"));
var _sizes = require("../../sizes");
var _unicodeCharacterMap = require("../../unicodeCharacterMap");
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
                var unicodeCharacterDropdownItems = _unicodeCharacterMap.unicodeCharacters.map(function(unicodeCharacter, index) {
                    var character = unicodeCharacter, codePoint = _unicodeCharacterMap.codePoints[index];
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
}(_.DropdownList);
_define_property(UnicodeCharacterDropdownList, "defaultProperties", {
    className: "unicode-character"
});
var _default = (0, _easywithstyle.default)(UnicodeCharacterDropdownList)(_templateObject(), _styles.unicodeCharacterDropdownListMaxHeight, _sizes.greatSize, _occamstyles.scrollbarMixin, commonScrollbarThumbBackgroundColour, commonScrollbarTrackBackgroundColour, commonScrollbarCornerBackgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saXN0L2Ryb3Bkb3duL3VuaWNvZGVDaGFyYWN0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IERyb3Bkb3duTGlzdCB9IGZyb20gXCIuLi8uXCI7XG5pbXBvcnQgeyBjb21tb25TY2hlbWUsIHNjcm9sbGJhck1peGluIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuXG5pbXBvcnQgVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSXRlbSBmcm9tIFwiLi4vLi4vaXRlbS9kcm9wYm93bi91bmljb2RlQ2hhcmFjdGVyXCI7XG5cbmltcG9ydCB7IGdyZWF0U2l6ZSB9IGZyb20gXCIuLi8uLi9zaXplc1wiO1xuaW1wb3J0IHsgY29kZVBvaW50cywgdW5pY29kZUNoYXJhY3RlcnMgfSBmcm9tIFwiLi4vLi4vdW5pY29kZUNoYXJhY3Rlck1hcFwiO1xuaW1wb3J0IHsgdW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdE1heEhlaWdodCB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcblxuY29uc3QgeyBjb21tb25TY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIsIGNvbW1vblNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciwgY29tbW9uU2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciB9ID0gY29tbW9uU2NoZW1lO1xuXG5jbGFzcyBVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25MaXN0IGV4dGVuZHMgRHJvcGRvd25MaXN0IHtcbiAgZ2V0U2VsZWN0ZWRVbmljb2RlQ29kZVBvaW50KCkge1xuICAgIGxldCBzZWxlY3RlZFVuaWNvZGVDb2RlUG9pbnQgPSBudWxsO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWREcm9wZG93bkl0ZW0gPSB0aGlzLmdldFNlbGVjdGVkRHJvcGRvd25JdGVtKCk7XG5cbiAgICBpZiAoc2VsZWN0ZWREcm9wZG93bkl0ZW0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSXRlbSA9IHNlbGVjdGVkRHJvcGRvd25JdGVtLCAgLy8vXG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBzZWxlY3RlZFVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW0uZ2V0Q29kZVBvaW50KCk7XG5cbiAgICAgIHNlbGVjdGVkVW5pY29kZUNvZGVQb2ludCA9IGNvZGVQb2ludDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdGVkVW5pY29kZUNvZGVQb2ludDtcbiAgfVxuXG4gIGZpbHRlcih1bmljb2RlQ2hhcmFjdGVyRnJhZ21lbnRzKSB7XG4gICAgY29uc3QgZHJvcGRvd25JdGVtcyA9IHRoaXMuZ2V0RHJvcGRvd25JdGVtcygpLFxuICAgICAgICAgIHVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW1zID0gZHJvcGRvd25JdGVtczsgIC8vL1xuXG4gICAgdW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSXRlbXMuZm9yRWFjaCgodW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSXRlbSkgPT4ge1xuICAgICAgdW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSXRlbS5maWx0ZXIodW5pY29kZUNoYXJhY3RlckZyYWdtZW50cyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzZWxlY3RlZERyb3Bkb3duSXRlbSA9IHRoaXMuZ2V0U2VsZWN0ZWREcm9wZG93bkl0ZW0oZHJvcGRvd25JdGVtcyk7XG5cbiAgICBpZiAoc2VsZWN0ZWREcm9wZG93bkl0ZW0gIT09IG51bGwpIHtcbiAgICAgIGxldCBzZWxlY3RlZFVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW0gPSBzZWxlY3RlZERyb3Bkb3duSXRlbTsgIC8vL1xuXG4gICAgICBjb25zdCBzZWxlY3RlZFVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW1EaXNwbGF5ZWQgPSBzZWxlY3RlZFVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW0uaXNEaXNwbGF5ZWQoKTtcblxuICAgICAgaWYgKCFzZWxlY3RlZFVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW1EaXNwbGF5ZWQpIHtcbiAgICAgICAgc2VsZWN0ZWRVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25JdGVtLmRlc2VsZWN0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB1bmljb2RlQ2hhcmFjdGVyRHJvcGRvd25JdGVtcyA9IHVuaWNvZGVDaGFyYWN0ZXJzLm1hcCgodW5pY29kZUNoYXJhY3RlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlciA9IHVuaWNvZGVDaGFyYWN0ZXIsIC8vL1xuICAgICAgICAgICAgICAgICAgY29kZVBvaW50ID0gY29kZVBvaW50c1tpbmRleF07XG5cbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgPFVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkl0ZW0gY2hhcmFjdGVyPXtjaGFyYWN0ZXJ9IGNvZGVQb2ludD17Y29kZVBvaW50fSBvbk1vdXNlT3Zlcj17dGhpcy5kcm9wZG93bkl0ZW1Nb3VzZU92ZXJIYW5kbGVyfSAvPlxuXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSB1bmljb2RlQ2hhcmFjdGVyRHJvcGRvd25JdGVtczsgLy8vXG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgcGFyZW50Q29udGV4dCA9IHN1cGVyLnBhcmVudENvbnRleHQoKSxcbiAgICAgICAgICBnZXRTZWxlY3RlZFVuaWNvZGVDb2RlUG9pbnQgPSB0aGlzLmdldFNlbGVjdGVkVW5pY29kZUNvZGVQb2ludC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25MaXN0ID0gdGhpcy5zaG93LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBoaWRlVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdCA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZmlsdGVyVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdCA9IHRoaXMuZmlsdGVyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBpc1VuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkxpc3RFbXB0eSA9IHRoaXMuaXNFbXB0eS5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIC4uLnBhcmVudENvbnRleHQsXG4gICAgICBnZXRTZWxlY3RlZFVuaWNvZGVDb2RlUG9pbnQsXG4gICAgICBzaG93VW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdCxcbiAgICAgIGhpZGVVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25MaXN0LFxuICAgICAgZmlsdGVyVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdCxcbiAgICAgIGlzVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdEVtcHR5XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInVuaWNvZGUtY2hhcmFjdGVyXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkxpc3QpYFxuXG4gIG1heC1oZWlnaHQ6ICR7dW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdE1heEhlaWdodH07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogJHtncmVhdFNpemV9IDFmcjtcbiAgXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBcbiAgJHtzY3JvbGxiYXJNaXhpbn1cbiAgXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29tbW9uU2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29tbW9uU2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbW1vblNjcm9sbGJhckNvcm5lckJhY2tncm91bmRDb2xvdXJ9O1xuICB9XG5cbmA7XG4iXSwibmFtZXMiOlsiY29tbW9uU2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uU2NoZW1lIiwiY29tbW9uU2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uU2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciIsIlVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkxpc3QiLCJnZXRTZWxlY3RlZFVuaWNvZGVDb2RlUG9pbnQiLCJzZWxlY3RlZFVuaWNvZGVDb2RlUG9pbnQiLCJzZWxlY3RlZERyb3Bkb3duSXRlbSIsImdldFNlbGVjdGVkRHJvcGRvd25JdGVtIiwic2VsZWN0ZWRVbmljb2RlQ2hhcmFjdGVyRHJvcGRvd25JdGVtIiwiY29kZVBvaW50IiwiZ2V0Q29kZVBvaW50IiwiZmlsdGVyIiwidW5pY29kZUNoYXJhY3RlckZyYWdtZW50cyIsImRyb3Bkb3duSXRlbXMiLCJnZXREcm9wZG93bkl0ZW1zIiwidW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSXRlbXMiLCJmb3JFYWNoIiwidW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSXRlbSIsInNlbGVjdGVkVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSXRlbURpc3BsYXllZCIsImlzRGlzcGxheWVkIiwiZGVzZWxlY3QiLCJjaGlsZEVsZW1lbnRzIiwidW5pY29kZUNoYXJhY3RlcnMiLCJtYXAiLCJ1bmljb2RlQ2hhcmFjdGVyIiwiaW5kZXgiLCJjaGFyYWN0ZXIiLCJjb2RlUG9pbnRzIiwiVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duSXRlbSIsIm9uTW91c2VPdmVyIiwiZHJvcGRvd25JdGVtTW91c2VPdmVySGFuZGxlciIsInBhcmVudENvbnRleHQiLCJiaW5kIiwic2hvd1VuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkxpc3QiLCJzaG93IiwiaGlkZVVuaWNvZGVDaGFyYWN0ZXJEcm9wZG93bkxpc3QiLCJoaWRlIiwiZmlsdGVyVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdCIsImlzVW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdEVtcHR5IiwiaXNFbXB0eSIsIkRyb3Bkb3duTGlzdCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwidW5pY29kZUNoYXJhY3RlckRyb3Bkb3duTGlzdE1heEhlaWdodCIsImdyZWF0U2l6ZSIsInNjcm9sbGJhck1peGluIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEyRkE7OztlQUFBOzs7b0VBekZzQjtnQkFFTzsyQkFDZ0I7dUVBRUo7cUJBRWY7bUNBQ29CO3NCQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RCxJQUFRQSx1Q0FBc0hDLHlCQUFZLENBQWxJRCxzQ0FBc0NFLHVDQUFnRkQseUJBQVksQ0FBNUZDLHNDQUFzQ0Msd0NBQTBDRix5QkFBWSxDQUF0REU7QUFFcEYsSUFBQSxBQUFNQyw2Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLDJCQUEyQjtnQkFFL0IsSUFBTUMsdUJBQXVCLElBQUksQ0FBQ0MsdUJBQXVCO2dCQUV6RCxJQUFJRCx5QkFBeUIsTUFBTTtvQkFDakMsSUFBTUUsdUNBQXVDRixzQkFDdkNHLFlBQVlELHFDQUFxQ0UsWUFBWTtvQkFFbkVMLDJCQUEyQkksV0FBVyxHQUFHO2dCQUMzQztnQkFFQSxPQUFPSjtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLHlCQUF5QjtnQkFDOUIsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCLElBQ3JDQyxnQ0FBZ0NGLGVBQWdCLEdBQUc7Z0JBRXpERSw4QkFBOEJDLE9BQU8sQ0FBQyxTQUFDQztvQkFDckNBLDZCQUE2Qk4sTUFBTSxDQUFDQztnQkFDdEM7Z0JBRUEsSUFBTU4sdUJBQXVCLElBQUksQ0FBQ0MsdUJBQXVCLENBQUNNO2dCQUUxRCxJQUFJUCx5QkFBeUIsTUFBTTtvQkFDakMsSUFBSUUsdUNBQXVDRixzQkFBdUIsR0FBRztvQkFFckUsSUFBTVksZ0RBQWdEVixxQ0FBcUNXLFdBQVc7b0JBRXRHLElBQUksQ0FBQ0QsK0NBQStDO3dCQUNsRFYscUNBQXFDWSxRQUFRO29CQUMvQztnQkFDRjtZQUNGOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBOztnQkFDRSxJQUFNTixnQ0FBZ0NPLHNDQUFpQixDQUFDQyxHQUFHLENBQUMsU0FBQ0Msa0JBQWtCQztvQkFDdkUsSUFBTUMsWUFBWUYsa0JBQ1pmLFlBQVlrQiwrQkFBVSxDQUFDRixNQUFNO29CQUVuQyxxQkFFRSxvQkFBQ0cseUJBQTRCO3dCQUFDRixXQUFXQTt3QkFBV2pCLFdBQVdBO3dCQUFXb0IsYUFBYSxNQUFLQyw0QkFBNEI7O2dCQUc1SCxJQUNBVCxnQkFBZ0JOLCtCQUErQixHQUFHO2dCQUV4RCxPQUFPTTtZQUNUOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1BLGdCQUFnQix1QkF0RHBCNUIseUNBc0QwQjRCLGlCQUFOLElBQUssY0FDckIzQiw4QkFBOEIsSUFBSSxDQUFDQSwyQkFBMkIsQ0FBQzRCLElBQUksQ0FBQyxJQUFJLEdBQ3hFQyxtQ0FBbUMsSUFBSSxDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQ3RERyxtQ0FBbUMsSUFBSSxDQUFDQyxJQUFJLENBQUNKLElBQUksQ0FBQyxJQUFJLEdBQ3RESyxxQ0FBcUMsSUFBSSxDQUFDMUIsTUFBTSxDQUFDcUIsSUFBSSxDQUFDLElBQUksR0FDMURNLHNDQUFzQyxJQUFJLENBQUNDLE9BQU8sQ0FBQ1AsSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO2dCQUV6RSxPQUFRLHdDQUNIRDtvQkFDSDNCLDZCQUFBQTtvQkFDQTZCLGtDQUFBQTtvQkFDQUUsa0NBQUFBO29CQUNBRSxvQ0FBQUE7b0JBQ0FDLHFDQUFBQTs7WUFFSjs7O1dBckVJbkM7RUFBcUNxQyxjQUFZO0FBdUVyRCxpQkF2RUlyQyw4QkF1RUdzQyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUN4QyxpREFFVHlDLDZDQUFxQyxFQUMxQkMsZ0JBQVMsRUFLaENDLDJCQUFjLEVBR00vQyxzQ0FJQUUsc0NBSUFDIn0=