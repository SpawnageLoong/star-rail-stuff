<script lang="ts">
  import { customRelicStore as relicStore } from "$lib/components/relics/relicStore";
  import { substatIcons, substatMetadata } from './relicData';
  export let substat:number = 0;

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

  let substatID:number = $relicStore.substatIDs[substat];
  let value:number = substatMetadata[substatID].min;
  let float:boolean = substatMetadata[substatID].float;
  let rating = substatRating( substatID, value )
  relicStore.subscribe( (relic: customRelic) => {
    substatID = relic.substatIDs[substat];
    value = relic.substatValues[substat];
    float = substatMetadata[substatID].float;
    rating = substatRating( substatID, value );
  });
</script>

<div class="bg-surfaceContainerHighest rounded-xl shadow-md w-[348px] h-[99px]">
  <div class="flex flex-col">
    <div class="flex flex-row mt-3 ml-2 mr-4">
      <!-- Stat Icon, Name and Value -->
      <img
        class="w-9 h-9"
        src={substatIcons[$relicStore.substatIDs[substat]]}
        alt="Substat"/>
      <div class="title-large text-white flex items-center ml-3 grow">{substatMetadata[$relicStore.substatIDs[substat]].name}</div>
      <div class="title-large text-white flex items-center">
        {$relicStore.substatValues[substat] + 
        (substatMetadata[$relicStore.substatIDs[substat]].float ? ' %' : '' )}
      </div>
    </div>
    <div class="flex grow self-center label-large text-white">
      <!-- RV Percentage -->
      {rating.rating.toFixed(1) + '%'}
    </div>
    <div class="flex flex-row place-content-center">
      <!-- Values Slider -->
      <div class="label-large text-white flex items-center justify-center ml-4 w-10">{float ? rating.min.toFixed(1) + '%' : rating.min}</div>
      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mx-4 self-center">
        <div class="bg-blue-600 h-2.5 rounded-full" style="width: {rating.rating.toFixed(1)}%"></div>
      </div>
      <div class="label-large text-white flex items-center justify-center mr-4 w-10 text-left">{float ? rating.max.toFixed(1) + '%' : rating.max}</div>
    </div>
  </div>
</div>