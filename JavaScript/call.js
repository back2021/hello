function phone_format() {
		var num = $("#phone").val(); 
		var phone_num = num.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3"); 
		$("#phone").val(phone_num); 
		$("#mobile1").val(num.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1")); 
		$("#mobile2").val(num.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$2")); 
		$("#mobile3").val(num.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$3")); 
	}
	function phoneCheck(type) { 
		var phoneNum1 = $("#" + type + "1").val(); 
		var phoneNum2 = $("#" + type + "2").val(); 
		var phoneNum3 = $("#" + type + "3").val(); 
		var phoneNumber = phoneNum1 + "-" + phoneNum2 + "-" + phoneNum3; 
		var regExp = /(01[0|1|6|9|7])[-](\d{3}|\d{4})[-](\d{4}$)/g; 
		var result = regExp.exec(phoneNumber); 
		if(result) return true; else return false; 
   }
   
    <input type="tel" name="phone" id="phone" value="${mvo.phone}" placeholder=" 하이픈(-) 없이 입력해주세요 ">
		<input type="hidden" name="phone1" id="mobile1"><input type="hidden" name="phone2" id="mobile2"><input type="hidden" name="phone3" id="mobile3">
    
//    위에있는 인풋창에 전화번호를 하이픈 없이 입력하면
//    자동으로 하이픈이 들어가고
//    3가지로 쪼개져서 인풋히든으로 들어간다
