/*! caja-kissy 2013-09-11 */
KISSY.add("openjs/jquery/1.7/index",function(){function t(t){function e(){}function o(t){this.inner=n(t)}return o.prototype.add=function(){return arguments[0],this.inner.add(arguments),this},o.prototype.addClass=function(){return this.inner.addClass(arguments[0]),this},o.prototype.removeClass=function(){return this.inner.removeClass(arguments[0]),this},o.prototype.each=function(){var n=arguments[0];return this.inner.each(t.markFunction(function(t,o){n(t,e(o))})),this},t.markCtor(o),t.grantMethod(o,"addClass"),t.grantMethod(o,"removeClass"),t.grantMethod(o,"each"),function(n){return e=function(t){return n.frame.imports.tameNode___(t,!0)},{jQuery:t.tame(t.markFunction(function(){return new o(arguments[0])}))}}}var n=window.jQuery;return t});