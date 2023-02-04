import { addProduct, giveRandomNumber, sizesArr, products } from "./products/product.service";
import { faker } from '@faker-js/faker';

for (let i = 0; i < 10; i++) {
  addProduct({
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: giveRandomNumber('stock'),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    price: giveRandomNumber('price'),
    isNew: faker.datatype.boolean(),
    tags: faker.datatype.array(5),
    category: {
      id: faker.datatype.uuid(),
      title: faker.commerce.department(),
      createdAt: faker.date.recent(),
    },
    size: faker.helpers.arrayElement(sizesArr)
  });
}

console.log(products);

/*
products example:
[
  {
    id: '7ca5c1eb-6ac7-47c6-8f17-f064df820a5b',
    title: 'Rustic Steel Tuna',
    createdAt: 2023-02-03T19:56:31.684Z,
    updatedAt: 2023-02-04T01:20:16.257Z,
    stock: 57,
    description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
    image: 'https://loremflickr.com/640/480',
    color: 'orange',
    price: 425,
    isNew: true,
    tags: [ '=]de_Qa.Z"', 'Sf^LlOz0@d', 'ZZ)B.#UJ5K', '|+|JsqH#v@', 58588 ],
    category: {
      id: 'caa93026-8cd4-4f16-89f1-9c4908b9155a',
      title: 'Beauty',
      createdAt: 2023-02-03T19:51:52.852Z
    },
    size: 'L'
  },
  {
    id: '2292e29b-1984-40da-9dbf-3c95086111c7',
    title: 'Ergonomic Soft Salad',
    createdAt: 2023-02-03T20:54:40.344Z,
    updatedAt: 2023-02-03T23:26:49.475Z,
    stock: 26,
    description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    image: 'https://loremflickr.com/640/480',
    color: 'fuchsia',
    price: 1423,
    isNew: false,
    tags: [ 'X"s)\\zg\\BV', 50484, '0a3vq^MwaM', '^g^:]o`|!F', 84996 ],
    category: {
      id: '7cbcf41b-28c9-42d1-811e-aeb2eb5a6a5a',
      title: 'Sports',
      createdAt: 2023-02-03T23:11:23.272Z
    },
    size: 'XL'
  },
  {
    id: 'ed6130ee-9d1e-479a-b094-f82f81be395c',
    title: 'Tasty Rubber Soap',
    createdAt: 2023-02-03T22:43:41.002Z,
    updatedAt: 2023-02-03T15:23:57.572Z,
    stock: 44,
    description: 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    image: 'https://loremflickr.com/640/480',
    color: 'azure',
    price: 39,
    isNew: false,
    tags: [ '(J$,@`F+I7', 9312, ')-6halh^B=', 'OwCHMf$.a&', 15846 ],
    category: {
      id: '503cb9e6-072a-4b1a-ab87-d453f4e81c5c',
      title: 'Sports',
      createdAt: 2023-02-03T10:57:51.128Z
    },
    size: 'S'
  },
  {
    id: 'e7ae7660-aa76-4e1c-b243-d6531aa8652e',
    title: 'Luxurious Granite Mouse',
    createdAt: 2023-02-03T06:29:41.592Z,
    updatedAt: 2023-02-03T20:59:12.219Z,
    stock: 79,
    description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    image: 'https://loremflickr.com/640/480',
    color: 'blue',
    price: 547,
    isNew: true,
    tags: [ 99750, 'H;u7ZF7<WC', '&/v#MGcS0"', "=$-':46CN;", 43608 ],
    category: {
      id: 'c924ddf0-2f24-4edc-9b58-ef416192b997',
      title: 'Garden',
      createdAt: 2023-02-03T20:25:40.791Z
    },
    size: 'L'
  },
  {
    id: '1537d92c-8139-474b-bcee-e57b1d3970bc',
    title: 'Generic Granite Table',
    createdAt: 2023-02-03T07:32:14.289Z,
    updatedAt: 2023-02-03T14:03:40.437Z,
    stock: 29,
    description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    image: 'https://loremflickr.com/640/480',
    color: 'mint green',
    price: 846,
    isNew: true,
    tags: [ 'i&]eXz;iM/', '*?gsFzy%u}', 70447, 43851, 66997 ],
    category: {
      id: 'cd1f594b-62a0-4dda-a05f-64217bc107cf',
      title: 'Jewelery',
      createdAt: 2023-02-04T02:03:13.585Z
    },
    size: 'XL'
  },
  {
    id: '934ddd79-851d-4b8a-8e4d-7145ddc8d453',
    title: 'Recycled Fresh Gloves',
    createdAt: 2023-02-03T18:41:19.863Z,
    updatedAt: 2023-02-03T10:48:18.693Z,
    stock: 23,
    description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    image: 'https://loremflickr.com/640/480',
    color: 'purple',
    price: 1281,
    isNew: true,
    tags: [ 86948, 'cE.$B1^.Dj', "pT'$5tjeq&", 35, 'Ykv2,&$"{U' ],
    category: {
      id: '8249af6e-076a-472d-9aeb-f802fa74a788',
      title: 'Kids',
      createdAt: 2023-02-03T21:16:43.050Z
    },
    size: 'L'
  },
  {
    id: '5ae7bb6a-d1a9-4cfd-acee-6f5907c1c473',
    title: 'Rustic Granite Table',
    createdAt: 2023-02-04T01:44:49.993Z,
    updatedAt: 2023-02-03T12:21:12.986Z,
    stock: 67,
    description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    image: 'https://loremflickr.com/640/480',
    color: 'red',
    price: 203,
    isNew: false,
    tags: [ 10996, '8pe;yDXlVO', 72633, 62062, '}eRne!4E5W' ],
    category: {
      id: 'd5685b3a-83ae-4b3f-837b-fe58e8f29f49',
      title: 'Shoes',
      createdAt: 2023-02-03T09:45:32.489Z
    },
    size: 'M'
  },
  {
    id: '4a3a014d-2962-4551-a4e0-489cc7341f23',
    title: 'Electronic Rubber Keyboard',
    createdAt: 2023-02-03T08:36:10.594Z,
    updatedAt: 2023-02-04T03:37:24.297Z,
    stock: 63,
    description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    image: 'https://loremflickr.com/640/480',
    color: 'white',
    price: 1341,
    isNew: true,
    tags: [ "|%'L%74E;l", 35459, "/u$lv{'jac", 'Kl[nU#ggLI', 40914 ],
    category: {
      id: '99c311a4-a13d-4b14-a0ac-e6790fe9c522',
      title: 'Kids',
      createdAt: 2023-02-03T23:38:54.093Z
    },
    size: 'XL'
  },
  {
    id: '5a65a028-9866-49e0-96db-5de8f49e1b68',
    title: 'Recycled Plastic Soap',
    createdAt: 2023-02-03T08:00:29.640Z,
    updatedAt: 2023-02-03T08:29:07.010Z,
    stock: 29,
    description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    image: 'https://loremflickr.com/640/480',
    color: 'salmon',
    price: 1338,
    isNew: true,
    tags: [ 'hp({^6_?q&', 'EDhxTVRmuL', '%w@o)n7.4G', 70940, 28914 ],
    category: {
      id: 'cf175b58-9fbc-4de0-9239-c43577b7ec87',
      title: 'Toys',
      createdAt: 2023-02-04T05:13:45.389Z
    },
    size: 'XL'
  },
  {
    id: 'dff37066-7abf-42a8-9b93-b55368dd0b74',
    title: 'Rustic Soft Mouse',
    createdAt: 2023-02-03T18:47:48.743Z,
    updatedAt: 2023-02-04T05:46:33.638Z,
    stock: 12,
    description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the
rear of the engine and four wheel drive',
    image: 'https://loremflickr.com/640/480',
    color: 'purple',
    price: 640,
    isNew: false,
    tags: [ 8570, 'U)&/rDGYk|', `Qz'y*-n"'m`, 'niP5u73b&s', 84814 ],
    category: {
      id: 'cc6fbda8-a540-4654-9f51-e9f2e417f8ed',
      title: 'Outdoors',
      createdAt: 2023-02-04T04:13:50.097Z
    },
    size: 'L'
  }
]
*/
