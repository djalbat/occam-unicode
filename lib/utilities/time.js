"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "defer", {
    enumerable: true,
    get: function() {
        return defer;
    }
});
function defer(func) {
    var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var timeout = setTimeout(func, delay);
    return timeout;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGltZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmVyKGZ1bmMsIGRlbGF5ID0gMCkge1xuICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jLCBkZWxheSk7XG5cbiAgcmV0dXJuIHRpbWVvdXQ7XG59XG4iXSwibmFtZXMiOlsiZGVmZXIiLCJmdW5jIiwiZGVsYXkiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRWdCQTs7O2VBQUFBOzs7QUFBVCxTQUFTQSxNQUFNQyxJQUFJO1FBQUVDLFFBQUFBLGlFQUFRO0lBQ2xDLElBQU1DLFVBQVVDLFdBQVdILE1BQU1DO0lBRWpDLE9BQU9DO0FBQ1QifQ==