(() => {
  const calTotal = (prices: number[]): number => {
    let total = 0;

    prices.forEach((item) => {
      total += item;
    });
    return total;
  };

  const printTotal = (prices: number[]) => {
    const result = calTotal(prices);
    console.log('El total es', result);
  };

  printTotal([1, 2, 10, 4, 5]);
})();
