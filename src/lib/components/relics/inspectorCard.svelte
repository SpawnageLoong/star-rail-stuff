<script lang="ts">
  import '$lib/types.d.ts'
  import { customRelicStore as relicStore } from "$lib/components/relics/relicStore";
  import { setMetadata } from './relicData';
  import SetSelector from './setSelector.svelte';
  import PieceSelector from './pieceSelector.svelte';
  import MainStatInspect from './mainStatInspect.svelte';
  import SubstatInspect from './substatInspect.svelte';
</script>

<div class="w-[744px] mt-4 bg-surfaceContainerHigh rounded-xl shadow-xl">
  <div class="flex flex-col items-center gap-4">
    <div class="flex flex-row">
      <img
        class="w-64 h-64 m-4"
        src={setMetadata[$relicStore.setID].pieces[$relicStore.pieceID].img}
        alt="Relic"/>
      <div class="">
        <div class="h-">
          <!-- Relic Chips go here -->
        </div>
        <p class="text-white headline-medium w-[440px]">{setMetadata[$relicStore.setID].pieces[$relicStore.pieceID].name}</p>
        <p class="text-white headline-medium">+{$relicStore.relicLevel}</p>
      </div>
    </div>
  </div>
</div>