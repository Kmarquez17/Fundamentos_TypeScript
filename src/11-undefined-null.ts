(() => {
  //   let myNumber: number = undefined;
  //   let myString: string = null;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  console.log('myNumber', myNumber);

  let myString: string | undefined = undefined;
  myString = 'Kevin';

  console.log('myString', myString);

  // function hi(name: string | null) {
  //   let hello = 'Hola ';
  //   if (name) {
  //     hello += name;
  //   } else {
  //     hello += 'Nadie';
  //   }

  //   return hello;
  // }

  function hi(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toUpperCase() || 'Nadie';

    return hello;
  }

  console.log(hi('Kevin'));
  console.log(hi(null));
})();
