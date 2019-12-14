<template>
 <div id="app">
        <div class="header">
            <input type="checkbox" class="allcheckinput" v-model="$store.state.alldone">
            <input type="text" class="newtodo" @keyup.enter="addnewtodo" v-model="$store.state.newtodo">
        </div>

        <ul>
            <li v-for="(i,index) in this.$store.getters.filtertodos" :class=" i.status?'completed':''"><input type="checkbox" v-model="i.status" class="checkinput">{{i.name}} <button @click="destodo(index)" class="destory">×</button></li>
        </ul>
        <div class="footer">
            <span>{{this.$store.state.todos.filter(i => !i.status).length}} items left</span>
            <button @click="$store.state.visib='all'">All</button>
            <button @click="$store.state.visib='undo'">Active</button>
            <button @click="$store.state.visib='do'">Completed</button>
            <button @click="delealldo()" v-if="this.$store.state.todos.filter(i => i.status).length">Clear Completed</button></div>

    </div>

</template>

<script>
import {store} from '../store'

export default {
  name: 'HelloWorld',
            methods: {
                addnewtodo: function() {
                   this.$store.commit('addnewtodo')
                },
                destodo: function(index) {
                   this.$store.commit('destodo')
                },
                delealldo: function() {
                    this.$store.commit('delealldo')
                }
            },
            watch: {
                '$store.state.alldone': function(val) {
                    return this.$store.state.todos = this.$store.state.todos.map(i => {
                        i.status = val;
                        return i;
                    })
                }
            }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
        body {
            background-color: #f5f5f5;
        }
        
        .completed {
            color: #d9d9d9;
            text-decoration: line-through;
        }
        
        .newtodo {
            outline: none;
            padding: 16px 16px 16px 0px;
            border: none;
            background: rgba(0, 0, 0, 0.003);
            box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
            position: relative;
            margin: 0;
            width: 90%;
            font-size: 24px;
            line-height: 1.4em;
        }
        
        ul {
            padding: 0;
            margin: 0;
        }
        
        #app {
            background-color: #fff;
        }
        
        li {
            font: 25px 'Helvetica Neue', Helvetica, Arial, sans-serif;
            word-break: break-all;
            padding: 16px 16px 16px 20px;
            display: block;
            line-height: 1.2;
            transition: color 0.4s;
            border-top: 1px solid gainsboro;
            border-bottom: 1px solid gainsboro;
            position: relative;
        }
        
        .checkinput {
            height: 30px;
            background: none;
            width: 40px;
            border: none;
            position: relative;
            top: 7px;
        }
        
        .allcheckinput {
            height: 30px;
            background: none;
            width: 40px;
            border: none;
            position: relative;
            top: 15px;
        }
        
        .header {
            display: flex;
            padding-left: 20px;
        }
        
        span {
            margin-right: 50px;
        }
        
        li:hover .destory {
            display: block;
        }
        
        .destory {
            position: absolute;
            top: 0;
            right: 10px;
            bottom: 0;
            width: 40px;
            height: 40px;
            margin: auto 0;
            font-size: 30px;
            color: #cc9a9a;
            margin-bottom: 11px;
            transition: color 0.2s ease-out;
            padding: 0;
            border: 0;
            background: none;
        }
        
        .footer {
            padding: 30px 0 20px 20px;
        }
    </style>
