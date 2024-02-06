"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/add-module/page",{

/***/ "(app-pages-browser)/./src/app/add-module/page.tsx":
/*!*************************************!*\
  !*** ./src/app/add-module/page.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"(app-pages-browser)/./src/components/index.tsx\");\n/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/graphql */ \"(app-pages-browser)/./src/graphql/index.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"(app-pages-browser)/./node_modules/@apollo/client/react/hooks/useMutation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst AddModule = ()=>{\n    _s();\n    const [addModule, { error, loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_graphql__WEBPACK_IMPORTED_MODULE_2__.ADD_MODULE, {\n        refetchQueries: [\n            {\n                query: _graphql__WEBPACK_IMPORTED_MODULE_2__.GET_ALL_MODULES\n            }\n        ]\n    });\n    const [moduleDetails, setModuleDetails] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        name: \"\",\n        video: \"\",\n        description: \"\",\n        code: \"\",\n        passkey: \"\"\n    });\n    const { name, video, description, code, passkey } = moduleDetails;\n    const handleInput = (field, value)=>{\n        setModuleDetails((prevModule)=>({\n                ...prevModule,\n                [field]: value\n            }));\n    };\n    const createModule = async ()=>{\n        const variables = video ? moduleDetails : {\n            ...moduleDetails,\n            video: null\n        };\n        await addModule({\n            variables: variables\n        });\n    };\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-white\",\n            children: error.message\n        }, void 0, false, {\n            fileName: \"/Users/bilguuntsolmon/Desktop/personal/personal-projects/my-docs/my-docs-fron-end-next/src/app/add-module/page.tsx\",\n            lineNumber: 43,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-white\",\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/bilguuntsolmon/Desktop/personal/personal-projects/my-docs/my-docs-fron-end-next/src/app/add-module/page.tsx\",\n            lineNumber: 47,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                value: name,\n                onChange: (val)=>handleInput(\"name\", val)\n            }, void 0, false, {\n                fileName: \"/Users/bilguuntsolmon/Desktop/personal/personal-projects/my-docs/my-docs-fron-end-next/src/app/add-module/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                value: description,\n                onChange: (val)=>handleInput(\"description\", val)\n            }, void 0, false, {\n                fileName: \"/Users/bilguuntsolmon/Desktop/personal/personal-projects/my-docs/my-docs-fron-end-next/src/app/add-module/page.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                value: code,\n                onChange: (val)=>handleInput(\"code\", val)\n            }, void 0, false, {\n                fileName: \"/Users/bilguuntsolmon/Desktop/personal/personal-projects/my-docs/my-docs-fron-end-next/src/app/add-module/page.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                value: passkey,\n                onChange: (val)=>handleInput(\"passkey\", val)\n            }, void 0, false, {\n                fileName: \"/Users/bilguuntsolmon/Desktop/personal/personal-projects/my-docs/my-docs-fron-end-next/src/app/add-module/page.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                value: video,\n                onChange: (val)=>handleInput(\"video\", val)\n            }, void 0, false, {\n                fileName: \"/Users/bilguuntsolmon/Desktop/personal/personal-projects/my-docs/my-docs-fron-end-next/src/app/add-module/page.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>createModule(),\n                className: \"bg-white\",\n                children: \"AddModule\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguuntsolmon/Desktop/personal/personal-projects/my-docs/my-docs-fron-end-next/src/app/add-module/page.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bilguuntsolmon/Desktop/personal/personal-projects/my-docs/my-docs-fron-end-next/src/app/add-module/page.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddModule, \"mc6QSXf9U6TVzhFgkHarKPnC2II=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation\n    ];\n});\n_c = AddModule;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddModule);\nvar _c;\n$RefreshReg$(_c, \"AddModule\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWRkLW1vZHVsZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDcUM7QUFDbUI7QUFFWDtBQUNaO0FBRWpDLE1BQU1LLFlBQVk7O0lBQ2hCLE1BQU0sQ0FBQ0MsV0FBVyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRSxDQUFDLEdBQUdMLDJEQUFXQSxDQUFDRixnREFBVUEsRUFBRTtRQUM5RFEsZ0JBQWdCO1lBQ2Q7Z0JBQ0VDLE9BQU9SLHFEQUFlQTtZQUN4QjtTQUNEO0lBQ0g7SUFFQSxNQUFNLENBQUNTLGVBQWVDLGlCQUFpQixHQUFHUiwrQ0FBUUEsQ0FBZ0I7UUFDaEVTLE1BQU07UUFDTkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE1BQU07UUFDTkMsU0FBUztJQUNYO0lBRUEsTUFBTSxFQUFFSixJQUFJLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRSxHQUFHTjtJQUVwRCxNQUFNTyxjQUFjLENBQUNDLE9BQWVDO1FBQ2xDUixpQkFBaUIsQ0FBQ1MsYUFBZ0I7Z0JBQ2hDLEdBQUdBLFVBQVU7Z0JBQ2IsQ0FBQ0YsTUFBTSxFQUFFQztZQUNYO0lBQ0Y7SUFFQSxNQUFNRSxlQUFlO1FBQ25CLE1BQU1DLFlBQVlULFFBQVFILGdCQUFnQjtZQUFFLEdBQUdBLGFBQWE7WUFBRUcsT0FBTztRQUFLO1FBRTFFLE1BQU1SLFVBQVU7WUFDZGlCLFdBQVdBO1FBQ2I7SUFDRjtJQUVBLElBQUloQixPQUFPO1FBQ1QscUJBQU8sOERBQUNpQjtZQUFJQyxXQUFVO3NCQUFjbEIsTUFBTW1CLE9BQU87Ozs7OztJQUNuRDtJQUVBLElBQUlsQixTQUFTO1FBQ1gscUJBQU8sOERBQUNnQjtZQUFJQyxXQUFVO3NCQUFhOzs7Ozs7SUFDckM7SUFFQSxxQkFDRSw4REFBQ0Q7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUN6Qiw4Q0FBS0E7Z0JBQUNvQixPQUFPUDtnQkFBTWMsVUFBVSxDQUFDQyxNQUFRVixZQUFZLFFBQVFVOzs7Ozs7MEJBQzNELDhEQUFDNUIsOENBQUtBO2dCQUNKb0IsT0FBT0w7Z0JBQ1BZLFVBQVUsQ0FBQ0MsTUFBUVYsWUFBWSxlQUFlVTs7Ozs7OzBCQUVoRCw4REFBQzVCLDhDQUFLQTtnQkFBQ29CLE9BQU9KO2dCQUFNVyxVQUFVLENBQUNDLE1BQVFWLFlBQVksUUFBUVU7Ozs7OzswQkFDM0QsOERBQUM1Qiw4Q0FBS0E7Z0JBQUNvQixPQUFPSDtnQkFBU1UsVUFBVSxDQUFDQyxNQUFRVixZQUFZLFdBQVdVOzs7Ozs7MEJBQ2pFLDhEQUFDNUIsOENBQUtBO2dCQUNKb0IsT0FBT047Z0JBQ1BhLFVBQVUsQ0FBQ0MsTUFBUVYsWUFBWSxTQUFTVTs7Ozs7OzBCQUcxQyw4REFBQ0o7Z0JBQUlLLFNBQVMsSUFBTVA7Z0JBQWdCRyxXQUFVOzBCQUFXOzs7Ozs7Ozs7Ozs7QUFLL0Q7R0E3RE1wQjs7UUFDb0NGLHVEQUFXQTs7O0tBRC9DRTtBQStETiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2FkZC1tb2R1bGUvcGFnZS50c3g/YzI4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQUREX01PRFVMRSwgR0VUX0FMTF9NT0RVTEVTIH0gZnJvbSBcIkAvZ3JhcGhxbFwiO1xuaW1wb3J0IHsgQWRkTW9kdWxlVHlwZSB9IGZyb20gXCJAL3V0aWxzXCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQWRkTW9kdWxlID0gKCkgPT4ge1xuICBjb25zdCBbYWRkTW9kdWxlLCB7IGVycm9yLCBsb2FkaW5nIH1dID0gdXNlTXV0YXRpb24oQUREX01PRFVMRSwge1xuICAgIHJlZmV0Y2hRdWVyaWVzOiBbXG4gICAgICB7XG4gICAgICAgIHF1ZXJ5OiBHRVRfQUxMX01PRFVMRVMsXG4gICAgICB9LFxuICAgIF0sXG4gIH0pO1xuXG4gIGNvbnN0IFttb2R1bGVEZXRhaWxzLCBzZXRNb2R1bGVEZXRhaWxzXSA9IHVzZVN0YXRlPEFkZE1vZHVsZVR5cGU+KHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIHZpZGVvOiBcIlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGNvZGU6IFwiXCIsXG4gICAgcGFzc2tleTogXCJcIixcbiAgfSk7XG5cbiAgY29uc3QgeyBuYW1lLCB2aWRlbywgZGVzY3JpcHRpb24sIGNvZGUsIHBhc3NrZXkgfSA9IG1vZHVsZURldGFpbHM7XG5cbiAgY29uc3QgaGFuZGxlSW5wdXQgPSAoZmllbGQ6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHNldE1vZHVsZURldGFpbHMoKHByZXZNb2R1bGUpID0+ICh7XG4gICAgICAuLi5wcmV2TW9kdWxlLFxuICAgICAgW2ZpZWxkXTogdmFsdWUsXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZU1vZHVsZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB2aWRlbyA/IG1vZHVsZURldGFpbHMgOiB7IC4uLm1vZHVsZURldGFpbHMsIHZpZGVvOiBudWxsIH07XG5cbiAgICBhd2FpdCBhZGRNb2R1bGUoe1xuICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXMsXG4gICAgfSk7XG4gIH07XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPntlcnJvci5tZXNzYWdlfTwvZGl2PjtcbiAgfVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMlwiPlxuICAgICAgPElucHV0IHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17KHZhbCkgPT4gaGFuZGxlSW5wdXQoXCJuYW1lXCIsIHZhbCl9IC8+XG4gICAgICA8SW5wdXRcbiAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gaGFuZGxlSW5wdXQoXCJkZXNjcmlwdGlvblwiLCB2YWwpfVxuICAgICAgLz5cbiAgICAgIDxJbnB1dCB2YWx1ZT17Y29kZX0gb25DaGFuZ2U9eyh2YWwpID0+IGhhbmRsZUlucHV0KFwiY29kZVwiLCB2YWwpfSAvPlxuICAgICAgPElucHV0IHZhbHVlPXtwYXNza2V5fSBvbkNoYW5nZT17KHZhbCkgPT4gaGFuZGxlSW5wdXQoXCJwYXNza2V5XCIsIHZhbCl9IC8+XG4gICAgICA8SW5wdXRcbiAgICAgICAgdmFsdWU9e3ZpZGVvfVxuICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gaGFuZGxlSW5wdXQoXCJ2aWRlb1wiLCB2YWwpfVxuICAgICAgLz5cblxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBjcmVhdGVNb2R1bGUoKX0gY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cbiAgICAgICAgQWRkTW9kdWxlXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZE1vZHVsZTtcbiJdLCJuYW1lcyI6WyJJbnB1dCIsIkFERF9NT0RVTEUiLCJHRVRfQUxMX01PRFVMRVMiLCJ1c2VNdXRhdGlvbiIsInVzZVN0YXRlIiwiQWRkTW9kdWxlIiwiYWRkTW9kdWxlIiwiZXJyb3IiLCJsb2FkaW5nIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIm1vZHVsZURldGFpbHMiLCJzZXRNb2R1bGVEZXRhaWxzIiwibmFtZSIsInZpZGVvIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwicGFzc2tleSIsImhhbmRsZUlucHV0IiwiZmllbGQiLCJ2YWx1ZSIsInByZXZNb2R1bGUiLCJjcmVhdGVNb2R1bGUiLCJ2YXJpYWJsZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJtZXNzYWdlIiwib25DaGFuZ2UiLCJ2YWwiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/add-module/page.tsx\n"));

/***/ })

});