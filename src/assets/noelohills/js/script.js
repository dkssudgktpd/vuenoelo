// 멀티미디어 요소 로딩 전 실행
$(document).ready(function () {
  // 모바일메뉴
  let mb_div = $('.mb-div');
  // 모바일 버튼 기능
  let mb_bt = $('.mb-bt');
  mb_bt.click(function () {
    mb_div.show();
  });

  let mb_close = $('.mb-close');
  mb_close.click(function () {
    mb_div.hide();
  });
  // 배경누르면 닫기
  mb_div.click(function () {
    mb_div.hide();
  });

  // 신호 전달 막기
  $('.mb-bg').click(function(){
    event.stopPropagation();
  });
  // 모바일 메뉴 기능
  let mb_menu_li = $('.mb-menu > li');
  $.each(mb_menu_li, function (index, item) {
    // mb-mainmenu를 찾아서 보관
    let temp = $(this).find('.mb-mainmenu');
    temp.click(function (){
      // 펼쳐져 있는 경우 true, 아니면 false
      let result = temp.hasClass('mb-mainmenu-open');
      if (result == true) {
        // 펼쳐진 클래스를 가진 경우
        temp.removeClass('mb-mainmenu-open');
        // 펼쳐진 서브메뉴 닫기
        mb_menu_li.find('.mb-submenu').hide();
        
      } else {
        // 모든 클라스 일단 제거
        mb_menu_li.find('.mb-mainmenu').removeClass('mb-mainmenu-open');
        // 모든 펼쳐진 서브메뉴 닫기
        mb_menu_li.find('.mb-submenu').hide();
        // 펼쳐진 클래스가 없는 경우
        temp.addClass('mb-mainmenu-open');
        // 서브메뉴 펼치기
        mb_menu_li.eq(index).find('.mb-submenu').show();
      }
    });


  });
  // window 너비 체크
  $(window).resize(function(){
    let temp = $(window).width();
    if(temp >= 880) {
      mb_div.hide();
      $('.mb-mainmenu').removeClass('mb-mainmenu-open');
      $('.mb-submenu').hide();
    };
  });

});
// 멀티미디어 요소 로딩 완료 후 실행
window.onload = function () {
  // 스크롤시 header 고정
  let header = $('.header');
  let wrap = $('.wrap');
  // 사라지는 시점 px 값
  let fixY = $('.banner').height();
  $(window).scroll(function(){
    // 스크롤바의 세로상단 px 값
    let temp = $(window).scrollTop();
    // 50은 배너의 높이값
    if(temp > fixY){
    header.addClass('header-fix');
    wrap.addClass('wrap-fix');
    }else{
      header.removeClass('header-fix');
      wrap.removeClass('wrap-fix')
      
    }
  });

  // 상단 배너 닫기 기능
  let banner_close = $('.banner-close');
  banner_close.click(function(){
    fixY = 0;
    $('.banner').slideUp(300);
  });
  // 상단 배너 슬라이드
  new Swiper('.sw-banner', {
    loop: true,
    // fade 효과 (swiper demo 확인)
    effect: "fade",
    // 페이지네이션(swiper demo 확인 click 가능)
    pagination: {
      el: ".sw-banner-pg",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // touchmove 제거
    allowTouchMove: false,
  });

  // visual 슬라이드
  new Swiper('.sw-visual', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 2000,
    pagination: {
      el: ".sw-visual-pg"
    }

  });

};