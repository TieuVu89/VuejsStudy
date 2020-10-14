<template>
  <div>
  <table v-if="posts && posts.length">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody v-for="post of posts" v-bind:key="post.id">
    <tr>
      <td>{{ post.id }}</td>
      <td>{{ post.name }}</td>
      <td>{{ post.username }}</td>
      <td>{{ post.email }}</td>
      <td>{{ post.address.city }}</td>
      <td>{{ post.phone }}</td>
    </tr>
    </tbody>

  </table>

</div>
  <!-- <ul v-if="errors && errors.length">
    <li v-for="error of errors" v-bind:key="error.message">
      {{error.message}}
    </li>
  </ul> -->
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  // lấy dữ liệu khi component được tạo thành công
  created() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>