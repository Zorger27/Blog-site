// @ts-ignore
import { shallowMount, createLocalVue } from "@vue/test-utils";
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import HomePage from "@/views/HomeView.vue";
import * as Vuex from 'vuex';
import App from "@/App.vue";
import store from "@/store";
import router from "@/router";

createApp(App).use(ElementPlus).use(store).use(router).mount('#app')

const localVue = createLocalVue()
localVue.use(Vuex)
describe("Home.vue", () => {
  const $t = jest.fn();
  const store = new Vuex.Store({
    modules: {
      Articles: {
        namespaced: true,
      }
    }
  })
  let wrapper
  beforeEach(()=>{
    wrapper = shallowMount(HomePage, {
      localVue,
      store,
      mocks: {
        $t,
      }
    })
  })
  it("Check default value", () => {
    expect(wrapper.vm.searchValue).toBeFalsy();
    expect(wrapper.vm.viewMode).toBeTruthy();
  });
  it("Check function changeView", () => {
    wrapper.vm.changeView();
    expect(wrapper.vm.viewMode).toBeFalsy();
  });
  it("Call function changeView", () => {
    wrapper.vm.changeView = jest.fn();
    wrapper.vm.changeView();
    expect(wrapper.vm.changeView).toHaveBeenCalled();
  });
});
