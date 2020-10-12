<template>
 <div id='account-info'>
    State: {{this.$store.state.user.username}} <br>
    Getter: <br> FirtName: {{ this.$store.getters.firstName }}  LastName: {{ this.$store.getters.lastName }}
    Mutations: {{ this.$store.commit("changeName", "Tieu Vu") }}
 </div>
</template>

<script>
export default {
 
}
</script>