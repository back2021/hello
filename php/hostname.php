<?php
	
	$hostname = $_SERVER['HTTP_HOST'];
	if($hostname == "도메인1.co.kr"){
		 echo "<script>location.href='./폴더명/1번index.php'</script>";
	}else if($hostname == "도메인2.kr"){
		echo "<script>location.href='./폴더명/2번index.php'</script>";
	}else if($hostname == "도메인3.kr"){
		echo "<script>location.href='./폴더명/3번index.php'</script>";
	}
	
?>