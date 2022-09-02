import { createApp } from 'vue'
import App from './App.vue'
// vuex 연결
import store from './store/store.js'
// 라우터 연결
import router from './router/index.js'
createApp(App).use(store).use(router).mount('#app')

// Vue가 실행이 될 때 제일 처음 불러서 실행하는 js 파일 Entry Point 역할
// Vue 어플리케이션에서 모두 참조가 됨
// router, vuex를 기본적으로 많이 추가한다.