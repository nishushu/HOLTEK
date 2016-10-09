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
	eval('layer=\'P'+n+'\'');

	//將 Tab 標籤樣式設成 Blur 型態
	var product_right=document.getElementById('product_right_title').getElementsByTagName('li');
	for (var i=0;i<product_right.length;i++){
		product_right[i].setAttribute('id',null);
		eval('document.getElementById(\'P'+(i+1)+'\').style.display=\'none\'')
	}

	//變更分頁標題樣式
	obj.parentNode.setAttribute('id','current_P');
	document.getElementById(layer).style.display='inline';

}