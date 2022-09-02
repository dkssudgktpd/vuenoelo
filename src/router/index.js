import {createRouter, createWebHistory} from 'vue-router'
const router = createRouter({
  // 웹브라우저 주소에서 #아이디 이동한 흔적을
  // 남기지않는다.
  history : createWebHistory(),
  // 컴포넌트 연결 정보
  // routes : [{path : '/글자', name: '이동 할 메뉴글자', component : 연결시켜줄 컴퍼넌트}] 주소
  // 예 : routes : [{path : '/good', name: 'Good', component : GoodView}] 
  // 가능하면, router 에 사용하는 컴포넌트는 src/view 폴더를 생성하고
  // 여러 컴포넌트를 포함하는 vue 파일을 생성한다.
  // 가능하면, 페이지명을 View. 라고 생성 추천합니다
  routes : []
});
// 라우터라는 변수를 다른 파일에서 사용하기위해
// 변수를 내보냄 1개만
export default router;