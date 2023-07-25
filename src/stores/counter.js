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
  const currentImage = ref(null);
  const volume = ref(1);
  const control = ref(false);

  const initializeAudio = (audioSources) => {
    console.log("Initializing audio");
    console.log("Initializing audio");
    console.log("Initializing audio with sources:", audioSources);
    state.audioSources = audioSources;
    audio.value = new Audio(audioSources[state.currentAudioIndex].src);
    
     console.log(state.audioSources);
    currentName.value = audioSources[state.currentAudioIndex].name;
    currentImage.value = audioSources[state.currentAudioIndex].img;
   
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
       control.value = !control.value;
         console.log(control.value);
    }

    if (audio.value.paused) {
      audio.value.play();
       control.value = !control.value;
         console.log(control.value);
    }
  };

  const pauseAudio = (audioSources) => {
    if (!audio.value.paused) {
      audio.value.pause();
       control.value = !control.value;
       console.log(control.value);
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
      pauseAudio();
       control.value = ref[true];
      state.currentAudioIndex++;
      audio.value.src = state.audioSources[state.currentAudioIndex].src;
      playAudio();
    } else {
      state.currentAudioIndex = 0;
      audio.value.src = state.audioSources[state.currentAudioIndex].src;
      playAudio();
    }
  };

  const prevAudio = (audioSources) => {
    if (state.currentAudioIndex > 0) {
       control.value =ref[true];

      state.currentAudioIndex--;
      audio.value.src = audioSources[state.currentAudioIndex].src;
      playAudio(audioSources);
    }
  };

  const playAudioById = (id, audioSources) => {
    const index = audioSources.findIndex((source) => source.id === id);
    control.value = !control.value;
    if (index !== -1) {
      state.currentAudioIndex = index;
      control.value = ref[true];
      if (!audio.value) {
        audio.value = new Audio(audioSources[state.currentAudioIndex].src);
        initializeAudio(audioSources);
        control.value = ref[true];
      } else {
        audio.value.src = audioSources[state.currentAudioIndex].src;
        initializeAudio(audioSources);
        control.value = ref[true];
      }
      playAudio(audioSources);
    }
  };

  return {
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
    control,
    initializeAudio,
    currentAudioIndex: state.currentAudioIndex,
    audioSources: state.audioSources,
    currentImage,
    onVolumeInput,
    playAudioById,
  };
});
