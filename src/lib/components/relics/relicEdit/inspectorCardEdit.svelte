<script lang="ts">
  import '$lib/types.d.ts'
  import { customRelicStore as relicStore } from "$lib/components/relics/relicStore";
  import { mainStatMetadata } from '../relicData';
	import SubstatEdit from './substatEdit.svelte';
	import MainStatsEdit from './mainStatsEdit.svelte';
  import { db, user } from "$lib/firebase";
  import { doc, collection, addDoc, updateDoc } from "firebase/firestore";

  let mainStatID: number = 0;
  let relicLevel: number = 0;
  export let modalOpen: boolean = false;

  $: mainStatValue = mainStatMetadata[mainStatID].min + (mainStatMetadata[mainStatID].max - mainStatMetadata[mainStatID].min) * (relicLevel / 15);

  relicStore.subscribe(( relic: customRelic) => {
    mainStatID = relic.mainStatID;
    relicLevel = relic.relicLevel;
  })

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
    window.alert("Saved!");
  }

  export let relicID: string = '';
  export let relicNick: string = '';
</script>

<div class="bg-surfaceContainerHigh rounded-xl shadow-md p-6">
  <div class="flex flex-col gap-4">
    <div class="flex flex-row">
      <div class="flex grow text-white headline-medium">Relic Editor</div>
      <button
        class="text-white bg-secondaryContainer hover:bg-secondaryContainer font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        on:click={() => {saveRelic()}}>
        Save
      </button>
      <button
        class="text-white bg-secondaryContainer hover:bg-primaryContainer font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        on:click={() => {modalOpen = false}}>
        Close
      </button>
    </div>
    <div class="grid grid-cols-2 grid-rows-1 gap-4">
      <div>
        <MainStatsEdit />
      </div>
      <div class="grid grid-cols-1 grid-rows-4 gap-4">
        <SubstatEdit substat={0}/>
        <SubstatEdit substat={1}/>
        <SubstatEdit substat={2}/>
        <SubstatEdit substat={3}/>
      </div>
    </div>
  </div>
</div>
