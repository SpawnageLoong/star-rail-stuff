<script lang="ts">
  import { customRelicStore as relicStore } from "$lib/components/relics/relicStore";
  import { mainStatIcons, substatIcons, setMetadata, mainStatMetadata } from './relicData';
</script>

<div class="bg-surfaceContainerHighest rounded-xl shadow-md w-[712px] mb-4">
  <div class="m-4">
    <div class="title-large text-white mb-2">2 pc Set Effect</div>
    <div class="title-medium text-white mb-4">{setMetadata[$relicStore.setID].twoPieceEffect}</div>
    {#if !setMetadata[$relicStore.setID].ornament}
    <div class="title-large text-white mb-2">4 pc Set Effect</div>
    <div class="title-medium text-white mb-4">{setMetadata[$relicStore.setID].fourPieceEffect}</div>
    {/if}

  </div>
</div>