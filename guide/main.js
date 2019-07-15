Vue.component('todo-item', {
  // todo-item コンポーネントはカスタム属性のような "プロパティ" で受け取ります。
  // このプロパティは todo と呼ばれます。
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
  el: "#app",
  data: {
    message: 'Hello Vue!',
  },
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
