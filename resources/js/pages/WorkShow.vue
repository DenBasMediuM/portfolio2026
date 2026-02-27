<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

const route = useRoute();
const works = window.__PORTFOLIO__.works;
const base = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) ? import.meta.env.BASE_URL : '';
const work = computed(() => works.find((w) => w.slug === route.params.slug));
const failedScreenshots = ref({});
function setScreenshotFailed(i) {
    failedScreenshots.value = { ...failedScreenshots.value, [i]: true };
}
</script>

<template>
    <div v-if="work" class="pt-24 pb-20">
        <div class="max-w-4xl mx-auto px-4">
            <RouterLink
                to="/works"
                class="inline-flex items-center gap-2 text-zinc-500 hover:text-amber-400 text-sm mb-10 transition-colors"
            >
                ← Back to works
            </RouterLink>

            <header class="mb-12">
                <p class="text-amber-500/90 text-sm font-medium">{{ work.year }}</p>
                <h1 class="text-4xl md:text-5xl font-bold text-zinc-100 mt-2">{{ work.title }}</h1>
                <p class="text-zinc-500 mt-2">{{ work.subtitle }}</p>
                <div class="flex flex-wrap gap-2 mt-4">
                    <span
                        v-for="t in work.tech"
                        :key="t"
                        class="px-3 py-1 rounded-md bg-zinc-800 text-zinc-400 text-sm border border-zinc-700/50"
                    >
                        {{ t }}
                    </span>
                </div>
            </header>

            <div class="prose prose-invert max-w-none">
                <p class="text-zinc-400 text-lg leading-relaxed">{{ work.description }}</p>
            </div>

            <div v-if="work.video_url" class="mt-12 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
                <iframe
                    :src="work.video_url"
                    class="w-full aspect-video"
                    allowfullscreen
                />
            </div>
            <div
                v-else
                class="mt-12 rounded-xl overflow-hidden bg-zinc-900/80 border border-zinc-800 flex items-center justify-center aspect-video text-zinc-500"
            >
                <div class="text-center p-8">
                    <span class="text-4xl mb-2 block">🎬</span>
                    <span>Video demo can be added here (set <code class="text-zinc-400">video_url</code> in config)</span>
                </div>
            </div>

            <div v-if="work.screenshots && work.screenshots.length" class="mt-12 space-y-6">
                <h2 class="text-xl font-semibold text-zinc-100">Screenshots</h2>
                <div class="grid grid-cols-1 gap-6">
                    <div
                        v-for="(shot, i) in work.screenshots"
                        :key="i"
                        class="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50"
                    >
                        <div class="relative aspect-video bg-zinc-800/50 flex items-center justify-center">
                            <img
                                v-if="!failedScreenshots[i]"
                                :src="shot.src.startsWith('http') ? shot.src : base + shot.src.replace(/^\//, '')"
                                :alt="shot.alt"
                                class="w-full h-full object-cover"
                                @error="setScreenshotFailed(i)"
                            />
                            <div
                                v-if="failedScreenshots[i]"
                                class="absolute inset-0 flex flex-col items-center justify-center text-zinc-500 p-6 text-center"
                            >
                                <svg class="w-12 h-12 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span class="text-sm">Image not found</span>
                                <span class="text-xs mt-1">Put file in public/works/</span>
                            </div>
                        </div>
                        <p v-if="shot.alt" class="p-3 text-sm text-zinc-500 border-t border-zinc-800">{{ shot.alt }}</p>
                    </div>
                </div>
            </div>

            <div class="mt-16 pt-8 border-t border-zinc-800">
                <RouterLink
                    to="/works"
                    class="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
                >
                    ← All works
                </RouterLink>
            </div>
        </div>
    </div>

    <div v-else class="pt-24 pb-20 text-center">
        <p class="text-zinc-500">Work not found.</p>
        <RouterLink to="/works" class="mt-4 inline-block text-amber-400 hover:text-amber-300">Back to works</RouterLink>
    </div>
</template>
