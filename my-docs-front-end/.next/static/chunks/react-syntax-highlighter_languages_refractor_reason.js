"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_reason"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/reason.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/reason.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nmodule.exports = reason;\nreason.displayName = \"reason\";\nreason.aliases = [];\nfunction reason(Prism) {\n    Prism.languages.reason = Prism.languages.extend(\"clike\", {\n        string: {\n            pattern: /\"(?:\\\\(?:\\r\\n|[\\s\\S])|[^\\\\\\r\\n\"])*\"/,\n            greedy: true\n        },\n        // 'class-name' must be matched *after* 'constructor' defined below\n        \"class-name\": /\\b[A-Z]\\w*/,\n        keyword: /\\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\\b/,\n        operator: /\\.{3}|:[:=]|\\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\\-*\\/]\\.?|\\b(?:asr|land|lor|lsl|lsr|lxor|mod)\\b/\n    });\n    Prism.languages.insertBefore(\"reason\", \"class-name\", {\n        char: {\n            pattern: /'(?:\\\\x[\\da-f]{2}|\\\\o[0-3][0-7][0-7]|\\\\\\d{3}|\\\\.|[^'\\\\\\r\\n])'/,\n            greedy: true\n        },\n        // Negative look-ahead prevents from matching things like String.capitalize\n        constructor: /\\b[A-Z]\\w*\\b(?!\\s*\\.)/,\n        label: {\n            pattern: /\\b[a-z]\\w*(?=::)/,\n            alias: \"symbol\"\n        }\n    }) // We can't match functions property, so let's not even try.\n    ;\n    delete Prism.languages.reason.function;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9yZWFzb24uanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQUEsT0FBT0MsT0FBTyxHQUFHQztBQUNqQkEsT0FBT0MsV0FBVyxHQUFHO0FBQ3JCRCxPQUFPRSxPQUFPLEdBQUcsRUFBRTtBQUNuQixTQUFTRixPQUFPRyxLQUFLO0lBQ25CQSxNQUFNQyxTQUFTLENBQUNKLE1BQU0sR0FBR0csTUFBTUMsU0FBUyxDQUFDQyxNQUFNLENBQUMsU0FBUztRQUN2REMsUUFBUTtZQUNOQyxTQUFTO1lBQ1RDLFFBQVE7UUFDVjtRQUNBLG1FQUFtRTtRQUNuRSxjQUFjO1FBQ2RDLFNBQ0U7UUFDRkMsVUFDRTtJQUNKO0lBQ0FQLE1BQU1DLFNBQVMsQ0FBQ08sWUFBWSxDQUFDLFVBQVUsY0FBYztRQUNuREMsTUFBTTtZQUNKTCxTQUFTO1lBQ1RDLFFBQVE7UUFDVjtRQUNBLDJFQUEyRTtRQUMzRUssYUFBYTtRQUNiQyxPQUFPO1lBQ0xQLFNBQVM7WUFDVFEsT0FBTztRQUNUO0lBQ0YsR0FBRyw0REFBNEQ7O0lBQy9ELE9BQU9aLE1BQU1DLFNBQVMsQ0FBQ0osTUFBTSxDQUFDZ0IsUUFBUTtBQUN4QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvcmVhc29uLmpzPzUyNzUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcmVhc29uXG5yZWFzb24uZGlzcGxheU5hbWUgPSAncmVhc29uJ1xucmVhc29uLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gcmVhc29uKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5yZWFzb24gPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC9cIig/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfFteXFxcXFxcclxcblwiXSkqXCIvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICAvLyAnY2xhc3MtbmFtZScgbXVzdCBiZSBtYXRjaGVkICphZnRlciogJ2NvbnN0cnVjdG9yJyBkZWZpbmVkIGJlbG93XG4gICAgJ2NsYXNzLW5hbWUnOiAvXFxiW0EtWl1cXHcqLyxcbiAgICBrZXl3b3JkOlxuICAgICAgL1xcYig/OmFuZHxhc3xhc3NlcnR8YmVnaW58Y2xhc3N8Y29uc3RyYWludHxkb3xkb25lfGRvd250b3xlbHNlfGVuZHxleGNlcHRpb258ZXh0ZXJuYWx8Zm9yfGZ1bnxmdW5jdGlvbnxmdW5jdG9yfGlmfGlufGluY2x1ZGV8aW5oZXJpdHxpbml0aWFsaXplcnxsYXp5fGxldHxtZXRob2R8bW9kdWxlfG11dGFibGV8bmV3fG5vbnJlY3xvYmplY3R8b2Z8b3Blbnxvcnxwcml2YXRlfHJlY3xzaWd8c3RydWN0fHN3aXRjaHx0aGVufHRvfHRyeXx0eXBlfHZhbHx2aXJ0dWFsfHdoZW58d2hpbGV8d2l0aClcXGIvLFxuICAgIG9wZXJhdG9yOlxuICAgICAgL1xcLnszfXw6Wzo9XXxcXHw+fC0+fD0oPzo9PT98Pik/fDw9P3w+PT98W3xePycjIX5gXXxbK1xcLSpcXC9dXFwuP3xcXGIoPzphc3J8bGFuZHxsb3J8bHNsfGxzcnxseG9yfG1vZClcXGIvXG4gIH0pXG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3JlYXNvbicsICdjbGFzcy1uYW1lJywge1xuICAgIGNoYXI6IHtcbiAgICAgIHBhdHRlcm46IC8nKD86XFxcXHhbXFxkYS1mXXsyfXxcXFxcb1swLTNdWzAtN11bMC03XXxcXFxcXFxkezN9fFxcXFwufFteJ1xcXFxcXHJcXG5dKScvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICAvLyBOZWdhdGl2ZSBsb29rLWFoZWFkIHByZXZlbnRzIGZyb20gbWF0Y2hpbmcgdGhpbmdzIGxpa2UgU3RyaW5nLmNhcGl0YWxpemVcbiAgICBjb25zdHJ1Y3RvcjogL1xcYltBLVpdXFx3KlxcYig/IVxccypcXC4pLyxcbiAgICBsYWJlbDoge1xuICAgICAgcGF0dGVybjogL1xcYlthLXpdXFx3Kig/PTo6KS8sXG4gICAgICBhbGlhczogJ3N5bWJvbCdcbiAgICB9XG4gIH0pIC8vIFdlIGNhbid0IG1hdGNoIGZ1bmN0aW9ucyBwcm9wZXJ0eSwgc28gbGV0J3Mgbm90IGV2ZW4gdHJ5LlxuICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLnJlYXNvbi5mdW5jdGlvblxufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZWFzb24iLCJkaXNwbGF5TmFtZSIsImFsaWFzZXMiLCJQcmlzbSIsImxhbmd1YWdlcyIsImV4dGVuZCIsInN0cmluZyIsInBhdHRlcm4iLCJncmVlZHkiLCJrZXl3b3JkIiwib3BlcmF0b3IiLCJpbnNlcnRCZWZvcmUiLCJjaGFyIiwiY29uc3RydWN0b3IiLCJsYWJlbCIsImFsaWFzIiwiZnVuY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/reason.js\n"));

/***/ })

}]);