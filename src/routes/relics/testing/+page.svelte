<script lang="ts">
  import InspectorCard from "$lib/components/relics/inspectorCard.svelte";
  import RelicCard from "$lib/components/relics/relicCard.svelte";
  import SubstatCard from "$lib/components/relics/substatCard.svelte";
  import type { relicData } from "$lib/components/relics/relicData";

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

<div class="w-screen h-screen place-items-center relative top-10 left-10">
  <SubstatCard />
</div>
