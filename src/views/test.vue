<template>
<div>
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
</template>

<script>
import audioSrc1 from "@/assets/music1.mp3";
import audioSrc2 from "@/assets/music2.mp3";
import audioSrc3 from "@/assets/music3.mp3";
import imageO from "../assets/image/frameq.png";
import image1 from "../assets/image/bookhand.png";
import image2 from "@/assets/image/setradio.png";
import { useAudioStore } from "../stores/counter.js";
import { reactive, ref } from "vue";
export default {
  name: "YourComponent",
  setup() {
    const audioStore = useAudioStore(); // Create an instance of the audio store

    // Define the audioSources array in the component
    const audioSources = [
      {
        id: 1,
        scr: audioSrc1,
        name: "asake",
        img: imageO,
      },
      {
        id: 2,
        scr: audioSrc2,
        name: "olujoke",
        img: image1,
      },
      {
        id: 3,
        scr: audioSrc3,
        name: "ammu",
        img: image2,
      },
    ];

    // Call the store's functions and pass in the audioSources array as an argument
    const play = () => {
      console.log("Play button clicked");
      console.log(audioSources);
      audioStore.playAudio(audioSources);
    };

    const pause = () => {
      console.log("Pause button clicked");
      console.log(audioSources);
      audioStore.pauseAudio(audioSources);
    };

    const stop = () => {
      console.log("Stop button clicked");
      console.log(audioSources);
      audioStore.stopAudio(audioSources);
    };

    const next = () => {
      console.log("Next button clicked");
      console.log(audioSources);
      audioStore.nextAudio(audioSources);
    };

    const prev = () => {
      console.log("Prev button clicked");
      console.log(audioSources);
      audioStore.prevAudio(audioSources);
    };
    const playId = (id) => {
       audioStore.playAudioById(id, audioSources);;
    };
    return {
      play,
      pause,
      stop,
      next,
      prev,
      playId,
     audioSources
    };
  },
};
</script>

<style scoped></style>