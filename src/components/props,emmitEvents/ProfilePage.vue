<template>
 <div>
   <account-info :username="user.username" @changeUsername="user.username = 'new name'" v-bind:is-published="true"/>
   <account-info v-bind:age="23"></account-info>
   <account-info v-bind:comment-ids="[234, 266, 273]"></account-info>
   <account-info v-bind:author="{name: 'Veronica', company: 'Veridian Dynamics'}"></account-info>
   
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
       username: 'matt'
     }
   }
 }
}
</script>