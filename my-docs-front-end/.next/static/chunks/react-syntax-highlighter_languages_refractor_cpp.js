"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_cpp"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/c.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/c.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nmodule.exports = c;\nc.displayName = \"c\";\nc.aliases = [];\nfunction c(Prism) {\n    Prism.languages.c = Prism.languages.extend(\"clike\", {\n        comment: {\n            pattern: /\\/\\/(?:[^\\r\\n\\\\]|\\\\(?:\\r\\n?|\\n|(?![\\r\\n])))*|\\/\\*[\\s\\S]*?(?:\\*\\/|$)/,\n            greedy: true\n        },\n        string: {\n            // https://en.cppreference.com/w/c/language/string_literal\n            pattern: /\"(?:\\\\(?:\\r\\n|[\\s\\S])|[^\"\\\\\\r\\n])*\"/,\n            greedy: true\n        },\n        \"class-name\": {\n            pattern: /(\\b(?:enum|struct)\\s+(?:__attribute__\\s*\\(\\([\\s\\S]*?\\)\\)\\s*)?)\\w+|\\b[a-z]\\w*_t\\b/,\n            lookbehind: true\n        },\n        keyword: /\\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\\b/,\n        function: /\\b[a-z_]\\w*(?=\\s*\\()/i,\n        number: /(?:\\b0x(?:[\\da-f]+(?:\\.[\\da-f]*)?|\\.[\\da-f]+)(?:p[+-]?\\d+)?|(?:\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+)(?:e[+-]?\\d+)?)[ful]{0,4}/i,\n        operator: />>=?|<<=?|->|([-+&|:])\\1|[?:~]|[-+*/%&|^!=<>]=?/\n    });\n    Prism.languages.insertBefore(\"c\", \"string\", {\n        char: {\n            // https://en.cppreference.com/w/c/language/character_constant\n            pattern: /'(?:\\\\(?:\\r\\n|[\\s\\S])|[^'\\\\\\r\\n]){0,32}'/,\n            greedy: true\n        }\n    });\n    Prism.languages.insertBefore(\"c\", \"string\", {\n        macro: {\n            // allow for multiline macro definitions\n            // spaces after the # character compile fine with gcc\n            pattern: /(^[\\t ]*)#\\s*[a-z](?:[^\\r\\n\\\\/]|\\/(?!\\*)|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/|\\\\(?:\\r\\n|[\\s\\S]))*/im,\n            lookbehind: true,\n            greedy: true,\n            alias: \"property\",\n            inside: {\n                string: [\n                    {\n                        // highlight the path of the include statement as a string\n                        pattern: /^(#\\s*include\\s*)<[^>]+>/,\n                        lookbehind: true\n                    },\n                    Prism.languages.c[\"string\"]\n                ],\n                char: Prism.languages.c[\"char\"],\n                comment: Prism.languages.c[\"comment\"],\n                \"macro-name\": [\n                    {\n                        pattern: /(^#\\s*define\\s+)\\w+\\b(?!\\()/i,\n                        lookbehind: true\n                    },\n                    {\n                        pattern: /(^#\\s*define\\s+)\\w+\\b(?=\\()/i,\n                        lookbehind: true,\n                        alias: \"function\"\n                    }\n                ],\n                // highlight macro directives as keywords\n                directive: {\n                    pattern: /^(#\\s*)[a-z]+/,\n                    lookbehind: true,\n                    alias: \"keyword\"\n                },\n                \"directive-hash\": /^#/,\n                punctuation: /##|\\\\(?=[\\r\\n])/,\n                expression: {\n                    pattern: /\\S[\\s\\S]*/,\n                    inside: Prism.languages.c\n                }\n            }\n        }\n    });\n    Prism.languages.insertBefore(\"c\", \"function\", {\n        // highlight predefined macros as constants\n        constant: /\\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\\b/\n    });\n    delete Prism.languages.c[\"boolean\"];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9jLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUFBLE9BQU9DLE9BQU8sR0FBR0M7QUFDakJBLEVBQUVDLFdBQVcsR0FBRztBQUNoQkQsRUFBRUUsT0FBTyxHQUFHLEVBQUU7QUFDZCxTQUFTRixFQUFFRyxLQUFLO0lBQ2RBLE1BQU1DLFNBQVMsQ0FBQ0osQ0FBQyxHQUFHRyxNQUFNQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxTQUFTO1FBQ2xEQyxTQUFTO1lBQ1BDLFNBQ0U7WUFDRkMsUUFBUTtRQUNWO1FBQ0FDLFFBQVE7WUFDTiwwREFBMEQ7WUFDMURGLFNBQVM7WUFDVEMsUUFBUTtRQUNWO1FBQ0EsY0FBYztZQUNaRCxTQUNFO1lBQ0ZHLFlBQVk7UUFDZDtRQUNBQyxTQUNFO1FBQ0ZDLFVBQVU7UUFDVkMsUUFDRTtRQUNGQyxVQUFVO0lBQ1o7SUFDQVgsTUFBTUMsU0FBUyxDQUFDVyxZQUFZLENBQUMsS0FBSyxVQUFVO1FBQzFDQyxNQUFNO1lBQ0osOERBQThEO1lBQzlEVCxTQUFTO1lBQ1RDLFFBQVE7UUFDVjtJQUNGO0lBQ0FMLE1BQU1DLFNBQVMsQ0FBQ1csWUFBWSxDQUFDLEtBQUssVUFBVTtRQUMxQ0UsT0FBTztZQUNMLHdDQUF3QztZQUN4QyxxREFBcUQ7WUFDckRWLFNBQ0U7WUFDRkcsWUFBWTtZQUNaRixRQUFRO1lBQ1JVLE9BQU87WUFDUEMsUUFBUTtnQkFDTlYsUUFBUTtvQkFDTjt3QkFDRSwwREFBMEQ7d0JBQzFERixTQUFTO3dCQUNURyxZQUFZO29CQUNkO29CQUNBUCxNQUFNQyxTQUFTLENBQUNKLENBQUMsQ0FBQyxTQUFTO2lCQUM1QjtnQkFDRGdCLE1BQU1iLE1BQU1DLFNBQVMsQ0FBQ0osQ0FBQyxDQUFDLE9BQU87Z0JBQy9CTSxTQUFTSCxNQUFNQyxTQUFTLENBQUNKLENBQUMsQ0FBQyxVQUFVO2dCQUNyQyxjQUFjO29CQUNaO3dCQUNFTyxTQUFTO3dCQUNURyxZQUFZO29CQUNkO29CQUNBO3dCQUNFSCxTQUFTO3dCQUNURyxZQUFZO3dCQUNaUSxPQUFPO29CQUNUO2lCQUNEO2dCQUNELHlDQUF5QztnQkFDekNFLFdBQVc7b0JBQ1RiLFNBQVM7b0JBQ1RHLFlBQVk7b0JBQ1pRLE9BQU87Z0JBQ1Q7Z0JBQ0Esa0JBQWtCO2dCQUNsQkcsYUFBYTtnQkFDYkMsWUFBWTtvQkFDVmYsU0FBUztvQkFDVFksUUFBUWhCLE1BQU1DLFNBQVMsQ0FBQ0osQ0FBQztnQkFDM0I7WUFDRjtRQUNGO0lBQ0Y7SUFDQUcsTUFBTUMsU0FBUyxDQUFDVyxZQUFZLENBQUMsS0FBSyxZQUFZO1FBQzVDLDJDQUEyQztRQUMzQ1EsVUFDRTtJQUNKO0lBQ0EsT0FBT3BCLE1BQU1DLFNBQVMsQ0FBQ0osQ0FBQyxDQUFDLFVBQVU7QUFDckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2MuanM/YmFjYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjXG5jLmRpc3BsYXlOYW1lID0gJ2MnXG5jLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gYyhQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuYyA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuICAgIGNvbW1lbnQ6IHtcbiAgICAgIHBhdHRlcm46XG4gICAgICAgIC9cXC9cXC8oPzpbXlxcclxcblxcXFxdfFxcXFwoPzpcXHJcXG4/fFxcbnwoPyFbXFxyXFxuXSkpKSp8XFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIHN0cmluZzoge1xuICAgICAgLy8gaHR0cHM6Ly9lbi5jcHByZWZlcmVuY2UuY29tL3cvYy9sYW5ndWFnZS9zdHJpbmdfbGl0ZXJhbFxuICAgICAgcGF0dGVybjogL1wiKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8W15cIlxcXFxcXHJcXG5dKSpcIi8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgICdjbGFzcy1uYW1lJzoge1xuICAgICAgcGF0dGVybjpcbiAgICAgICAgLyhcXGIoPzplbnVtfHN0cnVjdClcXHMrKD86X19hdHRyaWJ1dGVfX1xccypcXChcXChbXFxzXFxTXSo/XFwpXFwpXFxzKik/KVxcdyt8XFxiW2Etel1cXHcqX3RcXGIvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAga2V5d29yZDpcbiAgICAgIC9cXGIoPzpfQWxpZ25hc3xfQWxpZ25vZnxfQXRvbWljfF9Cb29sfF9Db21wbGV4fF9HZW5lcmljfF9JbWFnaW5hcnl8X05vcmV0dXJufF9TdGF0aWNfYXNzZXJ0fF9UaHJlYWRfbG9jYWx8X19hdHRyaWJ1dGVfX3xhc218YXV0b3xicmVha3xjYXNlfGNoYXJ8Y29uc3R8Y29udGludWV8ZGVmYXVsdHxkb3xkb3VibGV8ZWxzZXxlbnVtfGV4dGVybnxmbG9hdHxmb3J8Z290b3xpZnxpbmxpbmV8aW50fGxvbmd8cmVnaXN0ZXJ8cmV0dXJufHNob3J0fHNpZ25lZHxzaXplb2Z8c3RhdGljfHN0cnVjdHxzd2l0Y2h8dHlwZWRlZnx0eXBlb2Z8dW5pb258dW5zaWduZWR8dm9pZHx2b2xhdGlsZXx3aGlsZSlcXGIvLFxuICAgIGZ1bmN0aW9uOiAvXFxiW2Etel9dXFx3Kig/PVxccypcXCgpL2ksXG4gICAgbnVtYmVyOlxuICAgICAgLyg/OlxcYjB4KD86W1xcZGEtZl0rKD86XFwuW1xcZGEtZl0qKT98XFwuW1xcZGEtZl0rKSg/OnBbKy1dP1xcZCspP3woPzpcXGJcXGQrKD86XFwuXFxkKik/fFxcQlxcLlxcZCspKD86ZVsrLV0/XFxkKyk/KVtmdWxdezAsNH0vaSxcbiAgICBvcGVyYXRvcjogLz4+PT98PDw9P3wtPnwoWy0rJnw6XSlcXDF8Wz86fl18Wy0rKi8lJnxeIT08Pl09Py9cbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnYycsICdzdHJpbmcnLCB7XG4gICAgY2hhcjoge1xuICAgICAgLy8gaHR0cHM6Ly9lbi5jcHByZWZlcmVuY2UuY29tL3cvYy9sYW5ndWFnZS9jaGFyYWN0ZXJfY29uc3RhbnRcbiAgICAgIHBhdHRlcm46IC8nKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8W14nXFxcXFxcclxcbl0pezAsMzJ9Jy8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9XG4gIH0pXG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2MnLCAnc3RyaW5nJywge1xuICAgIG1hY3JvOiB7XG4gICAgICAvLyBhbGxvdyBmb3IgbXVsdGlsaW5lIG1hY3JvIGRlZmluaXRpb25zXG4gICAgICAvLyBzcGFjZXMgYWZ0ZXIgdGhlICMgY2hhcmFjdGVyIGNvbXBpbGUgZmluZSB3aXRoIGdjY1xuICAgICAgcGF0dGVybjpcbiAgICAgICAgLyheW1xcdCBdKikjXFxzKlthLXpdKD86W15cXHJcXG5cXFxcL118XFwvKD8hXFwqKXxcXC9cXCooPzpbXipdfFxcKig/IVxcLykpKlxcKlxcL3xcXFxcKD86XFxyXFxufFtcXHNcXFNdKSkqL2ltLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIGFsaWFzOiAncHJvcGVydHknLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIHN0cmluZzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIGhpZ2hsaWdodCB0aGUgcGF0aCBvZiB0aGUgaW5jbHVkZSBzdGF0ZW1lbnQgYXMgYSBzdHJpbmdcbiAgICAgICAgICAgIHBhdHRlcm46IC9eKCNcXHMqaW5jbHVkZVxccyopPFtePl0rPi8sXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBQcmlzbS5sYW5ndWFnZXMuY1snc3RyaW5nJ11cbiAgICAgICAgXSxcbiAgICAgICAgY2hhcjogUHJpc20ubGFuZ3VhZ2VzLmNbJ2NoYXInXSxcbiAgICAgICAgY29tbWVudDogUHJpc20ubGFuZ3VhZ2VzLmNbJ2NvbW1lbnQnXSxcbiAgICAgICAgJ21hY3JvLW5hbWUnOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogLyheI1xccypkZWZpbmVcXHMrKVxcdytcXGIoPyFcXCgpL2ksXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF4jXFxzKmRlZmluZVxccyspXFx3K1xcYig/PVxcKCkvaSxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gaGlnaGxpZ2h0IG1hY3JvIGRpcmVjdGl2ZXMgYXMga2V5d29yZHNcbiAgICAgICAgZGlyZWN0aXZlOiB7XG4gICAgICAgICAgcGF0dGVybjogL14oI1xccyopW2Etel0rLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGFsaWFzOiAna2V5d29yZCdcbiAgICAgICAgfSxcbiAgICAgICAgJ2RpcmVjdGl2ZS1oYXNoJzogL14jLyxcbiAgICAgICAgcHVuY3R1YXRpb246IC8jI3xcXFxcKD89W1xcclxcbl0pLyxcbiAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgIHBhdHRlcm46IC9cXFNbXFxzXFxTXSovLFxuICAgICAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnYycsICdmdW5jdGlvbicsIHtcbiAgICAvLyBoaWdobGlnaHQgcHJlZGVmaW5lZCBtYWNyb3MgYXMgY29uc3RhbnRzXG4gICAgY29uc3RhbnQ6XG4gICAgICAvXFxiKD86RU9GfE5VTEx8U0VFS19DVVJ8U0VFS19FTkR8U0VFS19TRVR8X19EQVRFX198X19GSUxFX198X19MSU5FX198X19USU1FU1RBTVBfX3xfX1RJTUVfX3xfX2Z1bmNfX3xzdGRlcnJ8c3RkaW58c3Rkb3V0KVxcYi9cbiAgfSlcbiAgZGVsZXRlIFByaXNtLmxhbmd1YWdlcy5jWydib29sZWFuJ11cbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiYyIsImRpc3BsYXlOYW1lIiwiYWxpYXNlcyIsIlByaXNtIiwibGFuZ3VhZ2VzIiwiZXh0ZW5kIiwiY29tbWVudCIsInBhdHRlcm4iLCJncmVlZHkiLCJzdHJpbmciLCJsb29rYmVoaW5kIiwia2V5d29yZCIsImZ1bmN0aW9uIiwibnVtYmVyIiwib3BlcmF0b3IiLCJpbnNlcnRCZWZvcmUiLCJjaGFyIiwibWFjcm8iLCJhbGlhcyIsImluc2lkZSIsImRpcmVjdGl2ZSIsInB1bmN0dWF0aW9uIiwiZXhwcmVzc2lvbiIsImNvbnN0YW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/c.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/refractor/lang/cpp.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/cpp.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nvar refractorC = __webpack_require__(/*! ./c.js */ \"(app-pages-browser)/./node_modules/refractor/lang/c.js\");\nmodule.exports = cpp;\ncpp.displayName = \"cpp\";\ncpp.aliases = [];\nfunction cpp(Prism) {\n    Prism.register(refractorC);\n    (function(Prism) {\n        var keyword = /\\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\\b/;\n        var modName = /\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b/.source.replace(/<keyword>/g, function() {\n            return keyword.source;\n        });\n        Prism.languages.cpp = Prism.languages.extend(\"c\", {\n            \"class-name\": [\n                {\n                    pattern: RegExp(/(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+/.source.replace(/<keyword>/g, function() {\n                        return keyword.source;\n                    })),\n                    lookbehind: true\n                },\n                //   void foo::bar() const {}\n                // However! The `foo` in the above example could also be a namespace, so we only capture the class name if\n                // it starts with an uppercase letter. This approximation should give decent results.\n                /\\b[A-Z]\\w*(?=\\s*::\\s*\\w+\\s*\\()/,\n                //   Foo::~Foo() {}\n                /\\b[A-Z_]\\w*(?=\\s*::\\s*~\\w+\\s*\\()/i,\n                // parameters, so it can't be a namespace (until C++ adds generic namespaces).\n                /\\b\\w+(?=\\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\\s*::\\s*\\w+\\s*\\()/\n            ],\n            keyword: keyword,\n            number: {\n                pattern: /(?:\\b0b[01']+|\\b0x(?:[\\da-f']+(?:\\.[\\da-f']*)?|\\.[\\da-f']+)(?:p[+-]?[\\d']+)?|(?:\\b[\\d']+(?:\\.[\\d']*)?|\\B\\.[\\d']+)(?:e[+-]?[\\d']+)?)[ful]{0,4}/i,\n                greedy: true\n            },\n            operator: />>=?|<<=?|->|--|\\+\\+|&&|\\|\\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\\b/,\n            boolean: /\\b(?:false|true)\\b/\n        });\n        Prism.languages.insertBefore(\"cpp\", \"string\", {\n            module: {\n                // https://en.cppreference.com/w/cpp/language/modules\n                pattern: RegExp(/(\\b(?:import|module)\\s+)/.source + \"(?:\" + // header-name\n                /\"(?:\\\\(?:\\r\\n|[\\s\\S])|[^\"\\\\\\r\\n])*\"|<[^<>\\r\\n]*>/.source + \"|\" + // module name or partition or both\n                /<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>/.source.replace(/<mod-name>/g, function() {\n                    return modName;\n                }) + \")\"),\n                lookbehind: true,\n                greedy: true,\n                inside: {\n                    string: /^[<\"][\\s\\S]+/,\n                    operator: /:/,\n                    punctuation: /\\./\n                }\n            },\n            \"raw-string\": {\n                pattern: /R\"([^()\\\\ ]{0,16})\\([\\s\\S]*?\\)\\1\"/,\n                alias: \"string\",\n                greedy: true\n            }\n        });\n        Prism.languages.insertBefore(\"cpp\", \"keyword\", {\n            \"generic-function\": {\n                pattern: /\\b(?!operator\\b)[a-z_]\\w*\\s*<(?:[^<>]|<[^<>]*>)*>(?=\\s*\\()/i,\n                inside: {\n                    function: /^\\w+/,\n                    generic: {\n                        pattern: /<[\\s\\S]+/,\n                        alias: \"class-name\",\n                        inside: Prism.languages.cpp\n                    }\n                }\n            }\n        });\n        Prism.languages.insertBefore(\"cpp\", \"operator\", {\n            \"double-colon\": {\n                pattern: /::/,\n                alias: \"punctuation\"\n            }\n        });\n        Prism.languages.insertBefore(\"cpp\", \"class-name\", {\n            // the base clause is an optional list of parent classes\n            // https://en.cppreference.com/w/cpp/language/class\n            \"base-clause\": {\n                pattern: /(\\b(?:class|struct)\\s+\\w+\\s*:\\s*)[^;{}\"'\\s]+(?:\\s+[^;{}\"'\\s]+)*(?=\\s*[;{])/,\n                lookbehind: true,\n                greedy: true,\n                inside: Prism.languages.extend(\"cpp\", {})\n            }\n        });\n        Prism.languages.insertBefore(\"inside\", \"double-colon\", {\n            // All untokenized words that are not namespaces should be class names\n            \"class-name\": /\\b[a-z_]\\w*\\b(?!\\s*::)/i\n        }, Prism.languages.cpp[\"base-clause\"]);\n    })(Prism);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9jcHAuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxJQUFJQSxhQUFhQyxtQkFBT0EsQ0FBQztBQUN6QkMsT0FBT0MsT0FBTyxHQUFHQztBQUNqQkEsSUFBSUMsV0FBVyxHQUFHO0FBQ2xCRCxJQUFJRSxPQUFPLEdBQUcsRUFBRTtBQUNoQixTQUFTRixJQUFJRyxLQUFLO0lBQ2hCQSxNQUFNQyxRQUFRLENBQUNSO0lBQ2IsVUFBVU8sS0FBSztRQUNmLElBQUlFLFVBQ0Y7UUFDRixJQUFJQyxVQUFVLHVDQUF1Q0MsTUFBTSxDQUFDQyxPQUFPLENBQ2pFLGNBQ0E7WUFDRSxPQUFPSCxRQUFRRSxNQUFNO1FBQ3ZCO1FBRUZKLE1BQU1NLFNBQVMsQ0FBQ1QsR0FBRyxHQUFHRyxNQUFNTSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxLQUFLO1lBQ2hELGNBQWM7Z0JBQ1o7b0JBQ0VDLFNBQVNDLE9BQ1AsZ0VBQWdFTCxNQUFNLENBQUNDLE9BQU8sQ0FDNUUsY0FDQTt3QkFDRSxPQUFPSCxRQUFRRSxNQUFNO29CQUN2QjtvQkFHSk0sWUFBWTtnQkFDZDtnQkFDQSw2QkFBNkI7Z0JBQzdCLDBHQUEwRztnQkFDMUcscUZBQXFGO2dCQUNyRjtnQkFDQSxtQkFBbUI7Z0JBQ25CO2dCQUNBLDhFQUE4RTtnQkFDOUU7YUFDRDtZQUNEUixTQUFTQTtZQUNUUyxRQUFRO2dCQUNOSCxTQUNFO2dCQUNGSSxRQUFRO1lBQ1Y7WUFDQUMsVUFDRTtZQUNGQyxTQUFTO1FBQ1g7UUFDQWQsTUFBTU0sU0FBUyxDQUFDUyxZQUFZLENBQUMsT0FBTyxVQUFVO1lBQzVDcEIsUUFBUTtnQkFDTixxREFBcUQ7Z0JBQ3JEYSxTQUFTQyxPQUNQLDJCQUEyQkwsTUFBTSxHQUMvQixRQUFRLGNBQWM7Z0JBQ3RCLG1EQUFtREEsTUFBTSxHQUN6RCxNQUFNLG1DQUFtQztnQkFDekMsa0RBQWtEQSxNQUFNLENBQUNDLE9BQU8sQ0FDOUQsZUFDQTtvQkFDRSxPQUFPRjtnQkFDVCxLQUVGO2dCQUVKTyxZQUFZO2dCQUNaRSxRQUFRO2dCQUNSSSxRQUFRO29CQUNOQyxRQUFRO29CQUNSSixVQUFVO29CQUNWSyxhQUFhO2dCQUNmO1lBQ0Y7WUFDQSxjQUFjO2dCQUNaVixTQUFTO2dCQUNUVyxPQUFPO2dCQUNQUCxRQUFRO1lBQ1Y7UUFDRjtRQUNBWixNQUFNTSxTQUFTLENBQUNTLFlBQVksQ0FBQyxPQUFPLFdBQVc7WUFDN0Msb0JBQW9CO2dCQUNsQlAsU0FBUztnQkFDVFEsUUFBUTtvQkFDTkksVUFBVTtvQkFDVkMsU0FBUzt3QkFDUGIsU0FBUzt3QkFDVFcsT0FBTzt3QkFDUEgsUUFBUWhCLE1BQU1NLFNBQVMsQ0FBQ1QsR0FBRztvQkFDN0I7Z0JBQ0Y7WUFDRjtRQUNGO1FBQ0FHLE1BQU1NLFNBQVMsQ0FBQ1MsWUFBWSxDQUFDLE9BQU8sWUFBWTtZQUM5QyxnQkFBZ0I7Z0JBQ2RQLFNBQVM7Z0JBQ1RXLE9BQU87WUFDVDtRQUNGO1FBQ0FuQixNQUFNTSxTQUFTLENBQUNTLFlBQVksQ0FBQyxPQUFPLGNBQWM7WUFDaEQsd0RBQXdEO1lBQ3hELG1EQUFtRDtZQUNuRCxlQUFlO2dCQUNiUCxTQUNFO2dCQUNGRSxZQUFZO2dCQUNaRSxRQUFRO2dCQUNSSSxRQUFRaEIsTUFBTU0sU0FBUyxDQUFDQyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ3pDO1FBQ0Y7UUFDQVAsTUFBTU0sU0FBUyxDQUFDUyxZQUFZLENBQzFCLFVBQ0EsZ0JBQ0E7WUFDRSxzRUFBc0U7WUFDdEUsY0FBYztRQUNoQixHQUNBZixNQUFNTSxTQUFTLENBQUNULEdBQUcsQ0FBQyxjQUFjO0lBRXRDLEdBQUdHO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2NwcC5qcz9jZDhiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xudmFyIHJlZnJhY3RvckMgPSByZXF1aXJlKCcuL2MuanMnKVxubW9kdWxlLmV4cG9ydHMgPSBjcHBcbmNwcC5kaXNwbGF5TmFtZSA9ICdjcHAnXG5jcHAuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBjcHAoUHJpc20pIHtcbiAgUHJpc20ucmVnaXN0ZXIocmVmcmFjdG9yQylcbiAgOyhmdW5jdGlvbiAoUHJpc20pIHtcbiAgICB2YXIga2V5d29yZCA9XG4gICAgICAvXFxiKD86YWxpZ25hc3xhbGlnbm9mfGFzbXxhdXRvfGJvb2x8YnJlYWt8Y2FzZXxjYXRjaHxjaGFyfGNoYXIxNl90fGNoYXIzMl90fGNoYXI4X3R8Y2xhc3N8Y29fYXdhaXR8Y29fcmV0dXJufGNvX3lpZWxkfGNvbXBsfGNvbmNlcHR8Y29uc3R8Y29uc3RfY2FzdHxjb25zdGV2YWx8Y29uc3RleHByfGNvbnN0aW5pdHxjb250aW51ZXxkZWNsdHlwZXxkZWZhdWx0fGRlbGV0ZXxkb3xkb3VibGV8ZHluYW1pY19jYXN0fGVsc2V8ZW51bXxleHBsaWNpdHxleHBvcnR8ZXh0ZXJufGZpbmFsfGZsb2F0fGZvcnxmcmllbmR8Z290b3xpZnxpbXBvcnR8aW5saW5lfGludHxpbnQxNl90fGludDMyX3R8aW50NjRfdHxpbnQ4X3R8bG9uZ3xtb2R1bGV8bXV0YWJsZXxuYW1lc3BhY2V8bmV3fG5vZXhjZXB0fG51bGxwdHJ8b3BlcmF0b3J8b3ZlcnJpZGV8cHJpdmF0ZXxwcm90ZWN0ZWR8cHVibGljfHJlZ2lzdGVyfHJlaW50ZXJwcmV0X2Nhc3R8cmVxdWlyZXN8cmV0dXJufHNob3J0fHNpZ25lZHxzaXplb2Z8c3RhdGljfHN0YXRpY19hc3NlcnR8c3RhdGljX2Nhc3R8c3RydWN0fHN3aXRjaHx0ZW1wbGF0ZXx0aGlzfHRocmVhZF9sb2NhbHx0aHJvd3x0cnl8dHlwZWRlZnx0eXBlaWR8dHlwZW5hbWV8dWludDE2X3R8dWludDMyX3R8dWludDY0X3R8dWludDhfdHx1bmlvbnx1bnNpZ25lZHx1c2luZ3x2aXJ0dWFsfHZvaWR8dm9sYXRpbGV8d2NoYXJfdHx3aGlsZSlcXGIvXG4gICAgdmFyIG1vZE5hbWUgPSAvXFxiKD8hPGtleXdvcmQ+KVxcdysoPzpcXHMqXFwuXFxzKlxcdyspKlxcYi8uc291cmNlLnJlcGxhY2UoXG4gICAgICAvPGtleXdvcmQ+L2csXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBrZXl3b3JkLnNvdXJjZVxuICAgICAgfVxuICAgIClcbiAgICBQcmlzbS5sYW5ndWFnZXMuY3BwID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnYycsIHtcbiAgICAgICdjbGFzcy1uYW1lJzogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0dGVybjogUmVnRXhwKFxuICAgICAgICAgICAgLyhcXGIoPzpjbGFzc3xjb25jZXB0fGVudW18c3RydWN0fHR5cGVuYW1lKVxccyspKD8hPGtleXdvcmQ+KVxcdysvLnNvdXJjZS5yZXBsYWNlKFxuICAgICAgICAgICAgICAvPGtleXdvcmQ+L2csXG4gICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5d29yZC5zb3VyY2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICB9LCAvLyBUaGlzIGlzIGludGVuZGVkIHRvIGNhcHR1cmUgdGhlIGNsYXNzIG5hbWUgb2YgbWV0aG9kIGltcGxlbWVudGF0aW9ucyBsaWtlOlxuICAgICAgICAvLyAgIHZvaWQgZm9vOjpiYXIoKSBjb25zdCB7fVxuICAgICAgICAvLyBIb3dldmVyISBUaGUgYGZvb2AgaW4gdGhlIGFib3ZlIGV4YW1wbGUgY291bGQgYWxzbyBiZSBhIG5hbWVzcGFjZSwgc28gd2Ugb25seSBjYXB0dXJlIHRoZSBjbGFzcyBuYW1lIGlmXG4gICAgICAgIC8vIGl0IHN0YXJ0cyB3aXRoIGFuIHVwcGVyY2FzZSBsZXR0ZXIuIFRoaXMgYXBwcm94aW1hdGlvbiBzaG91bGQgZ2l2ZSBkZWNlbnQgcmVzdWx0cy5cbiAgICAgICAgL1xcYltBLVpdXFx3Kig/PVxccyo6OlxccypcXHcrXFxzKlxcKCkvLCAvLyBUaGlzIHdpbGwgY2FwdHVyZSB0aGUgY2xhc3MgbmFtZSBiZWZvcmUgZGVzdHJ1Y3RvcnMgbGlrZTpcbiAgICAgICAgLy8gICBGb286On5Gb28oKSB7fVxuICAgICAgICAvXFxiW0EtWl9dXFx3Kig/PVxccyo6Olxccyp+XFx3K1xccypcXCgpL2ksIC8vIFRoaXMgYWxzbyBpbnRlbmRzIHRvIGNhcHR1cmUgdGhlIGNsYXNzIG5hbWUgb2YgbWV0aG9kIGltcGxlbWVudGF0aW9ucyBidXQgaGVyZSB0aGUgY2xhc3MgaGFzIHRlbXBsYXRlXG4gICAgICAgIC8vIHBhcmFtZXRlcnMsIHNvIGl0IGNhbid0IGJlIGEgbmFtZXNwYWNlICh1bnRpbCBDKysgYWRkcyBnZW5lcmljIG5hbWVzcGFjZXMpLlxuICAgICAgICAvXFxiXFx3Kyg/PVxccyo8KD86W148Pl18PCg/OltePD5dfDxbXjw+XSo+KSo+KSo+XFxzKjo6XFxzKlxcdytcXHMqXFwoKS9cbiAgICAgIF0sXG4gICAgICBrZXl3b3JkOiBrZXl3b3JkLFxuICAgICAgbnVtYmVyOiB7XG4gICAgICAgIHBhdHRlcm46XG4gICAgICAgICAgLyg/OlxcYjBiWzAxJ10rfFxcYjB4KD86W1xcZGEtZiddKyg/OlxcLltcXGRhLWYnXSopP3xcXC5bXFxkYS1mJ10rKSg/OnBbKy1dP1tcXGQnXSspP3woPzpcXGJbXFxkJ10rKD86XFwuW1xcZCddKik/fFxcQlxcLltcXGQnXSspKD86ZVsrLV0/W1xcZCddKyk/KVtmdWxdezAsNH0vaSxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9LFxuICAgICAgb3BlcmF0b3I6XG4gICAgICAgIC8+Pj0/fDw8PT98LT58LS18XFwrXFwrfCYmfFxcfFxcfHxbPzp+XXw8PT58Wy0rKi8lJnxeIT08Pl09P3xcXGIoPzphbmR8YW5kX2VxfGJpdGFuZHxiaXRvcnxub3R8bm90X2VxfG9yfG9yX2VxfHhvcnx4b3JfZXEpXFxiLyxcbiAgICAgIGJvb2xlYW46IC9cXGIoPzpmYWxzZXx0cnVlKVxcYi9cbiAgICB9KVxuICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2NwcCcsICdzdHJpbmcnLCB7XG4gICAgICBtb2R1bGU6IHtcbiAgICAgICAgLy8gaHR0cHM6Ly9lbi5jcHByZWZlcmVuY2UuY29tL3cvY3BwL2xhbmd1YWdlL21vZHVsZXNcbiAgICAgICAgcGF0dGVybjogUmVnRXhwKFxuICAgICAgICAgIC8oXFxiKD86aW1wb3J0fG1vZHVsZSlcXHMrKS8uc291cmNlICtcbiAgICAgICAgICAgICcoPzonICsgLy8gaGVhZGVyLW5hbWVcbiAgICAgICAgICAgIC9cIig/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfFteXCJcXFxcXFxyXFxuXSkqXCJ8PFtePD5cXHJcXG5dKj4vLnNvdXJjZSArXG4gICAgICAgICAgICAnfCcgKyAvLyBtb2R1bGUgbmFtZSBvciBwYXJ0aXRpb24gb3IgYm90aFxuICAgICAgICAgICAgLzxtb2QtbmFtZT4oPzpcXHMqOlxccyo8bW9kLW5hbWU+KT98Olxccyo8bW9kLW5hbWU+Ly5zb3VyY2UucmVwbGFjZShcbiAgICAgICAgICAgICAgLzxtb2QtbmFtZT4vZyxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb2ROYW1lXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgJyknXG4gICAgICAgICksXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgc3RyaW5nOiAvXls8XCJdW1xcc1xcU10rLyxcbiAgICAgICAgICBvcGVyYXRvcjogLzovLFxuICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXFwuL1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJ3Jhdy1zdHJpbmcnOiB7XG4gICAgICAgIHBhdHRlcm46IC9SXCIoW14oKVxcXFwgXXswLDE2fSlcXChbXFxzXFxTXSo/XFwpXFwxXCIvLFxuICAgICAgICBhbGlhczogJ3N0cmluZycsXG4gICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnY3BwJywgJ2tleXdvcmQnLCB7XG4gICAgICAnZ2VuZXJpYy1mdW5jdGlvbic6IHtcbiAgICAgICAgcGF0dGVybjogL1xcYig/IW9wZXJhdG9yXFxiKVthLXpfXVxcdypcXHMqPCg/OltePD5dfDxbXjw+XSo+KSo+KD89XFxzKlxcKCkvaSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgZnVuY3Rpb246IC9eXFx3Ky8sXG4gICAgICAgICAgZ2VuZXJpYzoge1xuICAgICAgICAgICAgcGF0dGVybjogLzxbXFxzXFxTXSsvLFxuICAgICAgICAgICAgYWxpYXM6ICdjbGFzcy1uYW1lJyxcbiAgICAgICAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmNwcFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnY3BwJywgJ29wZXJhdG9yJywge1xuICAgICAgJ2RvdWJsZS1jb2xvbic6IHtcbiAgICAgICAgcGF0dGVybjogLzo6LyxcbiAgICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbidcbiAgICAgIH1cbiAgICB9KVxuICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2NwcCcsICdjbGFzcy1uYW1lJywge1xuICAgICAgLy8gdGhlIGJhc2UgY2xhdXNlIGlzIGFuIG9wdGlvbmFsIGxpc3Qgb2YgcGFyZW50IGNsYXNzZXNcbiAgICAgIC8vIGh0dHBzOi8vZW4uY3BwcmVmZXJlbmNlLmNvbS93L2NwcC9sYW5ndWFnZS9jbGFzc1xuICAgICAgJ2Jhc2UtY2xhdXNlJzoge1xuICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgIC8oXFxiKD86Y2xhc3N8c3RydWN0KVxccytcXHcrXFxzKjpcXHMqKVteO3t9XCInXFxzXSsoPzpcXHMrW147e31cIidcXHNdKykqKD89XFxzKls7e10pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICBpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NwcCcsIHt9KVxuICAgICAgfVxuICAgIH0pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZShcbiAgICAgICdpbnNpZGUnLFxuICAgICAgJ2RvdWJsZS1jb2xvbicsXG4gICAgICB7XG4gICAgICAgIC8vIEFsbCB1bnRva2VuaXplZCB3b3JkcyB0aGF0IGFyZSBub3QgbmFtZXNwYWNlcyBzaG91bGQgYmUgY2xhc3MgbmFtZXNcbiAgICAgICAgJ2NsYXNzLW5hbWUnOiAvXFxiW2Etel9dXFx3KlxcYig/IVxccyo6OikvaVxuICAgICAgfSxcbiAgICAgIFByaXNtLmxhbmd1YWdlcy5jcHBbJ2Jhc2UtY2xhdXNlJ11cbiAgICApXG4gIH0pKFByaXNtKVxufVxuIl0sIm5hbWVzIjpbInJlZnJhY3RvckMiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImNwcCIsImRpc3BsYXlOYW1lIiwiYWxpYXNlcyIsIlByaXNtIiwicmVnaXN0ZXIiLCJrZXl3b3JkIiwibW9kTmFtZSIsInNvdXJjZSIsInJlcGxhY2UiLCJsYW5ndWFnZXMiLCJleHRlbmQiLCJwYXR0ZXJuIiwiUmVnRXhwIiwibG9va2JlaGluZCIsIm51bWJlciIsImdyZWVkeSIsIm9wZXJhdG9yIiwiYm9vbGVhbiIsImluc2VydEJlZm9yZSIsImluc2lkZSIsInN0cmluZyIsInB1bmN0dWF0aW9uIiwiYWxpYXMiLCJmdW5jdGlvbiIsImdlbmVyaWMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/cpp.js\n"));

/***/ })

}]);