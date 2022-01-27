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
          imageUrl:
            'https://d3i5mgdwi2ze58.cloudfront.net/7hqv6ddaqv363p4hadx6lymotow1',
        },
        {
          title: 'Ulysses',
          author: 'James Joyce',
          year: 1922,
          imageUrl:
            'https://d3i5mgdwi2ze58.cloudfront.net/f7nkbyqfsnrrlct3hs01jkrz2vdi',
        },
        {
          title: 'Don Quixote',
          author: 'Miguel de Cervantes',
          year: 1605,
          imageUrl:
            'https://d3i5mgdwi2ze58.cloudfront.net/y4332t5mbkhbhkrjftg4jksj4tzw',
        },
        {
          title: 'One Hundred Years of Solitude',
          author: 'Gabriel Garcia Marquez',
          year: 1967,
          imageUrl:
            'https://d3i5mgdwi2ze58.cloudfront.net/j7koelfcv0va5zky4x1ccmpsgcsb',
        },
        {
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
          year: 1925,
          imageUrl:
            'https://d3i5mgdwi2ze58.cloudfront.net/m8sdet02cc7mdl8l6jow8cpl7co2',
        },
      ],
      offsetX: 0,
      offsetY: 0,
    };
  },

  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount('#app');
