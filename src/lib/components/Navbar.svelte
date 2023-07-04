<script lang="ts">
    import { auth, user } from "$lib/firebase";
    import { signOut } from "firebase/auth";
    import { signInWithGoogle } from "$lib/components/Auth";

    async function signOutGoogle() {
      await signOut(auth);
    }
</script>

<div class="navbar bg-base-100 sticky top-0 gap-2">
  <div class="flex-1">
    <a
      href="/home"  
      class="btn btn-ghost normal-case text-xl">
      Star Rail Suite
      </a>
  </div>
  <div class="dropdown dropdown-end">
    <span tabindex="-1">
      <btn
        class="btn btn-ghost">
        Relics
    </btn>
    </span>
    <ul tabindex="-1" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52">
      <li>
        <a href="/relics/info">Info</a>
      </li>
      <li>
        <a href="/relics/builder">Builder</a>
      </li>
    </ul>
  </div>
  <div class="flex-none gap-2">
    {#if $user}
    <div class="dropdown dropdown-end">
      <span tabindex="-1" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src={$user?.photoURL ?? "/user.png"} alt="Profile" />
        </div>
      </span>
      <ul tabindex="-1" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52">
        <li>
          <a
            href="/profile"
            class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a href="/settings">Settings</a></li>
        <li>
          <btn
            on:click={signOutGoogle}
            on:keypress={signOutGoogle}
            role="button"
            tabindex="0">
            Logout
          </btn>
        </li>
      </ul>
    </div>
    {:else}
    <div class="dropdown dropdown-end">
      <span tabindex="-1" class="btn btn-ghost">
        <p>Login</p>
      </span>
      <div tabindex="-1" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-200 shadow">
          <div class="card-body">
            <button
              class="btn btn-active btn-info justify-center"
              on:click={signInWithGoogle}>
              Sign in with Google
            </button>
          </div>
      </div>
    </div>
    {/if}
  </div>
</div>