Vue.component('blog-post', {
  props: ['book'],
  template: "<p>{{ book.title + ' and ' + book.author }}</p>"
})

Vue.component('comp-child', {
  props: {
    id: Number,
    name: String,
    hp: Number,
  },
  template: '<li>{{ name }} HP.{{ hp }}<button v-on:click="doAttack">攻撃する</button></li>',
  methods: {
    doAttack: function () {
      this.$emit('attack', this.id)
    }
  },
})

var app = new Vue({
  el: "#app",
  data: {
    book: {
      'title': 'naoko',
      'author': 'naoki',
    },
    items: [{
        id: 1,
        name: "nao",
        hp: 100
      },
      {
        id: 2,
        name: "taro",
        hp: 200
      },
      {
        id: 3,
        name: "hanako",
        hp: 300
      },
    ]
  },
  methods: {
    handleAttack: function (id) {
      var item = this.items.find(function (el) {
        return el.id === id
      })
      if (item.hp !== undefined && item.hp > 0) {
        item.hp -= 10
      }
    }
  },
  components: {

  }
})
