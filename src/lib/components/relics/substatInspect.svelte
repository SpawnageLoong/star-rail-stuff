<script lang="ts">
  import '$lib/types.d.ts';
  import { substatMetadata } from './relicData';
	import type { customRelicStore } from './relicStore';
  import { slide, fade } from 'svelte/transition';
  
  interface rating {
    min: number;
    max: number;
    rolls: number;
    rating: number;
  }
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
      rating: (rollsVal <=6) ? ratingVal : -1
    };
    return rating;
  }
  function inputHandler( e:Event ) {
    value = parseFloat((e.target as HTMLInputElement).value);
    relicStore.setSubstatValue( substatNum, value );
    valDropdown = false;
  }

  export let relicStore: customRelicStore;
  export let substatNum: number;

  let substatID:number = $relicStore.substatIDs[substatNum];
  let value:number = substatMetadata[substatID].min;
  let float:boolean = substatMetadata[substatID].float;
  let rating = substatRating( substatID, value );
  let statDropdown: boolean = false;
  let valDropdown: boolean = false;

  relicStore.subscribe( (relic: customRelic) => {
    substatID = relic.substatIDs[substatNum];
    value = relic.substatValues[substatNum];
    float = substatMetadata[substatID].float;
    rating = substatRating( substatID, value );
  });

  function handleStatOpen() {
    statDropdown = true;
    document.body.addEventListener('click', handleStatClose);
  }
  function handleStatClose() {
    statDropdown = false;
    document.body.removeEventListener('click', handleStatClose);
  }
  function handleValOpen() {
    valDropdown = true;
  }
</script>

<div class="bg-base-200 shadow rounded-box w-60 p-2">
  <div class="flex flex-col gap-2">
    <div class="flex flex-row gap-4">
      <div class="flex-1">
        <button
          class="btn btn-primary"
          on:click|stopPropagation={handleStatOpen}>
          {substatMetadata[substatID].name}
        </button>
      </div>
  
      <div>
        <button
          class="btn btn-ghost"
          on:click|stopPropagation={handleValOpen}>
          {float ? value.toFixed(1)+'%' : value}
        </button>
      </div>
    </div>

    {#if statDropdown}
      <div
        class="absolute mt-16 z-[1] p-2 shadow card card-compact bg-slate-700 rounded-box w-52"
        transition:fade={{duration:200}}>
        {#each substatMetadata as substat, i}
          <button
            class="btn btn-ghost"
            on:click={() => {
              relicStore.setSubstatID( substatNum, i );
              relicStore.setSubstatValue( substatNum, substat.min );
              handleStatOpen();
            }}>
            {substat.name}
          </button>
        {/each}
      </div>
    {/if}

    {#if valDropdown}
      <div
        class="absolute mt-16 ml-4 z-[1] p-2 shadow card card-compact bg-slate-700 rounded-box w-52"
        transition:fade={{duration: 200}}>
        <input
          id="substatValue"
          type="number"
          placeholder="Substat Value"
          class="input input-bordered input-primary w-full max-w-xs"
          on:change={inputHandler}/>
      </div>
    {/if}
    
    {#if rating.rating >= 0}
    <div class="flex flex-row">
      <div class="flex-none">{float ? rating.min.toFixed(1) + '%' : rating.min}</div>
      <div class="flex-1 text-center">{rating.rolls} {rating.rolls === 1 ? 'roll' : 'rolls'}</div>
      <div class="flex-none">{float ? rating.max.toFixed(1) + '%' : rating.max}</div>
    </div>
    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div class="bg-primary text-xs font-medium text-black text-center p-0.5 leading-none rounded-full" style="width: {rating.rating}%">{rating.rating.toFixed(1)}%</div>
    </div>
    {:else if substatID === 0}
    <div>
    </div>
    {:else}
    <div class="flex flex-row">
      <div class="flex-1 text-center">Invalid Substat Value</div>
    </div>
    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div class="bg-red-600 text-xs font-medium text-black text-center p-0.5 leading-none rounded-full" style="width: 100%">Invalid</div>
    </div>
    {/if}
  </div>
</div>
