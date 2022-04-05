(() => {
  let myDinamic: any;
  myDinamic = 10;
  myDinamic = null;
  myDinamic = false;


  myDinamic = 'Holaaaaaaa';
  const rta = (myDinamic as string).toLocaleLowerCase()
  console.log('rta', rta)

  myDinamic = 10;
  const rta2 = (<number>myDinamic).toFixed(2)
  console.log('rta2', rta2)
})();
