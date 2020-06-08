import { shallowMount,mount,createLocalVue} from '@vue/test-utils'
import ListPosts from '@/views/ListPosts.vue'


describe('ListPosts', () => {
  const wrapper = shallowMount(ListPosts)
  it('has a created hook',()=>{
    expect (typeof ListPosts.created).toBe('function')
  })
  it('has edit method',()=>{
    

    expect(typeof wrapper.vm.Edit).toBe('function')
  })
  it('has all required methods',()=>{
    expect(typeof wrapper.vm.prevPage).toBe('function')
    expect(typeof wrapper.vm.nextPage).toBe('function')
  })

})
