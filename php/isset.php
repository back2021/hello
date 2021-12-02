<?php
	
	// isset 함수를 이용해서 post 방식으로 data 가 정의되었는지 확인 가능하다
    if(isset($_POST['data'])){
        $current = $_POST['data'];
    }else {
        $current = 0;
    }

?>