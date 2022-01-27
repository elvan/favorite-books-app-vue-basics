// @ts-nocheck

const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'In Search of Lost Time',
      author: 'Marcel Proust',
      year: '1913',
    };
  },

  methods: {
    increase() {
      this.year++;
    },

    decrease() {
      this.year--;
    },

    changeTitle(title) {
      this.title = title;
    },

    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount('#app');
