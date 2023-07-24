<template>
  <div class="bg-primary   font-[Quicksand] h-fit">
   <div class=" mx-auto  bg-primary pt-10">
  
    
    

   <section class="ml-0 ">
    <div class="block gap-10 md:flex  mr-8">
      <Header></Header>
      
      <div class=" md:flex block">
        <div class="lg:w-[150px] w-[100px]"></div>
      <div class="md:block  lg:flex mx-2 containe w-full block">
       <div class=" bg-[#609eaf] md:mt-[90px] flex  justi rounded-[2rem]   <input type=range v-model=rangeValue lg:w-2/3 w-full  overflow-hidden"> 
        <div class="w-full  flex flex-col justify-between py-10 pl-7 text-white font-normal text-xl">
          <h1 class="mb-20 md:mb-5">Currated playlist</h1>
          <div class="f" >
           <h1 class="font-bold text-3xl">R & B Hits</h1> 
           <p class="text-[14px] mt-3">All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit,<br> and so much more </p>
          </div>
          <div>
            <div class="flex">
             <div class="flex w-32 overflow-hidden">
               <img src="../assets/image/els2.png" alt="" class="lg:w-[50px] w-[40px] sticky left-0 right-0 ">
              <img src="../assets/image/els3.png" alt="" class="lg:w-[50px] w-[40px] sticky right-[3.5rem]">
               <img src="../assets/image/els4.png" alt="" class="lg:w-[50px] w-[40px]  sticky right-[2rem]  ">
                <img src="../assets/image/els5.png" alt="" class="lg:w-[50px] w-[40px]  sticky right-[1rem]  ">
                <img src="../assets/image/els1.png" alt="" class="lg:w-[50px] w-[40px]  sticky right-[0rem] ">
             </div>
              <div class="flex items-center gap-1">
                <img src="../assets/image/heart.svg" class="lg:w-7 w-5" alt="">
                <h1 class="font-normal te ">33k Likes</h1>
              </div>
            </div>

            <img src="" alt="">
          </div>
        </div>
        <img src="../assets/image/pexels.png" class="hidden md:block" alt="">
      </div>
      <div class=" lg:w-1/3 w-full  mt-[25px] ">
        <h1 class="font-semibold text-2xl text-white ">Top Charts </h1>
        <div class="flex flex-col mt-6 gap-2 text-white overflow-x-scroll  h-[20rem] ">
            <div v-for="item in audioSources" @click="playId(item.id)"  :key="item.id" class="flex gap-3 bg-tertiary  items-center justify-between rounded-[2rem] w-full py-2 px-4  ">
               <div  @click=" playIdi()" class="flex gap-3">
                 
                 <img @click="playId"  v-bind:src="item.img" alt="" class="w-[5rem]"/>
                  <div>
                    <h1 class="text-[18px] my-0 font-normal ">{{item.header}}</h1>
                      <h1 class="my-0 text-[14px] text-normal text-gray-400" >{{item.name}}r</h1>
                      <h1>{{item.time}}</h1>
                  </div>
               </div>
                <div class=" w-7 flex justify-center items-center rounded-[10rem] h-7 border  ">
                <img src="../assets/image/heart1.png" class="w-4 flex justify-end i" alt="">
                </div>
            </div>
        </div>
      </div>
     </div>
    </div>
    </div>
   </section>
   
   <section class="mt-5 container md:w-full">
    <div class="md:flex block  w-fu">
      <div class="lg:w-[150px] w-[100px]"></div>
   
      <div    class="w-full px-4 overflow-hidden  ">
        <h1 class="font-semibold text-2xl text-white ">Top Charts </h1>
        <div class="w-[100rem] mx-4 overflow-srcoll">
          <div class="flex  gap-3 md:w-[2500px]  w-[2000px] text-white">
          <div   @click="saveToLocalStorages(item.id)" v-for="source in audioSources" :key="source.id" class="fl w-[2500px] mt-3 gap- bg-teriary  items-center justify-between rounded-[2rem]    ">
               <div class="">
                 
                 <img  v-bind:src="source.img" alt="" class="md:w-[2500px] :w-[1500px]"/>
                  <div>
                    <h1 class="text-[18px] my-0 font-normal ">{{source.header}}</h1>
                    <primarybtn class="flex justify-end" @click="playId(source.id)"> ../assets/img/play.svg" alt=""></primarybtn>
                  </div>
               </div>
                
            </div>
        </div>
        </div>
      </div>
    </div>
   </section>
   <play @change="change()"  @next="next"  :contol='contol'></play>
   <div class="fle w-30" >

   </div>
   </div>
  </div> 
</template>

<script>
import { watchEffect } from "vue"
import { onMounted, onBeforeUnmount } from 'vue';
import { computed } from "vue";
import dash1 from "@/assets/dashmusic1.mp3";
import dash2 from "@/assets/dashmusic2.mp3";
import dash3 from "@/assets/dashmusic3.mp3";
import dash4 from "@/assets/dashmusic4.mp3";
import dash5 from "@/assets/dashmusic5.mp3";
import dash6 from "@/assets/dashmusic6.mp3";
import dash7 from "@/assets/dashmusic7.mp3";
import album from '../assets/image/Rectangle17.png'
import album2 from '../assets/image/bookhand.png'
import album3 from '../assets/image/setradio.png'
import album4 from '../assets/image/album2.png'
import { useAudioStore } from "@/stores/counter.js";
import { reactive, ref } from "vue";
export default {
  name: "YourComponent",
 setup() {
   const audioStore = useAudioStore();
  const volume = useAudioStore();
  const audioSources = [
    {
                        id: 1,
                        img: album4,
                        header:'Golden ',
                        name: 'Sean swadder',
                       time:'12:00:34', 
                        src: dash3,  
                    },

                    {
                         id: 2,
                        img:album2,
                        header:'Reggae ',
                        name: 'DJ YK Mule',
                        time:'12:00:34', 
                         src: dash1, 
                    },

                    {
                         id: 3,
                        img:album3,
                        header:'Tomorrow’s',
                        name: 'Obi Datti',
                        time:'12:00:34',
                         src: dash2,   
                    },


                     {
                         id: 4,
                        img:album4,
                        header:'Tomorrow’s s',
                        name: 'Obi Datti',
                        time:'12:00:34', 
                         src: dash4,  
                    },

                   
                    {
                         id: 5,
                        img:album2,
                        header:'Tomorrow’',
                        name: 'Obi Datti',
                        time:'12:00:34', 
                         src: dash5,  
                    },

                    {
                         id: 6,
                        img:album2,
                        header:'Tomorrow’',
                        name: 'Obi Datti',
                        time:'12:00:34', 
                         src: dash6,  
                    },

                    {
                         id: 8,
                        img:album2,
                        header:'Tomorrow’',
                        name: 'Obi Datti',
                        time:'12:00:34',
                         src: dash7,   
                    },

                     {
                         id: 5,
                        img:album2,
                        header:'Tomorrow’',
                        name: 'Obi Datti',
                        time:'12:00:34',
                         src: dash3,   
                    },
                    {
                         id: 9,
                        img:album3,
                        header:'Tomorrow’s',
                        name: 'Obi Datti',
                        time:'12:00:34',
                         src: dash1,   
                    },

                    {
                         id: 8,
                        img:album2,
                        header:'Tomorrow’',
                        name: 'Obi Datti',
                        time:'12:00:34', 
                         src: dash2,  
                    },

                     {
                         id: 5,
                        img:album2,
                        header:'Tomorrow’',
                        name: 'Obi Datti',
                        time:'12:00:34', 
                         src: dash4,  
                    },
                    {
                         id: 9,
                        img:album3,
                        header:'Tomorrow’s',
                        name: 'Obi Datti',
                        time:'12:00:34',
                         src: dash6,   
                    },

                    {
                         id: 8,
                        img:album2,
                        header:'Tomorrow’',
                        name: 'Obi Datti',
                        time:'12:00:34',
                         src: dash5,   
                    },

                     {
                         id: 5,
                        img:album2,
                        header:'Tomorrow’',
                        name: 'Obi Datti',
                        time:'12:00:34',
                         src: dash7   
                    },
                    {
                         id: 9,
                        img:album3,
                        header:'Tomorrow’s',
                        name: 'Obi Datti',
                        time:'12:00:34',
                         src: dash3,   
                    },
  ];
  const audioSource = audioStore.audioSources;
  console.log(audioSource);
 audioStore.initializeAudio(audioSources),
    function onInput() {
      
      audioStore.onInput()
    }

   

  const play = () => {
    audioStore.playAudio(currentName);
   console.log(audioStore.currentAudio);
  };

    
  const pause = () => {
    console.log("Pause button clicked" );
    audioStore.pauseAudio(audioStore.currentTime);
  };

  const stop = () => {
   
   
    audioStore.stopAudio(audioStore.currentTime);
  };

  const next = () => {
   
    audioStore.nextAudio(audioSources);
  };

  const prev = () => {
    
    audioStore.prevAudio(audioSources);
  };
  const playId = (id) => {
     audioStore.playAudioById(id, audioSources);
      audioStore.playAudio(audioSources)
      
  };
 
const currentAudio = computed(() => {
  if (audioStore.currentAudioIndex !== null && audioStore.currentAudioIndex !== undefined) {
    return audioStore.audioSources[audioStore.currentAudioIndex];
  } else {
    return null;
  }
});

 return {
    play,
    pause,
    stop,
    next,
    prev,
    playId,
 
  volume,
    audioStore,
    audioSources,
   audioSource,
    currentAudio,
   duration:audioStore.duration,
   currentTime:audioStore.currentTime,
   image:audioStore.image,
   onVolumeInput: audioStore.onVolumeInput,
   currentName : audioStore.currentName,
   currentImage: audioStore.currentImage,
   onInput: audioStore.onInput,
  };
},

 methods:{
  change(){
    this.contol = !this.contol
  },

  playIdi(){
     this.contol = !this.contol
  }
 }

};
</script>

<style>
  .blurr{
       backdrop-filter: blur(5px);
     
    }

    * {
  scrollbar-width: thin;
  scrollbar-color: #facd66 #1d2123;
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  width: 10px;
  width: 10px;
}
*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #1d2123;
}

*::-webkit-scrollbar-track:hover {
  background-color: #1d2123;
}

*::-webkit-scrollbar-track:active {
  background-color: #1d2123;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #725718;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #facd66;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #facd66;
}
</style>