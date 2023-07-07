<script lang="ts">
  import '$lib/types.d.ts'
  import { relicMetadata, ornamentMetadata } from './relicData';
  import type { relicData } from './relicData';

  export let relic: relicData;

</script>

<div class="card card-side bg-base-200 shadow-xl">
  <figure><img src={relicMetadata[(4 * relic.set) + relic.piece].img} alt="Relic"/></figure>
  <div class="card-body">
    <h2 class="card-title">{relic.nickname}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Load</button>
    </div>
  </div>
</div>