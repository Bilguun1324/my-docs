"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_ejs"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/ejs.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/ejs.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nvar refractorMarkupTemplating = __webpack_require__(/*! ./markup-templating.js */ \"(app-pages-browser)/./node_modules/refractor/lang/markup-templating.js\");\nmodule.exports = ejs;\nejs.displayName = \"ejs\";\nejs.aliases = [\n    \"eta\"\n];\nfunction ejs(Prism) {\n    Prism.register(refractorMarkupTemplating);\n    (function(Prism) {\n        Prism.languages.ejs = {\n            delimiter: {\n                pattern: /^<%[-_=]?|[-_]?%>$/,\n                alias: \"punctuation\"\n            },\n            comment: /^#[\\s\\S]*/,\n            \"language-javascript\": {\n                pattern: /[\\s\\S]+/,\n                inside: Prism.languages.javascript\n            }\n        };\n        Prism.hooks.add(\"before-tokenize\", function(env) {\n            var ejsPattern = /<%(?!%)[\\s\\S]+?%>/g;\n            Prism.languages[\"markup-templating\"].buildPlaceholders(env, \"ejs\", ejsPattern);\n        });\n        Prism.hooks.add(\"after-tokenize\", function(env) {\n            Prism.languages[\"markup-templating\"].tokenizePlaceholders(env, \"ejs\");\n        });\n        Prism.languages.eta = Prism.languages.ejs;\n    })(Prism);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9lanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxJQUFJQSw0QkFBNEJDLG1CQUFPQSxDQUFDO0FBQ3hDQyxPQUFPQyxPQUFPLEdBQUdDO0FBQ2pCQSxJQUFJQyxXQUFXLEdBQUc7QUFDbEJELElBQUlFLE9BQU8sR0FBRztJQUFDO0NBQU07QUFDckIsU0FBU0YsSUFBSUcsS0FBSztJQUNoQkEsTUFBTUMsUUFBUSxDQUFDUjtJQUNiLFVBQVVPLEtBQUs7UUFDZkEsTUFBTUUsU0FBUyxDQUFDTCxHQUFHLEdBQUc7WUFDcEJNLFdBQVc7Z0JBQ1RDLFNBQVM7Z0JBQ1RDLE9BQU87WUFDVDtZQUNBQyxTQUFTO1lBQ1QsdUJBQXVCO2dCQUNyQkYsU0FBUztnQkFDVEcsUUFBUVAsTUFBTUUsU0FBUyxDQUFDTSxVQUFVO1lBQ3BDO1FBQ0Y7UUFDQVIsTUFBTVMsS0FBSyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLFNBQVVDLEdBQUc7WUFDOUMsSUFBSUMsYUFBYTtZQUNqQlosTUFBTUUsU0FBUyxDQUFDLG9CQUFvQixDQUFDVyxpQkFBaUIsQ0FDcERGLEtBQ0EsT0FDQUM7UUFFSjtRQUNBWixNQUFNUyxLQUFLLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsU0FBVUMsR0FBRztZQUM3Q1gsTUFBTUUsU0FBUyxDQUFDLG9CQUFvQixDQUFDWSxvQkFBb0IsQ0FBQ0gsS0FBSztRQUNqRTtRQUNBWCxNQUFNRSxTQUFTLENBQUNhLEdBQUcsR0FBR2YsTUFBTUUsU0FBUyxDQUFDTCxHQUFHO0lBQzNDLEdBQUdHO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2Vqcy5qcz84NjAwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xudmFyIHJlZnJhY3Rvck1hcmt1cFRlbXBsYXRpbmcgPSByZXF1aXJlKCcuL21hcmt1cC10ZW1wbGF0aW5nLmpzJylcbm1vZHVsZS5leHBvcnRzID0gZWpzXG5lanMuZGlzcGxheU5hbWUgPSAnZWpzJ1xuZWpzLmFsaWFzZXMgPSBbJ2V0YSddXG5mdW5jdGlvbiBlanMoUHJpc20pIHtcbiAgUHJpc20ucmVnaXN0ZXIocmVmcmFjdG9yTWFya3VwVGVtcGxhdGluZylcbiAgOyhmdW5jdGlvbiAoUHJpc20pIHtcbiAgICBQcmlzbS5sYW5ndWFnZXMuZWpzID0ge1xuICAgICAgZGVsaW1pdGVyOiB7XG4gICAgICAgIHBhdHRlcm46IC9ePCVbLV89XT98Wy1fXT8lPiQvLFxuICAgICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJ1xuICAgICAgfSxcbiAgICAgIGNvbW1lbnQ6IC9eI1tcXHNcXFNdKi8sXG4gICAgICAnbGFuZ3VhZ2UtamF2YXNjcmlwdCc6IHtcbiAgICAgICAgcGF0dGVybjogL1tcXHNcXFNdKy8sXG4gICAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcbiAgICAgIH1cbiAgICB9XG4gICAgUHJpc20uaG9va3MuYWRkKCdiZWZvcmUtdG9rZW5pemUnLCBmdW5jdGlvbiAoZW52KSB7XG4gICAgICB2YXIgZWpzUGF0dGVybiA9IC88JSg/ISUpW1xcc1xcU10rPyU+L2dcbiAgICAgIFByaXNtLmxhbmd1YWdlc1snbWFya3VwLXRlbXBsYXRpbmcnXS5idWlsZFBsYWNlaG9sZGVycyhcbiAgICAgICAgZW52LFxuICAgICAgICAnZWpzJyxcbiAgICAgICAgZWpzUGF0dGVyblxuICAgICAgKVxuICAgIH0pXG4gICAgUHJpc20uaG9va3MuYWRkKCdhZnRlci10b2tlbml6ZScsIGZ1bmN0aW9uIChlbnYpIHtcbiAgICAgIFByaXNtLmxhbmd1YWdlc1snbWFya3VwLXRlbXBsYXRpbmcnXS50b2tlbml6ZVBsYWNlaG9sZGVycyhlbnYsICdlanMnKVxuICAgIH0pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmV0YSA9IFByaXNtLmxhbmd1YWdlcy5lanNcbiAgfSkoUHJpc20pXG59XG4iXSwibmFtZXMiOlsicmVmcmFjdG9yTWFya3VwVGVtcGxhdGluZyIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZWpzIiwiZGlzcGxheU5hbWUiLCJhbGlhc2VzIiwiUHJpc20iLCJyZWdpc3RlciIsImxhbmd1YWdlcyIsImRlbGltaXRlciIsInBhdHRlcm4iLCJhbGlhcyIsImNvbW1lbnQiLCJpbnNpZGUiLCJqYXZhc2NyaXB0IiwiaG9va3MiLCJhZGQiLCJlbnYiLCJlanNQYXR0ZXJuIiwiYnVpbGRQbGFjZWhvbGRlcnMiLCJ0b2tlbml6ZVBsYWNlaG9sZGVycyIsImV0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/ejs.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/refractor/lang/markup-templating.js":
/*!**********************************************************!*\
  !*** ./node_modules/refractor/lang/markup-templating.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nmodule.exports = markupTemplating;\nmarkupTemplating.displayName = \"markupTemplating\";\nmarkupTemplating.aliases = [];\nfunction markupTemplating(Prism) {\n    ;\n    (function(Prism) {\n        /**\n     * Returns the placeholder for the given language id and index.\n     *\n     * @param {string} language\n     * @param {string|number} index\n     * @returns {string}\n     */ function getPlaceholder(language, index) {\n            return \"___\" + language.toUpperCase() + index + \"___\";\n        }\n        Object.defineProperties(Prism.languages[\"markup-templating\"] = {}, {\n            buildPlaceholders: {\n                /**\n         * Tokenize all inline templating expressions matching `placeholderPattern`.\n         *\n         * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns\n         * `true` will be replaced.\n         *\n         * @param {object} env The environment of the `before-tokenize` hook.\n         * @param {string} language The language id.\n         * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.\n         * @param {(match: string) => boolean} [replaceFilter]\n         */ value: function(env, language, placeholderPattern, replaceFilter) {\n                    if (env.language !== language) {\n                        return;\n                    }\n                    var tokenStack = env.tokenStack = [];\n                    env.code = env.code.replace(placeholderPattern, function(match) {\n                        if (typeof replaceFilter === \"function\" && !replaceFilter(match)) {\n                            return match;\n                        }\n                        var i = tokenStack.length;\n                        var placeholder // Check for existing strings\n                        ;\n                        while(env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1){\n                            ++i;\n                        } // Create a sparse array\n                        tokenStack[i] = match;\n                        return placeholder;\n                    }) // Switch the grammar to markup\n                    ;\n                    env.grammar = Prism.languages.markup;\n                }\n            },\n            tokenizePlaceholders: {\n                /**\n         * Replace placeholders with proper tokens after tokenizing.\n         *\n         * @param {object} env The environment of the `after-tokenize` hook.\n         * @param {string} language The language id.\n         */ value: function(env, language) {\n                    if (env.language !== language || !env.tokenStack) {\n                        return;\n                    } // Switch the grammar back\n                    env.grammar = Prism.languages[language];\n                    var j = 0;\n                    var keys = Object.keys(env.tokenStack);\n                    function walkTokens(tokens) {\n                        for(var i = 0; i < tokens.length; i++){\n                            // all placeholders are replaced already\n                            if (j >= keys.length) {\n                                break;\n                            }\n                            var token = tokens[i];\n                            if (typeof token === \"string\" || token.content && typeof token.content === \"string\") {\n                                var k = keys[j];\n                                var t = env.tokenStack[k];\n                                var s = typeof token === \"string\" ? token : token.content;\n                                var placeholder = getPlaceholder(language, k);\n                                var index = s.indexOf(placeholder);\n                                if (index > -1) {\n                                    ++j;\n                                    var before = s.substring(0, index);\n                                    var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), \"language-\" + language, t);\n                                    var after = s.substring(index + placeholder.length);\n                                    var replacement = [];\n                                    if (before) {\n                                        replacement.push.apply(replacement, walkTokens([\n                                            before\n                                        ]));\n                                    }\n                                    replacement.push(middle);\n                                    if (after) {\n                                        replacement.push.apply(replacement, walkTokens([\n                                            after\n                                        ]));\n                                    }\n                                    if (typeof token === \"string\") {\n                                        tokens.splice.apply(tokens, [\n                                            i,\n                                            1\n                                        ].concat(replacement));\n                                    } else {\n                                        token.content = replacement;\n                                    }\n                                }\n                            } else if (token.content) {\n                                walkTokens(token.content);\n                            }\n                        }\n                        return tokens;\n                    }\n                    walkTokens(env.tokens);\n                }\n            }\n        });\n    })(Prism);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9tYXJrdXAtdGVtcGxhdGluZy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxPQUFPQyxPQUFPLEdBQUdDO0FBQ2pCQSxpQkFBaUJDLFdBQVcsR0FBRztBQUMvQkQsaUJBQWlCRSxPQUFPLEdBQUcsRUFBRTtBQUM3QixTQUFTRixpQkFBaUJHLEtBQUs7O0lBQzNCLFVBQVVBLEtBQUs7UUFDZjs7Ozs7O0tBTUMsR0FDRCxTQUFTQyxlQUFlQyxRQUFRLEVBQUVDLEtBQUs7WUFDckMsT0FBTyxRQUFRRCxTQUFTRSxXQUFXLEtBQUtELFFBQVE7UUFDbEQ7UUFDQUUsT0FBT0MsZ0JBQWdCLENBQUVOLE1BQU1PLFNBQVMsQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLEdBQUk7WUFDbkVDLG1CQUFtQjtnQkFDakI7Ozs7Ozs7Ozs7U0FVQyxHQUNEQyxPQUFPLFNBQVVDLEdBQUcsRUFBRVIsUUFBUSxFQUFFUyxrQkFBa0IsRUFBRUMsYUFBYTtvQkFDL0QsSUFBSUYsSUFBSVIsUUFBUSxLQUFLQSxVQUFVO3dCQUM3QjtvQkFDRjtvQkFDQSxJQUFJVyxhQUFjSCxJQUFJRyxVQUFVLEdBQUcsRUFBRTtvQkFDckNILElBQUlJLElBQUksR0FBR0osSUFBSUksSUFBSSxDQUFDQyxPQUFPLENBQUNKLG9CQUFvQixTQUFVSyxLQUFLO3dCQUM3RCxJQUFJLE9BQU9KLGtCQUFrQixjQUFjLENBQUNBLGNBQWNJLFFBQVE7NEJBQ2hFLE9BQU9BO3dCQUNUO3dCQUNBLElBQUlDLElBQUlKLFdBQVdLLE1BQU07d0JBQ3pCLElBQUlDLFlBQVksNkJBQTZCOzt3QkFDN0MsTUFDRVQsSUFBSUksSUFBSSxDQUFDTSxPQUFPLENBQUVELGNBQWNsQixlQUFlQyxVQUFVZSxRQUN6RCxDQUFDLEVBQ0Q7NEJBQ0EsRUFBRUE7d0JBQ0osRUFBRSx3QkFBd0I7d0JBQzFCSixVQUFVLENBQUNJLEVBQUUsR0FBR0Q7d0JBQ2hCLE9BQU9HO29CQUNULEdBQUcsK0JBQStCOztvQkFDbENULElBQUlXLE9BQU8sR0FBR3JCLE1BQU1PLFNBQVMsQ0FBQ2UsTUFBTTtnQkFDdEM7WUFDRjtZQUNBQyxzQkFBc0I7Z0JBQ3BCOzs7OztTQUtDLEdBQ0RkLE9BQU8sU0FBVUMsR0FBRyxFQUFFUixRQUFRO29CQUM1QixJQUFJUSxJQUFJUixRQUFRLEtBQUtBLFlBQVksQ0FBQ1EsSUFBSUcsVUFBVSxFQUFFO3dCQUNoRDtvQkFDRixFQUFFLDBCQUEwQjtvQkFDNUJILElBQUlXLE9BQU8sR0FBR3JCLE1BQU1PLFNBQVMsQ0FBQ0wsU0FBUztvQkFDdkMsSUFBSXNCLElBQUk7b0JBQ1IsSUFBSUMsT0FBT3BCLE9BQU9vQixJQUFJLENBQUNmLElBQUlHLFVBQVU7b0JBQ3JDLFNBQVNhLFdBQVdDLE1BQU07d0JBQ3hCLElBQUssSUFBSVYsSUFBSSxHQUFHQSxJQUFJVSxPQUFPVCxNQUFNLEVBQUVELElBQUs7NEJBQ3RDLHdDQUF3Qzs0QkFDeEMsSUFBSU8sS0FBS0MsS0FBS1AsTUFBTSxFQUFFO2dDQUNwQjs0QkFDRjs0QkFDQSxJQUFJVSxRQUFRRCxNQUFNLENBQUNWLEVBQUU7NEJBQ3JCLElBQ0UsT0FBT1csVUFBVSxZQUNoQkEsTUFBTUMsT0FBTyxJQUFJLE9BQU9ELE1BQU1DLE9BQU8sS0FBSyxVQUMzQztnQ0FDQSxJQUFJQyxJQUFJTCxJQUFJLENBQUNELEVBQUU7Z0NBQ2YsSUFBSU8sSUFBSXJCLElBQUlHLFVBQVUsQ0FBQ2lCLEVBQUU7Z0NBQ3pCLElBQUlFLElBQUksT0FBT0osVUFBVSxXQUFXQSxRQUFRQSxNQUFNQyxPQUFPO2dDQUN6RCxJQUFJVixjQUFjbEIsZUFBZUMsVUFBVTRCO2dDQUMzQyxJQUFJM0IsUUFBUTZCLEVBQUVaLE9BQU8sQ0FBQ0Q7Z0NBQ3RCLElBQUloQixRQUFRLENBQUMsR0FBRztvQ0FDZCxFQUFFcUI7b0NBQ0YsSUFBSVMsU0FBU0QsRUFBRUUsU0FBUyxDQUFDLEdBQUcvQjtvQ0FDNUIsSUFBSWdDLFNBQVMsSUFBSW5DLE1BQU1vQyxLQUFLLENBQzFCbEMsVUFDQUYsTUFBTXFDLFFBQVEsQ0FBQ04sR0FBR3JCLElBQUlXLE9BQU8sR0FDN0IsY0FBY25CLFVBQ2Q2QjtvQ0FFRixJQUFJTyxRQUFRTixFQUFFRSxTQUFTLENBQUMvQixRQUFRZ0IsWUFBWUQsTUFBTTtvQ0FDbEQsSUFBSXFCLGNBQWMsRUFBRTtvQ0FDcEIsSUFBSU4sUUFBUTt3Q0FDVk0sWUFBWUMsSUFBSSxDQUFDQyxLQUFLLENBQUNGLGFBQWFiLFdBQVc7NENBQUNPO3lDQUFPO29DQUN6RDtvQ0FDQU0sWUFBWUMsSUFBSSxDQUFDTDtvQ0FDakIsSUFBSUcsT0FBTzt3Q0FDVEMsWUFBWUMsSUFBSSxDQUFDQyxLQUFLLENBQUNGLGFBQWFiLFdBQVc7NENBQUNZO3lDQUFNO29DQUN4RDtvQ0FDQSxJQUFJLE9BQU9WLFVBQVUsVUFBVTt3Q0FDN0JELE9BQU9lLE1BQU0sQ0FBQ0QsS0FBSyxDQUFDZCxRQUFROzRDQUFDVjs0Q0FBRzt5Q0FBRSxDQUFDMEIsTUFBTSxDQUFDSjtvQ0FDNUMsT0FBTzt3Q0FDTFgsTUFBTUMsT0FBTyxHQUFHVTtvQ0FDbEI7Z0NBQ0Y7NEJBQ0YsT0FBTyxJQUNMWCxNQUFNQyxPQUFPLEVBRWI7Z0NBQ0FILFdBQVdFLE1BQU1DLE9BQU87NEJBQzFCO3dCQUNGO3dCQUNBLE9BQU9GO29CQUNUO29CQUNBRCxXQUFXaEIsSUFBSWlCLE1BQU07Z0JBQ3ZCO1lBQ0Y7UUFDRjtJQUNGLEdBQUczQjtBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9tYXJrdXAtdGVtcGxhdGluZy5qcz83YzdmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcmt1cFRlbXBsYXRpbmdcbm1hcmt1cFRlbXBsYXRpbmcuZGlzcGxheU5hbWUgPSAnbWFya3VwVGVtcGxhdGluZydcbm1hcmt1cFRlbXBsYXRpbmcuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBtYXJrdXBUZW1wbGF0aW5nKFByaXNtKSB7XG4gIDsoZnVuY3Rpb24gKFByaXNtKSB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcGxhY2Vob2xkZXIgZm9yIHRoZSBnaXZlbiBsYW5ndWFnZSBpZCBhbmQgaW5kZXguXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRQbGFjZWhvbGRlcihsYW5ndWFnZSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiAnX19fJyArIGxhbmd1YWdlLnRvVXBwZXJDYXNlKCkgKyBpbmRleCArICdfX18nXG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKChQcmlzbS5sYW5ndWFnZXNbJ21hcmt1cC10ZW1wbGF0aW5nJ10gPSB7fSksIHtcbiAgICAgIGJ1aWxkUGxhY2Vob2xkZXJzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUb2tlbml6ZSBhbGwgaW5saW5lIHRlbXBsYXRpbmcgZXhwcmVzc2lvbnMgbWF0Y2hpbmcgYHBsYWNlaG9sZGVyUGF0dGVybmAuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIGByZXBsYWNlRmlsdGVyYCBpcyBwcm92aWRlZCwgb25seSBtYXRjaGVzIG9mIGBwbGFjZWhvbGRlclBhdHRlcm5gIGZvciB3aGljaCBgcmVwbGFjZUZpbHRlcmAgcmV0dXJuc1xuICAgICAgICAgKiBgdHJ1ZWAgd2lsbCBiZSByZXBsYWNlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IGVudiBUaGUgZW52aXJvbm1lbnQgb2YgdGhlIGBiZWZvcmUtdG9rZW5pemVgIGhvb2suXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSBUaGUgbGFuZ3VhZ2UgaWQuXG4gICAgICAgICAqIEBwYXJhbSB7UmVnRXhwfSBwbGFjZWhvbGRlclBhdHRlcm4gVGhlIG1hdGNoZXMgb2YgdGhpcyBwYXR0ZXJuIHdpbGwgYmUgcmVwbGFjZWQgYnkgcGxhY2Vob2xkZXJzLlxuICAgICAgICAgKiBAcGFyYW0geyhtYXRjaDogc3RyaW5nKSA9PiBib29sZWFufSBbcmVwbGFjZUZpbHRlcl1cbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoZW52LCBsYW5ndWFnZSwgcGxhY2Vob2xkZXJQYXR0ZXJuLCByZXBsYWNlRmlsdGVyKSB7XG4gICAgICAgICAgaWYgKGVudi5sYW5ndWFnZSAhPT0gbGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgdG9rZW5TdGFjayA9IChlbnYudG9rZW5TdGFjayA9IFtdKVxuICAgICAgICAgIGVudi5jb2RlID0gZW52LmNvZGUucmVwbGFjZShwbGFjZWhvbGRlclBhdHRlcm4sIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXBsYWNlRmlsdGVyID09PSAnZnVuY3Rpb24nICYmICFyZXBsYWNlRmlsdGVyKG1hdGNoKSkge1xuICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpID0gdG9rZW5TdGFjay5sZW5ndGhcbiAgICAgICAgICAgIHZhciBwbGFjZWhvbGRlciAvLyBDaGVjayBmb3IgZXhpc3Rpbmcgc3RyaW5nc1xuICAgICAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgICBlbnYuY29kZS5pbmRleE9mKChwbGFjZWhvbGRlciA9IGdldFBsYWNlaG9sZGVyKGxhbmd1YWdlLCBpKSkpICE9PVxuICAgICAgICAgICAgICAtMVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICsraVxuICAgICAgICAgICAgfSAvLyBDcmVhdGUgYSBzcGFyc2UgYXJyYXlcbiAgICAgICAgICAgIHRva2VuU3RhY2tbaV0gPSBtYXRjaFxuICAgICAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyXG4gICAgICAgICAgfSkgLy8gU3dpdGNoIHRoZSBncmFtbWFyIHRvIG1hcmt1cFxuICAgICAgICAgIGVudi5ncmFtbWFyID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9rZW5pemVQbGFjZWhvbGRlcnM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlcGxhY2UgcGxhY2Vob2xkZXJzIHdpdGggcHJvcGVyIHRva2VucyBhZnRlciB0b2tlbml6aW5nLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gZW52IFRoZSBlbnZpcm9ubWVudCBvZiB0aGUgYGFmdGVyLXRva2VuaXplYCBob29rLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIGxhbmd1YWdlIGlkLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIChlbnYsIGxhbmd1YWdlKSB7XG4gICAgICAgICAgaWYgKGVudi5sYW5ndWFnZSAhPT0gbGFuZ3VhZ2UgfHwgIWVudi50b2tlblN0YWNrKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9IC8vIFN3aXRjaCB0aGUgZ3JhbW1hciBiYWNrXG4gICAgICAgICAgZW52LmdyYW1tYXIgPSBQcmlzbS5sYW5ndWFnZXNbbGFuZ3VhZ2VdXG4gICAgICAgICAgdmFyIGogPSAwXG4gICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhlbnYudG9rZW5TdGFjaylcbiAgICAgICAgICBmdW5jdGlvbiB3YWxrVG9rZW5zKHRva2Vucykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgLy8gYWxsIHBsYWNlaG9sZGVycyBhcmUgcmVwbGFjZWQgYWxyZWFkeVxuICAgICAgICAgICAgICBpZiAoaiA+PSBrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldXG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgICAgICAgKHRva2VuLmNvbnRlbnQgJiYgdHlwZW9mIHRva2VuLmNvbnRlbnQgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB2YXIgayA9IGtleXNbal1cbiAgICAgICAgICAgICAgICB2YXIgdCA9IGVudi50b2tlblN0YWNrW2tdXG4gICAgICAgICAgICAgICAgdmFyIHMgPSB0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnID8gdG9rZW4gOiB0b2tlbi5jb250ZW50XG4gICAgICAgICAgICAgICAgdmFyIHBsYWNlaG9sZGVyID0gZ2V0UGxhY2Vob2xkZXIobGFuZ3VhZ2UsIGspXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gcy5pbmRleE9mKHBsYWNlaG9sZGVyKVxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICArK2pcbiAgICAgICAgICAgICAgICAgIHZhciBiZWZvcmUgPSBzLnN1YnN0cmluZygwLCBpbmRleClcbiAgICAgICAgICAgICAgICAgIHZhciBtaWRkbGUgPSBuZXcgUHJpc20uVG9rZW4oXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgICAgICAgICAgICBQcmlzbS50b2tlbml6ZSh0LCBlbnYuZ3JhbW1hciksXG4gICAgICAgICAgICAgICAgICAgICdsYW5ndWFnZS0nICsgbGFuZ3VhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHRcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIHZhciBhZnRlciA9IHMuc3Vic3RyaW5nKGluZGV4ICsgcGxhY2Vob2xkZXIubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gW11cbiAgICAgICAgICAgICAgICAgIGlmIChiZWZvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZW1lbnQucHVzaC5hcHBseShyZXBsYWNlbWVudCwgd2Fsa1Rva2VucyhbYmVmb3JlXSkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXBsYWNlbWVudC5wdXNoKG1pZGRsZSlcbiAgICAgICAgICAgICAgICAgIGlmIChhZnRlcikge1xuICAgICAgICAgICAgICAgICAgICByZXBsYWNlbWVudC5wdXNoLmFwcGx5KHJlcGxhY2VtZW50LCB3YWxrVG9rZW5zKFthZnRlcl0pKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5zLnNwbGljZS5hcHBseSh0b2tlbnMsIFtpLCAxXS5jb25jYXQocmVwbGFjZW1lbnQpKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4uY29udGVudCA9IHJlcGxhY2VtZW50XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHRva2VuLmNvbnRlbnRcbiAgICAgICAgICAgICAgICAvKiAmJiB0eXBlb2YgdG9rZW4uY29udGVudCAhPT0gJ3N0cmluZycgKi9cbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgd2Fsa1Rva2Vucyh0b2tlbi5jb250ZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zXG4gICAgICAgICAgfVxuICAgICAgICAgIHdhbGtUb2tlbnMoZW52LnRva2VucylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pKFByaXNtKVxufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJtYXJrdXBUZW1wbGF0aW5nIiwiZGlzcGxheU5hbWUiLCJhbGlhc2VzIiwiUHJpc20iLCJnZXRQbGFjZWhvbGRlciIsImxhbmd1YWdlIiwiaW5kZXgiLCJ0b1VwcGVyQ2FzZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnRpZXMiLCJsYW5ndWFnZXMiLCJidWlsZFBsYWNlaG9sZGVycyIsInZhbHVlIiwiZW52IiwicGxhY2Vob2xkZXJQYXR0ZXJuIiwicmVwbGFjZUZpbHRlciIsInRva2VuU3RhY2siLCJjb2RlIiwicmVwbGFjZSIsIm1hdGNoIiwiaSIsImxlbmd0aCIsInBsYWNlaG9sZGVyIiwiaW5kZXhPZiIsImdyYW1tYXIiLCJtYXJrdXAiLCJ0b2tlbml6ZVBsYWNlaG9sZGVycyIsImoiLCJrZXlzIiwid2Fsa1Rva2VucyIsInRva2VucyIsInRva2VuIiwiY29udGVudCIsImsiLCJ0IiwicyIsImJlZm9yZSIsInN1YnN0cmluZyIsIm1pZGRsZSIsIlRva2VuIiwidG9rZW5pemUiLCJhZnRlciIsInJlcGxhY2VtZW50IiwicHVzaCIsImFwcGx5Iiwic3BsaWNlIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/markup-templating.js\n"));

/***/ })

}]);