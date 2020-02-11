export default class BookStoreService {
 data = [
  {
    id: 1,
    idx:100001,
    title: "Production-Ready Microservices",
    author: "Susan J. Fowler",
    count:1,
    price: 20,
    coverImage: "https://cv02.twirpx.net/2111/2111167.jpg?t=20161219031735"
  },
  {
    id: 2,
    idx:100002,
    title: "Release It!",
    author: "Michael T. Nygard",
    count:1,
    price: 30,
    coverImage: "https://cdn1.ozone.ru/multimedia/1018888532.jpg"
  }
];
  getBook() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(this.data);
        reject(new Error('something went wrong'))
      }, 600);
    });
  }


}
