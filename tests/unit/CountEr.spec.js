import CountEr from '@/components/CountEr'
import { render, fireEvent } from '@testing-library/vue';
import { mount } from '@vue/test-utils'

 describe('CountView.vue', () => {
    it('increments counter by 1', () => {
        const wrapper = mount(CountEr);
        expect(wrapper.vm.value).toBe(1);
        wrapper.find("#add-1").trigger('click')
        expect(wrapper.vm.value).toBe(2);
    })
    it('increments counter by 10', () => {
        const wrapper = mount(CountEr);
        expect(wrapper.vm.value).toBe(1);
        wrapper.find("#add-10").trigger('click')
        expect(wrapper.vm.value).toBe(11);
    })
    it('decrements counter by 1', () => {
        const wrapper = mount(CountEr);
        expect(wrapper.vm.value).toBe(1);
        wrapper.find("#minus-1").trigger('click')
        expect(wrapper.vm.value).toBe(0);
        wrapper.find("#minus-1").trigger('click')
        wrapper.find("#minus-1").trigger('click')
        expect(wrapper.vm.value).toBe(0);
    })
    it('decrements counter by 10', () => {
        const wrapper = mount(CountEr);
        expect(wrapper.vm.value).toBe(1);
        wrapper.find("#minus-10").trigger('click')
        expect(wrapper.vm.value).toBe(-9);
    })
    it('Set the Value To Zero', () => {
        const wrapper = mount(CountEr);
        expect(wrapper.vm.value).toBe(1);
        wrapper.find("#reset").trigger('click')
        expect(wrapper.vm.value).toBe(0);
    })
 })
