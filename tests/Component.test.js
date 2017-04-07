
import Vue from 'vue'
import Component from '../src/Component.vue'

describe('Component', () => {
    // Inspect the raw component options
    test('has a created hook', () => {
        expect(typeof Component.created).toBe('function')
    })

    // Evaluate the results of functions in
    // the raw component options
    test('sets the correct default data', () => {
        expect(typeof Component.data).toBe('function')
        const defaultData = Component.data()
        expect(defaultData.message).toBe('hello!')
    })

    // Inspect the component instance on mount
    test('correctly sets the message when created', () => {
        const vm = new Vue(Component).$mount()
        expect(vm.message).toBe('bye!')
    })

    // Mount an instance and inspect the render output
    test('renders the correct message', () => {
        const Ctor = Vue.extend(Component)
        const vm = new Ctor().$mount()
        expect(vm.$el.textContent).toBe('bye!')
    })
})
