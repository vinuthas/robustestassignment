import { shallowMount,mount,createLocalVue} from '@vue/test-utils'
import PostComments from '@/views/PostComments.vue'
import router from '@/router'


const localVue = createLocalVue()

describe('PostComments', () => {

  it('has a created hook',()=>{
    
    expect (typeof PostComments.created).toBe('function')
  })
  it("renders without any errors",async()=>
  {
    const wrapper = await shallowMount(PostComments,{localVue, router})
    expect(wrapper).toBeTruthy()
  })
    it('has a card div element',async()=>{
         const wrapper =await shallowMount(PostComments,{localVue, router})
  
      expect((wrapper.find(".post-comments")).exists()).toBe(true)
     })
  
})