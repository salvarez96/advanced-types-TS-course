import { addProduct, giveRandomNumber, sizesArr, products, updateProduct } from "./products/product.service";
import { faker } from '@faker-js/faker';

for (let i = 0; i < 5; i++) {
  addProduct({
    title: faker.commerce.productName(),
    stock: giveRandomNumber('stock'),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    price: giveRandomNumber('price'),
    isNew: faker.datatype.boolean(),
    tags: faker.datatype.array(5),
    size: faker.helpers.arrayElement(sizesArr),
    categoryId: faker.datatype.uuid()
  });
}

const product1 = products[0];

updateProduct(product1.id, {
  title: 'first product',
  stock: 69,
  description: 'just changing the first product for testing purposes',
  price: 420
});

console.log(products);
/*
products example:
[
  {
    title: 'producto',
    stock: 20,
    description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    image: 'https://loremflickr.com/640/480',
    color: 'grey',
    price: 933,
    isNew: true,
    tags: [ 14760, 'KCfE.-$5cT', 'i!$sD)ySrE', 71096, 'W0Mwzy][Ie' ],
    size: 'S',
    categoryId: '9cde4d0e-03bf-4eef-997b-e56861d76b55',
    id: 'db534843-d54b-4739-95f8-2d9e18df8915',
    createdAt: 2023-02-05T02:16:10.621Z,
    updatedAt: 2023-02-04T10:02:09.413Z,
    category: {
      id: '9cde4d0e-03bf-4eef-997b-e56861d76b55',
      title: 'Tools',
      createdAt: 2023-02-04T05:21:46.419Z,
      updatedAt: 2023-02-04T14:27:06.242Z
    }
  },
  {
    title: 'Luxurious Rubber Cheese',
    stock: 77,
    description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the
rear of the engine and four wheel drive',
    image: 'https://loremflickr.com/640/480',
    color: 'sky blue',
    price: 128,
    isNew: false,
    tags: [ ":YyWIo4'0H", 'I[UULk}f:7', 'z{6%&mG\\5L', '%UbLd*wxg0', 16768 ],
    size: 'XL',
    categoryId: 'abda4ce0-61af-4dc8-b444-879a087695c1',
    id: '5aa7fbc6-651b-4e64-b768-23755a1d4521',
    createdAt: 2023-02-05T01:41:22.948Z,
    updatedAt: 2023-02-04T15:28:33.021Z,
    category: {
      id: 'abda4ce0-61af-4dc8-b444-879a087695c1',
      title: 'Automotive',
      createdAt: 2023-02-04T05:41:42.121Z,
      updatedAt: 2023-02-04T18:39:56.115Z
    }
  },
  {
    title: 'Electronic Steel Car',
    stock: 37,
    description: 'The Football Is Good For Training And Recreational Purposes',
    image: 'https://loremflickr.com/640/480',
    color: 'red',
    price: 1477,
    isNew: false,
    tags: [ 4842, '07-*Bc?Jw)', 'yCBbW,2c{[', '7$w*:bO7qI', '<&&k8K3eSq' ],
    size: 'S',
    categoryId: 'f70e87aa-835d-4779-b0b8-7758cb550cb7',
    id: '7028de78-d793-4c3e-9c3e-fc4d8c7c1263',
    createdAt: 2023-02-04T11:56:14.104Z,
    updatedAt: 2023-02-04T10:51:24.579Z,
    category: {
      id: 'f70e87aa-835d-4779-b0b8-7758cb550cb7',
      title: 'Automotive',
      createdAt: 2023-02-04T18:47:47.107Z,
      updatedAt: 2023-02-04T19:17:49.911Z
    }
  },
  {
    title: 'Electronic Cotton Mouse',
    stock: 57,
    description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    image: 'https://loremflickr.com/640/480',
    color: 'turquoise',
    price: 895,
    isNew: true,
    tags: [ "{a'}V#cy6V", 2922, "|AXp!TAO'u", 79796, 78603 ],
    size: 'S',
    categoryId: '33381633-60fc-4558-90c9-6640f840554c',
    id: '85f7ff8e-d8d3-4939-9013-473f49d67c86',
    createdAt: 2023-02-04T10:20:46.173Z,
    updatedAt: 2023-02-04T03:11:44.803Z,
    category: {
      id: '33381633-60fc-4558-90c9-6640f840554c',
      title: 'Home',
      createdAt: 2023-02-04T06:47:59.867Z,
      updatedAt: 2023-02-04T05:33:15.504Z
    }
  },
  {
    title: 'Tasty Concrete Computer',
    stock: 61,
    description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
    image: 'https://loremflickr.com/640/480',
    color: 'plum',
    price: 124,
    isNew: false,
    tags: [ '=/6#b]xe-T', 89785, 98963, 91183, '_i-tz?;pY"' ],
    size: 'S',
    categoryId: '6232f4a8-d38c-46d6-891d-1cc0eb1c877a',
    id: 'eabb00bc-6476-47a5-8ce3-0b22d6f76832',
    createdAt: 2023-02-04T23:31:35.419Z,
    updatedAt: 2023-02-04T12:03:10.852Z,
    category: {
      id: '6232f4a8-d38c-46d6-891d-1cc0eb1c877a',
      title: 'Garden',
      createdAt: 2023-02-04T22:37:43.841Z,
      updatedAt: 2023-02-04T21:11:58.616Z
    }
  }
]
*/
