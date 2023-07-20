<template>
  <div class="bg-primary  font-[Quicksand] h-screen overflow-scroll  w-full">
     <Header></Header>
     <div class="flex mt-10">
        <div class="lg:w-[150px] md:w-[100px] md:block hidden"></div>
        <div class="mt-20">
           <div class="flex gap-5">
             <p class="text-xl  text-primary font-semibold bg-secondary py-3 px-3  rounded-[1.5rem]">My Collection</p>
              <p class="text-xl  text-secondary font-semibold border border-secondary   py-3 px-5  rounded-[1.5rem]">Likes </p>
           </div>

         
             <div class="mt-10 grid md:grid-cols-4 lg:grid-cols-5 grid-cols-1 w-full  gap-4 px-4 "   >
             <div v-for="item in music" :key="item.id" class="flex lg:h-[200px] md:h-[150px] h-[300px] rounded-[1.5rem] overflow-hidden flex-col justify-center items-center">


                <img v-bind:src="item.image"  class=" w md:w-64" alt="">
                
                <div class="text-whte flex justify-between  bg-gradient-to-t from-primary text-white  md:-top-[80px] -top-[150px] md:pl-6 px-5  bg-wite w-full py-5 relative ">
                    
                     <div>
                         <p class=" text-xl  font-white ">{{item.des}}</p> 
                     <p class="text-[12px]  font-bold font-white">{{ item.header }}</p>
                     </div>
                     <img src="../assets/image/frameq.png" class="w-10  md:hidden block h-10" alt=""> 
                </div>
            </div>
          

         
          </div>
        </div>
     </div>
  </div>
</template>
<script>
import album from '../assets/image/Rectangle17.png'
import album2 from '../assets/image/bookhand.png'
import album3 from '../assets/image/setradio.png'
import album4 from '../assets/image/album2.png'
export default {
   data(){
            return{
            music : JSON.parse(localStorage.getItem("savedItems")  ) 
              
            }
        },

        created(){
         console.log(this.music)
        }
}
</script>
 
<style>
 .flexx{
 background-image: linear-gradient( rgb(74, 9, 9) 30%,  rgba(0,0,0,1), 
  rgba(0,0,0,1),);
 
 }
</style>