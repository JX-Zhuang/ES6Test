"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 组件类
 */

var Component = function () {
	/**
  * 构造函数
  */

	function Component(id, event) {
		_classCallCheck(this, Component);

		/**
   * 页面元素
   */
		this.element = document.getElementById(id);
		/**
   * 事件
   */
		this.event = event;
	}
	/**
  * 绑定事件
  */


	_createClass(Component, [{
		key: "bind",
		value: function bind() {
			var _this2 = this;

			var _this = this;
			this.element.addEventListener(this.event, function () {
				_this2.render();
			});
		}
		/**
   * 事件执行方法
   */

	}, {
		key: "render",
		value: function render() {}
	}]);

	return Component;
}();

exports.default = Component;