<?php
    include $_SERVER['DOCUMENT_ROOT']."/common/db_connect.php";

    $cno = $_POST['cno'];

    $query = " delete from gogung_tour_comment where cno = '$cno' ";
    $result = mysqli_query($connect,$query);
    if($result == 1) $msg="삭제 완료~";
	else $msg="삭제 실패~";

    echo $msg;
?>