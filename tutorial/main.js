var app = new Vue({
  el: '#app',
  methods: {
    handleClick: function (event) {
      alert(event.target)
    }
  },
  data: {
    message: '初期メッセージ',
    show: true,
  }
})
