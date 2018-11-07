<template>
    <div>
        <h1>hello vue</h1>
        <img src="../assets/img/test1.png" />
        <img src="../assets/img/test2.png" />
        <h4>{{msg}}</h4>
        <h2>{{data}}</h2>
        <router-link to="/">home</router-link>
    </div>
</template>

<script>
    export default {
        name:'hello-vue',
        data(){
            return {
                msg:'',
                data:[]
            }
        },
        created(){
            this.getData()
            this.msg = [...new Set([1,2,3,3,3,4,5])]
        },
        methods:{
            getData(){
                [1,2].map(item=>{
                    this.data.push(item)
                })
            }
        }
    }
</script>
<style>
    img{
        font-size:0;
        max-width:300px;
    }
</style>
