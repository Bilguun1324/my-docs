"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerPreview"],{

/***/ "(app-pages-browser)/./node_modules/react-player/lib/Preview.js":
/*!**************************************************!*\
  !*** ./node_modules/react-player/lib/Preview.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nvar __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {\n        enumerable: true,\n        configurable: true,\n        writable: true,\n        value\n    }) : obj[key] = value;\nvar __export = (target, all)=>{\n    for(var name in all)__defProp(target, name, {\n        get: all[name],\n        enumerable: true\n    });\n};\nvar __copyProps = (to, from, except, desc)=>{\n    if (from && typeof from === \"object\" || typeof from === \"function\") {\n        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {\n            get: ()=>from[key],\n            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable\n        });\n    }\n    return to;\n};\nvar __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM\n    // file that has been converted to a CommonJS file using a Babel-\n    // compatible transform (i.e. \"__esModule\" has not been set), then set\n    // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n    isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", {\n        value: mod,\n        enumerable: true\n    }) : target, mod));\nvar __toCommonJS = (mod)=>__copyProps(__defProp({}, \"__esModule\", {\n        value: true\n    }), mod);\nvar __publicField = (obj, key, value)=>{\n    __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n    return value;\n};\nvar Preview_exports = {};\n__export(Preview_exports, {\n    default: ()=>Preview\n});\nmodule.exports = __toCommonJS(Preview_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\"));\nconst ICON_SIZE = \"64px\";\nconst cache = {};\nclass Preview extends import_react.Component {\n    componentDidMount() {\n        this.mounted = true;\n        this.fetchImage(this.props);\n    }\n    componentDidUpdate(prevProps) {\n        const { url, light } = this.props;\n        if (prevProps.url !== url || prevProps.light !== light) {\n            this.fetchImage(this.props);\n        }\n    }\n    componentWillUnmount() {\n        this.mounted = false;\n    }\n    fetchImage(param) {\n        let { url, light, oEmbedUrl } = param;\n        if (import_react.default.isValidElement(light)) {\n            return;\n        }\n        if (typeof light === \"string\") {\n            this.setState({\n                image: light\n            });\n            return;\n        }\n        if (cache[url]) {\n            this.setState({\n                image: cache[url]\n            });\n            return;\n        }\n        this.setState({\n            image: null\n        });\n        return window.fetch(oEmbedUrl.replace(\"{url}\", url)).then((response)=>response.json()).then((data)=>{\n            if (data.thumbnail_url && this.mounted) {\n                const image = data.thumbnail_url.replace(\"height=100\", \"height=480\").replace(\"-d_295x166\", \"-d_640\");\n                this.setState({\n                    image\n                });\n                cache[url] = image;\n            }\n        });\n    }\n    render() {\n        const { light, onClick, playIcon, previewTabIndex } = this.props;\n        const { image } = this.state;\n        const isElement = import_react.default.isValidElement(light);\n        const flexCenter = {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\"\n        };\n        const styles = {\n            preview: {\n                width: \"100%\",\n                height: \"100%\",\n                backgroundImage: image && !isElement ? \"url(\".concat(image, \")\") : void 0,\n                backgroundSize: \"cover\",\n                backgroundPosition: \"center\",\n                cursor: \"pointer\",\n                ...flexCenter\n            },\n            shadow: {\n                background: \"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)\",\n                borderRadius: ICON_SIZE,\n                width: ICON_SIZE,\n                height: ICON_SIZE,\n                position: isElement ? \"absolute\" : void 0,\n                ...flexCenter\n            },\n            playIcon: {\n                borderStyle: \"solid\",\n                borderWidth: \"16px 0 16px 26px\",\n                borderColor: \"transparent transparent transparent white\",\n                marginLeft: \"7px\"\n            }\n        };\n        const defaultPlayIcon = /* @__PURE__ */ import_react.default.createElement(\"div\", {\n            style: styles.shadow,\n            className: \"react-player__shadow\"\n        }, /* @__PURE__ */ import_react.default.createElement(\"div\", {\n            style: styles.playIcon,\n            className: \"react-player__play-icon\"\n        }));\n        return /* @__PURE__ */ import_react.default.createElement(\"div\", {\n            style: styles.preview,\n            className: \"react-player__preview\",\n            onClick,\n            tabIndex: previewTabIndex,\n            onKeyPress: this.handleKeyPress\n        }, isElement ? light : null, playIcon || defaultPlayIcon);\n    }\n    constructor(){\n        super(...arguments);\n        __publicField(this, \"mounted\", false);\n        __publicField(this, \"state\", {\n            image: null\n        });\n        __publicField(this, \"handleKeyPress\", (e)=>{\n            if (e.key === \"Enter\" || e.key === \" \") {\n                this.props.onClick();\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL1ByZXZpZXcuanMiLCJtYXBwaW5ncyI6IjtBQUFBLElBQUlBLFdBQVdDLE9BQU9DLE1BQU07QUFDNUIsSUFBSUMsWUFBWUYsT0FBT0csY0FBYztBQUNyQyxJQUFJQyxtQkFBbUJKLE9BQU9LLHdCQUF3QjtBQUN0RCxJQUFJQyxvQkFBb0JOLE9BQU9PLG1CQUFtQjtBQUNsRCxJQUFJQyxlQUFlUixPQUFPUyxjQUFjO0FBQ3hDLElBQUlDLGVBQWVWLE9BQU9XLFNBQVMsQ0FBQ0MsY0FBYztBQUNsRCxJQUFJQyxrQkFBa0IsQ0FBQ0MsS0FBS0MsS0FBS0MsUUFBVUQsT0FBT0QsTUFBTVosVUFBVVksS0FBS0MsS0FBSztRQUFFRSxZQUFZO1FBQU1DLGNBQWM7UUFBTUMsVUFBVTtRQUFNSDtJQUFNLEtBQUtGLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHQztBQUMxSixJQUFJSSxXQUFXLENBQUNDLFFBQVFDO0lBQ3RCLElBQUssSUFBSUMsUUFBUUQsSUFDZnBCLFVBQVVtQixRQUFRRSxNQUFNO1FBQUVDLEtBQUtGLEdBQUcsQ0FBQ0MsS0FBSztRQUFFTixZQUFZO0lBQUs7QUFDL0Q7QUFDQSxJQUFJUSxjQUFjLENBQUNDLElBQUlDLE1BQU1DLFFBQVFDO0lBQ25DLElBQUlGLFFBQVEsT0FBT0EsU0FBUyxZQUFZLE9BQU9BLFNBQVMsWUFBWTtRQUNsRSxLQUFLLElBQUlaLE9BQU9ULGtCQUFrQnFCLE1BQ2hDLElBQUksQ0FBQ2pCLGFBQWFvQixJQUFJLENBQUNKLElBQUlYLFFBQVFBLFFBQVFhLFFBQ3pDMUIsVUFBVXdCLElBQUlYLEtBQUs7WUFBRVMsS0FBSyxJQUFNRyxJQUFJLENBQUNaLElBQUk7WUFBRUUsWUFBWSxDQUFFWSxDQUFBQSxPQUFPekIsaUJBQWlCdUIsTUFBTVosSUFBRyxLQUFNYyxLQUFLWixVQUFVO1FBQUM7SUFDdEg7SUFDQSxPQUFPUztBQUNUO0FBQ0EsSUFBSUss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QUMvQkEsY0FBYyxJQUFJLEVBQUUsU0FBUztZQUMzQnVCLE9BQU87UUFDVDtRQUNBdkIsY0FBYyxJQUFJLEVBQUUsa0JBQWtCLENBQUNtRTtZQUNyQyxJQUFJQSxFQUFFeEYsR0FBRyxLQUFLLFdBQVd3RixFQUFFeEYsR0FBRyxLQUFLLEtBQUs7Z0JBQ3RDLElBQUksQ0FBQ21DLEtBQUssQ0FBQ21CLE9BQU87WUFDcEI7UUFDRjtJQUNGO0FBbUZGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL1ByZXZpZXcuanM/NmYwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9fZ2V0UHJvdG9PZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fZGVmTm9ybWFsUHJvcCA9IChvYmosIGtleSwgdmFsdWUpID0+IGtleSBpbiBvYmogPyBfX2RlZlByb3Aob2JqLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWUgfSkgOiBvYmpba2V5XSA9IHZhbHVlO1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9FU00gPSAobW9kLCBpc05vZGVNb2RlLCB0YXJnZXQpID0+ICh0YXJnZXQgPSBtb2QgIT0gbnVsbCA/IF9fY3JlYXRlKF9fZ2V0UHJvdG9PZihtb2QpKSA6IHt9LCBfX2NvcHlQcm9wcyhcbiAgLy8gSWYgdGhlIGltcG9ydGVyIGlzIGluIG5vZGUgY29tcGF0aWJpbGl0eSBtb2RlIG9yIHRoaXMgaXMgbm90IGFuIEVTTVxuICAvLyBmaWxlIHRoYXQgaGFzIGJlZW4gY29udmVydGVkIHRvIGEgQ29tbW9uSlMgZmlsZSB1c2luZyBhIEJhYmVsLVxuICAvLyBjb21wYXRpYmxlIHRyYW5zZm9ybSAoaS5lLiBcIl9fZXNNb2R1bGVcIiBoYXMgbm90IGJlZW4gc2V0KSwgdGhlbiBzZXRcbiAgLy8gXCJkZWZhdWx0XCIgdG8gdGhlIENvbW1vbkpTIFwibW9kdWxlLmV4cG9ydHNcIiBmb3Igbm9kZSBjb21wYXRpYmlsaXR5LlxuICBpc05vZGVNb2RlIHx8ICFtb2QgfHwgIW1vZC5fX2VzTW9kdWxlID8gX19kZWZQcm9wKHRhcmdldCwgXCJkZWZhdWx0XCIsIHsgdmFsdWU6IG1vZCwgZW51bWVyYWJsZTogdHJ1ZSB9KSA6IHRhcmdldCxcbiAgbW9kXG4pKTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xudmFyIF9fcHVibGljRmllbGQgPSAob2JqLCBrZXksIHZhbHVlKSA9PiB7XG4gIF9fZGVmTm9ybWFsUHJvcChvYmosIHR5cGVvZiBrZXkgIT09IFwic3ltYm9sXCIgPyBrZXkgKyBcIlwiIDoga2V5LCB2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG52YXIgUHJldmlld19leHBvcnRzID0ge307XG5fX2V4cG9ydChQcmV2aWV3X2V4cG9ydHMsIHtcbiAgZGVmYXVsdDogKCkgPT4gUHJldmlld1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9fdG9Db21tb25KUyhQcmV2aWV3X2V4cG9ydHMpO1xudmFyIGltcG9ydF9yZWFjdCA9IF9fdG9FU00ocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IElDT05fU0laRSA9IFwiNjRweFwiO1xuY29uc3QgY2FjaGUgPSB7fTtcbmNsYXNzIFByZXZpZXcgZXh0ZW5kcyBpbXBvcnRfcmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwibW91bnRlZFwiLCBmYWxzZSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInN0YXRlXCIsIHtcbiAgICAgIGltYWdlOiBudWxsXG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImhhbmRsZUtleVByZXNzXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcbiAgICB0aGlzLmZldGNoSW1hZ2UodGhpcy5wcm9wcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGNvbnN0IHsgdXJsLCBsaWdodCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAocHJldlByb3BzLnVybCAhPT0gdXJsIHx8IHByZXZQcm9wcy5saWdodCAhPT0gbGlnaHQpIHtcbiAgICAgIHRoaXMuZmV0Y2hJbWFnZSh0aGlzLnByb3BzKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG4gIH1cbiAgZmV0Y2hJbWFnZSh7IHVybCwgbGlnaHQsIG9FbWJlZFVybCB9KSB7XG4gICAgaWYgKGltcG9ydF9yZWFjdC5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KGxpZ2h0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGxpZ2h0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2U6IGxpZ2h0IH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2FjaGVbdXJsXSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlOiBjYWNoZVt1cmxdIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2U6IG51bGwgfSk7XG4gICAgcmV0dXJuIHdpbmRvdy5mZXRjaChvRW1iZWRVcmwucmVwbGFjZShcInt1cmx9XCIsIHVybCkpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLnRodW1ibmFpbF91cmwgJiYgdGhpcy5tb3VudGVkKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZGF0YS50aHVtYm5haWxfdXJsLnJlcGxhY2UoXCJoZWlnaHQ9MTAwXCIsIFwiaGVpZ2h0PTQ4MFwiKS5yZXBsYWNlKFwiLWRfMjk1eDE2NlwiLCBcIi1kXzY0MFwiKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlIH0pO1xuICAgICAgICBjYWNoZVt1cmxdID0gaW1hZ2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGlnaHQsIG9uQ2xpY2ssIHBsYXlJY29uLCBwcmV2aWV3VGFiSW5kZXggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpbWFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBpc0VsZW1lbnQgPSBpbXBvcnRfcmVhY3QuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChsaWdodCk7XG4gICAgY29uc3QgZmxleENlbnRlciA9IHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXG4gICAgfTtcbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICBwcmV2aWV3OiB7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBpbWFnZSAmJiAhaXNFbGVtZW50ID8gYHVybCgke2ltYWdlfSlgIDogdm9pZCAwLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgIC4uLmZsZXhDZW50ZXJcbiAgICAgIH0sXG4gICAgICBzaGFkb3c6IHtcbiAgICAgICAgYmFja2dyb3VuZDogXCJyYWRpYWwtZ3JhZGllbnQocmdiKDAsIDAsIDAsIDAuMyksIHJnYmEoMCwgMCwgMCwgMCkgNjAlKVwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IElDT05fU0laRSxcbiAgICAgICAgd2lkdGg6IElDT05fU0laRSxcbiAgICAgICAgaGVpZ2h0OiBJQ09OX1NJWkUsXG4gICAgICAgIHBvc2l0aW9uOiBpc0VsZW1lbnQgPyBcImFic29sdXRlXCIgOiB2b2lkIDAsXG4gICAgICAgIC4uLmZsZXhDZW50ZXJcbiAgICAgIH0sXG4gICAgICBwbGF5SWNvbjoge1xuICAgICAgICBib3JkZXJTdHlsZTogXCJzb2xpZFwiLFxuICAgICAgICBib3JkZXJXaWR0aDogXCIxNnB4IDAgMTZweCAyNnB4XCIsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHdoaXRlXCIsXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiN3B4XCJcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGRlZmF1bHRQbGF5SWNvbiA9IC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy5zaGFkb3csIGNsYXNzTmFtZTogXCJyZWFjdC1wbGF5ZXJfX3NoYWRvd1wiIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy5wbGF5SWNvbiwgY2xhc3NOYW1lOiBcInJlYWN0LXBsYXllcl9fcGxheS1pY29uXCIgfSkpO1xuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0eWxlOiBzdHlsZXMucHJldmlldyxcbiAgICAgICAgY2xhc3NOYW1lOiBcInJlYWN0LXBsYXllcl9fcHJldmlld1wiLFxuICAgICAgICBvbkNsaWNrLFxuICAgICAgICB0YWJJbmRleDogcHJldmlld1RhYkluZGV4LFxuICAgICAgICBvbktleVByZXNzOiB0aGlzLmhhbmRsZUtleVByZXNzXG4gICAgICB9LFxuICAgICAgaXNFbGVtZW50ID8gbGlnaHQgOiBudWxsLFxuICAgICAgcGxheUljb24gfHwgZGVmYXVsdFBsYXlJY29uXG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIl9fY3JlYXRlIiwiT2JqZWN0IiwiY3JlYXRlIiwiX19kZWZQcm9wIiwiZGVmaW5lUHJvcGVydHkiLCJfX2dldE93blByb3BEZXNjIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX19nZXRPd25Qcm9wTmFtZXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiX19nZXRQcm90b09mIiwiZ2V0UHJvdG90eXBlT2YiLCJfX2hhc093blByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsIl9fZGVmTm9ybWFsUHJvcCIsIm9iaiIsImtleSIsInZhbHVlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX19leHBvcnQiLCJ0YXJnZXQiLCJhbGwiLCJuYW1lIiwiZ2V0IiwiX19jb3B5UHJvcHMiLCJ0byIsImZyb20iLCJleGNlcHQiLCJkZXNjIiwiY2FsbCIsIl9fdG9FU00iLCJtb2QiLCJpc05vZGVNb2RlIiwiX19lc01vZHVsZSIsIl9fdG9Db21tb25KUyIsIl9fcHVibGljRmllbGQiLCJQcmV2aWV3X2V4cG9ydHMiLCJkZWZhdWx0IiwiUHJldmlldyIsIm1vZHVsZSIsImV4cG9ydHMiLCJpbXBvcnRfcmVhY3QiLCJyZXF1aXJlIiwiSUNPTl9TSVpFIiwiY2FjaGUiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsIm1vdW50ZWQiLCJmZXRjaEltYWdlIiwicHJvcHMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJ1cmwiLCJsaWdodCIsImNvbXBvbmVudFdpbGxVbm1vdW50Iiwib0VtYmVkVXJsIiwiaXNWYWxpZEVsZW1lbnQiLCJzZXRTdGF0ZSIsImltYWdlIiwid2luZG93IiwiZmV0Y2giLCJyZXBsYWNlIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJ0aHVtYm5haWxfdXJsIiwicmVuZGVyIiwib25DbGljayIsInBsYXlJY29uIiwicHJldmlld1RhYkluZGV4Iiwic3RhdGUiLCJpc0VsZW1lbnQiLCJmbGV4Q2VudGVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInN0eWxlcyIsInByZXZpZXciLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiY3Vyc29yIiwic2hhZG93IiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJXaWR0aCIsImJvcmRlckNvbG9yIiwibWFyZ2luTGVmdCIsImRlZmF1bHRQbGF5SWNvbiIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImNsYXNzTmFtZSIsInRhYkluZGV4Iiwib25LZXlQcmVzcyIsImhhbmRsZUtleVByZXNzIiwiY29uc3RydWN0b3IiLCJhcmd1bWVudHMiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/react-player/lib/Preview.js\n"));

/***/ })

}]);