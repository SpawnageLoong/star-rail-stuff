<script lang="ts">
  import { auth, user } from '$lib/firebase';
  import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider);
    console.log(user);
  }

  async function signOutGoogle() {
    await signOut(auth);
  }
</script>

<h1 class="text-center text-xl">Login</h1>
<main class="card w-4/6 bg-neutral text-neutral-content mx-auto">
  <div class="card-body items-center text-center">
    {#if !$user}
      <button
        class="btn btn-primary"
        on:click={signInWithGoogle}>
        Sign in with Google
      </button>
    {:else}
      You're logged in!
      <a
        href="/onboarding"
        class="btn btn-primary">
        Onboarding
      </a>
      <button
        class="btn btn-primary"
        on:click={signOutGoogle}>
        Sign out
      </button>
    {/if}
  </div>
</main>
