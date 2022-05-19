<template>
    <div>
        <div class="container">
            <div id="carouselExampleIndicators" class="carousel slide mt-5" data-bs-ride="carousel">
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
            <h1 style="text-align: center;" class="mt-4 mb-5" >Lorem ipsum dolor sit.</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio modi cupiditate laborum ipsum. Mollitia officia
                 debitis obcaecati itaque et fugiat, esse inventore, quaerat officiis consectetur nemo quod, ratione nam. Odit?
            </h3>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ab quam expedita a voluptatum, neque pariatur cupiditate illum,
                 maiores dolorum tenetur officiis necessitatibus distinctio autem ad cum minus nemo non soluta? Ab, voluptatem recusandae aliquid 
                 similique magnam officiis, nisi eaque nemo, est aperiam quibusdam asperiores ea! Necessitatibus aliquid dignissimos omnis?
            </h3>
            <router-link to="/toregister" class="btn btn-primary" >Sotib olish</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:"BigBit",
    data() {
        return {
             imgs:[
                {class:"carousel-item active", src:"https://world-mans.ru/image/ducati-1098-r-estatica.jpg", alt: 'rasm'},
                {class:"carousel-item", src:"https://world-mans.ru/image/ducati-1098-r-estatica.jpg", alt: 'boshqasi'},
                {class:"carousel-item", src:"https://world-mans.ru/image/ducati-1098-r-estatica.jpg", alt: 'rasm'},

            ],
        }
    },
}
</script>
<style scoped>
    a{
        text-align: center;
    }
    .btn-primary{
        margin-left: 90%;
        margin-top: 50px;
        margin-bottom: 40px;
    }
</style>