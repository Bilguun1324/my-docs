"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_jq"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/jq.js":
/*!*******************************************!*\
  !*** ./node_modules/refractor/lang/jq.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nmodule.exports = jq;\njq.displayName = \"jq\";\njq.aliases = [];\nfunction jq(Prism) {\n    ;\n    (function(Prism) {\n        var interpolation = /\\\\\\((?:[^()]|\\([^()]*\\))*\\)/.source;\n        var string = RegExp(/(^|[^\\\\])\"(?:[^\"\\r\\n\\\\]|\\\\[^\\r\\n(]|__)*\"/.source.replace(/__/g, function() {\n            return interpolation;\n        }));\n        var stringInterpolation = {\n            interpolation: {\n                pattern: RegExp(/((?:^|[^\\\\])(?:\\\\{2})*)/.source + interpolation),\n                lookbehind: true,\n                inside: {\n                    content: {\n                        pattern: /^(\\\\\\()[\\s\\S]+(?=\\)$)/,\n                        lookbehind: true,\n                        inside: null // see below\n                    },\n                    punctuation: /^\\\\\\(|\\)$/\n                }\n            }\n        };\n        var jq = Prism.languages.jq = {\n            comment: /#.*/,\n            property: {\n                pattern: RegExp(string.source + /(?=\\s*:(?!:))/.source),\n                lookbehind: true,\n                greedy: true,\n                inside: stringInterpolation\n            },\n            string: {\n                pattern: string,\n                lookbehind: true,\n                greedy: true,\n                inside: stringInterpolation\n            },\n            function: {\n                pattern: /(\\bdef\\s+)[a-z_]\\w+/i,\n                lookbehind: true\n            },\n            variable: /\\B\\$\\w+/,\n            \"property-literal\": {\n                pattern: /\\b[a-z_]\\w*(?=\\s*:(?!:))/i,\n                alias: \"property\"\n            },\n            keyword: /\\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\\b/,\n            boolean: /\\b(?:false|true)\\b/,\n            number: /(?:\\b\\d+\\.|\\B\\.)?\\b\\d+(?:[eE][+-]?\\d+)?\\b/,\n            operator: [\n                {\n                    pattern: /\\|=?/,\n                    alias: \"pipe\"\n                },\n                /\\.\\.|[!=<>]?=|\\?\\/\\/|\\/\\/=?|[-+*/%]=?|[<>?]|\\b(?:and|not|or)\\b/\n            ],\n            \"c-style-function\": {\n                pattern: /\\b[a-z_]\\w*(?=\\s*\\()/i,\n                alias: \"function\"\n            },\n            punctuation: /::|[()\\[\\]{},:;]|\\.(?=\\s*[\\[\\w$])/,\n            dot: {\n                pattern: /\\./,\n                alias: \"important\"\n            }\n        };\n        stringInterpolation.interpolation.inside.content.inside = jq;\n    })(Prism);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9qcS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxPQUFPQyxPQUFPLEdBQUdDO0FBQ2pCQSxHQUFHQyxXQUFXLEdBQUc7QUFDakJELEdBQUdFLE9BQU8sR0FBRyxFQUFFO0FBQ2YsU0FBU0YsR0FBR0csS0FBSzs7SUFDYixVQUFVQSxLQUFLO1FBQ2YsSUFBSUMsZ0JBQWdCLDhCQUE4QkMsTUFBTTtRQUN4RCxJQUFJQyxTQUFTQyxPQUNYLDJDQUEyQ0YsTUFBTSxDQUFDRyxPQUFPLENBQ3ZELE9BQ0E7WUFDRSxPQUFPSjtRQUNUO1FBR0osSUFBSUssc0JBQXNCO1lBQ3hCTCxlQUFlO2dCQUNiTSxTQUFTSCxPQUFPLDBCQUEwQkYsTUFBTSxHQUFHRDtnQkFDbkRPLFlBQVk7Z0JBQ1pDLFFBQVE7b0JBQ05DLFNBQVM7d0JBQ1BILFNBQVM7d0JBQ1RDLFlBQVk7d0JBQ1pDLFFBQVEsS0FBSyxZQUFZO29CQUMzQjtvQkFDQUUsYUFBYTtnQkFDZjtZQUNGO1FBQ0Y7UUFDQSxJQUFJZCxLQUFNRyxNQUFNWSxTQUFTLENBQUNmLEVBQUUsR0FBRztZQUM3QmdCLFNBQVM7WUFDVEMsVUFBVTtnQkFDUlAsU0FBU0gsT0FBT0QsT0FBT0QsTUFBTSxHQUFHLGdCQUFnQkEsTUFBTTtnQkFDdERNLFlBQVk7Z0JBQ1pPLFFBQVE7Z0JBQ1JOLFFBQVFIO1lBQ1Y7WUFDQUgsUUFBUTtnQkFDTkksU0FBU0o7Z0JBQ1RLLFlBQVk7Z0JBQ1pPLFFBQVE7Z0JBQ1JOLFFBQVFIO1lBQ1Y7WUFDQVUsVUFBVTtnQkFDUlQsU0FBUztnQkFDVEMsWUFBWTtZQUNkO1lBQ0FTLFVBQVU7WUFDVixvQkFBb0I7Z0JBQ2xCVixTQUFTO2dCQUNUVyxPQUFPO1lBQ1Q7WUFDQUMsU0FDRTtZQUNGQyxTQUFTO1lBQ1RDLFFBQVE7WUFDUkMsVUFBVTtnQkFDUjtvQkFDRWYsU0FBUztvQkFDVFcsT0FBTztnQkFDVDtnQkFDQTthQUNEO1lBQ0Qsb0JBQW9CO2dCQUNsQlgsU0FBUztnQkFDVFcsT0FBTztZQUNUO1lBQ0FQLGFBQWE7WUFDYlksS0FBSztnQkFDSGhCLFNBQVM7Z0JBQ1RXLE9BQU87WUFDVDtRQUNGO1FBQ0FaLG9CQUFvQkwsYUFBYSxDQUFDUSxNQUFNLENBQUNDLE9BQU8sQ0FBQ0QsTUFBTSxHQUFHWjtJQUM1RCxHQUFHRztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9qcS5qcz9iMWVmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGpxXG5qcS5kaXNwbGF5TmFtZSA9ICdqcSdcbmpxLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24ganEoUHJpc20pIHtcbiAgOyhmdW5jdGlvbiAoUHJpc20pIHtcbiAgICB2YXIgaW50ZXJwb2xhdGlvbiA9IC9cXFxcXFwoKD86W14oKV18XFwoW14oKV0qXFwpKSpcXCkvLnNvdXJjZVxuICAgIHZhciBzdHJpbmcgPSBSZWdFeHAoXG4gICAgICAvKF58W15cXFxcXSlcIig/OlteXCJcXHJcXG5cXFxcXXxcXFxcW15cXHJcXG4oXXxfXykqXCIvLnNvdXJjZS5yZXBsYWNlKFxuICAgICAgICAvX18vZyxcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBpbnRlcnBvbGF0aW9uXG4gICAgICAgIH1cbiAgICAgIClcbiAgICApXG4gICAgdmFyIHN0cmluZ0ludGVycG9sYXRpb24gPSB7XG4gICAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAgIHBhdHRlcm46IFJlZ0V4cCgvKCg/Ol58W15cXFxcXSkoPzpcXFxcezJ9KSopLy5zb3VyY2UgKyBpbnRlcnBvbGF0aW9uKSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgcGF0dGVybjogL14oXFxcXFxcKClbXFxzXFxTXSsoPz1cXCkkKS8sXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgaW5zaWRlOiBudWxsIC8vIHNlZSBiZWxvd1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcHVuY3R1YXRpb246IC9eXFxcXFxcKHxcXCkkL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBqcSA9IChQcmlzbS5sYW5ndWFnZXMuanEgPSB7XG4gICAgICBjb21tZW50OiAvIy4qLyxcbiAgICAgIHByb3BlcnR5OiB7XG4gICAgICAgIHBhdHRlcm46IFJlZ0V4cChzdHJpbmcuc291cmNlICsgLyg/PVxccyo6KD8hOikpLy5zb3VyY2UpLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIGluc2lkZTogc3RyaW5nSW50ZXJwb2xhdGlvblxuICAgICAgfSxcbiAgICAgIHN0cmluZzoge1xuICAgICAgICBwYXR0ZXJuOiBzdHJpbmcsXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiBzdHJpbmdJbnRlcnBvbGF0aW9uXG4gICAgICB9LFxuICAgICAgZnVuY3Rpb246IHtcbiAgICAgICAgcGF0dGVybjogLyhcXGJkZWZcXHMrKVthLXpfXVxcdysvaSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHZhcmlhYmxlOiAvXFxCXFwkXFx3Ky8sXG4gICAgICAncHJvcGVydHktbGl0ZXJhbCc6IHtcbiAgICAgICAgcGF0dGVybjogL1xcYlthLXpfXVxcdyooPz1cXHMqOig/ITopKS9pLFxuICAgICAgICBhbGlhczogJ3Byb3BlcnR5J1xuICAgICAgfSxcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgIC9cXGIoPzphc3xicmVha3xjYXRjaHxkZWZ8ZWxpZnxlbHNlfGVuZHxmb3JlYWNofGlmfGltcG9ydHxpbmNsdWRlfGxhYmVsfG1vZHVsZXxtb2R1bGVtZXRhfG51bGx8cmVkdWNlfHRoZW58dHJ5fHdoaWxlKVxcYi8sXG4gICAgICBib29sZWFuOiAvXFxiKD86ZmFsc2V8dHJ1ZSlcXGIvLFxuICAgICAgbnVtYmVyOiAvKD86XFxiXFxkK1xcLnxcXEJcXC4pP1xcYlxcZCsoPzpbZUVdWystXT9cXGQrKT9cXGIvLFxuICAgICAgb3BlcmF0b3I6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC9cXHw9Py8sXG4gICAgICAgICAgYWxpYXM6ICdwaXBlJ1xuICAgICAgICB9LFxuICAgICAgICAvXFwuXFwufFshPTw+XT89fFxcP1xcL1xcL3xcXC9cXC89P3xbLSsqLyVdPT98Wzw+P118XFxiKD86YW5kfG5vdHxvcilcXGIvXG4gICAgICBdLFxuICAgICAgJ2Mtc3R5bGUtZnVuY3Rpb24nOiB7XG4gICAgICAgIHBhdHRlcm46IC9cXGJbYS16X11cXHcqKD89XFxzKlxcKCkvaSxcbiAgICAgICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgICAgIH0sXG4gICAgICBwdW5jdHVhdGlvbjogLzo6fFsoKVxcW1xcXXt9LDo7XXxcXC4oPz1cXHMqW1xcW1xcdyRdKS8sXG4gICAgICBkb3Q6IHtcbiAgICAgICAgcGF0dGVybjogL1xcLi8sXG4gICAgICAgIGFsaWFzOiAnaW1wb3J0YW50J1xuICAgICAgfVxuICAgIH0pXG4gICAgc3RyaW5nSW50ZXJwb2xhdGlvbi5pbnRlcnBvbGF0aW9uLmluc2lkZS5jb250ZW50Lmluc2lkZSA9IGpxXG4gIH0pKFByaXNtKVxufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJqcSIsImRpc3BsYXlOYW1lIiwiYWxpYXNlcyIsIlByaXNtIiwiaW50ZXJwb2xhdGlvbiIsInNvdXJjZSIsInN0cmluZyIsIlJlZ0V4cCIsInJlcGxhY2UiLCJzdHJpbmdJbnRlcnBvbGF0aW9uIiwicGF0dGVybiIsImxvb2tiZWhpbmQiLCJpbnNpZGUiLCJjb250ZW50IiwicHVuY3R1YXRpb24iLCJsYW5ndWFnZXMiLCJjb21tZW50IiwicHJvcGVydHkiLCJncmVlZHkiLCJmdW5jdGlvbiIsInZhcmlhYmxlIiwiYWxpYXMiLCJrZXl3b3JkIiwiYm9vbGVhbiIsIm51bWJlciIsIm9wZXJhdG9yIiwiZG90Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/jq.js\n"));

/***/ })

}]);