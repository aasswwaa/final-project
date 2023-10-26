import { createApp } from 'vue'
import App from './App.vue'
import HomePage from './components/Home.vue'
import ChatPage from './components/chat.vue'
import TestApi from './components/testApi.vue'
import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {path:'/', name: 'Home', component: HomePage},
    {path:'/chat', name: 'Chat', component: ChatPage},
    {path:"/test", name: "TestApi", component: TestApi},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App);
app.use(router);
app.mount('#app');
