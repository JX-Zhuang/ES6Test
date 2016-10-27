describe('测试',function () {
	// it('反转字符串测试',function(){
	// 	expect('12345').toEqual(reserve('54321'));
	// });
	it('格式化时间',function(){
		expect('yyyy-MM-dd hh:mm:ss','1476755781').toEqual(timeFormat('2016-10-18 09:56:21'));
	})
})