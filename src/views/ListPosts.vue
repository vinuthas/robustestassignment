 <template>
 <div>
 <div class="list-posts mx-auto " v-if="(posts && posts.length>0)||(allPosts.length>0)">
    <div class="post card mb-3" v-for="post of paginatedData" :key="post.id">
      <div class="card-body">
        <h3><router-link :to="`/post-details/${post.id}`">{{post.title}}</router-link></h3>
        <p>{{post.body}}</p>
        <button type="button" class="hi btn btn-warning" :style="{'cursor': 'pointer'}" @click="Edit(post.id)">Edit</button>
        <button type="button" class="hi btn btn-secondary" :style="{'cursor': 'pointer','bottom': '0','left':'25%'}" @click="$emit('DeletePost',post.id)">Delete</button>
      </div>
    </div>
    <button class="btn btn-outline-light" :disabled="pageNumber === 0" @click="prevPage" :style="{'position':'absolute','left':'0'}">
      Previous
    </button>
     <button class="btn btn-outline-light" :disabled="pageNumber >= pageCount -1" @click="nextPage"
        :style="{'position':'absolute','right':'0'}"> Next </button>
    </div>
    <em v-else :style="{'color':'white','position':'absolute','left':'50%'}">Nothing to display :(</em>
  </div>
</template>

<script>
import router from '@/router'
import axios from 'axios'
export default {
name: "ListPosts",
props: ["posts"],
data(){
  return {
    pageNumber: 0,
    size:4,
    allPosts: []
  }
},
methods:{
  nextPage(){
    this.pageNumber++;
  },
  prevPage(){
    this.pageNumber--;
  },
  Edit(id){
    console.log(this.post,"edit")
    router.push({name:"edit-post",params:{id}})
  },
  getAllPosts(){
    console.log("inside getPosts")
    axios.get("http://localhost:3000/posts")
    .then(response => { 
      this.allPosts=response.data
    })
    .catch(e=>{
      console.log(e)
    })
  }},
computed:{
  pageCount(){
    let l;
    if(this.posts){
      l = this.posts.length
    }
    else{
      l = this.allPosts.length
    }
    let  s = this.size;
    return Math.ceil(l/s);
  },
  paginatedData(){
    const start = this.pageNumber* this.size,
    end = start + this.size;  
    if(this.posts){
      return this.posts.slice(start, end);
    }
    else{
      return this.allPosts.slice(start, end);
    }
  }
},
created(){
  if(!this.posts)
  {
    this.getAllPosts()
  }
}
}
</script>

<style scoped>
.list-posts{
    max-width:900px;
    position: relative;
}
div .card-body:hover p{
  opacity: 0.5;
}

div .card-body:hover .hi{
  display: block;
  
}
div.card-body .hi {
    position:absolute;
    display:none;
}
div.card-body .hi {
    bottom: 0;
    right:25%;
}
.hi :hover{
color: white;
  background-color: #008cba;
}
</style>