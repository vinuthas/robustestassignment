import { shallowMount} from '@vue/test-utils'
import AddPosts from '@/views/AddPosts.vue'

describe('AddPosts', () => {
  const wrapper = shallowMount(AddPosts)
    it('has a created hook',()=>{
          
      expect (typeof AddPosts.created).toBe('function')
  })    
  it('has required methods',()=>
  {
      expect(typeof wrapper.vm.handlePost).toBe('function')
  })


})