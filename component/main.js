Vue.component('blog-post', {
  props: ['book'],
  template: "<p>{{ book.title + ' and ' + book.author }}</p>"
})

Vue.component('comp-child', {
  props: [],
  data: {},
  template: '',
})

var app = new Vue({
  el: "#app",
  data: {
    book: {
      'title': 'naoko',
      'author': 'naoki',
    }
  },
  components: {

  }
})
