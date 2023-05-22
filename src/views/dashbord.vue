<template>
  <div class="bg-primary   font-[Quicksand] h-fit">
   <div class=" mx-auto bg-primary pt-10">
  
    
    

   <section>
    <div class="flex gap-10 container ">
      <Header></Header>
      <div class="w-[150px]"></div>
      <div class=" bg-[#609eaf] mt-[25px] flex justi rounded-[2rem] w-full h- overflow-hidden"> 
        <div class="w-full  flex flex-col justify-between py-10 pl-7 text-white font-normal text-xl">
          <h1>Currated playlist</h1>
          <div class="f" >
           <h1 class="font-bold text-3xl">R & B Hits</h1> 
           <p class="text-[14px] mt-3">All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit,<br> and so much more </p>
          </div>
          <div>
            <div class="flex">
             <div class="flex w-32 overflow-hidden">
               <img src="../assets/image/Ellipse 2.png" alt="" class="w-[50px] z-10 sticky left-0 right-0 ">
              <img src="../assets/image/Ellipse 3.png" alt="" class="w-[50px] z-10 sticky right-[3.5rem]">
               <img src="../assets/image/Ellipse 4.png" alt="" class="w-[50px]  sticky right-[2rem]  ">
                <img src="../assets/image/Ellipse 5.png" alt="" class="w-[50px]  sticky right-[1rem]  ">
                <img src="../assets/image/Ellipse 6.png" alt="" class="w-[50px]  sticky right-[0rem] ">
             </div>
              <div class="flex items-center gap-1">
                <img src="../assets/image/heart_plus.svg" class="w-7" alt="">
                <h1 class="font-normal te ">33k Likes</h1>
              </div>
            </div>

            <img src="" alt="">
          </div>
        </div>
        <img src="../assets/image/Pexels Photo by Eric Esma.png" alt="">
      </div>
      <div class=" w-[50rem]  mt-[25px] ">
        <h1 class="font-semibold text-2xl text-white ">Top Charts </h1>
        <div class="flex flex-col mt-6 gap-2 text-white overflow-hidden h-[20rem] ">
            <div v-for="item in music" :key="item.id" class="flex gap-3 bg-tertiary  items-center justify-between rounded-[2rem] w-full py-2 px-4  ">
               <div class="flex gap-3">
                 
                 <img  v-bind:src="item.image" alt="" class="w-[5rem]"/>
                  <div>
                    <h1 class="text-[18px] my-0 font-normal ">{{item.header}}</h1>
                      <h1 class="my-0 text-[14px] text-normal text-gray-400" >{{item.des}}r</h1>
                      <h1>{{item.time}}</h1>
                  </div>
               </div>
                <div class="justify-end w-7 flex justify-center items-center rounded-[10rem] h-7 border  ">
                <img src="../assets/image/Heart (1).png" class="w-4 flex justify-end i" alt="">
                </div>
            </div>
        </div>
      </div>
    </div>
   </section>
   
   <section class="mt-5 container">
    <div class="flex w-fu">
      <div class="w-[150px] h-40"></div>
      
      <div  class="w-full  overflow-hidden ">
        <h1 class="font-semibold text-2xl text-white ">Top Charts </h1>
        <div class="w-[100rem] overflow-scroll">
          <div class="flex  gap-3 w-[2500px]  w-full text-white">
          <div v-for="item in musics" :key="item.id" class="fl w-[2500px] mt-3 gap- bg-teriary  items-center justify-between rounded-[2rem]    ">
               <div class="">
                 
                 <img  v-bind:src="item.image" alt="" class="w-[2500px]"/>
                  <div>
                    <h1 class="text-[18px] my-0 font-normal ">{{item.header}}</h1>
                  </div>
               </div>
                
            </div>
        </div>
        </div>
      </div>
    </div>
   </section>
   <play></play>
   <div class="fle w-30" >

   </div>
   </div>
  </div> 
</template>

<script>
import album from '../assets/image/Rectangle17.png'
import album2 from '../assets/image/bookhand.png'
import album3 from '../assets/image/setradio.png'
import album4 from '../assets/image/album2.png'
import play from '../components/play.vue'
export default {
 components: { play },
 data(){
            return{
               
                music:[
                    {
                        id: 1,
                        image: album,
                        header:'Golden age of 80s',
                        des: 'Sean swadder',
                       time:'12:00:34',   
                    },

                    {
                         id: 2,
                        image:album2,
                        header:'Reggae "n"  blues',
                        des: 'DJ YK Mule',
                        time:'12:00:34',  
                    },

                    {
                         id: 3,
                        image:album3,
                        header:'Tomorrow’s tunes',
                        des: 'Obi Datti',
                        time:'12:00:34',   
                    },


                     {
                         id: 4,
                        image:album4,
                        header:'Tomorrow’s tunes',
                        des: 'Obi Datti',
                        time:'12:00:34',   
                    },

                   
                    {
                         id: 5,
                        image:album2,
                        header:'Tomorrow’s tunes',
                        des: 'Obi Datti',
                        time:'12:00:34',   
                    },

                    {
                         id: album2,
                        image:123212,
                        header:'Tomorrow’s tunes',
                        des: 'Obi Datti',
                        time:'12:00:34',   
                    },

                    

                  


                   



               


                    
                ],

                 musics:[
                    {
                        id: 1,
                        image: album,
                        header:'Golden ',
                        des: 'Sean swadder',
                       time:'12:00:34',   
                    },

                    {
                         id: 2,
                        image:album2,
                        header:'Reggae ',
                        des: 'DJ YK Mule',
                        time:'12:00:34',  
                    },

                    {
                         id: 3,
                        image:album3,
                        header:'Tomorrow’s',
                        des: 'Obi Datti',
                        time:'12:00:34',   
                    },


                     {
                         id: 4,
                        image:album4,
                        header:'Tomorrow’s s',
                        des: 'Obi Datti',
                        time:'12:00:34',   
                    },

                   
                    {
                         id: 5,
                        image:album2,
                        header:'Tomorrow’',
                        des: 'Obi Datti',
                        time:'12:00:34',   
                    },

                    {
                         id: 6,
                        image:album2,
                        header:'Tomorrow’',
                        des: 'Obi Datti',
                        time:'12:00:34',   
                    },

                    {
                         id: 8,
                        image:album2,
                        header:'Tomorrow’',
                        des: 'Obi Datti',
                        time:'12:00:34',   
                    },

                     {
                         id: 5,
                        image:album2,
                        header:'Tomorrow’',
                        des: 'Obi Datti',
                        time:'12:00:34',   
                    },
                    {
                         id: 9,
                        image:album3,
                        header:'Tomorrow’s',
                        des: 'Obi Datti',
                        time:'12:00:34',   
                    },

                    {
                         id: 8,
                        image:album2,
                        header:'Tomorrow’',
                        des: 'Obi Datti',
                        time:'12:00:34',   
                    },

                     {
                         id: 5,
                        image:album2,
                        header:'Tomorrow’',
                        des: 'Obi Datti',
                        time:'12:00:34',   
                    },
                    {
                         id: 9,
                        image:album3,
                        header:'Tomorrow’s',
                        des: 'Obi Datti',
                        time:'12:00:34',   
                    },

                    {
                         id: 8,
                        image:album2,
                        header:'Tomorrow’',
                        des: 'Obi Datti',
                        time:'12:00:34',   
                    },

                     {
                         id: 5,
                        image:album2,
                        header:'Tomorrow’',
                        des: 'Obi Datti',
                        time:'12:00:34',   
                    },
                    {
                         id: 9,
                        image:album3,
                        header:'Tomorrow’s',
                        des: 'Obi Datti',
                        time:'12:00:34',   
                    },
                  


                   



               


                    
                ]
            }
        },

}
</script>

<style>
  .blurr{
       backdrop-filter: blur(5px);
     
    }
</style>