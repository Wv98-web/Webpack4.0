// ES Moudule 模块引入方式 import
// CommonJS 模块引入规范  require("xx")
// CMD
// AMD

import './index.scss';
// import number from './number';
// import { add } from './math';
import _ from 'lodash';

/* var btn = document.createElement('button');
btn.innerHTML = '新增';
document.body.appendChild(btn);
btn.onclick = function () {
	var div = document.createElement('div');
	div.innerHTML = 'item';
	document.body.appendChild(div);
};

number(); // 修改不自动更新，刷新后更新

// 热模块更新html代码，针对比较特殊的文件
if (module.hot) {
	module.hot.accept('./number', () => {
		document.body.removeChild(document.getElementById('number'));
		number(); // 修改自动更新
	});
} */

// es6语法转换
// const arr = [new Promise(() => {}), new Promise(() => {})];
// arr.map(item => {
// 	console.log(item);
// });

// Tree Shaking 只支持ES Module模块引入方式 引入什么打包什么
// add(1, 2);

// Code splitting
// 文件加载引入lodash
// 同步代码分割 webpack配置文件中做optimization的配置
console.log(_.join(['a', 'b', 'c'], '+'));
// 异步代码分割 无需做任何配置，会自动进行代码分割，放置到新的文件中
// function getComponent() {
// 	return import('lodash').then(({ default: _ }) => {
// 		var element = document.createElement('div');
// 		element.innerHTML = _.join(['wu', 'wei'], '-');
// 		return element;
// 	});
// }

// getComponent().then(element => {
// 	document.body.appendChild(element);
// });
