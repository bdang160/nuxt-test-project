<template>
  <!-- <div class="flex flex-col items-start justify-start min-h-screen bg-gray-100 text-gray-800 pl-6 pt-6"> -->
  <div class="min-h-screen bg-gray-100 text-gray-800 pl-6 pt-6">
    <h1 class="text-3xl font-bold">DataBox Flex Page</h1>

    <div class="p-8 space-y-4">
      <DataBox
        title="User Info"
        body="This box contains user information."
        boxColor="#e0f2fe"
        titleColor="#0c4a6e"
        bodyColor="#1e293b"
      />

      <DataBox title="Custom Content" bodyColor="purple">
        <strong>This is slot content.</strong>  
        It replaces the `body` prop text.
      </DataBox>

      <DataBox title="Default Colors">
        Text for Default Colors and slot
      </DataBox>
    </div>
    
    <h1 class="text-3xl font-bold">Row Layout (Horizontal)</h1>
    <div class="flex gap-4 p-8">
      <DataBox title="Box 1" body="Flex Row Item 1" />
      <DataBox title="Box 2" body="Flex Row Item 2" />
      <DataBox title="Box 3" body="Flex Row Item 3" />
    </div>

    <!-- Notice the w-64 to control width size -->
    <h1 class="text-3xl font-bold">Column Layout (Vertical)</h1>
    <div class="flex flex-col gap-4 p-8">
      <DataBox class="w-64" title="Box 1" />
      <DataBox class="w-64" title="Box 2" />
      <DataBox class="w-64" title="Box 3" />
    </div>

    <h1 class="text-3xl font-bold">Wrapping Rows</h1>
    <div class="flex flex-wrap gap-4 p-8">
      <DataBox title="Box 1" />
      <DataBox title="Box 2" />
      <DataBox title="Box 3" />
      <DataBox title="Box 4" />
      <DataBox title="Box 5" />
    </div>

    <h1 class="text-3xl font-bold">Centered (Horizontally & Vertically)</h1>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <DataBox title="Centered Box" />
    </div>

    <h1 class="text-3xl font-bold">Space Between</h1>
    <div class="flex justify-between items-start p-8">
      <DataBox title="Left" />
      <DataBox title="Middle" />
      <DataBox title="Right" />
    </div>

    <h1 class="text-3xl font-bold">Align Items Differently</h1>     
    <div class="flex items-end gap-4 p-8 h-64 bg-gray-100">
      <DataBox title="Top" class="self-start" />
      <DataBox title="Center" class="self-center" />
      <DataBox title="Bottom" class="self-end" />     
    </div>  

    <h1 class="text-3xl font-bold">Responsive Layout (Row → Column)</h1>     
    <div class="flex flex-col md:flex-row gap-4 p-8">
      <DataBox title="Responsive 1" />
      <DataBox title="Responsive 2" />
      <DataBox title="Responsive 3" />
    </div>

    <h1 class="text-3xl font-bold">Mixed Sizes (Grow / Shrink)</h1>
    <div class="flex gap-4 p-8">
      <DataBox title="Fixed" class="flex-none w-32" />
      <DataBox title="Grow" class="flex-grow" />
      <DataBox title="Shrink" class="flex-shrink" />
    </div>

    <h1 class="text-3xl font-bold">Nested Flex (Boxes inside Flex)</h1>
    <div class="flex flex-col gap-4 p-8">
      <div class="flex justify-around">
        <DataBox title="Inner 1" />
        <DataBox title="Inner 2" />
      </div>

      <div class="flex justify-evenly">
        <DataBox title="Inner 3" />
        <DataBox title="Inner 4" />
      </div>
    </div>

    <NuxtLink to="/" class="mt-6 underline text-indigo-600 hover:text-indigo-800">
      ← Back Home
    </NuxtLink>
  </div>
</template>

<script setup>

</script>
