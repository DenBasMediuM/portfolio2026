<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const scrolled = ref(false);
const menuOpen = ref(false);
const profile = window.__PORTFOLIO__.profile;

onMounted(() => {
    const onScroll = () => { scrolled.value = window.scrollY > 40; };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
});

function closeMenu() {
    menuOpen.value = false;
}
</script>

<template>
    <header
        class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        :class="scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50' : 'bg-transparent'"
    >
        <nav class="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
            <RouterLink to="/" class="font-semibold text-zinc-100 hover:text-amber-400 transition-colors text-sm sm:text-base" @click="closeMenu">
                {{ profile.name }}
            </RouterLink>

            <!-- Desktop nav -->
            <div class="hidden md:flex items-center gap-6">
                <RouterLink to="/#about" class="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">About</RouterLink>
                <RouterLink to="/#skills" class="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Skills</RouterLink>
                <RouterLink to="/#experience" class="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Experience</RouterLink>
                <RouterLink to="/works" class="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Works</RouterLink>
                <RouterLink to="/certificates" class="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Certificates</RouterLink>
                <RouterLink to="/#contact" class="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Contact</RouterLink>
            </div>

            <!-- Mobile: hamburger -->
            <button
                type="button"
                class="md:hidden p-2 -mr-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Toggle menu"
                aria-expanded="false"
                :aria-expanded="menuOpen"
                @click="menuOpen = !menuOpen"
            >
                <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </nav>

        <!-- Mobile dropdown -->
        <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
        >
            <div
                v-show="menuOpen"
                class="md:hidden absolute top-full left-0 right-0 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/50 shadow-xl"
            >
                <div class="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
                    <RouterLink to="/#about" class="py-3 px-3 rounded-lg text-zinc-300 hover:bg-zinc-800/50 hover:text-zinc-100 transition-colors min-h-[44px] flex items-center" @click="closeMenu">About</RouterLink>
                    <RouterLink to="/#skills" class="py-3 px-3 rounded-lg text-zinc-300 hover:bg-zinc-800/50 hover:text-zinc-100 transition-colors min-h-[44px] flex items-center" @click="closeMenu">Skills</RouterLink>
                    <RouterLink to="/#experience" class="py-3 px-3 rounded-lg text-zinc-300 hover:bg-zinc-800/50 hover:text-zinc-100 transition-colors min-h-[44px] flex items-center" @click="closeMenu">Experience</RouterLink>
                    <RouterLink to="/works" class="py-3 px-3 rounded-lg text-zinc-300 hover:bg-zinc-800/50 hover:text-zinc-100 transition-colors min-h-[44px] flex items-center" @click="closeMenu">Works</RouterLink>
                    <RouterLink to="/certificates" class="py-3 px-3 rounded-lg text-zinc-300 hover:bg-zinc-800/50 hover:text-zinc-100 transition-colors min-h-[44px] flex items-center" @click="closeMenu">Certificates</RouterLink>
                    <RouterLink to="/#contact" class="py-3 px-3 rounded-lg text-zinc-300 hover:bg-zinc-800/50 hover:text-zinc-100 transition-colors min-h-[44px] flex items-center" @click="closeMenu">Contact</RouterLink>
                </div>
            </div>
        </Transition>
    </header>
</template>
