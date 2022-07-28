<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {Coffee, Menu, Close} from '@element-plus/icons-vue';

@Options({components: {},})

export default class Header extends Vue {
  // activeIndex: string = "1";
  menuIsActive: boolean = false;
  lang: string = 'en';

  logout() {
    window.localStorage.clear();
    this.$router.push("login");
  }
  logo() {
    this.$router.push("about");
  }

  menuNav() {
    this.menuIsActive = !this.menuIsActive;
  }
  switchLang() {
    this.$i18n.locale = this.lang;
  }
}
</script>

<template>
  <el-header height="auto">
    <el-row justify="space-between">
      <el-col class="header-logo" :span="12">
          <img src="@/assets/img/header-logo.svg" alt="logo" @click="logo" title="Go to About">
      </el-col>
      <el-col class="header-menu" :span="12">
<!--        <el-button plain size="small" class="mobile-nav" @click="menuNav">-->
<!--          &lt;!&ndash;                      <i v-if="menuIsActive" class="el-icon-close"></i>&ndash;&gt;-->
<!--          &lt;!&ndash;                      <i v-else class="el-icon-menu"></i>&ndash;&gt;-->
<!--          <el-icon v-if="menuIsActive">-->
<!--            <Close/>-->
<!--          </el-icon>-->
<!--          <el-icon v-else>-->
<!--            <Menu/>-->
<!--          </el-icon>-->
<!--        </el-button>-->
        <div class="menuIsActive">
<!--                <div v-bind:class="{ '': !menuIsActive, 'isOpen': menuIsActive }">-->
            <router-link data-test="home" to="/">Home</router-link>
            <router-link data-test="about" to="/about">About</router-link>
            <router-link data-test="login" to="/login">Login</router-link>
        </div>
        <!--        <el-menu :default-active="activeIndex" mode="horizontal"-->
<!--                 v-bind:class="{ '': !menuIsActive, 'isOpen': menuIsActive }">-->
<!--          <el-menu-item index="1">-->
<!--&lt;!&ndash;            <router-link to="/">{{$t("menu.home")}}</router-link>&ndash;&gt;-->
<!--            <router-link data-test="home" to="/">Home</router-link>-->
<!--          </el-menu-item>-->
<!--          <el-menu-item index="2">-->
<!--&lt;!&ndash;            <router-link to="/about">{{$t("menu.about")}}</router-link>&ndash;&gt;-->
<!--            <router-link data-test="about" to="/about">About</router-link>-->
<!--          </el-menu-item>-->
<!--          <el-menu-item index="3">-->
<!--            <router-link to="/login">Login</router-link>-->
<!--          </el-menu-item>-->
<!--          &lt;!&ndash;          <el-menu-item index="4">&ndash;&gt;-->
<!--          &lt;!&ndash;            <router-link to="/404">404</router-link>&ndash;&gt;-->
<!--          &lt;!&ndash;          </el-menu-item>&ndash;&gt;-->
<!--        </el-menu>-->
<!--        <el-radio-group :change="switchLang()" v-model="lang" size="small">-->
        <el-radio-group v-model="lang" size="small">
          <el-radio-button data-test="ru" label="ru">UA</el-radio-button>
          <el-radio-button data-test="en" label="en">EN</el-radio-button>
        </el-radio-group>
        <el-button size="large" data-test="logout" @click="logout" class="logout-btn" type="info">
          <span class="text-block"><b>Logout</b></span>
<!--          <span class="text-block">{{$t("buttons.button-logout")}}</span>-->
<!--          <el-icon class="el-icon&#45;&#45;right"><Coffee/></el-icon>-->
<!--          <el-icon class="el-icon&#45;&#45;right"><img src="src/assets/icons/logout.png" alt="logout"/></el-icon>-->
        </el-button>
        <!--        <el-button class="logout-btn" size="mini" type="info"><i class="el-icon-toilet-paper"></i>-->
        <!--          <span class="text-block">Logout</span></el-button>-->
      </el-col>
    </el-row>
  </el-header>
</template>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  position: relative;
}

.header-menu {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.menuIsActive {
  display: flex;
  margin: 10px;

  a {
    border: 1px solid transparent;
    border-radius: 5px;
    margin-right: 10px;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    padding: 10px;
    color: darkblue;
  }

  a:hover {
    background-color: rgba(232, 186, 30, 0.2);
    border: 1px solid rgba(232, 186, 30, 0.9);
    box-shadow: 3px 3px 4px 0 lightgrey;
    //text-decoration: underline;
    //font-weight: bold;
    color: darkcyan;
  }

  a:focus {
    //background-color: mistyrose;
    background-color: rgba(232, 186, 30, 0.2);
    border: 1px solid rgba(232, 186, 30, 0.9);
    box-shadow: 3px 3px 4px 0 lightgrey;
    color: darkred;
    //font-weight: bold;
  }
}
.el-menu.el-menu--horizontal {
  border: none;
  outline: 0;
  a {
    font-size: 16px;
    text-decoration: none;
  }
  &.is-active {
    border: none;
  }
  .el-menu-item {
    background: transparent;
    margin-top: 10px;
    height: 36px;
  }
  @media (max-width: 768px) {
    display: none;
    opacity: 0;
    background: #585757;
  }
  &.isOpen {
    position: absolute;
    width: 100%;
    top: 60px;
    display: block;
    opacity: 1;
  }
}
.mobile-nav {
  display: none;
  margin: 15px 10px 0 0;
  font-size: 14px;
  height: 29px;
  padding: 0 5px;
  @media (max-width: 768px) {
    display: block;
  }
}
.header-logo {
  padding: 10px 10px 0 10px;
  display: flex;
  img {
    height: 49px;
    cursor: pointer;
  }
}
.el-radio-group {
  margin: -6px 15px 0 0;
}
.logout-btn {
  margin: 15px 25px 0 0;
  font-size: 14px;
  height: 29px;
  @media (max-width: 480px) {
    .text-block {
      display: none;
    }
  }
}
</style>
