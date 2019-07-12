var app = new Vue({
  el: '#app',
  methods: {
    handleClick: function (event) {
      alert(event.target)
    },
    increment: function () {
      this.count++
    }
  },
  data: {
    message: '初期メッセージ',
    show: true,
    scroll: 0,
    count: 0,
    isChild: true,
    isActive: true,
    textColor: "red",
    bgColor: "yellow",
    item: {
      id: 1,
      src: "",
      alt: '商品サムネイル',
      width: 200,
      height: 200,
    },
    radius: 50,
  },
  mounted: function () {
    this.scroll = 100
  }
})
