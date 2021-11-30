<?php
    include_once $_SERVER['DOCUMENT_ROOT'].'/common/dbconn.php';
    //  =
    // $host = "localhost";
    // $user = "swarm";
    // $pw = "1234";
    // $dbname = "swarm";
    // $dbconn = new mysqli($host,$user,$pw,$dbname);

    $id = $_POST['m_id'];
    // 가져온 데이터가 sql 인젝션 공격일 경우를 대비
    $id = mysqli_real_escape_string($dbconn,$id);
    // 만약 $id에 ' 나 " 가 있으면 방어
?>