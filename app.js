// @ts-nocheck

const app = Vue.createApp({
  data() {
    return {
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
  },
});

app.mount('#app');
