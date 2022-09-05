<template>
      <section class="visual">
        <Swiper
          :modules = "modules"
          :autoplay = "{
            delay : 2000,
            disableOnInteraction: false,
          }"
          :loop="true"
          :pagination = "{
            el:'.sw-visual-pg',
            clickable : true
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="sw-visual"
        >  
          <swiper-slide class="swiper-slide" v-for="(item, index) in slideData" :key="index">
            <VisualList :vimg="item.img" :vtitle="item.title" :vtxt="item.txt" :vbt="item.bt" :vlink="item.link" />
          </swiper-slide>
          <div class="sw-visual-control">
          <div class="sw-visual-pg"></div>
        </div>
        </Swiper>
    </section>
</template>

<script>
import {ref} from 'vue';
import {Autoplay,Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import "swiper/css/pagination";
import VisualList from '@/components/VisualList.vue';
export default {
  components:{
    VisualList,Swiper,SwiperSlide
  },
  setup(){
    const slideData = ref([]);
    slideData.value = [
      {
        img: 'PC_minimal_new.png',
        title : '미니멀비 출시',
        txt : '아이부터 어른까지 <br> 클린 포뮬러 저자극 케어',
        bt : 'SHOP',
        link : '#'
      },
      {
        img: 'PC1_newborn.png',
        title : 'SPECIAL OFFER',
        txt : '노엘로힐스가 제안하는 <br> 아기 스킨케어 출산준비물',
        bt : 'SHOP',
        link : '#'
      },
      {
        img: 'PC2_BabyEssence.png',
        title : '밀크 에센스 로션',
        txt : '국내 최초 100% <br> 식품 그레이드 성분',
        bt : 'SHOP',
        link : '#'
      },
      {
        img: 'PC3_Branding.png',
        title : '8:23 PM',
        txt : '가족에게 행복을 선사하는 <br> 스킨케어 라이프스타일 브랜드',
        bt : 'SHOP',
        link : '#'
      }
    ]
    return{
      modules : [Autoplay,Pagination],
      slideData
    }
  },
}
</script>

<style>
.visual {
  position: relative;
  display: block;
}
.visual .sw-visual {
  width: 100%;
  height: 100%;
  position: relative;
}
.visual .sw-visual .swiper-slide a {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.visual .sw-visual .swiper-slide a .visual-img {
  position: relative;
  display: block;
  width: 100%;
  height: 600px;
}
.visual .sw-visual .swiper-slide a .visual-1 {
  background: url("@/assets/images/PC_minimal_new.png") no-repeat center;
  background-size: cover;
}
.visual .sw-visual .swiper-slide a .visual-2 {
  background: url("@/assets/images/PC1_newborn.png") no-repeat center;
  background-size: cover;
}
.visual .sw-visual .swiper-slide a .visual-3 {
  background: url("@/assets/images/PC2_BabyEssence.png") no-repeat center;
  background-size: cover;
}
.visual .sw-visual .swiper-slide a .visual-4 {
  background: url("@/assets/images/PC3_Branding.png") no-repeat center;
  background-size: cover;
}
.visual .sw-visual .swiper-slide a .visual-txt {
  position: relative;
  display: block;
  text-align: center;
  padding: 50px 0;
}
.visual .sw-visual .swiper-slide a .visual-title {
  position: relative;
  display: block;
  font-size: 30px;
  color: #777;
  margin-bottom: 35px;
  font-weight: 500;
}
.visual .sw-visual .swiper-slide a .visual-desc {
  position: relative;
  display: block;
  font-size: 20px;
  color: #777;
  margin-bottom: 20px;
}
.visual .sw-visual .swiper-slide a .visual-bt {
  position: relative;
  display: inline-block;
  font-size: 20px;
  color: #777;
  background-color: #ffcc00;
  color: #fff;
  padding: 10px 30px;
  font-weight: 600;
}
.visual .sw-visual .sw-visual-control {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 550px;
  display: block;
  z-index: 9;
}
.visual .sw-visual .sw-visual-control .sw-visual-pg .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background-color: #fff;
  opacity: 1;
  margin: 0 4px;
}
.visual .sw-visual .sw-visual-control .sw-visual-pg .swiper-pagination-bullet-active {
  background-color: #f9d14d;
}

/* 비주얼 반응형 */
@media all and (max-width: 1320px) {
  .visual-img {
    height: 45vw !important;
  }

  .sw-visual-control {
    top: 41.66vw !important;
  }

  .visual-txt {
    padding: 3.78vw 0 !important;
  }
}
@media all and (max-width: 800px) {
  .visual-img {
    height: 125vw !important;
  }

  .visual-1 {
    background: url(@/assets/images/mobile-visual-1.png) no-repeat center !important;
  }

  .visual-2 {
    background: url(@/assets/images/mobile-visual-2.png) no-repeat center !important;
  }

  .visual-3 {
    background: url(@/assets/images/mobile-visual-3.png) no-repeat center !important;
  }

  .visual-4 {
    background: url(@/assets/images/mobile-visual-4.png) no-repeat center !important;
  }

  .sw-visual-control {
    top: 120vw !important;
  }
}

@media all and (max-width: 480px) {
  .visual-img {
    height: 124.375vw !important;
  }

  .visual-1 {
    background: url(@/assets/images/v_480_1.png) no-repeat center !important;
  }

  .visual-2 {
    background: url(@/assets/images/v_480_2.png) no-repeat center !important;
  }

  .visual-3 {
    background: url(@/assets/images/v_480_3.png) no-repeat center !important;
  }

  .visual-4 {
    background: url(@/assets/images/v_480_4.png) no-repeat center !important;
  }

  .sw-visual-control {
    top: 115vw !important;
  }
}
</style>