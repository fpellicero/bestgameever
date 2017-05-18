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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(3)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(13)
  , IE8_DOM_DEFINE = __webpack_require__(18)
  , toPrimitive    = __webpack_require__(20)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(0) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Loser = __webpack_require__(22);

var _Loser2 = _interopRequireDefault(_Loser);

var _FallingStuff = __webpack_require__(25);

var _FallingStuff2 = _interopRequireDefault(_FallingStuff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BestGameEver = function () {
  function BestGameEver() {
    (0, _classCallCheck3.default)(this, BestGameEver);

    this._initCanvas();
    this.lastTime = Date.now();
    this.foo = "";
    this.HitOrMissCallback = this.HitOrMissCallback.bind(this);
    this.FallingStuff = new _FallingStuff2.default(this.ctx, this.HitOrMissCallback);
    this.Loser = new _Loser2.default(this.ctx, this.FallingStuff);
    this.Start = this.Start.bind(this);
    this.hits = 0;
    this.miss = 0;
  }

  (0, _createClass3.default)(BestGameEver, [{
    key: '_initCanvas',
    value: function _initCanvas() {
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');

      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;

      document.body.appendChild(this.canvas);
    }
  }, {
    key: '_getDt',
    value: function _getDt() {
      var now = Date.now();
      var dt = (now - this.lastTime) / 1000.0;
      this.lastTime = now;
      return dt;
    }
  }, {
    key: 'Start',
    value: function Start() {
      var dt = this._getDt();
      this._renderBackground();
      this.Loser.Update(dt);
      this.Loser.Render();
      this.FallingStuff.Update(dt);
      this.FallingStuff.Render();
      this._printScore();
      window.requestAnimationFrame(this.Start);
    }
  }, {
    key: 'HitOrMissCallback',
    value: function HitOrMissCallback(hit) {
      console.log(this);
      if (hit) this.hits++;else this.miss++;
    }
  }, {
    key: '_renderBackground',
    value: function _renderBackground() {
      this.ctx.drawImage(Resources.get("assets/sprites/background.jpg"), 0, 0, window.innerWidth, window.innerHeight);
    }
  }, {
    key: '_printScore',
    value: function _printScore() {
      this.ctx.save();
      this.ctx.fillStyle = "#D2312E";
      this.ctx.font = "30px Arial";
      this.ctx.textAlign = "end";
      this.ctx.fillText('$' + this.hits * 100, window.innerWidth - 15, 80);
      var ctr = this.miss > 0 ? this.hits / (this.miss + this.hits) * 100 : 100;
      this.ctx.fillText('CTR: ' + Math.round(ctr) + '%', window.innerWidth - 15, 50);
      this.ctx.restore();
    }
  }]);
  return BestGameEver;
}();

exports.default = BestGameEver;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _BestGameEver = __webpack_require__(6);

var _BestGameEver2 = _interopRequireDefault(_BestGameEver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(23);

var path = "assets/sprites";
var sprites = [path + '/loser/walk.png', path + '/loser/run.png', path + '/loser/idle.png', path + '/loser/jump.png', path + '/background.jpg', path + '/loser/attack.png', path + '/Ad.PNG'];

window.onload = function () {
  Resources.load(sprites);
  Resources.onReady(startGame);
};

function startGame() {
  new _BestGameEver2.default().Start();
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(11), __esModule: true };

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(8);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(21);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(12);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1)
  , document = __webpack_require__(4).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(4)
  , core      = __webpack_require__(2)
  , ctx       = __webpack_require__(14)
  , hide      = __webpack_require__(17)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(5)
  , createDesc = __webpack_require__(19);
module.exports = __webpack_require__(0) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(0) && !__webpack_require__(3)(function(){
  return Object.defineProperty(__webpack_require__(15)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(1);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(16);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(0), 'Object', {defineProperty: __webpack_require__(5).f});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Constants = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loser = function () {
  function Loser(context, fallingStuff) {
    (0, _classCallCheck3.default)(this, Loser);

    this.context = context;
    this.FallingStuff = fallingStuff;

    this._setSprites();

    this.spriteIndex = 0;
    this.currentSprite = "idle";
    this.currentDirection = null;
    this.lastFrameChange = Date.now();
    this.currentPosition = {
      x: 0,
      y: window.innerHeight - 215
    };

    this.Render = this.Render.bind(this);
    this.move = this.move.bind(this);
    this._walkOrRun = this._walkOrRun.bind(this);
    this._idle = this._idle.bind(this);

    this.bindEvents();
  }

  (0, _createClass3.default)(Loser, [{
    key: "checkStartRunning",
    value: function checkStartRunning(key) {
      var now = Date.now();
      if (this.lastKeyUp && this.lastKeyUp.key == key && now - this.lastKeyUp.time < 100) {
        return true;
      }
      var res = false;
      return res;
    }
  }, {
    key: "move",
    value: function move(e) {
      var startRunning = this.checkStartRunning(e.keyCode);
      switch (e.keyCode) {
        case 37:
          this._walkOrRun(_Constants.DIRECTION.LEFT, startRunning);
          break;
        case 39:
          this._walkOrRun(_Constants.DIRECTION.RIGHT, startRunning);
          break;
        case 32:
          this._jump();
          break;
        case 13:
          this._attack();
          break;
        default:
          break;
      }
    }
  }, {
    key: "IsMoving",
    value: function IsMoving() {
      return this.IsWalking() || this.IsRunning() || this.IsJumping();
    }
  }, {
    key: "IsRunning",
    value: function IsRunning() {
      return this.currentSprite == "run";
    }
  }, {
    key: "IsWalking",
    value: function IsWalking() {
      return this.currentSprite == "walk";
    }
  }, {
    key: "IsJumping",
    value: function IsJumping() {
      return this.currentSprite == "jump";
    }
  }, {
    key: "IsAttacking",
    value: function IsAttacking() {
      return this.currentSprite == "attack";
    }
  }, {
    key: "Update",
    value: function Update(dt) {
      if (this.IsMoving()) {
        var modifier = this.direction == _Constants.DIRECTION.LEFT ? -1 : 1;
        var increment = dt * modifier;

        var sprite = this.sprites[this.currentSprite];
        this.currentPosition.x += sprite.speed * dt * modifier;
        if (this.currentPosition.x > window.innerWidth + sprite.width) this.currentPosition.x = sprite.width * -1;
        if (this.currentPosition.x < sprite.width * -1) this.currentPosition.x = window.innerWidth + sprite.width;
        this._animateJump();
      }
      this.FallingStuff.CheckCollisions(this.currentPosition, this._getCurrentSprite());
    }
  }, {
    key: "_animateJump",
    value: function _animateJump() {
      if (this.IsJumping()) {
        var modifier = this.spriteIndex >= 5 ? 1 : -1;
        var jumpSprite = this._getCurrentSprite();
        var increment = modifier * (jumpSprite.height / 20);
        //console.log(increment);
        this.currentPosition.y += increment;
        if (this.currentPosition.y > window.innerHeight - 215) {
          this.currentPosition.y = window.innerHeight - 215;
        }
      }
    }
  }, {
    key: "_walkOrRun",
    value: function _walkOrRun(direction, startRunning) {
      if (this.IsJumping()) return;
      if (this.IsRunning() && direction == this.direction) return;
      if (!startRunning && this.IsWalking() && direction == this.direction) return;
      this.currentSprite = startRunning ? "run" : "walk";
      this.direction = direction;
      this.spriteIndex = 0;
    }
  }, {
    key: "_idle",
    value: function _idle(e) {
      if (this.IsJumping() || this.IsAttacking()) return;
      this.lastKeyUp = {
        time: Date.now(),
        key: e.keyCode
      };
      this.currentSprite = "idle";
      this.spriteIndex = 0;
    }
  }, {
    key: "_jump",
    value: function _jump() {
      if (this.IsJumping() || this.IsAttacking()) return;
      this.previousSprite = this._getCurrentSprite();
      this.currentSprite = "jump";
      this.spriteIndex = 0;
      //this.currentPosition.y -= this._getCurrentSprite().height / 2;
      this.sprites.jump.speed = this.previousSprite.speed;
    }
  }, {
    key: "_attack",
    value: function _attack() {
      if (this.IsMoving() || this.IsAttacking()) return;
      this.previousSprite = this.sprites.idle;
      this.currentSprite = "attack";
      this.spriteIndex = 0;
    }
  }, {
    key: "_returnToPreviousSprite",
    value: function _returnToPreviousSprite() {
      this.currentPosition.y = window.innerHeight - 215;
      this.currentSprite = this.previousSprite.name;
    }
  }, {
    key: "_getCurrentSprite",
    value: function _getCurrentSprite() {
      return this.sprites[this.currentSprite];
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      window.addEventListener("keydown", this.move, false);
      window.addEventListener("keyup", this._idle);
    }
  }, {
    key: "_setSprites",
    value: function _setSprites() {
      var path = "assets/sprites/loser";
      this.sprites = {
        walk: {
          url: path + "/walk.png",
          speed: 200,
          width: 55,
          height: 129,
          name: 'walk'
        },
        idle: {
          url: path + "/idle.png",
          width: 49,
          height: 125,
          speed: 0,
          name: 'idle'
        },
        run: {
          url: path + "/run.png",
          speed: 600,
          width: 112,
          height: 128,
          name: 'run'
        },
        jump: {
          url: path + "/jump.png",
          width: 91,
          height: 128,
          name: 'jump'
        },
        attack: {
          url: path + "/attack.png",
          width: 106,
          height: 128,
          name: 'attack'
        }
      };
    }
  }, {
    key: "Render",
    value: function Render() {
      var now = Date.now();
      if (now - this.lastFrameChange > 50) {
        this.lastFrameChange = now;

        if ((this.IsJumping() || this.IsAttacking()) && this.spriteIndex == 9) {
          this._returnToPreviousSprite();
        }
        this.spriteIndex = (this.spriteIndex + 1) % 10;
      }

      var sprite = this.sprites[this.currentSprite];
      if (this.direction == _Constants.DIRECTION.LEFT) {
        this.context.save();
        //MAGIC NUMBER OF THE DEATH
        this.context.translate(sprite.width + 2 * this.currentPosition.x, 0);
        this.context.scale(-1, 1);
      }
      this.context.drawImage(Resources.get(sprite.url), sprite.width * this.spriteIndex, 0, sprite.width, sprite.height, this.currentPosition.x, this.currentPosition.y, sprite.width, sprite.height);
      if (this.direction == _Constants.DIRECTION.LEFT) this.context.restore();
    }
  }]);
  return Loser;
}();

exports.default = Loser;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Resources.js
 * This is simply an image loading utility. It eases the process of loading
 * image files so that they can be used within your game. It also includes
 * a simple "caching" layer so it will reuse cached images if you attempt
 * to load the same image multiple times.
 */
(function () {
    var resourceCache = {};
    var loading = [];
    var readyCallbacks = [];

    /* This is the publicly accessible image loading function. It accepts
     * an array of strings pointing to image files or a string for a single
     * image. It will then call our private image loading function accordingly.
     */
    function load(urlOrArr) {
        if (urlOrArr instanceof Array) {
            /* If the developer passed in an array of images
             * loop through each value and call our image
             * loader on that image file
             */
            urlOrArr.forEach(function (url) {
                _load(url);
            });
        } else {
            /* The developer did not pass an array to this function,
             * assume the value is a string and call our image loader
             * directly.
             */
            _load(urlOrArr);
        }
    }

    /* This is our private image loader function, it is
     * called by the public image loader function.
     */
    function _load(url) {
        if (resourceCache[url]) {
            /* If this URL has been previously loaded it will exist within
             * our resourceCache array. Just return that image rather
             * re-loading the image.
             */
            return resourceCache[url];
        } else {
            /* This URL has not been previously loaded and is not present
             * within our cache; we'll need to load this image.
             */
            var img = new Image();
            img.onload = function () {
                /* Once our image has properly loaded, add it to our cache
                 * so that we can simply return this image if the developer
                 * attempts to load this file in the future.
                 */
                resourceCache[url] = img;

                /* Once the image is actually loaded and properly cached,
                 * call all of the onReady() callbacks we have defined.
                 */
                if (isReady()) {
                    readyCallbacks.forEach(function (func) {
                        func();
                    });
                }
            };

            /* Set the initial cache value to false, this will change when
             * the image's onload event handler is called. Finally, point
             * the image's src attribute to the passed in URL.
             */
            resourceCache[url] = false;
            img.src = url;
        }
    }

    /* This is used by developers to grab references to images they know
     * have been previously loaded. If an image is cached, this functions
     * the same as calling load() on that URL.
     */
    function get(url) {
        return resourceCache[url];
    }

    /* This function determines if all of the images that have been requested
     * for loading have in fact been properly loaded.
     */
    function isReady() {
        var ready = true;
        for (var k in resourceCache) {
            if (resourceCache.hasOwnProperty(k) && !resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }

    /* This function will add a function to the callback stack that is called
     * when all requested images are properly loaded.
     */
    function onReady(func) {
        readyCallbacks.push(func);
    }

    /* This object defines the publicly accessible functions available to
     * developers by creating a global Resources object.
     */
    window.Resources = {
        load: load,
        get: get,
        onReady: onReady,
        isReady: isReady
    };
})();

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var DIRECTION = exports.DIRECTION = {
	UP: 0,
	DOWN: 1,
	LEFT: 2,
	RIGHT: 3
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Ads = __webpack_require__(26);

var _Ads2 = _interopRequireDefault(_Ads);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FallingStuff = function () {
  function FallingStuff(context, HitOrMissCallback) {
    (0, _classCallCheck3.default)(this, FallingStuff);

    this.context = context;
    this.HitOrMissCallback = HitOrMissCallback;
    this.ads = [];
    this.lastAdTime = Date.now();
  }

  (0, _createClass3.default)(FallingStuff, [{
    key: 'Update',
    value: function Update(dt) {
      var now = Date.now();
      if (now - this.lastAdTime > 2500) {
        this.ads.push(new _Ads2.default(this.context));
        this.lastAdTime = now;
      }
      for (var i = 0; i < this.ads.length; i++) {
        if (this.ads[i].position.y > window.innerHeight) {
          this.ads.splice(i, 1);
          this.HitOrMissCallback(false);
        } else {
          this.ads[i].Update(dt);
        }
      }
    }
  }, {
    key: 'Render',
    value: function Render(dt) {
      for (var i = 0; i < this.ads.length; i++) {
        this.ads[i].Render();
      }
    }
  }, {
    key: 'CheckCollisions',
    value: function CheckCollisions(playerPosition, playerSprite) {
      var playerRectangle = {
        x1: playerPosition.x,
        y1: playerPosition.y,
        x2: playerPosition.x + playerSprite.width,
        y2: playerPosition.y + playerSprite.height
      };
      for (var i = 0; i < this.ads.length; i++) {
        var ad = this.ads[i];
        var adRectangle = {
          x1: ad.position.x,
          y1: ad.position.y,
          x2: ad.position.x + ad.size.width,
          y2: ad.position.y + ad.size.height
        };
        if (this.RectangleIntersection(playerRectangle, adRectangle)) {
          this.ads.splice(i, 1);
          this.HitOrMissCallback(true);
          i--;
        }
      }
    }
  }, {
    key: 'RectangleIntersection',
    value: function RectangleIntersection(rect1, rect2) {
      if (rect1.x1 < rect2.x2 && rect1.x2 > rect2.x1 && rect1.y1 < rect2.y2 && rect1.y2 > rect2.y1) {
        return true;
      }
      return false;
    }
  }]);
  return FallingStuff;
}();

exports.default = FallingStuff;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ads = function () {
  function Ads(context) {
    (0, _classCallCheck3.default)(this, Ads);

    this.context = context;
    this.sprite = 'assets/sprites/Ad.PNG';
    this.speed = 600;
    this.position = {
      x: Math.random() * window.innerWidth,
      y: -200
    };
    this.size = {
      height: 197,
      width: 253
    };
    this.Render = this.Render.bind(this);
  }

  (0, _createClass3.default)(Ads, [{
    key: 'Render',
    value: function Render() {
      this.context.drawImage(Resources.get(this.sprite), this.position.x, this.position.y);
    }
  }, {
    key: 'Update',
    value: function Update(dt) {
      this.position.y += this.speed * dt;
    }
  }]);
  return Ads;
}();

exports.default = Ads;

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map