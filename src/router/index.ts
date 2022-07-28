import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import LoginPage from '../views/LoginPage.vue';
import PageNotFound from '../views/PageNotFound.vue';
import Article from "@/views/Article.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/',
        name: 'home',
        component: Home,
        // meta: {requiresAuth: true}
    },
    {
        path: '/post/:id',
        name: 'Article',
        component: Article,
        // meta: {requiresAuth: true}
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        // meta: {requiresAuth: true}
    },
    {
        path: '/404',
        name: 'PageNotFound',
        component: PageNotFound,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         const authUser = JSON.parse(window.localStorage.getItem('currentUser') || '{}');
//         if (authUser && authUser.accessToken) {
//             next();
//         } else {
//             next({ name: 'Login' });
//         }
//     } else {
//         next() // make sure to always call next()!
//     }
// })

router.beforeEach((to, from) => {
    const authUser = JSON.parse(window.localStorage.getItem('currentUser') || '{}');
        // if (to.meta.requiresAuth && authUser && authUser.accessToken) {
    if (to.meta.requiresAuth && authUser && authUser.accessToken) {
            return {
                path: '/login',
                query: {redirect: to.fullPath},
            }
        }
    }
)

export default router;
