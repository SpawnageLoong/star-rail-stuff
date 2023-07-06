<script lang="ts">
  import '$lib/types.d.ts'
  import SubstatInspect from "$lib/components/relics/substatInspect.svelte";
  import { mainStatStore, substat1Store, substat2Store, substat3Store, substat4Store, relicStore } from "$lib/components/relics/relicStore";
	import MainStatInspect from "$lib/components/relics/mainStatInspect.svelte";

  let relic: relic;
  relicStore.subscribe(value => {
    relic = value;
  })
</script>

<svelte:head>
  <title>Substat Inspector</title>
</svelte:head>

<div class="flex flex-col items-center gap-2">
  <h1 class="text-3xl">Substat Inspector</h1>

  <div class="flex flex-row gap-4">
    <div>
      <MainStatInspect mainStat={mainStatStore}/>
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex flex-row gap-4">
        <SubstatInspect substatStore={substat1Store}/>
        <SubstatInspect substatStore={substat2Store}/>
      </div>
      <div class="flex flex-row gap-4">
        <SubstatInspect substatStore={substat3Store}/>
        <SubstatInspect substatStore={substat4Store}/>
      </div>
    </div>
  </div>
  <div>
    <br /> {relic.mainStat.mainStatID} {relic.mainStat.mainStatName}
    <br /> {relic.substat1.substatID} {relic.substat1.substatValue}
    <br /> {relic.substat2.substatID} {relic.substat2.substatValue}
    <br /> {relic.substat3.substatID} {relic.substat3.substatValue}
    <br /> {relic.substat4.substatID} {relic.substat4.substatValue}
  </div>
</div>