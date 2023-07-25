<script lang="ts">
  import '$lib/types.d.ts'
  import { customRelicStore as relicStore, loadRelicList } from "$lib/components/relics/relicStore";
  import InspectorCard from '$lib/components/relics/inspectorCard.svelte';
	
  import { db, user } from "$lib/firebase";
  import { doc, deleteDoc } from "firebase/firestore";
	import RelicListSidebar from '$lib/components/relics/RelicListSidebar.svelte';

  let relicID: string = '';
  let relicNick: string = '';

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

<div class="fixed left-0 top-12 bottom-16">
  <RelicListSidebar relicID={relicID} relicNick={relicNick}/>
</div>

 <div class="flex flex-col grow gap-4 place-items-center z-0">
  <InspectorCard relicID={relicID} relicNick={relicNick} />
  <button class="bg-red-500 hover:bg-red-700 text-white font-bold place-self-center py-2 px-4 rounded" on:click={deleteRelic}>Delete Relic</button>
</div>
