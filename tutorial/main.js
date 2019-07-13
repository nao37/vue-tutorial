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
    methodData: function () {
      return Math.random()
    },
  },
  watch: {
    current: {
      handler: function (val) {
        axios.get('https://api.github.com/search/repositories', {
          params: {
            q: 'topic:' + val
          }
        }).then(function (response) {
          this.list = response.data.items
        }.bind(this))
      }
    },
    list: {
      handler: function () {
        console.log('通常：' + this.$refs.list.offsetHeight)

        this.$nextTick(function () {
          console.log('nextTick：' + this.$refs.list.offsetHeight)
        })
      },
    },
    // list: {
    //   handler: function (newVal, oldVal) {
    //     console.log('かわったよ')
    //   },
    //   deep: true,
    //   immediate: true,
    // },
  },
  computed: {
    // sorted: function () {
    //   return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')
    // },
    halfWidth: {
      get: function () {
        return this.width / 2
      },
      set: function (val) {
        this.width = val * 2
      }
    },
    halfHeight: function () {
      return this.height / 2
    },
    halfPosition: function () {
      return {
        x: this.halfWidth,
        y: this.halfHeight,
      }
    },
    computedData: function () {
      return Math.random()
    },
    matched: function () {
      return this.list.filter(function (el) {
        return el.price <= this.budget
      }, this)
    },
    limitted: function () {
      return this.matched.slice(0, this.limit)
    },
  },
  filters: {
    localeNum: function (val) {
      return val.toLocaleString()
    }
  },
  data: {
    list: [],
    price: 19800,
    // list: [],
    // current: '',
    // topics: [{
    //     value: 'vue',
    //     name: 'Vue.js'
    //   },
    //   {
    //     value: 'jQuery',
    //     name: 'jQuery'
    //   },
    // ],
    // order: false,
    // budget: 3000,
    // limit: 20,
    // list: [{
    //     id: 1,
    //     name: "りんご",
    //     price: 100
    //   },
    //   {
    //     id: 2,
    //     name: "ばなな",
    //     price: 200
    //   },
    //   {
    //     id: 3,
    //     name: "いちご",
    //     price: 500
    //   },
    //   {
    //     id: 4,
    //     name: "おれんじ",
    //     price: 400
    //   },
    //   {
    //     id: 5,
    //     name: "めろん",
    //     price: 500
    //   },
    // ],
    // name: 'キマイラ',
    // list: [],
    // width: 800,
    // height: 600,
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
  // mounted: function () {
  // this.scroll = 100
  // }
})
