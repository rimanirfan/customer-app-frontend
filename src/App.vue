<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-default">
      <a class="navbar-brand" href="#">customerApp</a>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav mr-auto">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <router-link to="/add">Add Customer</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>

</style>
