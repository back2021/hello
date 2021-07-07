$(function(){
	$(window).scroll(function () {
	     var quickHeight=$(document).scrollTop(); //스크롤 높이가 500 이상이면 나타나기
	     if (500 <= quickHeight ) {
	       $('.ac-sub-go-top').css('display','block');
	      }else {
	        $('.ac-sub-go-top').css('display','none');
	      }
	    });
	$('.ac-sub-go-top').click(function(){//위로가기 버튼을 클릭했을때
	      $('html, body').animate({
	        scrollTop: '0'
	      }, 800);
	    });
});//
