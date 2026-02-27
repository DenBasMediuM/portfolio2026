<script setup>
import { RouterLink } from 'vue-router';

const works = window.__PORTFOLIO__.works;
</script>

<template>
    <div class="pt-24 pb-20">
        <div class="max-w-6xl mx-auto px-4">
            <h1 class="text-4xl font-bold text-zinc-100 mb-2">Works</h1>
            <p class="text-zinc-500 mb-12">Selected projects and case studies.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <RouterLink
                    v-for="work in works"
                    :key="work.slug"
                    :to="`/works/${work.slug}`"
                    class="group block p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/30 transition-all duration-300"
                >
                    <h2 class="text-xl font-semibold text-zinc-100 group-hover:text-amber-400 transition-colors">
                        {{ work.title }}
                    </h2>
                    <p class="text-zinc-500 mt-1">{{ work.subtitle }}</p>
                    <p class="text-sm text-zinc-600 mt-2">{{ work.year }}</p>
                    <p class="mt-4 text-zinc-400 text-sm line-clamp-2">{{ work.description }}</p>
                    <span class="inline-flex items-center gap-1 mt-6 text-amber-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        View case study
                        <span>→</span>
                    </span>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
