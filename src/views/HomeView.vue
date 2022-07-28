<template>
  <div class="home">
    <el-row type="flex" justify="center">
      <el-col :span="12" class="articles-control">
        <el-input v-model="searchValue" placeholder="Searching..."/>
        <el-button type="primary" plain @click="changeView" title="Change Articles View">Change View</el-button>

        <!--        <el-tooltip effect="dark" content="Change view" placement="top-start">-->
<!--          &lt;!&ndash;          <el-button type="primary" :icon="Edit" circle />&ndash;&gt;-->
<!--          <el-button type="primary" :icon="viewMode ? 'el-icon-edit' : 'el-icon-star-off'" plain-->
<!--                     @click="changeView">Change View</el-button>-->
<!--        </el-tooltip>-->
      </el-col>
    </el-row>
    <div v-if="articles" :class="viewMode ? '' : 'block-view'">
      <ArticleView v-for="item in articles" v-bind:key="item.id" :item="item" :search="searchValue" :viewMode="viewMode"></ArticleView>
    </div>
    <div v-else>
      Page Empty
    </div>
    <!--    <h1>This is a Home page</h1>-->
    <!--    <i18n-n :value="100" format="currency"></i18n-n>-->
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import ArticleView from "@/components/ArticleView.vue";
import { namespace } from 'vuex-class';
const Articles = namespace('Articles');

// import {Edit} from '@element-plus/icons-vue';
// import HelloI18n from "@/components/HelloI18n.vue";

@Options({
  components: {
    ArticleView
  },
})
export default class home extends Vue {
  @Articles.State articles: any;
  searchValue: string = "";
  viewMode: boolean = true;

  changeView() {
    this.viewMode = !this.viewMode;
  }
};
</script>

<style lang="scss" scoped>
.articles-control {
  display: flex;
  justify-content: center;
  .el-input {
    width: 500px;
    margin: 0 10px 0 0;
    @media (max-width: 768px) {
      display: block;
      width: 100%;
      margin: 0 0 10px 0;
    }
  }
}
.block-view {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>
