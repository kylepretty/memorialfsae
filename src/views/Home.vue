<template>
<div class="bg-zinc-900 text-white">
    <div class="px-6 py-72 bg-car-background bg-center bg-no-repeat bg-cover bg-zinc-900 bg-opacity-50 bg-blend-darken">
        <div class="">
          <h1 class="text-xl font-semibold flex justify-center items-center">Engineered to go faster.</h1>
          <p class="py-4 flex justify-center items-center">The team at FormulaMUN engineers world-class fully-electric racecars, and competes against universities from across North America.</p>
    
        </div>
    </div>
    <div class="px-6 py-24">
      <h1 class="text-xl font-semibold flex justify-center items-center">Our Team</h1>
      <p class="py-4 flex justify-center items-center">FormulaMUN consists of multi-disciplinary students at Memorial University, who work together to design a fully-electric racecar to race against teams across North America.</p>
    <div class="flex justify-center items-center">
      <button href="/team" class="container mx-auto border max-w-fit px-3 py-1 rounded-lg hover:text-gray-500">Learn More</button>
    </div>
    </div>
    <div class="px-6 py-24">
      <h1 class="text-xl font-semibold flex justify-center items-center">Our Car</h1>
      <p class="py-4 flex justify-center items-center">Our first car since 2004 will be a fully-electric design, with air shocks and a space frame chassis welded in-house.</p>
    <div class="flex justify-center items-center">
      <button href="/car" class="container mx-auto border max-w-fit px-3 py-1 rounded-lg hover:text-gray-500">Learn More</button>
    </div>
    </div>
    <div class="px-6 py-24">
        <h1 class="text-xl font-semibold flex justify-center items-center">Sponsorships</h1>
        <p class="py-4 flex justify-center items-center">Sponsorships are the only way we can make it to Michigan with our car. Help us achieve our goals by sponsoring us financially, or with materials. </p>
    <div class="flex justify-center items-center">
        <button href="/sponsors" class="container mx-auto border max-w-fit px-3 py-1 rounded-lg hover:text-gray-500">Learn More</button>
    </div>
    </div>
</div>

    <footer class ="py-6 px-6 flex fustify-between bg-zinc-900">
        <div class="w-2/3 pr-10">
            <h3 class="mb-5 text-gray-400">About</h3>

            <p class="text-sm text-gray-500">© FormulaMUN 2023</p>
        </div>

        <div class="w-1/3">
            <h3 class="mb-5 text-gray-400">Menu</h3>

            <ul class="space-y-2">
                <li><a href="#" class="text-lg text-teal-500 hover:text-teal-700">About</a></li>
                <li><a href="#" class="text-lg text-teal-500 hover:text-teal-700">Privacy Policy</a></li>
                <li><a href="#" class="text-lg text-teal-500 hover:text-teal-700">Terms of Use</a></li>
            </ul>
        </div>
    </footer>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { RouterLink } from 'vue-router';
</script>