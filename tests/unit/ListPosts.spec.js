import { shallowMount,mount,createLocalVue} from '@vue/test-utils'
import ListPosts from '@/views/ListPosts.vue'



const wrapper = shallowMount(ListPosts)

describe('ListPosts', () => {

  it('has a created hook',()=>{
    expect (typeof ListPosts.created).toBe('function')
  })

})
/*jest.mock('http://localhost:3000/posts',()=>({
  getPosts: jest.fn(()=>{
    return new Promise(resolve =>{
      process.nextTick(()=>{
        resolve({
          data:[
            {title: 'Tile1',body:"jhjhxxshjhx",id:1}
          ]
        })
      })
    })
  })
}))
*/