<script setup>
import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

const route = useRoute();
const works = window.__PORTFOLIO__.works;

const work = computed(() => works.find((w) => w.slug === route.params.slug));

if (work.value) {
    // optional: route.meta.work for other use
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
                        <img
                            :src="shot.src"
                            :alt="shot.alt"
                            class="w-full h-auto"
                        />
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
