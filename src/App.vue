<template>
      <body class="bg-zinc-900 text-white sticky top-0">
        <nav class="py-6 px-6 flex justify-between items-center bg-zinc-900">
            <a href="/" class="text-xl font-semibold">FormulaMUN</a>
            <div class="space-x-6">
                <router-link :to="{name: 'home'}" class="text-lg hover:text-gray-500">Home</router-link>
                <router-link :to="{name: 'car'}" class="text-lg hover:text-gray-500">Our Car</router-link>
                <router-link :to="{name: 'team'}" class="text-lg hover:text-gray-500">Our Team</router-link>
                <router-link :to="{name: 'sponsors'}" class="text-lg hover:text-gray-500">Sponsorships</router-link>
            </div>
        </nav>
    </body>
  <router-view />
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>