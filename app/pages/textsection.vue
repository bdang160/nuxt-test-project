<!-- /pages/layout-demo.vue -->
<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">

    <main class="max-w-6xl mx-auto px-6 py-12 space-y-24">
      <h1 class="text-3xl font-bold">Flex vs Grid Demo</h1>
      <!-- 🧩 Flexbox Layout -->
      <section id="flex" class="space-y-8">
        <h2 class="text-3xl font-bold">Flexbox Layout</h2>
        <div class="flex flex-col md:flex-row items-center gap-8 border rounded-2xl bg-white p-8 shadow-sm">
          <!-- Left: Text -->
          <div class="flex-1 space-y-4">
            <h3 class="text-2xl font-semibold">Flexbox Section</h3>
            <p class="text-gray-600 leading-relaxed">
              This section uses <strong>Flexbox</strong>. Notice that it’s primarily one-dimensional — it arranges
              its children either in a row or a column.
            </p>
            <p class="text-gray-600">
              On small screens, we stack vertically using <code>flex-col</code>.  
              On medium screens and up, we switch to <code>flex-row</code>.
            </p>
            <button class="px-4 py-2 border rounded-lg hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>

          <!-- Right: Image -->
          <div class="flex-1">
            <img
              src="/images/stock-1.jpg"
              alt="Example flexbox image"
              class="w-full rounded-xl object-cover aspect-video"
            />
          </div>
        </div>
      </section>

      <!-- 🧱 Grid Layout -->
      <section id="grid" class="space-y-8">
        <h2 class="text-3xl font-bold">Grid Layout</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8 border rounded-2xl bg-white p-8 shadow-sm">
          <!-- Left: Image -->
          <div>
            <img
              src="/images/stock-2.jpg"
              alt="Example grid image"
              class="w-full rounded-xl object-cover aspect-video"
            />
          </div>

          <!-- Right: Text -->
          <div class="space-y-4">
            <h3 class="text-2xl font-semibold">Grid Section</h3>
            <p class="text-gray-600 leading-relaxed">
              This section uses <strong>CSS Grid</strong>. Grid is two-dimensional — it handles both rows and columns.
            </p>
            <p class="text-gray-600">
              You can easily align multiple sections so their columns line up perfectly, or even control individual
              column widths (<code>grid-cols-[2fr_1fr]</code>).
            </p>
            <button class="px-4 py-2 border rounded-lg hover:bg-gray-100 transition">
              Explore Grid
            </button>
          </div>
        </div>
      </section>

    </main>

    <footer class="border-t text-center py-6 text-sm text-gray-600">
      © {{ new Date().getFullYear() }} Layout Demo
    </footer>
  </div>
</template>
<script setup>

</script>
