<?php
//php 유용한 함수

// strpos 문자열 포함하고 있는지 확인하는 함수
if(strpos($target, '확인') != false){
	//$target 안에 '확인'이라는 글자 있음
}else{
	//$target 안에 '확인'이라는 글자 없음
}

if($result){
	//$result는 sql문 돌린거임
}else{
	echo "문제발생".mysqli_error($connect);
	//$connect는 연결한거임
	//mysql 에러출력한다고 생각하자
}


// php intval 문자를 정수로
$string = '0802';
// 문자 '0802'를
intval($string);
// 숫자 '802'로
?>
