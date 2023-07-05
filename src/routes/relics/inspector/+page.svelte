<script lang="ts">
  import SubstatInspect from "$lib/components/relics/substatInspect.svelte";
  import { substat1Store, substat2Store, substat3Store, substat4Store } from "$lib/components/relics/relicStore";
</script>

<svelte:head>
  <title>Substat Inspector</title>
</svelte:head>

<div class="flex flex-col items-center gap-2">
  <h1 class="text-3xl">Substat Inspector</h1>

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