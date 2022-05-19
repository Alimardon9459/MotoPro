<template>
  <div id="nav">  
   <Navbar/>
    <router-view/>
   <Footer/>
  </div>
  
</template>

<script>
 import Navbar from './components/Navbar'
 import Footer from './components/Footer'
export default {
  components:{
    Navbar,
    Footer,
  }
}
</script>

<style>
   a ,button{
        text-decoration: none;
        font-size: 18px;
        color: black;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>
