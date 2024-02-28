import { createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';


// import Home from '../views/Home.vue'
// import Product from '../views/Product.vue'

const routes: Array<RouteRecordRaw> = [
    { 
        path: '/',
        component: DefaultLayout,
        children: [
            { path: '', name: 'Home', component: () => import('../views/Home.vue')},
            { path: 'product', name: 'Product', component: () => import('../views/Product.vue')},
            { path: 'product-categories', name: 'Product Categories', component: () => import("../views/ProductCategory.vue")}
        ]
    },
    { 
        path: '/admin/',
        component: AdminLayout,
        children: [
            { path: 'manage-base-products', name: 'Manage Base Product', component: () => import("@/views/Admin/Products/ManageBaseProducts.vue")},
            { path: 'manage-products', name: 'Manage Products', component: () => import("@/views/Admin/Products/ManageProducts.vue")},
            { path: 'manage-variations', name: 'Manage Variations', component: () => import("@/views/Admin/Products/ManageVariations.vue")},
            { path: 'manage-materials', name: 'Manage Materials', component: () => import("@/views/Admin/Products/ManageMaterials.vue")},
            { path: 'manage-clubs', name: 'Manage Clubs', component: () => import("@/views/Admin/Products/ManageClubs.vue")},
            { path: 'manage-collections', name: 'Manage Collections', component: () => import("@/views/Admin/Products/ManageCollections.vue")}
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;