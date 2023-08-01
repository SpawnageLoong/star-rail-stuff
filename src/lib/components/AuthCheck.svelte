<script lang="ts">
  import { user } from "$lib/firebase";
</script>

{#if $user}
  <slot />
{:else}
  <div class="grid grid-cols-1 grid-rows-1 h-full">
    <p class="col-start-1 row-start-1 place-self-center text-error z-10">You must be logged in to save and load Relics.</p>
    <div class="col-start-1 row-start-1 blur-sm">
      <slot />
    </div>
  </div>
{/if}