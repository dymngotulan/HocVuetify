import { createRouter,createWebHistory } from 'vue-router'
import useAuthStore from "@store/AuthStore.js"
import Home from '@views/Home.vue'
import About from '@views/About.vue'
import Login from '@views/Login.vue'
import ListIndustry from "@views/Industry.vue"


export const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'Home',
            component: Home,            
        },
        {
            path:'/about',
            name:'About',
            component: About,            
        },
        {
            path:'/login',
            name:'Login',
            component: Login,            
        },
        {
            path:'/industry_list',
            name:'Industry',
            component: ListIndustry,            
        },
    ]
})

router.beforeEach(async (to) => {    
    const publicPages = ['/','/login'];
    const authRequired = !publicPages.includes(to.path);
    const auth = useAuthStore();    
    if (authRequired && !auth.isLogedIn()) {
        auth.returnUrl = to.fullPath;
        return '/login';
    }
});
export default router