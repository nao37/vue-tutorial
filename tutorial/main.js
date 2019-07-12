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
  },
  mounted: function () {
    this.scroll = 100
  }
})
