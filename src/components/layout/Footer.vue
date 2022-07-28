<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({components: {},})

export default class Footer extends Vue {
  logoFooter() {
    this.$router.push("login");
  }
}
</script>

<template>
  <el-footer height="auto">
    <img src="@/assets/img/footer-logo.svg" alt="logo" class="footer-logo" @click="logoFooter" title="Go to Login">
    <p class="footer-text">Designed By <b><a href="https://zorger27.github.io" title="Curriculum VITAE" target="_blank">Zorger</a></b> for Project № 10 (29.07.2022)</p>

    <!--    <el-row>-->
<!--      <el-col :span="24">-->
<!--        <a href="/" class="footer-logo">-->
<!--          <img src="@/assets/img/footer-logo.svg" alt="logo">-->
<!--        </a>-->
<!--      </el-col>-->
<!--    </el-row>-->
<!--    <el-row>-->
<!--      <el-col :span="24" class="footer-text">-->
<!--        <p>Designed By Zorger for Project № 10 (28.07.2022)</p>-->
<!--      </el-col>-->
<!--    </el-row>-->
  </el-footer>
</template>

<style lang="scss" scoped>
.el-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  //text-align: center;
  background-color: #9b9b9b;
  img {
    width: 120px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    padding: 60px 0;
  }
}
.footer-logo {
  //display: inline-block;
  //margin-bottom: 20px;
  margin-right: 30px;
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
}
.footer-text {
  font-size: 22px;
  font-style: italic;
  letter-spacing: 1px;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 14px;
  }
}
</style>