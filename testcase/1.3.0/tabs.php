<!--ҳͷ������Դ����-->
<? include("../common/head.php");?>

<!--
    ��Ҫ���Ե�dom�ṹ��ע�⣬�����<div class="J_TScriptedModule" data-componentid="uniqueSign"> ��class��Ϊ���Բ����޸�
    �û���javascript������ֻ�������õ����dom���棬������"Խ��"
-->
<div class="J_TScriptedModule" data-componentid="uniqueSign">
    <input type="text" name="tabs1" class="tabs" />
	<!--<script type="text/javascript" src="http://a.tbcdn.cn/s/kissy/1.3.0/tabs.js?t=20130621173819"></script>-->
	<!--
	KISSY Tabs ֧�����ָ�ʽ��top(default),left,bottom,left
	ֻҪ new ʱ�����»��� markup ��ָ����ͬ�� class ���ɡ�
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

<!--ģ���ʼ���İ����ã�������Ϥ��-->
<script type="text/javascript">

     cajaConfig={//����������Ҫ�����ģ�����ƣ����ᱻuse��
         modules:"openjs/kissy/1.3.0/core,openjs/kissy/1.3.0/tabs"
     }

</script>

<!--���Դ���-->
<script type="text/javascript">

//(new KISSY.Tabs({srcNode: KISSY.one(".ks-tabs")})).render();
/**
KISSY.use('tabs',function(S,Tabs){
    // use Tabs
	(new Tabs({srcNode: S.one(".ks-tabs")})).render();
});
*/
</script>

<!--�����ǽ��Լ���js�÷���˱���һ�£������·���˵�php·�����Լ���js���ɣ�ע��·��-->
<?
    $jsurl="testcase/1.3.0/tabs.js";//ע��·��
    $jsservice="../common/cajoled_service.php";//ע��·��
    include("../common/foot.php");//����foot
?>