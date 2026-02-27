import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', name: 'home', component: () => import('../pages/Home.vue'), meta: { title: 'Home' } },
    { path: '/works', name: 'works', component: () => import('../pages/WorksIndex.vue'), meta: { title: 'Works' } },
    { path: '/works/:slug', name: 'work', component: () => import('../pages/WorkShow.vue'), meta: { title: 'Work' } },
];

const base = typeof import.meta.env?.BASE_URL === 'string' ? import.meta.env.BASE_URL : '/';

const router = createRouter({
    history: createWebHistory(base),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;
        if (to.hash) return { el: to.hash, behavior: 'smooth' };
        return { top: 0 };
    },
});

router.afterEach((to) => {
    const works = window.__PORTFOLIO__?.works ?? [];
    let title = 'Denis Isaev — Full Stack Developer';
    if (to.name === 'work' && to.params.slug) {
        const work = works.find((w) => w.slug === to.params.slug);
        if (work) title = `${work.title} — Denis Isaev`;
    } else if (to.meta?.title) {
        title = `${to.meta.title} — Denis Isaev`;
    }
    document.title = title;
});

export default router;
