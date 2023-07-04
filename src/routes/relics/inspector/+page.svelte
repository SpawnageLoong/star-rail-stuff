<script lang="ts">
  import SubstatInspect from "$lib/components/relics/substatInspect.svelte";
  let substat1Val: number = 1;
  let substatID: number= 0;
</script>

<div class="flex flex-col items-center gap-2">
  <h1 class="text-3xl">Substat Inspector</h1>
  <SubstatInspect />
</div>