<template>
 <div>
   <account-info :username="user.username" @changeUsername="user.username = 'new name'" v-bind:is-published="true"/>
   <account-info v-bind:age="user.age" @changeAge="user.age = 18"></account-info>
   <account-info v-bind:commentIds="user.commentIds" @changeCommentIds="user.commentIds = [21, 6, 1998]"></account-info>
   <account-info v-bind:author="user.author" @changeAuthor="user.author={name: 'Tieu Vu', company: 'SOC'}"></account-info>
   <!-- <account-info v-bind:contactsPromise="user.contactsPromise"></account-info> -->
   
   <p>Slot Example</p>
 </div>
</template>
 
<script>
import AccountInfo from "@/components/props,emmitEvents/AccountInfo.vue";
 
export default {
 components: {
   AccountInfo
 },
 data() {
   return {
     user: {
       username: 'matt',
       age: 23,
       commentIds: [234, 266, 273],
       author: {name: 'Veronica', company: 'Veridian Dynamics'},
      //  contactsPromise: ('vu',24)
     }
   }
 },
 methods:{
    changeAge2(){
      this.user.age = 18;
    }
}
}
</script>