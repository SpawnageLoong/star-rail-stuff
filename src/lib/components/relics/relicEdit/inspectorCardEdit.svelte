<script lang="ts">
  import '$lib/types.d.ts'
  import { customRelicStore as relicStore } from "$lib/components/relics/relicStore";
  import { mainStatIcons, setMetadata, mainStatMetadata, relicPieceNames, ornamentPieceNames } from '../relicData';
	import SubstatEdit from './substatEdit.svelte';
	import MainStatsEdit from './mainStatsEdit.svelte';

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

  let setDropdownOpen: boolean = false;
  let pieceDropdownOpen: boolean = false;
  let levelDropdownOpen: boolean = false;
  let mainStatDropdownOpen: boolean = false;
</script>

<div class="bg-surfaceContainerHigh rounded-xl shadow-md p-6">
  <div class="flex flex-col gap-4">
    <div class="flex flex-row">
      <div class="flex grow text-white headline-medium">Relic Editor</div>
    </div>
    <div class="grid grid-cols-2 grid-rows-1 gap-4">
      <div>
        <MainStatsEdit />
      </div>
      <div class="grid grid-cols-1 grid-rows-4 gap-4">
        <SubstatEdit substat={0}/>
        <SubstatEdit substat={1}/>
        <SubstatEdit substat={2}/>
        <SubstatEdit substat={3}/>
      </div>
    </div>
  </div>
</div>
