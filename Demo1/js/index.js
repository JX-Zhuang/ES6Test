'use strict';

var _Support = require('./Support.js');

var _Support2 = _interopRequireDefault(_Support);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.$ = {};
$.support = function (id, event, num) {
	return new _Support2.default(id, event, num);
};
var support = $.support('oDiv', 'click', 0);
support.bind();