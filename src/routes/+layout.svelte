<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>


<html lang="en" data-theme="night">
  <Navbar />

  <div class="flex min-h-screen flex-col items-center">
    <slot />
  </div>

  <Footer />

</html>
