<template>
  <div class="home" >
    <div class="row mb-3 " :style="{'position':'relative'}">
      <div class="col text-right" :style="{'position':'absolute','right':'5'}">
        <button class="new-post btn btn-primary" @click="navigate">Create new post</button>
      </div>
    </div>
    <div class="md-form mb-3  mt-5 " :style="{'position':'relative','left':'17%'}">
      <input type="text" class="form-control" :style="{'width':'900px','display':'inline'}" placeholder="Search.." name="search" v-model="searchText" >
    </div>
    <strong v-if="loading" :style="{'color':'white','position':'absolute','left':'50%'}">loading....</strong>
    <div v-show="!loading">
      <list-posts  :posts="filteredData" @DeletePost="deletePost"></list-posts>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import router from "@/router"

import ListPosts from "@/views/ListPosts.vue";
export default {
name: 'Home',
components:{
  ListPosts
},
data(){
  return {
    posts: [],
    searchText:'',
    loading:true
  }
},
computed: {
  filteredData:{
    get:function(){
      if(this.searchText) {
        return this.posts.filter((ele) => {return this.searchText.toLowerCase().split(' ').every(post => ele.title.toLowerCase().includes(post))})
      }
     else{
       return this.posts
      }},
     set:function(data){
       return data
     }
  }
},
methods:{
  navigate:function(){
    router.push("add-post")
 },
getPosts:function(){
  console.log("inside getPosts")
  axios.get('http://localhost:3000/posts').then(response=>{ 
    this.posts=response.data,
    this.loading=false
  })
  .catch(e=>{
    alert(e)
  })
},
deletePost:function(id){
  axios.delete("http://localhost:3000/posts/"+id)
  .then(res=>{
      console.log(res)
      this.posts=this.posts.filter(post =>{return post.id !== id})
      this.filteredData=this.posts
    })
  .catch(err=>alert(err))
  }
},
created(){
  this.getPosts()
}
}
</script>
