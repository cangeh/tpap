<!--页头公共资源引入-->
<? include("../common/head.php");?>

<!--
    需要测试的dom结构，注意，最外层<div class="J_TScriptedModule" data-componentid="uniqueSign"> 的class和为属性不可修改
    用户的javascript理论上只可以作用到这个dom下面，不可以"越界"
-->
<div class="J_TScriptedModule" data-componentid="uniqueSign">
    <input type="text" name="tabs1" class="tabs" />
	<!--<script type="text/javascript" src="http://a.tbcdn.cn/s/kissy/1.3.0/tabs.js?t=20130621173819"></script>-->
	<!--
	KISSY Tabs 支持四种格式：top(default),left,bottom,left
	只要 new 时配置下或者 markup 中指定不同的 class 即可。
	-->
	<div class="ks-tabs ks-tabs-top">
		<div class="ks-tabs-bar">
			<div class="ks-tabs-tab ks-button ks-tabs-tab-selected">Section 1</div>
			<div class="ks-tabs-tab ks-button">Section 2</div>
			<div class="ks-tabs-tab ks-button">Section 3</div>
		</div>
		<div class="ks-tabs-body">
			<div class="ks-tabs-panel ks-tabs-panel-selected">
				<p>I'm in Section 1.</p>
			</div>
			<div class="ks-tabs-panel">
				<p>Howdy, I'm in Section 2.</p>
			</div>
			<div class="ks-tabs-panel">
				<p>What up girl, this is Section 3.</p>
			</div>
		</div>
	</div>
	
</div>

<!--模块初始化的包配置，都很熟悉了-->
<script type="text/javascript">

     cajaConfig={//配置下你需要引入的模块名称，最后会被use到
         modules:"openjs/kissy/1.3.0/core,openjs/kissy/1.3.0/tabs"
     }

</script>

<!--测试代码-->
<script type="text/javascript">

//(new KISSY.Tabs({srcNode: KISSY.one(".ks-tabs")})).render();
/**
KISSY.use('tabs',function(S,Tabs){
    // use Tabs
	(new Tabs({srcNode: S.one(".ks-tabs")})).render();
});
*/
</script>

<!--这里是将自己的js让服务端编译一下，配置下服务端的php路径和自己的js即可，注意路径-->
<?
    $jsurl="testcase/1.3.0/tabs.js";//注意路径
    $jsservice="../common/cajoled_service.php";//注意路径
    include("../common/foot.php");//引入foot
?>