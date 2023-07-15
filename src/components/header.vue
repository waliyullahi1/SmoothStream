<template>
  <div class="rounded-lg fixed left-5 z-50 mt-9 w-fit">
    
      <div class="w-full h-10" ></div>
    <div class="flex fixed -top-7 md:-top-4 z-50 w-full h- -left-6 bg-primary pt-10  gap-20 containe items-center ">
    <div class="fixed left-5"><img src="../assets/image/logo.png" class="w-8 right-32 sticky h-8" alt=""></div>
    <div class="w-10 h-8"></div>
    <div class="w-full  ronded-xl px-2 rounded-lg flex py-2 items-center gap-4  ">
      <img src="../assets/image/search.svg" class="w-5 font" alt="">
      <input type="" placeholder="Search" class="bg-tertiary text-xl font-normal outline-none underline-0   w-full py- px-1 text-white">
       <div @click="emitclick()" class=" block md:hidden mr-2    " >
       <div  class="w-8 h-1 bg-white relative mt-7 mr-5  transform duration-200 " :class="rotate ? 'rotate rotate-45 top-2 ': 'rotate-0'"></div>
       <div class="w-8 h-1 mb-7 bg-white relative  mt-1 transform duration-200 " :class="rotate ?  ' rotate -rotate-45 buttom-2 ': 'rotate-0 '"></div>
      </div>
    </div>
   </div>
   
       <div :class="rotate ? 'translate-x- h-[25rem]' : '-translate-x h-0'" class="duration-700 h-0 md:h-96 overflow-hidden">
           <div class="flex flex-col rounded-[2rem] justify-center bg-tertiary items-center py-5 px-5 gap-7">
          <router-link to="/"> <img src="../assets/image/home.png" class="hover:chbtn w-[20px] transform hover:scale-125 duration-700" /> </router-link>
          <router-link to="/view"> <img src="../assets/image/playlist.png" class=" hover:chbtn w-[24px] hover:scale-125 duration-700 chbtn" /> </router-link>
          <router-link to="/collection"> <img src="../assets/image/radio.png" class=" hover:chbtn w-[24px] hover:scale-125 duration-700" /> </router-link>
          <router-link to="/"> <img src="../assets/image/horizontal.png" class=" hover:chbtn w-[24px] hover:scale-125 duration-700" /> </router-link>
        </div>
        <div class="flex mt-5 flex-col justify-center rounded-[2rem] bg-tertiary items-center py-5 gap-7">
          <router-link to="/"> <img src="../assets/image/frame.png" class=" hover: chbtn w-[24px] hover:scale-125 duration-700" /> </router-link>
          <router-link to="/"> <img src="../assets/image/das.png" class="w-[24px] hover:scale-125 duration-700" /> </router-link>
        </div>
       </div>

      
  </div>
</template>

<script>


export default {
  data(){
    return{
    rotate : false,
    flex : true
    }
  },
   methods:{
   emitclick(){
    this.rotate = !this.rotate
   
   }
  },

}
</script>

<style>
 .chbtn{

filter: invert(9%) sepia(64%) saturate(391%) hue-rotate(324deg) brightness(76%) contrast(110%);
 }
</style>