'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = require('./Component.js');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 点赞类
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * 继承父类
 */

var Support = function (_Component) {
	_inherits(Support, _Component);

	function Support(id, event, num) {
		_classCallCheck(this, Support);

		var _this = _possibleConstructorReturn(this, (Support.__proto__ || Object.getPrototypeOf(Support)).call(this, id, event));
		/**
   * 调用父类的构造函数
   */


		_this.num = num;
		_this.span = _this.element.getElementsByClassName('show-num')[0];
		return _this;
	}
	/**
  * 重写事件执行方法
  */


	_createClass(Support, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			this.num = add(this.num);
			this.span.style.opacity = '1';
			this.span.style.top = '-26px';
			setTimeout(function () {
				_this2.span.style.opacity = '0';
				_this2.span.style.top = '-10px';
			}, 500);
		}
	}]);

	return Support;
}(_Component3.default);

exports.default = Support;