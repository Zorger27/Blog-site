import { createStore } from 'vuex';
import Articles from "./modules/articles";

export default createStore({
  modules: { Articles }
})
