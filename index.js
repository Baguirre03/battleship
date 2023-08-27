"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    font-family: "Playfair Display", serif;
    --dark: #22223b;
    --ultra-violet: #4a4e69;
    --rose: #9a8c98;
    --pale: #c9ada7;
    --lightest: #f2e9e4;
    --side-font: 0.9rem;
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background-color: var(--lightest);
}

.title {
    display: flex;
    font-size: 3rem;
    align-self: center;
    justify-self: center;
    color: var(--dark);
}

.main-container {
    display: flex;
    gap: 2rem;
}

.board {
    display: flex;
    flex-direction: column-reverse;
}

.column {
    display: flex;
}

.row {
    outline: 1px solid black;
    width: 3rem;
    height: 3rem;
    display: flex;
}

.hit-ship {
    background-color: red;
}

.miss {
    background-color: rgb(14, 219, 250);
}

.winner-display {
    color: var(--dark);
    position: absolute;
    border: 2px solid black;
    top: 50%;
    width: 40vw;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--pale);
    box-shadow: 5px 5px 5px var(--dark);
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    font-size: 1.2rem;
    justify-content: center;
}

.hovered {
    background-color: var(--rose);
}

.ship-placed-there {
    background-color: var(--dark);
}

.sunk-ship-name {
    color: red;
}

.section-holder {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.notification {
    border: 1px solid var(--pale);
    font-size: 4rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: red;
    background-color: var(--dark);
    padding: 1rem;
    border-radius: 1rem;
    position: absolute;
    animation: blinker 3s linear infinite;
}

.ships-display {
    background-color: var(--ultra-violet);
    padding: 1rem;
    border-radius: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0.4rem;
    box-shadow: 5px 5px 5px var(--rose);
    margin-bottom: 10px;
    border: 1px solid black;
}

.ship-name {
    font-size: var(--side-font);
}
.hits {
    font-size: var(--side-font);
}
.sunk {
    font-size: var(--side-font);
}
.length {
    font-size: var(--side-font);
}
.ship-container {
    background-color: var(--lightest);
    border-radius: 1rem;
    padding: 1rem;
    border: 2px solid black;
}

@keyframes blinker {
    50% {
        opacity: 0;
    }
}

.instructions {
    color: var(--dark);
    position: absolute;
    border: 2px solid black;
    top: 50%;
    width: 40vw;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--pale);
    box-shadow: 5px 5px 5px var(--dark);
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

ul {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

li {
    list-style: none;
}

.play {
    font-size: 1rem;
    border-radius: 1rem;
    padding: 4px;
    box-shadow: 4px 4px 4px var(--dark);
}

.play:hover {
    cursor: pointer;
    background-color: var(--dark);
    color: var(--lightest);
}

.restart-game {
    background-color: white;
    border: 1px solid black;
    align-self: center;
    padding: 4px;
    color: black;
    width: 70%;
    border-radius: 1rem;
}

.restart-game:hover {
    cursor: pointer;
    box-shadow: 4px 4px 4px var(--dark);
    background-color: var(--dark);
    color: var(--lightest);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;IACV,sCAAsC;IACtC,eAAe;IACf,uBAAuB;IACvB,eAAe;IACf,eAAe;IACf,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,WAAW;IACX,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,uBAAuB;IACvB,QAAQ;IACR,WAAW;IACX,SAAS;IACT,gCAAgC;IAChC,6BAA6B;IAC7B,mCAAmC;IACnC,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,6BAA6B;IAC7B,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;;IAEhC,UAAU;IACV,6BAA6B;IAC7B,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,qCAAqC;AACzC;;AAEA;IACI,qCAAqC;IACrC,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,kCAAkC;IAClC,2BAA2B;IAC3B,WAAW;IACX,mCAAmC;IACnC,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,2BAA2B;AAC/B;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,iCAAiC;IACjC,mBAAmB;IACnB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI;QACI,UAAU;IACd;AACJ;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,uBAAuB;IACvB,QAAQ;IACR,WAAW;IACX,SAAS;IACT,gCAAgC;IAChC,6BAA6B;IAC7B,mCAAmC;IACnC,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,eAAe;IACf,6BAA6B;IAC7B,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,mCAAmC;IACnC,6BAA6B;IAC7B,sBAAsB;AAC1B","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap\");\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: \"Playfair Display\", serif;\n    --dark: #22223b;\n    --ultra-violet: #4a4e69;\n    --rose: #9a8c98;\n    --pale: #c9ada7;\n    --lightest: #f2e9e4;\n    --side-font: 0.9rem;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    background-color: var(--lightest);\n}\n\n.title {\n    display: flex;\n    font-size: 3rem;\n    align-self: center;\n    justify-self: center;\n    color: var(--dark);\n}\n\n.main-container {\n    display: flex;\n    gap: 2rem;\n}\n\n.board {\n    display: flex;\n    flex-direction: column-reverse;\n}\n\n.column {\n    display: flex;\n}\n\n.row {\n    outline: 1px solid black;\n    width: 3rem;\n    height: 3rem;\n    display: flex;\n}\n\n.hit-ship {\n    background-color: red;\n}\n\n.miss {\n    background-color: rgb(14, 219, 250);\n}\n\n.winner-display {\n    color: var(--dark);\n    position: absolute;\n    border: 2px solid black;\n    top: 50%;\n    width: 40vw;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: var(--pale);\n    box-shadow: 5px 5px 5px var(--dark);\n    padding: 1rem;\n    border-radius: 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n    font-size: 1.2rem;\n    justify-content: center;\n}\n\n.hovered {\n    background-color: var(--rose);\n}\n\n.ship-placed-there {\n    background-color: var(--dark);\n}\n\n.sunk-ship-name {\n    color: red;\n}\n\n.section-holder {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.notification {\n    border: 1px solid var(--pale);\n    font-size: 4rem;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    color: red;\n    background-color: var(--dark);\n    padding: 1rem;\n    border-radius: 1rem;\n    position: absolute;\n    animation: blinker 3s linear infinite;\n}\n\n.ships-display {\n    background-color: var(--ultra-violet);\n    padding: 1rem;\n    border-radius: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 0.4rem;\n    box-shadow: 5px 5px 5px var(--rose);\n    margin-bottom: 10px;\n    border: 1px solid black;\n}\n\n.ship-name {\n    font-size: var(--side-font);\n}\n.hits {\n    font-size: var(--side-font);\n}\n.sunk {\n    font-size: var(--side-font);\n}\n.length {\n    font-size: var(--side-font);\n}\n.ship-container {\n    background-color: var(--lightest);\n    border-radius: 1rem;\n    padding: 1rem;\n    border: 2px solid black;\n}\n\n@keyframes blinker {\n    50% {\n        opacity: 0;\n    }\n}\n\n.instructions {\n    color: var(--dark);\n    position: absolute;\n    border: 2px solid black;\n    top: 50%;\n    width: 40vw;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: var(--pale);\n    box-shadow: 5px 5px 5px var(--dark);\n    padding: 1rem;\n    border-radius: 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\nul {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\nli {\n    list-style: none;\n}\n\n.play {\n    font-size: 1rem;\n    border-radius: 1rem;\n    padding: 4px;\n    box-shadow: 4px 4px 4px var(--dark);\n}\n\n.play:hover {\n    cursor: pointer;\n    background-color: var(--dark);\n    color: var(--lightest);\n}\n\n.restart-game {\n    background-color: white;\n    border: 1px solid black;\n    align-self: center;\n    padding: 4px;\n    color: black;\n    width: 70%;\n    border-radius: 1rem;\n}\n\n.restart-game:hover {\n    cursor: pointer;\n    box-shadow: 4px 4px 4px var(--dark);\n    background-color: var(--dark);\n    color: var(--lightest);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DOM */ "./src/modules/DOM.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_modules_DOM__WEBPACK_IMPORTED_MODULE_0__.generateStarterHTML)();

(0,_modules_DOM__WEBPACK_IMPORTED_MODULE_0__.gameLoop)();
(0,_modules_DOM__WEBPACK_IMPORTED_MODULE_0__.placeShips)();


/***/ }),

/***/ "./src/modules/DOM.js":
/*!****************************!*\
  !*** ./src/modules/DOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkWinner: () => (/* binding */ checkWinner),
/* harmony export */   gameLoop: () => (/* binding */ gameLoop),
/* harmony export */   generateStarterHTML: () => (/* binding */ generateStarterHTML),
/* harmony export */   placeShips: () => (/* binding */ placeShips),
/* harmony export */   updateShips: () => (/* binding */ updateShips)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-cycle


function generateStarterHTML() {
    document.body.innerHTML = `
    <head>
        <div class="title">BattleShip</div>
    </head>
    <body>
        <div class="instructions">
            <h2 class="second-title">Welcome to Battleship!</h2>
            <h3 class="instructions-header">Instructions:</h3>
            <ul>
                <li>Object of the Game: Be the first to sink all 5 of your opponent's ships (the robot)</li>
                <li>Prepare for Battle: Your board is on the left side, first you want to place all of your ships!</li>
                <li>If you want to turn the way your ship goes, just right click!</li>
                <li>After you place all 5 of your ships, battle has begun!</li>
                <li>Your turn is first, just go ahead and click the board on the right. A blue square means you missed, red means you hit the robot's ship!</li>
            </ul>
            <h3 class="notes">Some Notes:</h3>
            <ul>
                <li>The robot is better if you place the ships not touching!</li>
                <li>If you hit a ship, you get to go again!</li>
                <li>Sometimes the robot is smart, sometimes it isnt...</li>
            </ul>
            <button class="play">Lets play!</button>
        </div> 
        <div class="main-container">
            <div class="section-holder">
                <div class="player-name"></div>
                <div class="board" id="user-board"></div>
                <div class="ships-display user"></div>
            </div>
            <div class="section-holder">
                <div class="player-name"></div>
                <div class="board" id="bot-board"></div>
                <div class="ships-display robot"></div>
            </div>
        </div>
    </body>
    `;
}

const user = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])("user");
const robot = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])("robot");
let currentShip = user.game.ships[0];
let currentDirection = "vertical";
let placedShips = false;

function displayGameBoards(boardObj, boardSelector, secondClass) {
    const boardDisplay = document.querySelector(boardSelector);
    for (let i = 1; i < boardObj.length; i += 1) {
        const divOne = document.createElement("div");
        divOne.classList.add("column");
        boardDisplay.appendChild(divOne);
        for (let j = 1; j < boardObj[i].length; j += 1) {
            const divTwo = document.createElement("div");
            divTwo.classList.add("row");
            divTwo.classList.add(secondClass);

            divOne.appendChild(divTwo);
            divTwo.dataset.cordOne = j;
            divTwo.dataset.cordTwo = i;
        }
    }
}

function removeChildren(removeFrom) {
    while (removeFrom.firstChild) {
        removeFrom.removeChild(removeFrom.firstChild);
    }
}

function sunkShip(player, ship) {
    if (player.game.sunkShipsArray.includes(ship)) return;
    player.game.sunkShipsArray.push(ship);

    const notif = document.createElement("div");
    notif.classList.add("notification");

    notif.textContent = `${player.playerName
        .slice(0, 1)
        .toUpperCase()}${player.playerName.slice(1)}'s ${
        ship.name
    } has been sunk!`;

    document.body.appendChild(notif);
    setTimeout(() => {
        document.body.removeChild(notif);
    }, 3000);
}

function updateShips(playerOrUser) {
    const ships = playerOrUser.game.shipsArray;
    const display = document.querySelector(
        `.ships-display.${playerOrUser.playerName}`,
    );
    removeChildren(display);
    ships.forEach((ship) => {
        const div = document.createElement("div");
        div.classList.add("ship-container");
        display.appendChild(div);

        const name = document.createElement("h3");
        name.classList.add("ship-name");
        const hits = document.createElement("div");
        hits.classList.add("hits");
        const sunk = document.createElement("div");
        sunk.classList.add("sunk");
        const length = document.createElement("div");
        length.classList.add("length");

        div.append(name, hits, sunk, length);

        name.textContent = ship.name;
        hits.textContent = `Hits: ${ship.hits}`;
        sunk.textContent = `Sunk: ${ship.isSunk()}`;
        if (ship.isSunk()) {
            sunkShip(playerOrUser, ship);
            name.classList.add("sunk-ship-name");
        }
        length.textContent = `Length: ${ship.getLength()}`;
    });
}

function displayWinner(winner) {
    if (!document.querySelector(".winner-display")) {
        const display = document.createElement("div");
        display.classList.add("winner-display");
        document.body.appendChild(display);
        display.textContent = `${winner.playerName
            .slice(0, 1)
            .toUpperCase()}${winner.playerName.slice(1)} has won the game!`;

        const button = document.createElement("button");
        button.classList.add("restart-game");
        button.addEventListener("click", () => {
            location.reload();
        });
        button.textContent = "restart game";
        display.appendChild(button);
    }
}

function checkWinner() {
    if (robot.game.allShipsSunk()) {
        user.winner = true;
        displayWinner(user);
        return true;
    }
    if (user.game.allShipsSunk()) {
        robot.winner = true;
        displayWinner(robot);
        return true;
    }
    return false;
}

function gameSequence(cell, gameOver) {
    if (
        gameOver ||
        robot.game.checkIfAlreadyClicked(
            cell.dataset.cordOne,
            cell.dataset.cordTwo,
        )
    ) {
        return;
    }
    if (user.takeTurn(robot, cell.dataset.cordOne, cell.dataset.cordTwo)) {
        cell.classList.add("hit-ship");
    } else {
        user.switchTurn();
        robot.aiMoves(user, user.hit);
        cell.classList.add("miss");
    }

    updateShips(robot);
}

function gameLoop() {
    let gameOver = false;

    user.switchTurn();
    robot.game.placeRobotShips();
    displayGameBoards(user.game.board, "#user-board", "user");
    displayGameBoards(robot.game.board, "#bot-board", "bot");

    const botBoard = document.querySelectorAll(".bot");
    botBoard.forEach((cell) => {
        cell.addEventListener("click", () => {
            if (!placedShips) {
                return;
            }
            if (user.turn === false) {
                return;
            }
            gameSequence(cell, gameOver);
            if (checkWinner(robot, user)) {
                gameOver = true;
            }
        });
    });
}

function advanceShipArray() {
    const index = user.game.ships.indexOf(currentShip);
    currentShip = user.game.ships[index + 1];
}

function addClasses(cell, classToAdd, addOrRemove) {
    const cords = user.game.findCords(
        currentShip,
        cell.dataset.cordOne,
        cell.dataset.cordTwo,
        currentDirection,
    );
    cords.forEach((addCord) => {
        if (currentDirection === "horizontal") {
            const hightlight = document.querySelector(
                `[data-cord-one="${addCord}"][data-cord-two="${cell.dataset.cordTwo}"]`,
            );
            hightlight.classList[addOrRemove](classToAdd);
        }
        if (currentDirection === "vertical") {
            const hightlight = document.querySelector(
                `[data-cord-one="${cell.dataset.cordOne}"][data-cord-two="${addCord}"]`,
            );
            hightlight.classList[addOrRemove](classToAdd);
        }
    });
}

function cellEventListers(cell) {
    cell.addEventListener("mouseenter", () => {
        if (placedShips) return;
        addClasses(cell, "hovered", "add");
    });

    cell.addEventListener("mouseleave", () => {
        if (placedShips) return;
        addClasses(cell, "hovered", "remove");
    });

    cell.addEventListener("click", () => {
        const deselect = document.querySelectorAll(".row.user");
        deselect.forEach((deselectThis) =>
            deselectThis.classList.remove("hovered"),
        ); //   removes hovered class from last placed ship

        if (placedShips) return;
        if (
            !user.game.placeShip(
                currentShip,
                cell.dataset.cordOne,
                cell.dataset.cordTwo,
                currentDirection,
                user.game.board,
            )
        )
            return;
        if (currentShip === user.game.ships[4]) {
            placedShips = true;
        }
        addClasses(cell, "ship-placed-there", "add");
        advanceShipArray();
    });
}

function removeInstructions() {
    const instructions = document.querySelector(".instructions");
    instructions.remove();
}

function placeShips() {
    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        const deselect = document.querySelectorAll(".row.user");
        deselect.forEach((cell) => cell.classList.remove("hovered"));

        currentDirection === "vertical"
            ? (currentDirection = "horizontal")
            : (currentDirection = "vertical");
        addClasses(e.target, "hovered", "add");
    });

    const removeButton = document.querySelector("button");
    !removeButton
        ? null
        : removeButton.addEventListener("click", removeInstructions);

    const cells = document.querySelectorAll(".row.user");
    cells.forEach((cell) => cellEventListers(cell));
}




/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */



function Gameboard() {
    const board = iniatlizeBoard();
    let misses = 0;
    let missedCords = [];
    let hitCords = [];
    let allCords = [];
    let shipsArray = [];
    let sunkShipsArray = [];
    let lastShipHit = null;
    let sunkShips = 0;
    const ships = [
        (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2, "Destroyer"),
        (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, "Submarine"),
        (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, "Cruiser"),
        (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(4, "Battleship"),
        (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(5, "Carrier"),
    ];

    function iniatlizeBoard() {
        const holder = [];
        for (let i = 1; i <= 10; i += 1) {
            holder[i] = [];
            for (let j = 1; j <= 10; j += 1) {
                holder[i][j] = null;
            }
        }
        return holder;
    }

    function getMisses() {
        return this.misses;
    }

    function getSunkShips() {
        return this.sunkShips;
    }

    function checkIfShipIsOutOfBounds(shipObj, cordOne, cordTwo, direction) {
        if (
            direction === "horizontal" &&
            cordOne - 1 + shipObj.getLength() > 10
        ) {
            return true;
        }
        if (
            direction === "vertical" &&
            cordTwo - 1 + shipObj.getLength() > 10
        ) {
            return true;
        }
        return false;
    }

    function findCords(shipObj, cordOne, cordTwo, direction) {
        const newCords = [];
        if (direction === "horizontal") {
            newCords.push(cordOne);
            for (let i = 1; i < shipObj.getLength(); i += 1) {
                newCords.push(Number(cordOne) + i);
            }
        }
        if (direction === "vertical") {
            newCords.push(cordTwo);
            for (let i = 1; i < shipObj.getLength(); i += 1) {
                newCords.push(Number(cordTwo) + i);
            }
        }
        return newCords;
    }

    function checkIfCordsHasShip(
        cordOne,
        cordTwo,
        direction,
        additonalCords,
        boardCopy,
    ) {
        if (direction === "horizontal") {
            for (const cordinate of additonalCords) {
                if (boardCopy[cordinate][cordTwo] != null) {
                    return true;
                }
            }
        }
        if (direction === "vertical") {
            for (const cordinate of additonalCords) {
                if (boardCopy[cordOne][cordinate] != null) {
                    return true;
                }
            }
        }
        return false;
    }

    function placeShip(shipObj, cordOne, cordTwo, direction, board) {
        if (checkIfShipIsOutOfBounds(shipObj, cordOne, cordTwo, direction)) {
            return false;
        }

        const cords = findCords(shipObj, cordOne, cordTwo, direction);

        if (checkIfCordsHasShip(cordOne, cordTwo, direction, cords, board)) {
            return false;
        }

        cords.forEach((cord) => {
            if (direction === "horizontal") {
                board[cord][cordTwo] = shipObj;
            }
            if (direction === "vertical") {
                board[cordOne][cord] = shipObj;
            }
        });
        shipsArray.push(shipObj);
        return true;
    }

    function checkCordForAttack(cordOne, cordTwo, boardCopy) {
        const cordinate = boardCopy[cordOne][cordTwo];
        if (cordinate != null) {
            return boardCopy[cordOne][cordTwo]; // returns ship if there
        }
        return null;
    }

    function updateHits(ship, boardCopy) {
        ship.hit();
        if (ship.isSunk()) {
            boardCopy.sunkShips += 1;
        }
    }

    function recieveAttack(cordOne, cordTwo) {
        this.allCords.push([cordOne, cordTwo]);
        const ship = checkCordForAttack(cordOne, cordTwo, this.board);
        if (ship === null) {
            this.misses += 1;
            this.missedCords.push([cordOne, cordTwo]);
            this.board[cordOne][cordTwo] = "miss";
            return false;
        }
        this.lastShipHit = this.board[cordOne][cordTwo];
        this.hitCords.push([cordOne, cordTwo]);
        updateHits(ship, this.board);
        return true;
    }

    const isSunkShip = (ship) => ship.sunk;

    function allShipsSunk() {
        if (shipsArray.every(isSunkShip)) {
            return true;
        }
        return false;
    }

    function randomNumber() {
        let num = Math.floor(Math.random() * 10);
        if (num === 0) {
            return randomNumber();
        }
        return num;
    }

    function randomDirection() {
        let directions = ["vertical", "horizontal"];
        return directions[Math.floor(Math.random() * directions.length)];
    }

    function placeRobotShips() {
        ships.forEach((ship) => {
            placeShipsRobotRec(ship, this.board);
        });
    }

    function placeShipsRobotRec(ship, board) {
        if (
            placeShip(
                ship,
                randomNumber(),
                randomNumber(),
                randomDirection(),
                board,
            ) === false
        ) {
            placeShipsRobotRec(ship, board);
        }
    }

    function checkIfAlreadyClicked(cordOne, cordTwo) {
        for (let i = 0; i < allCords.length; i += 1) {
            if (cordOne === allCords[i][0] && cordTwo === allCords[i][1]) {
                return true;
            }
        }
        return false;
    }

    return {
        board,
        misses,
        placeShip,
        recieveAttack,
        getMisses,
        missedCords,
        shipsArray,
        sunkShips,
        allShipsSunk,
        getSunkShips,
        placeRobotShips,
        allCords,
        randomDirection,
        randomNumber,
        findCords,
        checkIfAlreadyClicked,
        sunkShipsArray,
        hitCords,
        lastShipHit,
        ships,
    };
}


/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/modules/DOM.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-cycle



/* eslint-disable prefer-const */
function Player(playerName) {
    let turn = false;
    let game = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();
    let winner = false;
    let hit = false;

    function takeTurn(opponent, cordOne, cordTwo) {
        if (this.turn === false) {
            return false;
        }
        return opponent.game.recieveAttack(cordOne, cordTwo);
    }

    function switchTurn() {
        this.turn ? (this.turn = false) : (this.turn = true);
        return this.turn;
    }

    function randomNumber() {
        let num = Math.floor(Math.random() * 11);
        if (num === 0) {
            return randomNumber();
        }
        return num;
    }

    function availableMoves(opponent) {
        let cords = [randomNumber(), randomNumber()];
        let previousMoves = opponent.game.allCords;
        if (!previousMoves.length) {
            return cords;
        }

        for (let i = 0; i < previousMoves.length; i += 1) {
            if (
                cords[0] === previousMoves[i][0] &&
                cords[1] === previousMoves[i][1]
            ) {
                return availableMoves(opponent);
            }
        }
        return cords;
    }

    function smartMove(opponent, cords, counter = 0) {
        let options = [
            [cords[0] + 1, cords[1]], //  X
            [cords[0] - 1, cords[1]], // X
            [cords[0], cords[1] - 1], // Y
            [cords[0], cords[1] + 1], // Y
        ];

        options = options.filter(
            (option) =>
                option[0] >= 1 &&
                option[0] <= 10 &&
                option[1] >= 1 &&
                option[1] <= 10,
        );

        let choice = options[Math.floor(Math.random() * options.length)];
        for (let i = 0; i < opponent.game.allCords.length; i += 1) {
            if (
                opponent.game.allCords[i][0] === choice[0] &&
                opponent.game.allCords[i][1] === choice[1]
            ) {
                if (counter === 5) {
                    return availableMoves(opponent);
                }
                return smartMove(
                    opponent,
                    opponent.game.hitCords[opponent.game.hitCords.length - 1],
                    counter + 1,
                );
            }
        }
        return choice;
    }

    function attackSequence(opponent, cords, hitPass) {
        (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.updateShips)(opponent);
        (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.checkWinner)();
        setTimeout(() => {
            const cell = document.querySelector(
                `[data-cord-one="${cords[0]}"][data-cord-two="${cords[1]}"]`,
            );

            if (opponent.game.recieveAttack(cords[0], cords[1]) === true) {
                hit = true;
                cell.classList.add("hit-ship");
                cell.classList.remove("ship-placed-there");
                // eslint-disable-next-line no-use-before-define
                aiMoves(opponent, hitPass);
                return true;
            }

            if (
                opponent.game.lastShipHit !== null &&
                opponent.game.lastShipHit.isSunk()
            ) {
                hit = false;
            }

            opponent.switchTurn();
            cell.classList.add("miss");
            return false;
        }, 500);
    }

    function aiMoves(opponent) {
        if (hit === true) {
            let cords = smartMove(
                opponent,
                opponent.game.hitCords[opponent.game.hitCords.length - 1],
                0,
            );
            attackSequence(opponent, cords);
        } else {
            let cords = availableMoves(opponent);
            attackSequence(opponent, cords);
        }
    }

    return {
        playerName,
        game,
        turn,
        takeTurn,
        switchTurn,
        aiMoves,
        winner,
        hit,
    };
}


/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
/* eslint-disable prefer-const */
function Ship(length, name) {
    let hits = 0;
    let sunk = false;

    function hit() {
        this.hits += 1;
        return this.hits;
    }

    function getLength() {
        return this.length;
    }

    function getHits() {
        return this.hits;
    }

    function isSunk() {
        if (this.length === this.getHits()) {
            this.sunk = true;
            return true;
        }
        return false;
    }

    return {
        length,
        name,
        hits,
        sunk,
        hit,
        getHits,
        getLength,
        isSunk,
    };
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHVJQUF1STtBQUN2STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVks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Q0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxRQUFRLG9CQUFvQixxQkFBcUI7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxxQkFBcUIsb0JBQW9CLFFBQVE7QUFDcEY7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRStFOzs7Ozs7Ozs7Ozs7Ozs7O0FDelMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTBCOztBQUVYO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFJO0FBQ1osUUFBUSxpREFBSTtBQUNaLFFBQVEsaURBQUk7QUFDWixRQUFRLGlEQUFJO0FBQ1osUUFBUSxpREFBSTtBQUNaOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUztBQUNqQztBQUNBLDRCQUE0QixTQUFTO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIseUJBQXlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIseUJBQXlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDck9BO0FBQ0E7QUFDaUQ7QUFDYjs7QUFFcEM7QUFDZTtBQUNmO0FBQ0EsZUFBZSxzREFBUztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsbUNBQW1DO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxpREFBVztBQUNuQixRQUFRLGlEQUFXO0FBQ25CO0FBQ0E7QUFDQSxtQ0FBbUMsU0FBUyxvQkFBb0IsU0FBUztBQUN6RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzSUE7QUFDZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9ET00uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheTp3Z2h0QDUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG4gICAgLS1kYXJrOiAjMjIyMjNiO1xuICAgIC0tdWx0cmEtdmlvbGV0OiAjNGE0ZTY5O1xuICAgIC0tcm9zZTogIzlhOGM5ODtcbiAgICAtLXBhbGU6ICNjOWFkYTc7XG4gICAgLS1saWdodGVzdDogI2YyZTllNDtcbiAgICAtLXNpZGUtZm9udDogMC45cmVtO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlc3QpO1xufVxuXG4udGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDJyZW07XG59XG5cbi5ib2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG59XG5cbi5jb2x1bW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5yb3cge1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDogM3JlbTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmhpdC1zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQsIDIxOSwgMjUwKTtcbn1cblxuLndpbm5lci1kaXNwbGF5IHtcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiA0MHZ3O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlKTtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCB2YXIoLS1kYXJrKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaG92ZXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm9zZSk7XG59XG5cbi5zaGlwLXBsYWNlZC10aGVyZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XG59XG5cbi5zdW5rLXNoaXAtbmFtZSB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLnNlY3Rpb24taG9sZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wYWxlKTtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgY29sb3I6IHJlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGFuaW1hdGlvbjogYmxpbmtlciAzcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5zaGlwcy1kaXNwbGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11bHRyYS12aW9sZXQpO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgIGdhcDogMC40cmVtO1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHZhcigtLXJvc2UpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5zaGlwLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2lkZS1mb250KTtcbn1cbi5oaXRzIHtcbiAgICBmb250LXNpemU6IHZhcigtLXNpZGUtZm9udCk7XG59XG4uc3VuayB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zaWRlLWZvbnQpO1xufVxuLmxlbmd0aCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zaWRlLWZvbnQpO1xufVxuLnNoaXAtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVzdCk7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rZXIge1xuICAgIDUwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufVxuXG4uaW5zdHJ1Y3Rpb25zIHtcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiA0MHZ3O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlKTtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCB2YXIoLS1kYXJrKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxudWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDRweDtcbn1cblxubGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5wbGF5IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggdmFyKC0tZGFyayk7XG59XG5cbi5wbGF5OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXN0KTtcbn1cblxuLnJlc3RhcnQtZ2FtZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG4ucmVzdGFydC1nYW1lOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggdmFyKC0tZGFyayk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXN0KTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQzs7SUFFaEMsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixRQUFRO0lBQ1IsV0FBVztJQUNYLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5OndnaHRANTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXIgRGlzcGxheVxcXCIsIHNlcmlmO1xcbiAgICAtLWRhcms6ICMyMjIyM2I7XFxuICAgIC0tdWx0cmEtdmlvbGV0OiAjNGE0ZTY5O1xcbiAgICAtLXJvc2U6ICM5YThjOTg7XFxuICAgIC0tcGFsZTogI2M5YWRhNztcXG4gICAgLS1saWdodGVzdDogI2YyZTllNDtcXG4gICAgLS1zaWRlLWZvbnQ6IDAuOXJlbTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlc3QpO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxufVxcblxcbi5jb2x1bW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucm93IHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGl0LXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAyMTksIDI1MCk7XFxufVxcblxcbi53aW5uZXItZGlzcGxheSB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgdG9wOiA1MCU7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlKTtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggdmFyKC0tZGFyayk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaG92ZXJlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJvc2UpO1xcbn1cXG5cXG4uc2hpcC1wbGFjZWQtdGhlcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG59XFxuXFxuLnN1bmstc2hpcC1uYW1lIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnNlY3Rpb24taG9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubm90aWZpY2F0aW9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcGFsZSk7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGFuaW1hdGlvbjogYmxpbmtlciAzcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5zaGlwcy1kaXNwbGF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWx0cmEtdmlvbGV0KTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBnYXA6IDAuNHJlbTtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggdmFyKC0tcm9zZSk7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc2hpcC1uYW1lIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zaWRlLWZvbnQpO1xcbn1cXG4uaGl0cyB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2lkZS1mb250KTtcXG59XFxuLnN1bmsge1xcbiAgICBmb250LXNpemU6IHZhcigtLXNpZGUtZm9udCk7XFxufVxcbi5sZW5ndGgge1xcbiAgICBmb250LXNpemU6IHZhcigtLXNpZGUtZm9udCk7XFxufVxcbi5zaGlwLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmtlciB7XFxuICAgIDUwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxufVxcblxcbi5pbnN0cnVjdGlvbnMge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHRvcDogNTAlO1xcbiAgICB3aWR0aDogNDB2dztcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZSk7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHZhcigtLWRhcmspO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbnVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnBsYXkge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggdmFyKC0tZGFyayk7XFxufVxcblxcbi5wbGF5OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXN0KTtcXG59XFxuXFxuLnJlc3RhcnQtZ2FtZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLnJlc3RhcnQtZ2FtZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggdmFyKC0tZGFyayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlc3QpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2FtZUxvb3AsIGdlbmVyYXRlU3RhcnRlckhUTUwsIHBsYWNlU2hpcHMgfSBmcm9tIFwiLi9tb2R1bGVzL0RPTVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZ2VuZXJhdGVTdGFydGVySFRNTCgpO1xuXG5nYW1lTG9vcCgpO1xucGxhY2VTaGlwcygpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVN0YXJ0ZXJIVE1MKCkge1xuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYFxuICAgIDxoZWFkPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5CYXR0bGVTaGlwPC9kaXY+XG4gICAgPC9oZWFkPlxuICAgIDxib2R5PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5zdHJ1Y3Rpb25zXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJzZWNvbmQtdGl0bGVcIj5XZWxjb21lIHRvIEJhdHRsZXNoaXAhPC9oMj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImluc3RydWN0aW9ucy1oZWFkZXJcIj5JbnN0cnVjdGlvbnM6PC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+T2JqZWN0IG9mIHRoZSBHYW1lOiBCZSB0aGUgZmlyc3QgdG8gc2luayBhbGwgNSBvZiB5b3VyIG9wcG9uZW50J3Mgc2hpcHMgKHRoZSByb2JvdCk8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5QcmVwYXJlIGZvciBCYXR0bGU6IFlvdXIgYm9hcmQgaXMgb24gdGhlIGxlZnQgc2lkZSwgZmlyc3QgeW91IHdhbnQgdG8gcGxhY2UgYWxsIG9mIHlvdXIgc2hpcHMhPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+SWYgeW91IHdhbnQgdG8gdHVybiB0aGUgd2F5IHlvdXIgc2hpcCBnb2VzLCBqdXN0IHJpZ2h0IGNsaWNrITwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkFmdGVyIHlvdSBwbGFjZSBhbGwgNSBvZiB5b3VyIHNoaXBzLCBiYXR0bGUgaGFzIGJlZ3VuITwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPllvdXIgdHVybiBpcyBmaXJzdCwganVzdCBnbyBhaGVhZCBhbmQgY2xpY2sgdGhlIGJvYXJkIG9uIHRoZSByaWdodC4gQSBibHVlIHNxdWFyZSBtZWFucyB5b3UgbWlzc2VkLCByZWQgbWVhbnMgeW91IGhpdCB0aGUgcm9ib3QncyBzaGlwITwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwibm90ZXNcIj5Tb21lIE5vdGVzOjwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlRoZSByb2JvdCBpcyBiZXR0ZXIgaWYgeW91IHBsYWNlIHRoZSBzaGlwcyBub3QgdG91Y2hpbmchPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+SWYgeW91IGhpdCBhIHNoaXAsIHlvdSBnZXQgdG8gZ28gYWdhaW4hPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+U29tZXRpbWVzIHRoZSByb2JvdCBpcyBzbWFydCwgc29tZXRpbWVzIGl0IGlzbnQuLi48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwbGF5XCI+TGV0cyBwbGF5ITwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj4gXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllci1uYW1lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvYXJkXCIgaWQ9XCJ1c2VyLWJvYXJkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBzLWRpc3BsYXkgdXNlclwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1ob2xkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyLW5hbWVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9hcmRcIiBpZD1cImJvdC1ib2FyZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwcy1kaXNwbGF5IHJvYm90XCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9ib2R5PlxuICAgIGA7XG59XG5cbmNvbnN0IHVzZXIgPSBQbGF5ZXIoXCJ1c2VyXCIpO1xuY29uc3Qgcm9ib3QgPSBQbGF5ZXIoXCJyb2JvdFwiKTtcbmxldCBjdXJyZW50U2hpcCA9IHVzZXIuZ2FtZS5zaGlwc1swXTtcbmxldCBjdXJyZW50RGlyZWN0aW9uID0gXCJ2ZXJ0aWNhbFwiO1xubGV0IHBsYWNlZFNoaXBzID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGRpc3BsYXlHYW1lQm9hcmRzKGJvYXJkT2JqLCBib2FyZFNlbGVjdG9yLCBzZWNvbmRDbGFzcykge1xuICAgIGNvbnN0IGJvYXJkRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYm9hcmRTZWxlY3Rvcik7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBib2FyZE9iai5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBkaXZPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXZPbmUuY2xhc3NMaXN0LmFkZChcImNvbHVtblwiKTtcbiAgICAgICAgYm9hcmREaXNwbGF5LmFwcGVuZENoaWxkKGRpdk9uZSk7XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgYm9hcmRPYmpbaV0ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdlR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkaXZUd28uY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICAgICAgICAgIGRpdlR3by5jbGFzc0xpc3QuYWRkKHNlY29uZENsYXNzKTtcblxuICAgICAgICAgICAgZGl2T25lLmFwcGVuZENoaWxkKGRpdlR3byk7XG4gICAgICAgICAgICBkaXZUd28uZGF0YXNldC5jb3JkT25lID0gajtcbiAgICAgICAgICAgIGRpdlR3by5kYXRhc2V0LmNvcmRUd28gPSBpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZHJlbihyZW1vdmVGcm9tKSB7XG4gICAgd2hpbGUgKHJlbW92ZUZyb20uZmlyc3RDaGlsZCkge1xuICAgICAgICByZW1vdmVGcm9tLnJlbW92ZUNoaWxkKHJlbW92ZUZyb20uZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzdW5rU2hpcChwbGF5ZXIsIHNoaXApIHtcbiAgICBpZiAocGxheWVyLmdhbWUuc3Vua1NoaXBzQXJyYXkuaW5jbHVkZXMoc2hpcCkpIHJldHVybjtcbiAgICBwbGF5ZXIuZ2FtZS5zdW5rU2hpcHNBcnJheS5wdXNoKHNoaXApO1xuXG4gICAgY29uc3Qgbm90aWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5vdGlmLmNsYXNzTGlzdC5hZGQoXCJub3RpZmljYXRpb25cIik7XG5cbiAgICBub3RpZi50ZXh0Q29udGVudCA9IGAke3BsYXllci5wbGF5ZXJOYW1lXG4gICAgICAgIC5zbGljZSgwLCAxKVxuICAgICAgICAudG9VcHBlckNhc2UoKX0ke3BsYXllci5wbGF5ZXJOYW1lLnNsaWNlKDEpfSdzICR7XG4gICAgICAgIHNoaXAubmFtZVxuICAgIH0gaGFzIGJlZW4gc3VuayFgO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub3RpZik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobm90aWYpO1xuICAgIH0sIDMwMDApO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTaGlwcyhwbGF5ZXJPclVzZXIpIHtcbiAgICBjb25zdCBzaGlwcyA9IHBsYXllck9yVXNlci5nYW1lLnNoaXBzQXJyYXk7XG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuc2hpcHMtZGlzcGxheS4ke3BsYXllck9yVXNlci5wbGF5ZXJOYW1lfWAsXG4gICAgKTtcbiAgICByZW1vdmVDaGlsZHJlbihkaXNwbGF5KTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwic2hpcC1jb250YWluZXJcIik7XG4gICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJzaGlwLW5hbWVcIik7XG4gICAgICAgIGNvbnN0IGhpdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBoaXRzLmNsYXNzTGlzdC5hZGQoXCJoaXRzXCIpO1xuICAgICAgICBjb25zdCBzdW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3Vuay5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGVuZ3RoLmNsYXNzTGlzdC5hZGQoXCJsZW5ndGhcIik7XG5cbiAgICAgICAgZGl2LmFwcGVuZChuYW1lLCBoaXRzLCBzdW5rLCBsZW5ndGgpO1xuXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBzaGlwLm5hbWU7XG4gICAgICAgIGhpdHMudGV4dENvbnRlbnQgPSBgSGl0czogJHtzaGlwLmhpdHN9YDtcbiAgICAgICAgc3Vuay50ZXh0Q29udGVudCA9IGBTdW5rOiAke3NoaXAuaXNTdW5rKCl9YDtcbiAgICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIHN1bmtTaGlwKHBsYXllck9yVXNlciwgc2hpcCk7XG4gICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJzdW5rLXNoaXAtbmFtZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZW5ndGgudGV4dENvbnRlbnQgPSBgTGVuZ3RoOiAke3NoaXAuZ2V0TGVuZ3RoKCl9YDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVdpbm5lcih3aW5uZXIpIHtcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyLWRpc3BsYXlcIikpIHtcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpc3BsYXkuY2xhc3NMaXN0LmFkZChcIndpbm5lci1kaXNwbGF5XCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpc3BsYXkpO1xuICAgICAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gYCR7d2lubmVyLnBsYXllck5hbWVcbiAgICAgICAgICAgIC5zbGljZSgwLCAxKVxuICAgICAgICAgICAgLnRvVXBwZXJDYXNlKCl9JHt3aW5uZXIucGxheWVyTmFtZS5zbGljZSgxKX0gaGFzIHdvbiB0aGUgZ2FtZSFgO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmVzdGFydC1nYW1lXCIpO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJyZXN0YXJ0IGdhbWVcIjtcbiAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tXaW5uZXIoKSB7XG4gICAgaWYgKHJvYm90LmdhbWUuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgdXNlci53aW5uZXIgPSB0cnVlO1xuICAgICAgICBkaXNwbGF5V2lubmVyKHVzZXIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHVzZXIuZ2FtZS5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICByb2JvdC53aW5uZXIgPSB0cnVlO1xuICAgICAgICBkaXNwbGF5V2lubmVyKHJvYm90KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2FtZVNlcXVlbmNlKGNlbGwsIGdhbWVPdmVyKSB7XG4gICAgaWYgKFxuICAgICAgICBnYW1lT3ZlciB8fFxuICAgICAgICByb2JvdC5nYW1lLmNoZWNrSWZBbHJlYWR5Q2xpY2tlZChcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC5jb3JkT25lLFxuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmNvcmRUd28sXG4gICAgICAgIClcbiAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodXNlci50YWtlVHVybihyb2JvdCwgY2VsbC5kYXRhc2V0LmNvcmRPbmUsIGNlbGwuZGF0YXNldC5jb3JkVHdvKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXQtc2hpcFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB1c2VyLnN3aXRjaFR1cm4oKTtcbiAgICAgICAgcm9ib3QuYWlNb3Zlcyh1c2VyLCB1c2VyLmhpdCk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgfVxuXG4gICAgdXBkYXRlU2hpcHMocm9ib3QpO1xufVxuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgICBsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcblxuICAgIHVzZXIuc3dpdGNoVHVybigpO1xuICAgIHJvYm90LmdhbWUucGxhY2VSb2JvdFNoaXBzKCk7XG4gICAgZGlzcGxheUdhbWVCb2FyZHModXNlci5nYW1lLmJvYXJkLCBcIiN1c2VyLWJvYXJkXCIsIFwidXNlclwiKTtcbiAgICBkaXNwbGF5R2FtZUJvYXJkcyhyb2JvdC5nYW1lLmJvYXJkLCBcIiNib3QtYm9hcmRcIiwgXCJib3RcIik7XG5cbiAgICBjb25zdCBib3RCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm90XCIpO1xuICAgIGJvdEJvYXJkLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFwbGFjZWRTaGlwcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1c2VyLnR1cm4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2FtZVNlcXVlbmNlKGNlbGwsIGdhbWVPdmVyKTtcbiAgICAgICAgICAgIGlmIChjaGVja1dpbm5lcihyb2JvdCwgdXNlcikpIHtcbiAgICAgICAgICAgICAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZHZhbmNlU2hpcEFycmF5KCkge1xuICAgIGNvbnN0IGluZGV4ID0gdXNlci5nYW1lLnNoaXBzLmluZGV4T2YoY3VycmVudFNoaXApO1xuICAgIGN1cnJlbnRTaGlwID0gdXNlci5nYW1lLnNoaXBzW2luZGV4ICsgMV07XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzZXMoY2VsbCwgY2xhc3NUb0FkZCwgYWRkT3JSZW1vdmUpIHtcbiAgICBjb25zdCBjb3JkcyA9IHVzZXIuZ2FtZS5maW5kQ29yZHMoXG4gICAgICAgIGN1cnJlbnRTaGlwLFxuICAgICAgICBjZWxsLmRhdGFzZXQuY29yZE9uZSxcbiAgICAgICAgY2VsbC5kYXRhc2V0LmNvcmRUd28sXG4gICAgICAgIGN1cnJlbnREaXJlY3Rpb24sXG4gICAgKTtcbiAgICBjb3Jkcy5mb3JFYWNoKChhZGRDb3JkKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50RGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgY29uc3QgaGlnaHRsaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLWNvcmQtb25lPVwiJHthZGRDb3JkfVwiXVtkYXRhLWNvcmQtdHdvPVwiJHtjZWxsLmRhdGFzZXQuY29yZFR3b31cIl1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGhpZ2h0bGlnaHQuY2xhc3NMaXN0W2FkZE9yUmVtb3ZlXShjbGFzc1RvQWRkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudERpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICBjb25zdCBoaWdodGxpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtY29yZC1vbmU9XCIke2NlbGwuZGF0YXNldC5jb3JkT25lfVwiXVtkYXRhLWNvcmQtdHdvPVwiJHthZGRDb3JkfVwiXWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaGlnaHRsaWdodC5jbGFzc0xpc3RbYWRkT3JSZW1vdmVdKGNsYXNzVG9BZGQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNlbGxFdmVudExpc3RlcnMoY2VsbCkge1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgICBpZiAocGxhY2VkU2hpcHMpIHJldHVybjtcbiAgICAgICAgYWRkQ2xhc3NlcyhjZWxsLCBcImhvdmVyZWRcIiwgXCJhZGRcIik7XG4gICAgfSk7XG5cbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHBsYWNlZFNoaXBzKSByZXR1cm47XG4gICAgICAgIGFkZENsYXNzZXMoY2VsbCwgXCJob3ZlcmVkXCIsIFwicmVtb3ZlXCIpO1xuICAgIH0pO1xuXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBkZXNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucm93LnVzZXJcIik7XG4gICAgICAgIGRlc2VsZWN0LmZvckVhY2goKGRlc2VsZWN0VGhpcykgPT5cbiAgICAgICAgICAgIGRlc2VsZWN0VGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJlZFwiKSxcbiAgICAgICAgKTsgLy8gICByZW1vdmVzIGhvdmVyZWQgY2xhc3MgZnJvbSBsYXN0IHBsYWNlZCBzaGlwXG5cbiAgICAgICAgaWYgKHBsYWNlZFNoaXBzKSByZXR1cm47XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF1c2VyLmdhbWUucGxhY2VTaGlwKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwLFxuICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5jb3JkT25lLFxuICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5jb3JkVHdvLFxuICAgICAgICAgICAgICAgIGN1cnJlbnREaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgdXNlci5nYW1lLmJvYXJkLFxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChjdXJyZW50U2hpcCA9PT0gdXNlci5nYW1lLnNoaXBzWzRdKSB7XG4gICAgICAgICAgICBwbGFjZWRTaGlwcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYWRkQ2xhc3NlcyhjZWxsLCBcInNoaXAtcGxhY2VkLXRoZXJlXCIsIFwiYWRkXCIpO1xuICAgICAgICBhZHZhbmNlU2hpcEFycmF5KCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUluc3RydWN0aW9ucygpIHtcbiAgICBjb25zdCBpbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluc3RydWN0aW9uc1wiKTtcbiAgICBpbnN0cnVjdGlvbnMucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcHMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZGVzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJvdy51c2VyXCIpO1xuICAgICAgICBkZXNlbGVjdC5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlcmVkXCIpKTtcblxuICAgICAgICBjdXJyZW50RGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCJcbiAgICAgICAgICAgID8gKGN1cnJlbnREaXJlY3Rpb24gPSBcImhvcml6b250YWxcIilcbiAgICAgICAgICAgIDogKGN1cnJlbnREaXJlY3Rpb24gPSBcInZlcnRpY2FsXCIpO1xuICAgICAgICBhZGRDbGFzc2VzKGUudGFyZ2V0LCBcImhvdmVyZWRcIiwgXCJhZGRcIik7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuICAgICFyZW1vdmVCdXR0b25cbiAgICAgICAgPyBudWxsXG4gICAgICAgIDogcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVJbnN0cnVjdGlvbnMpO1xuXG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJvdy51c2VyXCIpO1xuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IGNlbGxFdmVudExpc3RlcnMoY2VsbCkpO1xufVxuXG5leHBvcnQgeyBnZW5lcmF0ZVN0YXJ0ZXJIVE1MLCBnYW1lTG9vcCwgcGxhY2VTaGlwcywgdXBkYXRlU2hpcHMsIGNoZWNrV2lubmVyIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1zaGFkb3cgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cblxuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmQgPSBpbmlhdGxpemVCb2FyZCgpO1xuICAgIGxldCBtaXNzZXMgPSAwO1xuICAgIGxldCBtaXNzZWRDb3JkcyA9IFtdO1xuICAgIGxldCBoaXRDb3JkcyA9IFtdO1xuICAgIGxldCBhbGxDb3JkcyA9IFtdO1xuICAgIGxldCBzaGlwc0FycmF5ID0gW107XG4gICAgbGV0IHN1bmtTaGlwc0FycmF5ID0gW107XG4gICAgbGV0IGxhc3RTaGlwSGl0ID0gbnVsbDtcbiAgICBsZXQgc3Vua1NoaXBzID0gMDtcbiAgICBjb25zdCBzaGlwcyA9IFtcbiAgICAgICAgU2hpcCgyLCBcIkRlc3Ryb3llclwiKSxcbiAgICAgICAgU2hpcCgzLCBcIlN1Ym1hcmluZVwiKSxcbiAgICAgICAgU2hpcCgzLCBcIkNydWlzZXJcIiksXG4gICAgICAgIFNoaXAoNCwgXCJCYXR0bGVzaGlwXCIpLFxuICAgICAgICBTaGlwKDUsIFwiQ2FycmllclwiKSxcbiAgICBdO1xuXG4gICAgZnVuY3Rpb24gaW5pYXRsaXplQm9hcmQoKSB7XG4gICAgICAgIGNvbnN0IGhvbGRlciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSArPSAxKSB7XG4gICAgICAgICAgICBob2xkZXJbaV0gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBob2xkZXJbaV1bal0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBob2xkZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TWlzc2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5taXNzZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U3Vua1NoaXBzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdW5rU2hpcHM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tJZlNoaXBJc091dE9mQm91bmRzKHNoaXBPYmosIGNvcmRPbmUsIGNvcmRUd28sIGRpcmVjdGlvbikge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiICYmXG4gICAgICAgICAgICBjb3JkT25lIC0gMSArIHNoaXBPYmouZ2V0TGVuZ3RoKCkgPiAxMFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiICYmXG4gICAgICAgICAgICBjb3JkVHdvIC0gMSArIHNoaXBPYmouZ2V0TGVuZ3RoKCkgPiAxMFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kQ29yZHMoc2hpcE9iaiwgY29yZE9uZSwgY29yZFR3bywgZGlyZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IG5ld0NvcmRzID0gW107XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICBuZXdDb3Jkcy5wdXNoKGNvcmRPbmUpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwT2JqLmdldExlbmd0aCgpOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBuZXdDb3Jkcy5wdXNoKE51bWJlcihjb3JkT25lKSArIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgbmV3Q29yZHMucHVzaChjb3JkVHdvKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcE9iai5nZXRMZW5ndGgoKTsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgbmV3Q29yZHMucHVzaChOdW1iZXIoY29yZFR3bykgKyBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3Q29yZHM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tJZkNvcmRzSGFzU2hpcChcbiAgICAgICAgY29yZE9uZSxcbiAgICAgICAgY29yZFR3byxcbiAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICBhZGRpdG9uYWxDb3JkcyxcbiAgICAgICAgYm9hcmRDb3B5LFxuICAgICkge1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjb3JkaW5hdGUgb2YgYWRkaXRvbmFsQ29yZHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRDb3B5W2NvcmRpbmF0ZV1bY29yZFR3b10gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvcmRpbmF0ZSBvZiBhZGRpdG9uYWxDb3Jkcykge1xuICAgICAgICAgICAgICAgIGlmIChib2FyZENvcHlbY29yZE9uZV1bY29yZGluYXRlXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXBPYmosIGNvcmRPbmUsIGNvcmRUd28sIGRpcmVjdGlvbiwgYm9hcmQpIHtcbiAgICAgICAgaWYgKGNoZWNrSWZTaGlwSXNPdXRPZkJvdW5kcyhzaGlwT2JqLCBjb3JkT25lLCBjb3JkVHdvLCBkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb3JkcyA9IGZpbmRDb3JkcyhzaGlwT2JqLCBjb3JkT25lLCBjb3JkVHdvLCBkaXJlY3Rpb24pO1xuXG4gICAgICAgIGlmIChjaGVja0lmQ29yZHNIYXNTaGlwKGNvcmRPbmUsIGNvcmRUd28sIGRpcmVjdGlvbiwgY29yZHMsIGJvYXJkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29yZHMuZm9yRWFjaCgoY29yZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgICAgICBib2FyZFtjb3JkXVtjb3JkVHdvXSA9IHNoaXBPYmo7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgICAgICBib2FyZFtjb3JkT25lXVtjb3JkXSA9IHNoaXBPYmo7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzaGlwc0FycmF5LnB1c2goc2hpcE9iaik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrQ29yZEZvckF0dGFjayhjb3JkT25lLCBjb3JkVHdvLCBib2FyZENvcHkpIHtcbiAgICAgICAgY29uc3QgY29yZGluYXRlID0gYm9hcmRDb3B5W2NvcmRPbmVdW2NvcmRUd29dO1xuICAgICAgICBpZiAoY29yZGluYXRlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBib2FyZENvcHlbY29yZE9uZV1bY29yZFR3b107IC8vIHJldHVybnMgc2hpcCBpZiB0aGVyZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUhpdHMoc2hpcCwgYm9hcmRDb3B5KSB7XG4gICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICBib2FyZENvcHkuc3Vua1NoaXBzICs9IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWNpZXZlQXR0YWNrKGNvcmRPbmUsIGNvcmRUd28pIHtcbiAgICAgICAgdGhpcy5hbGxDb3Jkcy5wdXNoKFtjb3JkT25lLCBjb3JkVHdvXSk7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBjaGVja0NvcmRGb3JBdHRhY2soY29yZE9uZSwgY29yZFR3bywgdGhpcy5ib2FyZCk7XG4gICAgICAgIGlmIChzaGlwID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm1pc3NlcyArPSAxO1xuICAgICAgICAgICAgdGhpcy5taXNzZWRDb3Jkcy5wdXNoKFtjb3JkT25lLCBjb3JkVHdvXSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2NvcmRPbmVdW2NvcmRUd29dID0gXCJtaXNzXCI7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXN0U2hpcEhpdCA9IHRoaXMuYm9hcmRbY29yZE9uZV1bY29yZFR3b107XG4gICAgICAgIHRoaXMuaGl0Q29yZHMucHVzaChbY29yZE9uZSwgY29yZFR3b10pO1xuICAgICAgICB1cGRhdGVIaXRzKHNoaXAsIHRoaXMuYm9hcmQpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBpc1N1bmtTaGlwID0gKHNoaXApID0+IHNoaXAuc3VuaztcblxuICAgIGZ1bmN0aW9uIGFsbFNoaXBzU3VuaygpIHtcbiAgICAgICAgaWYgKHNoaXBzQXJyYXkuZXZlcnkoaXNTdW5rU2hpcCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByYW5kb21OdW1iZXIoKSB7XG4gICAgICAgIGxldCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGlmIChudW0gPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiByYW5kb21OdW1iZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVtO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJhbmRvbURpcmVjdGlvbigpIHtcbiAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSBbXCJ2ZXJ0aWNhbFwiLCBcImhvcml6b250YWxcIl07XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRpcmVjdGlvbnMubGVuZ3RoKV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxhY2VSb2JvdFNoaXBzKCkge1xuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBwbGFjZVNoaXBzUm9ib3RSZWMoc2hpcCwgdGhpcy5ib2FyZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcHNSb2JvdFJlYyhzaGlwLCBib2FyZCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBwbGFjZVNoaXAoXG4gICAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICAgICByYW5kb21OdW1iZXIoKSxcbiAgICAgICAgICAgICAgICByYW5kb21OdW1iZXIoKSxcbiAgICAgICAgICAgICAgICByYW5kb21EaXJlY3Rpb24oKSxcbiAgICAgICAgICAgICAgICBib2FyZCxcbiAgICAgICAgICAgICkgPT09IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgICAgcGxhY2VTaGlwc1JvYm90UmVjKHNoaXAsIGJvYXJkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrSWZBbHJlYWR5Q2xpY2tlZChjb3JkT25lLCBjb3JkVHdvKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsQ29yZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChjb3JkT25lID09PSBhbGxDb3Jkc1tpXVswXSAmJiBjb3JkVHdvID09PSBhbGxDb3Jkc1tpXVsxXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBib2FyZCxcbiAgICAgICAgbWlzc2VzLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2lldmVBdHRhY2ssXG4gICAgICAgIGdldE1pc3NlcyxcbiAgICAgICAgbWlzc2VkQ29yZHMsXG4gICAgICAgIHNoaXBzQXJyYXksXG4gICAgICAgIHN1bmtTaGlwcyxcbiAgICAgICAgYWxsU2hpcHNTdW5rLFxuICAgICAgICBnZXRTdW5rU2hpcHMsXG4gICAgICAgIHBsYWNlUm9ib3RTaGlwcyxcbiAgICAgICAgYWxsQ29yZHMsXG4gICAgICAgIHJhbmRvbURpcmVjdGlvbixcbiAgICAgICAgcmFuZG9tTnVtYmVyLFxuICAgICAgICBmaW5kQ29yZHMsXG4gICAgICAgIGNoZWNrSWZBbHJlYWR5Q2xpY2tlZCxcbiAgICAgICAgc3Vua1NoaXBzQXJyYXksXG4gICAgICAgIGhpdENvcmRzLFxuICAgICAgICBsYXN0U2hpcEhpdCxcbiAgICAgICAgc2hpcHMsXG4gICAgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IHsgY2hlY2tXaW5uZXIsIHVwZGF0ZVNoaXBzIH0gZnJvbSBcIi4vRE9NXCI7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItY29uc3QgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcihwbGF5ZXJOYW1lKSB7XG4gICAgbGV0IHR1cm4gPSBmYWxzZTtcbiAgICBsZXQgZ2FtZSA9IEdhbWVib2FyZCgpO1xuICAgIGxldCB3aW5uZXIgPSBmYWxzZTtcbiAgICBsZXQgaGl0ID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiB0YWtlVHVybihvcHBvbmVudCwgY29yZE9uZSwgY29yZFR3bykge1xuICAgICAgICBpZiAodGhpcy50dXJuID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHBvbmVudC5nYW1lLnJlY2lldmVBdHRhY2soY29yZE9uZSwgY29yZFR3byk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoVHVybigpIHtcbiAgICAgICAgdGhpcy50dXJuID8gKHRoaXMudHVybiA9IGZhbHNlKSA6ICh0aGlzLnR1cm4gPSB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByYW5kb21OdW1iZXIoKSB7XG4gICAgICAgIGxldCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSk7XG4gICAgICAgIGlmIChudW0gPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiByYW5kb21OdW1iZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVtO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGF2YWlsYWJsZU1vdmVzKG9wcG9uZW50KSB7XG4gICAgICAgIGxldCBjb3JkcyA9IFtyYW5kb21OdW1iZXIoKSwgcmFuZG9tTnVtYmVyKCldO1xuICAgICAgICBsZXQgcHJldmlvdXNNb3ZlcyA9IG9wcG9uZW50LmdhbWUuYWxsQ29yZHM7XG4gICAgICAgIGlmICghcHJldmlvdXNNb3Zlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBjb3JkcztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJldmlvdXNNb3Zlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGNvcmRzWzBdID09PSBwcmV2aW91c01vdmVzW2ldWzBdICYmXG4gICAgICAgICAgICAgICAgY29yZHNbMV0gPT09IHByZXZpb3VzTW92ZXNbaV1bMV1cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhdmFpbGFibGVNb3ZlcyhvcHBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvcmRzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNtYXJ0TW92ZShvcHBvbmVudCwgY29yZHMsIGNvdW50ZXIgPSAwKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0gW1xuICAgICAgICAgICAgW2NvcmRzWzBdICsgMSwgY29yZHNbMV1dLCAvLyAgWFxuICAgICAgICAgICAgW2NvcmRzWzBdIC0gMSwgY29yZHNbMV1dLCAvLyBYXG4gICAgICAgICAgICBbY29yZHNbMF0sIGNvcmRzWzFdIC0gMV0sIC8vIFlcbiAgICAgICAgICAgIFtjb3Jkc1swXSwgY29yZHNbMV0gKyAxXSwgLy8gWVxuICAgICAgICBdO1xuXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zLmZpbHRlcihcbiAgICAgICAgICAgIChvcHRpb24pID0+XG4gICAgICAgICAgICAgICAgb3B0aW9uWzBdID49IDEgJiZcbiAgICAgICAgICAgICAgICBvcHRpb25bMF0gPD0gMTAgJiZcbiAgICAgICAgICAgICAgICBvcHRpb25bMV0gPj0gMSAmJlxuICAgICAgICAgICAgICAgIG9wdGlvblsxXSA8PSAxMCxcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgY2hvaWNlID0gb3B0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcHRpb25zLmxlbmd0aCldO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wcG9uZW50LmdhbWUuYWxsQ29yZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBvcHBvbmVudC5nYW1lLmFsbENvcmRzW2ldWzBdID09PSBjaG9pY2VbMF0gJiZcbiAgICAgICAgICAgICAgICBvcHBvbmVudC5nYW1lLmFsbENvcmRzW2ldWzFdID09PSBjaG9pY2VbMV1cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyID09PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhdmFpbGFibGVNb3ZlcyhvcHBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzbWFydE1vdmUoXG4gICAgICAgICAgICAgICAgICAgIG9wcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICBvcHBvbmVudC5nYW1lLmhpdENvcmRzW29wcG9uZW50LmdhbWUuaGl0Q29yZHMubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgKyAxLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNob2ljZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhdHRhY2tTZXF1ZW5jZShvcHBvbmVudCwgY29yZHMsIGhpdFBhc3MpIHtcbiAgICAgICAgdXBkYXRlU2hpcHMob3Bwb25lbnQpO1xuICAgICAgICBjaGVja1dpbm5lcigpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1jb3JkLW9uZT1cIiR7Y29yZHNbMF19XCJdW2RhdGEtY29yZC10d289XCIke2NvcmRzWzFdfVwiXWAsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAob3Bwb25lbnQuZ2FtZS5yZWNpZXZlQXR0YWNrKGNvcmRzWzBdLCBjb3Jkc1sxXSkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBoaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdC1zaGlwXCIpO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcInNoaXAtcGxhY2VkLXRoZXJlXCIpO1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgICAgICAgICAgICAgIGFpTW92ZXMob3Bwb25lbnQsIGhpdFBhc3MpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgb3Bwb25lbnQuZ2FtZS5sYXN0U2hpcEhpdCAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgIG9wcG9uZW50LmdhbWUubGFzdFNoaXBIaXQuaXNTdW5rKClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGhpdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvcHBvbmVudC5zd2l0Y2hUdXJuKCk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LCA1MDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFpTW92ZXMob3Bwb25lbnQpIHtcbiAgICAgICAgaWYgKGhpdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbGV0IGNvcmRzID0gc21hcnRNb3ZlKFxuICAgICAgICAgICAgICAgIG9wcG9uZW50LFxuICAgICAgICAgICAgICAgIG9wcG9uZW50LmdhbWUuaGl0Q29yZHNbb3Bwb25lbnQuZ2FtZS5oaXRDb3Jkcy5sZW5ndGggLSAxXSxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGF0dGFja1NlcXVlbmNlKG9wcG9uZW50LCBjb3Jkcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY29yZHMgPSBhdmFpbGFibGVNb3ZlcyhvcHBvbmVudCk7XG4gICAgICAgICAgICBhdHRhY2tTZXF1ZW5jZShvcHBvbmVudCwgY29yZHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxheWVyTmFtZSxcbiAgICAgICAgZ2FtZSxcbiAgICAgICAgdHVybixcbiAgICAgICAgdGFrZVR1cm4sXG4gICAgICAgIHN3aXRjaFR1cm4sXG4gICAgICAgIGFpTW92ZXMsXG4gICAgICAgIHdpbm5lcixcbiAgICAgICAgaGl0LFxuICAgIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItY29uc3QgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAobGVuZ3RoLCBuYW1lKSB7XG4gICAgbGV0IGhpdHMgPSAwO1xuICAgIGxldCBzdW5rID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cyArPSAxO1xuICAgICAgICByZXR1cm4gdGhpcy5oaXRzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldExlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhpdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpdHM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IHRoaXMuZ2V0SGl0cygpKSB7XG4gICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgaGl0cyxcbiAgICAgICAgc3VuayxcbiAgICAgICAgaGl0LFxuICAgICAgICBnZXRIaXRzLFxuICAgICAgICBnZXRMZW5ndGgsXG4gICAgICAgIGlzU3VuayxcbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9