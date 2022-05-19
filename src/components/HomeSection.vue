<template>
    <div>
        <div class="container">
            <div class="container-head">
                <div class="content">
                    <p class="word fs-1 mt-5">Lorem ipsum dolor sit <br> amet consectetur.</p>
                    <p class="words fs-3 mt-4 ">Lorem ipsum dolor sit amet consectetur <br> adipisicing elit. Tenetur ipsa voluptates <br> natus perferendis.</p>
                    <router-link to="/toregister" class="btn btn-primary mt-4 mb-5" >Ro'yhatdan o'tish</router-link>
                </div>
                <div class="exhibition-img">
                    <img class="rounded float-start" src="@\assets\motorek.png" alt="">
                </div>
            </div> 
            <!-- this is where the carousel began -->
            <div class="container-section">
               <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div v-for="img in imgs" :key="img.index" :class="img.class"  >
                        <img :src="img.src" class="d-block w-100" :alt="img.alt">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div> 
            </div> 
            <h1 class="h1 mt-5 mb-5" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
              <!-- bu yer kichik kontentchalar uchun -->
            <div class="container-footer">
                <router-link class="bit-link" to="/bigbit">
                    <div class="container-footer-bit" v-for="bitimg in bitimgs"  :key="bitimg.src" >
                        <div class="bit-img">
                            <img class="bit-img-img" :src="bitimg.src" alt="">
                        </div>
                        <div class="bit-word">
                            <h3 style=" text-align: center" >{{bitimg.word}}</h3>
                            <p style=" text-align: center">{{bitimg.words}}</p>
                        </div>
                    </div>
                </router-link>
            </div>  
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            // for is corusel
            imgs:[
                {class:"carousel-item active", src:"https://www.motorcycle.com/blog/wp-content/uploads/2020/07/071320-2020-Japanese-ADV-Comparo-Suzuki-V-Strom-1050XT-_EBB5409-1.jpg", alt: 'rasm'},
                {class:"carousel-item", src:"https://i.ytimg.com/vi/tC2LMxYMAYs/maxresdefault.jpg", alt: 'boshqasi'},
                {class:"carousel-item", src:"https://rollingutopia.com/wp-content/uploads/2015/09/hdwallpapersimage.com-red-motorcycle-pro-tuning-wide-hd-wallpaper-1920x1200.jpg", alt: 'rasm'},

            ],
            // for is container-bit
            bitimgs:[
                {src:"https://world-mans.ru/image/ducati-1098-r-estatica.jpg", word:"Lorem ipsum dolor sit amet.", words:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aut adipisci deleniti reprehenderit!"},
                {src:"https://world-mans.ru/image/ducati-1098-r-estatica.jpg", word:"Lorem ipsum dolor sit amet.", words:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aut adipisci deleniti reprehenderit!"},
                {src:"https://world-mans.ru/image/ducati-1098-r-estatica.jpg", word:"Lorem ipsum dolor sit amet.", words:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aut adipisci deleniti reprehenderit!"},
                {src:"https://world-mans.ru/image/ducati-1098-r-estatica.jpg", word:"Lorem ipsum dolor sit amet.", words:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aut adipisci deleniti reprehenderit!"},
                {src:"https://world-mans.ru/image/ducati-1098-r-estatica.jpg", word:"Lorem ipsum dolor sit amet.", words:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aut adipisci deleniti reprehenderit!"},
                {src:"https://world-mans.ru/image/ducati-1098-r-estatica.jpg", word:"Lorem ipsum dolor sit amet.", words:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aut adipisci deleniti reprehenderit!"},
                {src:"https://world-mans.ru/image/ducati-1098-r-estatica.jpg", word:"Lorem ipsum dolor sit amet.", words:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aut adipisci deleniti reprehenderit!"},
                {src:"https://world-mans.ru/image/ducati-1098-r-estatica.jpg", word:"Lorem ipsum dolor sit amet.", words:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aut adipisci deleniti reprehenderit!"},
                {src:"https://world-mans.ru/image/ducati-1098-r-estatica.jpg", word:"Lorem ipsum dolor sit amet.", words:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aut adipisci deleniti reprehenderit!"},

            ]

        }
    },
}
</script>
<style scoped>
    .container-head{
        display: flex;
        justify-content: space-between;
    }
    .rounded{
        width: 550px;
    }
    .h1{
        text-align: center;
    }
    .container-footer , .bit-link{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        color: black;
    }
    .container-footer-bit{
        width: 370px;
        height: 400px;
        margin-top: 50px;
        border-radius: 20px;
        display: flex;
        justify-content:center;
        flex-wrap: wrap;
        transition: 0.5s;
    }
    .container-footer-bit:hover{
        box-shadow: 2px 3px 1px 4px rgb(150, 149, 149);
    }
    .bit-img-img{
        margin-top: 20px;
        width: 300px;
        height: auto;
    }
</style>