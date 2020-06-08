import { shallowMount, createLocalVue} from '@vue/test-utils'
import EditPost from '@/views/EditPost.vue'
import router from '@/router'

const localVue = createLocalVue()
describe('EditPost', () => {
    const update = jest.fn()
    const wrapper = shallowMount(EditPost,{localVue, router,methods:{
        update
    }})
 
    it('Update button is rendered',()=>
   expect( wrapper.find(".update").exists()).toBe(true) )

   wrapper.find(".update").trigger('click')
   expect(update).toHaveBeenCalled()
})