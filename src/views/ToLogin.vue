<template>
    <div>
        <div class="container">
            <div class="container-section">
                <form action="">
                    <div class="input-bit form " v-for="inputgrup in inputgrups" :key="inputgrup.index">
                        <label class="mt-2" :for="inputgrup.name">{{inputgrup.commentname}}:</label><br>
                        <input 
                            class=" inp form-control "
                            :type="inputgrup.type" 
                            :name="inputgrup.name" 
                            :id="inputgrup.name"
                            :v-model="inputgrup.name"
                            :placeholder="inputgrup.comment"
                        >
                    </div>
                    <div class="content-btn">
                        <button class="btn btn bg-info mt-5" >Davom etish</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"ToLogin",
    data(){
        return{
             inputgrups:[
                {type:"email",name:"email",commentname:"Emailingiz",comment:"@gmail.com"},
                {type:"password",name:"password",commentname:"Parol"},
             ]
        }
    }
}
</script>
<style scoped>
    .container{
        display: flex;
        justify-content:center;
    }
    .container-section{
        width: 50%;
        margin: 100px;
        display: flex;
        justify-content: center;
    }
    .content-btn{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .inp{
        width: 350px;
    }
    .btn{
        color: white;
    }
</style>