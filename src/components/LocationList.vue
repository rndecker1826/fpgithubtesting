<<<<<<< HEAD
<template>
  <div class="bg-white/80 p-10 rounded shadow">
    <h3 class="font-bold mb-2">Saved Locations</h3>

    <ul class="space-y-2">
      <li v-for="loc in locations" :key="loc.city + loc.state"
          class="flex justify-between">

        <span class="text-blue-600 underline cursor-pointer"
              @click="$emit('select', loc)">
          {{ loc.city }}, {{ loc.state }}
        </span>

        <button class="text-red-600 font-bold"
                @click="$emit('remove', loc)">
          ✕
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  locations: Array,
});
</script>
=======
<template>
  <div class="bg-white/80 p-10 rounded shadow">
    <h3 class="font-bold mb-2">Saved Locations</h3>

    <ul class="space-y-2">
      <li v-for="loc in locations" :key="loc.city + loc.state"
          class="flex justify-between">

        <span class="text-blue-600 underline cursor-pointer"
              @click="$emit('select', loc)">
          {{ loc.city }}, {{ loc.state }}
        </span>

        <button class="text-red-600 font-bold"
                @click="$emit('remove', loc)">
          ✕
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  locations: Array,
});
</script>
>>>>>>> 8587aca021366b3fe5997389957fc33f1c1d8a2c
