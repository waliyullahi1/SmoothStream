<template>
  <div>
    <button @click="emitClicked()" class="rounded bg-primary hover:bg-opacity-75 duration-500 ease-out text-white text-base font-medium px-5 py-2">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    emitClicked(){
      this.$emit('buttonClicked'),
     index = state.audioSources.findIndex(source => source.id === id);
    if (index !== -1) {
      state.currentAudioIndex = index;
      audio.value.src = state.audioSources[state.currentAudioIndex].scr;
      playAudio();
    }
    }
  },
}
</script>

<style>

</style>