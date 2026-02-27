<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const scrolled = ref(false);
const profile = window.__PORTFOLIO__.profile;

onMounted(() => {
    const onScroll = () => { scrolled.value = window.scrollY > 40; };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
});
</script>

<template>
    <header
        class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        :class="scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50' : 'bg-transparent'"
    >
        <nav class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <RouterLink to="/" class="font-semibold text-zinc-100 hover:text-amber-400 transition-colors">
                {{ profile.name }}
            </RouterLink>
            <div class="flex items-center gap-6">
                <RouterLink to="/#about" class="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">About</RouterLink>
                <RouterLink to="/#skills" class="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Skills</RouterLink>
                <RouterLink to="/#experience" class="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Experience</RouterLink>
                <RouterLink to="/works" class="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Works</RouterLink>
                <RouterLink to="/#contact" class="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Contact</RouterLink>
            </div>
        </nav>
    </header>
</template>
