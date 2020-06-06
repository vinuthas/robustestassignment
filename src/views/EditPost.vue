<template>
<div class="mx-auto" :style="{'max-width':'900px'}">
    <input class="form-control mb-4" type="text" v-model="title">
    <textarea class="form-control form-control-lg mb-4" type="text" v-model="body"/>
    <button type="submit" class="btn btn-primary mb-2" @click="update">Update</button>
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
       
            title:this.$route.params.postData.title,
            id:this.$route.params.postData.id,
            body:this.$route.params.postData.body,
            userId:this.$route.params.postData.userId
        }
},


methods:{
update:function(){
    axios.put(`https://jsonplaceholder.typicode.com/posts/${this.id}`,{  id: this.id,
      title: this.title,
      body: this.body,
      userId:this.userId},  {headers: {
      "Content-type": "application/json; charset=UTF-8"
    }}).then(response=>{
        console.log(response.data)
        Swal.fire({
  title: this.title,
  text: this.body,
  width: 600,
  padding: '3em',
  background: '#fff',
  backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `
}),
router.push({path:"/"})
    }).catch(err=>console.log(err))
}
}
}
</script>

<style>

</style>