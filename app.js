// @ts-nocheck

const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'In Search of Lost Time',
      author: 'Marcel Proust',
      year: '1913',
      offsetX: 0,
      offsetY: 0,
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

    handleEvent($event, data) {
      console.log($event);

      if (data) {
        console.log(data);
      }
    },

    handleMouseMove($event) {
      this.offsetX = $event.offsetX;
      this.offsetY = $event.offsetY;
    },
  },
});

app.mount('#app');
