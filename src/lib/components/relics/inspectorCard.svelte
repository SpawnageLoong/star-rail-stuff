<script lang="ts">
  import '$lib/types.d.ts'
  import { customRelicStore as relicStore } from "$lib/components/relics/relicStore";
  import { setMetadata } from './relicData';
  import SetSelector from './setSelector.svelte';
  import PieceSelector from './pieceSelector.svelte';
  import MainStatInspect from './mainStatInspect.svelte';
  import SubstatInspect from './substatInspect.svelte';

  export let relicID: string = '';
  export let relicNick = '';
</script>

<div class="card bg-slate-600 shadow-xl">
  <div class="card-body">
    <div class="flex flex-col items-center gap-2 z-0">
      <h1 class="text-3xl pb-4">{relicNick ? relicNick : relicID}</h1>
    
      <div class="flex flex-row gap-4">
        <div class="flex flex-col gap-4">
          <img src={setMetadata[$relicStore.setID].pieces[$relicStore.pieceID].img} alt="Relic" class="w-64 h-64"/>
          <SetSelector relicStore={relicStore}/>
          <PieceSelector relicStore={relicStore}/>
          <MainStatInspect relicStore={relicStore}/>
        </div>
    
        <div class="flex flex-col gap-4">
            <SubstatInspect relicStore={relicStore} substatNum={0}/>
            <SubstatInspect relicStore={relicStore} substatNum={1}/>
            <SubstatInspect relicStore={relicStore} substatNum={2}/>
            <SubstatInspect relicStore={relicStore} substatNum={3}/>
        </div>
      </div>
    </div>
  </div>
</div>