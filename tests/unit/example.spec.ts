import { shallowMount } from "@vue/test-utils";
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import HelloWorld from "@/components/HelloWorld.vue";
import App from "@/App.vue";
import store from "@/store";
import router from "@/router";

createApp(App).use(ElementPlus).use(store).use(router).mount('#app')

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
