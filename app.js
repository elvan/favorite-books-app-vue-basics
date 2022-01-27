// @ts-nocheck

const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        {
          title: 'In Search of Lost Time',
          author: 'Marcel Proust',
          year: 1913,
        },
        {
          title: 'Ulysses',
          author: 'James Joyce',
          year: 1922,
        },
        {
          title: 'Don Quixote',
          author: 'Miguel de Cervantes',
          year: 1605,
        },
        {
          title: 'One Hundred Years of Solitude',
          author: 'Gabriel Garcia Marquez',
          year: 1967,
        },
        {
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
          year: 1925,
        },
      ],
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
