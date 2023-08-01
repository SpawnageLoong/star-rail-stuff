<script lang="ts">
	import SubstatDropdown from "./dropdowns/substatDropdown.svelte";
  import { substatMetadata } from "$lib/components/relics/relicData";
  import { customRelicStore as relicStore } from "$lib/components/relics/relicStore";

  export let substat:number = 0;
  export let value:number = $relicStore.substatValues[substat];
</script>

<div class="bg-surfaceContainerHighest rounded-2xl p-4 flex flex-col w-[560px] gap-4">
  <div class="flex flex-row gap-2">
    <SubstatDropdown substat={substat}/>
    <div class="flex grow text-white headline-medium justify-end items-center">
      <input
        type="number" 
        id="substat-value" 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Substat Value"
        bind:value={value}
        on:change|stopPropagation|preventDefault={() => {
          relicStore.setSubstatValue( substat, value );
        }}>
    </div>
    {#if (substatMetadata[$relicStore.substatIDs[substat]].float)}
      <div class="flex text-white headline-medium items-center">
        %
      </div>
    {/if}
  </div>
</div>