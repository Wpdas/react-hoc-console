module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Default Style
var classes = {
  ConsoleUI: {
    bottom: '0',
    position: 'fixed',
    width: '100%'
  },

  ExtraSpace: {
    height: '282px'
  },

  SuperBar: {
    width: '100%',
    height: '32px',
    background: '#1d1d1d',
    display: 'flex'
  },

  SuperBar_span: {
    color: '#fff',
    fontFamily: 'sans-serif',
    fontSize: '0.9em',
    padding: '8px 8px 8px 0px'
  },

  SuperBar_img: {
    height: '22px',
    padding: '5px'
  },

  Stage: {
    width: '100%',
    height: '250px',
    background: '#0e0e0e',
    padding: '8px'
  },

  Text: {
    fontFamily: 'sans-serif',
    fontSize: '0.9em'
  }
};

//Console Style Types
var ConsoleStyleTypes = {
  LOG: { color: 'white' },
  WARNING: { color: '#eedf0c' },
  INFO: { color: '#077591' },
  DEBUG: { color: '#279107' },
  ERROR: { color: '#911c07' },
  ERROR_MARKER: {
    backgroundColor: 'rgb(238, 56, 12)',
    padding: '2px'
  }
};

//Components
var SuperBar = function SuperBar() {
  return _react2.default.createElement(
    'div',
    { style: classes.SuperBar },
    _react2.default.createElement(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 841.9 595.3',
        style: classes.SuperBar_img,
        alt: 'logo'
      },
      _react2.default.createElement(
        'g',
        { fill: '#61DAFB' },
        _react2.default.createElement('path', { d: 'M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z' }),
        _react2.default.createElement('circle', { cx: '420.9', cy: '296.5', r: '45.7' }),
        _react2.default.createElement('path', { d: 'M520.5 78.1z' })
      )
    ),
    _react2.default.createElement(
      'span',
      { style: classes.SuperBar_span },
      'Console'
    )
  );
};

var Text = function Text(_ref) {
  var style = _ref.style,
      children = _ref.children;

  var textStyle = _extends({}, classes.Text, style);
  return _react2.default.createElement(
    'span',
    { style: textStyle },
    children
  );
};

var Stage = function (_React$Component) {
  _inherits(Stage, _React$Component);

  function Stage(props) {
    _classCallCheck(this, Stage);

    var _this = _possibleConstructorReturn(this, (Stage.__proto__ || Object.getPrototypeOf(Stage)).call(this, props));

    _this.state = {
      texts: []
    };

    _this.original = {
      log: window.console.log,
      warn: window.console.warn,
      info: window.console.info,
      debug: window.console.debug
    };

    _this.date = new Date();

    _this.log = _this.log.bind(_this);
    _this.warn = _this.warn.bind(_this);
    _this.info = _this.info.bind(_this);
    _this.debug = _this.debug.bind(_this);
    _this.error = _this.error.bind(_this);
    _this.clear = _this.clear.bind(_this);
    _this.processText = _this.processText.bind(_this);

    window.console.log = _this.log;
    window.console.warn = _this.warn;
    window.console.info = _this.info;
    window.console.debug = _this.debug;
    window.console.error = _this.error;
    window.console.clear = _this.clear;

    window.onerror = function (errorMessage, file, lineNumber, columnNumber) {
      var error = file + ':' + lineNumber + (columnNumber ? ':' + columnNumber : '');
      window.console.error(errorMessage, error);
    };
    return _this;
  }

  _createClass(Stage, [{
    key: 'log',
    value: function log(logText) {
      if (logText) {
        this.processText(logText, ConsoleStyleTypes.LOG);
        this.original.log.call(this, logText);
      }
    }
  }, {
    key: 'warn',
    value: function warn(warnText) {
      if (warnText) {
        this.processText(warnText, ConsoleStyleTypes.WARNING);
        this.original.warn.call(this, warnText);
      }
    }
  }, {
    key: 'info',
    value: function info(infoText) {
      if (infoText) {
        this.processText(infoText, ConsoleStyleTypes.INFO);
        this.original.info.call(this, infoText);
      }
    }
  }, {
    key: 'debug',
    value: function debug(debugText) {
      if (debugText) {
        this.processText(debugText, ConsoleStyleTypes.DEBUG);
        this.original.debug.call(this, debugText);
      }
    }
  }, {
    key: 'error',
    value: function error(errorText, errorFiles) {
      var subError = void 0;

      if (errorFiles) {
        var splitLocation = errorFiles.split('/');
        var filterToReplace = splitLocation[splitLocation.length - 1];
        subError = filterToReplace;
      }

      if (errorText) {
        var errorDirectionBody = _react2.default.createElement(
          Text,
          { style: ConsoleStyleTypes.ERROR_MARKER },
          subError
        );

        var errorTextBody = errorFiles ? errorText + ' --> ' : errorText;

        this.processText(errorTextBody, ConsoleStyleTypes.ERROR, errorDirectionBody);
      }
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.setState({ texts: [] });
    }
  }, {
    key: 'processText',
    value: function processText(text, consoleStyle, additionalText) {
      var texts = this.state.texts;

      var updatedTexts = texts;
      additionalText = additionalText || null;

      updatedTexts.push(_react2.default.createElement(
        'div',
        { key: texts.length },
        _react2.default.createElement(
          Text,
          { style: consoleStyle },
          text
        ),
        ' ',
        additionalText,
        _react2.default.createElement('br', null)
      ));
      this.setState({ texts: updatedTexts });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: classes.Stage },
        this.state.texts
      );
    }
  }]);

  return Stage;
}(_react2.default.Component);

var reactConsole = function reactConsole(WrappedComponent, active) {
  return function (_React$Component2) {
    _inherits(_class, _React$Component2);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'render',
      value: function render() {
        var consoleUI = _react2.default.createElement(
          'div',
          { style: classes.ConsoleUI },
          _react2.default.createElement(SuperBar, null),
          _react2.default.createElement(Stage, null)
        );

        var finalRender = active ? _react2.default.createElement(
          'div',
          null,
          consoleUI,
          _react2.default.createElement(WrappedComponent, this.props),
          _react2.default.createElement('div', { style: classes.ExtraSpace })
        ) : _react2.default.createElement(WrappedComponent, this.props);

        return finalRender;
      }
    }]);

    return _class;
  }(_react2.default.Component);
};

exports.default = reactConsole;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);