/*! caja-kissy 2013-09-12 */
(function(){var t=KISSY,n="r4000",e=location&&-1!==(location.search||"").indexOf("caja-debug")?"http://assets.daily.taobao.net/apps/taesite/balcony/core/":"http://a.tbcdn.cn/apps/taesite/balcony/core/",r=e+n+"/caja/",o="J_TScriptedModule",i={},a={};a.addModsCajoledJS=function(n,e){2>arguments.length||t.isString(n)&&(i[n]=i[n]||";"+e+";")},a.getModsCajoledJS=function(t){return t?i[t]?i[t]:null:null},a.runScriptedMods=function(n,e){var r=KISSY.DOM,a=r.query("."+o);if(a){var s=[];t.each(e,function(t){s.push(t(n))});var u=t.isFunction(window.getCajaExposed)?window.getCajaExposed(n,cajaAFTB):{};t.each(a,function(e){var o=r.attr(e,"data-componentid");if(o){var a=i[o];void 0!==a&&n.makeES5Frame(e,{rewrite:cajaAFTB.rewriteURL},function(o){var i=n.tame(n.markFunction(function(n,e,r){return t.log(n,e,r),!0}));r.attr(o.iframe,"data-modulename",r.attr(o.div,"data-componentid"));var c={},p={};t.each(s,function(n){var r=n({frame:o,mod:e});!0===r.kissy?(t.mix(c,r),r.kissy=void 0):t.mix(p,r)});var d=o.contentCajoled("",a),l={KISSY:n.tame(c),onerror:i};l=t.mix(u,l),l=t.mix(l,p),d.run(l,function(){})})}})}},a.setup=function(t){caja.configure({cajaServer:r,debug:location&&-1!==(location.search||"").indexOf("caja-debug")},function(n){a.runScriptedMods(n,t)})},a.registerCajoledMods=function(t,n){a.addModsCajoledJS(t,n)},window.TShop||(window.TShop={}),window.TShop.Balcony=a})();