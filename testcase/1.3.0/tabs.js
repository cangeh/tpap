var Tabs = KISSY.Tabs;//Tabs组件默认在KISSY的命名空间下
var tabs = new Tabs({ srcNode: KISSY.DOM.get('.ks-tabs') }); 
tabs.render();

//测试添加item
function addItem() {
    tabs.addItem({ title: 'title_addItem111', content: '<div>content_addItem111</div>' });
    tabs.addItem({ title: 'title_addItem222', content: '<div>content_addItem222</div>' });
    tabs.addItem({ title: 'title_addItem333', content: '<div>content_addItem333</div>' });
    tabs.addItem({ title: 'title_addItem444', content: '<div>content_addItem444</div>' });
    tabs.addItem({ title: 'title_addItem555', content: '<div>content_addItem555</div>' });
    tabs.addItem({ title: 'title_addItem555', content: '<div>content_addItem555</div>' });
}

//测试item
function removeItemAt() {
    tabs.removeItemAt(1, true);
}

//测试removeItemByTab
function removeItemByTab() {
    tabs.removeItemByTab(tabs.getTabs()[3], true);
}

//测试removeItemByPanel
function removeItemByPanel() {
    tabs.removeItemByPanel(tabs.getPanels()[2], true);
}

//测试getSelectedTab
function getSelectedTab() {
    tabs.removeItemByTab(tabs.getSelectedTab(), true);
    //KISSY.alert('getSelectedTab:' + tabs.getSelectedTab());
}

//测试getSelectedPanel
function getSelectedPanel() {
    tabs.removeItemByPanel(tabs.getSelectedPanel(), true);
    //KISSY.alert('getSelectedPanel:' + tabs.getSelectedPanel());
}

//测试getTabs
function getTabs() {
    KISSY.alert('getTabs:' + tabs.getTabs().length);
}

//测试getPanels
function getPanels() {
    KISSY.alert('getPanels:' + tabs.getPanels().length);
}

//测试setSelectedTab
function setSelectedTab() {
    tabs.setSelectedTab(tabs.getTabs()[3]);
}

//测试setSelectedPanel
function setSelectedPanel() {
    tabs.setSelectedPanel(tabs.getPanels()[2]);
}

//开始测试
function startTest() {
    addItem();
//    removeItemAt();
//    removeItemByTab();
//    removeItemByPanel();
//    getSelectedTab();
//    getSelectedPanel();
//    getTabs();
//    getPanels();
//    setSelectedTab();
//    setSelectedPanel();
}

startTest();

