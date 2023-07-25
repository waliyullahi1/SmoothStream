<template>

  <div class="flex blurr fixed bottom-0  lg:flex z-40 justify-between  w-full right-   py-7 shadows  shadows h-[90px]  border-t border-t-white blurr ">
    <div class="flex mx-auto py-5 px-5 justify-between items-center w-5/6">
      <div class="flex   gap-3 text-white">
       
     <img :src="audioStore.currentImage"  class="w-20 md:w-20 duration-700 translate transform   " alt="">
        <div class="">
          <h1 class="text-xl  md:block hidden font-semibold">{{audioStore.currentName}}</h1>
          <p class="text-14px md:block hidden font-semibold ">james</p>
        </div>
      </div>
     <div class="">
       <div class="text-white flex gap-10 justify-between items-center ">
        
        <img src="../assets/image/shuffle.png" class="w-7 h-7 md:flex hidden" alt="">

          <div @click="changectx" class="">
            <button @click="audioStore.prevAudio">
          <img class="w-7" src="../assets/image/previous.png" alt="" >
            </button>
          </div>

        <div @click="change()">

          <button  :class="audioStore.control ? 'hidden' :'block'" @click="play">
          <img  class="w-7" src="../assets/image/play.svg" alt="" >
        </button>
        
        <button class="" :class="audioStore.control ? 'block' :'hidden'"  @click="pause">
          <span ><img class="w-7" src="../assets/image/pause.svg" alt="" ></span>
        </button>

        </div>


        <div @click="changectx()" class="">
          <button @click="audioStore.nextAudio"> 
            <img class="w-7" src="../assets/image/next.png" alt="" >
          </button>
        </div>
        
        <button class="hidden " @click="stopAudio">Stop</button>
        <img   src="../assets/image/repeate-one.png" class="w-7 h-7 md:flex hidden" alt="">
        
      </div>
      <input class="w-full" type="range" v-model="audioStore.currentTime" min="0" :max="audioStore.duration" @input="onInput"/>

     </div>
     <div  @click="lookMore()" class="  justify-center gap-5 items-center">
      <img  src="../assets/image/more-vertical.png"  class="w-7   md:hidden flex" alt="">
      <div :class="showMore? ' flex top-32 right-0 ':'flex -top-8 right-0 '" class="md:static absolute  md:top-0  duration-700 translate transform  md:flex">
        <img  class="w-7   " src="../assets/image/volume-high.png" alt="">
         <input type="range" v-model="audioStore.volume" min="0" max="1" step="0.01" @input="audioStore.onVolumeInput" />
     </div>
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
  props: {
    contol: Boolean,
  
  },
  setup() {
   const audioStore = useAudioStore();
  const volume = useAudioStore();
  const audioSources = [
   
  ];
  const audioSource = audioStore.audioSources;
  console.log(audioSource);
 
    function onInput() {
      
      audioStore.onInput()
    };
    const play = () => {
    audioStore.playAudio(audioSources);
  
  };
    
  const pause = () => {
    console.log("Pause button clicked" );
    audioStore.pauseAudio(audioStore.currentTime);
  };

    const next = () => {
   
    audioStore.nextAudio(audioSources);
  };
const currentAudio = computed(() => {
  if (audioStore.currentAudioIndex !== null && audioStore.currentAudioIndex !== undefined) {
    return audioStore.audioSources[audioStore.currentAudioIndex];
  } else {
    return null;
  }
});

  return {
  onInput,
  volume,
  pause,
  next,
    audioStore,
    audioSources,
   audioSource,
    currentAudio,
   duration:audioStore.duration,
   currentTime:audioStore.currentTime,
    play,
   onVolumeInput: audioStore.onVolumeInput,
   currentName : audioStore.currentName,
   currentImage: audioStore.currentImage,
   onInput: audioStore.onInput,
   control: audioStore.control,
  };
},



  data() {
    return {
      contol: false,
      showMore:true,
    }
  },
  methods:{
    change(){
      this.contol = !this.contol
       this.$emit("change",)
    },
    next(){
      this.$emit("next",)
    },
    
   lookMore(){
      this.showMore = !this.showMore
        this.$emit("changectx",)
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

   
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
 
}


input[type="range"]:focus {
  outline: none;
}


input[type="range"]::-webkit-slider-runnable-track {
  background-color: #ffbf00;
  border-radius: 0.5rem;
  height: 0.5rem;
}


input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none; 
  appearance: none;
  margin-top: -4px; 
  background-color: #ffffff;
  border-radius: 0.5rem;
  height: 1rem;
  width: 1rem;
}

input[type="range"]:focus::-webkit-slider-thumb {
  outline: 3px solid #fd9800;
  outline-offset: 0.125rem;
}


input[type="range"]::-moz-range-track {
  background-color: #fbff00;
  border-radius: 0.5rem;
  height: 0.5rem;
}


input[type="range"]::-moz-range-thumb {
  background-color: #ffffff;
  border: none; 
  border-radius: 0.5rem;
  height: 1rem;
  width: 1rem;
}

input[type="range"]:focus::-moz-range-thumb{
  outline: 3px solid #ffffff;
  outline-offset: 0.125rem;
}
</style>