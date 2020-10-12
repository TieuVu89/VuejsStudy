<template>
     <div id = "event">
         <div v-bind:style = "styleobj" v-on:mouseover = "changebgcolor" v-on:mouseout = "originalcolor"></div>
         <button v-on:click.once = "buttonclickedonce" v-bind:style = "styleobj1">Click Once</button>
         Output:{{clicknum}}
         <br/><br/>
         <button v-on:click = "buttonclicked"  v-bind:style = "styleobj1">Click Me</button>
         Output:{{clicknum1}}
    </div>
</template>
<script>
export default {
    name: 'event',
    data(){
        return {
             num1: 100,
               num2 : 200,
               total : '',
               styleobj : {
                  width:"100px",
                  height:"100px",
                  backgroundColor:"red"
               },
                clicknum : 0,
               clicknum1 :0,
               styleobj1: {
                  backgroundColor: '#2196F3!important',
                  cursor: 'pointer',
                  padding: '8px 16px',
                  verticalAlign: 'middle',
               }
        }
    },
     methods : {
               changebgcolor : function() {
                  this.styleobj.backgroundColor = "green";
               },
               originalcolor : function() {
                  this.styleobj.backgroundColor = "red";
               },
                buttonclickedonce : function() {
                  this.clicknum++;
               },
               buttonclicked : function() {
                  this.clicknum1++;
               }
            },
}
</script>