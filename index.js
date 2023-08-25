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
    color: black;
    width: 70%;
    border-radius: 1rem;
}

.restart-game:hover {
    cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;IACV,sCAAsC;IACtC,eAAe;IACf,uBAAuB;IACvB,eAAe;IACf,eAAe;IACf,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,WAAW;IACX,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,uBAAuB;IACvB,QAAQ;IACR,WAAW;IACX,SAAS;IACT,gCAAgC;IAChC,6BAA6B;IAC7B,mCAAmC;IACnC,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,6BAA6B;IAC7B,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;;IAEhC,UAAU;IACV,6BAA6B;IAC7B,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,qCAAqC;AACzC;;AAEA;IACI,qCAAqC;IACrC,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,kCAAkC;IAClC,2BAA2B;IAC3B,WAAW;IACX,mCAAmC;IACnC,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,2BAA2B;AAC/B;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,iCAAiC;IACjC,mBAAmB;IACnB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI;QACI,UAAU;IACd;AACJ;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,uBAAuB;IACvB,QAAQ;IACR,WAAW;IACX,SAAS;IACT,gCAAgC;IAChC,6BAA6B;IAC7B,mCAAmC;IACnC,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,eAAe;IACf,6BAA6B;IAC7B,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,YAAY;IACZ,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap\");\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: \"Playfair Display\", serif;\n    --dark: #22223b;\n    --ultra-violet: #4a4e69;\n    --rose: #9a8c98;\n    --pale: #c9ada7;\n    --lightest: #f2e9e4;\n    --side-font: 0.9rem;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    background-color: var(--lightest);\n}\n\n.title {\n    display: flex;\n    font-size: 3rem;\n    align-self: center;\n    justify-self: center;\n    color: var(--dark);\n}\n\n.main-container {\n    display: flex;\n    gap: 2rem;\n}\n\n.board {\n    display: flex;\n    flex-direction: column-reverse;\n}\n\n.column {\n    display: flex;\n}\n\n.row {\n    outline: 1px solid black;\n    width: 3rem;\n    height: 3rem;\n    display: flex;\n}\n\n.hit-ship {\n    background-color: red;\n}\n\n.miss {\n    background-color: rgb(14, 219, 250);\n}\n\n.winner-display {\n    color: var(--dark);\n    position: absolute;\n    border: 2px solid black;\n    top: 50%;\n    width: 40vw;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: var(--pale);\n    box-shadow: 5px 5px 5px var(--dark);\n    padding: 1rem;\n    border-radius: 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.hovered {\n    background-color: var(--rose);\n}\n\n.ship-placed-there {\n    background-color: var(--dark);\n}\n\n.sunk-ship-name {\n    color: red;\n}\n\n.section-holder {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.notification {\n    border: 1px solid var(--pale);\n    font-size: 4rem;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    color: red;\n    background-color: var(--dark);\n    padding: 1rem;\n    border-radius: 1rem;\n    position: absolute;\n    animation: blinker 3s linear infinite;\n}\n\n.ships-display {\n    background-color: var(--ultra-violet);\n    padding: 1rem;\n    border-radius: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 0.4rem;\n    box-shadow: 5px 5px 5px var(--rose);\n    margin-bottom: 10px;\n    border: 1px solid black;\n}\n\n.ship-name {\n    font-size: var(--side-font);\n}\n.hits {\n    font-size: var(--side-font);\n}\n.sunk {\n    font-size: var(--side-font);\n}\n.length {\n    font-size: var(--side-font);\n}\n.ship-container {\n    background-color: var(--lightest);\n    border-radius: 1rem;\n    padding: 1rem;\n    border: 2px solid black;\n}\n\n@keyframes blinker {\n    50% {\n        opacity: 0;\n    }\n}\n\n.instructions {\n    color: var(--dark);\n    position: absolute;\n    border: 2px solid black;\n    top: 50%;\n    width: 40vw;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: var(--pale);\n    box-shadow: 5px 5px 5px var(--dark);\n    padding: 1rem;\n    border-radius: 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\nul {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\nli {\n    list-style: none;\n}\n\n.play {\n    font-size: 1rem;\n    border-radius: 1rem;\n    padding: 4px;\n    box-shadow: 4px 4px 4px var(--dark);\n}\n\n.play:hover {\n    cursor: pointer;\n    background-color: var(--dark);\n    color: var(--lightest);\n}\n\n.restart-game {\n    background-color: white;\n    border: 1px solid black;\n    color: black;\n    width: 70%;\n    border-radius: 1rem;\n}\n\n.restart-game:hover {\n    cursor: pointer;\n}\n"],"sourceRoot":""}]);
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

(0,_modules_DOM__WEBPACK_IMPORTED_MODULE_0__.placeShips)()

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
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");
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

const playerShips = [
    (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2, "Destroyer"),
    (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3, "Submarine"),
    (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3, "Cruiser"),
    (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(4, "Battleship"),
    (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(5, "Carrier"),
];

const user = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])("user");
const robot = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])("robot");
let currentShip = playerShips[0];
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
        button.textContent =
            "restart game (this just refreshes was too lazy for this sorry)";
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
        robot.aiMoves(user);
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
    const index = playerShips.indexOf(currentShip);
    currentShip = playerShips[index + 1];
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
        if (currentShip === playerShips[4]) {
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
    removeButton.addEventListener("click", removeInstructions);
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
        const ships = [
            (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2, "Destroyer"),
            (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, "Submarine"),
            (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, "Cruiser"),
            (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(4, "Battleship"),
            (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(5, "Carrier"),
        ];

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

    function attackSequence(opponent, cords) {
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
                aiMoves(opponent);
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

    return { length, name, hits, sunk, hit, getHits, getLength, isSunk };
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHVJQUF1STtBQUN2STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8s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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxSUE7QUFDZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL0RPTS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5OndnaHRANTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbiAgICAtLWRhcms6ICMyMjIyM2I7XG4gICAgLS11bHRyYS12aW9sZXQ6ICM0YTRlNjk7XG4gICAgLS1yb3NlOiAjOWE4Yzk4O1xuICAgIC0tcGFsZTogI2M5YWRhNztcbiAgICAtLWxpZ2h0ZXN0OiAjZjJlOWU0O1xuICAgIC0tc2lkZS1mb250OiAwLjlyZW07XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVzdCk7XG59XG5cbi50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMnJlbTtcbn1cblxuLmJvYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbn1cblxuLmNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnJvdyB7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaGl0LXNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLm1pc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCwgMjE5LCAyNTApO1xufVxuXG4ud2lubmVyLWRpc3BsYXkge1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDQwdnc7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbGUpO1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHZhcigtLWRhcmspO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uaG92ZXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm9zZSk7XG59XG5cbi5zaGlwLXBsYWNlZC10aGVyZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XG59XG5cbi5zdW5rLXNoaXAtbmFtZSB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLnNlY3Rpb24taG9sZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wYWxlKTtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgY29sb3I6IHJlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGFuaW1hdGlvbjogYmxpbmtlciAzcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5zaGlwcy1kaXNwbGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11bHRyYS12aW9sZXQpO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgIGdhcDogMC40cmVtO1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHZhcigtLXJvc2UpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5zaGlwLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2lkZS1mb250KTtcbn1cbi5oaXRzIHtcbiAgICBmb250LXNpemU6IHZhcigtLXNpZGUtZm9udCk7XG59XG4uc3VuayB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zaWRlLWZvbnQpO1xufVxuLmxlbmd0aCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zaWRlLWZvbnQpO1xufVxuLnNoaXAtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVzdCk7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rZXIge1xuICAgIDUwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufVxuXG4uaW5zdHJ1Y3Rpb25zIHtcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiA0MHZ3O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlKTtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCB2YXIoLS1kYXJrKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxudWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDRweDtcbn1cblxubGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5wbGF5IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggdmFyKC0tZGFyayk7XG59XG5cbi5wbGF5OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXN0KTtcbn1cblxuLnJlc3RhcnQtZ2FtZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLnJlc3RhcnQtZ2FtZTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQ0FBc0M7SUFDdEMsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixRQUFRO0lBQ1IsV0FBVztJQUNYLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDOztJQUVoQyxVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixXQUFXO0lBQ1gsU0FBUztJQUNULGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheTp3Z2h0QDUwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIlBsYXlmYWlyIERpc3BsYXlcXFwiLCBzZXJpZjtcXG4gICAgLS1kYXJrOiAjMjIyMjNiO1xcbiAgICAtLXVsdHJhLXZpb2xldDogIzRhNGU2OTtcXG4gICAgLS1yb3NlOiAjOWE4Yzk4O1xcbiAgICAtLXBhbGU6ICNjOWFkYTc7XFxuICAgIC0tbGlnaHRlc3Q6ICNmMmU5ZTQ7XFxuICAgIC0tc2lkZS1mb250OiAwLjlyZW07XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0KTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG5cXG4uY29sdW1uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnJvdyB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhpdC1zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCwgMjE5LCAyNTApO1xcbn1cXG5cXG4ud2lubmVyLWRpc3BsYXkge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHRvcDogNTAlO1xcbiAgICB3aWR0aDogNDB2dztcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZSk7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHZhcigtLWRhcmspO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5ob3ZlcmVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm9zZSk7XFxufVxcblxcbi5zaGlwLXBsYWNlZC10aGVyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbn1cXG5cXG4uc3Vuay1zaGlwLW5hbWUge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uc2VjdGlvbi1ob2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5ub3RpZmljYXRpb24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wYWxlKTtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYW5pbWF0aW9uOiBibGlua2VyIDNzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLnNoaXBzLWRpc3BsYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11bHRyYS12aW9sZXQpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdhcDogMC40cmVtO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCB2YXIoLS1yb3NlKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zaGlwLW5hbWUge1xcbiAgICBmb250LXNpemU6IHZhcigtLXNpZGUtZm9udCk7XFxufVxcbi5oaXRzIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zaWRlLWZvbnQpO1xcbn1cXG4uc3VuayB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2lkZS1mb250KTtcXG59XFxuLmxlbmd0aCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2lkZS1mb250KTtcXG59XFxuLnNoaXAtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlc3QpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuQGtleWZyYW1lcyBibGlua2VyIHtcXG4gICAgNTAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XFxuXFxuLmluc3RydWN0aW9ucyB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgdG9wOiA1MCU7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlKTtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggdmFyKC0tZGFyayk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxudWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ucGxheSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCB2YXIoLS1kYXJrKTtcXG59XFxuXFxuLnBsYXk6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlc3QpO1xcbn1cXG5cXG4ucmVzdGFydC1nYW1lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5yZXN0YXJ0LWdhbWU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnYW1lTG9vcCwgZ2VuZXJhdGVTdGFydGVySFRNTCwgcGxhY2VTaGlwcyB9IGZyb20gXCIuL21vZHVsZXMvRE9NXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5nZW5lcmF0ZVN0YXJ0ZXJIVE1MKCk7XG5cbmdhbWVMb29wKCk7XG5cbnBsYWNlU2hpcHMoKSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuZnVuY3Rpb24gZ2VuZXJhdGVTdGFydGVySFRNTCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGBcbiAgICA8aGVhZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+QmF0dGxlU2hpcDwvZGl2PlxuICAgIDwvaGVhZD5cbiAgICA8Ym9keT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluc3RydWN0aW9uc1wiPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwic2Vjb25kLXRpdGxlXCI+V2VsY29tZSB0byBCYXR0bGVzaGlwITwvaDI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJpbnN0cnVjdGlvbnMtaGVhZGVyXCI+SW5zdHJ1Y3Rpb25zOjwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPk9iamVjdCBvZiB0aGUgR2FtZTogQmUgdGhlIGZpcnN0IHRvIHNpbmsgYWxsIDUgb2YgeW91ciBvcHBvbmVudCdzIHNoaXBzICh0aGUgcm9ib3QpPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+UHJlcGFyZSBmb3IgQmF0dGxlOiBZb3VyIGJvYXJkIGlzIG9uIHRoZSBsZWZ0IHNpZGUsIGZpcnN0IHlvdSB3YW50IHRvIHBsYWNlIGFsbCBvZiB5b3VyIHNoaXBzITwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPklmIHlvdSB3YW50IHRvIHR1cm4gdGhlIHdheSB5b3VyIHNoaXAgZ29lcywganVzdCByaWdodCBjbGljayE8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5BZnRlciB5b3UgcGxhY2UgYWxsIDUgb2YgeW91ciBzaGlwcywgYmF0dGxlIGhhcyBiZWd1biE8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5Zb3VyIHR1cm4gaXMgZmlyc3QsIGp1c3QgZ28gYWhlYWQgYW5kIGNsaWNrIHRoZSBib2FyZCBvbiB0aGUgcmlnaHQuIEEgYmx1ZSBzcXVhcmUgbWVhbnMgeW91IG1pc3NlZCwgcmVkIG1lYW5zIHlvdSBoaXQgdGhlIHJvYm90J3Mgc2hpcCE8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cIm5vdGVzXCI+U29tZSBOb3Rlczo8L2gzPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5UaGUgcm9ib3QgaXMgYmV0dGVyIGlmIHlvdSBwbGFjZSB0aGUgc2hpcHMgbm90IHRvdWNoaW5nITwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPklmIHlvdSBoaXQgYSBzaGlwLCB5b3UgZ2V0IHRvIGdvIGFnYWluITwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlNvbWV0aW1lcyB0aGUgcm9ib3QgaXMgc21hcnQsIHNvbWV0aW1lcyBpdCBpc250Li4uPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicGxheVwiPkxldHMgcGxheSE8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+IFxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhvbGRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXItbmFtZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2FyZFwiIGlkPVwidXNlci1ib2FyZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwcy1kaXNwbGF5IHVzZXJcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllci1uYW1lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvYXJkXCIgaWQ9XCJib3QtYm9hcmRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcHMtZGlzcGxheSByb2JvdFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvYm9keT5cbiAgICBgO1xufVxuXG5jb25zdCBwbGF5ZXJTaGlwcyA9IFtcbiAgICBTaGlwKDIsIFwiRGVzdHJveWVyXCIpLFxuICAgIFNoaXAoMywgXCJTdWJtYXJpbmVcIiksXG4gICAgU2hpcCgzLCBcIkNydWlzZXJcIiksXG4gICAgU2hpcCg0LCBcIkJhdHRsZXNoaXBcIiksXG4gICAgU2hpcCg1LCBcIkNhcnJpZXJcIiksXG5dO1xuXG5jb25zdCB1c2VyID0gUGxheWVyKFwidXNlclwiKTtcbmNvbnN0IHJvYm90ID0gUGxheWVyKFwicm9ib3RcIik7XG5sZXQgY3VycmVudFNoaXAgPSBwbGF5ZXJTaGlwc1swXTtcbmxldCBjdXJyZW50RGlyZWN0aW9uID0gXCJ2ZXJ0aWNhbFwiO1xubGV0IHBsYWNlZFNoaXBzID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGRpc3BsYXlHYW1lQm9hcmRzKGJvYXJkT2JqLCBib2FyZFNlbGVjdG9yLCBzZWNvbmRDbGFzcykge1xuICAgIGNvbnN0IGJvYXJkRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYm9hcmRTZWxlY3Rvcik7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBib2FyZE9iai5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBkaXZPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXZPbmUuY2xhc3NMaXN0LmFkZChcImNvbHVtblwiKTtcbiAgICAgICAgYm9hcmREaXNwbGF5LmFwcGVuZENoaWxkKGRpdk9uZSk7XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgYm9hcmRPYmpbaV0ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdlR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkaXZUd28uY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICAgICAgICAgIGRpdlR3by5jbGFzc0xpc3QuYWRkKHNlY29uZENsYXNzKTtcblxuICAgICAgICAgICAgZGl2T25lLmFwcGVuZENoaWxkKGRpdlR3byk7XG4gICAgICAgICAgICBkaXZUd28uZGF0YXNldC5jb3JkT25lID0gajtcbiAgICAgICAgICAgIGRpdlR3by5kYXRhc2V0LmNvcmRUd28gPSBpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZHJlbihyZW1vdmVGcm9tKSB7XG4gICAgd2hpbGUgKHJlbW92ZUZyb20uZmlyc3RDaGlsZCkge1xuICAgICAgICByZW1vdmVGcm9tLnJlbW92ZUNoaWxkKHJlbW92ZUZyb20uZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzdW5rU2hpcChwbGF5ZXIsIHNoaXApIHtcbiAgICBpZiAocGxheWVyLmdhbWUuc3Vua1NoaXBzQXJyYXkuaW5jbHVkZXMoc2hpcCkpIHJldHVybjtcbiAgICBwbGF5ZXIuZ2FtZS5zdW5rU2hpcHNBcnJheS5wdXNoKHNoaXApO1xuXG4gICAgY29uc3Qgbm90aWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5vdGlmLmNsYXNzTGlzdC5hZGQoXCJub3RpZmljYXRpb25cIik7XG5cbiAgICBub3RpZi50ZXh0Q29udGVudCA9IGAke3BsYXllci5wbGF5ZXJOYW1lXG4gICAgICAgIC5zbGljZSgwLCAxKVxuICAgICAgICAudG9VcHBlckNhc2UoKX0ke3BsYXllci5wbGF5ZXJOYW1lLnNsaWNlKDEpfSdzICR7XG4gICAgICAgIHNoaXAubmFtZVxuICAgIH0gaGFzIGJlZW4gc3VuayFgO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub3RpZik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobm90aWYpO1xuICAgIH0sIDMwMDApO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTaGlwcyhwbGF5ZXJPclVzZXIpIHtcbiAgICBjb25zdCBzaGlwcyA9IHBsYXllck9yVXNlci5nYW1lLnNoaXBzQXJyYXk7XG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuc2hpcHMtZGlzcGxheS4ke3BsYXllck9yVXNlci5wbGF5ZXJOYW1lfWAsXG4gICAgKTtcbiAgICByZW1vdmVDaGlsZHJlbihkaXNwbGF5KTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwic2hpcC1jb250YWluZXJcIik7XG4gICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJzaGlwLW5hbWVcIik7XG4gICAgICAgIGNvbnN0IGhpdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBoaXRzLmNsYXNzTGlzdC5hZGQoXCJoaXRzXCIpO1xuICAgICAgICBjb25zdCBzdW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3Vuay5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGVuZ3RoLmNsYXNzTGlzdC5hZGQoXCJsZW5ndGhcIik7XG5cbiAgICAgICAgZGl2LmFwcGVuZChuYW1lLCBoaXRzLCBzdW5rLCBsZW5ndGgpO1xuXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBzaGlwLm5hbWU7XG4gICAgICAgIGhpdHMudGV4dENvbnRlbnQgPSBgSGl0czogJHtzaGlwLmhpdHN9YDtcbiAgICAgICAgc3Vuay50ZXh0Q29udGVudCA9IGBTdW5rOiAke3NoaXAuaXNTdW5rKCl9YDtcbiAgICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIHN1bmtTaGlwKHBsYXllck9yVXNlciwgc2hpcCk7XG4gICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJzdW5rLXNoaXAtbmFtZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZW5ndGgudGV4dENvbnRlbnQgPSBgTGVuZ3RoOiAke3NoaXAuZ2V0TGVuZ3RoKCl9YDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVdpbm5lcih3aW5uZXIpIHtcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyLWRpc3BsYXlcIikpIHtcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpc3BsYXkuY2xhc3NMaXN0LmFkZChcIndpbm5lci1kaXNwbGF5XCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpc3BsYXkpO1xuICAgICAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gYCR7d2lubmVyLnBsYXllck5hbWVcbiAgICAgICAgICAgIC5zbGljZSgwLCAxKVxuICAgICAgICAgICAgLnRvVXBwZXJDYXNlKCl9JHt3aW5uZXIucGxheWVyTmFtZS5zbGljZSgxKX0gaGFzIHdvbiB0aGUgZ2FtZSFgO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmVzdGFydC1nYW1lXCIpO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIFwicmVzdGFydCBnYW1lICh0aGlzIGp1c3QgcmVmcmVzaGVzIHdhcyB0b28gbGF6eSBmb3IgdGhpcyBzb3JyeSlcIjtcbiAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tXaW5uZXIoKSB7XG4gICAgaWYgKHJvYm90LmdhbWUuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgdXNlci53aW5uZXIgPSB0cnVlO1xuICAgICAgICBkaXNwbGF5V2lubmVyKHVzZXIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHVzZXIuZ2FtZS5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICByb2JvdC53aW5uZXIgPSB0cnVlO1xuICAgICAgICBkaXNwbGF5V2lubmVyKHJvYm90KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2FtZVNlcXVlbmNlKGNlbGwsIGdhbWVPdmVyKSB7XG4gICAgaWYgKFxuICAgICAgICBnYW1lT3ZlciB8fFxuICAgICAgICByb2JvdC5nYW1lLmNoZWNrSWZBbHJlYWR5Q2xpY2tlZChcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC5jb3JkT25lLFxuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmNvcmRUd28sXG4gICAgICAgIClcbiAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodXNlci50YWtlVHVybihyb2JvdCwgY2VsbC5kYXRhc2V0LmNvcmRPbmUsIGNlbGwuZGF0YXNldC5jb3JkVHdvKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXQtc2hpcFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB1c2VyLnN3aXRjaFR1cm4oKTtcbiAgICAgICAgcm9ib3QuYWlNb3Zlcyh1c2VyKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTaGlwcyhyb2JvdCk7XG59XG5cbmZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICAgIGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuXG4gICAgdXNlci5zd2l0Y2hUdXJuKCk7XG4gICAgcm9ib3QuZ2FtZS5wbGFjZVJvYm90U2hpcHMoKTtcblxuICAgIGRpc3BsYXlHYW1lQm9hcmRzKHVzZXIuZ2FtZS5ib2FyZCwgXCIjdXNlci1ib2FyZFwiLCBcInVzZXJcIik7XG4gICAgZGlzcGxheUdhbWVCb2FyZHMocm9ib3QuZ2FtZS5ib2FyZCwgXCIjYm90LWJvYXJkXCIsIFwiYm90XCIpO1xuXG4gICAgY29uc3QgYm90Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvdFwiKTtcbiAgICBib3RCb2FyZC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghcGxhY2VkU2hpcHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodXNlci50dXJuID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdhbWVTZXF1ZW5jZShjZWxsLCBnYW1lT3Zlcik7XG4gICAgICAgICAgICBpZiAoY2hlY2tXaW5uZXIocm9ib3QsIHVzZXIpKSB7XG4gICAgICAgICAgICAgICAgZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWR2YW5jZVNoaXBBcnJheSgpIHtcbiAgICBjb25zdCBpbmRleCA9IHBsYXllclNoaXBzLmluZGV4T2YoY3VycmVudFNoaXApO1xuICAgIGN1cnJlbnRTaGlwID0gcGxheWVyU2hpcHNbaW5kZXggKyAxXTtcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3NlcyhjZWxsLCBjbGFzc1RvQWRkLCBhZGRPclJlbW92ZSkge1xuICAgIGNvbnN0IGNvcmRzID0gdXNlci5nYW1lLmZpbmRDb3JkcyhcbiAgICAgICAgY3VycmVudFNoaXAsXG4gICAgICAgIGNlbGwuZGF0YXNldC5jb3JkT25lLFxuICAgICAgICBjZWxsLmRhdGFzZXQuY29yZFR3byxcbiAgICAgICAgY3VycmVudERpcmVjdGlvbixcbiAgICApO1xuICAgIGNvcmRzLmZvckVhY2goKGFkZENvcmQpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnREaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICBjb25zdCBoaWdodGxpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtY29yZC1vbmU9XCIke2FkZENvcmR9XCJdW2RhdGEtY29yZC10d289XCIke2NlbGwuZGF0YXNldC5jb3JkVHdvfVwiXWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaGlnaHRsaWdodC5jbGFzc0xpc3RbYWRkT3JSZW1vdmVdKGNsYXNzVG9BZGQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50RGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGhpZ2h0bGlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1jb3JkLW9uZT1cIiR7Y2VsbC5kYXRhc2V0LmNvcmRPbmV9XCJdW2RhdGEtY29yZC10d289XCIke2FkZENvcmR9XCJdYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBoaWdodGxpZ2h0LmNsYXNzTGlzdFthZGRPclJlbW92ZV0oY2xhc3NUb0FkZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2VsbEV2ZW50TGlzdGVycyhjZWxsKSB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgICAgIGlmIChwbGFjZWRTaGlwcykgcmV0dXJuO1xuICAgICAgICBhZGRDbGFzc2VzKGNlbGwsIFwiaG92ZXJlZFwiLCBcImFkZFwiKTtcbiAgICB9KTtcblxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgICBpZiAocGxhY2VkU2hpcHMpIHJldHVybjtcbiAgICAgICAgYWRkQ2xhc3NlcyhjZWxsLCBcImhvdmVyZWRcIiwgXCJyZW1vdmVcIik7XG4gICAgfSk7XG5cbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yb3cudXNlclwiKTtcbiAgICAgICAgZGVzZWxlY3QuZm9yRWFjaCgoZGVzZWxlY3RUaGlzKSA9PlxuICAgICAgICAgICAgZGVzZWxlY3RUaGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlcmVkXCIpLFxuICAgICAgICApOyAvLyAgIHJlbW92ZXMgaG92ZXJlZCBjbGFzcyBmcm9tIGxhc3QgcGxhY2VkIHNoaXBcblxuICAgICAgICBpZiAocGxhY2VkU2hpcHMpIHJldHVybjtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXVzZXIuZ2FtZS5wbGFjZVNoaXAoXG4gICAgICAgICAgICAgICAgY3VycmVudFNoaXAsXG4gICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmNvcmRPbmUsXG4gICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmNvcmRUd28sXG4gICAgICAgICAgICAgICAgY3VycmVudERpcmVjdGlvbixcbiAgICAgICAgICAgICAgICB1c2VyLmdhbWUuYm9hcmQsXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKGN1cnJlbnRTaGlwID09PSBwbGF5ZXJTaGlwc1s0XSkge1xuICAgICAgICAgICAgcGxhY2VkU2hpcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGFkZENsYXNzZXMoY2VsbCwgXCJzaGlwLXBsYWNlZC10aGVyZVwiLCBcImFkZFwiKTtcbiAgICAgICAgYWR2YW5jZVNoaXBBcnJheSgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJbnN0cnVjdGlvbnMoKSB7XG4gICAgY29uc3QgaW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnN0cnVjdGlvbnNcIik7XG4gICAgaW5zdHJ1Y3Rpb25zLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBwbGFjZVNoaXBzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGRlc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yb3cudXNlclwiKTtcbiAgICAgICAgZGVzZWxlY3QuZm9yRWFjaCgoY2VsbCkgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJlZFwiKSk7XG5cbiAgICAgICAgY3VycmVudERpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgICA/IChjdXJyZW50RGlyZWN0aW9uID0gXCJob3Jpem9udGFsXCIpXG4gICAgICAgICAgICA6IChjdXJyZW50RGlyZWN0aW9uID0gXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgYWRkQ2xhc3NlcyhlLnRhcmdldCwgXCJob3ZlcmVkXCIsIFwiYWRkXCIpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcbiAgICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUluc3RydWN0aW9ucyk7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJvdy51c2VyXCIpO1xuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IGNlbGxFdmVudExpc3RlcnMoY2VsbCkpO1xufVxuXG5leHBvcnQgeyBnZW5lcmF0ZVN0YXJ0ZXJIVE1MLCBnYW1lTG9vcCwgcGxhY2VTaGlwcywgdXBkYXRlU2hpcHMsIGNoZWNrV2lubmVyIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1zaGFkb3cgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cblxuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmQgPSBpbmlhdGxpemVCb2FyZCgpO1xuICAgIGxldCBtaXNzZXMgPSAwO1xuICAgIGxldCBtaXNzZWRDb3JkcyA9IFtdO1xuICAgIGxldCBoaXRDb3JkcyA9IFtdO1xuICAgIGxldCBhbGxDb3JkcyA9IFtdO1xuICAgIGxldCBzaGlwc0FycmF5ID0gW107XG4gICAgbGV0IHN1bmtTaGlwc0FycmF5ID0gW107XG4gICAgbGV0IGxhc3RTaGlwSGl0ID0gbnVsbDtcbiAgICBsZXQgc3Vua1NoaXBzID0gMDtcblxuICAgIGZ1bmN0aW9uIGluaWF0bGl6ZUJvYXJkKCkge1xuICAgICAgICBjb25zdCBob2xkZXIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkgKz0gMSkge1xuICAgICAgICAgICAgaG9sZGVyW2ldID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgaG9sZGVyW2ldW2pdID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaG9sZGVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE1pc3NlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlzc2VzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFN1bmtTaGlwcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Vua1NoaXBzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrSWZTaGlwSXNPdXRPZkJvdW5kcyhzaGlwT2JqLCBjb3JkT25lLCBjb3JkVHdvLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIiAmJlxuICAgICAgICAgICAgY29yZE9uZSAtIDEgKyBzaGlwT2JqLmdldExlbmd0aCgpID4gMTBcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIiAmJlxuICAgICAgICAgICAgY29yZFR3byAtIDEgKyBzaGlwT2JqLmdldExlbmd0aCgpID4gMTBcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluZENvcmRzKHNoaXBPYmosIGNvcmRPbmUsIGNvcmRUd28sIGRpcmVjdGlvbikge1xuICAgICAgICBjb25zdCBuZXdDb3JkcyA9IFtdO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgbmV3Q29yZHMucHVzaChjb3JkT25lKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcE9iai5nZXRMZW5ndGgoKTsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgbmV3Q29yZHMucHVzaChOdW1iZXIoY29yZE9uZSkgKyBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgIG5ld0NvcmRzLnB1c2goY29yZFR3byk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXBPYmouZ2V0TGVuZ3RoKCk7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIG5ld0NvcmRzLnB1c2goTnVtYmVyKGNvcmRUd28pICsgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0NvcmRzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrSWZDb3Jkc0hhc1NoaXAoXG4gICAgICAgIGNvcmRPbmUsXG4gICAgICAgIGNvcmRUd28sXG4gICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgYWRkaXRvbmFsQ29yZHMsXG4gICAgICAgIGJvYXJkQ29weSxcbiAgICApIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY29yZGluYXRlIG9mIGFkZGl0b25hbENvcmRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkQ29weVtjb3JkaW5hdGVdW2NvcmRUd29dICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjb3JkaW5hdGUgb2YgYWRkaXRvbmFsQ29yZHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRDb3B5W2NvcmRPbmVdW2NvcmRpbmF0ZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwT2JqLCBjb3JkT25lLCBjb3JkVHdvLCBkaXJlY3Rpb24sIGJvYXJkKSB7XG4gICAgICAgIGlmIChjaGVja0lmU2hpcElzT3V0T2ZCb3VuZHMoc2hpcE9iaiwgY29yZE9uZSwgY29yZFR3bywgZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29yZHMgPSBmaW5kQ29yZHMoc2hpcE9iaiwgY29yZE9uZSwgY29yZFR3bywgZGlyZWN0aW9uKTtcblxuICAgICAgICBpZiAoY2hlY2tJZkNvcmRzSGFzU2hpcChjb3JkT25lLCBjb3JkVHdvLCBkaXJlY3Rpb24sIGNvcmRzLCBib2FyZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvcmRzLmZvckVhY2goKGNvcmQpID0+IHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRbY29yZF1bY29yZFR3b10gPSBzaGlwT2JqO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRbY29yZE9uZV1bY29yZF0gPSBzaGlwT2JqO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2hpcHNBcnJheS5wdXNoKHNoaXBPYmopO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0NvcmRGb3JBdHRhY2soY29yZE9uZSwgY29yZFR3bywgYm9hcmRDb3B5KSB7XG4gICAgICAgIGNvbnN0IGNvcmRpbmF0ZSA9IGJvYXJkQ29weVtjb3JkT25lXVtjb3JkVHdvXTtcbiAgICAgICAgaWYgKGNvcmRpbmF0ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gYm9hcmRDb3B5W2NvcmRPbmVdW2NvcmRUd29dOyAvLyByZXR1cm5zIHNoaXAgaWYgdGhlcmVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVIaXRzKHNoaXAsIGJvYXJkQ29weSkge1xuICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgYm9hcmRDb3B5LnN1bmtTaGlwcyArPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVjaWV2ZUF0dGFjayhjb3JkT25lLCBjb3JkVHdvKSB7XG4gICAgICAgIHRoaXMuYWxsQ29yZHMucHVzaChbY29yZE9uZSwgY29yZFR3b10pO1xuICAgICAgICBjb25zdCBzaGlwID0gY2hlY2tDb3JkRm9yQXR0YWNrKGNvcmRPbmUsIGNvcmRUd28sIHRoaXMuYm9hcmQpO1xuICAgICAgICBpZiAoc2hpcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5taXNzZXMgKz0gMTtcbiAgICAgICAgICAgIHRoaXMubWlzc2VkQ29yZHMucHVzaChbY29yZE9uZSwgY29yZFR3b10pO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtjb3JkT25lXVtjb3JkVHdvXSA9IFwibWlzc1wiO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdFNoaXBIaXQgPSB0aGlzLmJvYXJkW2NvcmRPbmVdW2NvcmRUd29dO1xuICAgICAgICB0aGlzLmhpdENvcmRzLnB1c2goW2NvcmRPbmUsIGNvcmRUd29dKTtcbiAgICAgICAgdXBkYXRlSGl0cyhzaGlwLCB0aGlzLmJvYXJkKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgaXNTdW5rU2hpcCA9IChzaGlwKSA9PiBzaGlwLnN1bms7XG5cbiAgICBmdW5jdGlvbiBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICAgIGlmIChzaGlwc0FycmF5LmV2ZXJ5KGlzU3Vua1NoaXApKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmFuZG9tTnVtYmVyKCkge1xuICAgICAgICBsZXQgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBpZiAobnVtID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmFuZG9tTnVtYmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByYW5kb21EaXJlY3Rpb24oKSB7XG4gICAgICAgIGxldCBkaXJlY3Rpb25zID0gW1widmVydGljYWxcIiwgXCJob3Jpem9udGFsXCJdO1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkaXJlY3Rpb25zLmxlbmd0aCldO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlUm9ib3RTaGlwcygpIHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBbXG4gICAgICAgICAgICBTaGlwKDIsIFwiRGVzdHJveWVyXCIpLFxuICAgICAgICAgICAgU2hpcCgzLCBcIlN1Ym1hcmluZVwiKSxcbiAgICAgICAgICAgIFNoaXAoMywgXCJDcnVpc2VyXCIpLFxuICAgICAgICAgICAgU2hpcCg0LCBcIkJhdHRsZXNoaXBcIiksXG4gICAgICAgICAgICBTaGlwKDUsIFwiQ2FycmllclwiKSxcbiAgICAgICAgXTtcblxuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBwbGFjZVNoaXBzUm9ib3RSZWMoc2hpcCwgdGhpcy5ib2FyZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcHNSb2JvdFJlYyhzaGlwLCBib2FyZCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBwbGFjZVNoaXAoXG4gICAgICAgICAgICAgICAgc2hpcCxcbiAgICAgICAgICAgICAgICByYW5kb21OdW1iZXIoKSxcbiAgICAgICAgICAgICAgICByYW5kb21OdW1iZXIoKSxcbiAgICAgICAgICAgICAgICByYW5kb21EaXJlY3Rpb24oKSxcbiAgICAgICAgICAgICAgICBib2FyZCxcbiAgICAgICAgICAgICkgPT09IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgICAgcGxhY2VTaGlwc1JvYm90UmVjKHNoaXAsIGJvYXJkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrSWZBbHJlYWR5Q2xpY2tlZChjb3JkT25lLCBjb3JkVHdvKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsQ29yZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChjb3JkT25lID09PSBhbGxDb3Jkc1tpXVswXSAmJiBjb3JkVHdvID09PSBhbGxDb3Jkc1tpXVsxXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBib2FyZCxcbiAgICAgICAgbWlzc2VzLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2lldmVBdHRhY2ssXG4gICAgICAgIGdldE1pc3NlcyxcbiAgICAgICAgbWlzc2VkQ29yZHMsXG4gICAgICAgIHNoaXBzQXJyYXksXG4gICAgICAgIHN1bmtTaGlwcyxcbiAgICAgICAgYWxsU2hpcHNTdW5rLFxuICAgICAgICBnZXRTdW5rU2hpcHMsXG4gICAgICAgIHBsYWNlUm9ib3RTaGlwcyxcbiAgICAgICAgYWxsQ29yZHMsXG4gICAgICAgIHJhbmRvbURpcmVjdGlvbixcbiAgICAgICAgcmFuZG9tTnVtYmVyLFxuICAgICAgICBmaW5kQ29yZHMsXG4gICAgICAgIGNoZWNrSWZBbHJlYWR5Q2xpY2tlZCxcbiAgICAgICAgc3Vua1NoaXBzQXJyYXksXG4gICAgICAgIGhpdENvcmRzLFxuICAgICAgICBsYXN0U2hpcEhpdCxcbiAgICB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgeyBjaGVja1dpbm5lciwgdXBkYXRlU2hpcHMgfSBmcm9tIFwiLi9ET01cIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKHBsYXllck5hbWUpIHtcbiAgICBsZXQgdHVybiA9IGZhbHNlO1xuICAgIGxldCBnYW1lID0gR2FtZWJvYXJkKCk7XG4gICAgbGV0IHdpbm5lciA9IGZhbHNlO1xuICAgIGxldCBoaXQgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHRha2VUdXJuKG9wcG9uZW50LCBjb3JkT25lLCBjb3JkVHdvKSB7XG4gICAgICAgIGlmICh0aGlzLnR1cm4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wcG9uZW50LmdhbWUucmVjaWV2ZUF0dGFjayhjb3JkT25lLCBjb3JkVHdvKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hUdXJuKCkge1xuICAgICAgICB0aGlzLnR1cm4gPyAodGhpcy50dXJuID0gZmFsc2UpIDogKHRoaXMudHVybiA9IHRydWUpO1xuICAgICAgICByZXR1cm4gdGhpcy50dXJuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJhbmRvbU51bWJlcigpIHtcbiAgICAgICAgbGV0IG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDExKTtcbiAgICAgICAgaWYgKG51bSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJhbmRvbU51bWJlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudW07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXZhaWxhYmxlTW92ZXMob3Bwb25lbnQpIHtcbiAgICAgICAgbGV0IGNvcmRzID0gW3JhbmRvbU51bWJlcigpLCByYW5kb21OdW1iZXIoKV07XG4gICAgICAgIGxldCBwcmV2aW91c01vdmVzID0gb3Bwb25lbnQuZ2FtZS5hbGxDb3JkcztcbiAgICAgICAgaWYgKCFwcmV2aW91c01vdmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvcmRzO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmV2aW91c01vdmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgY29yZHNbMF0gPT09IHByZXZpb3VzTW92ZXNbaV1bMF0gJiZcbiAgICAgICAgICAgICAgICBjb3Jkc1sxXSA9PT0gcHJldmlvdXNNb3Zlc1tpXVsxXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF2YWlsYWJsZU1vdmVzKG9wcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29yZHM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc21hcnRNb3ZlKG9wcG9uZW50LCBjb3JkcywgY291bnRlciA9IDApIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBbXG4gICAgICAgICAgICBbY29yZHNbMF0gKyAxLCBjb3Jkc1sxXV0sIC8vICBYXG4gICAgICAgICAgICBbY29yZHNbMF0gLSAxLCBjb3Jkc1sxXV0sIC8vIFhcbiAgICAgICAgICAgIFtjb3Jkc1swXSwgY29yZHNbMV0gLSAxXSwgLy8gWVxuICAgICAgICAgICAgW2NvcmRzWzBdLCBjb3Jkc1sxXSArIDFdLCAvLyBZXG4gICAgICAgIF07XG5cbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMuZmlsdGVyKFxuICAgICAgICAgICAgKG9wdGlvbikgPT5cbiAgICAgICAgICAgICAgICBvcHRpb25bMF0gPj0gMSAmJlxuICAgICAgICAgICAgICAgIG9wdGlvblswXSA8PSAxMCAmJlxuICAgICAgICAgICAgICAgIG9wdGlvblsxXSA+PSAxICYmXG4gICAgICAgICAgICAgICAgb3B0aW9uWzFdIDw9IDEwLFxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBjaG9pY2UgPSBvcHRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9wdGlvbnMubGVuZ3RoKV07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3Bwb25lbnQuZ2FtZS5hbGxDb3Jkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIG9wcG9uZW50LmdhbWUuYWxsQ29yZHNbaV1bMF0gPT09IGNob2ljZVswXSAmJlxuICAgICAgICAgICAgICAgIG9wcG9uZW50LmdhbWUuYWxsQ29yZHNbaV1bMV0gPT09IGNob2ljZVsxXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXIgPT09IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF2YWlsYWJsZU1vdmVzKG9wcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNtYXJ0TW92ZShcbiAgICAgICAgICAgICAgICAgICAgb3Bwb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIG9wcG9uZW50LmdhbWUuaGl0Q29yZHNbb3Bwb25lbnQuZ2FtZS5oaXRDb3Jkcy5sZW5ndGggLSAxXSxcbiAgICAgICAgICAgICAgICAgICAgY291bnRlciArIDEsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hvaWNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGF0dGFja1NlcXVlbmNlKG9wcG9uZW50LCBjb3Jkcykge1xuICAgICAgICB1cGRhdGVTaGlwcyhvcHBvbmVudCk7XG4gICAgICAgIGNoZWNrV2lubmVyKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLWNvcmQtb25lPVwiJHtjb3Jkc1swXX1cIl1bZGF0YS1jb3JkLXR3bz1cIiR7Y29yZHNbMV19XCJdYCxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmIChvcHBvbmVudC5nYW1lLnJlY2lldmVBdHRhY2soY29yZHNbMF0sIGNvcmRzWzFdKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGhpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0LXNoaXBcIik7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcC1wbGFjZWQtdGhlcmVcIik7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICAgICAgICAgICAgYWlNb3ZlcyhvcHBvbmVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBvcHBvbmVudC5nYW1lLmxhc3RTaGlwSGl0ICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgb3Bwb25lbnQuZ2FtZS5sYXN0U2hpcEhpdC5pc1N1bmsoKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaGl0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9wcG9uZW50LnN3aXRjaFR1cm4oKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWlNb3ZlcyhvcHBvbmVudCkge1xuICAgICAgICBpZiAoaGl0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBsZXQgY29yZHMgPSBzbWFydE1vdmUoXG4gICAgICAgICAgICAgICAgb3Bwb25lbnQsXG4gICAgICAgICAgICAgICAgb3Bwb25lbnQuZ2FtZS5oaXRDb3Jkc1tvcHBvbmVudC5nYW1lLmhpdENvcmRzLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYXR0YWNrU2VxdWVuY2Uob3Bwb25lbnQsIGNvcmRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjb3JkcyA9IGF2YWlsYWJsZU1vdmVzKG9wcG9uZW50KTtcbiAgICAgICAgICAgIGF0dGFja1NlcXVlbmNlKG9wcG9uZW50LCBjb3Jkcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGF5ZXJOYW1lLFxuICAgICAgICBnYW1lLFxuICAgICAgICB0dXJuLFxuICAgICAgICB0YWtlVHVybixcbiAgICAgICAgc3dpdGNoVHVybixcbiAgICAgICAgYWlNb3ZlcyxcbiAgICAgICAgd2lubmVyLFxuICAgIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItY29uc3QgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAobGVuZ3RoLCBuYW1lKSB7XG4gICAgbGV0IGhpdHMgPSAwO1xuICAgIGxldCBzdW5rID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cyArPSAxO1xuICAgICAgICByZXR1cm4gdGhpcy5oaXRzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldExlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhpdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpdHM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IHRoaXMuZ2V0SGl0cygpKSB7XG4gICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB7IGxlbmd0aCwgbmFtZSwgaGl0cywgc3VuaywgaGl0LCBnZXRIaXRzLCBnZXRMZW5ndGgsIGlzU3VuayB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9