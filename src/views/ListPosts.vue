 <template>
 <div>
 <div class="list-posts mx-auto " v-if="posts.length!=0">
     <div class="card mb-3" v-for="post of paginatedData" :key="post.id">
            <div class="card-body">
                <h3><router-link :to="`/post-details/${post.id}`">{{post.title}}</router-link></h3>
                <p>{{post.body}}</p>
                <button type="button" class="hi btn btn-warning" :style="{'cursor': 'pointer'}" @click="Edit(post)">Edit</button>
                <button type="button" class="hi btn btn-secondary" :style="{'cursor': 'pointer','bottom': '0',
    'left':'25%'}">Delete</button>
            </div>
             
       </div>
        
        <button class="btn btn-outline-light"
                  :disabled="pageNumber === 0" 
                  @click="prevPage" :style="{'position':'absolute','left':'0'}">
                  Previous
              </button>
        <button class="btn btn-outline-light"
                  :disabled="pageNumber >= pageCount -1" 
                  @click="nextPage" :style="{'position':'absolute','right':'0'}">
                  Next
        </button>
       
       </div>
    
                <em v-else :style="{'color':'white','position':'absolute','left':'50%'}">Sorry something went wrong :(</em>
  </div>
</template>

<script>
import router from '@/router'
export default {
    name: "ListPosts",
    props: ["posts"],
    data(){
        return {
            pageNumber: 0,
            size:4
        }
    },
      methods:{
      nextPage(){
         this.pageNumber++;
      },
      prevPage(){
        this.pageNumber--;
      },
      Edit(post){
        console.log(post,"edit")
        router.push({name:"edit-post",params:{id:post.id,postData:post}})
      }
  },
  computed:{
    pageCount(){
      let l = this.posts.length,
          s = this.size;
      return Math.ceil(l/s);
    },
    paginatedData(){
      const start = this.pageNumber* this.size,
            end = start + this.size;  
      return this.posts
               .slice(start, end);
               
                
               
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