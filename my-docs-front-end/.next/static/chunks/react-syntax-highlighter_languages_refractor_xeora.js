"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_xeora"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/xeora.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/xeora.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nmodule.exports = xeora;\nxeora.displayName = \"xeora\";\nxeora.aliases = [\n    \"xeoracube\"\n];\nfunction xeora(Prism) {\n    ;\n    (function(Prism) {\n        Prism.languages.xeora = Prism.languages.extend(\"markup\", {\n            constant: {\n                pattern: /\\$(?:DomainContents|PageRenderDuration)\\$/,\n                inside: {\n                    punctuation: {\n                        pattern: /\\$/\n                    }\n                }\n            },\n            variable: {\n                pattern: /\\$@?(?:#+|[-+*~=^])?[\\w.]+\\$/,\n                inside: {\n                    punctuation: {\n                        pattern: /[$.]/\n                    },\n                    operator: {\n                        pattern: /#+|[-+*~=^@]/\n                    }\n                }\n            },\n            \"function-inline\": {\n                pattern: /\\$F:[-\\w.]+\\?[-\\w.]+(?:,(?:(?:@[-#]*\\w+\\.[\\w+.]\\.*)*\\|)*(?:(?:[\\w+]|[-#*.~^]+[\\w+]|=\\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\\w+\\.[\\w+.]\\.*)+(?:(?:[\\w+]|[-#*~^][-#*.~^]*[\\w+]|=\\S)(?:[^$=]|=+[^=])*=*)?)?)?\\$/,\n                inside: {\n                    variable: {\n                        pattern: /(?:[,|])@?(?:#+|[-+*~=^])?[\\w.]+/,\n                        inside: {\n                            punctuation: {\n                                pattern: /[,.|]/\n                            },\n                            operator: {\n                                pattern: /#+|[-+*~=^@]/\n                            }\n                        }\n                    },\n                    punctuation: {\n                        pattern: /\\$\\w:|[$:?.,|]/\n                    }\n                },\n                alias: \"function\"\n            },\n            \"function-block\": {\n                pattern: /\\$XF:\\{[-\\w.]+\\?[-\\w.]+(?:,(?:(?:@[-#]*\\w+\\.[\\w+.]\\.*)*\\|)*(?:(?:[\\w+]|[-#*.~^]+[\\w+]|=\\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\\w+\\.[\\w+.]\\.*)+(?:(?:[\\w+]|[-#*~^][-#*.~^]*[\\w+]|=\\S)(?:[^$=]|=+[^=])*=*)?)?)?\\}:XF\\$/,\n                inside: {\n                    punctuation: {\n                        pattern: /[$:{}?.,|]/\n                    }\n                },\n                alias: \"function\"\n            },\n            \"directive-inline\": {\n                pattern: /\\$\\w(?:#\\d+\\+?)?(?:\\[[-\\w.]+\\])?:[-\\/\\w.]+\\$/,\n                inside: {\n                    punctuation: {\n                        pattern: /\\$(?:\\w:|C(?:\\[|#\\d))?|[:{[\\]]/,\n                        inside: {\n                            tag: {\n                                pattern: /#\\d/\n                            }\n                        }\n                    }\n                },\n                alias: \"function\"\n            },\n            \"directive-block-open\": {\n                pattern: /\\$\\w+:\\{|\\$\\w(?:#\\d+\\+?)?(?:\\[[-\\w.]+\\])?:[-\\w.]+:\\{(?:![A-Z]+)?/,\n                inside: {\n                    punctuation: {\n                        pattern: /\\$(?:\\w:|C(?:\\[|#\\d))?|[:{[\\]]/,\n                        inside: {\n                            tag: {\n                                pattern: /#\\d/\n                            }\n                        }\n                    },\n                    attribute: {\n                        pattern: /![A-Z]+$/,\n                        inside: {\n                            punctuation: {\n                                pattern: /!/\n                            }\n                        },\n                        alias: \"keyword\"\n                    }\n                },\n                alias: \"function\"\n            },\n            \"directive-block-separator\": {\n                pattern: /\\}:[-\\w.]+:\\{/,\n                inside: {\n                    punctuation: {\n                        pattern: /[:{}]/\n                    }\n                },\n                alias: \"function\"\n            },\n            \"directive-block-close\": {\n                pattern: /\\}:[-\\w.]+\\$/,\n                inside: {\n                    punctuation: {\n                        pattern: /[:{}$]/\n                    }\n                },\n                alias: \"function\"\n            }\n        });\n        Prism.languages.insertBefore(\"inside\", \"punctuation\", {\n            variable: Prism.languages.xeora[\"function-inline\"].inside[\"variable\"]\n        }, Prism.languages.xeora[\"function-block\"]);\n        Prism.languages.xeoracube = Prism.languages.xeora;\n    })(Prism);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy94ZW9yYS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxPQUFPQyxPQUFPLEdBQUdDO0FBQ2pCQSxNQUFNQyxXQUFXLEdBQUc7QUFDcEJELE1BQU1FLE9BQU8sR0FBRztJQUFDO0NBQVk7QUFDN0IsU0FBU0YsTUFBTUcsS0FBSzs7SUFDaEIsVUFBVUEsS0FBSztRQUNmQSxNQUFNQyxTQUFTLENBQUNKLEtBQUssR0FBR0csTUFBTUMsU0FBUyxDQUFDQyxNQUFNLENBQUMsVUFBVTtZQUN2REMsVUFBVTtnQkFDUkMsU0FBUztnQkFDVEMsUUFBUTtvQkFDTkMsYUFBYTt3QkFDWEYsU0FBUztvQkFDWDtnQkFDRjtZQUNGO1lBQ0FHLFVBQVU7Z0JBQ1JILFNBQVM7Z0JBQ1RDLFFBQVE7b0JBQ05DLGFBQWE7d0JBQ1hGLFNBQVM7b0JBQ1g7b0JBQ0FJLFVBQVU7d0JBQ1JKLFNBQVM7b0JBQ1g7Z0JBQ0Y7WUFDRjtZQUNBLG1CQUFtQjtnQkFDakJBLFNBQ0U7Z0JBQ0ZDLFFBQVE7b0JBQ05FLFVBQVU7d0JBQ1JILFNBQVM7d0JBQ1RDLFFBQVE7NEJBQ05DLGFBQWE7Z0NBQ1hGLFNBQVM7NEJBQ1g7NEJBQ0FJLFVBQVU7Z0NBQ1JKLFNBQVM7NEJBQ1g7d0JBQ0Y7b0JBQ0Y7b0JBQ0FFLGFBQWE7d0JBQ1hGLFNBQVM7b0JBQ1g7Z0JBQ0Y7Z0JBQ0FLLE9BQU87WUFDVDtZQUNBLGtCQUFrQjtnQkFDaEJMLFNBQ0U7Z0JBQ0ZDLFFBQVE7b0JBQ05DLGFBQWE7d0JBQ1hGLFNBQVM7b0JBQ1g7Z0JBQ0Y7Z0JBQ0FLLE9BQU87WUFDVDtZQUNBLG9CQUFvQjtnQkFDbEJMLFNBQVM7Z0JBQ1RDLFFBQVE7b0JBQ05DLGFBQWE7d0JBQ1hGLFNBQVM7d0JBQ1RDLFFBQVE7NEJBQ05LLEtBQUs7Z0NBQ0hOLFNBQVM7NEJBQ1g7d0JBQ0Y7b0JBQ0Y7Z0JBQ0Y7Z0JBQ0FLLE9BQU87WUFDVDtZQUNBLHdCQUF3QjtnQkFDdEJMLFNBQ0U7Z0JBQ0ZDLFFBQVE7b0JBQ05DLGFBQWE7d0JBQ1hGLFNBQVM7d0JBQ1RDLFFBQVE7NEJBQ05LLEtBQUs7Z0NBQ0hOLFNBQVM7NEJBQ1g7d0JBQ0Y7b0JBQ0Y7b0JBQ0FPLFdBQVc7d0JBQ1RQLFNBQVM7d0JBQ1RDLFFBQVE7NEJBQ05DLGFBQWE7Z0NBQ1hGLFNBQVM7NEJBQ1g7d0JBQ0Y7d0JBQ0FLLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBQ0FBLE9BQU87WUFDVDtZQUNBLDZCQUE2QjtnQkFDM0JMLFNBQVM7Z0JBQ1RDLFFBQVE7b0JBQ05DLGFBQWE7d0JBQ1hGLFNBQVM7b0JBQ1g7Z0JBQ0Y7Z0JBQ0FLLE9BQU87WUFDVDtZQUNBLHlCQUF5QjtnQkFDdkJMLFNBQVM7Z0JBQ1RDLFFBQVE7b0JBQ05DLGFBQWE7d0JBQ1hGLFNBQVM7b0JBQ1g7Z0JBQ0Y7Z0JBQ0FLLE9BQU87WUFDVDtRQUNGO1FBQ0FULE1BQU1DLFNBQVMsQ0FBQ1csWUFBWSxDQUMxQixVQUNBLGVBQ0E7WUFDRUwsVUFBVVAsTUFBTUMsU0FBUyxDQUFDSixLQUFLLENBQUMsa0JBQWtCLENBQUNRLE1BQU0sQ0FBQyxXQUFXO1FBQ3ZFLEdBQ0FMLE1BQU1DLFNBQVMsQ0FBQ0osS0FBSyxDQUFDLGlCQUFpQjtRQUV6Q0csTUFBTUMsU0FBUyxDQUFDWSxTQUFTLEdBQUdiLE1BQU1DLFNBQVMsQ0FBQ0osS0FBSztJQUNuRCxHQUFHRztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy94ZW9yYS5qcz8yZjVmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHhlb3JhXG54ZW9yYS5kaXNwbGF5TmFtZSA9ICd4ZW9yYSdcbnhlb3JhLmFsaWFzZXMgPSBbJ3hlb3JhY3ViZSddXG5mdW5jdGlvbiB4ZW9yYShQcmlzbSkge1xuICA7KGZ1bmN0aW9uIChQcmlzbSkge1xuICAgIFByaXNtLmxhbmd1YWdlcy54ZW9yYSA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ21hcmt1cCcsIHtcbiAgICAgIGNvbnN0YW50OiB7XG4gICAgICAgIHBhdHRlcm46IC9cXCQoPzpEb21haW5Db250ZW50c3xQYWdlUmVuZGVyRHVyYXRpb24pXFwkLyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcHVuY3R1YXRpb246IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9cXCQvXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdmFyaWFibGU6IHtcbiAgICAgICAgcGF0dGVybjogL1xcJEA/KD86Iyt8Wy0rKn49Xl0pP1tcXHcuXStcXCQvLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBwdW5jdHVhdGlvbjoge1xuICAgICAgICAgICAgcGF0dGVybjogL1skLl0vXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvcGVyYXRvcjoge1xuICAgICAgICAgICAgcGF0dGVybjogLyMrfFstKyp+PV5AXS9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnZnVuY3Rpb24taW5saW5lJzoge1xuICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgIC9cXCRGOlstXFx3Ll0rXFw/Wy1cXHcuXSsoPzosKD86KD86QFstI10qXFx3K1xcLltcXHcrLl1cXC4qKSpcXHwpKig/Oig/OltcXHcrXXxbLSMqLn5eXStbXFx3K118PVxcUykoPzpbXiQ9XXw9K1tePV0pKj0qfCg/OkBbLSNdKlxcdytcXC5bXFx3Ky5dXFwuKikrKD86KD86W1xcdytdfFstIyp+Xl1bLSMqLn5eXSpbXFx3K118PVxcUykoPzpbXiQ9XXw9K1tePV0pKj0qKT8pPyk/XFwkLyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgdmFyaWFibGU6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oPzpbLHxdKUA/KD86Iyt8Wy0rKn49Xl0pP1tcXHcuXSsvLFxuICAgICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAgIHB1bmN0dWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgcGF0dGVybjogL1ssLnxdL1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvcGVyYXRvcjoge1xuICAgICAgICAgICAgICAgIHBhdHRlcm46IC8jK3xbLSsqfj1eQF0vXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHB1bmN0dWF0aW9uOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXFwkXFx3OnxbJDo/Lix8XS9cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gICAgICB9LFxuICAgICAgJ2Z1bmN0aW9uLWJsb2NrJzoge1xuICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgIC9cXCRYRjpcXHtbLVxcdy5dK1xcP1stXFx3Ll0rKD86LCg/Oig/OkBbLSNdKlxcdytcXC5bXFx3Ky5dXFwuKikqXFx8KSooPzooPzpbXFx3K118Wy0jKi5+Xl0rW1xcdytdfD1cXFMpKD86W14kPV18PStbXj1dKSo9KnwoPzpAWy0jXSpcXHcrXFwuW1xcdysuXVxcLiopKyg/Oig/OltcXHcrXXxbLSMqfl5dWy0jKi5+Xl0qW1xcdytdfD1cXFMpKD86W14kPV18PStbXj1dKSo9Kik/KT8pP1xcfTpYRlxcJC8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHB1bmN0dWF0aW9uOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvWyQ6e30/Lix8XS9cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gICAgICB9LFxuICAgICAgJ2RpcmVjdGl2ZS1pbmxpbmUnOiB7XG4gICAgICAgIHBhdHRlcm46IC9cXCRcXHcoPzojXFxkK1xcKz8pPyg/OlxcW1stXFx3Ll0rXFxdKT86Wy1cXC9cXHcuXStcXCQvLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBwdW5jdHVhdGlvbjoge1xuICAgICAgICAgICAgcGF0dGVybjogL1xcJCg/Olxcdzp8Qyg/OlxcW3wjXFxkKSk/fFs6e1tcXF1dLyxcbiAgICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgICB0YWc6IHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvI1xcZC9cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgICAgIH0sXG4gICAgICAnZGlyZWN0aXZlLWJsb2NrLW9wZW4nOiB7XG4gICAgICAgIHBhdHRlcm46XG4gICAgICAgICAgL1xcJFxcdys6XFx7fFxcJFxcdyg/OiNcXGQrXFwrPyk/KD86XFxbWy1cXHcuXStcXF0pPzpbLVxcdy5dKzpcXHsoPzohW0EtWl0rKT8vLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBwdW5jdHVhdGlvbjoge1xuICAgICAgICAgICAgcGF0dGVybjogL1xcJCg/Olxcdzp8Qyg/OlxcW3wjXFxkKSk/fFs6e1tcXF1dLyxcbiAgICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgICB0YWc6IHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvI1xcZC9cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cmlidXRlOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvIVtBLVpdKyQvLFxuICAgICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAgIHB1bmN0dWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgcGF0dGVybjogLyEvXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbGlhczogJ2tleXdvcmQnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgICAgfSxcbiAgICAgICdkaXJlY3RpdmUtYmxvY2stc2VwYXJhdG9yJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXFx9OlstXFx3Ll0rOlxcey8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHB1bmN0dWF0aW9uOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvWzp7fV0vXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgICAgfSxcbiAgICAgICdkaXJlY3RpdmUtYmxvY2stY2xvc2UnOiB7XG4gICAgICAgIHBhdHRlcm46IC9cXH06Wy1cXHcuXStcXCQvLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBwdW5jdHVhdGlvbjoge1xuICAgICAgICAgICAgcGF0dGVybjogL1s6e30kXS9cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gICAgICB9XG4gICAgfSlcbiAgICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKFxuICAgICAgJ2luc2lkZScsXG4gICAgICAncHVuY3R1YXRpb24nLFxuICAgICAge1xuICAgICAgICB2YXJpYWJsZTogUHJpc20ubGFuZ3VhZ2VzLnhlb3JhWydmdW5jdGlvbi1pbmxpbmUnXS5pbnNpZGVbJ3ZhcmlhYmxlJ11cbiAgICAgIH0sXG4gICAgICBQcmlzbS5sYW5ndWFnZXMueGVvcmFbJ2Z1bmN0aW9uLWJsb2NrJ11cbiAgICApXG4gICAgUHJpc20ubGFuZ3VhZ2VzLnhlb3JhY3ViZSA9IFByaXNtLmxhbmd1YWdlcy54ZW9yYVxuICB9KShQcmlzbSlcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwieGVvcmEiLCJkaXNwbGF5TmFtZSIsImFsaWFzZXMiLCJQcmlzbSIsImxhbmd1YWdlcyIsImV4dGVuZCIsImNvbnN0YW50IiwicGF0dGVybiIsImluc2lkZSIsInB1bmN0dWF0aW9uIiwidmFyaWFibGUiLCJvcGVyYXRvciIsImFsaWFzIiwidGFnIiwiYXR0cmlidXRlIiwiaW5zZXJ0QmVmb3JlIiwieGVvcmFjdWJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/xeora.js\n"));

/***/ })

}]);