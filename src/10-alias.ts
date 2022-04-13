(() => {
  type UserID = string | number;
  //   let userId: UserID;

  //Literal types
  type Sizes = 'L' | 'M' | 'S' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'L';
  shirtSize = 'M';
  shirtSize = 'S';
  shirtSize = 'XL';
  console.log('shirtSize', shirtSize);

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log('String', userId.toLocaleUpperCase(), size);
    }
  }

  greeting('Camisa Varonil', 'S');
})();
