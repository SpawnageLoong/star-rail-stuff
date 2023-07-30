<script lang="ts">
  import InspectorCard from "$lib/components/relics/inspectorCard.svelte";
  import RelicCard from "$lib/components/relics/relicCard.svelte";
  import SubstatCard from "$lib/components/relics/substatCard.svelte";
  import type { relicData } from "$lib/components/relics/relicData";
	import EditFab from "$lib/components/EditFab.svelte";
	import DeleteFab from "$lib/components/DeleteFab.svelte";
	import InspectorCardEdit from "$lib/components/relics/inspectorCardEdit.svelte";

  const relic:relicData = {
    id: "test",
    nickname: "test",
    set: 0,
    piece: 0,
    level: 0,
    mainStat: 0,
    substatIDs: [0,1,2,3],
    substatValues: [0,1,2,3]
  }
</script>

<div class="absolute top-20 left-10">
  <InspectorCardEdit />
</div>
