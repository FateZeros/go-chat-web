import type { App } from 'vue';
import { createRouter, createWebHashHistory, type Router } from 'vue-router';
import { rootRoutes } from './route';

const setupRouter = async (app: App, router: Router) => {
    app.use(router);
}

const router: Router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: rootRoutes,
})

export {
    setupRouter,
    router
}

