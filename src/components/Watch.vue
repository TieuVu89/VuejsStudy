<template>
    <div id = "Watch">
         Kilometers : <input type = "text" v-model = "kilometers">
         Meters : <input type = "text" v-model = "meters">
      </div>
</template>
<script>
export default {
    name: 'Watch',
    data(){
        return {
            kilometers : 0,
            meters:0
        }
    },
     watch : {
               kilometers:function(val) {
                  this.kilometers = val;
                  this.meters = val * 1000;
               },
               meters : function (val) {
                  this.kilometers = val/ 1000;
                  this.meters = val;
               }
            }
    
}
</script>