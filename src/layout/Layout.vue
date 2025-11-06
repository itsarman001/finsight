<script setup lang="ts">
// No script logic needed for this static layout

const NAVIGATION_ITEMS: { label: string; link: string }[] = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
];

const TOPICS: { label: string; link: string }[] = [
  { label: "From and To", link: "/from-to" },
  { label: "Timeline", link: "/timeline" },
  { label: "ScrollTrigger", link: "/scroll-trigger" },
];
</script>

<template>
  <div class="layout">
    <header class="site-header">
      <div class="site-title">Learn Gsap</div>
      <nav class="nav-primary">
        <RouterLink
          v-for="item in NAVIGATION_ITEMS"
          :key="item.link"
          :to="item.link"
          class="nav-link"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </header>

    <section class="site-content">
      <aside class="sidebar">
        <nav class="nav-sidebar">
          <RouterLink
            v-for="topic in TOPICS"
            :key="topic.link"
            :to="topic.link"
            class="sidebar-link"
          >
            {{ topic.label }}
          </RouterLink>
        </nav>
      </aside>

      <main class="main-content">
        <slot />
      </main>
    </section>

    <footer class="site-footer">© 2025 Learn Gsap. All rights reserved.</footer>
  </div>
</template>
