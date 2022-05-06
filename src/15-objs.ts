(() => {
    type Sizes = 'L' | 'M' | 'S' | 'XL';
    type Product = {
        title: string;
        createdAt: Date;
        stock: number;
        size?: Sizes;
      }
  
    const products: Product[] = [];
  
    const addProduct = (data:Product) => {
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

    addProduct({
        title: 'Xbox X',
        createdAt: new Date(),
        stock: 20,
        size: 'M',
      });
  
  
    console.log(products);
  })();
  