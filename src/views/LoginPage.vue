<script lang="ts">
import {Options, Vue} from "vue-class-component";
import axios from "axios";
import {reactive, ref} from 'vue'
import type {FormInstance} from 'element-plus'

@Options({components: {},})
export default class LoginPage extends Vue {
  ruleForm = reactive({
    email: '',
    password: '',
  })

  ruleFormRef = ref<FormInstance>()

  validateEmail = (rule: any, value: string, callback: any) => {
    const validationRule = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if (!(validationRule.test(value))) {
      callback(new Error('Please input correct e-mail'))
    } else {
      callback()
    }
  }

  rules = reactive({
    email: [
      {required: true, message: 'Please input E-mail', trigger: 'blur'},
      {validator: this.validateEmail, trigger: 'blur'}
    ],
    password: [
      {required: true, message: 'Please input Password', trigger: 'blur'},
      {min: 3, max: 50, message: "Length should be 3 to 50", trigger: "blur"}
    ],
  })

  submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
        // console.log('submit!')
        axios.post("http://localhost:3000/login", {
          email: this.ruleForm.email,
          password: this.ruleForm.password
          // email: 'test@gmail.com',
          // password: '123456'
        }).then(response => {
          const token = response.data;
          localStorage.setItem("currentUser", JSON.stringify(token));
          console.log(this.$router);
          this.$router.push({name: 'Home'}); // ЗДЕСЬ ОШИБКА с "this.$router is undefined" !!!!!!
        }).catch(error => {
          console.log(error);
        });
      } else {
        console.log('error submit!')
        return false
      }
    })
  }

  resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
}
</script>

<template>
  <el-row justify="center">
    <el-col :span="6">
      <div>
        <h1>Login, please...</h1>
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
          <el-form-item label="E-mail" prop="email">
            <el-input data-test="email" v-model="ruleForm.email" type="text" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input data-test="password" v-model="ruleForm.password" type="password" autocomplete="off"/>
          </el-form-item>
          <el-form-item>
            <el-button data-test="submit" type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
            <el-button data-test="reset" @click="resetForm(ruleFormRef)">Reset</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
h1 {text-align: center;}
</style>