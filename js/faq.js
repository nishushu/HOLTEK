// JavaScript Document
function clearLinkDot() {
	var i, a, main;
	for(i=0; (a = document.getElementsByTagName("a")[i]); i++) {
		if(a.getAttribute("onFocus")==null) {
			a.setAttribute("onFocus","this.blur();");
		}else{
			a.setAttribute("onFocus",a.getAttribute("onFocus")+";this.blur();");
		}
		a.setAttribute("hideFocus","hidefocus");
	}
}

function loadTab(obj,n){
	var layer;
	eval('layer=\'S'+n+'\'');

	//將 Tab 標籤樣式設成 Blur 型態
	var menuTab_title=document.getElementById('menuTab_title').getElementsByTagName('li');
	for (var i=0;i<menuTab_title.length;i++){
		menuTab_title[i].setAttribute('id',null);
		eval('document.getElementById(\'S'+(i+1)+'\').style.display=\'none\'')
	}

	//變更分頁標題樣式
	obj.parentNode.setAttribute('id','current');
	document.getElementById(layer).style.display='inline';

}