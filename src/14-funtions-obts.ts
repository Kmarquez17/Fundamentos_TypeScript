(() => {
  const login = (data: { email: string; password: number }) => {
    console.log(data.email, data.password);
  };

  login({ email: 'marquezkrodriguez24@gmail.com', password: 12545 });

  type Sizes = 'L' | 'M' | 'S' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(data);
  };

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


  console.log(products);
})();
