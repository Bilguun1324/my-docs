"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_falselang"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/false.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/false.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nmodule.exports = $false;\n$false.displayName = \"$false\";\n$false.aliases = [];\nfunction $false(Prism) {\n    ;\n    (function(Prism) {\n        /**\n     * Based on the manual by Wouter van Oortmerssen.\n     *\n     * @see {@link https://github.com/PrismJS/prism/issues/2801#issue-829717504}\n     */ Prism.languages[\"false\"] = {\n            comment: {\n                pattern: /\\{[^}]*\\}/\n            },\n            string: {\n                pattern: /\"[^\"]*\"/,\n                greedy: true\n            },\n            \"character-code\": {\n                pattern: /'(?:[^\\r]|\\r\\n?)/,\n                alias: \"number\"\n            },\n            \"assembler-code\": {\n                pattern: /\\d+`/,\n                alias: \"important\"\n            },\n            number: /\\d+/,\n            operator: /[-!#$%&'*+,./:;=>?@\\\\^_`|~ßø]/,\n            punctuation: /\\[|\\]/,\n            variable: /[a-z]/,\n            \"non-standard\": {\n                pattern: /[()<BDO®]/,\n                alias: \"bold\"\n            }\n        };\n    })(Prism);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9mYWxzZS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxPQUFPQyxPQUFPLEdBQUdDO0FBQ2pCQSxPQUFPQyxXQUFXLEdBQUc7QUFDckJELE9BQU9FLE9BQU8sR0FBRyxFQUFFO0FBQ25CLFNBQVNGLE9BQU9HLEtBQUs7O0lBQ2pCLFVBQVVBLEtBQUs7UUFDZjs7OztLQUlDLEdBQ0RBLE1BQU1DLFNBQVMsQ0FBQyxRQUFRLEdBQUc7WUFDekJDLFNBQVM7Z0JBQ1BDLFNBQVM7WUFDWDtZQUNBQyxRQUFRO2dCQUNORCxTQUFTO2dCQUNURSxRQUFRO1lBQ1Y7WUFDQSxrQkFBa0I7Z0JBQ2hCRixTQUFTO2dCQUNURyxPQUFPO1lBQ1Q7WUFDQSxrQkFBa0I7Z0JBQ2hCSCxTQUFTO2dCQUNURyxPQUFPO1lBQ1Q7WUFDQUMsUUFBUTtZQUNSQyxVQUFVO1lBQ1ZDLGFBQWE7WUFDYkMsVUFBVTtZQUNWLGdCQUFnQjtnQkFDZFAsU0FBUztnQkFDVEcsT0FBTztZQUNUO1FBQ0Y7SUFDRixHQUFHTjtBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9mYWxzZS5qcz8xYWIzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9ICRmYWxzZVxuJGZhbHNlLmRpc3BsYXlOYW1lID0gJyRmYWxzZSdcbiRmYWxzZS5hbGlhc2VzID0gW11cbmZ1bmN0aW9uICRmYWxzZShQcmlzbSkge1xuICA7KGZ1bmN0aW9uIChQcmlzbSkge1xuICAgIC8qKlxuICAgICAqIEJhc2VkIG9uIHRoZSBtYW51YWwgYnkgV291dGVyIHZhbiBPb3J0bWVyc3Nlbi5cbiAgICAgKlxuICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9QcmlzbUpTL3ByaXNtL2lzc3Vlcy8yODAxI2lzc3VlLTgyOTcxNzUwNH1cbiAgICAgKi9cbiAgICBQcmlzbS5sYW5ndWFnZXNbJ2ZhbHNlJ10gPSB7XG4gICAgICBjb21tZW50OiB7XG4gICAgICAgIHBhdHRlcm46IC9cXHtbXn1dKlxcfS9cbiAgICAgIH0sXG4gICAgICBzdHJpbmc6IHtcbiAgICAgICAgcGF0dGVybjogL1wiW15cIl0qXCIvLFxuICAgICAgICBncmVlZHk6IHRydWVcbiAgICAgIH0sXG4gICAgICAnY2hhcmFjdGVyLWNvZGUnOiB7XG4gICAgICAgIHBhdHRlcm46IC8nKD86W15cXHJdfFxcclxcbj8pLyxcbiAgICAgICAgYWxpYXM6ICdudW1iZXInXG4gICAgICB9LFxuICAgICAgJ2Fzc2VtYmxlci1jb2RlJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXFxkK2AvLFxuICAgICAgICBhbGlhczogJ2ltcG9ydGFudCdcbiAgICAgIH0sXG4gICAgICBudW1iZXI6IC9cXGQrLyxcbiAgICAgIG9wZXJhdG9yOiAvWy0hIyQlJicqKywuLzo7PT4/QFxcXFxeX2B8fsOfw7hdLyxcbiAgICAgIHB1bmN0dWF0aW9uOiAvXFxbfFxcXS8sXG4gICAgICB2YXJpYWJsZTogL1thLXpdLyxcbiAgICAgICdub24tc3RhbmRhcmQnOiB7XG4gICAgICAgIHBhdHRlcm46IC9bKCk8QkRPwq5dLyxcbiAgICAgICAgYWxpYXM6ICdib2xkJ1xuICAgICAgfVxuICAgIH1cbiAgfSkoUHJpc20pXG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIiRmYWxzZSIsImRpc3BsYXlOYW1lIiwiYWxpYXNlcyIsIlByaXNtIiwibGFuZ3VhZ2VzIiwiY29tbWVudCIsInBhdHRlcm4iLCJzdHJpbmciLCJncmVlZHkiLCJhbGlhcyIsIm51bWJlciIsIm9wZXJhdG9yIiwicHVuY3R1YXRpb24iLCJ2YXJpYWJsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/false.js\n"));

/***/ })

}]);