    import Vue from 'vue'
    import Vuex from 'vuex'
    Vue.use(Vuex)

    export const store = new Vuex.Store({
        state: {
            todos: [{
                name: "123",
                status: true
            }],
            alldone: false,
            newtodo: "",
            visib: "all"
        },
        mutations: {
            addnewtodo: function() {
                var todo = {
                    name: store.state.newtodo,
                    status: false
                }
                store.state.todos.push(todo);
                store.state.newtodo = "";
            },
            destodo: function(index) {
                store.state.todos.splice(index, 1);
            },
            delealldo: function() {
                store.state.todos = store.state.todos.filter(i => !i.status);
            }
        },
        getters: {
            filtertodos: function() {
                if (store.state.visib == "all")
                    return store.state.todos;
                else if (store.state.visib == "undo") {
                    return store.state.todos.filter(i => !i.status)
                } else if (store.state.visib == "do") {
                    return store.state.todos.filter(i => i.status)
                }
            }
        }
    })