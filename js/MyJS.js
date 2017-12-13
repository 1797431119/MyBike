var height1=100;
var height2=50;
var s1;
var s2;
var h=50;
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
/*function addSize(a){
	var li1=document.getElementById("li1");
	var li2=document.getElementById("li2");
	var li3=document.getElementById("li3");
	var time;
	var h;
	var w;
	if(a=="1"){
		w=li1.offsetWidth;
		h=li1.offsetHeight;
	}
	if(a=="2"){
		w=li2.offsetWidth;
		h=li2.offsetHeight;
	}
	if(a=="3"){
		w=li3.offsetWidth;
		h=li3.offsetHeight;
	}
	function add(){
		if(a=="1"){
			if(li1.offsetHeight<350){
				li1.style.width=w++ +"px";
				li1.style.height=h++ +"px";
				if(li2.offsetWidth>200){
					li2.style.width=200+"px";
					li2.style.height=300+"px";;
				}
				if(li3.offsetWidth>200){
					li3.style.width=200+"px";
					li3.style.height=300+"px";
				}
			}else{
				clearInterval(time);
			}
		}
		if(a=="2"){
			if(li2.offsetHeight<350){
				li2.style.width=w++ +"px";
				li2.style.height=h++ +"px";
				if(li1.offsetWidth>200){
					li1.style.width=200+"px";
					li1.style.height=300+"px";
				}
				if(li3.offsetWidth>200){
					li3.style.width=200+"px";
					li3.style.height=300 +"px";
				}
			}
			else{
				clearInterval(time);
			}
		}
		if(a=="3"){
			if(li3.offsetHeight<350){
				li3.style.width=w++ +"px";
				li3.style.height=h++ +"px";
				if(li2.offsetWidth>200){
					li2.style.width=200 +"px";
					li2.style.height=300 +"px";
				}
				if(li1.offsetWidth>200){
					li1.style.width=200 +"px";
					li1.style.height=300 +"px";
				}
			}
			else{
				clearInterval(time);
			}
		}
	}
	time=setInterval(add,10);
}
*/