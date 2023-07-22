
<template>
  <div>
     <li v-for="source in audioSources" :key="source.id">
        {{ source.name }}
      </li>
      <h1>Now Playing: {{ audioStore.currentName }}</h1>
      <img :src="audioStore.currentImage" alt="" srcset="">
    <div>
<div v-if="currentAudio && currentAudioName">
  <h1>Now Playing: {{ currentAudioName }}</h1>
  <img :src="currentAudio.img" alt="">
</div>
     
      <input class="w-full" type="range" v-model="audioStore.currentTime" min="0" :max="audioStore.duration" @input="onInput"/>
      <input class="w-full" type="range" i v-model="audioStore.currentTime" min="0" :max="duration" @input="onInput" />
   <input type="range" v-model="volume" min="0" max="1" step="0.01" @input="onVolumeInput" />


  <div v-for="source in audioSources" :key="source.id" class="">
    <img :src="source.img" alt="">
    <button @click="playId(source.id)">payc</button>
    <h1>{{ source.name }}</h1>
  </div>
</div>
  <button @click="play">Play</button>
  <button @click="pause">Pause</button>
  <button @click="stop">Stop</button>
  <button @click="next">Next</button>
  <button @click="prev">Prev</button>

  </div>
</template>


<script>
import { watchEffect } from "vue"
import { computed } from "vue";
import audioSrc1 from "@/assets/music1.mp3";
import audioSrc2 from "@/assets/music2.mp3";
import audioSrc3 from "@/assets/music3.mp3";
import imageO from "../assets/image/frameq.png";
import image1 from "../assets/image/bookhand.png";
import image2 from "@/assets/image/setradio.png";
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
};
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
}

button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

button:hover {
  background-color: #3e8e41;
}

img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
}

.audio-source {
  display: flex;
  align-items: center;
}

button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

button:hover {
  background-color: #3e8e41;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
}

.slider::-webkit-slider-thumb {
   -webkit-appearance:none;
   width :20px; 
   height :20px; 
   border-radius :50%;
   background-color:#4CAF50; 
}
</style>



