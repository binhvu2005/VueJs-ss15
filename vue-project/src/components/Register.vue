<template>
    <v-container class="fill-height d-flex justify-center align-center">
      <v-card class="pa-5" max-width="800">
        <v-card-title>
          <h3>Đăng ký</h3>
        </v-card-title>
        
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              label="Họ và Tên"
              :rules="[rules.required]"
              required
            ></v-text-field>
  
            <v-text-field
              v-model="email"
              label="Email"
              :rules="[rules.required, rules.email]"
              required
            ></v-text-field>
  
            <v-text-field
              v-model="password"
              label="Mật khẩu"
              type="password"
              :rules="[rules.required, rules.min(6)]"
              required
            ></v-text-field>
            <v-btn
              color="primary"
              @click="submit"
              :disabled="!valid"
              class="mt-4"
              block
            >
              Đăng ký
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
import { ref } from 'vue';

  const name = ref('');
  const email = ref('');
  const password = ref('');
  const rules = {
    required: (value) =>!!value || 'Trư��ng này không được b�� trống',
    email: (value) => /.+@.+\..+/.test(value) || 'Email không h��p lệ',
    min: (value) => value.length >= 6 || 'Mật khẩu phải có ít nhất 6 ký tự',
  };
  const valid = ref(false);

 
     function submit() {
        if (this.$refs.form.validate()) {
          alert("Đăng ký thành công!");
        }
      }
 
  
  </script>
  
  <style scoped>
  .fill-height {
    height: 100vh;
  }
  </style>
  