<script lang="ts">
  import methodSelected from './+layout.svelte';
  import autoOnboard from './+layout.svelte';
</script>

<h1 class="text-3xl font-bold">Welcome to SvelteKit</h1>
<div class="flex flex-col items-center">
  <a
    href="onboarding/manual"
    class="btn btn-primary">
    Manual Onboarding
  </a>
  <a
    href="onboarding/auto"
    class="btn btn-primary">
    Automatic Onboarding
  </a>
</div>
