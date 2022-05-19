<template >
    <div>
        <label for="sname">Ismingizni kiriting:</label>
        <input type="number" name="sname" id="" v-model="sname">
        <h2 v-if="sname.length > 0 && sname.length < 4"> Kamida 4 ta harifdan iborat bo'lsin </h2>
        <h2 v-else-if="sname.lenght >= 4 && sname.lenght <= 12"></h2>
        <h2 v-else-if="sname.lenght > 12"> 12 tadan ortiq harf ishlatish mumkin emas </h2>
    </div>
</template>
<script>
export default {
    data() {
        return {
            sname:''
        }
    },
}
</script>
<style lang="">
    
</style>