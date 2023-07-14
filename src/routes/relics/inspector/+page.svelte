<script lang="ts">
  import '$lib/types.d.ts'
  import AuthCheck from '$lib/components/AuthCheck.svelte';
  import { customRelicStore as relicStore, relicList, loadRelicList } from "$lib/components/relics/relicStore";
  import type { relicData } from '$lib/components/relics/relicData';
  import RelicCard from '$lib/components/relics/relicCard.svelte';
  import InspectorCard from '$lib/components/relics/inspectorCard.svelte';
	
  import { db, user } from "$lib/firebase";
  import { doc, collection, addDoc, updateDoc, query, getDocs, deleteDoc } from "firebase/firestore";

  let relicID: string = '';
  let relicNick: string = '';

  async function saveRelicAsNew() {
    if ($user === null) {
      window.alert("You must be logged in to save relics.");
      return
    };
    const userRelicsRef = collection(db, 'users/' + $user.uid + '/relics');
    let nickname: string | null = window.prompt("Please enter a name for this relic.");
    const newRelicRef = await addDoc(userRelicsRef, {
      nickname: nickname,
      set: $relicStore.setID,
      piece: $relicStore.pieceID,
      level: $relicStore.relicLevel,
      mainStat: $relicStore.mainStatID,
      substatIDs: $relicStore.substatIDs.map((substat) => substat),
      substatValues: $relicStore.substatValues.map((substat) => substat)
    });
    relicID = newRelicRef.id;
    relicNick = nickname ? nickname : '';
    loadRelicList();
    window.alert("Saved!");
  }

  async function saveRelic() {
    if ($user === null) {
      window.alert("You must be logged in to save relics.");
      return
    };
    if (relicID === '') {
      saveRelicAsNew();
      return
    }
    const RelicRef = doc(db, 'users/' + $user.uid + '/relics/' + relicID);
    let nickname: string | null = window.prompt("Please enter a name for this relic. Leave blank to keep the current name.");
    const newRelicRef = await updateDoc(RelicRef, {
      set: $relicStore.setID,
      piece: $relicStore.pieceID,
      level: $relicStore.relicLevel,
      mainStat: $relicStore.mainStatID,
      substatIDs: $relicStore.substatIDs.map((substat) => substat),
      substatValues: $relicStore.substatValues.map((substat) => substat)
    });
    if (nickname !== null) {
      await updateDoc(RelicRef, {
        nickname: nickname
      });
    }
    loadRelicList
    window.alert("Saved!");
  }

  async function loadRelic(relic: relicData) {
    relicStore.setSetID(relic.set);
    relicStore.setPieceID(relic.piece);
    relicStore.setRelicLevel(relic.level);
    relicStore.setMainStatID(relic.mainStat);
    relic.substatIDs.forEach((substat, index) => {
      relicStore.setSubstatID(index, substat);
    });
    relic.substatValues.forEach((substat, index) => {
      relicStore.setSubstatValue(index, substat);
    });
    relicID = relic.id;
    relicNick = relic.nickname;
  }

  async function deleteRelic() {
    if ($user === null) {
      window.alert("You must be logged in to delete relics.");
      return
    };
    if (relicID === '') {
      window.alert("You must save a relic before you can delete it.");
      return
    }
    const RelicRef = doc(db, 'users/' + $user.uid + '/relics/' + relicID);
    await deleteDoc(RelicRef);
    relicID = '';
    relicNick = '';
    relicStore.reset();
    loadRelicList();
  }
</script>

<svelte:head>
  <title>Substat Inspector</title>
</svelte:head>

<div class="flex flex-row gap-4">
  <div class="flex flex-col fixed left-0 bg-slate-500 w-1/3 h-full p-4">
      <AuthCheck>
        <div class="flex flex-row gap-2 sticky top-0">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={saveRelic}>Save</button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={saveRelicAsNew}>Save as New</button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={loadRelicList}>Load Relic List</button>
        </div>
        <div>
          <ul>
            {#each $relicList as relic}
              <li class="my-4">
                <button on:click={() => loadRelic(relic)}>
                  <RelicCard relic={relic}/>
                </button>
              </li>
            {/each}
          </ul>
        </div>
      </AuthCheck>
  </div>

  <div class="flex flex-col gap-4 ml-96 z-0">
    <h1 class="text-3xl text-center">Substat Inspector</h1>
    <InspectorCard relicID={relicID} relicNick={relicNick} />
    <button class="bg-red-500 hover:bg-red-700 text-white font-bold place-self-center py-2 px-4 rounded" on:click={deleteRelic}>Delete Relic</button>
  </div>

</div>