// ES Moudule 模块引入方式
// CommonJS 模块引入规范
// CMD
// AMD

// webpack 模块打包工具
// import avatar from "./1.jpg";
// import style from "./index.scss";
// import createAvatar from "./createAvatar";

// createAvatar();

// var img = new Image();
// img.src = avatar;
// img.classList.add(style.avatar);

import "./index.scss";
import "./font/iconfont.css";

var root = document.getElementById("root");
// root.append(img);

root.innerHTML = '<div class="iconfont icon-pic-fill"></div>';
