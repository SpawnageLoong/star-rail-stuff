<script lang="ts">
  import '$lib/types.d.ts'
  import { mainStatMetadata } from './relicData';
	import type { customRelicStore } from './relicStore';

  export let relicStore: customRelicStore;

  let mainStatID: number = 0;
  let relicLevel: number = 0;
  let float: boolean = false;
  let mainStatValue: number = 0;

  $: mainStatValue = mainStatMetadata[mainStatID].min + (mainStatMetadata[mainStatID].max - mainStatMetadata[mainStatID].min) * (relicLevel / 15);

  relicStore.subscribe(( relic: customRelic) => {
    mainStatID = relic.mainStatID;
    relicLevel = relic.relicLevel;
    float = mainStatMetadata[mainStatID].float;
  })
</script>

<div class="bg-base-200 shadow rounded-box w-80">
  <div class="flex flex-col gap-4 p-2">
    <div class="dropdown dropdown-bottom flex-1">
      <button
        class="btn btn-ghost text-lg font-bold">
        +{relicLevel}
      </button>
      <div class="mt-3 z-[1] p-2 shadow card card-compact dropdown-content bg-base-200 rounded-box w-52">
        <input
          class="w-full input input-primary input-bordered"
          type="range"
          min="0"
          max="15"
          bind:value={relicLevel}
          on:input={() => {
            relicStore.setRelicLevel( relicLevel );
          }}
        />
      </div>
    </div>
    <div class="flex flex-row justify-between">
      <div class="dropdown dropdown-bottom">
        <button class="btn btn-ghost text-lg font-bold">
          {mainStatMetadata[mainStatID].name}
        </button>
        <div class="mt-3 z-[1] p-2 shadow card card-compact dropdown-content bg-base-200 rounded-box w-52">
          {#each mainStatMetadata as stat, i}
            <button
              class="btn btn-ghost"
              on:click={() => {
                relicStore.setMainStatID( i );
                float = mainStatMetadata[i].float;
              }}>
              {stat.name}
            </button>
          {/each}
        </div>
      </div>
      <div class="text-lg font-bold self-center pr-4">
        {float ? mainStatValue.toFixed(1)+"%" : Math.round(mainStatValue)}
      </div>
    </div>
  </div>
</div>