<template>
  <div>
 <div  class="w-full h-screen fixed z-0   left-0 -top-32">
        <img  :src="audioStore.currentImage"  alt="" class="md:w-full    md:h-w-full" >
      </div>
  <div class="bg w-full bgg relative z-10  font-[Quicksand] h-fit">
   <div class="w-full bg-black  bg-opacity-75 bg-priary h-sc">
       <Header></Header>
      
      <section class="flex relative z-0 md:mt-10 px-[5rem] ">
        <div class="w-[150px] h-20 hidden md:block "></div>
        <div class="flex flex-col lg:flex-row  items-center text-white gap-3 mt-[100px]">
             <img :src="audioStore.currentImage" class="w-[19rem] h2" alt="">
             <div class="flex flex-col gap-4">
                <h1 class="text-3xl text-[#A4C7C6] mt-5 font-semibold">{{audioStore.currentName}}</h1>
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
                  <img src="../assets/image/heart.svg" class="w-6" alt="">
                </div>
             </div>
        </div>
      </section>
      <section class="flex mt-9 relative z-10">
         <div class="w-[150px] h-40 hidden md:block px-4"></div>
        <div class="w-full h-[25rem] px-3 overflow-scroll flex flex-col gap-2 m-10">
          <div v-for="item in itemForCollectin" :key="item.id" @click="playId(item.id,itemForCollectin)"  class="flex justify-between w-full m  text-white  rounded-[1rem] items-center gap bg-primary py-4 px-4">
          <div class="flex items-center ">
            <div class="flex items-center  gap-10">
              <img v-bind:src="item.img" class=" w-[40px] hover:skew-y-12 " alt="">
           <img src="../assets/image/heart1.png" alt="" class="w-5 h-5">
            </div>
            
          </div><p class="text-white">{{item.name}}</p>
          <p class="text-center">{{item.header}}</p>
          <p>{{item.time}}</p>
        <div @click="saveToLocalStorages(item.id)" class="w-ful flex justify-end"><img src="../assets/image/play.svg" class="flex w-5 justify-end" alt=""></div> 
          
        </div>
        </div>
      </section>
   </div>
   <play  @next="next" ></play>
  </div>



  </div>
 
</template>

<script>
import dash1 from "@/assets/dashmusic1.mp3";
import dash2 from "@/assets/dashmusic2.mp3";
import dash3 from "@/assets/dashmusic3.mp3";
import dash4 from "@/assets/dashmusic4.mp3";
import dash5 from "@/assets/dashmusic5.mp3";
import dash6 from "@/assets/dashmusic6.mp3";
import q1 from "@/assets/11.mp3";
import q2 from "@/assets/22.mp3";
import q3 from "@/assets/33.mp3";
import q4 from "@/assets/44.mp3";
import q5 from "@/assets/55.mp3";
import q6 from "@/assets/66.mp3";
import dash7 from "@/assets/dashmusic7.mp3";
import album from '../assets/image/Rectangle1.png'
import album2 from '../assets/image/bookhand.png'
import album3 from '../assets/image/setradio.png'
import album12 from '../assets/image/Rectangle1.png'

import album4 from '../assets/image/album2.png'
import audioSrc1 from '@/assets/music1.mp3';
import audioSrc2 from '@/assets/music2.mp3';
import audioSrc3 from '@/assets/music3.mp3';
import { useAudioStore } from "@/stores/counter.js";
import { watchEffect } from "vue"
import { onMounted, onBeforeUnmount } from 'vue';
import { computed } from "vue";
export default {
//    setup() {
//    const audioStore = useAudioStore();
//   const volume = useAudioStore();
//   const audioSources = [
   
//   ];
//   const audioSource = audioStore.audioSources;
//   console.log(audioSource);

//     function onInput() {
      
//       audioStore.onInput()
//     };
//     const play = () => {
//     audioStore.playAudio(audioSources);
//    console.log(currentName)
//   };

//    const playId = (id, audioSources) => {
//       audioStore.playAudioById(id, audioSources);
      
      
//   };
    
//   const pause = () => {
//     console.log("Pause button clicked" );
//     audioStore.pauseAudio(audioStore.currentTime);
//   };

//     const next = () => {
   
//     audioStore.nextAudio(audioSources);
//   };
// const currentAudio = computed(() => {
//   if (audioStore.currentAudioIndex !== null && audioStore.currentAudioIndex !== undefined) {
//     return audioStore.audioSources[audioStore.currentAudioIndex];
//   } else {
//     return null;
//   }
// });

//   return {
//   onInput,
//   volume,
//   pause,
//   next,
//   playId,
//     audioStore,
//     audioSources,
//    audioSource,
//     currentAudio,
//    duration:audioStore.duration,
//    currentTime:audioStore.currentTime,
//     play,
//    onVolumeInput: audioStore.onVolumeInput,
//    currentName : audioStore.currentName,
//    currentImage: audioStore.currentImage,
//    onInput: audioStore.onInput,
//   };
// },
 setup() {
   const audioStore = useAudioStore();
  const volume = useAudioStore();
  const itemForCollectin = [
                      {
                        id: 1,
                        img: album4,
                        header:'Golden ',
                        name: 'Sean swadder',
                       time:'12:00:34', 
                        src: dash1,  
                    },

                    {
                         id: 2,
                        img:album2,
                        header:'Reggae ',
                        name: 'DJ YK Mule',
                        time:'12:00:34', 
                         src: dash2, 
                    },

                    {
                         id: 3,
                        img:album3,
                        header:'Tomorrow’s',
                        name: 'Obi Datti',
                        time:'12:00:34',
                         src: dash3,   
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
                         src: q1,   
                    },
                    {
                         id: 9,
                        img:album3,
                        header:'Tomorrow’s',
                        name: 'Obi Datti',
                        time:'12:00:34',
                         src: q2,   
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
   audioStore.initializeAudio(audioSources)
    audioStore.nextAudio(audioSources);
  };

  const prev = () => {
    
    audioStore.prevAudio(audioSources);
  };
  const playId = (id, audioSources) => {
      audioStore.playAudioById(id, audioSources);
      
      
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
   itemForCollectin,
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

  data(){
    return{
     
      itemq : JSON.parse(localStorage.getItem("clickedItem")  ),
       music:[
                    {
                        id: 1,
                        image: album,
                        header:'Golden age of 80s',
                         des: 'Sean swadder',
                         scr:audioSrc1
                   },

                   {
                        id: 2,
                        image: album2,
                        header:'Golden age of 80s', 
                         des: 'Sean swadder',
                         scr:audioSrc3,
                    },

                    {
                        id: 3,
                        image: album3,
                        header:'Golden age of 80s',
                         des: 'Sean swadder' ,
                         scr:audioSrc2,
                    },   

                    {
                        id: 4,
                        image: album4,
                        header:'Golden age of 80s', 
                         des: 'Sean swadder',
                         scr:audioSrc3,
                    },

                   
                    {
                        id: 5,
                        image: album,
                        header:'Golden age of 80s',
                         des: 'Sean swadder', 
                         scr:audioSrc2
                    },

                    {
                        id: 7,
                        image: album2,
                        header:'Golden age of 80s',
                         des: 'Sean swadder', 
                    },

                    {
                        id: 1,
                        image: album,
                        header:'Golden age of 80s',
                         des: 'Sean swadder',
                         scr:audioSrc3,
                    },

                    {
                        id: 2,
                        image: album2,
                        header:'Golden age of 80s', 
                         des: 'Sean swadder',
                         scr:audioSrc2,
                    },

                    
                    {
                        id: 3,
                        image: album3,
                        header:'Golden age of 80s',
                         des: 'Sean swadder',
                          scr:audioSrc2
                    },   

                    {
                        id: 4,
                        image: album4,
                        header:'Golden age of 80s', 
                         des: 'Sean swadder',
                         scr:audioSrc2
                    },

                    {
                        id: 5,
                        image: album,
                        header:'Golden age of 80s',
                         des: 'Sean swadder',
                          scr:audioSrc3
                    },

                    {
                        id: 7,
                        image: album2,
                        header:'Golden age of 80s',
                         des: 'Sean swadder', 
                         scr:audioSrc3,
                    },

                    {
                        id: 1,
                        image: album,
                        header:'Golden age of 80s',
                         des: 'Sean swadder',
                         scr:audioSrc3,
                    },

                   {
                        id: 1,
                        image: album,
                        header:'Golden age of 80s',
                         des: 'Sean swadder',
                         scr:audioSrc3,
                    },

                    
                       {
                        id: 5,
                        image: album,
                        header:'Golden age of 80s',
                         des: 'Sean swadder',
                          scr:audioSrc3
                    },

                    {
                        id: 7,
                        image: album2,
                        header:'Golden age of 80s',
                         des: 'Sean swadder', 
                         scr:audioSrc3,
                    },

                   
                     {
                        id: 5,
                        image: album,
                        header:'Golden age of 80s',
                         des: 'Sean swadder',
                          scr:audioSrc3
                    },

                    {
                        id: 7,
                        image: album2,
                        header:'Golden age of 80s',
                         des: 'Sean swadder', 
                         scr:audioSrc3,
                    },

                          {
                        id: 1,
                        image: album,
                        header:'Golden age of 80s',
                         des: 'Sean swadder'
                    },

                   {
                        id: 2,
                        image: album2,
                        header:'Golden age of 80s', 
                         des: 'Sean swadder'
                    },

                    
                      {
                        id: 3,
                        image: album3,
                        header:'Golden age of 80s',
                         des: 'Sean swadder' 
                    },   

                    {
                        id: 4,
                        image: album4,
                        header:'Golden age of 80s', 
                         des: 'Sean swadder'
                    },

                   
                    {
                        id: 5,
                        image: album,
                        header:'Golden age of 80s',
                         des: 'Sean swadder' 
                    },

                    {
                        id: 7,
                        image: album2,
                        header:'Golden age of 80s',
                         des: 'Sean swadder' 
                    },
             ],

    }
  },

  methods:{
      saveToLocalStorage(id) {
  
    const clickedItem = this.music.find((item) => item.id === id);
    
    localStorage.setItem('clickedItem', JSON.stringify(clickedItem));
     
  },

   saveToLocalStorages(id) {
    const clickedItem = this.music.find((item) => item.id === id);  
        const savedItems = JSON.parse(localStorage.getItem('savedItems')) || []
      savedItems.push(clickedItem);
      localStorage.setItem('savedItems', JSON.stringify(savedItems));
   
  },


    },
 
  created(){
  
   
    
  }
}
</script> 

<style>
    .bgg{
       background: rgba(0, 0, 0, 0.1) 
 
    }

     .blurr{
       backdrop-filter: blur(5px);
     
    }

    .scrolls{
      overflow-y: hidden; /* Hide vertical scrollbar */
      overflow-x: hidden
    }

     .scrolls::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #725718;
}

 .scrolls::-webkit-scrollbar-thumb:hover {
  background-color: #facd66;
}

 .scrolls::-webkit-scrollbar-thumb:active {
  background-color: #facd66;
}
</style>
