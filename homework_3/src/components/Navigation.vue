<template>
    <nav>
    <router-link to="/">Main</router-link>
    <router-link to="/signup">Signup</router-link>
    </nav>
</template>


<script>
export default {
    name: "Navigation"
}
</script>


<style>

nav {
  padding: 30px;
  background-color: black;
  border-radius: 20px;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  padding: 15px;
  margin: 10px;
  transition-duration: 0.4s;
  border-radius: 20px;
  background-color: rgb(0, 0, 0);
  color: lightgreen;
  border: thin solid lightgreen;
}

nav a.router-link-exact-active {
  color: #f8fffc;
  text-decoration: underline;
}

nav a:hover {
  background-color: rgb(83, 83, 83);
  border-radius: 20px;
}

</style>

