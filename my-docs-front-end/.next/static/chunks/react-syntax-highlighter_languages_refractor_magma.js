"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_magma"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/magma.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/magma.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nmodule.exports = magma;\nmagma.displayName = \"magma\";\nmagma.aliases = [];\nfunction magma(Prism) {\n    Prism.languages.magma = {\n        output: {\n            pattern: /^(>.*(?:\\r(?:\\n|(?!\\n))|\\n))(?!>)(?:.+|(?:\\r(?:\\n|(?!\\n))|\\n)(?!>).*)(?:(?:\\r(?:\\n|(?!\\n))|\\n)(?!>).*)*/m,\n            lookbehind: true,\n            greedy: true\n        },\n        comment: {\n            pattern: /\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\//,\n            greedy: true\n        },\n        string: {\n            pattern: /(^|[^\\\\\"])\"(?:[^\\r\\n\\\\\"]|\\\\.)*\"/,\n            lookbehind: true,\n            greedy: true\n        },\n        // http://magma.maths.usyd.edu.au/magma/handbook/text/82\n        keyword: /\\b(?:_|adj|and|assert|assert2|assert3|assigned|break|by|case|cat|catch|clear|cmpeq|cmpne|continue|declare|default|delete|diff|div|do|elif|else|end|eq|error|eval|exists|exit|for|forall|forward|fprintf|freeze|function|ge|gt|if|iload|import|in|intrinsic|is|join|le|load|local|lt|meet|mod|ne|not|notadj|notin|notsubset|or|print|printf|procedure|quit|random|read|readi|repeat|require|requirege|requirerange|restore|return|save|sdiff|select|subset|then|time|to|try|until|vprint|vprintf|vtime|when|where|while|xor)\\b/,\n        boolean: /\\b(?:false|true)\\b/,\n        generator: {\n            pattern: /\\b[a-z_]\\w*(?=\\s*<)/i,\n            alias: \"class-name\"\n        },\n        function: /\\b[a-z_]\\w*(?=\\s*\\()/i,\n        number: {\n            pattern: /(^|[^\\w.]|\\.\\.)(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?(?:_[a-z]?)?(?=$|[^\\w.]|\\.\\.)/,\n            lookbehind: true\n        },\n        operator: /->|[-+*/^~!|#=]|:=|\\.\\./,\n        punctuation: /[()[\\]{}<>,;.:]/\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9tYWdtYS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxPQUFPQyxPQUFPLEdBQUdDO0FBQ2pCQSxNQUFNQyxXQUFXLEdBQUc7QUFDcEJELE1BQU1FLE9BQU8sR0FBRyxFQUFFO0FBQ2xCLFNBQVNGLE1BQU1HLEtBQUs7SUFDbEJBLE1BQU1DLFNBQVMsQ0FBQ0osS0FBSyxHQUFHO1FBQ3RCSyxRQUFRO1lBQ05DLFNBQ0U7WUFDRkMsWUFBWTtZQUNaQyxRQUFRO1FBQ1Y7UUFDQUMsU0FBUztZQUNQSCxTQUFTO1lBQ1RFLFFBQVE7UUFDVjtRQUNBRSxRQUFRO1lBQ05KLFNBQVM7WUFDVEMsWUFBWTtZQUNaQyxRQUFRO1FBQ1Y7UUFDQSx3REFBd0Q7UUFDeERHLFNBQ0U7UUFDRkMsU0FBUztRQUNUQyxXQUFXO1lBQ1RQLFNBQVM7WUFDVFEsT0FBTztRQUNUO1FBQ0FDLFVBQVU7UUFDVkMsUUFBUTtZQUNOVixTQUNFO1lBQ0ZDLFlBQVk7UUFDZDtRQUNBVSxVQUFVO1FBQ1ZDLGFBQWE7SUFDZjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9tYWdtYS5qcz9hNTRjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1hZ21hXG5tYWdtYS5kaXNwbGF5TmFtZSA9ICdtYWdtYSdcbm1hZ21hLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gbWFnbWEoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLm1hZ21hID0ge1xuICAgIG91dHB1dDoge1xuICAgICAgcGF0dGVybjpcbiAgICAgICAgL14oPi4qKD86XFxyKD86XFxufCg/IVxcbikpfFxcbikpKD8hPikoPzouK3woPzpcXHIoPzpcXG58KD8hXFxuKSl8XFxuKSg/IT4pLiopKD86KD86XFxyKD86XFxufCg/IVxcbikpfFxcbikoPyE+KS4qKSovbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIGNvbW1lbnQ6IHtcbiAgICAgIHBhdHRlcm46IC9cXC9cXC8uKnxcXC9cXCpbXFxzXFxTXSo/XFwqXFwvLyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXCJdKVwiKD86W15cXHJcXG5cXFxcXCJdfFxcXFwuKSpcIi8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICAvLyBodHRwOi8vbWFnbWEubWF0aHMudXN5ZC5lZHUuYXUvbWFnbWEvaGFuZGJvb2svdGV4dC84MlxuICAgIGtleXdvcmQ6XG4gICAgICAvXFxiKD86X3xhZGp8YW5kfGFzc2VydHxhc3NlcnQyfGFzc2VydDN8YXNzaWduZWR8YnJlYWt8Ynl8Y2FzZXxjYXR8Y2F0Y2h8Y2xlYXJ8Y21wZXF8Y21wbmV8Y29udGludWV8ZGVjbGFyZXxkZWZhdWx0fGRlbGV0ZXxkaWZmfGRpdnxkb3xlbGlmfGVsc2V8ZW5kfGVxfGVycm9yfGV2YWx8ZXhpc3RzfGV4aXR8Zm9yfGZvcmFsbHxmb3J3YXJkfGZwcmludGZ8ZnJlZXplfGZ1bmN0aW9ufGdlfGd0fGlmfGlsb2FkfGltcG9ydHxpbnxpbnRyaW5zaWN8aXN8am9pbnxsZXxsb2FkfGxvY2FsfGx0fG1lZXR8bW9kfG5lfG5vdHxub3RhZGp8bm90aW58bm90c3Vic2V0fG9yfHByaW50fHByaW50Znxwcm9jZWR1cmV8cXVpdHxyYW5kb218cmVhZHxyZWFkaXxyZXBlYXR8cmVxdWlyZXxyZXF1aXJlZ2V8cmVxdWlyZXJhbmdlfHJlc3RvcmV8cmV0dXJufHNhdmV8c2RpZmZ8c2VsZWN0fHN1YnNldHx0aGVufHRpbWV8dG98dHJ5fHVudGlsfHZwcmludHx2cHJpbnRmfHZ0aW1lfHdoZW58d2hlcmV8d2hpbGV8eG9yKVxcYi8sXG4gICAgYm9vbGVhbjogL1xcYig/OmZhbHNlfHRydWUpXFxiLyxcbiAgICBnZW5lcmF0b3I6IHtcbiAgICAgIHBhdHRlcm46IC9cXGJbYS16X11cXHcqKD89XFxzKjwpL2ksXG4gICAgICBhbGlhczogJ2NsYXNzLW5hbWUnXG4gICAgfSxcbiAgICBmdW5jdGlvbjogL1xcYlthLXpfXVxcdyooPz1cXHMqXFwoKS9pLFxuICAgIG51bWJlcjoge1xuICAgICAgcGF0dGVybjpcbiAgICAgICAgLyhefFteXFx3Ll18XFwuXFwuKSg/OlxcZCsoPzpcXC5cXGQqKT98XFwuXFxkKykoPzpbZUVdWystXT9cXGQrKT8oPzpfW2Etel0/KT8oPz0kfFteXFx3Ll18XFwuXFwuKS8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICBvcGVyYXRvcjogLy0+fFstKyovXn4hfCM9XXw6PXxcXC5cXC4vLFxuICAgIHB1bmN0dWF0aW9uOiAvWygpW1xcXXt9PD4sOy46XS9cbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJtYWdtYSIsImRpc3BsYXlOYW1lIiwiYWxpYXNlcyIsIlByaXNtIiwibGFuZ3VhZ2VzIiwib3V0cHV0IiwicGF0dGVybiIsImxvb2tiZWhpbmQiLCJncmVlZHkiLCJjb21tZW50Iiwic3RyaW5nIiwia2V5d29yZCIsImJvb2xlYW4iLCJnZW5lcmF0b3IiLCJhbGlhcyIsImZ1bmN0aW9uIiwibnVtYmVyIiwib3BlcmF0b3IiLCJwdW5jdHVhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/magma.js\n"));

/***/ })

}]);