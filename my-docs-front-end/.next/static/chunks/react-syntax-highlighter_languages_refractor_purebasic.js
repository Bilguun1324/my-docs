"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_purebasic"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/purebasic.js":
/*!**************************************************!*\
  !*** ./node_modules/refractor/lang/purebasic.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nmodule.exports = purebasic;\npurebasic.displayName = \"purebasic\";\npurebasic.aliases = [];\nfunction purebasic(Prism) {\n    /*\nOriginal Code by Bas Groothedde\n!!MANY THANKS!! I never would have made this, regex and me will never be best friends ;)\n==> https://codepen.io/ImagineProgramming/details/JYydBy/\nslightly changed to pass all tests\n*/ // PureBasic support, steal stuff from ansi-c\n    Prism.languages.purebasic = Prism.languages.extend(\"clike\", {\n        comment: /;.*/,\n        keyword: /\\b(?:align|and|as|break|calldebugger|case|compilercase|compilerdefault|compilerelse|compilerelseif|compilerendif|compilerendselect|compilererror|compilerif|compilerselect|continue|data|datasection|debug|debuglevel|declare|declarec|declarecdll|declaredll|declaremodule|default|define|dim|disableasm|disabledebugger|disableexplicit|else|elseif|enableasm|enabledebugger|enableexplicit|end|enddatasection|enddeclaremodule|endenumeration|endif|endimport|endinterface|endmacro|endmodule|endprocedure|endselect|endstructure|endstructureunion|endwith|enumeration|extends|fakereturn|for|foreach|forever|global|gosub|goto|if|import|importc|includebinary|includefile|includepath|interface|macro|module|newlist|newmap|next|not|or|procedure|procedurec|procedurecdll|proceduredll|procedurereturn|protected|prototype|prototypec|read|redim|repeat|restore|return|runtime|select|shared|static|step|structure|structureunion|swap|threaded|to|until|wend|while|with|xincludefile|xor)\\b/i,\n        function: /\\b\\w+(?:\\.\\w+)?\\s*(?=\\()/,\n        number: /(?:\\$[\\da-f]+|\\b-?(?:\\d+(?:\\.\\d+)?|\\.\\d+)(?:e[+-]?\\d+)?)\\b/i,\n        operator: /(?:@\\*?|\\?|\\*)\\w+|-[>-]?|\\+\\+?|!=?|<<?=?|>>?=?|==?|&&?|\\|?\\||[~^%?*/@]/\n    });\n    Prism.languages.insertBefore(\"purebasic\", \"keyword\", {\n        tag: /#\\w+\\$?/,\n        asm: {\n            pattern: /(^[\\t ]*)!.*/m,\n            lookbehind: true,\n            alias: \"tag\",\n            inside: {\n                comment: /;.*/,\n                string: {\n                    pattern: /([\"'`])(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/,\n                    greedy: true\n                },\n                // Anonymous label references, i.e.: jmp @b\n                \"label-reference-anonymous\": {\n                    pattern: /(!\\s*j[a-z]+\\s+)@[fb]/i,\n                    lookbehind: true,\n                    alias: \"fasm-label\"\n                },\n                // Named label reference, i.e.: jne label1\n                \"label-reference-addressed\": {\n                    pattern: /(!\\s*j[a-z]+\\s+)[A-Z._?$@][\\w.?$@~#]*/i,\n                    lookbehind: true,\n                    alias: \"fasm-label\"\n                },\n                keyword: [\n                    /\\b(?:extern|global)\\b[^;\\r\\n]*/i,\n                    /\\b(?:CPU|DEFAULT|FLOAT)\\b.*/\n                ],\n                function: {\n                    pattern: /^([\\t ]*!\\s*)[\\da-z]+(?=\\s|$)/im,\n                    lookbehind: true\n                },\n                \"function-inline\": {\n                    pattern: /(:\\s*)[\\da-z]+(?=\\s)/i,\n                    lookbehind: true,\n                    alias: \"function\"\n                },\n                label: {\n                    pattern: /^([\\t ]*!\\s*)[A-Za-z._?$@][\\w.?$@~#]*(?=:)/m,\n                    lookbehind: true,\n                    alias: \"fasm-label\"\n                },\n                register: /\\b(?:st\\d|[xyz]mm\\d\\d?|[cdt]r\\d|r\\d\\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|di|si|sp)|[cdefgs]s|mm\\d+)\\b/i,\n                number: /(?:\\b|-|(?=\\$))(?:0[hx](?:[\\da-f]*\\.)?[\\da-f]+(?:p[+-]?\\d+)?|\\d[\\da-f]+[hx]|\\$\\d[\\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\\d+|(?:\\d+(?:\\.\\d+)?|\\.\\d+)(?:\\.?e[+-]?\\d+)?[dt]?)\\b/i,\n                operator: /[\\[\\]*+\\-/%<>=&|$!,.:]/\n            }\n        }\n    });\n    delete Prism.languages.purebasic[\"class-name\"];\n    delete Prism.languages.purebasic[\"boolean\"];\n    Prism.languages.pbfasm = Prism.languages[\"purebasic\"];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9wdXJlYmFzaWMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQUEsT0FBT0MsT0FBTyxHQUFHQztBQUNqQkEsVUFBVUMsV0FBVyxHQUFHO0FBQ3hCRCxVQUFVRSxPQUFPLEdBQUcsRUFBRTtBQUN0QixTQUFTRixVQUFVRyxLQUFLO0lBQ3RCOzs7OztBQUtGLEdBQ0UsNkNBQTZDO0lBQzdDQSxNQUFNQyxTQUFTLENBQUNKLFNBQVMsR0FBR0csTUFBTUMsU0FBUyxDQUFDQyxNQUFNLENBQUMsU0FBUztRQUMxREMsU0FBUztRQUNUQyxTQUNFO1FBQ0ZDLFVBQVU7UUFDVkMsUUFBUTtRQUNSQyxVQUNFO0lBQ0o7SUFDQVAsTUFBTUMsU0FBUyxDQUFDTyxZQUFZLENBQUMsYUFBYSxXQUFXO1FBQ25EQyxLQUFLO1FBQ0xDLEtBQUs7WUFDSEMsU0FBUztZQUNUQyxZQUFZO1lBQ1pDLE9BQU87WUFDUEMsUUFBUTtnQkFDTlgsU0FBUztnQkFDVFksUUFBUTtvQkFDTkosU0FBUztvQkFDVEssUUFBUTtnQkFDVjtnQkFDQSwyQ0FBMkM7Z0JBQzNDLDZCQUE2QjtvQkFDM0JMLFNBQVM7b0JBQ1RDLFlBQVk7b0JBQ1pDLE9BQU87Z0JBQ1Q7Z0JBQ0EsMENBQTBDO2dCQUMxQyw2QkFBNkI7b0JBQzNCRixTQUFTO29CQUNUQyxZQUFZO29CQUNaQyxPQUFPO2dCQUNUO2dCQUNBVCxTQUFTO29CQUNQO29CQUNBO2lCQUNEO2dCQUNEQyxVQUFVO29CQUNSTSxTQUFTO29CQUNUQyxZQUFZO2dCQUNkO2dCQUNBLG1CQUFtQjtvQkFDakJELFNBQVM7b0JBQ1RDLFlBQVk7b0JBQ1pDLE9BQU87Z0JBQ1Q7Z0JBQ0FJLE9BQU87b0JBQ0xOLFNBQVM7b0JBQ1RDLFlBQVk7b0JBQ1pDLE9BQU87Z0JBQ1Q7Z0JBQ0FLLFVBQ0U7Z0JBQ0ZaLFFBQ0U7Z0JBQ0ZDLFVBQVU7WUFDWjtRQUNGO0lBQ0Y7SUFDQSxPQUFPUCxNQUFNQyxTQUFTLENBQUNKLFNBQVMsQ0FBQyxhQUFhO0lBQzlDLE9BQU9HLE1BQU1DLFNBQVMsQ0FBQ0osU0FBUyxDQUFDLFVBQVU7SUFDM0NHLE1BQU1DLFNBQVMsQ0FBQ2tCLE1BQU0sR0FBR25CLE1BQU1DLFNBQVMsQ0FBQyxZQUFZO0FBQ3ZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9wdXJlYmFzaWMuanM/MjdkNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBwdXJlYmFzaWNcbnB1cmViYXNpYy5kaXNwbGF5TmFtZSA9ICdwdXJlYmFzaWMnXG5wdXJlYmFzaWMuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBwdXJlYmFzaWMoUHJpc20pIHtcbiAgLypcbk9yaWdpbmFsIENvZGUgYnkgQmFzIEdyb290aGVkZGVcbiEhTUFOWSBUSEFOS1MhISBJIG5ldmVyIHdvdWxkIGhhdmUgbWFkZSB0aGlzLCByZWdleCBhbmQgbWUgd2lsbCBuZXZlciBiZSBiZXN0IGZyaWVuZHMgOylcbj09PiBodHRwczovL2NvZGVwZW4uaW8vSW1hZ2luZVByb2dyYW1taW5nL2RldGFpbHMvSll5ZEJ5L1xuc2xpZ2h0bHkgY2hhbmdlZCB0byBwYXNzIGFsbCB0ZXN0c1xuKi9cbiAgLy8gUHVyZUJhc2ljIHN1cHBvcnQsIHN0ZWFsIHN0dWZmIGZyb20gYW5zaS1jXG4gIFByaXNtLmxhbmd1YWdlcy5wdXJlYmFzaWMgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcbiAgICBjb21tZW50OiAvOy4qLyxcbiAgICBrZXl3b3JkOlxuICAgICAgL1xcYig/OmFsaWdufGFuZHxhc3xicmVha3xjYWxsZGVidWdnZXJ8Y2FzZXxjb21waWxlcmNhc2V8Y29tcGlsZXJkZWZhdWx0fGNvbXBpbGVyZWxzZXxjb21waWxlcmVsc2VpZnxjb21waWxlcmVuZGlmfGNvbXBpbGVyZW5kc2VsZWN0fGNvbXBpbGVyZXJyb3J8Y29tcGlsZXJpZnxjb21waWxlcnNlbGVjdHxjb250aW51ZXxkYXRhfGRhdGFzZWN0aW9ufGRlYnVnfGRlYnVnbGV2ZWx8ZGVjbGFyZXxkZWNsYXJlY3xkZWNsYXJlY2RsbHxkZWNsYXJlZGxsfGRlY2xhcmVtb2R1bGV8ZGVmYXVsdHxkZWZpbmV8ZGltfGRpc2FibGVhc218ZGlzYWJsZWRlYnVnZ2VyfGRpc2FibGVleHBsaWNpdHxlbHNlfGVsc2VpZnxlbmFibGVhc218ZW5hYmxlZGVidWdnZXJ8ZW5hYmxlZXhwbGljaXR8ZW5kfGVuZGRhdGFzZWN0aW9ufGVuZGRlY2xhcmVtb2R1bGV8ZW5kZW51bWVyYXRpb258ZW5kaWZ8ZW5kaW1wb3J0fGVuZGludGVyZmFjZXxlbmRtYWNyb3xlbmRtb2R1bGV8ZW5kcHJvY2VkdXJlfGVuZHNlbGVjdHxlbmRzdHJ1Y3R1cmV8ZW5kc3RydWN0dXJldW5pb258ZW5kd2l0aHxlbnVtZXJhdGlvbnxleHRlbmRzfGZha2VyZXR1cm58Zm9yfGZvcmVhY2h8Zm9yZXZlcnxnbG9iYWx8Z29zdWJ8Z290b3xpZnxpbXBvcnR8aW1wb3J0Y3xpbmNsdWRlYmluYXJ5fGluY2x1ZGVmaWxlfGluY2x1ZGVwYXRofGludGVyZmFjZXxtYWNyb3xtb2R1bGV8bmV3bGlzdHxuZXdtYXB8bmV4dHxub3R8b3J8cHJvY2VkdXJlfHByb2NlZHVyZWN8cHJvY2VkdXJlY2RsbHxwcm9jZWR1cmVkbGx8cHJvY2VkdXJlcmV0dXJufHByb3RlY3RlZHxwcm90b3R5cGV8cHJvdG90eXBlY3xyZWFkfHJlZGltfHJlcGVhdHxyZXN0b3JlfHJldHVybnxydW50aW1lfHNlbGVjdHxzaGFyZWR8c3RhdGljfHN0ZXB8c3RydWN0dXJlfHN0cnVjdHVyZXVuaW9ufHN3YXB8dGhyZWFkZWR8dG98dW50aWx8d2VuZHx3aGlsZXx3aXRofHhpbmNsdWRlZmlsZXx4b3IpXFxiL2ksXG4gICAgZnVuY3Rpb246IC9cXGJcXHcrKD86XFwuXFx3Kyk/XFxzKig/PVxcKCkvLFxuICAgIG51bWJlcjogLyg/OlxcJFtcXGRhLWZdK3xcXGItPyg/OlxcZCsoPzpcXC5cXGQrKT98XFwuXFxkKykoPzplWystXT9cXGQrKT8pXFxiL2ksXG4gICAgb3BlcmF0b3I6XG4gICAgICAvKD86QFxcKj98XFw/fFxcKilcXHcrfC1bPi1dP3xcXCtcXCs/fCE9P3w8PD89P3w+Pj89P3w9PT98JiY/fFxcfD9cXHx8W35eJT8qL0BdL1xuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdwdXJlYmFzaWMnLCAna2V5d29yZCcsIHtcbiAgICB0YWc6IC8jXFx3K1xcJD8vLFxuICAgIGFzbToge1xuICAgICAgcGF0dGVybjogLyheW1xcdCBdKikhLiovbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ3RhZycsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgY29tbWVudDogLzsuKi8sXG4gICAgICAgIHN0cmluZzoge1xuICAgICAgICAgIHBhdHRlcm46IC8oW1wiJ2BdKSg/OlxcXFwufCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuICAgICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICAvLyBBbm9ueW1vdXMgbGFiZWwgcmVmZXJlbmNlcywgaS5lLjogam1wIEBiXG4gICAgICAgICdsYWJlbC1yZWZlcmVuY2UtYW5vbnltb3VzJzoge1xuICAgICAgICAgIHBhdHRlcm46IC8oIVxccypqW2Etel0rXFxzKylAW2ZiXS9pLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgYWxpYXM6ICdmYXNtLWxhYmVsJ1xuICAgICAgICB9LFxuICAgICAgICAvLyBOYW1lZCBsYWJlbCByZWZlcmVuY2UsIGkuZS46IGpuZSBsYWJlbDFcbiAgICAgICAgJ2xhYmVsLXJlZmVyZW5jZS1hZGRyZXNzZWQnOiB7XG4gICAgICAgICAgcGF0dGVybjogLyghXFxzKmpbYS16XStcXHMrKVtBLVouXz8kQF1bXFx3Lj8kQH4jXSovaSxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGFsaWFzOiAnZmFzbS1sYWJlbCdcbiAgICAgICAgfSxcbiAgICAgICAga2V5d29yZDogW1xuICAgICAgICAgIC9cXGIoPzpleHRlcm58Z2xvYmFsKVxcYlteO1xcclxcbl0qL2ksXG4gICAgICAgICAgL1xcYig/OkNQVXxERUZBVUxUfEZMT0FUKVxcYi4qL1xuICAgICAgICBdLFxuICAgICAgICBmdW5jdGlvbjoge1xuICAgICAgICAgIHBhdHRlcm46IC9eKFtcXHQgXSohXFxzKilbXFxkYS16XSsoPz1cXHN8JCkvaW0sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICAnZnVuY3Rpb24taW5saW5lJzoge1xuICAgICAgICAgIHBhdHRlcm46IC8oOlxccyopW1xcZGEtel0rKD89XFxzKS9pLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXihbXFx0IF0qIVxccyopW0EtWmEtei5fPyRAXVtcXHcuPyRAfiNdKig/PTopL20sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICBhbGlhczogJ2Zhc20tbGFiZWwnXG4gICAgICAgIH0sXG4gICAgICAgIHJlZ2lzdGVyOlxuICAgICAgICAgIC9cXGIoPzpzdFxcZHxbeHl6XW1tXFxkXFxkP3xbY2R0XXJcXGR8clxcZFxcZD9bYndkXT98W2VyXT9bYWJjZF14fFthYmNkXVtobF18W2VyXT8oPzpicHxkaXxzaXxzcCl8W2NkZWZnc11zfG1tXFxkKylcXGIvaSxcbiAgICAgICAgbnVtYmVyOlxuICAgICAgICAgIC8oPzpcXGJ8LXwoPz1cXCQpKSg/OjBbaHhdKD86W1xcZGEtZl0qXFwuKT9bXFxkYS1mXSsoPzpwWystXT9cXGQrKT98XFxkW1xcZGEtZl0rW2h4XXxcXCRcXGRbXFxkYS1mXSp8MFtvcV1bMC03XSt8WzAtN10rW29xXXwwW2J5XVswMV0rfFswMV0rW2J5XXwwW2R0XVxcZCt8KD86XFxkKyg/OlxcLlxcZCspP3xcXC5cXGQrKSg/OlxcLj9lWystXT9cXGQrKT9bZHRdPylcXGIvaSxcbiAgICAgICAgb3BlcmF0b3I6IC9bXFxbXFxdKitcXC0vJTw+PSZ8JCEsLjpdL1xuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgZGVsZXRlIFByaXNtLmxhbmd1YWdlcy5wdXJlYmFzaWNbJ2NsYXNzLW5hbWUnXVxuICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLnB1cmViYXNpY1snYm9vbGVhbiddXG4gIFByaXNtLmxhbmd1YWdlcy5wYmZhc20gPSBQcmlzbS5sYW5ndWFnZXNbJ3B1cmViYXNpYyddXG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInB1cmViYXNpYyIsImRpc3BsYXlOYW1lIiwiYWxpYXNlcyIsIlByaXNtIiwibGFuZ3VhZ2VzIiwiZXh0ZW5kIiwiY29tbWVudCIsImtleXdvcmQiLCJmdW5jdGlvbiIsIm51bWJlciIsIm9wZXJhdG9yIiwiaW5zZXJ0QmVmb3JlIiwidGFnIiwiYXNtIiwicGF0dGVybiIsImxvb2tiZWhpbmQiLCJhbGlhcyIsImluc2lkZSIsInN0cmluZyIsImdyZWVkeSIsImxhYmVsIiwicmVnaXN0ZXIiLCJwYmZhc20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/purebasic.js\n"));

/***/ })

}]);