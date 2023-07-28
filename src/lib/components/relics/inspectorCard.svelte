<script lang="ts">
  import '$lib/types.d.ts'
  import { customRelicStore as relicStore } from "$lib/components/relics/relicStore";
  import { mainStatIcons, setMetadata, mainStatMetadata } from './relicData';
  import SetSelector from './setSelector.svelte';
  import PieceSelector from './pieceSelector.svelte';
  import MainStatInspect from './mainStatInspect.svelte';
  import SubstatInspect from './substatInspect.svelte';

  let mainStatID: number = 0;
  let relicLevel: number = 0;
  let float: boolean = false;
  let mainStatValue: number = 0;

  $: mainStatValue = mainStatMetadata[mainStatID].min + (mainStatMetadata[mainStatID].max - mainStatMetadata[mainStatID].min) * (relicLevel / 15);

  relicStore.subscribe(( relic: customRelic) => {
    mainStatID = relic.mainStatID;
    relicLevel = relic.relicLevel;
    float = mainStatMetadata[mainStatID].float;
  })
</script>

<div class="w-[744px] mt-4 bg-surfaceContainerHigh rounded-xl shadow-xl">
  <div class="flex flex-col items-center gap-4">
    <div class="flex flex-row">
      <img
        class="w-64 h-64 m-4"
        src={setMetadata[$relicStore.setID].pieces[$relicStore.pieceID].img}
        alt="Relic"/>
      <div class="">
        <div class="h-8">
          <!-- Relic Chips go here -->
        </div>
        <div class="text-white headline-medium w-[440px] h-9 flex items-center">{setMetadata[$relicStore.setID].pieces[$relicStore.pieceID].name}</div>
        <div class="text-white headline-medium h-9 flex items-center">+{$relicStore.relicLevel}</div>
        <div class="flex flex-row gap-2 items-center">
          <img
            class="w-12 h-12"
            src={mainStatIcons[$relicStore.mainStatID]}
            alt="Main Stat"/>
          <p class="text-white display-small h-[44px] relative -top-[4px]">{mainStatMetadata[$relicStore.mainStatID].name}</p>
        </div> 
        <div class="text-white display-medium h-[52px] flex items-center">{float ? mainStatValue.toFixed(1)+"%" : Math.round(mainStatValue)}</div> 
      </div>
    </div>
  </div>
</div>