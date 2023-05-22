<template>
  <div class="bgg w-full font-[Quicksand] h-screen">
   <div class="w-full bg-opacity-75 bg-primary h-screen">
       <Header></Header>
      <section class="flex  ">
        <div class="w-[150px] h-20"></div>
        <div class="flex items-center text-white gap-3 mt-[100px]">
             <img src="../assets/image/setradio.png" class="w-[20rem]" alt="">
             <div class="flex flex-col gap-4">
                <h1 class="text-4xl text-[#A4C7C6] font-semibold">Tommorow's tunes</h1>
                <p class="text-[#EFEEE0]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit <br>amet  luctus venenatis</p>
                <p class="">64 songs ~ 16 hrs+</p>
                <div class="flex gap-5">
                  <div class="flex rounded-[2rem] gap-3 blurr bg-primary w-fit py-3 px-4">
                    <img src="../assets/image/Frame 7 7.png" class="w-6" alt="">
                    <p class="text-l">Play all</p>
                  </div>
                  <div class="flex rounded-[2rem] gap-3 blurr bg-primary w-fit py-3 px-4">
                    <img src="../assets/image/Frame 7 7.png" class="w-6" alt="">
                    <p class="text-l">Add to collection</p>
                  </div>
                  <img src="../assets/image/heart_plus.svg" class="w-6" alt="">
                </div>
             </div>
        </div>
      </section>
      <section class="flex">
         <div class="w-[150px] h-20"></div>
        <div class="flex justify-betwween w-full mr-10 text-white  rounded-[2rem] items-center gap-36 bg-primary py-2 px-8">
          <div class="flex items-center gap-[5rem]">
            <div class="flex items-center gap-3">
              <img src="../assets/image/aalbum3.png" class=" w-10  " alt="">
           <img src="../assets/image/Heart.png" alt="" class="w-5 h-5">
            </div>
            <p class="text-white">Let me love you ~ Krisx</p>
          </div>
          <p class="text-center">Single</p>
          <p>4:17</p>
         <img src="../assets/image/more-vertical.png" class="w-5 text-end place-content-end" alt="">
          <div>

          </div>
        </div>
      </section>
   </div>
  </div>
</template>

<script>
export default {

}
</script> 

<style>
    .bgg{
        background-image: url(../assets/image/set1.png);
        background-repeat: no-repeat;
        background-size: 90rem;
 
    }

     .blurr{
       backdrop-filter: blur(5px);
     
    }
</style>