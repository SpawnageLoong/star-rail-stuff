<script lang="ts">
  import { substatMetadata } from "$lib/components/relics/relicData";
  import { customRelicStore as relicStore } from "$lib/components/relics/relicStore";

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
    <div class="absolute top-5 bg-primary rounded-lg z-10">absolute</div>
  {/if}
</div>


