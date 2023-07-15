<template>

  <div class="flex blurr fixed bottom-0  lg:flex   justify-between  w-full right-   py-7 shadows  shadows h-[90px]  border-t border-t-white blurr ">
    <div class="flex mx-auto py-5 px-5 justify-between items-center w-5/6">
      <div class="flex   gap-3 text-white">
     <img src="../assets/image/aalbum3.png" class="w-10 md:w-20 " alt="">
        <div class="">
          <h1 class="text-xl   font-semibold">Season in</h1>
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

          <button  :class="contol ? 'hidden' :'block'" @click="playAudio">
          <img  class="w-7" src="../assets/image/play.svg" alt="" >
        </button>
        
        <button class="" :class="contol ? 'block' :'hidden'"  @click="pauseAudio">
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
      <input class="w-full " type="range" name="" v-model="currentTime" id="">

     </div>
     <div class="flex justify-center gap-5 items-center">
      <img  class="w-7" src="../assets/image/volume-high.png" alt="">
       <input class="w-full " type="range" name="" v-model="currentTime" id="">
     </div>
   </div>
  </div>
   
</template>

<script>
import { ref, reactive } from 'vue';
import audioSrc1 from '@/assets/music1.mp3';
import audioSrc2 from '@/assets/music2.mp3';
import audioSrc3 from '@/assets/music3.mp3';

export default {
  setup() {
     const duration = ref(0)
    const state = reactive({
      audioSources: [audioSrc1, audioSrc2, audioSrc3],
      currentAudioIndex: 0,
    });
    const audio = ref(new Audio(state.audioSources[state.currentAudioIndex]));

    const playAudio = () => {
      if (audio.value.paused) {
        audio.value.play();
      }
    };

    const pauseAudio = () => {
      if (!audio.value.paused) {
        audio.value.pause();
      }
    };

    const stopAudio = () => {
      if (!audio.value.paused) {
        audio.value.pause();
        audio.value.currentTime = 0;
      }
    };

    const nextAudio = () => {
     
      if (state.currentAudioIndex < state.audioSources.length - 1) {
        state.currentAudioIndex++;
        audio.value.src = state.audioSources[state.currentAudioIndex];
        playAudio();
      }
    };

    const prevAudio = () => {
      if (state.currentAudioIndex > 0) {
        state.currentAudioIndex--;
        audio.value.src = state.audioSources[state.currentAudioIndex];
        playAudio();
      }
    };

    return {
      playAudio,
      pauseAudio,
      stopAudio,
      nextAudio,
      prevAudio,
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
    }
  }
};
</script>


<style scoped>
.blurr{
       backdrop-filter: blur(5px);
     
    }
</style>