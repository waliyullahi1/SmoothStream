<template>

 <div class="w-full h-screen bg-blck">
   <button @click="fetchTrackData( getDeezerData)">Add Track</button>
 <div v-for="source in audioSources" :key="source.id">
  <h2>{{ source.name }}</h2>
  <img :src="source.img" alt="">
   <button  @click="playAudioByIdi()"> <span @click="playAudioById(source.id)" >dd{{ source.name }}</span> </button>
  <button @click="playAudioById(source.id)">Play</button>
  </div>
  
    <div></div>
    <div><img :src="currentAudioImge" class="w-34 h-80"></div>
   <div class="flex blurr fixed bottom-0  lg:flex   justify-between  w-full right-   py-7 shadows  shadows-[90px]  border-t border-t-white blurr ">    <div class="flex mx-auto py-5 px-5 justify-between items-center w-5/6">
      <div class="flex   gap-3 text-white">
     <img :src="currentAudioImge" class="w-10 md:w-20 " alt="">
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
        <input class="w-full" type="range" v-model="currentTime" min="0" :max="duration" @input="onInput" />

     </div>
     <div class="flex justify-center gap-5 items-center">
      <img  class="w-7" src="../assets/image/volume-high.png" alt="">
       <input type="range" v-model="volume" min="0" max="1" step="0.01" @input="onVolumeInput" />
     </div>
   </div>
  </div>
 </div>
   
</template>
<script>
import { ref, reactive } from 'vue';
import { onMounted } from 'vue';
import axios from 'axios';
import audioSrc1 from '@/assets/music1.mp3';
import audioSrc2 from '@/assets/music2.mp3';
import audioSrc3 from '@/assets/music3.mp3';
import imageO from'../assets/image/frameq.png';
import image1 from'../assets/image/bookhand.png';
import image2 from'@/assets/image/setradio.png';
export default {

   
 setup() {
  const state = reactive({
    audioSources: [
      {
        id:1,
        scr:audioSrc1,
        name:'asake',
        img:imageO
      },

      {
        id:2,
        scr:audioSrc2,
        name:'olujoke',
        img:image1
      },

       {
        id:3,
        scr:audioSrc3,
        name:'ammu',
        img:image2
      },


    ],
    currentAudioIndex: 0,
   
  });


  const audio = ref(new Audio(state.audioSources[state.currentAudioIndex].scr),);
  const duration = ref(0);
  const currentTime = ref(0);
  const volume = ref(1); 
  const currentAudioName = ref(state.audioSources[state.currentAudioIndex].name);
   const currentAudioImge = ref(state.audioSources[state.currentAudioIndex].img);
   const audioSources1 = state.audioSources;
 
  //  const fetchTrackData = async (id) => {
  //   try {
    
  //     const response = await axios.get(`https://deezerdevs-deezer.p.rapidapi.com/playlist/%7Bid%7D${id}`);
  //     const trackData = response.data;
      
  //     const newAudioSource = {
  //       id: trackData.id,
  //       scr: trackData.preview,
  //       name: trackData.title,
  //       img: trackData.album.cover_medium
  //     };
      
  //     state.audioSources.push(newAudioSource);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
 
// async function getDeezerData() {
//   const response = await fetch('https://deezerdevs-deezer.p.rapidapi.com/infos', {
//     headers: {
//       'x-rapidapi-key': '58a548114dmsh3969372ffd5a6c5p1bbe72jsn756019f1dd9b',
//       'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
//     }
//   });
//   const data = await response.json();
//   state.audioSources = data.tracks.data.map(track => ({
//     scr: track.preview,
//     name: track.title,
//     img: track.album.cover_medium
//   }));
//   audio.value.src = state.audioSources[state.currentAudioIndex].scr;
//   currentAudioName.value = state.audioSources[state.currentAudioIndex].name;
//   currentAudioImge.value = state.audioSources[state.currentAudioIndex].img;
// };

// async function getDeezerData() {
//     try {
//       const response = await axios.get('https://deezerdevs-deezer.p.rapidapi.com/playlist/%7Bid%7D', {
//         headers: {
//           'x-rapidapi-key': '58a548114dmsh3969372ffd5a6c5p1bbe72jsn756019f1dd9b',
//           'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
//         }
//       });
//       state.audioSources = response.data.tracks.data.map(track => ({
//         scr: track.preview,
//         name: track.title,
//         img: track.album.cover_medium
//       }));
//       audio.value.src = state.audioSources[state.currentAudioIndex].scr;
//       currentAudioName.value = state.audioSources[state.currentAudioIndex].name;
//       currentAudioImge.value = state.audioSources[state.currentAudioIndex].img;
//     } catch (error) {
//       console.error(error);
//     }
//   }

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
// getDeezerData();
  

  audio.value.addEventListener('loadedmetadata', () => {
    duration.value = audio.value.duration;
  
     
  });

  audio.value.addEventListener('timeupdate', () => {
    currentTime.value = audio.value.currentTime;
   
     currentAudioImge.value= state.audioSources[state.currentAudioIndex].img;
   
  });

    audio.value.addEventListener('ended', () => {
  if (state.currentAudioIndex < state.audioSources.length - 1) {
    state.currentAudioIndex++;
    audio.value.src = state.audioSources[state.currentAudioIndex].scr;
    currentAudioName.value = state.audioSources[state.currentAudioIndex].name;

   
    playAudio();
  } else {
    state.currentAudioIndex = 0;
    audio.value.src = state.audioSources[state.currentAudioIndex].scr;
    currentAudioName.value = state.audioSources[state.currentAudioIndex].name;
   
    playAudio();
  }
});

   

  const onInput = () => {
    audio.value.currentTime = currentTime.value;
  };

  const onVolumeInput = () => {
    audio.value.volume = volume.value;
    currentAudioName.value = state.audioSources[state.currentAudioIndex].name;
     currentAudioImge.value = state.audioSources[state.currentAudioIndex].img
  
  };

  const playAudio = () => {
     if (audio.value.paused) {
      audio.value.play();
      
     }
  };

  const pauseAudio = () => {
    if (!audio.value.paused) {
      audio.value.pause();
       currentAudioName.value = state.audioSources[state.currentAudioIndex].name;
       console.log(currentAudioImge)
    }
  };

  const stopAudio = () => {
    if (!audio.value.paused) {
      audio.value.pause();
      audio.value.currentTime = 0;
    }
  };

  // const nextAudio = () => {
  //   if (state.currentAudioIndex < state.audioSources.length - 1) {
  //     state.currentAudioIndex++;
  //     audio.value.src = state.audioSources[state.currentAudioIndex].scr;
  //     const currentAudioName = ref(state.audioSources[state.currentAudioIndex].name);
  //     playAudio();
      
  //   }else{
  //     state.currentAudioIndex = 0;
  //     audio.value.src = state.audioSources[state.currentAudioIndex].scr;
  //      playAudio();
  //   }
  // };

  const prevAudio = () => {
    if (state.currentAudioIndex > 0) {
      state.currentAudioIndex--;
      audio.value.src = state.audioSources[state.currentAudioIndex].scr;
      playAudio();
      currentAudioName.value = state.audioSources[state.currentAudioIndex].name;
    }
  };

   const playThirdAudio = () => {
    state.currentAudioIndex = 2;
    audio.value.src = state.audioSources[state.currentAudioIndex];
    const currentAudioName = ref(state.audioSources[state.currentAudioIndex].name);
    playAudio();
  };

  const playAudioById = (id) => {
    const index = state.audioSources.findIndex(source => source.id === id);
    if (index !== -1) {
      state.currentAudioIndex = index;
      audio.value.src = state.audioSources[state.currentAudioIndex].scr;
      playAudio();
       
      }
    };

const nextAudio = () => {
  if (state.currentAudioIndex < state.audioSources.length - 1) {
    state.currentAudioIndex++;
    audio.value.src = state.audioSources[state.currentAudioIndex].scr;
    playAudio();
  } else {
    // Handle the case where there are no more audio sources to play
    // For example, you can reset the currentAudioIndex to 0 to start over from the beginning
    state.currentAudioIndex = 0;
    audio.value.src = state.audioSources[state.currentAudioIndex].scr;
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
    audioSources1,
    playThirdAudio,
     playAudioById,
     audioSources: state.audioSources,
     

  };
},

  data() {
    return {
      contol: false
    }
  },
  methods:{

    

    playAudioByIdi(){
      this.contol = true
    },
    
     change(){
      this.contol = !this.contol
    },

    
    changectx(){
       this.contol = true
    },

    playThirdAudio(){
      console.log(audioSources.id)
    }
  }
};
</script>


<style scoped>
.blurr{
       backdrop-filter: blur(5px);
     
    }
</style>



