"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_promql"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/promql.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/promql.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nmodule.exports = promql;\npromql.displayName = \"promql\";\npromql.aliases = [];\nfunction promql(Prism) {\n    // Thanks to: https://github.com/prometheus-community/monaco-promql/blob/master/src/promql/promql.ts\n    // As well as: https://kausal.co/blog/slate-prism-add-new-syntax-promql/\n    ;\n    (function(Prism) {\n        // PromQL Aggregation Operators\n        // (https://prometheus.io/docs/prometheus/latest/querying/operators/#aggregation-operators)\n        var aggregations = [\n            \"sum\",\n            \"min\",\n            \"max\",\n            \"avg\",\n            \"group\",\n            \"stddev\",\n            \"stdvar\",\n            \"count\",\n            \"count_values\",\n            \"bottomk\",\n            \"topk\",\n            \"quantile\"\n        ] // PromQL vector matching + the by and without clauses\n        ;\n        // (https://prometheus.io/docs/prometheus/latest/querying/operators/#vector-matching)\n        var vectorMatching = [\n            \"on\",\n            \"ignoring\",\n            \"group_right\",\n            \"group_left\",\n            \"by\",\n            \"without\"\n        ] // PromQL offset modifier\n        ;\n        // (https://prometheus.io/docs/prometheus/latest/querying/basics/#offset-modifier)\n        var offsetModifier = [\n            \"offset\"\n        ];\n        var keywords = aggregations.concat(vectorMatching, offsetModifier);\n        Prism.languages.promql = {\n            comment: {\n                pattern: /(^[ \\t]*)#.*/m,\n                lookbehind: true\n            },\n            \"vector-match\": {\n                // Match the comma-separated label lists inside vector matching:\n                pattern: new RegExp(\"((?:\" + vectorMatching.join(\"|\") + \")\\\\s*)\\\\([^)]*\\\\)\"),\n                lookbehind: true,\n                inside: {\n                    \"label-key\": {\n                        pattern: /\\b[^,]+\\b/,\n                        alias: \"attr-name\"\n                    },\n                    punctuation: /[(),]/\n                }\n            },\n            \"context-labels\": {\n                pattern: /\\{[^{}]*\\}/,\n                inside: {\n                    \"label-key\": {\n                        pattern: /\\b[a-z_]\\w*(?=\\s*(?:=|![=~]))/,\n                        alias: \"attr-name\"\n                    },\n                    \"label-value\": {\n                        pattern: /([\"'`])(?:\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1/,\n                        greedy: true,\n                        alias: \"attr-value\"\n                    },\n                    punctuation: /\\{|\\}|=~?|![=~]|,/\n                }\n            },\n            \"context-range\": [\n                {\n                    pattern: /\\[[\\w\\s:]+\\]/,\n                    // [1m]\n                    inside: {\n                        punctuation: /\\[|\\]|:/,\n                        \"range-duration\": {\n                            pattern: /\\b(?:\\d+(?:[smhdwy]|ms))+\\b/i,\n                            alias: \"number\"\n                        }\n                    }\n                },\n                {\n                    pattern: /(\\boffset\\s+)\\w+/,\n                    // offset 1m\n                    lookbehind: true,\n                    inside: {\n                        \"range-duration\": {\n                            pattern: /\\b(?:\\d+(?:[smhdwy]|ms))+\\b/i,\n                            alias: \"number\"\n                        }\n                    }\n                }\n            ],\n            keyword: new RegExp(\"\\\\b(?:\" + keywords.join(\"|\") + \")\\\\b\", \"i\"),\n            function: /\\b[a-z_]\\w*(?=\\s*\\()/i,\n            number: /[-+]?(?:(?:\\b\\d+(?:\\.\\d+)?|\\B\\.\\d+)(?:e[-+]?\\d+)?\\b|\\b(?:0x[0-9a-f]+|nan|inf)\\b)/i,\n            operator: /[\\^*/%+-]|==|!=|<=|<|>=|>|\\b(?:and|or|unless)\\b/i,\n            punctuation: /[{};()`,.[\\]]/\n        };\n    })(Prism);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9wcm9tcWwuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQUEsT0FBT0MsT0FBTyxHQUFHQztBQUNqQkEsT0FBT0MsV0FBVyxHQUFHO0FBQ3JCRCxPQUFPRSxPQUFPLEdBQUcsRUFBRTtBQUNuQixTQUFTRixPQUFPRyxLQUFLO0lBQ25CLG9HQUFvRztJQUNwRyx3RUFBd0U7O0lBQ3RFLFVBQVVBLEtBQUs7UUFDZiwrQkFBK0I7UUFDL0IsMkZBQTJGO1FBQzNGLElBQUlDLGVBQWU7WUFDakI7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0QsQ0FBQyxzREFBc0Q7O1FBQ3hELHFGQUFxRjtRQUNyRixJQUFJQyxpQkFBaUI7WUFDbkI7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0QsQ0FBQyx5QkFBeUI7O1FBQzNCLGtGQUFrRjtRQUNsRixJQUFJQyxpQkFBaUI7WUFBQztTQUFTO1FBQy9CLElBQUlDLFdBQVdILGFBQWFJLE1BQU0sQ0FBQ0gsZ0JBQWdCQztRQUNuREgsTUFBTU0sU0FBUyxDQUFDVCxNQUFNLEdBQUc7WUFDdkJVLFNBQVM7Z0JBQ1BDLFNBQVM7Z0JBQ1RDLFlBQVk7WUFDZDtZQUNBLGdCQUFnQjtnQkFDZCxnRUFBZ0U7Z0JBQ2hFRCxTQUFTLElBQUlFLE9BQ1gsU0FBU1IsZUFBZVMsSUFBSSxDQUFDLE9BQU87Z0JBRXRDRixZQUFZO2dCQUNaRyxRQUFRO29CQUNOLGFBQWE7d0JBQ1hKLFNBQVM7d0JBQ1RLLE9BQU87b0JBQ1Q7b0JBQ0FDLGFBQWE7Z0JBQ2Y7WUFDRjtZQUNBLGtCQUFrQjtnQkFDaEJOLFNBQVM7Z0JBQ1RJLFFBQVE7b0JBQ04sYUFBYTt3QkFDWEosU0FBUzt3QkFDVEssT0FBTztvQkFDVDtvQkFDQSxlQUFlO3dCQUNiTCxTQUFTO3dCQUNUTyxRQUFRO3dCQUNSRixPQUFPO29CQUNUO29CQUNBQyxhQUFhO2dCQUNmO1lBQ0Y7WUFDQSxpQkFBaUI7Z0JBQ2Y7b0JBQ0VOLFNBQVM7b0JBQ1QsT0FBTztvQkFDUEksUUFBUTt3QkFDTkUsYUFBYTt3QkFDYixrQkFBa0I7NEJBQ2hCTixTQUFTOzRCQUNUSyxPQUFPO3dCQUNUO29CQUNGO2dCQUNGO2dCQUNBO29CQUNFTCxTQUFTO29CQUNULFlBQVk7b0JBQ1pDLFlBQVk7b0JBQ1pHLFFBQVE7d0JBQ04sa0JBQWtCOzRCQUNoQkosU0FBUzs0QkFDVEssT0FBTzt3QkFDVDtvQkFDRjtnQkFDRjthQUNEO1lBQ0RHLFNBQVMsSUFBSU4sT0FBTyxXQUFXTixTQUFTTyxJQUFJLENBQUMsT0FBTyxRQUFRO1lBQzVETSxVQUFVO1lBQ1ZDLFFBQ0U7WUFDRkMsVUFBVTtZQUNWTCxhQUFhO1FBQ2Y7SUFDRixHQUFHZDtBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9wcm9tcWwuanM/NzY4MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBwcm9tcWxcbnByb21xbC5kaXNwbGF5TmFtZSA9ICdwcm9tcWwnXG5wcm9tcWwuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBwcm9tcWwoUHJpc20pIHtcbiAgLy8gVGhhbmtzIHRvOiBodHRwczovL2dpdGh1Yi5jb20vcHJvbWV0aGV1cy1jb21tdW5pdHkvbW9uYWNvLXByb21xbC9ibG9iL21hc3Rlci9zcmMvcHJvbXFsL3Byb21xbC50c1xuICAvLyBBcyB3ZWxsIGFzOiBodHRwczovL2thdXNhbC5jby9ibG9nL3NsYXRlLXByaXNtLWFkZC1uZXctc3ludGF4LXByb21xbC9cbiAgOyhmdW5jdGlvbiAoUHJpc20pIHtcbiAgICAvLyBQcm9tUUwgQWdncmVnYXRpb24gT3BlcmF0b3JzXG4gICAgLy8gKGh0dHBzOi8vcHJvbWV0aGV1cy5pby9kb2NzL3Byb21ldGhldXMvbGF0ZXN0L3F1ZXJ5aW5nL29wZXJhdG9ycy8jYWdncmVnYXRpb24tb3BlcmF0b3JzKVxuICAgIHZhciBhZ2dyZWdhdGlvbnMgPSBbXG4gICAgICAnc3VtJyxcbiAgICAgICdtaW4nLFxuICAgICAgJ21heCcsXG4gICAgICAnYXZnJyxcbiAgICAgICdncm91cCcsXG4gICAgICAnc3RkZGV2JyxcbiAgICAgICdzdGR2YXInLFxuICAgICAgJ2NvdW50JyxcbiAgICAgICdjb3VudF92YWx1ZXMnLFxuICAgICAgJ2JvdHRvbWsnLFxuICAgICAgJ3RvcGsnLFxuICAgICAgJ3F1YW50aWxlJ1xuICAgIF0gLy8gUHJvbVFMIHZlY3RvciBtYXRjaGluZyArIHRoZSBieSBhbmQgd2l0aG91dCBjbGF1c2VzXG4gICAgLy8gKGh0dHBzOi8vcHJvbWV0aGV1cy5pby9kb2NzL3Byb21ldGhldXMvbGF0ZXN0L3F1ZXJ5aW5nL29wZXJhdG9ycy8jdmVjdG9yLW1hdGNoaW5nKVxuICAgIHZhciB2ZWN0b3JNYXRjaGluZyA9IFtcbiAgICAgICdvbicsXG4gICAgICAnaWdub3JpbmcnLFxuICAgICAgJ2dyb3VwX3JpZ2h0JyxcbiAgICAgICdncm91cF9sZWZ0JyxcbiAgICAgICdieScsXG4gICAgICAnd2l0aG91dCdcbiAgICBdIC8vIFByb21RTCBvZmZzZXQgbW9kaWZpZXJcbiAgICAvLyAoaHR0cHM6Ly9wcm9tZXRoZXVzLmlvL2RvY3MvcHJvbWV0aGV1cy9sYXRlc3QvcXVlcnlpbmcvYmFzaWNzLyNvZmZzZXQtbW9kaWZpZXIpXG4gICAgdmFyIG9mZnNldE1vZGlmaWVyID0gWydvZmZzZXQnXVxuICAgIHZhciBrZXl3b3JkcyA9IGFnZ3JlZ2F0aW9ucy5jb25jYXQodmVjdG9yTWF0Y2hpbmcsIG9mZnNldE1vZGlmaWVyKVxuICAgIFByaXNtLmxhbmd1YWdlcy5wcm9tcWwgPSB7XG4gICAgICBjb21tZW50OiB7XG4gICAgICAgIHBhdHRlcm46IC8oXlsgXFx0XSopIy4qL20sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAndmVjdG9yLW1hdGNoJzoge1xuICAgICAgICAvLyBNYXRjaCB0aGUgY29tbWEtc2VwYXJhdGVkIGxhYmVsIGxpc3RzIGluc2lkZSB2ZWN0b3IgbWF0Y2hpbmc6XG4gICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoXG4gICAgICAgICAgJygoPzonICsgdmVjdG9yTWF0Y2hpbmcuam9pbignfCcpICsgJylcXFxccyopXFxcXChbXildKlxcXFwpJ1xuICAgICAgICApLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAnbGFiZWwta2V5Jzoge1xuICAgICAgICAgICAgcGF0dGVybjogL1xcYlteLF0rXFxiLyxcbiAgICAgICAgICAgIGFsaWFzOiAnYXR0ci1uYW1lJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcHVuY3R1YXRpb246IC9bKCksXS9cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICdjb250ZXh0LWxhYmVscyc6IHtcbiAgICAgICAgcGF0dGVybjogL1xce1tee31dKlxcfS8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgICdsYWJlbC1rZXknOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXFxiW2Etel9dXFx3Kig/PVxccyooPzo9fCFbPX5dKSkvLFxuICAgICAgICAgICAgYWxpYXM6ICdhdHRyLW5hbWUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnbGFiZWwtdmFsdWUnOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKFtcIidgXSkoPzpcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pKlxcMS8sXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgICAgICBhbGlhczogJ2F0dHItdmFsdWUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwdW5jdHVhdGlvbjogL1xce3xcXH18PX4/fCFbPX5dfCwvXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnY29udGV4dC1yYW5nZSc6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC9cXFtbXFx3XFxzOl0rXFxdLyxcbiAgICAgICAgICAvLyBbMW1dXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICBwdW5jdHVhdGlvbjogL1xcW3xcXF18Oi8sXG4gICAgICAgICAgICAncmFuZ2UtZHVyYXRpb24nOiB7XG4gICAgICAgICAgICAgIHBhdHRlcm46IC9cXGIoPzpcXGQrKD86W3NtaGR3eV18bXMpKStcXGIvaSxcbiAgICAgICAgICAgICAgYWxpYXM6ICdudW1iZXInXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0dGVybjogLyhcXGJvZmZzZXRcXHMrKVxcdysvLFxuICAgICAgICAgIC8vIG9mZnNldCAxbVxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAncmFuZ2UtZHVyYXRpb24nOiB7XG4gICAgICAgICAgICAgIHBhdHRlcm46IC9cXGIoPzpcXGQrKD86W3NtaGR3eV18bXMpKStcXGIvaSxcbiAgICAgICAgICAgICAgYWxpYXM6ICdudW1iZXInXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAga2V5d29yZDogbmV3IFJlZ0V4cCgnXFxcXGIoPzonICsga2V5d29yZHMuam9pbignfCcpICsgJylcXFxcYicsICdpJyksXG4gICAgICBmdW5jdGlvbjogL1xcYlthLXpfXVxcdyooPz1cXHMqXFwoKS9pLFxuICAgICAgbnVtYmVyOlxuICAgICAgICAvWy0rXT8oPzooPzpcXGJcXGQrKD86XFwuXFxkKyk/fFxcQlxcLlxcZCspKD86ZVstK10/XFxkKyk/XFxifFxcYig/OjB4WzAtOWEtZl0rfG5hbnxpbmYpXFxiKS9pLFxuICAgICAgb3BlcmF0b3I6IC9bXFxeKi8lKy1dfD09fCE9fDw9fDx8Pj18PnxcXGIoPzphbmR8b3J8dW5sZXNzKVxcYi9pLFxuICAgICAgcHVuY3R1YXRpb246IC9be307KClgLC5bXFxdXS9cbiAgICB9XG4gIH0pKFByaXNtKVxufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJwcm9tcWwiLCJkaXNwbGF5TmFtZSIsImFsaWFzZXMiLCJQcmlzbSIsImFnZ3JlZ2F0aW9ucyIsInZlY3Rvck1hdGNoaW5nIiwib2Zmc2V0TW9kaWZpZXIiLCJrZXl3b3JkcyIsImNvbmNhdCIsImxhbmd1YWdlcyIsImNvbW1lbnQiLCJwYXR0ZXJuIiwibG9va2JlaGluZCIsIlJlZ0V4cCIsImpvaW4iLCJpbnNpZGUiLCJhbGlhcyIsInB1bmN0dWF0aW9uIiwiZ3JlZWR5Iiwia2V5d29yZCIsImZ1bmN0aW9uIiwibnVtYmVyIiwib3BlcmF0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/promql.js\n"));

/***/ })

}]);