import { shallowMount,mount} from '@vue/test-utils'
import Home from '@/views/Home.vue'


const wrapper = shallowMount(Home)

describe('Home', () => {
  
it('list-post component is rendered',()=>{
    expect (wrapper.findComponent({name : "list-posts"}).exists()).toBe(true)
  })


  it('button to create new post is rendered',()=>{
    expect (wrapper.find(".new-post").exists()).toBe(true)
  })

  it('has a created hook',()=>{
    expect (typeof Home.created).toBe('function')
  })
  
  it('required method is found',()=>{
    expect(typeof Home.methods.navigate).toBe('function')
    expect(typeof Home.methods.deletePost).toBe('function')
  })

})
