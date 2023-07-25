<script lang="ts">
  import { user } from "$lib/firebase";
</script>

{#if $user}
  <slot />
{:else}
  <div>
    <p class="place-self-center text-error">You must be logged in to use this feature.</p>
    <div class="blur-sm">
      <slot />
    </div>
  </div>
{/if}