function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    // Calculate profit if selling today
    let profit = prices[i] - minPrice;

    if (profit > maxProfit) {
      maxProfit = profit;
    }

    // Update minimum price
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }

  return maxProfit;
}

module.exports = maxProfit;
