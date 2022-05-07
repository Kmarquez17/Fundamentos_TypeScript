import { addProduct, calcStock, products } from './products.service';

addProduct({
  title: 'Swtich',
  createdAt: new Date(),
  stock: 10,
  size: 'L',
});

addProduct({
  title: 'PS5',
  createdAt: new Date(),
  stock: 20,
  size: 'XL',
});

addProduct({
  title: 'Xbox X',
  createdAt: new Date(),
  stock: 25,
  size: 'M',
});

console.log(products);
console.log(calcStock());
