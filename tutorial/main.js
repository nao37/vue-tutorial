var app = new Vue({
  el: '#app',
  methods: {
    handler: function (event) {
      console.log(event)
    },
    handleClick: function (event) {
      alert(event.target)
    },
    increment: function () {
      this.count++
    },
    doAdd: function () {
      var max = this.list.reduce(function (a, b) {
        return a.id > b.id ? a.id : b.id
      })
      this.list.push({
        id: max + 1,
        name: this.name,
        hp: 500,
      })
    },
    doRemove: function (index) {
      this.list.splice(index, 1)
    },
    doAttack: function (index) {
      if (this.list[index].hp > 0) {
        this.list[index].hp -= 10
      }
    },
  },
  data: {
    name: 'キマイラ',
    list: [],

    // list: [{
    //     id: 1,
    //     name: "スライム",
    //     hp: 100,
    //   },
    //   {
    //     id: 2,
    //     name: "ゴブリン",
    //     hp: 200
    //   },
    //   {
    //     id: 3,
    //     name: "ドラゴン",
    //     hp: 300,
    //   },
    // ]

    // ok: false,
    // message: '初期メッセージ',
    // show: true,
    // scroll: 0,
    // count: 0,
    // isChild: true,
    // isActive: true,
    // textColor: "red",
    // bgColor: "yellow",
    // item: {
    //   id: 1,
    //   src: "",
    //   alt: '商品サムネイル',
    //   width: 200,
    //   height: 200,
    // },
    // radius: 50,
  },
  // created: function () {
  //   axios.get('list.json').then(function (response) {
  //     this.list = response.data
  //   }.bind(this)).catch(function (error) {
  //     console.log(error)
  //   })
  // },
  mounted: function () {
    this.scroll = 100
  }
})
