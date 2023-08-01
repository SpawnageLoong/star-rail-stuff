<script lang="ts">
	import MainstatDropdown from "./dropdowns/mainstatDropdown.svelte";
	import RelicPieceDropdown from "./dropdowns/relicPieceDropdown.svelte";
	import RelicSetDropdown from "./dropdowns/relicSetDropdown.svelte";
  import { customRelicStore as relicStore } from "$lib/components/relics/relicStore";

  let relicLevel:number = 0;
</script>

<div class="bg-surfaceContainerHighest rounded-2xl p-4 flex flex-col w-[560px] gap-4">
  <div class="flex flex-row gap-4">
    <RelicSetDropdown />
    <input
        type="number" 
        id="relic-level" 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Relic Level"
        bind:value={relicLevel}
        on:change|stopPropagation|preventDefault={() => {
          relicStore.setRelicLevel( relicLevel );
        }}>
  </div>
  <div class="flex flex-row gap-4">
    <MainstatDropdown />
    <RelicPieceDropdown />
  </div>
</div>
