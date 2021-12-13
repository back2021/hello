<?php
	
	// api 이용할때 주로 사용함
	
	$url = "";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);               //URL 지정하기
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);    //요청 결과를 문자열로 반환 
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);      //connection timeout 10초 
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);   //원격 서버의 인증서가 유효한지 검사 안함
    
    $response = curl_exec($ch);
    curl_close($ch);
	
	// 정상적인 url을 입력했다면 답이 나오는데
	// 아마도 json 방식으로 출력 될듯
	// 그러면
	var_dump($response); //이걸로 출력 해보면 값이 다 튀어나옴
	// 그래서
    $json = json_decode($response, true);
	// 으로 디코드 해줘서 
	echo $json[0]; //이나
	echo $json['abc'];// 로
	//써먹으면 된다
?>