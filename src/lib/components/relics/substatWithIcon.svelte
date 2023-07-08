<script lang="ts">
  import { substatIcons } from "./relicData";

  export let substatID: number;
  export let substatValue: number;
</script>

<div class="flex flex-row items-center">
  <img src={substatIcons[substatID]} alt="Substat" class="w-6 h-6 mr-2"/>
  <p class="text-sm">{substatValue}</p>
</div>