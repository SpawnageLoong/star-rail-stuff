<script lang="ts">
  import '$lib/types.d.ts'
  import type { Writable } from 'svelte/store';

  interface mainStatMeta {
    name: string,
    min: number,
    max: number,
    float: boolean,
  };
  const mainStatMetadata: mainStatMeta[] = [
    {
      name: "HP",
      min: 112,
      max: 705,
      float: false,
    }, {
      name: "ATK",
      min: 56,
      max: 352,
      float: false,
    }, {
      name: "HP%",
      min: 6.9,
      max: 43.2,
      float: true,
    }, {
      name: "ATK%",
      min: 6.9,
      max: 43.2,
      float: true,
    }, {
      name: "DEF%",
      min: 8.6,
      max: 54,
      float: true,
    }, {
      name: "CRIT Rate",
      min: 5.1,
      max: 32.4,
      float: true,
    }, {
      name: "CRIT DMG",
      min: 10.3,
      max: 64.8,
      float: true,
    }, {
      name: "Outgoing Healing",
      min: 5.5,
      max: 34.5,
      float: true,
    }, {
      name: "Effect Hit Rate",
      min: 6.9,
      max: 43.2,
      float: true,
    }, {
      name: "Speed",
      min: 1,
      max: 25,
      float: false,
    }, {
      name: "Physical DMG",
      min: 6.2,
      max: 38.8,
      float: true,
    }, {
      name: "Fire DMG",
      min: 6.2,
      max: 38.8,
      float: true,
    }, {
      name: "Ice DMG",
      min: 6.2,
      max: 38.8,
      float: true,
    }, {
      name: "Lightning DMG",
      min: 6.2,
      max: 38.8,
      float: true,
    }, {
      name: "Wind DMG",
      min: 6.2,
      max: 38.8,
      float: true,
    }, {
      name: "Quantum DMG",
      min: 6.2,
      max: 38.8,
      float: true,
    }, {
      name: "Imaginary DMG",
      min: 6.2,
      max: 38.8,
      float: true,
    }, {
      name: "Break Effect",
      min: 10.3,
      max: 64.8,
      float: true,
    }, {
      name: "Energy Regen Rate",
      min: 3.1,
      max: 19.4,
      float: true,
    }
  ]

  export let mainStat: Writable<mainStat>;

  let mainStatID: number = 0;
  let relicLevel: number = 0;
  let float: boolean = false;
  let mainStatValue: number = 0;

  $: mainStatValue = mainStatMetadata[mainStatID].min + (mainStatMetadata[mainStatID].max - mainStatMetadata[mainStatID].min) * (relicLevel / 15);

  mainStat.subscribe(mainStat => {
    mainStatID = mainStat.mainStatID;
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
                mainStat.update((mainStat) => {
                  mainStat.mainStatID = i;
                  mainStat.mainStatName = mainStatMetadata[i].name;
                  return mainStat;
                });
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