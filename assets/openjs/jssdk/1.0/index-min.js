/*! caja-kissy 2013-09-11 */
KISSY.add("openjs/jssdk/1.0/index",function(n){function t(t){function e(){function n(t){return t=cajaAFTB.untame(t),n.handle.call(this,t)}return n}return function(){return{TOP:t.tame({api:t.markFunction(function(){var e=n.makeArray(arguments);if(e.length>3){e[2]=cajaAFTB.untame(e[2]);var o=e[3];e[3]=t.markFunction(function(n){o.call(window.TOP,n)})}else e[0]=cajaAFTB.untame(e[0]);window.TOP?window.TOP.api.apply(this,e):n.log("TOP is not included(jssdk script not loaded)")}),auth:{getLoginStatus:t.markFunction(function(){TOP.auth.getLoginStatus.apply(this,arguments)}),getSession:t.markFunction(function(){return TOP.auth.getSession()}),getUser:t.markFunction(function(){return TOP.auth.getUser()}),isAuth:t.markFunction(function(){return TOP.auth.isAuth.apply(this,arguments)}),isLogin:t.markFunction(function(){return TOP.auth.isLogin.apply(this,arguments)})},ui:t.markFunction(function(){var t=n.makeArray(arguments);if("authbtn"==t[0]){t[1]=cajaAFTB.untame(t[1]);var o=e();o.handle=t[1].callback,t[1].callback=o}return TOP.ui(t[0],t[1])})})}}}return n.DOM,n.Event,t});