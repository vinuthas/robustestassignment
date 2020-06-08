import { shallowMount,mount,createLocalVue} from '@vue/test-utils'
import ListPosts from '@/views/ListPosts.vue'

const wrapper = shallowMount(ListPosts)

describe('ListPosts', () => {

  it('has a created hook',()=>{
    expect (typeof ListPosts.created).toBe('function')
  })

})
