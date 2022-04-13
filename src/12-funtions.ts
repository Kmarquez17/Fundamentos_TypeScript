(() => {
  type Sizes = 'L' | 'M' | 'S' | 'XL';
  function createProductoJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

  const product1 = createProductoJson('Swtich', new Date(), 10, 'L');

  console.log(product1.title);
  console.log(product1.stock);

  const createProductoJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes 
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };

  const product2 = createProductoJsonV2('Ps5', new Date(), 2);
  console.log('\n')
  console.log(product2.title);
  console.log(product2.stock);
  console.log(product2.size);
})();
