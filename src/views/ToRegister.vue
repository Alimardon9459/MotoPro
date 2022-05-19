<template>
    <div>
       <div class="container">
           <div class="connect" >
                <div class="content">
                    <form action="">
                        <h2 style=" text-align: center">Ro'yhatdan o'tish</h2>
                        <div class="input-bit form " v-for="(inputgrup , index) in inputgrups" :key="inputgrup.index">
                            <label class="mt-2" :for="inputgrup.name">{{inputgrup.commentname}}:</label><br>
                            <input 
                                class=" inp form-control "
                                :type="inputgrup.type" 
                                :name="inputgrup.name" 
                                :id="inputgrup.name"
                                v-model="formodel[index].amount"
                                :placeholder="inputgrup.comment"
                            >
                        </div>
                    </form>
                </div> 
                <div class="con">
                    <div class="but-content">
                    <button class="btn btn-register">Ro'yhatdan o'tish</button>
                </div>
                <div style="margin-top:40px" class="but-content">
                    <router-link to="/tologin" class="btn btn bg-info" >Login bilan davom etish</router-link>   
                </div>
                </div>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    name:"ToRegister",
    data() {
        return {
            inputgrups:[
                {type:"text",name:"fname",commentname:"Ismingiz",comment:"Alisher"},
                {type:"text",name:"sname",commentname:"Familiyangiz",comment:"Umarov"},
                {type:"email",name:"email",commentname:"Emailingiz",comment:"alisherumarov@gmail.com"},
                {type:"number",name:"age",commentname:"Yoshingiz",comment:"25"},
                {type:"password",name:"password",commentname:"Parol yarating"},
                {type:"password",name:"passwordrepeat",commentname:"Parolni takrorlang"}
            ],
            formodel:[{},{},{},{},{},{}]
        }
    },
}
</script>
<style scoped >
    .container{
        display: flex;
        justify-content: center;
    }
    .connect{
        margin: 100px;
        width: 450px;
        height: 700px;
        align-items: center;
        display: flex;
        border-radius: 6%;
        justify-content: center;
        flex-wrap: wrap;
        box-shadow: 2px 3px 5px 1px rgb(185, 184, 185);

    }
    .content{
        width: 450px;
        height: 400px;
        display: flex;
        justify-content: center;        
    }
    .but-content{
        width: 450px;
        height: 40px;
        display: flex;
        justify-content: center;
    }
    .inp{
        width: 300px;
    }
    .btn{
        background-color: rgb(21, 181, 202);
        color: white;
    }
    .con{
        height: 120px;
    }
</style>