<template>
    <div>
        <input class="inp" type="text" name="" id="" v-model="word"
            v-for="ins in inp" :key="ins"
            :Astyle="{borderColor:word.length<=ins.soni ? 'red' : 'black' }"
        >

        <h1 :style="{color:word.length==5 ? 'red' : 'black' }" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ad, eaque laboriosam a dolorem consequatur aliquid laudantium id recusandae. Eveniet eum enim animi odit eos explicabo quisquam alias quia itaque?</h1>
    </div>
</template>
<script>
export default {
    name:"yangi",
    data() {
        return {
            word:"",
            inp:[
                {
                    soni:"10"
                }
            ]
        }
    },
    
}
</script>
<style scoped>
    .inp{
        border: none;
        border: 3px solid;
        border-radius: 5px;
    }
</style>