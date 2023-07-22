import { defineStore } from "pinia";
import { reactive, ref, computed } from "vue";

export const useAudioStore = defineStore("audio", () => {
  const state = reactive({
    currentAudioIndex: 0,
    audioSources: [],
   
  });

  const audio = ref(null);
  const duration = ref(0);
const currentTime = ref(0);
const currentName = ref(null);
const currentImage= ref(null);
  const volume = ref(1);

 
  const initializeAudio = (audioSources) => {
    console.log("Initializing audio");
    console.log("Initializing audio");
   console.log("Initializing audio with sources:", audioSources);
    audio.value = new Audio(audioSources[state.currentAudioIndex].src);
    currentName.value = audioSources[state.currentAudioIndex].name;
    currentImage.value = audioSources[state.currentAudioIndex].img;
    console.log(currentName.value)
    audio.value.addEventListener("loadedmetadata", () => {
      duration.value = audio.value.duration;
      currentTime.value = audio.value.currentTime;
    });

    audio.value.addEventListener("timeupdate", () => {
      currentName.value = audioSources[state.currentAudioIndex].name;
       currentImage.value = audioSources[state.currentAudioIndex].img;
     currentTime.value = audio.value.currentTime;
       
      
    });

    audio.value.addEventListener("ended", () => {
      if (state.currentAudioIndex < state.audioSources.length - 1) {
        state.currentAudioIndex++;
        nextAudio(audioSources);
      } else {
        state.currentAudioIndex = 0;
       nextAudio(audioSources);
      }
    });
  };


   const onInput = () => {
     audio.value.currentTime = currentTime.value;
   };
  

  const onVolumeInput = (event) => {
    audio.value.volume = event.target.value;
    volume.value = event.target.value;
  };
const playAudio = (audioSources) => {
  
  if (!audio.value) {
    initializeAudio(audioSources);
  }

  if (audio.value.paused) {
    audio.value.play();
  }
};

  const pauseAudio = (audioSources) => {
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

  const nextAudio = (audioSources) => {
    if (state.currentAudioIndex < audioSources.length - 1) {
      state.currentAudioIndex++;
      audio.value.src = audioSources[state.currentAudioIndex].src;
      playAudio(audioSources);
    } else {
      state.currentAudioIndex = 0;
      audio.value.src = audioSources[state.currentAudioIndex].src;
      playAudio(audioSources);
    }
  };

  const prevAudio = (audioSources) => {
   
    if (state.currentAudioIndex > 0) {
      state.currentAudioIndex--;
      audio.value.src = audioSources[state.currentAudioIndex].src;
      playAudio(audioSources);
    }
  };

  const playAudioById = (id, audioSources) => {
    const index = audioSources.findIndex((source) => source.id === id);
   
    if (index !== -1) {
      state.currentAudioIndex = index;
      if (!audio.value) {
        audio.value = new Audio(audioSources[state.currentAudioIndex].src);
         initializeAudio(audioSources);
      } else {
        audio.value.src = audioSources[state.currentAudioIndex].src;
         initializeAudio(audioSources);
      }
     playAudio(audioSources);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };
  
  return {
    formatTime,
    playAudio,
    pauseAudio,
    stopAudio,
    nextAudio,
    prevAudio,
    duration,
    currentTime,
    onInput,
    currentName,
    volume,
    initializeAudio,
    currentAudioIndex: state.currentAudioIndex,
    audioSources: state.audioSources,
     currentImage,
    onVolumeInput,
    playAudioById,
  };
});
