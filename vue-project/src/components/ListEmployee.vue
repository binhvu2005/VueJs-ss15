<template>
    <v-container>
      <v-row>
        <v-col v-for="employee in employees" :key="employee.id" cols="12" md="4">
          <v-card>
            <v-card-title>{{ employee.name }}</v-card-title>
            <v-card-subtitle>Vị trí: {{ employee.position }}</v-card-subtitle>
            <v-card-actions>
              <v-btn color="primary" @click="viewDetails(employee.id)">Xem chi tiết</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const employees = [
    { id: 1, name: 'Nguyễn Văn A', position: 'Quản lý dự án' },
    { id: 2, name: 'Trần Thị B', position: 'Lập trình viên' },
    { id: 3, name: 'Lê Văn C', position: 'Thiết kế' }
  ]
  
  const viewDetails = (id) => {
    router.push({ name: 'EmployeeDetail', params: { id } })
  }
  </script>
  
  <style scoped>
  .v-card {
    margin-bottom: 20px;
  }
  </style>
  