function chekEmpty(obj,msg){
	if(obj.value.trim() ==""){
		alert(msg);
		obj.focus();
		return false;
	}else{
		return true;
	}
}
