<script lang="ts">
  import '$lib/types.d.ts'
  import SubstatInspect from "$lib/components/relics/substatInspect.svelte";
  import { customRelicStore as relicStore } from "$lib/components/relics/relicStore";
	import MainStatInspect from "$lib/components/relics/mainStatInspect.svelte";

</script>

<svelte:head>
  <title>Substat Inspector</title>
</svelte:head>

<div class="flex flex-col items-center gap-2">
  <h1 class="text-3xl">Substat Inspector</h1>

  <div class="flex flex-row gap-4">
    <div>
      <MainStatInspect relicStore={relicStore}/>
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex flex-row gap-4">
        <SubstatInspect relicStore={relicStore} substatNum={0}/>
        <SubstatInspect relicStore={relicStore} substatNum={1}/>
      </div>
      <div class="flex flex-row gap-4">
        <SubstatInspect relicStore={relicStore} substatNum={2}/>
        <SubstatInspect relicStore={relicStore} substatNum={3}/>
      </div>
    </div>
  </div>
  <div>

  </div>
</div>