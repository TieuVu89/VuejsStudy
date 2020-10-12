<template>
   <div id = "classbinding">
         <div v-bind:class = "[isActive ? infoclass : '', haserror ? errorclass : '']">{{title}}</div>
      </div>
</template>
<script>
export default {
   name:'classbinding',
   data(){
      return {
         title : "This is class binding example",
         infoclass : 'info',
         errorclass : 'displayError',
         isActive : true,
         haserror : false
      }
   }
    
}
</script>
<style>
     .info {
            color: #00529B;
            background-color: #BDE5F8;
         }
         div {
            margin: 10px 0;
            padding: 12px;
            font-size : 25px;
         }
         .active {
            color: #4F8A10;
            background-color: #DFF2BF;
         }
         .displayError{
            color: #D8000C;
            background-color: #FFBABA;
         }
</style>