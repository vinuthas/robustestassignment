<template>
    <div class="post-details mx-auto mb-3" :style="{'position':'relative'}">
        <div class="row">
            <div class="col-auto">
                <router-link class="btn btn-block btn-info" to="/">Go Back</router-link>
            </div>
        </div>
        <div class="card mb-4 bg-dark">
            <div class="card-body">
                <h3>{{post.title}}</h3>
                <p>{{post.body}}</p>
            </div>
        </div>
        <h4 :style="{'color':'White' ,'position':'absolute','left':'0'}"><em>Comments</em></h4>
     <PostComments :id="post.id" :style="{'position':'relative','top':'40px'}"></PostComments>   
    </div>
    
  
</template>

<script>
import axios from "axios";
import PostComments from "@/views/PostComments"
export default {
name:"PostDetails",
data(){
    return{
        post: [],
        id: this.$route.params.id
    }
},
components:{
    PostComments
},
created(){
    axios.get("http://localhost:3000/posts/"+this.id)
    .then((response)=>{
        this.post=response.data
        console.log(this.post)})
    .catch((err)=>{console.log(err)})
}
}
</script>

<style>
.post-details{
    max-width:900px;
    
}
h3{
    color: #efbb35;
}

</style>