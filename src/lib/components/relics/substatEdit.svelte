<script lang="ts">
  import { substatMetadata } from "$lib/components/relics/relicData";
  import { customRelicStore as relicStore } from "$lib/components/relics/relicStore";
  import { fade } from "svelte/transition";

  export let substat:number = 0;
  let substatDropdown:boolean = false;

  function openSubstatDropdown() {
    substatDropdown = true;
    document.body.addEventListener("click", closeSubstatDropdown);
  }
  function closeSubstatDropdown() {
    substatDropdown = false;
  }
</script>

<div class="relative">
  <button
    class="bg-secondaryContainer rounded-lg text-white p-2"
    on:click|stopPropagation={openSubstatDropdown}>
  {substatMetadata[$relicStore.substatIDs[substat]].name}
  </button>
  {#if substatDropdown}
    <div
      class="absolute top-12 z-[1] p-2 shadow bg-slate-700 rounded-lg w-52"
      transition:fade={{duration:200}}>
      {#each substatMetadata as substatMeta, i}
        <button
          class="text-white w-full text-left p-2 rounded-lg hover:bg-slate-600"
          on:click={() => {
            relicStore.setSubstatID( substat, i );
            relicStore.setSubstatValue( substat, substatMeta.min );
            closeSubstatDropdown();
          }}>
          {substatMeta.name}
        </button>
      {/each}
    </div>
  {/if}
</div>


