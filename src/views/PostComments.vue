<template>
  <div class="post-comments ">
    <div class="card text-white bg-dark mb-1 mx-auto" style="max-width: 800px;"  v-for="comment of comments" :key="comment.id">
      <div class="card-body">
        <div class="card-title"><h5>{{comment.name}}</h5></div>
        <div class="card-text"><p>{{comment.body}}</p></div>
      </div>
      <div class="card-footer">
    <small class="text-muted"><em>{{comment.email}}</em></small>
    </div>
  </div>
</div>
  
</template>

<script>
import axios from "axios"
export default {
name: "PostComments",
data(){
  return{
    id: this.$route.params.id,
    comments: []
  }
},
created(){
  axios.get("http://localhost:3000/comments?postId="+this.id)
  .then(response => {this.comments=response.data
  console.log(this.comments)}
  )
  .catch(err => console.log(err))
}
}
</script>

<style>

</style>