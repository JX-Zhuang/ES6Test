/**
 * 点赞类
 */
import Component from './Component.js';
/**
 * 继承父类
 */
class Support extends Component{
	constructor(id,event,num){
		/**
		 * 调用父类的构造函数
		 */
		super(id,event);
		this.num = num;
		this.span = this.element.getElementsByClassName('show-num')[0];
	}
	/**
	 * 重写事件执行方法
	 */
	 render(){
	 	this.num = add(this.num);
	 	this.span.style.opacity='1';
	 	this.span.style.top='-26px';
	 	setTimeout(()=>{
	 		this.span.style.opacity='0';
	 		this.span.style.top='-10px';
	 	},500);
	 };
}
export default Support;