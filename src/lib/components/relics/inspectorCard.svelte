<script lang="ts">
  import '$lib/types.d.ts'
  import { customRelicStore as relicStore } from "$lib/components/relics/relicStore";
  import { mainStatIcons, setMetadata, mainStatMetadata, relicPieceNames, ornamentPieceNames } from './relicData';
  import SubstatCard from './substatCard.svelte';
  import SetSelector from './setSelector.svelte';
  import PieceSelector from './pieceSelector.svelte';
  import MainStatInspect from './mainStatInspect.svelte';
  import SubstatInspect from './substatInspect.svelte';
	import SetEffectCard from './setEffectCard.svelte';

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

<div class="w-[744px] bg-surfaceContainerHigh rounded-xl shadow-md">
  <div class="flex flex-col items-center gap-4">
    <div class="flex flex-row">
      <img
        class="w-64 h-64 m-4"
        src={setMetadata[$relicStore.setID].pieces[$relicStore.pieceID].img}
        alt="Relic"/>
      <div>
        <div class="flex flex-row mt-4 mb-2 gap-2">
          <div class="material-chip">{setMetadata[$relicStore.setID].setName}</div>
          <div class="material-chip">{relicPieceNames[$relicStore.pieceID]}</div>
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

    <div class="grid grid-cols-2 grid-rows-2 gap-4">
      <div class="col-span-1 row-span-1 col-start-1 row-start-1">
        <SubstatCard substat={0}/>
      </div>
      <div class="col-span-1 row-span-1 col-start-2 row-start-1">
        <SubstatCard substat={1}/>
      </div>
      <div class="col-span-1 row-span-1 col-start-1 row-start-2">
        <SubstatCard substat={2}/>
      </div>
      <div class="col-span-1 row-span-1 col-start-2 row-start-2">
        <SubstatCard substat={3}/>
      </div>
    </div>

    <SetEffectCard/>
  </div>
</div>