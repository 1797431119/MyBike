var height1=100;
var height2=50;
var s1;
var s2;
function addHei(){
	var userDiv=document.getElementById("user_login");
	var manaDiv=document.getElementById("mana_login");
	if(height1<=100){
		userDiv.style.height=height1++ +"px";
		manaDiv.style.height=height2-- +"px";
		userDiv.style.lineHeight=height1-1+"px";
		manaDiv.style.lineHeight=height2+1+"px";
	}else{
		clearInterval(s1);
	}
}
function delHei(){
	var userDiv=document.getElementById("user_login");
	var manaDiv=document.getElementById("mana_login");
	if(height2<=100){
		userDiv.style.height=height1-- +"px";
		manaDiv.style.height=height2++ +"px";
		userDiv.style.lineHeight=height1+1+"px";
		manaDiv.style.lineHeight=height2-1+"px";
	}else{
		clearInterval(s2);
	}
}
function addHei1(){
	var userDiv=document.getElementById("user_login");
	var manaDiv=document.getElementById("mana_login");
	clearInterval(s2);
	s1=setInterval("addHei()",2);
	userDiv.style.backgroundColor="#EFFAFF";
	manaDiv.style.backgroundColor="#FDFDFD";
	userDiv.style.fontWeight="bold";
	manaDiv.style.fontWeight="normal";
}
function addHei2(){
	var userDiv=document.getElementById("user_login");
	var manaDiv=document.getElementById("mana_login");
	clearInterval(s1);
	s2=setInterval("delHei()",2);
	userDiv.style.backgroundColor="#FDFDFD";
	manaDiv.style.backgroundColor="#EFFAFF";
	userDiv.style.fontWeight="normal";
	manaDiv.style.fontWeight="bold";
}
