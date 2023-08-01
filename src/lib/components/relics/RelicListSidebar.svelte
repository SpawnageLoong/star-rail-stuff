<script lang="ts">
  import AuthCheck from "$lib/components/AuthCheck.svelte";
  import { db, user } from "$lib/firebase";
  import { doc, collection, addDoc, updateDoc } from "firebase/firestore";
  import RelicCard from "$lib/components/relics/relicCard.svelte";
  import { customRelicStore as relicStore, relicList, loadRelicList } from "$lib/components/relics/relicStore";
  import type { relicData } from '$lib/components/relics/relicData';
	import NewFab from "../NewFab.svelte";

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
    loadRelicList();
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

  function newRelic() {
    relicStore.reset();
    relicID = '';
    relicNick = '';
  }

  export let relicID: string = '';
  export let relicNick: string = '';
</script>

<div class="top-0 bottom-0 w-[365px] h-full">
  <AuthCheck>
    <div class="h-full flex flex-col">
      <div class="flex flex-row sticky gap-2 bg-onSurface w-full px-2">
        <button
          class="bg-primary rounded-[20px] py-[10px] px-6 text-onPrimary label-large font-bold hover:bg-onPrimaryContainer transition my-2"
          on:click={saveRelic}>
          Save
        </button>
        <button
          class="bg-primary rounded-[20px] py-[10px] px-6 text-onPrimary label-large font-bold hover:bg-onPrimaryContainer transition my-2"
          on:click={saveRelicAsNew}>
          Save as New
        </button>
        <button
          class="bg-primary rounded-[20px] py-[10px] px-6 text-onPrimary label-large font-bold hover:bg-onPrimaryContainer transition my-2"
          on:click={loadRelicList}>
          Refresh List
        </button>
      </div>
      <div class="bg-surfaceContainerHigh grow overflow-y-auto no-scrollbar">
        <ul>
          {#each $relicList as relic}
            <li>
              <button on:click={() => loadRelic(relic)}>
                <RelicCard relic={relic}/>
              </button>
            </li>
          {/each}
        </ul>
      </div>
    </div>
    <div class="absolute bottom-0 right-2">
      <button
        class="focus:outline-4 outline-offset-2 focus:outline-primary"
        on:click={newRelic}>
        <NewFab />
      </button>
    </div>
  </AuthCheck>

</div>
