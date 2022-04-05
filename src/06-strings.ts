(() => {
  let productTittle = 'My amazing product';
  productTittle = 'My amazing product changed';

  console.log('productTittle', productTittle);

  const productDescription = "I'm is Nintendo Switch";
  console.log('productDescription', productDescription);

  let productPrice = 150;
  let isNew: boolean = true;

  const summary = `
        title:${productTittle}
        description: ${productDescription}
        price: ${productPrice}
        isNew: ${isNew}
    `;
  console.log('summary', summary);
})();
