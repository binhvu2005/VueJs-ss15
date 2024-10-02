<template>
    <v-container class="fill-height d-flex justify-center align-center">
      <v-card class="pa-5" max-width="500">
        <v-card-title>
          <h3>Đăng nhập</h3>
        </v-card-title>
  
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <!-- Trường Email -->
            <v-text-field
              v-model="email"
              label="Email"
              :rules="[rules.required, rules.email]"
              required
            ></v-text-field>
  
            <!-- Trường Mật khẩu -->
            <v-text-field
              v-model="password"
              label="Mật khẩu"
              type="password"
              :rules="[rules.required, rules.min(6)]"
              required
            ></v-text-field>
  
            <!-- Nút Đăng nhập -->
            <v-btn
              color="primary"
              @click="submit"
              :disabled="!valid"
              class="mt-4"
              block
            >
              Đăng nhập
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        password: "",
        valid: false,
        rules: {
          required: (v) => !!v || 'Bắt buộc.',
          email: (v) => /.+@.+\..+/.test(v) || 'Email không hợp lệ.',
          min: (min) => (v) => v.length >= min || `Phải có ít nhất ${min} ký tự.`,
        },
      };
    },
    methods: {
      submit() {
        if (this.$refs.form.validate()) {
          alert("Đăng nhập thành công!");
          // Thực hiện logic xử lý đăng nhập ở đây
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .fill-height {
    height: 100vh;
  }
  </style>
  