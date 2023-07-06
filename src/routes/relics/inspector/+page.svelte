<script lang="ts">
  import '$lib/types.d.ts'
  import MainStatInspect from "$lib/components/relics/mainStatInspect.svelte";
  import SubstatInspect from "$lib/components/relics/substatInspect.svelte";
  import { customRelicStore as relicStore } from "$lib/components/relics/relicStore";
	
  import { db, user } from "$lib/firebase";
  import { doc, getDoc, writeBatch } from "firebase/firestore";

  let debounceTimer: NodeJS.Timeout | null = null;

  async function saveRelic() {
    if ($user === null) {
      window.alert("You must be logged in to save relics.");
      return
    };
    const batch = writeBatch(db);
    batch.set(doc(db, "users", $user!.uid), {
      uid: $user?.uid,
      set: $relicStore.setID,
      piece: $relicStore.pieceID,
      level: $relicStore.relicLevel,
      mainStat: $relicStore.mainStatID,
      substatIDs: $relicStore.substatIDs.map((substat) => substat),
      substatValues: $relicStore.substatValues.map((substat) => substat)
    });
    await batch.commit();
    window.alert("Saved! Please note, this doesn't actually do anything for you yet. Right now only the developer can see your saved relics.");
  }

  async function saveRelicAsNew() {
    // TODO
  }
  async function loadRelicList() {
    // TODO
  }
  async function loadRelic() {
    // TODO
  }
</script>

<svelte:head>
  <title>Substat Inspector</title>
</svelte:head>

<div class="flex flex-col items-center gap-2 z-0">
  <h1 class="text-3xl">Substat Inspector</h1>

  <div class="flex flex-row gap-4">
    <div class="flex flex-col gap-4">
      <div>
        <h2 class="text-2xl text-center">Image goes here</h2>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={saveRelic}>Save</button>
      </div>
      <div>
        <MainStatInspect relicStore={relicStore}/>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex flex-row gap-4">
        <SubstatInspect relicStore={relicStore} substatNum={0}/>
        <SubstatInspect relicStore={relicStore} substatNum={1}/>
      </div>
      <div class="flex flex-row gap-4">
        <SubstatInspect relicStore={relicStore} substatNum={2}/>
        <SubstatInspect relicStore={relicStore} substatNum={3}/>
      </div>
    </div>
  </div>
  <div>

  </div>
</div>