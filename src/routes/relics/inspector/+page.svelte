<script lang="ts">
  import '$lib/types.d.ts'
  import { customRelicStore as relicStore, loadRelicList } from "$lib/components/relics/relicStore";
  import InspectorCard from '$lib/components/relics/inspectorCard.svelte';
	
  import { db, user } from "$lib/firebase";
  import { doc, deleteDoc } from "firebase/firestore";
	import RelicListSidebar from '$lib/components/relics/RelicListSidebar.svelte';
	import EditFab from '$lib/components/EditFab.svelte';
	import DeleteFab from '$lib/components/DeleteFab.svelte';
	import SaveFab from '$lib/components/SaveFab.svelte';
	import InspectorCardEdit from '$lib/components/relics/relicEdit/inspectorCardEdit.svelte';

  let relicID: string = '';
  let relicNick: string = '';
  let editMode: boolean = false;

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
  <RelicListSidebar bind:relicID={relicID} bind:relicNick={relicNick}/>
</div>

<div class="flex flex-row pt-4 ml-[365px] place-content-center gap-4">
  <InspectorCard />
  <div class="flex flex-col gap-4">
    <button
      class=""
      on:click={() => {editMode = true}}>
      <EditFab />
    </button>
    <button
      class=""
      on:click={deleteRelic}>
      <DeleteFab />
    </button>
  </div>
</div>

{#if editMode}
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <!--
      Background backdrop, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm transition-opacity"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <!--
          Modal panel, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        -->
        <div class="relative ml-[365px] -top-40 transform overflow-auto rounded-lg shadow-xl transition-all">
          <InspectorCardEdit bind:modalOpen={editMode}/>
        </div>
      </div>
    </div>
  </div>
{/if}

