<template>
  <div>
    <ModalView />
    <!-- 모바일메뉴 -->
    <MbDiv />
    <!-- 배너 -->
    <BannerView />
    <!-- 내용 -->
    <div class="wrap">
      <!-- 상단 -->
      <HeaderView/>
      <!-- 비주얼 -->
      <VisualView />
      <!-- 제품 카테고리 -->
      <CategoryView />
      <!-- 사이트 맵 -->
      <SitemapView />
      <!-- 하단 -->
      <footer class="footer">
        <div class="footer-top">
          <div class="inner">
            <ul class="siteinfo-list">
              <li>
                <span><em>상호</em> 주식회사 세손</span>
                <span><em>대표자명</em> 임정아</span>
                <span><em>대표전화번호</em> 1600-6274</span>
                <span>개인정보관련책임자 <a href="#">임지은(help@seisson.com)</a></span>
              </li>
              <li>
                <span><em>사업장소재지</em> 04378 서울특별시 용산구 한강대로 95 (한강로2가) 제에이동 15층 1515</span>
              </li>
              <li>
                <span><em>사업장등록번호</em> 183-86-018-60</span>
                <span><em>통신판매업</em> 신고번호제2021-서울용산-0634호</span>
              </li>
            </ul>
            <a href="#" class="insta-link"></a>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="inner clearfix">
            <span class="copy">Copyright © <strong>Seisson Inc</strong>. All rights reserved</span>
            <ul class="service-list">
              <li><a href="#">CS Center</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Condition</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  import ModalView from '@/components/ModalView.vue';
  import MbDiv from '@/components/MbDiv.vue';
  import BannerView from '@/components/BannerView.vue';
  import HeaderView from '@/components/HeaderView.vue';
  import VisualView from '@/components/VisualView.vue';
  import CategoryView from '@/components/CategoryView.vue';
  import SitemapView from '@/components/SitemapView.vue';
  import {useStore} from 'vuex'
  export default {
    name: 'App',
    components: {
      ModalView,
      MbDiv,
      BannerView,
      HeaderView,
      VisualView,
      CategoryView,
      SitemapView,
    },
    setup() {
      const store = useStore();
      store.dispatch('fetchMbMenu')
      return {
      }
    }
  }
</script>

<style>
  @charset "UTF-8";
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,
  li {
    list-style: none;
  }

  img {
    vertical-align: middle;
    border: 0;
  }

  a {
    color: #777;
    text-decoration: none;
  }

  html {
    font-size: 10px;
    overflow-x: hidden;
  }

  body {
    font-family: "Montserrat", "Noto Sans KR", "Malgun Gothic", "Dotum", "AppleGothic", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.45px;
    overflow-x: hidden;
  }

  ::-moz-selection {
    *background: #1ABC9C;
    /* Firefox */
    background: #1ABC9C;
    /* Safari */
    color: #fff;
  }

  ::selection {
    *background: #1ABC9C;
    /* Firefox */
    background: #1ABC9C;
    /* Safari */
    color: #fff;
  }

  ::-moz-selection {
    *background: #1ABC9C;
    /* Firefox */
    background: #1ABC9C;
    /* Firefox */
    color: #fff;
  }

  #app {}

  /* 공통클래스 */
  .clearfix::after {
    content: "";
    position: relative;
    display: block;
    width: 100%;
    clear: both;
  }

  .inner {
    position: relative;
    display: block;
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
  }

  /* section 영역 */


  /* layout */
  .wrap {
    position: relative;
    display: block;
  }
  /* ================visual================ */



  /* ================footer================ */
  .footer {
    position: relative;
    display: block;
  }

  .footer .footer-top {
    position: relative;
    display: block;
    border-top: 1px solid #dcdcdc;
    background-color: #f3f3f3;
    padding: 35px 0;
  }

  .footer .footer-top .inner {
    position: relative;
    display: block;
    width: 770px;
    margin: 0 auto;
  }

  .footer .footer-top .inner .siteinfo-list {
    position: relative;
    display: block;
  }

  .footer .footer-top .inner .siteinfo-list li {
    position: relative;
    display: block;
    white-space: nowrap;
    margin-bottom: 5px;
  }

  .footer .footer-top .inner .siteinfo-list li:last-child {
    margin-bottom: 0;
  }

  .footer .footer-top .inner .siteinfo-list li span {
    position: relative;
    display: inline-block;
    margin-right: 20px;
    font-size: 12px;
    color: #777;
  }

  .footer .footer-top .inner .siteinfo-list li span em {
    position: relative;
    display: inline-block;
    margin-right: 20px;
    color: #7e868c;
    font-size: 12px;
  }

  .footer .footer-top .inner .siteinfo-list li span a {
    position: relative;
    display: inline-block;
    margin-left: 20px;
  }

  .footer .footer-top .inner .insta-link {
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    width: 155px;
    height: 30px;
    background: url(@/assets/images/ico_insta.png) no-repeat center;
  }

  .footer .footer-bottom {
    position: relative;
    display: block;
    border-top: 1px solid #dcdcdc;
    background-color: #e5e5e5;
    padding: 25px 0;
  }

  .footer .footer-bottom .inner {
    position: relative;
    display: block;
    width: 770px;
    margin: 0 auto;
  }

  .footer .footer-bottom .inner .copy {
    position: relative;
    display: block;
    float: left;
    font-size: 12px;
    color: #777;
  }

  .footer .footer-bottom .inner .copy strong {
    font-weight: 600;
  }

  .footer .footer-bottom .inner .service-list {
    position: relative;
    display: block;
    float: right;
  }

  .footer .footer-bottom .inner .service-list li {
    position: relative;
    display: inline-block;
    margin-left: 20px;
  }

  .footer .footer-bottom .inner .service-list li a {
    position: relative;
    display: block;
    font-size: 12px;
  }

  @media all and (max-width: 800px) {
    .footer .inner {
      width: 100% !important;
    }

    .footer-top .inner {
      padding-bottom: 35px !important;
    }

    .siteinfo-list li span {
      display: block !important;
      margin-bottom: 10px !important;
      padding: 0 20px;
    }

    .siteinfo-list li span em {
      width: 100px !important;
    }

    .copy {
      width: 100% !important;
      text-align: center;
    }

    .service-list {
      width: 100% !important;
      text-align: center;
    }
  }

  /*# sourceMappingURL=main.css.map */
</style>