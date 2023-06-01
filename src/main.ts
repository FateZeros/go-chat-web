import { createApp } from 'vue';
import App from '@/views/app/index.vue';
import type { Router } from 'vue-router';
import { setupRouter, router } from '@/router';

const app = createApp(App);

export const setupApp = async (router: Router) => {
    try {
        // setupRouter 必须放在最后，因为路由守卫需要使用某些全局方法
        await setupRouter(app, router);
        
        app.mount("#app")
    } catch (error) {
        console.error(error);
    }
}

setupApp(router);
