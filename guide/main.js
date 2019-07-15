Vue.component('todo-item', {
  // todo-item コンポーネントはカスタム属性のような "プロパティ" で受け取ります。
  // このプロパティは todo と呼ばれます。
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

Vue.component('todo-item', {
  template: '<li>{{ title }}<button v-on:click="$emit(\'remove\')">Remove</button></li>',
  props: ['title'],
})

var app = new Vue({
  el: "#app",
  data: {
    message: 'Hello Vue!',
  }
})

new Vue({
  el: "#todo-list-example",
  data: {
    todos: [{
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    newTodoText: "",
    nextTodoId: 4,
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})

var app2 = new Vue({
  el: "#app2",
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString(),
    groceryList: [{
      id: 1,
      text: "Vegetables",
    }, {
      id: 2,
      text: "Cheese",
    }, {
      id: 3,
      text: "Whatever else humans are supposed to eat",
    }, ]
  }
})
