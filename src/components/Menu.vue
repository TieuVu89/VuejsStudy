<template>
  <div>
    
      <template  >
        <div class="home">
        <div class="p-3 navbar-left">          
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item><router-link to='/computed'>Computed</router-link></b-nav-item>
              <b-nav-item><router-link to='/watch'>Watch</router-link></b-nav-item>
              <b-nav-item><router-link to='/binding'>Binding</router-link></b-nav-item>
              <b-nav-item><router-link to='/event'>Event</router-link></b-nav-item>
              <b-nav-item><router-link to='/rendering'>Rendering</router-link></b-nav-item>
              <b-nav-item><router-link to='/props'>Props</router-link></b-nav-item>
              <b-nav-item><router-link to='/vuex'>Vuex</router-link></b-nav-item>
              <b-nav-item><router-link to='/vuex-ver2'>Vuex-ver2</router-link></b-nav-item>
              <b-nav-item><router-link to='/axios'>Axios</router-link></b-nav-item>
              <b-nav-item><router-link to='/Home'>TodoApp</router-link></b-nav-item>
              
            </b-nav>
          </nav>
          
        </div>
        <div>
        <router-view />
        </div>
        </div>
      </template>
    
    
  </div>
</template>
 

<script>
export default {
 
  
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  display: flex;
}
.navbar-left{
  background-color: rgb(18, 18, 58);
  top: 0;
  left: 0;
}
.btn-click{
  float: left;
  margin-top: 10px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    .row.content {height: 550px}
    
    /* Set gray background color and 100% height */
    .sidenav {
      background-color: #f1f1f1;
      height: 100%;
    }
        
    /* On small screens, set height to 'auto' for the grid */
    @media screen and (max-width: 767px) {
      .row.content {height: auto;} 
    }
</style>
