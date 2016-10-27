/**
 * 组件类
 */
class Component{
	/**
	 * 构造函数
	 */
	constructor(id,event){
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
	bind(){
		const _this = this;
		this.element.addEventListener(this.event,()=>{
			this.render();
		});
	}
	/**
	 * 事件执行方法
	 */
	render(){

	}
}
export default Component;

