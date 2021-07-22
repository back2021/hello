function getToday(){
	var d = new Date();
	var s =
		dateZero(d.getFullYear(),4)+ '.'+
		dateZero(d.getMonth()+1,2)+ '.'+
		dateZero(d.getDate(),2);
		return s;
}

function dateZero(n, digits){
	var zero = '';
	n = n.toString();
	if (n.length < digits){
		for(i=0 i<digits - n.length; i++)
			zero += '0';
	}
	return zero + n;
}