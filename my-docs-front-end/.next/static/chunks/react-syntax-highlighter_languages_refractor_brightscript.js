"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_brightscript"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/brightscript.js":
/*!*****************************************************!*\
  !*** ./node_modules/refractor/lang/brightscript.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nmodule.exports = brightscript;\nbrightscript.displayName = \"brightscript\";\nbrightscript.aliases = [];\nfunction brightscript(Prism) {\n    Prism.languages.brightscript = {\n        comment: /(?:\\brem|').*/i,\n        \"directive-statement\": {\n            pattern: /(^[\\t ]*)#(?:const|else(?:[\\t ]+if)?|end[\\t ]+if|error|if).*/im,\n            lookbehind: true,\n            alias: \"property\",\n            inside: {\n                \"error-message\": {\n                    pattern: /(^#error).+/,\n                    lookbehind: true\n                },\n                directive: {\n                    pattern: /^#(?:const|else(?:[\\t ]+if)?|end[\\t ]+if|error|if)/,\n                    alias: \"keyword\"\n                },\n                expression: {\n                    pattern: /[\\s\\S]+/,\n                    inside: null // see below\n                }\n            }\n        },\n        property: {\n            pattern: /([\\r\\n{,][\\t ]*)(?:(?!\\d)\\w+|\"(?:[^\"\\r\\n]|\"\")*\"(?!\"))(?=[ \\t]*:)/,\n            lookbehind: true,\n            greedy: true\n        },\n        string: {\n            pattern: /\"(?:[^\"\\r\\n]|\"\")*\"(?!\")/,\n            greedy: true\n        },\n        \"class-name\": {\n            pattern: /(\\bAs[\\t ]+)\\w+/i,\n            lookbehind: true\n        },\n        keyword: /\\b(?:As|Dim|Each|Else|Elseif|End|Exit|For|Function|Goto|If|In|Print|Return|Step|Stop|Sub|Then|To|While)\\b/i,\n        boolean: /\\b(?:false|true)\\b/i,\n        function: /\\b(?!\\d)\\w+(?=[\\t ]*\\()/,\n        number: /(?:\\b\\d+(?:\\.\\d+)?(?:[ed][+-]\\d+)?|&h[a-f\\d]+)\\b[%&!#]?/i,\n        operator: /--|\\+\\+|>>=?|<<=?|<>|[-+*/\\\\<>]=?|[:^=?]|\\b(?:and|mod|not|or)\\b/i,\n        punctuation: /[.,;()[\\]{}]/,\n        constant: /\\b(?:LINE_NUM)\\b/i\n    };\n    Prism.languages.brightscript[\"directive-statement\"].inside.expression.inside = Prism.languages.brightscript;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9icmlnaHRzY3JpcHQuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQUEsT0FBT0MsT0FBTyxHQUFHQztBQUNqQkEsYUFBYUMsV0FBVyxHQUFHO0FBQzNCRCxhQUFhRSxPQUFPLEdBQUcsRUFBRTtBQUN6QixTQUFTRixhQUFhRyxLQUFLO0lBQ3pCQSxNQUFNQyxTQUFTLENBQUNKLFlBQVksR0FBRztRQUM3QkssU0FBUztRQUNULHVCQUF1QjtZQUNyQkMsU0FBUztZQUNUQyxZQUFZO1lBQ1pDLE9BQU87WUFDUEMsUUFBUTtnQkFDTixpQkFBaUI7b0JBQ2ZILFNBQVM7b0JBQ1RDLFlBQVk7Z0JBQ2Q7Z0JBQ0FHLFdBQVc7b0JBQ1RKLFNBQVM7b0JBQ1RFLE9BQU87Z0JBQ1Q7Z0JBQ0FHLFlBQVk7b0JBQ1ZMLFNBQVM7b0JBQ1RHLFFBQVEsS0FBSyxZQUFZO2dCQUMzQjtZQUNGO1FBQ0Y7UUFDQUcsVUFBVTtZQUNSTixTQUNFO1lBQ0ZDLFlBQVk7WUFDWk0sUUFBUTtRQUNWO1FBQ0FDLFFBQVE7WUFDTlIsU0FBUztZQUNUTyxRQUFRO1FBQ1Y7UUFDQSxjQUFjO1lBQ1pQLFNBQVM7WUFDVEMsWUFBWTtRQUNkO1FBQ0FRLFNBQ0U7UUFDRkMsU0FBUztRQUNUQyxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsVUFDRTtRQUNGQyxhQUFhO1FBQ2JDLFVBQVU7SUFDWjtJQUNBbEIsTUFBTUMsU0FBUyxDQUFDSixZQUFZLENBQUMsc0JBQXNCLENBQUNTLE1BQU0sQ0FBQ0UsVUFBVSxDQUFDRixNQUFNLEdBQzFFTixNQUFNQyxTQUFTLENBQUNKLFlBQVk7QUFDaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2JyaWdodHNjcmlwdC5qcz83YzQyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJyaWdodHNjcmlwdFxuYnJpZ2h0c2NyaXB0LmRpc3BsYXlOYW1lID0gJ2JyaWdodHNjcmlwdCdcbmJyaWdodHNjcmlwdC5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGJyaWdodHNjcmlwdChQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuYnJpZ2h0c2NyaXB0ID0ge1xuICAgIGNvbW1lbnQ6IC8oPzpcXGJyZW18JykuKi9pLFxuICAgICdkaXJlY3RpdmUtc3RhdGVtZW50Jzoge1xuICAgICAgcGF0dGVybjogLyheW1xcdCBdKikjKD86Y29uc3R8ZWxzZSg/OltcXHQgXStpZik/fGVuZFtcXHQgXStpZnxlcnJvcnxpZikuKi9pbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ3Byb3BlcnR5JyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAnZXJyb3ItbWVzc2FnZSc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKF4jZXJyb3IpLisvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZGlyZWN0aXZlOiB7XG4gICAgICAgICAgcGF0dGVybjogL14jKD86Y29uc3R8ZWxzZSg/OltcXHQgXStpZik/fGVuZFtcXHQgXStpZnxlcnJvcnxpZikvLFxuICAgICAgICAgIGFsaWFzOiAna2V5d29yZCdcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgIHBhdHRlcm46IC9bXFxzXFxTXSsvLFxuICAgICAgICAgIGluc2lkZTogbnVsbCAvLyBzZWUgYmVsb3dcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcHJvcGVydHk6IHtcbiAgICAgIHBhdHRlcm46XG4gICAgICAgIC8oW1xcclxcbnssXVtcXHQgXSopKD86KD8hXFxkKVxcdyt8XCIoPzpbXlwiXFxyXFxuXXxcIlwiKSpcIig/IVwiKSkoPz1bIFxcdF0qOikvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvXCIoPzpbXlwiXFxyXFxuXXxcIlwiKSpcIig/IVwiKS8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgICdjbGFzcy1uYW1lJzoge1xuICAgICAgcGF0dGVybjogLyhcXGJBc1tcXHQgXSspXFx3Ky9pLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAga2V5d29yZDpcbiAgICAgIC9cXGIoPzpBc3xEaW18RWFjaHxFbHNlfEVsc2VpZnxFbmR8RXhpdHxGb3J8RnVuY3Rpb258R290b3xJZnxJbnxQcmludHxSZXR1cm58U3RlcHxTdG9wfFN1YnxUaGVufFRvfFdoaWxlKVxcYi9pLFxuICAgIGJvb2xlYW46IC9cXGIoPzpmYWxzZXx0cnVlKVxcYi9pLFxuICAgIGZ1bmN0aW9uOiAvXFxiKD8hXFxkKVxcdysoPz1bXFx0IF0qXFwoKS8sXG4gICAgbnVtYmVyOiAvKD86XFxiXFxkKyg/OlxcLlxcZCspPyg/OltlZF1bKy1dXFxkKyk/fCZoW2EtZlxcZF0rKVxcYlslJiEjXT8vaSxcbiAgICBvcGVyYXRvcjpcbiAgICAgIC8tLXxcXCtcXCt8Pj49P3w8PD0/fDw+fFstKyovXFxcXDw+XT0/fFs6Xj0/XXxcXGIoPzphbmR8bW9kfG5vdHxvcilcXGIvaSxcbiAgICBwdW5jdHVhdGlvbjogL1suLDsoKVtcXF17fV0vLFxuICAgIGNvbnN0YW50OiAvXFxiKD86TElORV9OVU0pXFxiL2lcbiAgfVxuICBQcmlzbS5sYW5ndWFnZXMuYnJpZ2h0c2NyaXB0WydkaXJlY3RpdmUtc3RhdGVtZW50J10uaW5zaWRlLmV4cHJlc3Npb24uaW5zaWRlID1cbiAgICBQcmlzbS5sYW5ndWFnZXMuYnJpZ2h0c2NyaXB0XG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImJyaWdodHNjcmlwdCIsImRpc3BsYXlOYW1lIiwiYWxpYXNlcyIsIlByaXNtIiwibGFuZ3VhZ2VzIiwiY29tbWVudCIsInBhdHRlcm4iLCJsb29rYmVoaW5kIiwiYWxpYXMiLCJpbnNpZGUiLCJkaXJlY3RpdmUiLCJleHByZXNzaW9uIiwicHJvcGVydHkiLCJncmVlZHkiLCJzdHJpbmciLCJrZXl3b3JkIiwiYm9vbGVhbiIsImZ1bmN0aW9uIiwibnVtYmVyIiwib3BlcmF0b3IiLCJwdW5jdHVhdGlvbiIsImNvbnN0YW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/brightscript.js\n"));

/***/ })

}]);