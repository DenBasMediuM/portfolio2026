<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const base = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) ? import.meta.env.BASE_URL : '';
const certificates = window.__PORTFOLIO__?.certificates ?? [];
const failedImages = ref({});
function setImageFailed(i) {
    failedImages.value = { ...failedImages.value, [i]: true };
}
</script>

<template>
    <div class="pt-24 pb-20">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
            <h1 class="text-4xl font-bold text-zinc-100 mb-2">Certificates</h1>
            <p class="text-zinc-500 mb-12">Courses, trainings and achievements.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <article
                    v-for="(cert, i) in certificates"
                    :key="i"
                    class="rounded-2xl bg-zinc-900/80 border border-zinc-800 overflow-hidden flex flex-col"
                >
                    <!-- Image or placeholder -->
                    <div class="aspect-[4/3] bg-zinc-800/50 flex items-center justify-center overflow-hidden">
                        <img
                            v-if="cert.image && !failedImages[i]"
                            :src="`${base}${cert.image.replace(/^\//, '')}`"
                            :alt="cert.title"
                            class="w-full h-full object-cover"
                            @error="setImageFailed(i)"
                        />
                        <div
                            v-if="!cert.image || failedImages[i]"
                            class="w-full h-full flex flex-col items-center justify-center text-zinc-500 p-6 text-center"
                        >
                            <svg class="w-12 h-12 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span class="text-sm">{{ cert.image ? 'Image not found' : 'Add image to config' }}</span>
                        </div>
                    </div>
                    <div class="p-5 sm:p-6 flex flex-col flex-1">
                        <div class="flex flex-wrap items-center gap-2 text-xs text-zinc-500 mb-2">
                            <span v-if="cert.year">{{ cert.year }}</span>
                            <span v-if="cert.issuer">{{ cert.issuer }}</span>
                        </div>
                        <h2 class="text-lg font-semibold text-zinc-100 mb-2">
                            {{ cert.title }}
                        </h2>
                        <p v-if="cert.description" class="text-zinc-400 text-sm leading-relaxed flex-1">
                            {{ cert.description }}
                        </p>
                        <a
                            v-if="cert.url"
                            :href="cert.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="mt-4 inline-flex items-center gap-1.5 text-sm text-amber-400 hover:text-amber-300 transition-colors"
                        >
                            View certificate
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                    </div>
                </article>
            </div>

            <p v-if="!certificates.length" class="text-zinc-500 text-center py-12">
                No certificates yet. Add entries to <code class="text-zinc-400 bg-zinc-800 px-1.5 py-0.5 rounded">config/portfolio.php</code> in the <code class="text-zinc-400 bg-zinc-800 px-1.5 py-0.5 rounded">certificates</code> array.
            </p>
        </div>
    </div>
</template>
