<template>
  <div class="mx-auto" :style="{'max-width':'900px'}">
    <input class="form-control mb-4" type="text" v-model="post.title">
    <textarea class="form-control form-control-lg mb-4" type="text" v-model="post.body"/>
    <button type="submit" class="update btn btn-primary mb-2" @click="update">Update</button>
  </div>
</template>

<script>
import axios from "axios"
import Swal from 'sweetalert2'
import router from '@/router'
export default {
name: "EditPost",
data(){
    return{
       id:this.$route.params.id,
       post:{}
    }
},
methods:{
  getAllPosts()
  {
    axios.get("http://localhost:3000/posts/"+this.id)
    .then(response=>this.post=response.data)
    .catch(err=>console.log(err))
  },
  update:function(){
    let payload={
    title: this.post.title,
    body: this.post.body,
    userId: this.post.userId
  }
    axios.put("http://localhost:3000/posts/"+this.id,payload).then(response=>{
        console.log(response.data)
        Swal.fire({
        title: this.post.title,
        confirmButtonText:"Updated",
        width: 500,
        padding: '3em',
        background: '#fff'
      }),
      router.push({path:"/"})
     })
     .catch(err=>console.log(err))
}
},
created(){
  this.getAllPosts()
}
}
</script>

<style>

</style>