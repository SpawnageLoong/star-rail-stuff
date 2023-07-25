<script lang="ts">
  import '$lib/types.d.ts'
  import { setMetadata } from './relicData';
  import type { relicData } from './relicData';
  import SubstatWithIcon from './substatWithIcon.svelte';

  export let relic: relicData;

</script>

<div class="bg-surfaceContainerHighest shadow-xl w-[333px] m-4 rounded-xl">
  <div class="flex flex-row">
    <div class="grid grid-cols-2 grid-rows-3 w-24 h-24 m-4">
      <div class="col-start-2 row-start-3 w-12 h-8 bg-black opacity-80 rounded-xl">
        <div class="text-white label-large mt-1.5 text-center">+{relic.level}</div>
      </div>

      <img
        src={setMetadata[relic.set].pieces[relic.piece].img}
        class="col-span-2 row-span-3 col-start-1 row-start-1"
        alt="Relic"/>

    </div>

    <div class="flex flex-col">
      <p class="my-4 mr-4 inline-block text-left text-white title-medium truncate h-6 w-[189px]">{relic.nickname}</p>
      <div class="grid grid-cols-2 gap-x-4 gap-y-3">
        {#each relic.substatIDs as substatID, i}
          {#if substatID !== 0}
            <SubstatWithIcon substatID={substatID} substatValue={relic.substatValues[i]} />
          {/if}
        {/each}
      </div>
    </div>
  </div>

  
</div>