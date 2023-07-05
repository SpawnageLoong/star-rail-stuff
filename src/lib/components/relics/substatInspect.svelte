<script lang="ts">
  import '$lib/types.d.ts';
	import type { Stores, Writable } from 'svelte/store';
  interface substatMeta {
    name: string;
    min: number;
    max: number;
    float: boolean;
  };
  interface rating {
    min: number;
    max: number;
    rolls: number;
    rating: number;
  }
  const substatMetadata: substatMeta[] = [
    {
      name: "None",
      min: 0,
      max: 0,
      float: false
    }, {
      name: "HP",
      min: 33,
      max: 42,
      float: false
    }, {
      name: "ATK",
      min: 16,
      max: 21,
      float: false
    }, {
      name: "DEF",
      min: 16,
      max: 21,
      float: false
    }, {
      name: "HP%",
      min: 3.4,
      max: 4.4,
      float: true
    }, {
      name: "ATK%",
      min: 3.4,
      max: 4.4,
      float: true
    }, {
      name: "DEF%",
      min: 4.3,
      max: 5.4,
      float: true
    }, {
      name: "CRIT Rate",
      min: 2.5,
      max: 3.4,
      float: true
    }, {
      name: "CRIT DMG",
      min: 5.1,
      max: 6.5,
      float: true
    }, {
      name: "Effect HIT Rate",
      min: 3.4,
      max: 4.4,
      float: true
    }, {
      name: "Effect RES",
      min: 3.4,
      max: 4.4,
      float: true
    }, {
      name: "Break Effect",
      min: 5.1,
      max: 6.5,
      float: true
    }, {
      name: "Speed",
      min: 2,
      max: 3,
      float: false
    }
  ];
  function substatRolls( substatID: number, substatValue: number ) {
    const baseMax = substatMetadata[substatID].max;
    const rolls = Math.ceil(substatValue / baseMax);
    return rolls;
  }
  function substatRating( substatID: number, substatValue: number ) {
    const baseMin = substatMetadata[substatID].min;
    const baseMax = substatMetadata[substatID].max;
    const rollsVal = substatRolls( substatID, substatValue );
    const minVal = baseMin * rollsVal;
    const maxVal = baseMax * rollsVal;
    const ratingVal =  ( substatValue - minVal ) / ( maxVal - minVal ) * 100
    const rating: rating = {
      min: minVal,
      max: maxVal,
      rolls: rollsVal ? rollsVal : 0,
      rating: ratingVal ? ratingVal : 0
    };
    return rating;
  }
  function inputHandler( e:Event ) {
    value = parseFloat((e.target as HTMLInputElement).value);
    substatStore.update( (substat) => {
      substat.substatValue = value;
      return substat;
    });
  }

  export let substatStore: Writable<substat>;

  let substatID:number = $substatStore.substatID;
  let value:number = substatMetadata[substatID].min;
  let float:boolean = substatMetadata[substatID].float;
  let rating = substatRating( substatID, value );

  substatStore.subscribe( (substat) => {
    substatID = substat.substatID;
    value = substat.substatValue;
    float = substatMetadata[substatID].float;
    rating = substatRating( $substatStore.substatID, $substatStore.substatValue );
  });
</script>

<div class="bg-base-200 shadow rounded-box w-60 p-2">
  <div class="flex flex-col gap-2">
    <div class="flex flex-row gap-4">
      <div class="dropdown dropdown-bottom flex-1">
        <button
          class="btn btn-primary">
          {substatMetadata[substatID].name}
        </button>
        <div class="mt-3 z-[1] p-2 shadow card card-compact dropdown-content bg-base-200 rounded-box w-52">
          {#each substatMetadata as substat, i}
            <button
              class="btn btn-ghost"
              on:click={() => {
                substatID = i;
                substatStore.update( (substat) => {
                  substat.substatID = substatID;
                  substat.substatName = substatMetadata[substatID].name;
                  substat.substatValue = substatMetadata[substatID].min;
                  return substat;
                });
              }}>
              {substat.name}
            </button>
          {/each}
        </div>
      </div>
  
      <div class="dropdown dropdown-bottom">
        <button
          class="btn btn-ghost">
          {float ? value.toFixed(1)+'%' : value}
        </button>
        <div class="mt-3 z-[1] p-2 shadow card card-compact dropdown-content bg-base-200 rounded-box w-52">
          <input
            type="number"
            placeholder="Substat Value"
            class="input input-bordered input-primary w-full max-w-xs"
            on:change={inputHandler}/>
        </div>
      </div>
    </div>
  
    <div class="flex flex-row">
      <div class="flex-none">{float ? rating.min.toFixed(1) + '%' : rating.min}</div>
      <div class="flex-1 text-center">{rating.rolls} rolls</div>
      <div class="flex-none">{float ? rating.max.toFixed(1) + '%' : rating.min}</div>
    </div>
    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div class="bg-primary text-xs font-medium text-black text-center p-0.5 leading-none rounded-full" style="width: {rating.rating}%">{rating.rating.toFixed(1)}%</div>
    </div>
  </div>
</div>
