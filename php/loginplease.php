<?php
	session_start();
	//비회원 방지
	if(!isset($_SESSION['~~~~'])){
		echo "<script>alert('로그인이 필요한 서비스입니다.');</script>";
		echo "<meta http-equiv='refresh' content='0;url=~~~~.php' >";
	}
?>