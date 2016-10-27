import Support from './Support.js';
window.$={};
$.support = function  (id,event,num) {
	return new Support(id,event,num);
}
let support = $.support('oDiv', 'click', 0);
support.bind();