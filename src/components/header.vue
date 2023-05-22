<template>
  <div class="rounded-lg fixed mt-9 w-fit">
      <div class="w-full h-10" ></div>
    <div class="flex fixed -top-5 z-50 w-full h- bg-primary pt-10  gap-20 container  items-center ">
    <div class="fixed left-5"><img src="../assets/image/logo.png" class="w-8 right-32 sticky h-8" alt=""></div>
    <div class="w-10 h-8"></div>
    <div class="w-full bg-tertiary ronded-xl px-2 rounded-lg flex py-2 items-center gap-4  ">
      <img src="../assets/image/search.svg" class="w-6 font" alt="">
      <input type="" placeholder="Search" class="bg-tertiary text-xl font-normal outline-none underline-0   w-full py- px-1 text-white">
    </div>
   </div>

        <div class="flex flex-col rounded-[2rem] justify-center bg-tertiary items-center py-5 px-5 gap-7">
          <router-link to="/"> <img src="../assets/image/home.png" class="w-[20px]" /> </router-link>
          <router-link to="/"> <img src="../assets/image/playlist.png" class="w-[24px]" /> </router-link>
          <router-link to="/"> <img src="../assets/image/radio.png" class="w-[24px]" /> </router-link>
          <router-link to="/"> <img src="../assets/image/horizontal.png" class="w-[24px]" /> </router-link>
        </div>
        <div class="flex mt-5 flex-col justify-center rounded-[2rem] bg-tertiary items-center py-5 gap-7">
          <router-link to="/"> <img src="../assets/image/frame.png" class="w-[24px]" /> </router-link>
          <router-link to="/"> <img src="../assets/image/Vec.png" class="w-[24px]" /> </router-link>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>