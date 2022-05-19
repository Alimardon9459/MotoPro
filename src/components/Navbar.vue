<template>
    <div>
        <div class="container">
            <div class="content">
                <div class="logo">
                   <router-link to="/" > <img class="rounded float-start" src="@\assets\moto.png" alt="" ></router-link>
                </div>
                <div class="nav" >
                    <router-link to="/" >Bosh sahifa</router-link>
                    <router-link to="/about" >Biz haqimizda</router-link>
                    <router-link to="/tologin">Login</router-link>
                    <select class="form-select" >
                        <option value="UZ">UZ</option>
                        <option value="EN">EN</option>
                        <option value="RU">RU</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            word:""
        }
    },
}
</script>
<style scoped>
    .container{
        height: 120px;
        display: flex;
        justify-content: center;
    }
    .content{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav{
        display: flex;
        align-items: center;
    }

    .rounded{
        width: 130px;
    }
    .form-select{
        width: 70px;
        height: 40px;
    }
    a{
        margin: 25px;
    }
</style>