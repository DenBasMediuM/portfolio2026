<script setup>
import { RouterLink } from 'vue-router';

const profile = window.__PORTFOLIO__.profile;
const works = window.__PORTFOLIO__.works;
</script>

<template>
    <div>
        <!-- Hero -->
        <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
            <div class="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
            <div class="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-amber-500/5 blur-3xl" />

            <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
                <p class="text-amber-400/90 text-sm font-medium tracking-widest uppercase mb-4">
                    {{ profile.title_alt }}
                </p>
                <h1 class="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-100 mb-6">
                    {{ profile.name }}
                </h1>
                <p class="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                    {{ profile.summary }}
                </p>
                <div class="flex flex-wrap justify-center gap-4">
                    <a
                        :href="`mailto:${profile.email}`"
                        class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 text-zinc-950 font-semibold hover:bg-amber-400 transition-colors"
                    >
                        Get in touch
                    </a>
                    <RouterLink
                        to="/works"
                        class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-600 text-zinc-300 hover:border-amber-500/50 hover:text-amber-400 transition-colors"
                    >
                        View works
                    </RouterLink>
                </div>
                <p class="mt-8 text-zinc-500 text-sm flex items-center justify-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {{ profile.location }}
                </p>
            </div>
        </section>

        <!-- About -->
        <section id="about" class="py-24 scroll-mt-24">
            <div class="max-w-4xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
                    <span class="w-10 h-0.5 bg-amber-500 rounded" />
                    About
                </h2>
                <p class="text-zinc-400 text-lg leading-relaxed">{{ profile.summary }}</p>
                <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div class="flex items-center gap-3 text-zinc-400">
                        <span class="text-amber-500">Location</span>
                        <span>{{ profile.location }}</span>
                    </div>
                    <div class="flex items-center gap-3 text-zinc-400">
                        <span class="text-amber-500">Email</span>
                        <a :href="`mailto:${profile.email}`" class="hover:text-amber-400 transition-colors">{{ profile.email }}</a>
                    </div>
                    <div class="flex items-center gap-3 text-zinc-400">
                        <span class="text-amber-500">Phone</span>
                        <a :href="`tel:${profile.phone}`" class="hover:text-amber-400 transition-colors">{{ profile.phone }}</a>
                    </div>
                    <div class="flex items-center gap-3 text-zinc-400">
                        <span class="text-amber-500">Portfolio</span>
                        <a :href="profile.portfolio_url" target="_blank" rel="noopener" class="hover:text-amber-400 transition-colors">GitHub Pages</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills -->
        <section id="skills" class="py-24 bg-zinc-900/50 scroll-mt-24">
            <div class="max-w-4xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
                    <span class="w-10 h-0.5 bg-amber-500 rounded" />
                    Skills
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h3 class="text-sm font-medium text-amber-500/90 uppercase tracking-wider mb-4">Soft skills</h3>
                        <ul class="flex flex-wrap gap-2">
                            <li
                                v-for="(skill, i) in profile.skills"
                                :key="i"
                                class="px-3 py-1.5 rounded-md bg-zinc-800 text-zinc-300 text-sm border border-zinc-700/50 hover:border-amber-500/30 transition-colors"
                            >
                                {{ skill }}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-sm font-medium text-amber-500/90 uppercase tracking-wider mb-4">Technical</h3>
                        <ul class="flex flex-wrap gap-2">
                            <li
                                v-for="(tech, i) in profile.tech_skills"
                                :key="i"
                                class="px-3 py-1.5 rounded-md bg-zinc-800 text-zinc-300 text-sm border border-zinc-700/50 hover:border-amber-500/30 transition-colors"
                            >
                                {{ tech }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mt-10">
                    <h3 class="text-sm font-medium text-amber-500/90 uppercase tracking-wider mb-4">Languages</h3>
                    <ul class="flex flex-wrap gap-4">
                        <li v-for="(lang, i) in profile.languages" :key="i" class="text-zinc-400">
                            <span class="text-zinc-100">{{ lang.name }}</span>
                            <span class="text-zinc-500 text-sm ml-1">— {{ lang.level }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Experience -->
        <section id="experience" class="py-24 scroll-mt-24">
            <div class="max-w-4xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-zinc-100 mb-10 flex items-center gap-3">
                    <span class="w-10 h-0.5 bg-amber-500 rounded" />
                    Experience
                </h2>
                <div class="space-y-10">
                    <article
                        v-for="(job, i) in profile.experience"
                        :key="i"
                        class="group relative pl-8 pb-10 border-l border-zinc-800 last:pb-0 last:border-l-0"
                    >
                        <span class="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-500/80 group-hover:bg-amber-400 transition-colors" />
                        <div class="flex flex-wrap items-baseline gap-2">
                            <h3 class="text-lg font-semibold text-zinc-100">{{ job.role }}</h3>
                            <template v-if="job.company">
                                <span class="text-zinc-500">at</span>
                                <a
                                    v-if="job.url"
                                    :href="job.url"
                                    target="_blank"
                                    rel="noopener"
                                    class="text-amber-400/90 hover:text-amber-400 transition-colors"
                                >
                                    {{ job.company }}
                                </a>
                                <span v-else class="text-zinc-400">{{ job.company }}</span>
                            </template>
                        </div>
                        <p class="text-sm text-zinc-500 mt-1">{{ job.period }}</p>
                        <ul class="mt-4 space-y-2">
                            <li
                                v-for="(point, j) in job.points"
                                :key="j"
                                class="text-zinc-400 text-sm leading-relaxed flex gap-2"
                            >
                                <span class="text-amber-500/70 mt-1.5">•</span>
                                <span>{{ point }}</span>
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>

        <!-- Education -->
        <section class="py-24 bg-zinc-900/50">
            <div class="max-w-4xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
                    <span class="w-10 h-0.5 bg-amber-500 rounded" />
                    Education
                </h2>
                <div class="relative pl-8 border-l border-zinc-800">
                    <span class="absolute left-0 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-500/80" />
                    <h3 class="text-lg font-semibold text-zinc-100">{{ profile.education.degree }}</h3>
                    <a
                        :href="profile.education.url"
                        target="_blank"
                        rel="noopener"
                        class="text-amber-400/90 hover:text-amber-400 transition-colors"
                    >
                        {{ profile.education.school }}
                    </a>
                    <p class="text-zinc-400 text-sm mt-1">{{ profile.education.faculty }}</p>
                    <p class="text-zinc-500 text-sm mt-1">{{ profile.education.period }}</p>
                </div>
            </div>
        </section>

        <!-- Works preview -->
        <section id="works" class="py-24 scroll-mt-24">
            <div class="max-w-6xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
                    <span class="w-10 h-0.5 bg-amber-500 rounded" />
                    Selected works
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <RouterLink
                        v-for="work in works"
                        :key="work.slug"
                        :to="`/works/${work.slug}`"
                        class="group block p-6 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/30 transition-all duration-300"
                    >
                        <h3 class="font-semibold text-zinc-100 group-hover:text-amber-400 transition-colors">{{ work.title }}</h3>
                        <p class="text-sm text-zinc-500 mt-1">{{ work.subtitle }}</p>
                        <p class="text-xs text-zinc-600 mt-2">{{ work.year }}</p>
                        <span class="inline-flex items-center gap-1 mt-4 text-sm text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">
                            View case
                            <span>→</span>
                        </span>
                    </RouterLink>
                </div>
                <div class="mt-8 text-center">
                    <RouterLink
                        to="/works"
                        class="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
                    >
                        All works
                        <span>→</span>
                    </RouterLink>
                </div>
            </div>
        </section>

        <!-- Contact -->
        <section id="contact" class="py-24 bg-zinc-900/50 scroll-mt-24">
            <div class="max-w-4xl mx-auto px-4 text-center">
                <h2 class="text-3xl font-bold text-zinc-100 mb-4 flex items-center justify-center gap-3">
                    <span class="w-10 h-0.5 bg-amber-500 rounded" />
                    Contact
                    <span class="w-10 h-0.5 bg-amber-500 rounded" />
                </h2>
                <p class="text-zinc-400 mb-8">Let's build something together.</p>
                <div class="flex flex-wrap justify-center gap-6">
                    <a
                        :href="`mailto:${profile.email}`"
                        class="px-6 py-3 rounded-lg bg-amber-500 text-zinc-950 font-semibold hover:bg-amber-400 transition-colors"
                    >
                        {{ profile.email }}
                    </a>
                    <a
                        :href="`tel:${profile.phone}`"
                        class="px-6 py-3 rounded-lg border border-zinc-600 text-zinc-300 hover:border-amber-500/50 hover:text-amber-400 transition-colors"
                    >
                        {{ profile.phone }}
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>
