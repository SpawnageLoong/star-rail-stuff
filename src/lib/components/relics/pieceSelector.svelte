<script lang="ts">
  import { setMetadata } from '$lib/components/relics/relicData';
  import type { pieceImg } from '$lib/components/relics/relicData';
	import type { customRelicStore } from './relicStore';

  export let relicStore: customRelicStore;
  let pieceID: number = 0;
  let setIndex: number = 0;
  let pieceArray: pieceImg[] = [];

  relicStore.subscribe((val: customRelic) => {
    pieceID = val.pieceID;
    setIndex = val.setID;
    pieceArray = setMetadata[setIndex].pieces;
  });
</script>

<div class="dropdown dropdown-bottom flex-1">
  <button
    class="btn btn-primary">
    {pieceArray[pieceID].name}
  </button>
  <div class="mt-3 z-[1] p-2 shadow card card-compact dropdown-content bg-base-200 rounded-box w-52">
    {#each pieceArray as piece, i}
      <button
        class="btn btn-ghost"
        on:click={() => {
          relicStore.setPieceID(i);
        }}>
        {piece.name}
      </button>
    {/each}
  </div>
</div>