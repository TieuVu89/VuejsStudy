<template>
 <div>
   <account-info :username="user.username" @changeUsername="user.username = 'new name'"/>
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