<?php
	if($_SERVER['HTTP_REFERER'] == ''){
		echo "<script>alert('잘못된 접근입니다');</script>";
		echo "<script>document.location.href='~~~.php'</script>";
	}
	// HTTP_REFERER = 방문자 이전 사이트
?>
