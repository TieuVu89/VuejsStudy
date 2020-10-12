<template>
    <div id = "Home">
         FirstName : <input type = "text" v-model = "firstname" /> <br/><br/>
         LastName : <input type = "text" v-model = "lastname"/> <br/><br/>
         <h1>My name is {{firstname}} {{lastname}}</h1>
         <h1>Using computed method : {{getfullname}}</h1>
      </div>
</template>
<script>
export default {
    name: 'Home',
     data() {
         return {
            firstname :"",
            lastname :"",
            birthyear : ""
        }
     },
    computed :{
        getfullname : function(){
            return this.firstname +" "+ this.lastname;
        }
   } 
  
  }
</script>