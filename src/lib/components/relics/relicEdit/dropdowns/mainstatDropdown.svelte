<script lang="ts">
  import { mainStatMetadata } from "$lib/components/relics/relicData";
  import { customRelicStore as relicStore } from "$lib/components/relics/relicStore";
  import { fade } from "svelte/transition";

  let mainstatDropdown:boolean = false;

  function openMainstatDropdown() {
    mainstatDropdown = true;
    document.body.addEventListener("click", closeMainstatDropdown);
  }
  function closeMainstatDropdown() {
    mainstatDropdown = false;
  }
</script>

<div class="relative">
  <button
    class="bg-secondaryContainer rounded-lg text-white title-large p-2 w-56"
    on:click|stopPropagation={openMainstatDropdown}>
  {mainStatMetadata[$relicStore.mainStatID].name}
  </button>
  {#if mainstatDropdown}
    <div
      class="absolute top-14 z-[1] p-2 shadow-md bg-slate-700 rounded-lg w-56"
      transition:fade={{duration:200}}>
      {#each mainStatMetadata as mainStatMeta, i}
        <button
          class="text-white w-full text-left p-2 rounded-lg hover:bg-slate-600"
          on:click={() => {
            relicStore.setMainStatID( i );
            closeMainstatDropdown();
          }}>
          {mainStatMeta.name}
        </button>
      {/each}
    </div>
  {/if}
</div>


