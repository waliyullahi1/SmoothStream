import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useAudioStore = defineStore("audio", () => {
  const state = reactive({
    currentAudioIndex: 0,
  });

  const audio = ref(null);
  const duration = ref(0);
  const currentTime = ref(0);
  const volume = ref(1);
  const currentAudioName = ref("");
  const currentAudioImge = ref("");

  const initializeAudio = (audioSources) => {
    console.log("Initializing audio");
    audio.value = new Audio(audioSources[state.currentAudioIndex].scr);
    currentAudioName.value = audioSources[state.currentAudioIndex].name;
    currentAudioImge.value = audioSources[state.currentAudioIndex].img;

    audio.value.addEventListener("loadedmetadata", () => {
      duration.value = audio.value.duration;
    });

    audio.value.addEventListener("timeupdate", () => {
      currentTime.value = audio.value.currentTime;
      currentAudioImge.value = audioSources[state.currentAudioIndex].img;
    });

    audio.value.addEventListener("ended", () => {
      if (state.currentAudioIndex < audioSources.length - 1) {
        state.currentAudioIndex++;
        audio.value.src = audioSources[state.currentAudioIndex].scr;
        currentAudioImge.value = audioSources[state.currentAudioIndex].img;
        currentAudioName.value = audioSources[state.currentAudioIndex].name;

        playAudio(audioSources);
      } else {
        state.currentAudioIndex = 0;
        audio.value.src = audioSources[state.currentAudioIndex].scr;
        currentAudioName.value = audioSources[state.currentAudioIndex].name;

        playAudio(audioSources);
      }
    });
  };

  const onInput = () => {
    audio.value.currentTime = currentTime.value;
  };

  const onVolumeInput = (audioSources) => {
    audio.value.volume = volume.value;
    currentAudioName.value = audioSources[state.currentAudioIndex].name;
    currentAudioImge.value = audioSources[state.currentAudioIndex].img;
  };

  const playAudio = (audioSources) => {
    console.log("Playing audio");
    if (!audio.value) {
      initializeAudio(audioSources);
    }

    if (audio.value.paused) {
      audio.value.play();
    }
  };

  const pauseAudio = (audioSources) => {
    console.log("Pausing audio");
    if (!audio.value.paused) {
      audio.value.pause();
      currentAudioName.value = audioSources[state.currentAudioIndex].name;
    }
  };

  const stopAudio = () => {
    console.log("Stopping audio");
    if (!audio.value.paused) {
      audio.value.pause();
      audio.value.currentTime = 0;
    }
  };

  const nextAudio = (audioSources) => {
    console.log("Playing next audio");
    if (state.currentAudioIndex < audioSources.length - 1) {
      state.currentAudioIndex++;
      audio.value.src = audioSources[state.currentAudioIndex].scr;
      playAudio(audioSources);
    } else {
      state.currentAudioIndex = 0;
      audio.value.src = audioSources[state.currentAudioIndex].scr;
      playAudio(audioSources);
    }
  };

  const prevAudio = (audioSources) => {
    console.log("Playing previous audio");
    if (state.currentAudioIndex > 0) {
      state.currentAudioIndex--;
      audio.value.src = audioSources[state.currentAudioIndex].scr;
      playAudio(audioSources);
      currentAudioName.value = audioSources[state.currentAudioIndex].name;
    }
  };

 const playAudioById = (id, audioSources) => {
   const index = audioSources.findIndex((source) => source.id === id);
   if (index !== -1) {
     state.currentAudioIndex = index;
     if (!audio.value) {
       audio.value = new Audio(audioSources[state.currentAudioIndex].scr);
     } else {
       audio.value.src = audioSources[state.currentAudioIndex].scr;
     }
     playAudio();
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
    volume,
    onVolumeInput,
    currentAudioName,
    currentAudioImge,
    playAudioById,
  };
});