<template>
  <div class="rounded-lg fixed left-5 z-50 mt-9 w-fit">
    
      <div class="w-full h-10" ></div>
    <div class="flex fixed -top-7 md:-top-4 z-50 w-full h- -left-6 bg-primary pt-10  gap-20 containe items-center ">
    <div class="fixed left-5"><img src="../assets/image/logo.png" class="w-8 right-32 sticky h-8" alt=""></div>
    <div class="w-10 h-8"></div>
    <div class="w-full  ronded-xl px-2 rounded-lg flex py-2 items-center gap-4  ">
      <img src="../assets/image/search.svg" class="w-5 font" alt="">
      <input type="" placeholder="Search" class="bg-tertiary text-xl font-normal outline-none underline-0   w-full py- px-1 text-white">
       <div @click="emitclick()" class=" block md:hidden mr-2    " >
       <div  class="w-8 h-1 bg-white relative mt-7 mr-5  transform duration-200 " :class="rotate ? 'rotate rotate-45 top-2 ': 'rotate-0'"></div>
       <div class="w-8 h-1 mb-7 bg-white relative  mt-1 transform duration-200 " :class="rotate ?  ' rotate -rotate-45 buttom-2 ': 'rotate-0 '"></div>
      </div>
    </div>
   </div>
   
       <div :class="rotate ? 'translate-x- h-[25rem]' : '-translate-x h-0'" class="duration-700 h-0 md:h-96 overflow-hidden">
           <div class="flex flex-col rounded-[2rem] justify-center bg-tertiary items-center py-5 px-5 gap-7">
          <router-link to="/"> 
          <div @click="changEHome()" :class="changeHome ?' text-white ':' text-secondary w-[28px]'" class="hover:chbtn  w-[28px]  transform hover:scale-125 duration-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path d="M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z" fill="currentcolor" />
            </svg>
          </div>
          </router-link>


          <router-link to="/view">
           <div @click="changeCollection()" :class="changecollection ?' text-white w-[28px]':' text-secondary'" class="hover:chbtn w-[28px] transform hover:scale-125 duration-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  >
            <path d="M17,3H7C4.8,3,3,4.8,3,7v10c0,2.2,1.8,4,4,4h10c2.2,0,4-1.8,4-4V7C21,4.8,19.2,3,17,3z M17,15h-0.01C17,15.04,17,15.08,17,15.12c0,1.04-1.12,1.88-2.5,1.88S12,16.04,12,15c0-1.03,1-2,2-2c0.17,0,1,0,1,0V9.5l-4,1V16h-0.01C11,16.04,11,16.08,11,16.12C11,17.16,9.88,18,8.5,18S6,17.04,6,16c0-1.03,1-2,2-2c0.17,0,1,0,1,0c0-1,0-5.22,0-5.22c0-0.46,0.31-0.86,0.76-0.97l6-1.5C16.39,6.15,17,6.63,17,7.28V15z" fill="currentcolor" />
          </svg>
           </div>
          </router-link>


          <router-link to="/collection">
           <div  @click="changeLibery()" :class="changelibery ?' text-white w-[28px]':' text-secondary'" class="hover:chbtn  w-[28px] transform hover:scale-125 duration-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                  <path d="M13.625 2.0625L3.21875 6.15625C2.5 6.460938 2 7.175781 2 8L2 20C2 21.101563 2.898438 22 4 22L20 22C21.101563 22 22 21.101563 22 20L22 8C22 6.898438 21.101563 6 20 6L9.125 6L14.375 3.9375 Z M 15 9C16.601563 9 18.101563 9.800781 19 11L11 11C11.898438 9.800781 13.398438 9 15 9 Z M 5.5 10C6.300781 10 7 10.699219 7 11.5C7 12.300781 6.300781 13 5.5 13C4.699219 13 4 12.300781 4 11.5C4 10.699219 4.699219 10 5.5 10 Z M 10.09375 13L19.90625 13C20.007813 13.300781 20 13.699219 20 14C20 14.300781 20.007813 14.699219 19.90625 15L10.09375 15C9.992188 14.699219 10 14.300781 10 14C10 13.699219 9.992188 13.300781 10.09375 13 Z M 5.5 15C6.300781 15 7 15.699219 7 16.5C7 17.300781 6.300781 18 5.5 18C4.699219 18 4 17.300781 4 16.5C4 15.699219 4.699219 15 5.5 15 Z M 11 17L19 17C18.101563 18.199219 16.601563 19 15 19C13.398438 19 11.898438 18.199219 11 17Z" fill="currentcolor" />
                  </svg>
            </div> 
           </router-link>


          <router-link to="/"> 
          <div class="hover:chbtn text-white w-[28px] transform hover:scale-125 duration-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
              <path d="M36.5,6h-25C8.467,6,6,8.467,6,11.5v25c0,3.033,2.467,5.5,5.5,5.5h25c3.033,0,5.5-2.467,5.5-5.5v-25C42,8.467,39.533,6,36.5,6z M18,35c0,0.552-0.448,1-1,1h-4c-0.552,0-1-0.448-1-1v-4c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1V35z M18,26c0,0.552-0.448,1-1,1h-4c-0.552,0-1-0.448-1-1v-4c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1V26z M18,17c0,0.552-0.448,1-1,1h-4c-0.552,0-1-0.448-1-1v-4c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1V17z M27,35c0,0.552-0.448,1-1,1h-4c-0.552,0-1-0.448-1-1v-4c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1V35z M27,26c0,0.552-0.448,1-1,1h-4c-0.552,0-1-0.448-1-1v-4c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1V26z M27,17c0,0.552-0.448,1-1,1h-4c-0.552,0-1-0.448-1-1v-4c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1V17z M36,35c0,0.552-0.448,1-1,1h-4c-0.552,0-1-0.448-1-1v-4c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1V35z M36,26c0,0.552-0.448,1-1,1h-4c-0.552,0-1-0.448-1-1v-4c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1V26z M36,17c0,0.552-0.448,1-1,1h-4c-0.552,0-1-0.448-1-1v-4c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1V17z" fill="currentcolor" />
            </svg>
            </div>
          </router-link>
        </div>
        <div class="flex mt-5 flex-col justify-center rounded-[2rem] bg-tertiary items-center py-5 gap-7">
          <router-link to="/"> 
           <div  class="hover:chbtn text-white w-[28px] transform hover:scale-125 duration-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" >
              <path d="M15 3C11.686 3 9 5.686 9 9L9 10C9 13.314 11.686 16 15 16C18.314 16 21 13.314 21 10L21 9C21 5.686 18.314 3 15 3 z M 11.097656 19.552734C8.1626562 20.319734 5.3940469 21.763797 4.3730469 23.091797C3.4590469 24.279797 4.329125 26 5.828125 26L24.169922 26C25.668922 26 26.539 24.278844 25.625 23.089844C24.604 21.761844 21.836344 20.319734 18.902344 19.552734C17.852344 20.453734 16.491 21 15 21C13.508 21 12.147656 20.452734 11.097656 19.552734 z" fill="currentcolor" />
            </svg>
           </div>
           </router-link>
          <router-link to="/">
           <img src="../assets/image/das.png" class="w-[24px] hover:scale-125 duration-700" /> </router-link>
        </div>
       </div>

      
  </div>
</template>

<script>
const locationName = window.location.href
 const splitloc = locationName.split('/');
 console.log(splitloc)

export default {
  data(){
    return{
    rotate : false,
    flex : true,
    changelibery : '',
    changeHome:'',
    changecollection:'',
    }
  },
   methods:{
   emitclick(){
    this.rotate = !this.rotate
   
   },
   changeCollection(){
   
    this.changeHome=true
    
    console.log( this.changecollection)
   },
    changEHome(){
      
      this.changeHome= false
   
    console.log( this.changeHome)
    },
    changeLibery(){
      this.changelibery = false
      
    }
  },
  created(){
    if (splitloc[3]== '') {
       this.changecollection=true
        this.changelibery = true,
      this.changeHome= false

      console.log(this.changeHome)
   
    } else {
     if (splitloc[3]== 'view') {
       this.changecollection=false
      console.log(this.changeHome)
    this.changecollection=false
     } else {
      if (splitloc[3]== 'view') {
        this.changelibery = false,
     
      console.log(this.changeHome)
     
      } else {
        
      }
     } 
     
    }
  }

}
</script>

<style>
 .chbtn{

filter: invert(9%) sepia(64%) saturate(391%) hue-rotate(324deg) brightness(76%) contrast(110%);
 }
</style>