// ES Moudule 模块引入方式 import
// CommonJS 模块引入规范  require("xx")
// CMD
// AMD

// 热模块更新html代码，针对比较特殊的文件
// number();
// if (module.hot) {
// 	module.hot.accept('./number', () => {
// 		document.body.removeChild(document.getElementById('number'));
// 		number();
// 	});
// }

// Code splitting
// 文件加载引入lodash
// 同步代码分割 webpack配置文件中做optimization的配置

// 异步代码分割 无需做任何配置，会自动进行代码分割，放置到新的文件中
// function getComponent() {
// 	return import(/* webpackChunkName:"lodash" */ 'lodash').then(({ default: _ }) => {
// 		var element = document.createElement('div');
// 		element.innerHTML = _.join(['wu', 'wei'], '-');
// 		return element;
// 	});
// }

// getComponent().then(element => {
// 	document.body.appendChild(element);
// });

document.addEventListener('click', () => {
	import(/* webpackPrefetch: true */ './click.js').then(({ default: func }) => {
		func();
	});
});
