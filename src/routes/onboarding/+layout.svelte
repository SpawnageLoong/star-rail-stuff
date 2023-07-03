<script lang="ts">
  import { page } from '$app/stores';
</script>

<nav class="flex justify-center my-6">
  <ul class="steps">
    <a href="/onboarding" class="step step-primary">Introduction</a>
    {#if $page.route.id?.match(/auto/g)}
    <a
      href="/onboarding/auto"
      class="step"
      class:step-primary={$page.route.id?.match(/auto/g)}>
      Automatic Onboarding
    </a>
    {/if}
    {#if $page.route.id?.match(/manual/g)}
    <a
      href="/onboarding/manual"
      class="step"
      class:step-primary={$page.route.id?.match(/manual/g)}>
      Manual Onboarding
    </a>
    {/if}
  </ul>
</nav>

<main class="card w-4/6 bg-neutral text-neutral-content mx-auto">
  <div class="card-body items-center text-center">
    <slot />
  </div>
</main>