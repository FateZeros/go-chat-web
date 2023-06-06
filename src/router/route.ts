import type { RouteRecordRaw } from 'vue-router';

/**
 * 公共路由
 */
export const commonRoutes: RouteRecordRaw[] = [
    {
        name: 'login',
        path: '/login',
        meta: {
            title: '登录',
            noAuthRequired: true,
        },
        component: () => import('@/views/login/index.vue'),
    },
    {
        name: '403',
        path: '/403',
        meta: {
            title: '403',
            noAuthRequired: true,
        },
        component: () => import('@/views/errors/403/index.vue'),
    },
    {
        name: '404',
        path: '/:pathMatch(.*)*',
        meta: {
            title: '404',
            noAuthRequired: true,
        },
        component: () => import('@/views/errors/404/index.vue'),
    },
    {
        name: '500',
        path: '/500',
        meta: {
            title: '500',
            noAuthRequired: true,
        },
        component: () => import('@/views/errors/500/index.vue'),
    },
]

export const rootRoutes: RouteRecordRaw[] = [
    ...commonRoutes,
]