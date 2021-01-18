/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./gesture.js":
/*!********************!*\
  !*** ./gesture.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dispatcher": () => /* binding */ Dispatcher,
/* harmony export */   "Listener": () => /* binding */ Listener,
/* harmony export */   "Recognizer": () => /* binding */ Recognizer,
/* harmony export */   "enableGesture": () => /* binding */ enableGesture
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// let element = document.documentElement;
// let isListeningMouse = false;
// listen => recognize => dispatch
// new Listener(new Recognizer(dispatch))
// document.addEventListener('mousedown', (event) => {
//   // 按下哪个键
//   console.log(event.button);
//   let context = Object.create(null);
//   contexts.set('mouse' + (1 << event.button), context);
//   start(event, context);
//   let mousemove = (event) => {
//     // 掩码，二进制表示，0b0001左键按下
//     // event.buttons=== 0b0001
//     let button = 1;
//     while (button <= event.buttons) {
//       if (button & event.buttons) {
//         // 鼠标中键和右键顺序不一致，需要调整
//         let key;
//         if (button === 2) key = 4;
//         else if (button === 4) key = 2;
//         else key = button;
//         let context = contexts.get('mouse' + key);
//         move(event, context);
//       }
//       button = button << 1;
//     }
//   };
//   let mouseup = (event) => {
//     console.log(event.button);
//     let context = contexts.get('mouse' + (1 << event.button));
//     end(event, context);
//     contexts.delete('mouse' + (1 << event.button));
//     if (event.buttons === 0) {
//       document.removeEventListener('mousemove', mousemove);
//       document.removeEventListener('mouseup', mouseup);
//       isListeningMouse = false;
//     }
//   };
//   if (!isListeningMouse) {
//     document.addEventListener('mousemove', mousemove);
//     document.addEventListener('mouseup', mouseup);
//     isListeningMouse = true;
//   }
// });
// let contexts = new Map();
// document.addEventListener('touchstart', (event) => {
//   for (let touch of event.changedTouches) {
//     let context = Object.create(null);
//     contexts.set(touch.identifier, context);
//     start(touch, context);
//   }
// });
// document.addEventListener('touchmove', (event) => {
//   for (let touch of event.changedTouches) {
//     let context = contexts.get(touch.identifier);
//     move(touch, context);
//   }
// });
// document.addEventListener('touchend', (event) => {
//   for (let touch of event.changedTouches) {
//     let context = contexts.get(touch.identifier);
//     end(touch, context);
//     contexts.delete(touch.identifier);
//   }
// });
// document.addEventListener('touchcancel', (event) => {
//   for (let touch of event.changedTouches) {
//     let context = contexts.get(touch.identifier);
//     cancel(touch, context);
//   }
// });
// let handler;
// let startX, startY;
// let isPan = false,
//   isTap = true,
//   isPress = false;
// let start = (point, context) => {
//   // console.log('start', point.clientX, point.clientY);
//   (context.startX = point.clientX), (context.startY = point.clientY);
//   context.points = [
//     {
//       t: Date.now(),
//       x: point.clientX,
//       y: point.clientY,
//     },
//   ];
//   context.isTap = true;
//   context.isPan = false;
//   context.isPress = false;
//   context.handler = setTimeout(() => {
//     context.isTap = false;
//     context.isPan = false;
//     context.isPress = true;
//     context.handler = null;
//     console.log('pressstart');
//   }, 500);
// };
// let move = (point, context) => {
//   let dx = point.clientX - context.startX,
//     dy = point.clientY - context.startY;
//   // 移动超过10px
//   if (!context.isPan && dx ** 2 + dy ** 2 > 100) {
//     context.isTap = false;
//     context.isPan = true;
//     context.isPress = false;
//     clearTimeout(context.handler);
//   }
//   if (context.isPan) {
//     console.log(dx, dy);
//     console.log('pan');
//   }
//   context.points = context.points.filter((point) => Date.now() - point.t < 500);
//   context.points.push({
//     t: Date.now(),
//     x: point.clientX,
//     y: point.clientY,
//   });
//   // console.log('move', point.clientX, point.clientY);
// };
// let end = (point, context) => {
//   if (context.isTap) {
//     console.log('tap');
//     dispatch('tap', {});
//     clearTimeout(context.handler);
//   }
//   if (context.isPan) {
//     console.log('paned');
//   }
//   if (context.isPress) {
//     console.log('presseend');
//   }
//   context.points = context.points.filter((point) => Date.now() - point.t < 500);
//   let d, v;
//   if (!context.points.length) {
//     v = 0;
//   } else {
//     // 移动的距离
//     d = Math.sqrt(
//       (point.clientX - context.points[0].x) ** 2 + (point.clientY - context.points[0].y) ** 2
//     );
//     // 速度
//     v = d / (Date.now() - context.points[0].t);
//     console.log(v);
//   }
//   // 像素每毫秒
//   if (v > 1.5) {
//     console.log('flick');
//     context.isFlick = true;
//   } else {
//     context.isFlick = false;
//   }
//   // console.log('end', point.clientX, point.clientY);
// };
// let cancel = (point, context) => {
//   clearTimeout(context.handler);
//   // console.log('cancel', point.clientX, point.clientY);
// };
// function dispatch(type, properties) {
//   let event = new CustomEvent(type);
//   for (let name in properties) {
//     event[name] = properties[name];
//   }
//   element.dispatchEvent(event);
// }
var Dispatcher = /*#__PURE__*/function () {
  function Dispatcher(element) {
    _classCallCheck(this, Dispatcher);

    this.element = element;
  }

  _createClass(Dispatcher, [{
    key: "dispatch",
    value: function dispatch(type, properties) {
      var event = new Event(type);

      for (var key in properties) {
        if (properties.hasOwnProperty(key)) {
          var value = properties[key];
          event[key] = value;
        }
      }

      this.element.dispatchEvent(event);
    }
  }]);

  return Dispatcher;
}();
var Listener = function Listener(element, recognizer) {
  _classCallCheck(this, Listener);

  var isListeningMouse = false;
  element.addEventListener('mousedown', function (event) {
    var context = Object.create(null);
    contexts.set('mouse' + (1 << event.button), context);
    recognizer.start(event, context);

    var mousemove = function mousemove(event) {
      var button = 1;

      while (button <= event.buttons) {
        if (button & event.buttons) {
          var key = void 0;

          if (button === 2) {
            key = 4;
          } else if (button === 4) {
            key = 2;
          } else {
            key = button;
          }

          var _context = contexts.get('mouse' + key);

          recognizer.move(event, _context);
        }

        button = button << 1;
      }
    };

    var mouseup = function mouseup(event) {
      var context = contexts.get('mouse' + (1 << event.button));
      recognizer.end(event, context);
      contexts["delete"]('mouse' + (1 << event.button));

      if (event.buttonss === 0) {
        document.removeEventListener('mousemove', mousemove);
        document.removeEventListener('mouseup', mouseup);
        isListeningMouse = false;
      }
    };

    if (!isListeningMouse) {
      document.addEventListener('mousemove', mousemove);
      document.addEventListener('mouseup', mouseup);
      isListeningMouse = true;
    }
  });
  var contexts = new Map();
  element.addEventListener('touchstart', function (event) {
    var _iterator = _createForOfIteratorHelper(event.changedTouches),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var touch = _step.value;
        var context = Object.create(null);
        contexts.set(touch.identifier, context);
        recognizer.start(touch, context);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
  element.addEventListener('touchmove', function (event) {
    var _iterator2 = _createForOfIteratorHelper(event.changedTouches),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var touch = _step2.value;
        var context = contexts.get(touch.identifier);
        recognizer.move(touch, context);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
  element.addEventListener('touchend', function (event) {
    var _iterator3 = _createForOfIteratorHelper(event.changedTouches),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var touch = _step3.value;
        var context = contexts.get(touch.identifier);
        recognizer.end(touch, context);
        contexts["delete"](touch.identifier);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  });
  element.addEventListener('touchcancel', function (event) {
    var _iterator4 = _createForOfIteratorHelper(event.changedTouches),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var touch = _step4.value;
        var context = contexts.get(touch.identifier);
        recognizer.cancel(touch, context);
        contexts["delete"](touch.identifier);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  });
};
var Recognizer = /*#__PURE__*/function () {
  function Recognizer(dispatcher) {
    _classCallCheck(this, Recognizer);

    this.dispatcher = dispatcher;
  }

  _createClass(Recognizer, [{
    key: "start",
    value: function start(point, context) {
      var _this = this;

      context.startX = point.clientX, context.startY = point.clientY;
      context.points = [{
        t: Date.now(),
        x: point.clientX,
        y: point.clientY
      }];
      context.isTap = true;
      context.isPan = false;
      context.isPress = false;
      context.isFlick = false; // 判断press超过500毫秒

      context.handler = setTimeout(function () {
        context.isTap = false;
        context.isPan = false;
        context.isPress = true;
        context.handler = null;

        _this.dispatcher.dispatch('press', {});
      }, 500);
    }
  }, {
    key: "move",
    value: function move(point, context) {
      var dx = point.clientX - context.startX,
          dy = point.clientY - context.startY; // 移动超过10px 取消press监听

      if (!context.isPan && Math.pow(dx, 2) + Math.pow(dy, 2) > 100) {
        context.isTap = false;
        context.isPress = false;
        context.isPan = true;
        context.isVertical = Math.abs(dx) < Math.abs(dy);
        this.dispatcher.dispatch('panstart', {
          startX: context.startX,
          startY: context.startY,
          clientX: point.clientX,
          clientY: point.clientY,
          isVertical: context.isVertical
        });
        clearTimeout(context.handler);
      }

      if (context.isPan) {
        //平移
        this.dispatcher.dispatch('pan', {
          startX: context.startX,
          startY: context.startY,
          clientX: point.clientX,
          clientY: point.clientY,
          isVertical: context.isVertical
        });
      }

      context.points = context.points.filter(function (point) {
        return Date.now() - point.t < 500;
      });
      context.points.push({
        t: Date.now(),
        x: point.clientX,
        y: point.clientY
      });
    }
  }, {
    key: "end",
    value: function end(point, context) {
      if (context.isTap) {
        this.dispatcher.dispatch('tap', {});
        clearTimeout(context.handler);
      }

      if (context.isPress) {
        this.dispatcher.dispatch('pressend', {});
      }

      context.points = context.points.filter(function (point) {
        return Date.now() - point.t < 500;
      });
      var d, v;

      if (!context.points.length) {
        v = 0;
      } else {
        d = Math.sqrt(Math.pow(point.clientX - context.points[0].x, 2) + Math.pow(point.clientY - context.points[0].y, 2));
        v = d / (Date.now() - context.points[0].t);
      }

      if (v > 1.5) {
        this.dispatcher.dispatch('flick', {
          startX: context.startX,
          startY: context.startY,
          clientX: point.clientX,
          clientY: point.clientY,
          isVertical: context.isVertical,
          isFlick: context.isFlick,
          velocity: v
        });
        context.isFlick = true;
      } else {
        context.isFlick = false;
      }

      if (context.isPan) {
        this.dispatcher.dispatch('panend', {
          startX: context.startX,
          startY: context.startY,
          clientX: point.clientX,
          clientY: point.clientY,
          isVertical: context.isVertical,
          isFlick: context.isFlick
        });
      }
    }
  }, {
    key: "cancel",
    value: function cancel(point, context) {
      clearTimeout(context.handler);
      this.dispatcher.dispatch('cancel', {});
    }
  }]);

  return Recognizer;
}();
function enableGesture(element) {
  new Listener(element, new Recognizer(new Dispatcher(element)));
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./gesture.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map