import { createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'


// import Home from '../views/Home.vue'
// import Product from '../views/Product.vue'


const Home = () => import('../views/Home.vue');

const routes: Array<RouteRecordRaw> = [
    { 
        path: '/',
        name: "Home",
        component: Home
    },
    { 
        path: '/product', 
        name: "Product",
        component: () => import('../views/Product.vue')
    },
    {
        path: "/product-categories",
        name: "Product Categories",
        component: () => import("../views/ProductCategory.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;