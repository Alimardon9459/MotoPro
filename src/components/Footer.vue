<template >
    <div>
        <footer class="text-center text-white mt-5" style="background-color: #f1f1f1;">
            <div class="container pt-4">
                <section class="mb-4">
                <a
                    v-for="icon in icons" :key="icon.index" 
                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#"
                    role="button"
                    data-mdb-ripple-color="dark"
                    >
                <img class="rasm" :src="icon.src" :alt="icon.alt">
                </a>

                </section>
            </div>
            <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                © 2022 Copyright:
                <a class="text-dark" href="#">Motorsports.com</a>
            </div>

        </footer>
    </div>
</template>
<script>
export default {
    name:"Footer",
    data() {
        return {
           icons:[
               {src:"https://icon-library.com/images/png-youtube-icon/png-youtube-icon-21.jpg", alt: 'salom'}  ,
               {src:"https://label.averydennison.com/etc.clientlibs/avery-lpm/clientlibs/lpm/resources/img/icons/twitter-black-icon.png", alt: 'salom'}  ,
               {src:"https://cetanbank.com/data/images/cetancoin/landing2/tild3935-6432-4934-a436-303665376261__photo.png", alt: 'salom'}  ,
               {src:"http://cdn.onlinewebfonts.com/svg/img_81386.png", alt: 'salom'}  ,
               {src:"https://dlhotel.ru/images/main_images/icons/instagram.svg", alt: 'salom'  }
           ] 
        }
    },
}
</script>
<style scoped>
    .rasm{
        width: 50px;
        height: 50px;
        transition: 0.5s;
    }
     .rasm:hover{
        width: 60px;
        height: 60px;
    }
</style>