<template>
  <div class="abslute">
    
    <div class=" bg-opacity-50 bg-primary w-full h-[4rem] ">
      <div class="fixed lg:flex block  justify-between  w-full right-   py-7 shadows -bottom-0 shadows h-[90px]  border-t border-t-white blurr"> 
            <div class="w-[150px]"></div>
            <div class="container flex justify-between items-center  px-4">
                <div class="flex  gap-3 text-white">
                  <img src="../assets/image/aalbum3.png" class="w-10 md:w-20 " alt="">
                    <div class="">
                      <h1 class="text-xl   font-semibold">Season in</h1>
                      <p class="text-14px  ">james</p>
                    </div>
                </div>
                <div>
                <div class="flex gap-7 items-center justify-center">
                    <img src="../assets/image/shuffle.png" class="w-7 h-7 md:flex hidden" alt="">
                    <img src="../assets/image/previous.png" class="w-7 h-7 md:flex hidden" alt="">
                    <img src="../assets/image/Frame 7 7.png" class="w-[3rem] " alt="">
                    <img src="../assets/image/next.png" class="w-7 h-7" alt="">
                    <img src="../assets/image/repeate-one.png" class="w-7 h-7 md:flex hidden" alt="">
                </div>

                <img src="../assets/image/Group 2 (1).png"  class="md:flex hidden" alt="">
                </div>
                <div class=" justify w-1/5 md:flex hidden gap-3">
                <img src="../assets/image/volume-high.png" alt="" class="w-5 h-5">
                <img src="../assets/image/Group 2 (1).png" class="w- h-5" alt="">
                </div>
            </div>
            
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.blurr{
       backdrop-filter: blur(500px);
     
    }

    .shadows{
    box-shadow: -1px 3px 49px -10px rgba(0,0,0,0.29);
    -webkit-box-shadow: -1px 3px 49px -10px rgba(0,0,0,0.29);
    -moz-box-shadow: -1px 3px 49px -10px rgba(0,0,0,0.29);
    }
</style>