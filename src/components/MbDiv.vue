<template>
  <!-- 모바일 메뉴 -->
  <div class="mb-div">
    <div class="mb-bg">
      <div class="mb-top">
        <span class="mb-top-txt">로그인이 필요합니다.</span>
        <a href="#" class="login">LOGIN</a>
        <button class="mb-close"></button>
      </div>
      <div class="mb-wrap">
        <ul class="mb-menu">
          <li v-for="(item,index) in mbMenu" :key="index">
            <span class="mb-mainmenu" v-if="item.menuType == 'S'">{{item.mainText}}</span>
            <a :href="item.mainLink" class="mb-mainmenu" v-if="item.menuType == 'A'">{{item.mainText}}</a>
            <ul class="mb-submenu" v-if="item.menuType == 'S'">
              <li v-for="(subitem,subindex) in item.subArr" :key="subindex">
                <a :href="subitem.sublink">{{subitem.subtitle}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { onUpdated,computed } from "vue";
  import $ from 'jquery';
  import {useStore} from 'vuex'
  export default {
    setup() {
      // vuex의 기능을 사용하기위해 참조 객체를 만듬
      // 현재는 store 변수를 통해서 접근해 기능을 실행
      const store = useStore();
      // store의 state(데이터)는 수시로 변경되므로 computed로 감시한다.
      const mbMenu = computed(()=> store.getters.getMbData)
      // 화면에 html의 구성이 완료되면
      onUpdated(() => {
        // 모바일메뉴
        let mb_div = $('.mb-div');

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
        $('.mb-bg').click(function () {
          event.stopPropagation();
        });
        // 모바일 메뉴 기능
        let mb_menu_li = $('.mb-menu > li');
        $.each(mb_menu_li, function (index) {
          // mb-mainmenu를 찾아서 보관
          let temp = $(this).find('.mb-mainmenu');
          temp.click(function () {
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
        $(window).resize(function () {
          let temp = $(window).width();
          if (temp >= 880) {
            mb_div.hide();
            $('.mb-mainmenu').removeClass('mb-mainmenu-open');
            $('.mb-submenu').hide();
          }
        });


      });


      return {
        mbMenu
      }
    }
  }
</script>

<style>
  /* 모바일 메뉴 */
  .mb-div {
    position: fixed;
    left: 0;
    top: 0;
    display: none;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 99999;
    padding-left: 30px;
  }

  .mb-div::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 380px;
    height: 100%;
    background-color: #fff;
  }

  .mb-top {
    position: relative;
    display: block;
    width: 320px;
    border-bottom: 1px solid #dcdcdc;
    padding-top: 35px;
    padding-bottom: 20px;
    margin-bottom: 35px;
  }

  .mb-top-txt {
    position: relative;
    display: block;
  }

  .login {
    position: relative;
    display: inline-block;
    font-size: 14px;
    color: #ffcc00;
    margin-top: 15px;
    font-weight: 500;
  }

  .mb-close {
    position: absolute;
    right: 0;
    bottom: 20px;
    display: block;
    width: 20px;
    height: 20px;
    background: url(@/assets/images/btn-close.png) no-repeat center;
    background-size: contain;
    border: 0;
    cursor: pointer;
    z-index: 9;
  }

  .mb-wrap {
    position: relative;
    display: block;
    width: 320px;
  }

  .mb-menu {
    position: relative;
    display: block;
  }

  .mb-menu>li {
    position: relative;
    display: block;
    margin-bottom: 25px;
  }

  .mb-mainmenu {
    position: relative;
    display: block;
    font-size: 16px;
    color: #777;
    font-weight: 500;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .mb-mainmenu::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    background: url(@/assets/images/ico-gnb-link-m.png) no-repeat center;
    background-size: contain;
  }

  .mb-mainmenu-open {
    color: #ffcc00;
  }

  .mb-mainmenu-open::after {
    background: url(@/assets/images/ico-gnb-m-active-up.png) no-repeat center;
    background-size: contain;
  }

  .mb-submenu {
    position: relative;
    display: none;
  }

  .mb-submenu li {
    position: relative;
    display: block;
    padding-left: 20px;
    margin-bottom: 16px;
  }

  .mb-submenu li a {
    position: relative;
    display: block;
    font-size: 14px;
  }
  
    .mb-bg {
    position: relative;
    width: 380px;
    height: 100%;
    padding: 0 30px;
    background-color: #fff;
  }
</style>