<script lang="ts">
  import '$lib/types.d.ts'
  import { setMetadata } from './relicData';
  import type { relicData } from './relicData';
  import SubstatWithIcon from './substatWithIcon.svelte';

  export let relic: relicData;

</script>

<div class="card card-side bg-base-200 shadow-xl w-96">
  <figure><img src={setMetadata[relic.set].pieces[relic.piece].img} alt="Relic"/></figure>
  <div class="card-body">
    <h2 class="card-title inline-block text-left truncate w-[192px]">{relic.nickname}</h2>
    <div class="text-left font-bold">+{relic.level}</div>
    <div class="grid grid-cols-2 gap-4 w-48">
      {#each relic.substatIDs as substatID, i}
        {#if substatID !== 0}
          <SubstatWithIcon substatID={substatID} substatValue={relic.substatValues[i]} />
        {/if}
      {/each}
    </div>
  </div>
</div>