<template>
  <div>
    <nav>
      <router-link to="/" active-class="active-link"> Home </router-link>
      <router-link to="/contact" active-class="active-link"> Contact </router-link>
    </nav>
    <nav>
      <router-link to="/dashboard" active-class="active-link1"> dashboard </router-link>
      <router-link to="/account" active-class="active-link1"> account </router-link> 
      <router-link to="/product" active-class="active-link1"> product </router-link> 
    </nav>
    <ListUser/>
    <h1>bai 10</h1>
    <ListEmployee/>
    <router-view />
  </div>
</template>

<script setup>
import ListEmployee from './components/ListEmployee.vue';
import ListUser from './components/ListUser.vue';

</script>

<style>
.active-link1{
  background-color: blue;
color: #fff;
font-weight: 700
}
.active-link {
  font-weight: bold;
  background-color: blue;
  color: aliceblue;
  width: 100px;
  height: 30px;
  text-align: center;
  justify-content: center;
  border-radius: 10px;
}

nav {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

nav a {
  text-decoration: none;
  color: black;
  font-size: 18px;
}
</style>
