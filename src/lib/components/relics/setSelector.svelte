<script lang="ts">
  import { setMetadata } from '$lib/components/relics/relicData';
	import type { customRelicStore } from './relicStore';

  export let relicStore: customRelicStore;
  let setID: number = 0;

  relicStore.subscribe((val: customRelic) => {
    setID = val.setID;
  });
</script>

<div class="dropdown dropdown-bottom flex-1">
  <button
    class="btn btn-primary">
    {setMetadata[setID].setName}
  </button>
  <div class="mt-3 z-[1] p-2 shadow card card-compact dropdown-content bg-base-200 rounded-box w-52">
    {#each setMetadata as relicSet, i}
      <button
        class="btn btn-ghost"
        on:click={() => {
          relicStore.setSetID(i);
        }}>
        {relicSet.setName}
      </button>
    {/each}
  </div>
</div>