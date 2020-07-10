<template>
 <div class="mx-auto" :style="{'max-width':'900px'}">
   <form>
      <input class="form-control mb-4" type="text" v-model="title" placeholder="Enter post title here" required>
      <textarea class="form-control form-control-lg mb-4" type="text" v-model="body" placeholder="Enter post content here"/>
      <select v-model="userId" required>
        <option v-for="user in users" :key="user.id" :value="user.id"> {{user.id}} </option>
      </select> <br/>
      <button type="submit" class="btn btn-primary mb-2" @click="handlePost"> Add </button>
    </form>
 </div>
</template>

<script>
import axios from 'axios'
import router from  '@/router'
export default {
name:"AddPost",
data(){
  return{
    users:[],
    title:'',
    body:'',
    userId:''
  }
},
methods:{
  getUsers(){
    axios.get('http://localhost:3000/users')
    .then( response => { 
      this.users=response.data 
      // console.log(this.users)
    })
    .catch( err => console.log(err)) 
  },
  handlePost(){
    event.preventDefault()
    let payload = {
      title: this.title,
      body: this.body,
      userId: this.userId
    }
    if(payload.title != '' && payload.userId != ''){
      axios.post("http://localhost:3000/posts/", payload)
        .then(response=>{
          console.log(response.data)
          alert("Post has been created")
          router.push("/")
        })
        .catch(err=>{console.log(err)
          alert("Something went wrong")})
          this.title=""
          this.body=""
          this.userId=""
        }
      else{
        alert("Please fill out all mandatory fields")
      }
    }
  },
  created(){
    this.getUsers()
  }
}
</script>

<style>
.add-post{
  max-width:900px;
}
</style>