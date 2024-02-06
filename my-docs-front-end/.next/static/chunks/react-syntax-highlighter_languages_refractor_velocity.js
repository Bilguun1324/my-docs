"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_velocity"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/velocity.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/velocity.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nmodule.exports = velocity;\nvelocity.displayName = \"velocity\";\nvelocity.aliases = [];\nfunction velocity(Prism) {\n    ;\n    (function(Prism) {\n        Prism.languages.velocity = Prism.languages.extend(\"markup\", {});\n        var velocity = {\n            variable: {\n                pattern: /(^|[^\\\\](?:\\\\\\\\)*)\\$!?(?:[a-z][\\w-]*(?:\\([^)]*\\))?(?:\\.[a-z][\\w-]*(?:\\([^)]*\\))?|\\[[^\\]]+\\])*|\\{[^}]+\\})/i,\n                lookbehind: true,\n                inside: {} // See below\n            },\n            string: {\n                pattern: /\"[^\"]*\"|'[^']*'/,\n                greedy: true\n            },\n            number: /\\b\\d+\\b/,\n            boolean: /\\b(?:false|true)\\b/,\n            operator: /[=!<>]=?|[+*/%-]|&&|\\|\\||\\.\\.|\\b(?:eq|g[et]|l[et]|n(?:e|ot))\\b/,\n            punctuation: /[(){}[\\]:,.]/\n        };\n        velocity.variable.inside = {\n            string: velocity[\"string\"],\n            function: {\n                pattern: /([^\\w-])[a-z][\\w-]*(?=\\()/,\n                lookbehind: true\n            },\n            number: velocity[\"number\"],\n            boolean: velocity[\"boolean\"],\n            punctuation: velocity[\"punctuation\"]\n        };\n        Prism.languages.insertBefore(\"velocity\", \"comment\", {\n            unparsed: {\n                pattern: /(^|[^\\\\])#\\[\\[[\\s\\S]*?\\]\\]#/,\n                lookbehind: true,\n                greedy: true,\n                inside: {\n                    punctuation: /^#\\[\\[|\\]\\]#$/\n                }\n            },\n            \"velocity-comment\": [\n                {\n                    pattern: /(^|[^\\\\])#\\*[\\s\\S]*?\\*#/,\n                    lookbehind: true,\n                    greedy: true,\n                    alias: \"comment\"\n                },\n                {\n                    pattern: /(^|[^\\\\])##.*/,\n                    lookbehind: true,\n                    greedy: true,\n                    alias: \"comment\"\n                }\n            ],\n            directive: {\n                pattern: /(^|[^\\\\](?:\\\\\\\\)*)#@?(?:[a-z][\\w-]*|\\{[a-z][\\w-]*\\})(?:\\s*\\((?:[^()]|\\([^()]*\\))*\\))?/i,\n                lookbehind: true,\n                inside: {\n                    keyword: {\n                        pattern: /^#@?(?:[a-z][\\w-]*|\\{[a-z][\\w-]*\\})|\\bin\\b/,\n                        inside: {\n                            punctuation: /[{}]/\n                        }\n                    },\n                    rest: velocity\n                }\n            },\n            variable: velocity[\"variable\"]\n        });\n        Prism.languages.velocity[\"tag\"].inside[\"attr-value\"].inside.rest = Prism.languages.velocity;\n    })(Prism);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy92ZWxvY2l0eS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxPQUFPQyxPQUFPLEdBQUdDO0FBQ2pCQSxTQUFTQyxXQUFXLEdBQUc7QUFDdkJELFNBQVNFLE9BQU8sR0FBRyxFQUFFO0FBQ3JCLFNBQVNGLFNBQVNHLEtBQUs7O0lBQ25CLFVBQVVBLEtBQUs7UUFDZkEsTUFBTUMsU0FBUyxDQUFDSixRQUFRLEdBQUdHLE1BQU1DLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUM3RCxJQUFJTCxXQUFXO1lBQ2JNLFVBQVU7Z0JBQ1JDLFNBQ0U7Z0JBQ0ZDLFlBQVk7Z0JBQ1pDLFFBQVEsQ0FBQyxFQUFFLFlBQVk7WUFDekI7WUFDQUMsUUFBUTtnQkFDTkgsU0FBUztnQkFDVEksUUFBUTtZQUNWO1lBQ0FDLFFBQVE7WUFDUkMsU0FBUztZQUNUQyxVQUNFO1lBQ0ZDLGFBQWE7UUFDZjtRQUNBZixTQUFTTSxRQUFRLENBQUNHLE1BQU0sR0FBRztZQUN6QkMsUUFBUVYsUUFBUSxDQUFDLFNBQVM7WUFDMUJnQixVQUFVO2dCQUNSVCxTQUFTO2dCQUNUQyxZQUFZO1lBQ2Q7WUFDQUksUUFBUVosUUFBUSxDQUFDLFNBQVM7WUFDMUJhLFNBQVNiLFFBQVEsQ0FBQyxVQUFVO1lBQzVCZSxhQUFhZixRQUFRLENBQUMsY0FBYztRQUN0QztRQUNBRyxNQUFNQyxTQUFTLENBQUNhLFlBQVksQ0FBQyxZQUFZLFdBQVc7WUFDbERDLFVBQVU7Z0JBQ1JYLFNBQVM7Z0JBQ1RDLFlBQVk7Z0JBQ1pHLFFBQVE7Z0JBQ1JGLFFBQVE7b0JBQ05NLGFBQWE7Z0JBQ2Y7WUFDRjtZQUNBLG9CQUFvQjtnQkFDbEI7b0JBQ0VSLFNBQVM7b0JBQ1RDLFlBQVk7b0JBQ1pHLFFBQVE7b0JBQ1JRLE9BQU87Z0JBQ1Q7Z0JBQ0E7b0JBQ0VaLFNBQVM7b0JBQ1RDLFlBQVk7b0JBQ1pHLFFBQVE7b0JBQ1JRLE9BQU87Z0JBQ1Q7YUFDRDtZQUNEQyxXQUFXO2dCQUNUYixTQUNFO2dCQUNGQyxZQUFZO2dCQUNaQyxRQUFRO29CQUNOWSxTQUFTO3dCQUNQZCxTQUFTO3dCQUNURSxRQUFROzRCQUNOTSxhQUFhO3dCQUNmO29CQUNGO29CQUNBTyxNQUFNdEI7Z0JBQ1I7WUFDRjtZQUNBTSxVQUFVTixRQUFRLENBQUMsV0FBVztRQUNoQztRQUNBRyxNQUFNQyxTQUFTLENBQUNKLFFBQVEsQ0FBQyxNQUFNLENBQUNTLE1BQU0sQ0FBQyxhQUFhLENBQUNBLE1BQU0sQ0FBQ2EsSUFBSSxHQUM5RG5CLE1BQU1DLFNBQVMsQ0FBQ0osUUFBUTtJQUM1QixHQUFHRztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy92ZWxvY2l0eS5qcz85ZDgxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZlbG9jaXR5XG52ZWxvY2l0eS5kaXNwbGF5TmFtZSA9ICd2ZWxvY2l0eSdcbnZlbG9jaXR5LmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gdmVsb2NpdHkoUHJpc20pIHtcbiAgOyhmdW5jdGlvbiAoUHJpc20pIHtcbiAgICBQcmlzbS5sYW5ndWFnZXMudmVsb2NpdHkgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCB7fSlcbiAgICB2YXIgdmVsb2NpdHkgPSB7XG4gICAgICB2YXJpYWJsZToge1xuICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgIC8oXnxbXlxcXFxdKD86XFxcXFxcXFwpKilcXCQhPyg/OlthLXpdW1xcdy1dKig/OlxcKFteKV0qXFwpKT8oPzpcXC5bYS16XVtcXHctXSooPzpcXChbXildKlxcKSk/fFxcW1teXFxdXStcXF0pKnxcXHtbXn1dK1xcfSkvaSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7fSAvLyBTZWUgYmVsb3dcbiAgICAgIH0sXG4gICAgICBzdHJpbmc6IHtcbiAgICAgICAgcGF0dGVybjogL1wiW15cIl0qXCJ8J1teJ10qJy8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG51bWJlcjogL1xcYlxcZCtcXGIvLFxuICAgICAgYm9vbGVhbjogL1xcYig/OmZhbHNlfHRydWUpXFxiLyxcbiAgICAgIG9wZXJhdG9yOlxuICAgICAgICAvWz0hPD5dPT98WysqLyUtXXwmJnxcXHxcXHx8XFwuXFwufFxcYig/OmVxfGdbZXRdfGxbZXRdfG4oPzplfG90KSlcXGIvLFxuICAgICAgcHVuY3R1YXRpb246IC9bKCl7fVtcXF06LC5dL1xuICAgIH1cbiAgICB2ZWxvY2l0eS52YXJpYWJsZS5pbnNpZGUgPSB7XG4gICAgICBzdHJpbmc6IHZlbG9jaXR5WydzdHJpbmcnXSxcbiAgICAgIGZ1bmN0aW9uOiB7XG4gICAgICAgIHBhdHRlcm46IC8oW15cXHctXSlbYS16XVtcXHctXSooPz1cXCgpLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG51bWJlcjogdmVsb2NpdHlbJ251bWJlciddLFxuICAgICAgYm9vbGVhbjogdmVsb2NpdHlbJ2Jvb2xlYW4nXSxcbiAgICAgIHB1bmN0dWF0aW9uOiB2ZWxvY2l0eVsncHVuY3R1YXRpb24nXVxuICAgIH1cbiAgICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCd2ZWxvY2l0eScsICdjb21tZW50Jywge1xuICAgICAgdW5wYXJzZWQ6IHtcbiAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pI1xcW1xcW1tcXHNcXFNdKj9cXF1cXF0jLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBwdW5jdHVhdGlvbjogL14jXFxbXFxbfFxcXVxcXSMkL1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJ3ZlbG9jaXR5LWNvbW1lbnQnOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSkjXFwqW1xcc1xcU10qP1xcKiMvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICAgIGFsaWFzOiAnY29tbWVudCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKSMjLiovLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICAgIGFsaWFzOiAnY29tbWVudCdcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGRpcmVjdGl2ZToge1xuICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgIC8oXnxbXlxcXFxdKD86XFxcXFxcXFwpKikjQD8oPzpbYS16XVtcXHctXSp8XFx7W2Etel1bXFx3LV0qXFx9KSg/OlxccypcXCgoPzpbXigpXXxcXChbXigpXSpcXCkpKlxcKSk/L2ksXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIGtleXdvcmQ6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9eI0A/KD86W2Etel1bXFx3LV0qfFxce1thLXpdW1xcdy1dKlxcfSl8XFxiaW5cXGIvLFxuICAgICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvW3t9XS9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc3Q6IHZlbG9jaXR5XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB2YXJpYWJsZTogdmVsb2NpdHlbJ3ZhcmlhYmxlJ11cbiAgICB9KVxuICAgIFByaXNtLmxhbmd1YWdlcy52ZWxvY2l0eVsndGFnJ10uaW5zaWRlWydhdHRyLXZhbHVlJ10uaW5zaWRlLnJlc3QgPVxuICAgICAgUHJpc20ubGFuZ3VhZ2VzLnZlbG9jaXR5XG4gIH0pKFByaXNtKVxufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ2ZWxvY2l0eSIsImRpc3BsYXlOYW1lIiwiYWxpYXNlcyIsIlByaXNtIiwibGFuZ3VhZ2VzIiwiZXh0ZW5kIiwidmFyaWFibGUiLCJwYXR0ZXJuIiwibG9va2JlaGluZCIsImluc2lkZSIsInN0cmluZyIsImdyZWVkeSIsIm51bWJlciIsImJvb2xlYW4iLCJvcGVyYXRvciIsInB1bmN0dWF0aW9uIiwiZnVuY3Rpb24iLCJpbnNlcnRCZWZvcmUiLCJ1bnBhcnNlZCIsImFsaWFzIiwiZGlyZWN0aXZlIiwia2V5d29yZCIsInJlc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/velocity.js\n"));

/***/ })

}]);