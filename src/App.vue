<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{padding: 0;margin: 0; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.swiper-pagination2 .swiper-pagination-bullet{
	width:50px;
	height:5px;
	display: inline-block;
	border-radius: 0;
	background: #fff;
	-webkit-transition:all 0.5s ease-in-out;
	-moz-transition:all 0.5s ease-in-out;
	-o-transition:all 0.5s ease-in-out;
	-ms-transition:all 0.5s ease-in-out;
	transition:all 0.5s ease-in-out;
}
.swiper-pagination1 .swiper-pagination-bullet-active{background:rgba(0,0,0 ,0.2)}
	
</style>
