<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  inject({ mode: dev ? 'development' : 'production' });
</script>

<style>
  @import url(/src/style/theme.dark.css);
</style>

<html lang="en">
  <Navbar />

  <div class="mt-12 mb-16 w-full items-center bg-background min-h-[calc(100vh-112px)]">
    <slot />
  </div>

  <Footer />

</html>
