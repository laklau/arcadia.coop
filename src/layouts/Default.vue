<template>
  <div>
    <header class="bg-grey-lightest">
      <div
        class="h-70vh bg-cover bg-center flex flex-col justify-center header-overlay"
        style="background-image: url('https://staging--arcadia-coop.netlify.com/assets/uploads/presentacio.jpg')"
      >
        <h1
          class="py-12 px-4 sm:px-32 text-3xl sm:text-5xl text-white font-sans font-semibold"
        >ARCÀDIA, escola de 3 a 16 anys</h1>
      </div>
    </header>
    <slot/>
    <!-- Page content will be inserted here  -->
    <footer/>
  </div>
</template>