<?php
	$host ="localhost";
	//호스트
	$user = "";
	//사용자 이름
	$pw = "";
	//사용자 비밀번호
	$dbname = "";
	//사용하는 DB이름
	$connect = new mysqli($host,$user,$pw,$dbname);
	
	$connect->set_charset("utf8");
	//utf8 설정

	mysqli_close($connect);

	//사용한다음에는 다시 닫아주자
?>
