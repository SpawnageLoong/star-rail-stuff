<script lang="ts">
  import Analytics from "$lib/components/Analytics.svelte";
  import SubstatInspect from "$lib/components/relics/substatInspect.svelte";
</script>

<svelte:head>
  <title>Substat Inspector</title>
</svelte:head>
<Analytics />

<div class="flex flex-col items-center gap-2">
  <h1 class="text-3xl">Substat Inspector</h1>
  <SubstatInspect />
</div>