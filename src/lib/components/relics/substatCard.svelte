<script lang="ts">
  import { customRelicStore as relicStore } from "$lib/components/relics/relicStore";
  import { substatIcons, substatMetadata } from './relicData';
  export let substat:number = 0;
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
    <div>
      <!-- RV Percentage -->
    </div>
    <div>
      <!-- Values Slider -->
    </div>
  </div>
</div>