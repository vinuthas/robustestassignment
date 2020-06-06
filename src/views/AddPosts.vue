<template>
 <div class="mx-auto" :style="{'max-width':'900px'}">
    <input class="form-control mb-4" type="text" v-model="title">
    <textarea class="form-control form-control-lg mb-4" type="text" v-model="body"/>
    <select>
    </select>
    <button type="submit" class="btn btn-primary mb-2" @click="update">Add</button>
</div>
</template>

<script>
import axios from  'axios'

export default {
name:"AddPost",
methods:{

},
created(){
axios.get
}}
</script>

<style>
.add-post{
  max-width:900px;
}
</style>