<script lang="ts">
  let openMenu = false

  const handleOpenMenu = function () {
    openMenu = !openMenu
  }
</script>

<div class="grid w-full md:flex md:justify-end">
  <div class="z-10 flex items-center justify-end pr-6 md:hidden" >
    <button type="button" on:click={handleOpenMenu}>
      <img src={`/assets/img/shared/icon-${openMenu ? 'close' : 'hamburger'}.svg`} alt="Toggle menu" />
    </button>
  </div>

  <nav class="absolute md:inline inset-y-0 right-0 h-screen w-64 bg-white/[0.04] pt-[7.25rem] backdrop-blur-2xl md:relative md:inset-0 md:h-full md:max-h-24 md:w-[28.125rem] md:py-10 lg:py-9 xl:w-[51.875rem]" class:hidden={!openMenu}>
    <ul class="flex h-full flex-col gap-y-[1.6875rem] pl-8 font-barlow-condensed text-base uppercase tracking-[0.16875rem] text-white md:flex-row md:items-center md:gap-9 md:pl-12 xl:gap-12 xl:pl-[123px] md-only:text-sm md-only:tracking-[0.1475rem]">
      <li>
        <a href="/" title="Home">
          <span class="font-bold md:hidden xl:inline">00</span>
          <span class="font-normal">Home</span>
        </a>
      </li>
      <li>
        <a href="/" title="Destination">
          <span class="font-bold md:hidden xl:inline">01</span>
          <span class="font-normal">Destination</span>
        </a>
      </li>
      <li>
        <a href="/" title="Crew">
          <span class="font-bold md:hidden xl:inline">02</span>
          <span class="font-normal">Crew</span>
        </a>
      </li>
      <li>
        <a href="/" title="Technology">
          <span class="font-bold md:hidden xl:inline">03</span>
          <span class="font-normal">Technology</span>
        </a>
      </li>
    </ul>
  </nav>
</div>