<template>
    <v-container>
      <v-row>
        <v-col v-for="user in users" :key="user.id" cols="12" md="4">
          <v-card>
            <v-card-title>{{ user.name }}</v-card-title>
            <v-card-subtitle>{{ user.email }}</v-card-subtitle>
            <v-card-text>{{ user.address }}</v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="viewDetails(user.id)">Xem chi tiết</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const users = [
    { id: 1, name: 'Nguyễn Văn A', email: 'nguyenvana@gmail.com', address: 'Hà Nội' },
    { id: 2, name: 'Trần Thị B', email: 'tranthib@gmail.com', address: 'TP HCM' },
    { id: 3, name: 'Lê Văn C', email: 'levanc@gmail.com', address: 'Đà Nẵng' }
  ]
  
  const router = useRouter()
  
  const viewDetails = (id) => {
    router.push({ name: 'UserDetail', params: { id } })
  }
  </script>
  
  <style scoped>
  .v-card {
    margin-bottom: 20px;
  }
  </style>
  