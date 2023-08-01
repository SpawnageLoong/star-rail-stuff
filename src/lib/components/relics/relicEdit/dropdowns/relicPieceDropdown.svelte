<script lang="ts">
  import { relicPieceNames } from "$lib/components/relics/relicData";
  import { customRelicStore as relicStore } from "$lib/components/relics/relicStore";
  import { fade } from "svelte/transition";

  let pieceDropdown:boolean = false;

  function openPieceDropdown() {
    pieceDropdown = true;
    document.body.addEventListener("click", closePieceDropdown);
  }
  function closePieceDropdown() {
    pieceDropdown = false;
  }
</script>

<div class="relative">
  <button
    class="bg-secondaryContainer rounded-lg text-white title-large p-2 w-[204px]"
    on:click|stopPropagation={openPieceDropdown}>
  {relicPieceNames[$relicStore.pieceID]}
  </button>
  {#if pieceDropdown}
    <div
      class="absolute top-14 z-[1] p-2 shadow-md bg-slate-700 rounded-lg w-[204px]"
      transition:fade={{duration:200}}>
      {#each relicPieceNames as pieceName, i}
        <button
          class="text-white w-full text-left p-2 rounded-lg hover:bg-slate-600"
          on:click={() => {
            relicStore.setPieceID( i );
            closePieceDropdown();
          }}>
          {pieceName}
        </button>
      {/each}
    </div>
  {/if}
</div>