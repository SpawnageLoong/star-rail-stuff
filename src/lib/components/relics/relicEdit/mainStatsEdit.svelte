<script lang="ts">

	import MainstatDropdown from "./dropdowns/mainstatDropdown.svelte";
	import RelicPieceDropdown from "./dropdowns/relicPieceDropdown.svelte";
	import RelicSetDropdown from "./dropdowns/relicSetDropdown.svelte";


</script>

<div class="bg-surfaceContainerHighest rounded-2xl p-4 flex flex-col w-[560px] gap-4">
  <div class="flex flex-row gap-4">
    <RelicSetDropdown />
  </div>
  <div class="flex flex-row gap-4">
    <MainstatDropdown />
    <RelicPieceDropdown />
  </div>
</div>
