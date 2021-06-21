$(function(){
    // 현재 페이지 위치를 스플릿(/)으로 자르면
    // ex) ["http:", "", "localhost", "sayhello", "sayhello.php"] 이렇게 나누어 진다
    var linkpage = document.location.href.split("/");
    // 나누어서 담겨진 링크에 4번째(0,1,2,'3',4 ...) "sayhello" 까지의 번호를 담는다
    var linkcount = document.location.href.indexOf(linkpage[3]);
    // 현재 페이지를 위 번호 에서 끝까지를 잘라서 담는다
    var link = document.location.href.substring(linkcount);

    // 로그인 페이지로 가는 버튼에 넣어준다
    var loginbtn = "/login/login.php?link="+link;
    $(".gologinpage").attr("href",loginbtn);
});