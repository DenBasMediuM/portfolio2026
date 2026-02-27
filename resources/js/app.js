import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

async function ensurePortfolioData() {
    if (window.__PORTFOLIO__) return;
    const base = typeof import.meta.env?.BASE_URL === 'string' ? import.meta.env.BASE_URL : '/';
    const res = await fetch(`${base}portfolio.json`);
    if (!res.ok) throw new Error('Failed to load portfolio.json');
    window.__PORTFOLIO__ = await res.json();
}

ensurePortfolioData()
    .then(() => {
        const app = createApp(App);
        app.use(router);
        app.mount('#app');
    })
    .catch((err) => {
        document.getElementById('app').innerHTML = `
            <div class="min-h-screen flex items-center justify-center p-8 text-zinc-400">
                <p>Failed to load portfolio data. (${err.message})</p>
            </div>
        `;
    });
