"use strict";

require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.json.stringify.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.number.constructor.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Router = /*#__PURE__*/function () {
  function Router() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "https://jsonplaceholder.typicode.com/users";
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "GET";
    _classCallCheck(this, Router);
    this.url = url;
    this.method = method;
  }
  _createClass(Router, [{
    key: "sendRequest",
    value: function sendRequest() {
      var _this = this;
      var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        console.log(_this.method);
        xhr.open(_this.method, _this.url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.responseType = 'json';
        xhr.onload = function () {
          if (xhr.status <= 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        };
        xhr.send(JSON.stringify(body));
      });
    }
  }]);
  return Router;
}();
var person = {
  name: "Vladimir",
  age: 65
};
var get = new Router();
var post = new Router('https://jsonplaceholder.typicode.com/users', 'POST');
get.sendRequest().then(function (response) {
  console.log(response);
});
post.sendRequest(person).then(function (response) {
  console.log(response);
});