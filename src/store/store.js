import { createStore } from "vuex";
import mbstore from './modules/mbstore.js';
export default createStore({
  modules : {
    mbstore
  }
  /*
  state: {
    데이터저장객체
  },
  actions : {
    request 호출 : 외부 서버(http 주소) 및 파일(json, xml...) 및 기타 호출
    Response를 통해서 결과 및 데이터를 받는다.
    만약 response의 결과가 (Error) 라면 catch처리, mutations에 위탁 
    만약 response의 결과가 (Success) 라면 then처리, mutations에 위탁

  },
  mutations: {
    actions으로 부터 전달받은 상황을 실제 처리
    처리? state를 업데이트함
  },
  getters: {
    state(데이터)를 컴포넌트(View 영역)에 넣어서 화면갱신
    통상 getters 는 컴포넌트에서 computed로 받는 경우가 많다.
    computed는 컴포넌트에 내용 갱신시 캐시에 대기중
  }
  */
})