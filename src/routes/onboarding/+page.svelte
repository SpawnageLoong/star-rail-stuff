<script lang="ts">
  import AuthCheck from '$lib/components/AuthCheck.svelte';
</script>

<h1 class="text-3xl font-bold">Welcome to SvelteKit</h1>
<AuthCheck>
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
</AuthCheck>
