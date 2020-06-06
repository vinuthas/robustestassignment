<template>
 <div class="mx-auto" :style="{'max-width':'900px'}">
    <input class="form-control mb-4" type="text" v-model="title">
    <textarea class="form-control form-control-lg mb-4" type="text" v-model="body"/>
    <select>
    </select>
    <button type="submit" class="btn btn-primary mb-2">Add</button>
</div>
</template>

<script>
import axios from  'axios'

export default {
name:"AddPost",
data(){
  return{
    users:[]
  }
},
methods:{

},
created(){
axios.get('http://jsonplaceholder.typicode.com/users')
.then(response=>this.users=response.data)
.catch(err=>console.log(err))
}}
</script>

<style>
.add-post{
  max-width:900px;
}
</style>