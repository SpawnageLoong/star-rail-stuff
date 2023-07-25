<script lang="ts">
  import Icon from '@iconify/svelte';
</script>

<footer class="w-full h-16 fixed bottom-0 bg-surfaceVariant z-[100]">
  <p class="absolute left-0 mx-4 my-[14px] self-center text-onSurface body-small">
    Parts of this site have been adapted from <a href="Pom.moe" class="link">Pom.moe</a>. Go check them out! <br/>
    Star Rail Suite is not affiliated with HoYoverse. Honkai: Star Rail, game content and materials are trademarks and copyrights of HoYoverse.
  </p>
  <a
    href="https://github.com/SpawnageLoong/star-rail-stuff"
    class="absolute right-0 mx-4 my-2 duration-150 text-onSurface hover:text-white md:justify-self-end"
    target="_blank">
    <Icon icon="mdi:github" height={48} />
  </a>
</footer>