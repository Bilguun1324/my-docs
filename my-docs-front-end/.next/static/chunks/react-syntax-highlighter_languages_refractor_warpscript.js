"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_warpscript"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/warpscript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/warpscript.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nmodule.exports = warpscript;\nwarpscript.displayName = \"warpscript\";\nwarpscript.aliases = [];\nfunction warpscript(Prism) {\n    Prism.languages.warpscript = {\n        comment: /#.*|\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\//,\n        string: {\n            pattern: /\"(?:[^\"\\\\\\r\\n]|\\\\.)*\"|'(?:[^'\\\\\\r\\n]|\\\\.)*'|<'(?:[^\\\\']|'(?!>)|\\\\.)*'>/,\n            greedy: true\n        },\n        variable: /\\$\\S+/,\n        macro: {\n            pattern: /@\\S+/,\n            alias: \"property\"\n        },\n        // WarpScript doesn't have any keywords, these are all functions under the control category\n        // https://www.warp10.io/tags/control\n        keyword: /\\b(?:BREAK|CHECKMACRO|CONTINUE|CUDF|DEFINED|DEFINEDMACRO|EVAL|FAIL|FOR|FOREACH|FORSTEP|IFT|IFTE|MSGFAIL|NRETURN|RETHROW|RETURN|SWITCH|TRY|UDF|UNTIL|WHILE)\\b/,\n        number: /[+-]?\\b(?:NaN|Infinity|\\d+(?:\\.\\d*)?(?:[Ee][+-]?\\d+)?|0x[\\da-fA-F]+|0b[01]+)\\b/,\n        boolean: /\\b(?:F|T|false|true)\\b/,\n        punctuation: /<%|%>|[{}[\\]()]/,\n        // Some operators from the \"operators\" category\n        // https://www.warp10.io/tags/operators\n        operator: /==|&&?|\\|\\|?|\\*\\*?|>>>?|<<|[<>!~]=?|[-/%^]|\\+!?|\\b(?:AND|NOT|OR)\\b/\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy93YXJwc2NyaXB0LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUFBLE9BQU9DLE9BQU8sR0FBR0M7QUFDakJBLFdBQVdDLFdBQVcsR0FBRztBQUN6QkQsV0FBV0UsT0FBTyxHQUFHLEVBQUU7QUFDdkIsU0FBU0YsV0FBV0csS0FBSztJQUN2QkEsTUFBTUMsU0FBUyxDQUFDSixVQUFVLEdBQUc7UUFDM0JLLFNBQVM7UUFDVEMsUUFBUTtZQUNOQyxTQUNFO1lBQ0ZDLFFBQVE7UUFDVjtRQUNBQyxVQUFVO1FBQ1ZDLE9BQU87WUFDTEgsU0FBUztZQUNUSSxPQUFPO1FBQ1Q7UUFDQSwyRkFBMkY7UUFDM0YscUNBQXFDO1FBQ3JDQyxTQUNFO1FBQ0ZDLFFBQ0U7UUFDRkMsU0FBUztRQUNUQyxhQUFhO1FBQ2IsK0NBQStDO1FBQy9DLHVDQUF1QztRQUN2Q0MsVUFDRTtJQUNKO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3dhcnBzY3JpcHQuanM/YTY2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB3YXJwc2NyaXB0XG53YXJwc2NyaXB0LmRpc3BsYXlOYW1lID0gJ3dhcnBzY3JpcHQnXG53YXJwc2NyaXB0LmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gd2FycHNjcmlwdChQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMud2FycHNjcmlwdCA9IHtcbiAgICBjb21tZW50OiAvIy4qfFxcL1xcLy4qfFxcL1xcKltcXHNcXFNdKj9cXCpcXC8vLFxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjpcbiAgICAgICAgL1wiKD86W15cIlxcXFxcXHJcXG5dfFxcXFwuKSpcInwnKD86W14nXFxcXFxcclxcbl18XFxcXC4pKid8PCcoPzpbXlxcXFwnXXwnKD8hPil8XFxcXC4pKic+LyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgdmFyaWFibGU6IC9cXCRcXFMrLyxcbiAgICBtYWNybzoge1xuICAgICAgcGF0dGVybjogL0BcXFMrLyxcbiAgICAgIGFsaWFzOiAncHJvcGVydHknXG4gICAgfSxcbiAgICAvLyBXYXJwU2NyaXB0IGRvZXNuJ3QgaGF2ZSBhbnkga2V5d29yZHMsIHRoZXNlIGFyZSBhbGwgZnVuY3Rpb25zIHVuZGVyIHRoZSBjb250cm9sIGNhdGVnb3J5XG4gICAgLy8gaHR0cHM6Ly93d3cud2FycDEwLmlvL3RhZ3MvY29udHJvbFxuICAgIGtleXdvcmQ6XG4gICAgICAvXFxiKD86QlJFQUt8Q0hFQ0tNQUNST3xDT05USU5VRXxDVURGfERFRklORUR8REVGSU5FRE1BQ1JPfEVWQUx8RkFJTHxGT1J8Rk9SRUFDSHxGT1JTVEVQfElGVHxJRlRFfE1TR0ZBSUx8TlJFVFVSTnxSRVRIUk9XfFJFVFVSTnxTV0lUQ0h8VFJZfFVERnxVTlRJTHxXSElMRSlcXGIvLFxuICAgIG51bWJlcjpcbiAgICAgIC9bKy1dP1xcYig/Ok5hTnxJbmZpbml0eXxcXGQrKD86XFwuXFxkKik/KD86W0VlXVsrLV0/XFxkKyk/fDB4W1xcZGEtZkEtRl0rfDBiWzAxXSspXFxiLyxcbiAgICBib29sZWFuOiAvXFxiKD86RnxUfGZhbHNlfHRydWUpXFxiLyxcbiAgICBwdW5jdHVhdGlvbjogLzwlfCU+fFt7fVtcXF0oKV0vLFxuICAgIC8vIFNvbWUgb3BlcmF0b3JzIGZyb20gdGhlIFwib3BlcmF0b3JzXCIgY2F0ZWdvcnlcbiAgICAvLyBodHRwczovL3d3dy53YXJwMTAuaW8vdGFncy9vcGVyYXRvcnNcbiAgICBvcGVyYXRvcjpcbiAgICAgIC89PXwmJj98XFx8XFx8P3xcXCpcXCo/fD4+Pj98PDx8Wzw+IX5dPT98Wy0vJV5dfFxcKyE/fFxcYig/OkFORHxOT1R8T1IpXFxiL1xuICB9XG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIndhcnBzY3JpcHQiLCJkaXNwbGF5TmFtZSIsImFsaWFzZXMiLCJQcmlzbSIsImxhbmd1YWdlcyIsImNvbW1lbnQiLCJzdHJpbmciLCJwYXR0ZXJuIiwiZ3JlZWR5IiwidmFyaWFibGUiLCJtYWNybyIsImFsaWFzIiwia2V5d29yZCIsIm51bWJlciIsImJvb2xlYW4iLCJwdW5jdHVhdGlvbiIsIm9wZXJhdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/warpscript.js\n"));

/***/ })

}]);