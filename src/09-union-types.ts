(() => {
  let userId: string | number;
  userId = 121213;
  userId = 'Kevin';

  console.log('userId', userId);

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log('myText', myText.toLocaleUpperCase());
    } else {
      console.log('myText', myText.toFixed(1));
    }
  }

  greeting(2);
  greeting('Holaaaa');
})();
