<template>
  <section class="py-16 overflow-hidden xl:py-24 bg-neutral-800 text-white relative">
    <span class="w-96 h-96 bg-neutral-700 absolute bottom-0 left-0 rounded-full blur-3xl translate-y-1/2 scale-110"></span>
    <div class="container relative mx-auto px-5 lg:w-10/12 xl:w-9/12 2xl:w-8/12">
      <div class="grid xl:grid-cols-2 gap-3">
        <div>
          <div class="mb-10">
            <h1 class="text-2xl xl:text-5xl mb-4 font-bold">
              The Missing Package Manager for macOS (or Linux)
            </h1>
            <p>Homebrew is a free and open-source software package management system that simplifies the installation of software on Apple's operating system, macOS, as well as Linux. </p>
          </div>
          <div class="relative mb-3">
            <input type="search" placeholder="Search homebrew packages" class="w-full py-4 focus:bg-neutral-600 transition-all outline-none  bg-neutral-700 px-5 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-neutral-500 pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
               <circle cx="10" cy="10" r="7"></circle>
               <line x1="21" y1="21" x2="15" y2="15"></line>
            </svg>
          </div>
          <div class="text-sm text-neutral-400">
            <span>Supported on macOS, Linux, & WSL</span>
          </div>
        </div>
        <div class="text-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Homebrew_logo.svg" class="inline w-72" alt="">
        </div>
      </div>
    </div>
  </section>
  <section class="py-16 xl:py-24">
    <div class="container mx-auto px-5 lg:w-10/12 xl:w-9/12 2xl:w-8/12">
      <h2 class="text-xl xl:text-3xl mb-4 font-bold">Install Homebrew</h2>
    </div>
  </section>
  <section class="py-16 xl:py-24">
    <div class="container mx-auto px-5 lg:w-10/12 xl:w-9/12 2xl:w-8/12">
      <div class="grid xl:grid-cols-3 gap-4">
        <div class="relative group overflow-hidden hover:shadow-lg transition-all p-5 border rounded-xl">
          <span class="bg-yellow-200 w-32 h-32 absolute top-0 left-0 group-hover:scale-110 transition-all -translate-x-1/2 -translate-y-1/2 blur-2xl rounded-full"></span>
          <div class="relative">
            <div class="inline-block p-3 bg-yellow-400 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-terminal-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                 <path d="M8 9l3 3l-3 3"></path>
                 <line x1="13" y1="15" x2="16" y2="15"></line>
                 <rect x="3" y="4" width="18" height="16" rx="2"></rect>
              </svg>
            </div>
            <div>
              <div class="text-lg font-semibold">Command</div>
              <p>Brew command best practice</p>
            </div>
          </div>
          <a href="https://docs.brew.sh/Manpage" class="absolute top-0 left-0 w-full h-full"></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: "The Missing Package Manager for macOS (or Linux)"
})
</script>