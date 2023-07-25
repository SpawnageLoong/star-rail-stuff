<script lang="ts">
  import { substatIcons } from "./relicData";

  export let substatID: number;
  export let substatValue: number;
</script>

<div class="flex flex-row items-center gap-3">
  <img src={substatIcons[substatID]} alt="Substat" class="w-6 h-6"/>
  <p class="text-white title-small w-10 h-5">{substatValue}</p>
</div>