<?php
    include $_SERVER['DOCUMENT_ROOT']."/common/db_connect.php";
    //글 번호와 댓글 내용을 요청한다
    $tno = $_POST["tno"];
    $comment = $_POST["comment"];
    // 세션에서 글쓴이(아이디)를 요청한다
    session_start();
    $writer = $_SESSION['memberid'];
    // 댓글 테이블에 넣기위해 쿼리문을 작성한다

    $query = " insert into gogung_tour_comment(writer, comment, tno) ".
            " values('$writer', '$comment', '$tno') ";
    $result =  mysqli_query($connect,$query);

    if($result == 1) $msg ="등록 성공~";
    else $msg ="등록 실패~";
    // 댓글 등록 성공 실패 여부를 알려준다
    echo $msg;
?>
