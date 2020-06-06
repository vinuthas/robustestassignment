import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PostDetails from  '../views/PostDetails.vue'
import EditPost from '../views/EditPost.vue'
import AddPosts from '../views/AddPosts.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: EditPost,
    props:true
  },
  {
    path: '/post-details/:id',
    name: 'post-details',
    component: PostDetails
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPosts
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
