<template>
    <div id = "rendering">
         <button v-on:click = "showdata" v-bind:style = "styleobj">Click Me</button>
         <span style = "font-size:25px;"><b>{{show}}</b></span>
         <h1 v-if = "show">This is h1 tag</h1>
         <h2 v-else>This is h2 tag</h2>
         <div v-show = "show">
            <b>V-Show:</b>
            <img src = "../assets/logo.png" width = "100" height = "100" />
         </div>
         <div >
         <input type = "text" v-on:keyup.enter = "showinputvalue"
            v-bind:style = "styleobj1" placeholder = "Enter Fruits Names"/>
         <h1 v-if = "items.length>0">Display Fruits Name</h1>
         <ul>
            <li v-for = "a in items" v-bind:key="a">{{a}}</li>
         </ul>
      </div>
      </div>
</template>
<script>
export default {
    name: 'rendering',
    data(){
        return {
            show: true,
               styleobj: {
                  backgroundColor: '#2196F3!important',
                  cursor: 'pointer',
                  padding: '8px 16px',
                  verticalAlign: 'middle',
                },
                items:[],
               styleobj1: {
                  width: "30%",
                  padding: "12px 20px",
                  margin: "8px 0",
                  boxSizing: "border-box"
               }
        }
    },
    methods : {
               showdata : function() {
                  this.show = !this.show;
               },
               showinputvalue : function(event) {
                  this.items.push(event.target.value);
               }
            },
    
}
</script>