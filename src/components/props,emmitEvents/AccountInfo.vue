<template>
 <div id='account-info'>
   <button v-if="isPublished" @click='changeUsername()'>Change Username</button>
   {{username}}

    <h3>Number: {{ age }}</h3>
    <h3>Array: {{ commentIds }}</h3>
    <h3>Object: {{ author }}</h3>
    
    <h3>ContactsPromise: {{ contactsPromise }}</h3>
    <slot/>
    
 </div>
</template>
 
<script>
function Person(name, age) {
  this.name = name;
  this.age = age;
}

export default {
 props: {
  username: {
      type: String,
      // required: true
    },
    name: String,
  age: Number,
  
  isPublished: Boolean,
  commentIds: Array,
  author: {
    type: Object,
    // Object or array defaults must be returned from
    // a factory function
    default: function () {
      return { name: 'Mr. 007', email: 'james@bond.io' }
    }
  },

  callback: Function,
  contactsPromise: Person
 },
 methods: {
   changeUsername() {
     this.$emit('changeUsername')
   }
 },
 
}
</script>