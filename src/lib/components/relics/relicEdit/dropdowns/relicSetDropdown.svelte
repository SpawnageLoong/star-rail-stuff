<script lang="ts">
  import { setMetadata } from "$lib/components/relics/relicData";
  import { customRelicStore as relicStore } from "$lib/components/relics/relicStore";
  import { fade } from "svelte/transition";

  let setDropdown:boolean = false;

  function openSetDropdown() {
    setDropdown = true;
    document.body.addEventListener("click", closeSetDropdown);
  }
  function closeSetDropdown() {
    setDropdown = false;
  }
</script>

<div class="relative">
  <button
    class="bg-secondaryContainer rounded-lg text-white title-large p-2 w-[528px]"
    on:click|stopPropagation={openSetDropdown}>
  {setMetadata[$relicStore.setID].setName}
  </button>
  {#if setDropdown}
    <div
      class="absolute top-14 z-[1] p-2 shadow-md bg-slate-700 rounded-lg w-[528px]"
      transition:fade={{duration:200}}>
      {#each setMetadata as setMeta, i}
        <button
          class="text-white w-full text-left p-2 rounded-lg hover:bg-slate-600"
          on:click={() => {
            relicStore.setSetID( i );
            closeSetDropdown();
          }}>
          {setMeta.setName}
        </button>
      {/each}
    </div>
  {/if}
</div>
