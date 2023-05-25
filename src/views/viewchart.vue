<template>
  <div class="bgg w-full font-[Quicksand] h-fit">
   <div class="w-full bg-opacity-75 bg-priary h-sc">
       <Header></Header>
      <section class="flex pt-10 md:px-1 px-[5rem] ">
        <div class="w-[150px] h-20 hidden md:block "></div>
        <div class="flex flex-col lg:flex-row  items-center text-white gap-3 mt-[100px]">
             <img src="../assets/image/setradio.png" class="w-[24rem] h2" alt="">
             <div class="flex flex-col gap-4">
                <h1 class="text-3xl text-[#A4C7C6] mt-5 font-semibold">Tommorow's tunes</h1>
                <p class="text-[#EFEEE0]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit <br>amet   luctus venenatis</p>
                <p class="">64 songs ~ 16 hrs+</p>
                <div class="flex gap-5">
                  <div class="flex rounded-[2rem] gap-3 blurr bg-primary w-fit py-3 px-4">
                    <img src="../assets/image/frameq.png" class="w-6" alt="">
                    <p class="text-l">Play all</p>
                  </div>
                  <div class="flex rounded-[2rem] gap-3 blurr bg-primary w-fit py-3 px-4">
                    <img src="../assets/image/frameq.png" class="w-6" alt="">
                    <p class="text-l">Add to collection</p>
                  </div>
                  <img src="../assets/image/heart_plus.svg" class="w-6" alt="">
                </div>
             </div>
        </div>
      </section>
      <section class="flex mt-9">
         <div class="w-[150px] h-40 hidden md:block px-4"></div>
        <div class="w-full h-[25rem] scrol overflow-scroll flex flex-col gap-2 m-10">
          <div v-for="item in music" :key="item.id"  class="flex justify-between w-full  text-white  rounded-[1rem] items-center gap bg-primary py-4 px-4">
          <div class="flex items-center ">
            <div class="flex items-center  gap-10">
              <img v-bind:src="item.image" class=" w-[40px]  " alt="">
           <img src="../assets/image/Heart.png" alt="" class="w-5 h-5">
            </div>
            
          </div><p class="text-white">{{item.des}}</p>
          <p class="text-center">{{item.status}}</p>
          <p>{{item.time}}</p>
        <div class="w-ful flex justify-end"><img src="../assets/image/more-vertical.png" class="flex w-5 justify-end" alt=""></div> 
          
        </div>
        </div>
      </section>
   </div>
   <play></play>
  </div>
</template>

<script>

import album from '../assets/image/Rectangle17.png'
import album2 from '../assets/image/bookhand.png'
import album3 from '../assets/image/setradio.png'
import album4 from '../assets/image/album2.png'
import play from '../components/play.vue'
export default {
  data(){
    return{
       music:[
                    {
                        id: 1,
                        image: album,
                        status:'singles',
                        des: 'Sean swadder',
                       time:'12:00:34',   
                    },

                    {
                         id: 2,
                        image:album2,
                        status:'Reggae ',
                        des: 'DJ YK Mule',
                        time:'13:00:34',  
                    },

                    {
                         id: 3,
                        image:album3,
                        status:'Tomorrow’s',
                        des: 'Obi Datti',
                        time:'14:00:34',   
                    },


                     {
                         id: 4,
                        image:album4,
                        status:'s Tunes',
                        des: 'Obi Datti',
                        time:'17:00:34',   
                    },

                   
                    {
                         id: 5,
                        image:album2,
                        status:'Tomorrtues',
                        des: 'Tomorr tues',
                        time:'19:00:34',   
                    },

                    {
                         id: album2,
                        image:123212,
                        header:'Tomorrow’s tunes',
                        des: 'Obi Datti',
                        time:'12:00:34',   
                    },

                    

                  


                   



               


                    
                ],
    }
  }
}
</script> 

<style>
    .bgg{
        background-image: url(../assets/image/shoess.JPG);
        background-repeat: no-repeat;
        background-size:cover;
 
    }

     .blurr{
       backdrop-filter: blur(5px);
     
    }

    .scrolls{
      overflow-y: hidden; /* Hide vertical scrollbar */
      overflow-x: hidden
    }
</style>