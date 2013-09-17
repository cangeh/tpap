/**
* @fileOverview Tabs组件的安全适配器
*/
KISSY.add(function (S, Tabs) {
    var DOM = S.DOM,
        Event = S.Event;

    /**
    * 提供一个init方法，名字任取，最后模块return即可。 用来初始化适配器
    * 初始化方法需要返回一个函数，用来为每个沙箱环境提供适配对象。
    * ps: 页面中可能会有多个安全沙箱环境。init方法内执行的可以理解为所有沙箱共享的一些内容对象，主要提供最原始的安全适配对象和方法。(执行一次,所有沙箱共享)
    *     init返回的函数可以理解是为每个沙箱提供的安全适配对象。(执行多次，每个沙箱对对象的操作不影响其他沙箱)
    *     总结：可以理解为KISSY在frameGroup初始化的时候是一个对象，然后会copy多份，分别放到不同的沙箱环境中去执行。每个copy相互之间不影响
    * @param frameGroup 页面中的沙箱环境，frame即为沙箱，frameGroup为沙箱组。沙箱的公共环境
    * @returns {Function} 工厂获取实际的适配对象
    */
    function init(frameGroup) {
        /**
        * 因为KISSY的组件构造函数只有一个，后面可能会对构造函数本身做修改
        * 所以这里可以写一个SafeConstruector，相当于继承KISSY的组件，并且显示的声明要开放哪些api
        */
        function SafeTabs(config) {
            this.inner = new Tabs(config);
        }

        SafeTabs.prototype.addItem = function (item) {
            item = cajaAFTB.untame(item);

            if ('function' == typeof (cajaAFTB.sanitizeHtml)) {
                item.title = cajaAFTB.sanitizeHtml(item.title);
                item.content = cajaAFTB.sanitizeHtml(item.content);
            }

            this.inner.addItem(item);
        };
        SafeTabs.prototype.removeItemAt = function (index, destroy) {
            this.inner.removeItemAt(index, destroy);
        };
        SafeTabs.prototype.removeItemByTab = function (tab, destroy) {
            this.inner.removeItemByTab(tab, destroy);
        };
        SafeTabs.prototype.removeItemByPanel = function (panel, destroy) {
            this.inner.removeItemByPanel(panel, destroy);
        };
        SafeTabs.prototype.getSelectedTab = function () {
            return cajaAFTB.tameNode(this.inner.getSelectedTab());
        };
        SafeTabs.prototype.getSelectedPanel = function () {
            return cajaAFTB.tameNode(this.inner.getSelectedPanel());
        };
        SafeTabs.prototype.getTabs = function () {
            var tabs = this.inner.getTabs(), items = new Array();

            for (var idx = 0; idx < tabs.length; idx++) {
                items.push(cajaAFTB.tameNode(tabs[idx]));
            }

            return items;
        };
        SafeTabs.prototype.getPanels = function () {
            var panels = this.inner.getPanels(), items = new Array();

            for (var idx = 0; idx < panels.length; idx++) {
                items.push(cajaAFTB.tameNode(panels[idx]));
            }

            return items;
        };
        SafeTabs.prototype.setSelectedTab = function (tab) {
            this.inner.setSelectedTab(tab);
        };
        SafeTabs.prototype.setSelectedPanel = function (panel) {
            this.inner.setSelectedPanel(panel);
        };
        SafeTabs.prototype.render = function () {
            this.inner.render();
        };

        //---- 组件是一个构造函数进行初始化的，需要markCtor标记一下，让caja容器认识
        frameGroup.markCtor(SafeTabs);

        //构造函数实例的方法，需要grantMethod ，加入白名单，没有加入白名单的不可以使用，caja容器不认识
        frameGroup.grantMethod(SafeTabs, "addItem");
        frameGroup.grantMethod(SafeTabs, "removeItemAt");
        frameGroup.grantMethod(SafeTabs, "removeItemByTab");
        frameGroup.grantMethod(SafeTabs, "removeItemByPanel");
        frameGroup.grantMethod(SafeTabs, "getSelectedTab");
        frameGroup.grantMethod(SafeTabs, "getSelectedPanel");
        frameGroup.grantMethod(SafeTabs, "getTabs");
        frameGroup.grantMethod(SafeTabs, "getPanels");
        frameGroup.grantMethod(SafeTabs, "setSelectedTab");
        frameGroup.grantMethod(SafeTabs, "setSelectedPanel");
        frameGroup.grantMethod(SafeTabs, "render");

        /**
        * @param context 上下文
        * @param context.mod 沙箱的模块范围，所有操作必须限定到模块范围之内去执行
        * @param context.frame 单个模块的沙箱
        * @return {Object} 实际的组件对象
        */
        return function (context) {

            //最终需要返回给
            return {
                Tabs: frameGroup.markFunction(function () {
                    var config = arguments[0];

                    if ('function' == typeof (cajaAFTB.sanitizeHtml)
                        && 'undefined' != typeof (config.items)) {
						
						config.items = cajaAFTB.untame(config.items);
                        for (var idx = 0; idx < config.items.length; idx++) {
                            config.items[idx].title = cajaAFTB.sanitizeHtml(config.items[idx].title);
                            config.items[idx].content = cajaAFTB.sanitizeHtml(config.items[idx].content);
                        }
                    }

                    return new SafeTabs(config);
                }),
                kissy: true
            }
        }
    }

    return init;

}, {
    requires: ['tabs', 'tabs/assets/dpl.css']
});