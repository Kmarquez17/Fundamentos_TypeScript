(() => {
  const prices = [1, 2, 56, 8, 6, 9, 'hola', true];
  prices.push(10);
  console.log('prices', prices);

  const products = ['hola', true];
  products.push(false);

  console.log('products', products);

  let mixed: (number | string | boolean | object)[] = []
  mixed.push(10);
  mixed.push('Kevin')
  mixed.push(true)
  mixed.push({})
  mixed.push([])
  console.log('mixed', mixed);

  let numbers = [1, 2, 56, 8, 6, 9]
  numbers.map(item => item * 2)
})();
