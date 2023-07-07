<script lang="ts">
  import '$lib/types.d.ts'
  import MainStatInspect from "$lib/components/relics/mainStatInspect.svelte";
  import SubstatInspect from "$lib/components/relics/substatInspect.svelte";
  import { customRelicStore as relicStore, relicList } from "$lib/components/relics/relicStore";
  import type { relicData } from '$lib/components/relics/relicData';
	
  import { db, user } from "$lib/firebase";
  import { doc, collection, addDoc, updateDoc, query, where, limit, getDocs } from "firebase/firestore";
	import type { PageData } from './$types';

  let debounceTimer: NodeJS.Timeout | null = null;
  let relicID: string = '';

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
    window.alert("Saved! Please note, this doesn't actually do anything for you yet. Right now only the developer can see your saved relics.");
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
    window.alert("Saved! Please note, this doesn't actually do anything for you yet. Right now only the developer can see your saved relics.");
  }

  async function loadRelicList() {
    if (!$user) {
      return {
        status: 404,
        error: new Error(`User not found`)
      }
    }

    const collectionRef = collection(db, 'users/' + $user.uid + '/relics');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    const loadRelicList: relicData[] = [];
    querySnapshot.forEach((doc) => {
      loadRelicList.push({
        id: doc.id,
        nickname: doc.data().nickname,
        level: doc.data().level,
        mainStat: doc.data().mainStat,
        piece: doc.data().piece,
        set: doc.data().set,
        substatIDs: doc.data().substatIDs,
        substatValues: doc.data().substatValues
      })});

    relicList.set(loadRelicList);
    window.alert("Loaded relic list! " + $relicList.length + " relics found.");
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
        <h2 class="text-2xl text-center">{relicID}</h2>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={saveRelic}>Save</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={saveRelicAsNew}>Save as New</button>
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
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={loadRelicList}>Load Relic List</button>
  </div>
  <div>
    <ul>
      {#each $relicList as relic}
        <li>{relic.nickname} {relic.id}</li>
      {/each}
  </div>
</div>