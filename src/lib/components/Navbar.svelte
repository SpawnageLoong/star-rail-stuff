<script lang="ts">
  import { auth, user } from "$lib/firebase";
  import { signOut } from "firebase/auth";
  import { signInWithGoogle } from "$lib/components/Auth";

  let profileDropdown:boolean = false;
  let relicDropdown:boolean = false;

  function handleProfileOpen() {
    profileDropdown = true;
    relicDropdown = false;
    document.body.addEventListener("click", handleProfileClose);
  }
  function handleProfileClose() {
    profileDropdown = false;
    document.body.removeEventListener("click", handleProfileClose);
  }
  function handleRelicOpen() {
    relicDropdown = true;
    profileDropdown = false;
    document.body.addEventListener("click", handleRelicClose);
  }
  function handleRelicClose() {
    relicDropdown = false;
    document.body.removeEventListener("click", handleRelicClose);
  }

  async function signOutGoogle() {
    await signOut(auth);
  }
</script>

<div class="w-full h-12 fixed top-0 bg-surfaceVariant z-[100]">
  <a
    href="/">
    <div class=" absolute left-0 m-1 p-2 rounded-md text-center text-white title-medium hover:bg-surfaceBright transition">
      Star Rail Stuff
    </div>
    </a>
  <div class="flex flex-row-reverse absolute top-0 right-0 m-1 items-center gap-1">
    {#if $user}
      <button
        class="p-1 rounded-[18px] hover:bg-surfaceBright transition"
        on:click|stopPropagation={handleProfileOpen}>
        <img
          class="w-8 h-8 rounded-2xl"
          src={$user?.photoURL ?? "/user.png"}
          alt="Profile"
        />
      </button>
    {:else}
      <button
        class="p-2 rounded-md text-center text-white title-medium hover:bg-surfaceBright transition"
        on:click|stopPropagation={handleProfileOpen}>
        Login
      </button>
    {/if}
    <button
      class="p-2 rounded-md text-center text-white title-medium hover:bg-surfaceBright transition"
      on:click|stopPropagation={handleRelicOpen}>
      Relics
    </button>
  </div>
</div>

{#if relicDropdown}
  <div class="absolute top-0 right-16 mt-14 z-[101] p-2 bg-black">
    <a
      class="text-white"
      href="/relics/inspector">
      Substat Inspector
    </a>
  </div>
{/if}

{#if profileDropdown}
  <div class="absolute top-0 right-1 mt-14 z-[101] p-2 bg-black">
    {#if $user}
      <button
        class="text-white"
        on:click={signOutGoogle}>
        Logout
      </button>
    {:else}
      <button
        class="text-white"
        on:click={signInWithGoogle}>
        Login
      </button>
    {/if}
  </div>
{/if}