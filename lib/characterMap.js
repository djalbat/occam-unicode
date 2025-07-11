"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get characters () {
        return characters;
    },
    get codePoints () {
        return codePoints;
    },
    get default () {
        return _default;
    }
});
var _highmarkfonts = require("highmark-fonts");
var _default = _highmarkfonts.characterMap;
var characters = Object.keys(_highmarkfonts.characterMap); ///
var codePoints = characters.map(function(character) {
    var codePoint = _highmarkfonts.characterMap[character];
    return codePoint;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFyYWN0ZXJNYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3Rlck1hcCB9IGZyb20gXCJoaWdobWFyay1mb250c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjaGFyYWN0ZXJNYXA7XG5cbmV4cG9ydCBjb25zdCBjaGFyYWN0ZXJzID0gT2JqZWN0LmtleXMoY2hhcmFjdGVyTWFwKTsgIC8vL1xuXG5leHBvcnQgY29uc3QgY29kZVBvaW50cyA9IGNoYXJhY3RlcnMubWFwKChjaGFyYWN0ZXIpID0+IHtcbiAgY29uc3QgY29kZVBvaW50ID0gY2hhcmFjdGVyTWFwW2NoYXJhY3Rlcl07XG5cbiAgcmV0dXJuIGNvZGVQb2ludDtcbn0pO1xuIl0sIm5hbWVzIjpbImNoYXJhY3RlcnMiLCJjb2RlUG9pbnRzIiwiY2hhcmFjdGVyTWFwIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImNoYXJhY3RlciIsImNvZGVQb2ludCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBTWFBO2VBQUFBOztRQUVBQztlQUFBQTs7UUFKYjtlQUFBOzs7NkJBRjZCO0lBRTdCLFdBQWVDLDJCQUFZO0FBRXBCLElBQU1GLGFBQWFHLE9BQU9DLElBQUksQ0FBQ0YsMkJBQVksR0FBSSxHQUFHO0FBRWxELElBQU1ELGFBQWFELFdBQVdLLEdBQUcsQ0FBQyxTQUFDQztJQUN4QyxJQUFNQyxZQUFZTCwyQkFBWSxDQUFDSSxVQUFVO0lBRXpDLE9BQU9DO0FBQ1QifQ==