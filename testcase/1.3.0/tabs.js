var Tabs = KISSY.Tabs;//Tabs◊Èº˛ƒ¨»œ‘⁄KISSYµƒ√¸√˚ø’º‰œ¬
var tabs = new Tabs({ srcNode: KISSY.DOM.get('.ks-tabs') }); 
tabs.render();

//≤‚ ‘ÃÌº”item
function addItem() {
    tabs.addItem({ title: 'title_addItem111', content: '<div>content_addItem111</div>' });
    tabs.addItem({ title: 'title_addItem222', content: '<div>content_addItem222</div>' });
    tabs.addItem({ title: 'title_addItem333', content: '<div>content_addItem333</div>' });
    tabs.addItem({ title: 'title_addItem444', content: '<div>content_addItem444</div>' });
    tabs.addItem({ title: 'title_addItem555', content: '<div>content_addItem555</div>' });
    tabs.addItem({ title: 'title_addItem555', content: '<div>content_addItem555</div>' });
}

//≤‚ ‘item
function removeItemAt() {
    tabs.removeItemAt(1, true);
}

//≤‚ ‘removeItemByTab
function removeItemByTab() {
    tabs.removeItemByTab(tabs.getTabs()[3], true);
}

//≤‚ ‘removeItemByPanel
function removeItemByPanel() {
    tabs.removeItemByPanel(tabs.getPanels()[2], true);
}

//≤‚ ‘getSelectedTab
function getSelectedTab() {
    tabs.removeItemByTab(tabs.getSelectedTab(), true);
    //KISSY.alert('getSelectedTab:' + tabs.getSelectedTab());
}

//≤‚ ‘getSelectedPanel
function getSelectedPanel() {
    tabs.removeItemByPanel(tabs.getSelectedPanel(), true);
    //KISSY.alert('getSelectedPanel:' + tabs.getSelectedPanel());
}

//≤‚ ‘getTabs
function getTabs() {
    KISSY.alert('getTabs:' + tabs.getTabs().length);
}

//≤‚ ‘getPanels
function getPanels() {
    KISSY.alert('getPanels:' + tabs.getPanels().length);
}

//≤‚ ‘setSelectedTab
function setSelectedTab() {
    tabs.setSelectedTab(tabs.getTabs()[3]);
}

//≤‚ ‘setSelectedPanel
function setSelectedPanel() {
    tabs.setSelectedPanel(tabs.getPanels()[2]);
}

//ø™ º≤‚ ‘
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

