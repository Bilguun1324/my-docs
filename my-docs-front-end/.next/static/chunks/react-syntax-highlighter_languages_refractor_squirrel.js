"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_squirrel"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/squirrel.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/squirrel.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nmodule.exports = squirrel;\nsquirrel.displayName = \"squirrel\";\nsquirrel.aliases = [];\nfunction squirrel(Prism) {\n    Prism.languages.squirrel = Prism.languages.extend(\"clike\", {\n        comment: [\n            Prism.languages.clike[\"comment\"][0],\n            {\n                pattern: /(^|[^\\\\:])(?:\\/\\/|#).*/,\n                lookbehind: true,\n                greedy: true\n            }\n        ],\n        string: {\n            pattern: /(^|[^\\\\\"'@])(?:@\"(?:[^\"]|\"\")*\"(?!\")|\"(?:[^\\\\\\r\\n\"]|\\\\.)*\")/,\n            lookbehind: true,\n            greedy: true\n        },\n        \"class-name\": {\n            pattern: /(\\b(?:class|enum|extends|instanceof)\\s+)\\w+(?:\\.\\w+)*/,\n            lookbehind: true,\n            inside: {\n                punctuation: /\\./\n            }\n        },\n        keyword: /\\b(?:__FILE__|__LINE__|base|break|case|catch|class|clone|const|constructor|continue|default|delete|else|enum|extends|for|foreach|function|if|in|instanceof|local|null|resume|return|static|switch|this|throw|try|typeof|while|yield)\\b/,\n        number: /\\b(?:0x[0-9a-fA-F]+|\\d+(?:\\.(?:\\d+|[eE][+-]?\\d+))?)\\b/,\n        operator: /\\+\\+|--|<=>|<[-<]|>>>?|&&?|\\|\\|?|[-+*/%!=<>]=?|[~^]|::?/,\n        punctuation: /[(){}\\[\\],;.]/\n    });\n    Prism.languages.insertBefore(\"squirrel\", \"string\", {\n        char: {\n            pattern: /(^|[^\\\\\"'])'(?:[^\\\\']|\\\\(?:[xuU][0-9a-fA-F]{0,8}|[\\s\\S]))'/,\n            lookbehind: true,\n            greedy: true\n        }\n    });\n    Prism.languages.insertBefore(\"squirrel\", \"operator\", {\n        \"attribute-punctuation\": {\n            pattern: /<\\/|\\/>/,\n            alias: \"important\"\n        },\n        lambda: {\n            pattern: /@(?=\\()/,\n            alias: \"operator\"\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9zcXVpcnJlbC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxPQUFPQyxPQUFPLEdBQUdDO0FBQ2pCQSxTQUFTQyxXQUFXLEdBQUc7QUFDdkJELFNBQVNFLE9BQU8sR0FBRyxFQUFFO0FBQ3JCLFNBQVNGLFNBQVNHLEtBQUs7SUFDckJBLE1BQU1DLFNBQVMsQ0FBQ0osUUFBUSxHQUFHRyxNQUFNQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxTQUFTO1FBQ3pEQyxTQUFTO1lBQ1BILE1BQU1DLFNBQVMsQ0FBQ0csS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ25DO2dCQUNFQyxTQUFTO2dCQUNUQyxZQUFZO2dCQUNaQyxRQUFRO1lBQ1Y7U0FDRDtRQUNEQyxRQUFRO1lBQ05ILFNBQVM7WUFDVEMsWUFBWTtZQUNaQyxRQUFRO1FBQ1Y7UUFDQSxjQUFjO1lBQ1pGLFNBQVM7WUFDVEMsWUFBWTtZQUNaRyxRQUFRO2dCQUNOQyxhQUFhO1lBQ2Y7UUFDRjtRQUNBQyxTQUNFO1FBQ0ZDLFFBQVE7UUFDUkMsVUFBVTtRQUNWSCxhQUFhO0lBQ2Y7SUFDQVYsTUFBTUMsU0FBUyxDQUFDYSxZQUFZLENBQUMsWUFBWSxVQUFVO1FBQ2pEQyxNQUFNO1lBQ0pWLFNBQVM7WUFDVEMsWUFBWTtZQUNaQyxRQUFRO1FBQ1Y7SUFDRjtJQUNBUCxNQUFNQyxTQUFTLENBQUNhLFlBQVksQ0FBQyxZQUFZLFlBQVk7UUFDbkQseUJBQXlCO1lBQ3ZCVCxTQUFTO1lBQ1RXLE9BQU87UUFDVDtRQUNBQyxRQUFRO1lBQ05aLFNBQVM7WUFDVFcsT0FBTztRQUNUO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvc3F1aXJyZWwuanM/MDFiOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBzcXVpcnJlbFxuc3F1aXJyZWwuZGlzcGxheU5hbWUgPSAnc3F1aXJyZWwnXG5zcXVpcnJlbC5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHNxdWlycmVsKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5zcXVpcnJlbCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuICAgIGNvbW1lbnQ6IFtcbiAgICAgIFByaXNtLmxhbmd1YWdlcy5jbGlrZVsnY29tbWVudCddWzBdLFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcOl0pKD86XFwvXFwvfCMpLiovLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBncmVlZHk6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogLyhefFteXFxcXFwiJ0BdKSg/OkBcIig/OlteXCJdfFwiXCIpKlwiKD8hXCIpfFwiKD86W15cXFxcXFxyXFxuXCJdfFxcXFwuKSpcIikvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgJ2NsYXNzLW5hbWUnOiB7XG4gICAgICBwYXR0ZXJuOiAvKFxcYig/OmNsYXNzfGVudW18ZXh0ZW5kc3xpbnN0YW5jZW9mKVxccyspXFx3Kyg/OlxcLlxcdyspKi8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIHB1bmN0dWF0aW9uOiAvXFwuL1xuICAgICAgfVxuICAgIH0sXG4gICAga2V5d29yZDpcbiAgICAgIC9cXGIoPzpfX0ZJTEVfX3xfX0xJTkVfX3xiYXNlfGJyZWFrfGNhc2V8Y2F0Y2h8Y2xhc3N8Y2xvbmV8Y29uc3R8Y29uc3RydWN0b3J8Y29udGludWV8ZGVmYXVsdHxkZWxldGV8ZWxzZXxlbnVtfGV4dGVuZHN8Zm9yfGZvcmVhY2h8ZnVuY3Rpb258aWZ8aW58aW5zdGFuY2VvZnxsb2NhbHxudWxsfHJlc3VtZXxyZXR1cm58c3RhdGljfHN3aXRjaHx0aGlzfHRocm93fHRyeXx0eXBlb2Z8d2hpbGV8eWllbGQpXFxiLyxcbiAgICBudW1iZXI6IC9cXGIoPzoweFswLTlhLWZBLUZdK3xcXGQrKD86XFwuKD86XFxkK3xbZUVdWystXT9cXGQrKSk/KVxcYi8sXG4gICAgb3BlcmF0b3I6IC9cXCtcXCt8LS18PD0+fDxbLTxdfD4+Pj98JiY/fFxcfFxcfD98Wy0rKi8lIT08Pl09P3xbfl5dfDo6Py8sXG4gICAgcHVuY3R1YXRpb246IC9bKCl7fVxcW1xcXSw7Ll0vXG4gIH0pXG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3NxdWlycmVsJywgJ3N0cmluZycsIHtcbiAgICBjaGFyOiB7XG4gICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXCInXSknKD86W15cXFxcJ118XFxcXCg/Olt4dVVdWzAtOWEtZkEtRl17MCw4fXxbXFxzXFxTXSkpJy8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfVxuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdzcXVpcnJlbCcsICdvcGVyYXRvcicsIHtcbiAgICAnYXR0cmlidXRlLXB1bmN0dWF0aW9uJzoge1xuICAgICAgcGF0dGVybjogLzxcXC98XFwvPi8sXG4gICAgICBhbGlhczogJ2ltcG9ydGFudCdcbiAgICB9LFxuICAgIGxhbWJkYToge1xuICAgICAgcGF0dGVybjogL0AoPz1cXCgpLyxcbiAgICAgIGFsaWFzOiAnb3BlcmF0b3InXG4gICAgfVxuICB9KVxufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzcXVpcnJlbCIsImRpc3BsYXlOYW1lIiwiYWxpYXNlcyIsIlByaXNtIiwibGFuZ3VhZ2VzIiwiZXh0ZW5kIiwiY29tbWVudCIsImNsaWtlIiwicGF0dGVybiIsImxvb2tiZWhpbmQiLCJncmVlZHkiLCJzdHJpbmciLCJpbnNpZGUiLCJwdW5jdHVhdGlvbiIsImtleXdvcmQiLCJudW1iZXIiLCJvcGVyYXRvciIsImluc2VydEJlZm9yZSIsImNoYXIiLCJhbGlhcyIsImxhbWJkYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/squirrel.js\n"));

/***/ })

}]);