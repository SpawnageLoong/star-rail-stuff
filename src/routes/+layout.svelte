<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Analytics from "$lib/components/Analytics.svelte";
  
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  inject({ mode: dev ? 'development' : 'production' });
</script>


<html lang="en" data-theme="night">
  <Analytics />
  <Navbar />

  <div class="flex min-h-screen flex-col items-center">
    <slot />
  </div>

  <Footer />

</html>
