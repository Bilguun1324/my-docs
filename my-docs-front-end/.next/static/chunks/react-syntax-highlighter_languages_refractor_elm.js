"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_elm"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/elm.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/elm.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nmodule.exports = elm;\nelm.displayName = \"elm\";\nelm.aliases = [];\nfunction elm(Prism) {\n    Prism.languages.elm = {\n        comment: /--.*|\\{-[\\s\\S]*?-\\}/,\n        char: {\n            pattern: /'(?:[^\\\\'\\r\\n]|\\\\(?:[abfnrtv\\\\']|\\d+|x[0-9a-fA-F]+|u\\{[0-9a-fA-F]+\\}))'/,\n            greedy: true\n        },\n        string: [\n            {\n                // Multiline strings are wrapped in triple \". Quotes may appear unescaped.\n                pattern: /\"\"\"[\\s\\S]*?\"\"\"/,\n                greedy: true\n            },\n            {\n                pattern: /\"(?:[^\\\\\"\\r\\n]|\\\\.)*\"/,\n                greedy: true\n            }\n        ],\n        \"import-statement\": {\n            // The imported or hidden names are not included in this import\n            // statement. This is because we want to highlight those exactly like\n            // we do for the names in the program.\n            pattern: /(^[\\t ]*)import\\s+[A-Z]\\w*(?:\\.[A-Z]\\w*)*(?:\\s+as\\s+(?:[A-Z]\\w*)(?:\\.[A-Z]\\w*)*)?(?:\\s+exposing\\s+)?/m,\n            lookbehind: true,\n            inside: {\n                keyword: /\\b(?:as|exposing|import)\\b/\n            }\n        },\n        keyword: /\\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\\b/,\n        // These are builtin variables only. Constructors are highlighted later as a constant.\n        builtin: /\\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\\b/,\n        // decimal integers and floating point numbers | hexadecimal integers\n        number: /\\b(?:\\d+(?:\\.\\d+)?(?:e[+-]?\\d+)?|0x[0-9a-f]+)\\b/i,\n        // Most of this is needed because of the meaning of a single '.'.\n        // If it stands alone freely, it is the function composition.\n        // It may also be a separator between a module name and an identifier => no\n        // operator. If it comes together with other special characters it is an\n        // operator too.\n        // Valid operator characters in 0.18: +-/*=.$<>:&|^?%#@~!\n        // Ref: https://groups.google.com/forum/#!msg/elm-dev/0AHSnDdkSkQ/E0SVU70JEQAJ\n        operator: /\\s\\.\\s|[+\\-/*=.$<>:&|^?%#@~!]{2,}|[+\\-/*=$<>:&|^?%#@~!]/,\n        // In Elm, nearly everything is a variable, do not highlight these.\n        hvariable: /\\b(?:[A-Z]\\w*\\.)*[a-z]\\w*\\b/,\n        constant: /\\b(?:[A-Z]\\w*\\.)*[A-Z]\\w*\\b/,\n        punctuation: /[{}[\\]|(),.:]/\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9lbG0uanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQUEsT0FBT0MsT0FBTyxHQUFHQztBQUNqQkEsSUFBSUMsV0FBVyxHQUFHO0FBQ2xCRCxJQUFJRSxPQUFPLEdBQUcsRUFBRTtBQUNoQixTQUFTRixJQUFJRyxLQUFLO0lBQ2hCQSxNQUFNQyxTQUFTLENBQUNKLEdBQUcsR0FBRztRQUNwQkssU0FBUztRQUNUQyxNQUFNO1lBQ0pDLFNBQ0U7WUFDRkMsUUFBUTtRQUNWO1FBQ0FDLFFBQVE7WUFDTjtnQkFDRSwwRUFBMEU7Z0JBQzFFRixTQUFTO2dCQUNUQyxRQUFRO1lBQ1Y7WUFDQTtnQkFDRUQsU0FBUztnQkFDVEMsUUFBUTtZQUNWO1NBQ0Q7UUFDRCxvQkFBb0I7WUFDbEIsK0RBQStEO1lBQy9ELHFFQUFxRTtZQUNyRSxzQ0FBc0M7WUFDdENELFNBQ0U7WUFDRkcsWUFBWTtZQUNaQyxRQUFRO2dCQUNOQyxTQUFTO1lBQ1g7UUFDRjtRQUNBQSxTQUNFO1FBQ0Ysc0ZBQXNGO1FBQ3RGQyxTQUNFO1FBQ0YscUVBQXFFO1FBQ3JFQyxRQUFRO1FBQ1IsaUVBQWlFO1FBQ2pFLDZEQUE2RDtRQUM3RCwyRUFBMkU7UUFDM0Usd0VBQXdFO1FBQ3hFLGdCQUFnQjtRQUNoQix5REFBeUQ7UUFDekQsOEVBQThFO1FBQzlFQyxVQUFVO1FBQ1YsbUVBQW1FO1FBQ25FQyxXQUFXO1FBQ1hDLFVBQVU7UUFDVkMsYUFBYTtJQUNmO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2VsbS5qcz9lY2YxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVsbVxuZWxtLmRpc3BsYXlOYW1lID0gJ2VsbSdcbmVsbS5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGVsbShQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuZWxtID0ge1xuICAgIGNvbW1lbnQ6IC8tLS4qfFxcey1bXFxzXFxTXSo/LVxcfS8sXG4gICAgY2hhcjoge1xuICAgICAgcGF0dGVybjpcbiAgICAgICAgLycoPzpbXlxcXFwnXFxyXFxuXXxcXFxcKD86W2FiZm5ydHZcXFxcJ118XFxkK3x4WzAtOWEtZkEtRl0rfHVcXHtbMC05YS1mQS1GXStcXH0pKScvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICBzdHJpbmc6IFtcbiAgICAgIHtcbiAgICAgICAgLy8gTXVsdGlsaW5lIHN0cmluZ3MgYXJlIHdyYXBwZWQgaW4gdHJpcGxlIFwiLiBRdW90ZXMgbWF5IGFwcGVhciB1bmVzY2FwZWQuXG4gICAgICAgIHBhdHRlcm46IC9cIlwiXCJbXFxzXFxTXSo/XCJcIlwiLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvXCIoPzpbXlxcXFxcIlxcclxcbl18XFxcXC4pKlwiLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICAnaW1wb3J0LXN0YXRlbWVudCc6IHtcbiAgICAgIC8vIFRoZSBpbXBvcnRlZCBvciBoaWRkZW4gbmFtZXMgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGlzIGltcG9ydFxuICAgICAgLy8gc3RhdGVtZW50LiBUaGlzIGlzIGJlY2F1c2Ugd2Ugd2FudCB0byBoaWdobGlnaHQgdGhvc2UgZXhhY3RseSBsaWtlXG4gICAgICAvLyB3ZSBkbyBmb3IgdGhlIG5hbWVzIGluIHRoZSBwcm9ncmFtLlxuICAgICAgcGF0dGVybjpcbiAgICAgICAgLyheW1xcdCBdKilpbXBvcnRcXHMrW0EtWl1cXHcqKD86XFwuW0EtWl1cXHcqKSooPzpcXHMrYXNcXHMrKD86W0EtWl1cXHcqKSg/OlxcLltBLVpdXFx3KikqKT8oPzpcXHMrZXhwb3NpbmdcXHMrKT8vbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAga2V5d29yZDogL1xcYig/OmFzfGV4cG9zaW5nfGltcG9ydClcXGIvXG4gICAgICB9XG4gICAgfSxcbiAgICBrZXl3b3JkOlxuICAgICAgL1xcYig/OmFsaWFzfGFzfGNhc2V8ZWxzZXxleHBvc2luZ3xpZnxpbnxpbmZpeGx8aW5maXhyfGxldHxtb2R1bGV8b2Z8dGhlbnx0eXBlKVxcYi8sXG4gICAgLy8gVGhlc2UgYXJlIGJ1aWx0aW4gdmFyaWFibGVzIG9ubHkuIENvbnN0cnVjdG9ycyBhcmUgaGlnaGxpZ2h0ZWQgbGF0ZXIgYXMgYSBjb25zdGFudC5cbiAgICBidWlsdGluOlxuICAgICAgL1xcYig/OmFic3xhY29zfGFsd2F5c3xhc2lufGF0YW58YXRhbjJ8Y2VpbGluZ3xjbGFtcHxjb21wYXJlfGNvc3xjdXJyeXxkZWdyZWVzfGV8ZmxpcHxmbG9vcnxmcm9tUG9sYXJ8aWRlbnRpdHl8aXNJbmZpbml0ZXxpc05hTnxsb2dCYXNlfG1heHxtaW58bmVnYXRlfG5ldmVyfG5vdHxwaXxyYWRpYW5zfHJlbXxyb3VuZHxzaW58c3FydHx0YW58dG9GbG9hdHx0b1BvbGFyfHRvU3RyaW5nfHRydW5jYXRlfHR1cm5zfHVuY3Vycnl8eG9yKVxcYi8sXG4gICAgLy8gZGVjaW1hbCBpbnRlZ2VycyBhbmQgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB8IGhleGFkZWNpbWFsIGludGVnZXJzXG4gICAgbnVtYmVyOiAvXFxiKD86XFxkKyg/OlxcLlxcZCspPyg/OmVbKy1dP1xcZCspP3wweFswLTlhLWZdKylcXGIvaSxcbiAgICAvLyBNb3N0IG9mIHRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugb2YgdGhlIG1lYW5pbmcgb2YgYSBzaW5nbGUgJy4nLlxuICAgIC8vIElmIGl0IHN0YW5kcyBhbG9uZSBmcmVlbHksIGl0IGlzIHRoZSBmdW5jdGlvbiBjb21wb3NpdGlvbi5cbiAgICAvLyBJdCBtYXkgYWxzbyBiZSBhIHNlcGFyYXRvciBiZXR3ZWVuIGEgbW9kdWxlIG5hbWUgYW5kIGFuIGlkZW50aWZpZXIgPT4gbm9cbiAgICAvLyBvcGVyYXRvci4gSWYgaXQgY29tZXMgdG9nZXRoZXIgd2l0aCBvdGhlciBzcGVjaWFsIGNoYXJhY3RlcnMgaXQgaXMgYW5cbiAgICAvLyBvcGVyYXRvciB0b28uXG4gICAgLy8gVmFsaWQgb3BlcmF0b3IgY2hhcmFjdGVycyBpbiAwLjE4OiArLS8qPS4kPD46JnxePyUjQH4hXG4gICAgLy8gUmVmOiBodHRwczovL2dyb3Vwcy5nb29nbGUuY29tL2ZvcnVtLyMhbXNnL2VsbS1kZXYvMEFIU25EZGtTa1EvRTBTVlU3MEpFUUFKXG4gICAgb3BlcmF0b3I6IC9cXHNcXC5cXHN8WytcXC0vKj0uJDw+OiZ8Xj8lI0B+IV17Mix9fFsrXFwtLyo9JDw+OiZ8Xj8lI0B+IV0vLFxuICAgIC8vIEluIEVsbSwgbmVhcmx5IGV2ZXJ5dGhpbmcgaXMgYSB2YXJpYWJsZSwgZG8gbm90IGhpZ2hsaWdodCB0aGVzZS5cbiAgICBodmFyaWFibGU6IC9cXGIoPzpbQS1aXVxcdypcXC4pKlthLXpdXFx3KlxcYi8sXG4gICAgY29uc3RhbnQ6IC9cXGIoPzpbQS1aXVxcdypcXC4pKltBLVpdXFx3KlxcYi8sXG4gICAgcHVuY3R1YXRpb246IC9be31bXFxdfCgpLC46XS9cbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJlbG0iLCJkaXNwbGF5TmFtZSIsImFsaWFzZXMiLCJQcmlzbSIsImxhbmd1YWdlcyIsImNvbW1lbnQiLCJjaGFyIiwicGF0dGVybiIsImdyZWVkeSIsInN0cmluZyIsImxvb2tiZWhpbmQiLCJpbnNpZGUiLCJrZXl3b3JkIiwiYnVpbHRpbiIsIm51bWJlciIsIm9wZXJhdG9yIiwiaHZhcmlhYmxlIiwiY29uc3RhbnQiLCJwdW5jdHVhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/elm.js\n"));

/***/ })

}]);