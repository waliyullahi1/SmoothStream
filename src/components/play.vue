<template>

  <div class="flex blurr fixed bottom-0  lg:flex z-40 justify-between  w-full right-   py-7 shadows  shadows h-[90px]  border-t border-t-white blurr ">
    <div class="flex mx-auto py-5 px-5 justify-between items-center w-5/6">
      <div class="flex   gap-3 text-white">
        <primarybtn class="flex justify-end" @buttonClicked="playAudioById()">Create New Task</primarybtn>
     <img :src="currentAudioImge"  class="w-10 md:w-20 " alt="">
        <div class="">
          <h1 class="text-xl   font-semibold">{{currentAudioName}}</h1>
          <p class="text-14px  ">james</p>
        </div>
      </div>
     <div class="">
       <div class="text-white flex gap-10 justify-between items-center bg-black">
        
        <img src="../assets/image/shuffle.png" class="w-7 h-7 md:flex hidden" alt="">

          <div @click="changectx" class="">
            <button @click="prevAudio">
          <img class="w-7" src="../assets/image/previous.png" alt="" >
            </button>
          </div>

        <div @click="change()">

          <button  :class="contol ? 'hidden' :'block'" @click="play">
          <img  class="w-7" src="../assets/image/play.svg" alt="" >
        </button>
        
        <button class="" :class="contol ? 'block' :'hidden'"  @click="pause">
          <span ><img class="w-7" src="../assets/image/pause.svg" alt="" ></span>
        </button>

        </div>


        <div @click="changectx()" class="">
          <button @click="nextAudio"> 
            <img class="w-7" src="../assets/image/next.png" alt="" >
          </button>
        </div>
        
        <button class="hidden " @click="stopAudio">Stop</button>
        <img   src="../assets/image/repeate-one.png" class="w-7 h-7 md:flex hidden" alt="">
        
      </div>
      <input class="w-full" type="range" v-model="audioStore.currentTime" min="0" :max="audioStore.duration" @input="onInput"/>

     </div>
     <div class="flex justify-center gap-5 items-center">
      <img  class="w-7" src="../assets/image/volume-high.png" alt="">
         <input type="range" v-model="volume" min="0" max="1" step="0.01" @input="onVolumeInput" />
     </div>
   </div>
  </div>
   
</template>

<script>
import { computed } from "vue";
import { ref, reactive } from 'vue';
import { useAudioStore } from "@/stores/counter.js";
import audioSrc1 from '@/assets/music1.mp3';
import audioSrc2 from '@/assets/music2.mp3';
import audioSrc3 from '@/assets/music3.mp3';
import imageO from'../assets/image/setradio.png';
import image1 from'../assets/image/bookhand.png';
import image2 from'@/assets/image/setradio.png';
export default {
  setup() {
   const audioStore = useAudioStore();
  const volume = useAudioStore();
  const audioSources = [
    {
      id: 1,
      src: audioSrc1,
      name: "asake",
      img: imageO,
    },
    {
      id: 2,
      src: audioSrc2,
      name: "olujoke",
      img: image1,
    },
    {
      id: 3,
      src: audioSrc3,
      name: "ammu",
      img: image2,
    },
  ];
  const audioSource = audioStore.audioSources;
  console.log(audioSource);

    function onInput() {
      
      audioStore.onInput()
    }

   

  const play = () => {
    audioStore.playAudio(audioSources);
   console.log(audioStore.currentAudio)
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
  onInput,
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

  data() {
    return {
      contol: false
    }
  },
  methods:{
    change(){
      this.contol = !this.contol
    },

    
    changectx(){
       this.contol = true
    },

    emitClicked(){
      this.$emit('buttonClicked')
    }
  }
};
</script>


<style scoped>
.blurr{
       backdrop-filter: blur(5px);
     
    }
</style>